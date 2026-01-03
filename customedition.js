function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	document.getElementById("cell0").style.backgroundImage =
		"url('landmarks/go.jpeg')";
	document.getElementById("cell1").style.backgroundImage =
		"url('landmarks/surabaya.jpeg')";
	document.getElementById("cell2").style.backgroundImage =
		"url('landmarks/kotak_misterius.jpeg')";
	document.getElementById("cell3").style.backgroundImage =
		"url('landmarks/semarang.jpeg')";
	document.getElementById("cell4").style.backgroundImage =
		"url('landmarks/pajak_tapera.jpeg')";
	document.getElementById("cell5").style.backgroundImage =
		"url('landmarks/pekalongan.jpeg')";
	document.getElementById("cell6").style.backgroundImage =
		"url('landmarks/jogjakarta.jpeg')";
	document.getElementById("cell7").style.backgroundImage =
		"url('landmarks/kartu_kesempatan.jpeg')";
	document.getElementById("cell8").style.backgroundImage =
		"url('landmarks/bandung.jpeg')";
	document.getElementById("cell9").style.backgroundImage =
		"url('landmarks/jakarta.jpeg')";
	document.getElementById("cell10").style.backgroundImage =
		"url('landmarks/hanya_lewat_penjara.jpeg')";
	document.getElementById("cell11").style.backgroundImage =
		"url('landmarks/lombok.jpeg')";
	document.getElementById("cell12").style.backgroundImage =
		"url('landmarks/bali.jpeg')";
	document.getElementById("cell13").style.backgroundImage =
		"url('landmarks/raja_ampat.jpeg')";
	document.getElementById("cell14").style.backgroundImage =
		"url('landmarks/labuan_bajo.jpeg')";
	document.getElementById("cell15").style.backgroundImage =
		"url('landmarks/banda_neira.jpeg')";
	document.getElementById("cell16").style.backgroundImage =
		"url('landmarks/pulau_maitara.jpeg')";
	document.getElementById("cell17").style.backgroundImage =
		"url('landmarks/kotak_misterius.jpeg')";
	document.getElementById("cell18").style.backgroundImage =
		"url('landmarks/tana_toraja.jpeg')";
	document.getElementById("cell19").style.backgroundImage =
		"url('landmarks/bukittinggi.jpeg')";
	document.getElementById("cell20").style.backgroundImage =
		"url('landmarks/parkiran_gacoan.jpeg')";
	document.getElementById("cell21").style.backgroundImage =
		"url('landmarks/singapura.jpeg')";
	document.getElementById("cell22").style.backgroundImage =
		"url('landmarks/kartu_kesempatan.jpeg')";
	document.getElementById("cell23").style.backgroundImage =
		"url('landmarks/hongkong.jpeg')";
	document.getElementById("cell24").style.backgroundImage =
		"url('landmarks/bangkok.jpeg')";
	document.getElementById("cell25").style.backgroundImage =
		"url('landmarks/sa_pa.jpeg')";
	document.getElementById("cell26").style.backgroundImage =
		"url('landmarks/seoul.jpeg')";
	document.getElementById("cell27").style.backgroundImage =
		"url('landmarks/osaka.jpeg')";
	document.getElementById("cell28").style.backgroundImage =
		"url('landmarks/tokyo.jpeg')";
	document.getElementById("cell29").style.backgroundImage =
		"url('landmarks/mekkah.jpeg')";
	document.getElementById("cell30").style.backgroundImage =
		"url('landmarks/pergi_ke_penjara.jpeg')";
	document.getElementById("cell31").style.backgroundImage =
		"url('landmarks/amsterdam.jpeg')";
	document.getElementById("cell32").style.backgroundImage =
		"url('landmarks/los_angeles.jpeg')";
	document.getElementById("cell33").style.backgroundImage =
		"url('landmarks/kartu_kesempatan.jpeg')";
	document.getElementById("cell34").style.backgroundImage =
		"url('landmarks/new_york.jpeg')";
	document.getElementById("cell35").style.backgroundImage =
		"url('landmarks/swiss.jpeg')";
	document.getElementById("cell36").style.backgroundImage =
		"url('landmarks/kotak_misterius.jpeg')";
	document.getElementById("cell37").style.backgroundImage =
		"url('landmarks/edinburgh.jpeg')";
	document.getElementById("cell38").style.backgroundImage =
		"url('landmarks/pajak_buat_dpr.jpeg')";
	document.getElementById("cell39").style.backgroundImage =
		"url('landmarks/london.jpeg')";

	// Add images to enlarges.
	document.getElementById("enlarge5token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge15token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge25token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge35token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge12token").innerHTML += '<img src="images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge28token").innerHTML += '<img src="images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}


function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Utility" is owned rent is 4 times amount shown on dice.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Utilitys" are owned rent is 10 times amount shown on dice.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Rent<span style="float: right;">$25.</span><br />If 2 Railroads are owned<span style="float: right;">50.</span><br />If 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />If 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

function luxurytax() {
	addAlert(player[turn].name + " paid $100 for landing on Luxury Tax.");
	player[turn].pay(100, 0);

	$("#landed").show().text("You landed on Luxury Tax. Pay $100.");
}

function citytax() {
	addAlert(player[turn].name + " paid $200 for landing on City Tax.");
	player[turn].pay(200, 0);

	$("#landed").show().text("You landed on City Tax. Pay $200.");
}

var square = [];

square[0] = new Square("GO", "COLLECT $200 SALARY AS YOU PASS.", "#FFFFFF");
square[1] = new Square("Surabaya", "$60", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("Kotak Misterius", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[3] = new Square("Semarang", "$60", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("Pajak Tapera", "Pay $200", "#FFFFFF");
square[5] = new Square("Stasiun Pekalongan", "$200", "#FFFFFF", 200, 1);
square[6] = new Square("Jogjakarta", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Kartu Kesempatan", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[8] = new Square("Bandung", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Jakarta", "$120", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);
square[10] = new Square("Hanya Lewat Penjara", "", "#FFFFFF");
square[11] = new Square("Lombok", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("PLN Bali", "$150", "#FFFFFF", 150, 2);
square[13] = new Square("Raja Ampat", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("Labuan Bajo", "$160", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);
square[15] = new Square("Pelabuhan Banda Neira", "$200", "#FFFFFF", 200, 1);
square[16] = new Square("Pulau Maitara", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("Kotak Misterius", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[18] = new Square("Tana Toraja", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("Bukittinggi", "$200", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);
square[20] = new Square("Parkiran Gacoan", "", "#FFFFFF");
square[21] = new Square("Singapura", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Kartu Kesempatan", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[23] = new Square("Hongkong", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("Bangkok", "$240", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("Stasiun Sa Pa", "$200", "#FFFFFF", 200, 1);
square[26] = new Square("Seoul", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Osaka", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("PDAM Tokyo", "$150", "#FFFFFF", 150, 2);
square[29] = new Square("Mekkah", "$280", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);
square[30] = new Square("Pergi ke Penjara", "Go directly to Jail. Do not pass GO. Do not collect $200.", "#FFFFFF");
square[31] = new Square("Amsterdam", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[32] = new Square("Los Angeles", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[33] = new Square("Kartu Kesempatan", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[34] = new Square("New York", "$320", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("Bandara Swiss", "$200", "#FFFFFF", 200, 1);
square[36] = new Square("Kotak Misterius", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[37] = new Square("Edinburgh", "$350", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("Pajak buat DPR", "Pay $100", "#FFFFFF");
square[39] = new Square("London", "$400", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Kartu grasi tahanan penjara.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("Menang undian ciki bocil senilai $10.", function() { addamount(10, 'Community Chest');});
communityChestCards[2] = new Card("Dapat duit dari crypto koin micin $50.", function() { addamount(50, 'Community Chest');});
communityChestCards[3] = new Card("Dapat bansos menjelang pemilu $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[4] = new Card("Nemu duit dari dompet teman $20.", function() { addamount(20, 'Community Chest');});
communityChestCards[5] = new Card("Dapat duit streaming YouTube $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[6] = new Card("Dapat duit challenge TikTok $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[7] = new Card("Dapat $25 dari cashback jajan.", function() { addamount(25, 'Community Chest');});
communityChestCards[8] = new Card("Bayar rumah sakit sepupu $100.", function() { subtractamount(100, 'Community Chest');});
communityChestCards[9] = new Card("Dapat duit sebagai influencer $200.", function() { addamount(200, 'Community Chest');});
communityChestCards[10] = new Card("Bayar uang sekolah $50.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[11] = new Card("Donasi ke orang-orang $50.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[12] = new Card("Ulang tahunmu. Dapat $10 dari setiap pemain.", function() { collectfromeachplayer(10, 'Community Chest');});
communityChestCards[13] = new Card("Jalur orang dalam langsung ke \"GO\" (Dapat $200).", function() { advance(0);});
communityChestCards[14] = new Card("Bayar perbaikan bangunan $40 per rumah dan $115 per hotel.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Masuk penjara kamu.", function() { gotojail();});


chanceCards[0] = new Card(
	"Metu saka penjara gratis. Kertu iki isa disimpen nganti dibutuhake utawa didol.",
	function(p) { p.chanceJailCard = true; updateOwned(); }
);

chanceCards[1] = new Card(
	"Ndandani kabeh propertimu. saben omah mbayar $25. saben hotel mbayar $100.",
	function() { streetrepairs(25, 100); }
);

chanceCards[2] = new Card(
	"Dendha kebut-kebutan $15.",
	function() { subtractamount(15, 'Chance'); }
);

chanceCards[3] = new Card(
	"Kowe kapilih dadi ketua dewan. Mbok bayar saben pemain $50.",
	function() { payeachplayer(50, 'Chance'); }
);

chanceCards[4] = new Card(
	"Mundur telu langkah.",
	function() { gobackthreespaces(); }
);

chanceCards[5] = new Card(
	"Maju menyang utilitas sing paling cedhak. Yen durung diduweni, isa tuku saka bank. Yen wis diduweni, guncang dadu lan bayar pemilik kaping sepuluh saka angka dadu.",
	function() { advanceToNearestUtility(); }
);

chanceCards[6] = new Card(
	"Bank mbayar dividen $50.",
	function() { addamount(50, 'Chance'); }
);

chanceCards[7] = new Card(
	"Maju menyang stasiun sepur sing paling cedhak. Yen durung diduweni, isa tuku saka bank. Yen wis diduweni, bayar sewa kaping pindho.",
	function() { advanceToNearestRailroad(); }
);

chanceCards[8] = new Card(
	"Bayar pajeg wong miskin $15.",
	function() { subtractamount(15, 'Chance'); }
);

chanceCards[9] = new Card(
	"Lelungan menyang Stasiun Pekalongan. Yen liwat \"go\", tampa $200.",
	function() { advance(5); }
);

chanceCards[10] = new Card(
	"Maju menyang London.",
	function() { advance(39); }
);

chanceCards[11] = new Card(
	"Maju menyang Wat Arun Bangkok. Yen liwat \"go\", tampa $200.",
	function() { advance(24); }
);

chanceCards[12] = new Card(
	"Utang bangunanmu wis tempo. Tampa $150.",
	function() { addamount(150, 'Chance'); }
);

chanceCards[13] = new Card(
	"Maju menyang stasiun  utowo pelabuhan utowo bandara sing paling cedhak. Yen durung diduweni, isa tuku saka bank. Yen wis diduweni, bayar sewa kaping pindho.",
	function() { advanceToNearestRailroad(); }
);

chanceCards[14] = new Card(
	"Maju menyang Lombok. Yen liwat \"go\", tampa $200.",
	function() { advance(11); }
);

chanceCards[15] = new Card(
	"Mlebu penjara. Langsung mlebu penjara. Aja liwat \"go\". Aja nampa $200.",
	function() { gotojail(); }
);
