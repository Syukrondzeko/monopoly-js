// Enhanced AI with strategic decision making
function AITest(p) {
	this.alertList = "";

	// This variable is static, it is not related to each instance.
	this.constructor.count++;

	p.name = "AI " + this.constructor.count;

	// Calculate strategic value of a property
	var getPropertyValue = function(index) {
		var s = square[index];
		var groupSize = s.group ? s.group.length : 0;
		var propertiesOwned = 0;
		var value = s.price;

		// Properties with no group (special squares)
		if (!s.group || groupSize === 0) return 0;

		// Count how many properties in this group we own
		if (groupSize > 0) {
			for (var i = 0; i < groupSize; i++) {
				if (square[s.group[i]].owner === p.index) {
					propertiesOwned++;
				}
			}
		}

		// Boost value if we own multiple properties in the group
		var groupCompletion = propertiesOwned / groupSize;
		
		// Special boost for completing a monopoly
		if (propertiesOwned === groupSize - 1) {
			value *= 5;
		} else if (propertiesOwned > 0) {
			value *= (2 + groupCompletion * 2);
		}

		// Higher value for properties that land more frequently
		// Red (31-33), Orange (37-39), Yellow (24-26) are landed on more
		if (index >= 31 && index <= 39) value *= 1.3; // Red and Orange
		if (index >= 24 && index <= 26) value *= 1.2; // Yellow
		if (index >= 6 && index <= 8) value *= 1.1;   // Light Blue

		return value;
	};

	// Decide whether to buy a property
	this.buyProperty = function(index) {
		var s = square[index];
		var propertyValue = getPropertyValue(index);
		var minCash = 150; // Keep at least this much for emergencies

		// Don't buy if we need cash
		if (p.money < s.price + minCash) {
			return false;
		}

		// Smart buying based on strategic value
		var strategicWorth = propertyValue / s.price;
		
		// Buy if it completes or advances a monopoly
		if (strategicWorth > 2) {
			return true;
		}

		// Buy railroads and utilities if cheap enough
		if (s.groupNumber === 1 || s.groupNumber === 2) {
			return true;
		}

		// Buy color properties with strategic value
		if (strategicWorth > 1.2 && p.money > s.price + minCash) {
			return true;
		}

		return false;
	};

	this.acceptTrade = function(tradeObj) {
		var tradeValue = 0;
		var money = tradeObj.getMoney();
		var initiator = tradeObj.getInitiator();
		var recipient = tradeObj.getRecipient();
		var property = [];
		var ourPropertyValue = 0;
		var theirPropertyValue = 0;

		tradeValue += 10 * tradeObj.getCommunityChestJailCard();
		tradeValue += 10 * tradeObj.getChanceJailCard();
		tradeValue += money;

		for (var i = 0; i < 40; i++) {
			property[i] = tradeObj.getProperty(i);
			var propVal = getPropertyValue(i);
			
			if (property[i] > 0) {
				ourPropertyValue += propVal;
			} else if (property[i] < 0) {
				theirPropertyValue += propVal;
			}
		}

		tradeValue += ourPropertyValue - theirPropertyValue;

		// Don't trade if it significantly hurts us or helps opponent complete monopoly
		if (tradeValue < -100) {
			return false;
		}

		// Accept good trades
		if (tradeValue > 50) {
			return true;
		}

		// Counter offer for marginal trades
		if (tradeValue >= -50 && initiator.money > (50 - tradeValue)) {
			return new Trade(initiator, recipient, 50 - tradeValue, property, 
				tradeObj.getCommunityChestJailCard(), tradeObj.getChanceJailCard());
		}

		return false;
	};

	this.beforeTurn = function() {
		var s;
		var allGroupOwned;
		var max;
		var leastHouseProperty;
		var leastHouseNumber;
		var minReserve = 200; // Keep cash for emergencies

		// Buy houses strategically
		for (var i = 0; i < 40; i++) {
			s = square[i];

			if (s.owner === p.index && s.groupNumber >= 3) {
				max = s.group.length;
				allGroupOwned = true;
				leastHouseNumber = 6;

				for (var j = max - 1; j >= 0; j--) {
					if (square[s.group[j]].owner !== p.index) {
						allGroupOwned = false;
						break;
					}

					if (square[s.group[j]].house < leastHouseNumber) {
						leastHouseProperty = square[s.group[j]];
						leastHouseNumber = leastHouseProperty.house;
					}
				}

				if (!allGroupOwned) continue;

				// Buy houses if we have enough cash and it's valuable
				if (p.money > leastHouseProperty.houseprice + minReserve) {
					// Prioritize properties with higher traffic
					var trafficIndex = leastHouseProperty.index;
					var shouldBuy = false;

					// High traffic areas
					if ((trafficIndex >= 31 && trafficIndex <= 39) || 
					    (trafficIndex >= 24 && trafficIndex <= 26)) {
						shouldBuy = true;
					}

					if (shouldBuy) {
						buyHouse(leastHouseProperty.index);
					}
				}
			}
		}

		// Unmortgage properties strategically
		for (var i = 39; i >= 0; i--) {
			s = square[i];

			if (s.owner === p.index && s.mortgage && p.money > s.price * 1.1 + minReserve) {
				unmortgage(i);
			}
		}

		return false;
	};

	var utilityForRailroadFlag = true;

	this.onLand = function() {
		var proposedTrade;
		var property = new Array(40).fill(0);
		var railroadIndexes = [5, 15, 25, 35];
		var requestedRailroad;
		var offeredUtility;
		var s;

		// If AI owns exactly one utility, try to trade it for a railroad
		for (var i = 0; i < 4; i++) {
			s = square[railroadIndexes[i]];

			if (s.owner !== 0 && s.owner !== p.index) {
				requestedRailroad = s.index;
				break;
			}
		}

		if (square[12].owner === p.index && square[28].owner !== p.index) {
			offeredUtility = 12;
		} else if (square[28].owner === p.index && square[12].owner !== p.index) {
			offeredUtility = 28;
		}

		if (utilityForRailroadFlag && game.getDie(1) !== game.getDie(2) && requestedRailroad && offeredUtility) {
			utilityForRailroadFlag = false;
			property[requestedRailroad] = -1;
			property[offeredUtility] = 1;

			proposedTrade = new Trade(p, player[square[requestedRailroad].owner], 0, property, 0, 0);
			game.trade(proposedTrade);
			return true;
		}

		return false;
	};

	this.postBail = function() {
		// Use jail card on 3rd turn, but stay in jail early game to save money
		if ((p.communityChestJailCard || p.chanceJailCard) && p.jailroll === 2) {
			return true;
		}

		// If we're desperate, get out early
		if (p.money < 100 && p.jailroll === 1) {
			return false;
		}

		return false;
	};

	this.payDebt = function() {
		// Mortgage least valuable properties first
		var propertyValues = [];
		for (var i = 0; i < 40; i++) {
			propertyValues.push({ index: i, value: getPropertyValue(i) });
		}
		
		propertyValues.sort(function(a, b) { return a.value - b.value; });

		// Sell houses if necessary
		for (var i = 0; i < propertyValues.length && p.money < 0; i++) {
			var s = square[propertyValues[i].index];
			if (s.owner === p.index && s.house > 0) {
				sellhouse(propertyValues[i].index);
			}
		}

		// Mortgage if still in debt
		for (var i = 0; i < propertyValues.length && p.money < 0; i++) {
			var s = square[propertyValues[i].index];
			if (s.owner === p.index && !s.mortgage && s.house === 0) {
				mortgage(propertyValues[i].index);
			}
		}
	};

	this.bid = function(property, currentBid) {
		var s = square[property];
		var propValue = getPropertyValue(property);
		var maxBid = Math.min(s.price * 1.3, propValue);
		var minCashReserve = 100;

		// Don't bid if we can't afford reserves
		if (p.money < currentBid + minCashReserve) {
			return -1; // Exit auction
		}

		// Aggressive bidding for properties that complete our monopoly
		var ownedInGroup = 0;
		if (s.group) {
			for (var i = 0; i < s.group.length; i++) {
				if (square[s.group[i]].owner === p.index) {
					ownedInGroup++;
				}
			}
		}

		var aggressionFactor = 1 + (ownedInGroup / Math.max(s.group ? s.group.length : 1, 1));
		maxBid *= aggressionFactor;

		// Bid strategically
		var nextBid = currentBid + Math.round(Math.random() * 30 + 20);

		if (nextBid > maxBid || p.money < nextBid + minCashReserve) {
			return 0; // Pass this round (might bid later)
		}

		return nextBid;
	};
}
