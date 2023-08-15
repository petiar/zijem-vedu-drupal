var data_participation_2021 = [
// participation 2021
{
	type: "sunburst",
	ids: ["všetci", "prítomní", "neprítomní", "nesúhlas", "muži 1", "ženy 1", "bez registrácie", "muži 0", "ženy 0"],
	labels: ["dáta z prihlasovania + neregistrovaní účastníci", "preferujú online", "preferujú prezenčne", "nesúhlas s analýzou", "muži", "ženy", "online / prezenčne: neuvedené", "muži", "ženy"],
	values: [194, 169, 22, 3, 55, 104, 10, 7, 15],
	parents: ["", "všetci", "všetci", "všetci", "prítomní", "prítomní", "prítomní", "neprítomní", "neprítomní"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 255, 98)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(204, 221, 255)', 'rgb(255, 204, 204)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania + neregistrovaní účastníci</b><br>194 osôb<br>", "<b>preferujú online</b><br>169 osôb<br>87.1% prítomných<br>", "<b>preferujú prezenčne</b><br>22 osôb<br>11.3% prítomných<br>", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.5% prítomných<br>", "55 mužov<br>28.4% prítomných<br>", "104 žien<br>53.6% prítomných<br>", "<b>online / prezenčne: neuvedené</b><br>10 osôb<br>5.2% prítomných<br>", "7 mužov<br>", "15 žien<br>"]
}];

var data_participation_detail_2021 = [
// participation_detail 2021
{
	type: "sunburst",
	ids: ["všetci", "účasť", "iniciatívy", "prednášajúci", "organizácia", "nesúhlas", "účastníčky", "účastníci", "bez registrácie", "zástupkyne firiem", "zástupcovia firiem", "aktívne účastníčky", "aktívni účastníci", "organizátorky", "organizátori"],
	labels: ["iba prítomní", "účasť", "pozvané príspevky", "prednášajúci", "organizácia", "nesúhlas s analýzou", "ženy", "muži", "bez registrácie", "ženy", "muži", "ženy", "muži", "ženy", "muži"],
	values: [194, 162, 13, 7, 9, 3, 104, 58, 0, 11, 2, 3, 4, 7, 2],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "účasť", "účasť", "účasť", "iniciatívy", "iniciatívy", "prednášajúci", "prednášajúci", "organizácia", "organizácia"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 214, 16)', 'rgb(255, 174, 16)', 'rgb(255, 134, 16', 'rgb(200, 200, 200)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(0, 230, 0)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>194 osôb<br>", "<b>účasť</b><br>162 osôb<br>83.5% prítomných<br>", "<b>pozvané príspevky</b><br>13 osôb<br>6.7% prítomných<br>", "<b>prednášajúci</b><br>7 osôb<br>3.6% prítomných<br>", "<b>organizácia</b><br>9 osôb<br>4.6% prítomných<br>", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.5% prítomných<br>", "104 žien<br>53.6% prítomných<br>", "58 mužov<br>29.9% prítomných<br>", "<b>bez registrácie</b><br>0 osôb<br>0.0% prítomných<br>", "11 žien<br>5.7% prítomných<br>", "2 muži<br>1.0% prítomných<br>", "3 ženy<br>1.5% prítomných<br>", "4 muži<br>2.1% prítomných<br>", "7 žien<br>3.6% prítomných<br>", "2 muži<br>1.0% prítomných<br>"]
}];

var data_abroad_2021 = [
// abroad 2021
{
	type: "sunburst",
	ids: ["všetci", "Slovensko", "oboje", "zahraničie", "neuvedené", "nesúhlas", "muži (SR)", "ženy (SR)", "muži (NA)", "ženy (NA)", "bez dát", "muži (oboje)", "ženy (oboje", "muži (zahr.)", "ženy (zahr.)"],
	labels: ["iba prítomní", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "nesúhlas s analýzou", "muži", "ženy", "muži", "ženy", "bez registrácie", "muži", "ženy", "muži", "ženy"],
	values: [194, 119, 11, 60, 1, 3, 43, 76, 0, 1, 0, 6, 5, 17, 43],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "Slovensko", "Slovensko", "neuvedené", "neuvedené", "neuvedené", "oboje", "oboje", "zahraničie", "zahraničie"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>194 osôb<br>", "<b>Slovensko</b><br>119 osôb<br>61.3% prítomných<br>", "<b>SR a zahraničie</b><br>11 osôb<br>5.7% prítomných<br>", "<b>zahraničie</b><br>60 osôb<br>30.9% prítomných<br>", "<b>neuvedené</b><br>1 osoba<br>0.5% prítomných<br>", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.5% prítomných<br>", "43 mužov<br>22.2% prítomných<br>", "76 žien<br>39.2% prítomných<br>", "0 mužov<br>0.0% prítomných<br>", "1 žena<br>0.5% prítomných<br>", "<b>bez registrácie</b><br>0 osôb<br>0.0% prítomných<br>", "6 mužov<br>3.1% prítomných<br>", "5 žien<br>2.6% prítomných<br>", "17 mužov<br>8.8% prítomných<br>", "43 žien<br>22.2% prítomných<br>"]
}];

var data_subject_2021 = [
// subject 2021
{
	type: "sunburst",
	ids: ["všetci", "neprítomní", "nesúhlas", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "STEM (neprítomní)", "SSH (neprítomní)", "iné (neprítomní)", "iniciatívy (neprítomní)", "neuvedené (neprítomní)", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "STEM nezaradené", "STEM neuvedené", "knižničná a informačná veda", "digital humanities", "história, pomocné vedy historické", "archeológia", "antropológia", "religionistika", "psychológia", "didaktika", "sociológia", "politické vedy", "ekonomické vedy", "SSH nezaradené", "SSH neuvedené", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "práca s mládežou", "projektový manažment", "popularizácia", "médiá", "štátna správa", "iné nezaradené", "iné neuvedené", "iniciatívy podpora výskumu", "iniciatívy podpora výskumu (STEM)", "iniciatívy práca s mládežou (STEM)", "iniciatívy práca s mládežou", "iniciatívy vzdelávanie, poradenstvo", "iniciatívy popularizácia", "iniciatívy chémia", "iniciatívy fyzika", "neuvedené (iniciatívy)", "neuvedené (neuvedené)"],
	labels: ["iba dáta z registrácie", "neprítomní", "nesúhlas s analýzou", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "nezaradené", "neuvedené", "knižničná a informačná veda", "digital humanities", "história, pomocné vedy historické", "archeológia", "antropológia", "religionistika", "psychológia", "didaktika", "sociológia", "politické vedy", "ekonomické vedy", "nezaradené", "neuvedené", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "práca s mládežou", "projektový manažment", "popularizácia", "médiá", "štátna správa", "nezaradené", "neuvedené", "podpora výskumu", "podpora výskumu (STEM)", "práca s mládežou (STEM)", "práca s mládežou", "vzdelávanie, poradenstvo", "popularizácia", "chémia", "fyzika", "neuvedené", "neuvedené"],
	values: [194, 0, 3, 125, 37, 24, 0, 5, 0, 0, 0, 0, 0, 6, 18, 18, 3, 4, 2, 1, 1, 4, 18, 3, 7, 10, 3, 7, 8, 2, 1, 1, 7, 0, 1, 3, 1, 8, 1, 0, 1, 7, 1, 1, 6, 6, 1, 1, 6, 5, 4, 0, 3, 2, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "všetci", "všetci", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "neuvedené"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(190, 190, 190)', 'rgb(200, 200, 200)', 'rgb(0, 102, 102)', 'rgb(204, 0, 0)', 'rgb(62, 0, 62)', 'rgb(82, 0, 82)', 'rgb(124, 124, 124)', 'rgb(95, 146, 146)', 'rgb(197, 95, 95)', 'rgb(126,95,126)', 'rgb(82, 0, 82)', 'rgb(157, 157, 157)', 'rgb(53, 104, 0)', 'rgb(82, 163, 0)', 'rgb(102, 204, 0)', 'rgb(222, 222, 92)', 'rgb(255, 238, 153)', 'rgb(255,247,126)', 'rgb(255, 255, 98)', 'rgb(255, 255, 0)', 'rgb(255, 204, 0)', 'rgb(255, 128, 0)', 'rgb(204, 101, 0)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(0, 0, 255)', 'rgb(0, 128, 255)', 'rgb(136, 136, 136)', 'rgb(175, 175, 175)', 'rgb(36, 18, 0)', 'rgb(75, 37, 0)', 'rgb(89, 121, 0)', 'rgb(0, 102, 102)', 'rgb(0, 102, 102)', 'rgb(119,94,107)', 'rgb(102, 51, 77)', 'rgb(145,0,73)', 'rgb(204, 0, 102)', 'rgb(255, 47, 151)', 'rgb(153, 0, 76)', 'rgb(214, 48, 90)', 'rgb(214, 48, 62)', 'rgb(214, 48, 48)', 'rgb(218, 94, 69)', 'rgb(218, 106, 69)', 'rgb(204, 0, 0)', 'rgb(204, 0, 0)', 'rgb(82, 0, 82)', 'rgb(107, 0, 107)', 'rgb(132, 0, 132)', 'rgb(142, 0, 142)', 'rgb(152, 0, 152)', 'rgb(162, 0, 162)', 'rgb(172, 0, 172)', 'rgb(182, 0, 182)', 'rgb(62, 0, 62)', 'rgb(62, 0, 62)', 'rgb(82, 0, 82)', 'rgb(31, 51, 82)', 'rgb(36, 77, 112)', 'rgb(142, 0, 142)', 'rgb(132, 0, 132)', 'rgb(162, 0, 162)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(124, 124, 124)', 'rgb(124, 124, 124)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba dáta z registrácie</b><br>194 osôb<br>", "0 neprítomných<br>", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.5% prítomných<br>", "<b>STEM</b><br>125 osôb<br>64.4% prítomných<br>", "<b>SSH</b><br>37 osôb<br>19.1% prítomných<br>", "<b>iné</b><br>24 osôb<br>12.4% prítomných<br>", "<b>iniciatívy</b><br>0 osôb<br>0.0% prítomných<br>", "<b>neuvedené</b><br>5 osôb<br>2.6% prítomných<br>", "<b>STEM</b><br>0 osôb<br>", "<b>SSH</b><br>0 osôb<br>", "<b>iné</b><br>0 osôb<br>", "<b>iniciatívy</b><br>0 osôb<br>", "<b>neuvedené</b><br>0 osôb<br>", "<b>genetika</b><br>6 osôb<br>3.1% prítomných<br>", "<b>molekulárna biológia</b><br>18 osôb<br>9.3% prítomných<br>", "<b>biológia</b><br>18 osôb<br>9.3% prítomných<br>", "<b>biochémia</b><br>3 osoby<br>1.5% prítomných<br>", "<b>biofyzika</b><br>4 osoby<br>2.1% prítomných<br>", "<b>bioinformatika</b><br>2 osoby<br>1.0% prítomných<br>", "<b>biomedicína</b><br>1 osoba<br>0.5% prítomných<br>", "<b>biotechnológie, biomateriály</b><br>1 osoba<br>0.5% prítomných<br>", "<b>neurovedy</b><br>4 osoby<br>2.1% prítomných<br>", "<b>medicína, lekárske vedy</b><br>18 osôb<br>9.3% prítomných<br>", "<b>farmácia</b><br>3 osoby<br>1.5% prítomných<br>", "<b>chémia</b><br>7 osôb<br>3.6% prítomných<br>", "<b>fyzika</b><br>10 osôb<br>5.2% prítomných<br>", "<b>matematika</b><br>3 osoby<br>1.5% prítomných<br>", "<b>IT</b><br>7 osôb<br>3.6% prítomných<br>", "<b>technológie</b><br>8 osôb<br>4.1% prítomných<br>", "<b>stavebné inžinierstvo, architektúra</b><br>2 osoby<br>1.0% prítomných<br>", "<b>geopriestorové vedy</b><br>1 osoba<br>0.5% prítomných<br>", "<b>vedy o Zemi</b><br>1 osoba<br>0.5% prítomných<br>", "<b>ekologické a environmentálne vedy</b><br>7 osôb<br>3.6% prítomných<br>", "<b>nezaradené</b><br>0 osôb<br>0.0% prítomných<br>", "<b>neuvedené</b><br>1 osoba<br>0.5% prítomných<br>", "<b>knižničná a informačná veda</b><br>3 osoby<br>1.5% prítomných<br>", "<b>digital humanities</b><br>1 osoba<br>0.5% prítomných<br>", "<b>história, pomocné vedy historické</b><br>8 osôb<br>4.1% prítomných<br>", "<b>archeológia</b><br>1 osoba<br>0.5% prítomných<br>", "<b>antropológia</b><br>0 osôb<br>0.0% prítomných<br>", "<b>religionistika</b><br>1 osoba<br>0.5% prítomných<br>", "<b>psychológia</b><br>7 osôb<br>3.6% prítomných<br>", "<b>didaktika</b><br>1 osoba<br>0.5% prítomných<br>", "<b>sociológia</b><br>1 osoba<br>0.5% prítomných<br>", "<b>politické vedy</b><br>6 osôb<br>3.1% prítomných<br>", "<b>ekonomické vedy</b><br>6 osôb<br>3.1% prítomných<br>", "<b>nezaradené</b><br>1 osoba<br>0.5% prítomných<br>", "<b>neuvedené</b><br>1 osoba<br>0.5% prítomných<br>", "<b>podpora výskumu</b><br>6 osôb<br>3.1% prítomných<br>", "<b>otvorená veda</b><br>5 osôb<br>2.6% prítomných<br>", "<b>vzdelávanie, poradenstvo</b><br>4 osoby<br>2.1% prítomných<br>", "<b>práca s mládežou</b><br>0 osôb<br>0.0% prítomných<br>", "<b>projektový manažment</b><br>3 osoby<br>1.5% prítomných<br>", "<b>popularizácia</b><br>2 osoby<br>1.0% prítomných<br>", "<b>médiá</b><br>0 osôb<br>0.0% prítomných<br>", "<b>štátna správa</b><br>1 osoba<br>0.5% prítomných<br>", "<b>nezaradené</b><br>1 osoba<br>0.5% prítomných<br>", "<b>neuvedené</b><br>2 osoby<br>1.0% prítomných<br>", "<b>podpora výskumu</b><br>0 osôb<br>0.0% prítomných<br>", "<b>podpora výskumu (STEM)</b><br>0 osôb<br>0.0% prítomných<br>", "<b>práca s mládežou (STEM)</b><br>0 osôb<br>0.0% prítomných<br>", "<b>práca s mládežou</b><br>0 osôb<br>0.0% prítomných<br>", "<b>vzdelávanie, poradenstvo</b><br>0 osôb<br>0.0% prítomných<br>", "<b>popularizácia</b><br>0 osôb<br>0.0% prítomných<br>", "<b>chémia</b><br>0 osôb<br>0.0% prítomných<br>", "<b>fyzika</b><br>0 osôb<br>0.0% prítomných<br>", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>", "<b>neuvedené</b><br>5 osôb<br>2.6% prítomných<br>"]
}];

var data_position_country_2021 = [
	// position_country 2021
	{
	x: [1, 20, 8, 14, 1, 9, 26, 16, 21, 3],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>Slovensko: 1 osoba<br>0.5% prítomných<br>0.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 20 osôb<br>10.5% prítomných<br>10.3% registrovaných", "<b>PI (vedúci laboratória)</b><br>Slovensko: 8 osôb<br>4.2% prítomných<br>4.1% registrovaných", "<b>postdok, junior researcher</b><br>Slovensko: 14 osôb<br>7.3% prítomných<br>7.2% registrovaných", "<b>výskum v industry</b><br>Slovensko: 1 osoba<br>0.5% prítomných<br>0.5% registrovaných", "<b>doktorand </b><br>Slovensko: 9 osôb<br>4.7% prítomných<br>4.6% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 26 osôb<br>13.6% prítomných<br>13.4% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 16 osôb<br>8.4% prítomných<br>8.2% registrovaných", "<b>iné </b><br>Slovensko: 21 osôb<br>11.0% prítomných<br>10.8% registrovaných", "<b>neuvedené </b><br>Slovensko: 3 osoby<br>1.6% prítomných<br>1.5% registrovaných"]
	},
	{
	x: [0, 3, 0, 1, 0, 3, 1, 0, 1, 2],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>SR + zahraničie: 3 osoby<br>1.6% prítomných<br>1.5% registrovaných", "", "<b>postdok, junior researcher</b><br>SR + zahraničie: 1 osoba<br>0.5% prítomných<br>0.5% registrovaných", "", "<b>doktorand </b><br>SR + zahraničie: 3 osoby<br>1.6% prítomných<br>1.5% registrovaných", "<b>mimo akadémie </b><br>SR + zahraničie: 1 osoba<br>0.5% prítomných<br>0.5% registrovaných", "", "<b>iné </b><br>SR + zahraničie: 1 osoba<br>0.5% prítomných<br>0.5% registrovaných", "<b>neuvedené </b><br>SR + zahraničie: 2 osoby<br>1.0% prítomných<br>1.0% registrovaných"]
	},
	{
	x: [2, 2, 4, 19, 1, 21, 4, 4, 3, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>zahraničie: 2 osoby<br>1.0% prítomných<br>1.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 2 osoby<br>1.0% prítomných<br>1.0% registrovaných", "<b>PI (vedúci laboratória)</b><br>zahraničie: 4 osoby<br>2.1% prítomných<br>2.1% registrovaných", "<b>postdok, junior researcher</b><br>zahraničie: 19 osôb<br>9.9% prítomných<br>9.8% registrovaných", "<b>výskum v industry</b><br>zahraničie: 1 osoba<br>0.5% prítomných<br>0.5% registrovaných", "<b>doktorand </b><br>zahraničie: 21 osôb<br>11.0% prítomných<br>10.8% registrovaných", "<b>mimo akadémie </b><br>zahraničie: 4 osoby<br>2.1% prítomných<br>2.1% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 4 osoby<br>2.1% prítomných<br>2.1% registrovaných", "<b>iné </b><br>zahraničie: 3 osoby<br>1.6% prítomných<br>1.5% registrovaných", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>neuvedené (krajina): 1 osoba<br>0.5% prítomných<br>0.5% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>nesúhlas s analýzou: 3 osoby<br>1.5% registrovaných"]
	},
	{
	x: [14, 9, 26, 20, 21, 16, 8, 1, 1, 3],
	y: ["postdok, junior researcher", "doktorand ", "mimo akadémie ", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>postdok, junior researcher</b><br>Slovensko: 14 osôb<br>7.3% prítomných<br>7.2% registrovaných", "<b>doktorand </b><br>Slovensko: 9 osôb<br>4.7% prítomných<br>4.6% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 26 osôb<br>13.6% prítomných<br>13.4% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 20 osôb<br>10.5% prítomných<br>10.3% registrovaných", "<b>iné </b><br>Slovensko: 21 osôb<br>11.0% prítomných<br>10.8% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 16 osôb<br>8.4% prítomných<br>8.2% registrovaných", "<b>PI (vedúci laboratória)</b><br>Slovensko: 8 osôb<br>4.2% prítomných<br>4.1% registrovaných", "<b>profesor, docent </b><br>Slovensko: 1 osoba<br>0.5% prítomných<br>0.5% registrovaných", "<b>výskum v industry</b><br>Slovensko: 1 osoba<br>0.5% prítomných<br>0.5% registrovaných", "<b>neuvedené </b><br>Slovensko: 3 osoby<br>1.6% prítomných<br>1.5% registrovaných"]
	},
	{
	x: [1, 3, 1, 3, 1, 0, 0, 0, 0, 2],
	y: ["postdok, junior researcher", "doktorand ", "mimo akadémie ", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>postdok, junior researcher</b><br>SR + zahraničie: 1 osoba<br>0.5% prítomných<br>0.5% registrovaných", "<b>doktorand </b><br>SR + zahraničie: 3 osoby<br>1.6% prítomných<br>1.5% registrovaných", "<b>mimo akadémie </b><br>SR + zahraničie: 1 osoba<br>0.5% prítomných<br>0.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>SR + zahraničie: 3 osoby<br>1.6% prítomných<br>1.5% registrovaných", "<b>iné </b><br>SR + zahraničie: 1 osoba<br>0.5% prítomných<br>0.5% registrovaných", "", "", "", "", "<b>neuvedené </b><br>SR + zahraničie: 2 osoby<br>1.0% prítomných<br>1.0% registrovaných"]
	},
	{
	x: [19, 21, 4, 2, 3, 4, 4, 2, 1, 0],
	y: ["postdok, junior researcher", "doktorand ", "mimo akadémie ", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>postdok, junior researcher</b><br>zahraničie: 19 osôb<br>9.9% prítomných<br>9.8% registrovaných", "<b>doktorand </b><br>zahraničie: 21 osôb<br>11.0% prítomných<br>10.8% registrovaných", "<b>mimo akadémie </b><br>zahraničie: 4 osoby<br>2.1% prítomných<br>2.1% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 2 osoby<br>1.0% prítomných<br>1.0% registrovaných", "<b>iné </b><br>zahraničie: 3 osoby<br>1.6% prítomných<br>1.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 4 osoby<br>2.1% prítomných<br>2.1% registrovaných", "<b>PI (vedúci laboratória)</b><br>zahraničie: 4 osoby<br>2.1% prítomných<br>2.1% registrovaných", "<b>profesor, docent </b><br>zahraničie: 2 osoby<br>1.0% prítomných<br>1.0% registrovaných", "<b>výskum v industry</b><br>zahraničie: 1 osoba<br>0.5% prítomných<br>0.5% registrovaných", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	y: ["postdok, junior researcher", "doktorand ", "mimo akadémie ", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>neuvedené (krajina): 1 osoba<br>0.5% prítomných<br>0.5% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
	y: ["postdok, junior researcher", "doktorand ", "mimo akadémie ", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>nesúhlas s analýzou: 3 osoby<br>1.5% registrovaných"]
	},
];

var data_position_gender_2021 = [
	// position_gender 2021
	{
	x: [1, 15, 4, 18, 1, 28, 19, 16, 19, 4],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>1 žena<br>0.5% prítomných<br>0.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>15 žien<br>7.9% prítomných<br>7.7% registrovaných", "<b>PI (vedúci laboratória)</b><br>4 ženy<br>2.1% prítomných<br>2.1% registrovaných", "<b>postdok, junior researcher</b><br>18 žien<br>9.4% prítomných<br>9.3% registrovaných", "<b>výskum v industry</b><br>1 žena<br>0.5% prítomných<br>0.5% registrovaných", "<b>doktorand </b><br>28 žien<br>14.7% prítomných<br>14.4% registrovaných", "<b>mimo akadémie </b><br>19 žien<br>9.9% prítomných<br>9.8% registrovaných", "<b>študent (Bc./Mgr.) </b><br>16 žien<br>8.4% prítomných<br>8.2% registrovaných", "<b>iné </b><br>19 žien<br>9.9% prítomných<br>9.8% registrovaných", "<b>neuvedené </b><br>4 ženy<br>2.1% prítomných<br>2.1% registrovaných"]
	},
	{
	x: [2, 10, 8, 16, 1, 5, 12, 4, 6, 2],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>2 muži<br>1.0% prítomných<br>1.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>10 mužov<br>5.2% prítomných<br>5.2% registrovaných", "<b>PI (vedúci laboratória)</b><br>8 mužov<br>4.2% prítomných<br>4.1% registrovaných", "<b>postdok, junior researcher</b><br>16 mužov<br>8.4% prítomných<br>8.2% registrovaných", "<b>výskum v industry</b><br>1 muž<br>0.5% prítomných<br>0.5% registrovaných", "<b>doktorand </b><br>5 mužov<br>2.6% prítomných<br>2.6% registrovaných", "<b>mimo akadémie </b><br>12 mužov<br>6.3% prítomných<br>6.2% registrovaných", "<b>študent (Bc./Mgr.) </b><br>4 muži<br>2.1% prítomných<br>2.1% registrovaných", "<b>iné </b><br>6 mužov<br>3.1% prítomných<br>3.1% registrovaných", "<b>neuvedené </b><br>2 muži<br>1.0% prítomných<br>1.0% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>nesúhlas s analýzou: 3 osoby<br>1.5% registrovaných"]
	},
	{
	x: [18, 28, 19, 15, 19, 16, 4, 1, 1, 4],
	y: ["postdok, junior researcher", "doktorand ", "mimo akadémie ", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>postdok, junior researcher</b><br>18 žien<br>9.4% prítomných<br>9.3% registrovaných", "<b>doktorand </b><br>28 žien<br>14.7% prítomných<br>14.4% registrovaných", "<b>mimo akadémie </b><br>19 žien<br>9.9% prítomných<br>9.8% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>15 žien<br>7.9% prítomných<br>7.7% registrovaných", "<b>iné </b><br>19 žien<br>9.9% prítomných<br>9.8% registrovaných", "<b>študent (Bc./Mgr.) </b><br>16 žien<br>8.4% prítomných<br>8.2% registrovaných", "<b>PI (vedúci laboratória)</b><br>4 ženy<br>2.1% prítomných<br>2.1% registrovaných", "<b>profesor, docent </b><br>1 žena<br>0.5% prítomných<br>0.5% registrovaných", "<b>výskum v industry</b><br>1 žena<br>0.5% prítomných<br>0.5% registrovaných", "<b>neuvedené </b><br>4 ženy<br>2.1% prítomných<br>2.1% registrovaných"]
	},
	{
	x: [16, 5, 12, 10, 6, 4, 8, 2, 1, 2],
	y: ["postdok, junior researcher", "doktorand ", "mimo akadémie ", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>postdok, junior researcher</b><br>16 mužov<br>8.4% prítomných<br>8.2% registrovaných", "<b>doktorand </b><br>5 mužov<br>2.6% prítomných<br>2.6% registrovaných", "<b>mimo akadémie </b><br>12 mužov<br>6.3% prítomných<br>6.2% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>10 mužov<br>5.2% prítomných<br>5.2% registrovaných", "<b>iné </b><br>6 mužov<br>3.1% prítomných<br>3.1% registrovaných", "<b>študent (Bc./Mgr.) </b><br>4 muži<br>2.1% prítomných<br>2.1% registrovaných", "<b>PI (vedúci laboratória)</b><br>8 mužov<br>4.2% prítomných<br>4.1% registrovaných", "<b>profesor, docent </b><br>2 muži<br>1.0% prítomných<br>1.0% registrovaných", "<b>výskum v industry</b><br>1 muž<br>0.5% prítomných<br>0.5% registrovaných", "<b>neuvedené </b><br>2 muži<br>1.0% prítomných<br>1.0% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
	y: ["postdok, junior researcher", "doktorand ", "mimo akadémie ", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>nesúhlas s analýzou: 3 osoby<br>1.5% registrovaných"]
	},
];

var data_institution_country_2021 = [
	// institution_country 2021
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>nesúhlas s analýzou: 3 osoby<br>0.7% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>nesúhlas s analýzou: 3 osoby<br>0.7% registrovaných"]
	},
];

var data_institution_gender_2021 = [
	// institution_gender 2021
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>nesúhlas s analýzou: 3 osoby<br>0.7% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>nesúhlas s analýzou: 3 osoby<br>0.7% registrovaných"]
	},
];

var data_registration_timeSeries_2021 = [
	// registration_timeSeries 2021
	{
	x: [1152.70959490741, 1154.14042824074, 1253.16903935185, 1268.0909837963, 1396.64153935185, 1641.84653935185, 1801.34820601852, 1831.05042824074, 1831.95792824074, 1833.47903935185, 1833.58070601852, 1834.90376157407, 1835.04515046296, 1844.72376157407, 1845.00181712963, 1845.92792824074, 1849.97987268519, 1923.87487268519, 1928.51959490741, 1930.75042824074, 1939.15237268519, 1939.64126157407, 1940.95931712963, 1941.87903935185, 1950.38709490741, 1951.00265046296, 1988.95487268519, 1990.17931712963, 2000.49653935185, 2027.23626157407, 2072.03903935185, 2075.01515046296, 2095.22987268518, 2122.73709490741, 2132.07265046296, 2160.48570601852, 2179.94765046296, 2189.94181712963, 2230.70459490741, 2238.12237268518, 2243.31737268518, 2252.84903935185, 2255.15126157407, 2258.63292824074, 2258.87987268518, 2279.47459490741, 2289.13265046296, 2325.41987268518, 2338.35542824074, 2351.33292824074, 2357.11015046296, 2409.47237268518, 2409.78959490741, 2419.65431712963, 2419.68959490741, 2419.81292824074, 2419.92237268518, 2420.16237268518, 2420.29959490741, 2420.6134837963, 2420.75098379629, 2420.76265046296, 2421.46320601852, 2421.74570601852, 2422.50459490741, 2422.96570601852, 2423.62292824074, 2423.88265046296, 2426.10737268518, 2426.21098379629, 2431.7984837963, 2436.38431712963, 2442.57126157407, 2444.39153935185, 2445.07653935185, 2445.60959490741, 2445.82265046296, 2455.85265046296, 2455.9509837963, 2468.11126157407, 2468.85653935185, 2473.71209490741, 2479.11431712963, 2479.83348379629, 2489.92542824074, 2493.44515046296, 2498.08431712963, 2500.99292824074, 2503.38737268518, 2504.49626157407, 2512.87876157407, 2515.43987268518, 2518.02987268518, 2523.02153935185, 2524.86070601852, 2528.07709490741, 2544.82292824074, 2552.50931712963, 2577.3559837963, 2578.05265046296, 2578.09515046296, 2587.21265046296, 2587.66403935185, 2587.99542824074, 2588.12292824074, 2588.64542824074, 2588.78987268518, 2589.40265046296, 2589.64015046296, 2589.67181712963, 2589.78070601852, 2596.84292824074, 2598.47376157407],
	y: ["3", "5", "9", "10", "11", "17", "19", "21", "23", "26", "27", "28", "29", "33", "35", "36", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "52", "53", "54", "55", "56", "57", "58", "59", "60", "62", "65", "66", "70", "71", "74", "76", "77", "79", "80", "82", "84", "87", "89", "90", "91", "92", "93", "94", "95", "97", "99", "102", "103", "104", "105", "106", "108", "110", "112", "114", "115", "116", "120", "122", "125", "127", "128", "129", "130", "131", "132", "134", "135", "136", "137", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151", "153", "154", "155", "158", "160", "162", "163", "164", "165", "166", "167", "168", "169", "170", "171", "172", "173", "174", "176", "177"],
	name: 'Slovensko',
	text: ["10/21/2021 13:13:21", "10/21/2021 14:39:12", "10/25/2021 17:40:55", "10/26/2021 8:36:14", "10/31/2021 17:09:16", "11/10/2021 22:21:34", "11/17/2021 13:51:40", "11/18/2021 19:33:48", "11/18/2021 20:28:15", "11/18/2021 21:59:31", "11/18/2021 22:05:37", "11/18/2021 23:25:00", "11/18/2021 23:33:29", "11/19/2021 9:14:12", "11/19/2021 9:30:53", "11/19/2021 10:26:27", "11/19/2021 14:29:34", "11/22/2021 16:23:16", "11/22/2021 21:01:57", "11/22/2021 23:15:48", "11/23/2021 7:39:55", "11/23/2021 8:09:15", "11/23/2021 9:28:20", "11/23/2021 10:23:31", "11/23/2021 18:54:00", "11/23/2021 19:30:56", "11/25/2021 9:28:04", "11/25/2021 10:41:32", "11/25/2021 21:00:34", "11/26/2021 23:44:57", "11/28/2021 20:33:07", "11/28/2021 23:31:41", "11/29/2021 19:44:34", "11/30/2021 23:15:00", "12/1/2021 8:35:08", "12/2/2021 12:59:55", "12/3/2021 8:27:38", "12/3/2021 18:27:17", "12/5/2021 11:13:03", "12/5/2021 18:38:07", "12/5/2021 23:49:49", "12/6/2021 9:21:43", "12/6/2021 11:39:51", "12/6/2021 15:08:45", "12/6/2021 15:23:34", "12/7/2021 11:59:15", "12/7/2021 21:38:44", "12/9/2021 9:55:58", "12/9/2021 22:52:06", "12/10/2021 11:50:45", "12/10/2021 17:37:23", "12/12/2021 21:59:07", "12/12/2021 22:18:09", "12/13/2021 8:10:02", "12/13/2021 8:12:09", "12/13/2021 8:19:33", "12/13/2021 8:26:07", "12/13/2021 8:40:31", "12/13/2021 8:48:45", "12/13/2021 9:07:35", "12/13/2021 9:15:50", "12/13/2021 9:16:32", "12/13/2021 9:58:34", "12/13/2021 10:15:31", "12/13/2021 11:01:03", "12/13/2021 11:28:43", "12/13/2021 12:08:09", "12/13/2021 12:23:44", "12/13/2021 14:37:13", "12/13/2021 14:43:26", "12/13/2021 20:18:41", "12/14/2021 0:53:50", "12/14/2021 7:05:03", "12/14/2021 8:54:16", "12/14/2021 9:35:22", "12/14/2021 10:07:21", "12/14/2021 10:20:08", "12/14/2021 20:21:56", "12/14/2021 20:27:50", "12/15/2021 8:37:27", "12/15/2021 9:22:10", "12/15/2021 14:13:30", "12/15/2021 19:37:38", "12/15/2021 20:20:47", "12/16/2021 6:26:18", "12/16/2021 9:57:29", "12/16/2021 14:35:50", "12/16/2021 17:30:21", "12/16/2021 19:54:01", "12/16/2021 21:00:33", "12/17/2021 5:23:30", "12/17/2021 7:57:10", "12/17/2021 10:32:34", "12/17/2021 15:32:04", "12/17/2021 17:22:25", "12/17/2021 20:35:24", "12/18/2021 13:20:09", "12/18/2021 21:01:20", "12/19/2021 21:52:08", "12/19/2021 22:33:56", "12/19/2021 22:36:29", "12/20/2021 7:43:32", "12/20/2021 8:10:37", "12/20/2021 8:30:30", "12/20/2021 8:38:09", "12/20/2021 9:09:30", "12/20/2021 9:18:10", "12/20/2021 9:54:56", "12/20/2021 10:09:11", "12/20/2021 10:11:05", "12/20/2021 10:17:37", "12/20/2021 17:21:21", "12/20/2021 18:59:12"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>10/21/2021 13:13:21</b><br>3 osoby<br>2.0% online registrácií", "<b>10/21/2021 14:39:12</b><br>5 osôb<br>3.0% online registrácií", "<b>10/25/2021 17:40:55</b><br>9 osôb<br>5.0% online registrácií", "<b>10/26/2021 8:36:14</b><br>10 osôb<br>5.0% online registrácií", "<b>10/31/2021 17:09:16</b><br>11 osôb<br>6.0% online registrácií", "<b>11/10/2021 22:21:34</b><br>17 osôb<br>9.0% online registrácií", "<b>11/17/2021 13:51:40</b><br>19 osôb<br>10.0% online registrácií", "<b>11/18/2021 19:33:48</b><br>21 osôb<br>11.0% online registrácií", "<b>11/18/2021 20:28:15</b><br>23 osôb<br>12.0% online registrácií", "<b>11/18/2021 21:59:31</b><br>26 osôb<br>14.0% online registrácií", "<b>11/18/2021 22:05:37</b><br>27 osôb<br>15.0% online registrácií", "<b>11/18/2021 23:25:00</b><br>28 osôb<br>15.0% online registrácií", "<b>11/18/2021 23:33:29</b><br>29 osôb<br>16.0% online registrácií", "<b>11/19/2021 9:14:12</b><br>33 osôb<br>18.0% online registrácií", "<b>11/19/2021 9:30:53</b><br>35 osôb<br>19.0% online registrácií", "<b>11/19/2021 10:26:27</b><br>36 osôb<br>19.0% online registrácií", "<b>11/19/2021 14:29:34</b><br>39 osôb<br>21.0% online registrácií", "<b>11/22/2021 16:23:16</b><br>40 osôb<br>22.0% online registrácií", "<b>11/22/2021 21:01:57</b><br>41 osôb<br>22.0% online registrácií", "<b>11/22/2021 23:15:48</b><br>42 osôb<br>23.0% online registrácií", "<b>11/23/2021 7:39:55</b><br>43 osôb<br>23.0% online registrácií", "<b>11/23/2021 8:09:15</b><br>44 osôb<br>24.0% online registrácií", "<b>11/23/2021 9:28:20</b><br>45 osôb<br>24.0% online registrácií", "<b>11/23/2021 10:23:31</b><br>46 osôb<br>25.0% online registrácií", "<b>11/23/2021 18:54:00</b><br>47 osôb<br>25.0% online registrácií", "<b>11/23/2021 19:30:56</b><br>48 osôb<br>26.0% online registrácií", "<b>11/25/2021 9:28:04</b><br>52 osôb<br>28.0% online registrácií", "<b>11/25/2021 10:41:32</b><br>53 osôb<br>29.0% online registrácií", "<b>11/25/2021 21:00:34</b><br>54 osôb<br>29.0% online registrácií", "<b>11/26/2021 23:44:57</b><br>55 osôb<br>30.0% online registrácií", "<b>11/28/2021 20:33:07</b><br>56 osôb<br>30.0% online registrácií", "<b>11/28/2021 23:31:41</b><br>57 osôb<br>31.0% online registrácií", "<b>11/29/2021 19:44:34</b><br>58 osôb<br>31.0% online registrácií", "<b>11/30/2021 23:15:00</b><br>59 osôb<br>32.0% online registrácií", "<b>12/1/2021 8:35:08</b><br>60 osôb<br>32.0% online registrácií", "<b>12/2/2021 12:59:55</b><br>62 osôb<br>34.0% online registrácií", "<b>12/3/2021 8:27:38</b><br>65 osôb<br>35.0% online registrácií", "<b>12/3/2021 18:27:17</b><br>66 osôb<br>36.0% online registrácií", "<b>12/5/2021 11:13:03</b><br>70 osôb<br>38.0% online registrácií", "<b>12/5/2021 18:38:07</b><br>71 osôb<br>38.0% online registrácií", "<b>12/5/2021 23:49:49</b><br>74 osôb<br>40.0% online registrácií", "<b>12/6/2021 9:21:43</b><br>76 osôb<br>41.0% online registrácií", "<b>12/6/2021 11:39:51</b><br>77 osôb<br>42.0% online registrácií", "<b>12/6/2021 15:08:45</b><br>79 osôb<br>43.0% online registrácií", "<b>12/6/2021 15:23:34</b><br>80 osôb<br>43.0% online registrácií", "<b>12/7/2021 11:59:15</b><br>82 osôb<br>44.0% online registrácií", "<b>12/7/2021 21:38:44</b><br>84 osôb<br>45.0% online registrácií", "<b>12/9/2021 9:55:58</b><br>87 osôb<br>47.0% online registrácií", "<b>12/9/2021 22:52:06</b><br>89 osôb<br>48.0% online registrácií", "<b>12/10/2021 11:50:45</b><br>90 osôb<br>49.0% online registrácií", "<b>12/10/2021 17:37:23</b><br>91 osôb<br>49.0% online registrácií", "<b>12/12/2021 21:59:07</b><br>92 osôb<br>50.0% online registrácií", "<b>12/12/2021 22:18:09</b><br>93 osôb<br>50.0% online registrácií", "<b>12/13/2021 8:10:02</b><br>94 osôb<br>51.0% online registrácií", "<b>12/13/2021 8:12:09</b><br>95 osôb<br>51.0% online registrácií", "<b>12/13/2021 8:19:33</b><br>97 osôb<br>52.0% online registrácií", "<b>12/13/2021 8:26:07</b><br>99 osôb<br>54.0% online registrácií", "<b>12/13/2021 8:40:31</b><br>102 osôb<br>55.0% online registrácií", "<b>12/13/2021 8:48:45</b><br>103 osôb<br>56.0% online registrácií", "<b>12/13/2021 9:07:35</b><br>104 osôb<br>56.0% online registrácií", "<b>12/13/2021 9:15:50</b><br>105 osôb<br>57.0% online registrácií", "<b>12/13/2021 9:16:32</b><br>106 osôb<br>57.0% online registrácií", "<b>12/13/2021 9:58:34</b><br>108 osôb<br>58.0% online registrácií", "<b>12/13/2021 10:15:31</b><br>110 osôb<br>59.0% online registrácií", "<b>12/13/2021 11:01:03</b><br>112 osôb<br>61.0% online registrácií", "<b>12/13/2021 11:28:43</b><br>114 osôb<br>62.0% online registrácií", "<b>12/13/2021 12:08:09</b><br>115 osôb<br>62.0% online registrácií", "<b>12/13/2021 12:23:44</b><br>116 osôb<br>63.0% online registrácií", "<b>12/13/2021 14:37:13</b><br>120 osôb<br>65.0% online registrácií", "<b>12/13/2021 14:43:26</b><br>122 osôb<br>66.0% online registrácií", "<b>12/13/2021 20:18:41</b><br>125 osôb<br>68.0% online registrácií", "<b>12/14/2021 0:53:50</b><br>127 osôb<br>69.0% online registrácií", "<b>12/14/2021 7:05:03</b><br>128 osôb<br>69.0% online registrácií", "<b>12/14/2021 8:54:16</b><br>129 osôb<br>70.0% online registrácií", "<b>12/14/2021 9:35:22</b><br>130 osôb<br>70.0% online registrácií", "<b>12/14/2021 10:07:21</b><br>131 osôb<br>71.0% online registrácií", "<b>12/14/2021 10:20:08</b><br>132 osôb<br>71.0% online registrácií", "<b>12/14/2021 20:21:56</b><br>134 osôb<br>72.0% online registrácií", "<b>12/14/2021 20:27:50</b><br>135 osôb<br>73.0% online registrácií", "<b>12/15/2021 8:37:27</b><br>136 osôb<br>74.0% online registrácií", "<b>12/15/2021 9:22:10</b><br>137 osôb<br>74.0% online registrácií", "<b>12/15/2021 14:13:30</b><br>140 osôb<br>76.0% online registrácií", "<b>12/15/2021 19:37:38</b><br>141 osôb<br>76.0% online registrácií", "<b>12/15/2021 20:20:47</b><br>142 osôb<br>77.0% online registrácií", "<b>12/16/2021 6:26:18</b><br>143 osôb<br>77.0% online registrácií", "<b>12/16/2021 9:57:29</b><br>144 osôb<br>78.0% online registrácií", "<b>12/16/2021 14:35:50</b><br>145 osôb<br>78.0% online registrácií", "<b>12/16/2021 17:30:21</b><br>146 osôb<br>79.0% online registrácií", "<b>12/16/2021 19:54:01</b><br>147 osôb<br>79.0% online registrácií", "<b>12/16/2021 21:00:33</b><br>148 osôb<br>80.0% online registrácií", "<b>12/17/2021 5:23:30</b><br>149 osôb<br>81.0% online registrácií", "<b>12/17/2021 7:57:10</b><br>150 osôb<br>81.0% online registrácií", "<b>12/17/2021 10:32:34</b><br>151 osôb<br>82.0% online registrácií", "<b>12/17/2021 15:32:04</b><br>153 osôb<br>83.0% online registrácií", "<b>12/17/2021 17:22:25</b><br>154 osôb<br>83.0% online registrácií", "<b>12/17/2021 20:35:24</b><br>155 osôb<br>84.0% online registrácií", "<b>12/18/2021 13:20:09</b><br>158 osôb<br>85.0% online registrácií", "<b>12/18/2021 21:01:20</b><br>160 osôb<br>86.0% online registrácií", "<b>12/19/2021 21:52:08</b><br>162 osôb<br>88.0% online registrácií", "<b>12/19/2021 22:33:56</b><br>163 osôb<br>88.0% online registrácií", "<b>12/19/2021 22:36:29</b><br>164 osôb<br>89.0% online registrácií", "<b>12/20/2021 7:43:32</b><br>165 osôb<br>89.0% online registrácií", "<b>12/20/2021 8:10:37</b><br>166 osôb<br>90.0% online registrácií", "<b>12/20/2021 8:30:30</b><br>167 osôb<br>90.0% online registrácií", "<b>12/20/2021 8:38:09</b><br>168 osôb<br>91.0% online registrácií", "<b>12/20/2021 9:09:30</b><br>169 osôb<br>91.0% online registrácií", "<b>12/20/2021 9:18:10</b><br>170 osôb<br>92.0% online registrácií", "<b>12/20/2021 9:54:56</b><br>171 osôb<br>92.0% online registrácií", "<b>12/20/2021 10:09:11</b><br>172 osôb<br>93.0% online registrácií", "<b>12/20/2021 10:11:05</b><br>173 osôb<br>94.0% online registrácií", "<b>12/20/2021 10:17:37</b><br>174 osôb<br>94.0% online registrácií", "<b>12/20/2021 17:21:21</b><br>176 osôb<br>95.0% online registrácií", "<b>12/20/2021 18:59:12</b><br>177 osôb<br>96.0% online registrácií"]
	},
	{
	x: [1517.81709490741, 2331.47403935185, 2420.94431712963, 2425.7284837963, 2428.84903935185, 2473.47515046296, 2590.62209490741],
	y: ["14", "88", "107", "119", "124", "139", "175"],
	name: 'SR + zahraničie',
	text: ["11/5/2021 18:19:48", "12/9/2021 15:59:13", "12/13/2021 9:27:26", "12/13/2021 14:14:29", "12/13/2021 17:21:43", "12/15/2021 13:59:17", "12/20/2021 11:08:06"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>11/5/2021 18:19:48</b><br>14 osôb<br>8.0% online registrácií", "<b>12/9/2021 15:59:13</b><br>88 osôb<br>48.0% online registrácií", "<b>12/13/2021 9:27:26</b><br>107 osôb<br>58.0% online registrácií", "<b>12/13/2021 14:14:29</b><br>119 osôb<br>64.0% online registrácií", "<b>12/13/2021 17:21:43</b><br>124 osôb<br>67.0% online registrácií", "<b>12/15/2021 13:59:17</b><br>139 osôb<br>75.0% online registrácií", "<b>12/20/2021 11:08:06</b><br>175 osôb<br>95.0% online registrácií"]
	},
	{
	x: [1152.54403935185, 1152.63653935185, 1152.85653935185, 1156.97126157407, 1160.8684837963, 1252.32320601852, 1421.25987268519, 1423.49209490741, 1639.06876157407, 1641.46681712963, 1761.50181712963, 1809.72376157407, 1831.30265046296, 1832.54820601852, 1832.78987268519, 1836.62709490741, 1838.30459490741, 1844.38792824074, 1844.73070601852, 1846.40181712963, 1847.27015046296, 1968.03431712963, 1968.72709490741, 1971.73931712963, 2143.83709490741, 2167.77820601852, 2169.46431712963, 2214.46959490741, 2216.30626157407, 2218.20709490741, 2238.54876157407, 2239.25792824074, 2250.2984837963, 2255.98820601852, 2264.91820601852, 2287.55737268518, 2304.67876157407, 2305.34653935185, 2419.7684837963, 2419.85320601852, 2420.05487268518, 2420.12070601852, 2421.51237268518, 2421.80792824074, 2422.84376157407, 2424.80987268518, 2425.13765046296, 2426.17709490741, 2428.62431712963, 2434.36376157407, 2452.39848379629, 2468.94403935185, 2521.47015046296, 2537.41959490741, 2541.93570601852, 2549.17820601852, 2575.39876157407],
	y: ["1", "2", "4", "6", "7", "8", "12", "13", "15", "16", "18", "20", "22", "24", "25", "30", "31", "32", "34", "37", "38", "49", "50", "51", "61", "63", "64", "67", "68", "69", "72", "73", "75", "78", "81", "83", "85", "86", "96", "98", "100", "101", "109", "111", "113", "117", "118", "121", "123", "126", "133", "138", "152", "156", "157", "159", "161"],
	name: 'zahraničie',
	text: ["10/21/2021 13:03:25", "10/21/2021 13:08:58", "10/21/2021 13:22:10", "10/21/2021 17:29:03", "10/21/2021 21:22:53", "10/25/2021 16:50:10", "11/1/2021 17:46:22", "11/1/2021 20:00:18", "11/10/2021 19:34:54", "11/10/2021 21:58:47", "11/15/2021 22:00:53", "11/17/2021 22:14:12", "11/18/2021 19:48:56", "11/18/2021 21:03:40", "11/18/2021 21:18:10", "11/19/2021 1:08:24", "11/19/2021 2:49:03", "11/19/2021 8:54:03", "11/19/2021 9:14:37", "11/19/2021 10:54:53", "11/19/2021 11:46:59", "11/24/2021 12:32:50", "11/24/2021 13:14:24", "11/24/2021 16:15:08", "12/1/2021 20:21:00", "12/2/2021 20:17:28", "12/2/2021 21:58:38", "12/4/2021 18:58:57", "12/4/2021 20:49:09", "12/4/2021 22:43:12", "12/5/2021 19:03:42", "12/5/2021 19:46:15", "12/6/2021 6:48:41", "12/6/2021 12:30:04", "12/6/2021 21:25:52", "12/7/2021 20:04:13", "12/8/2021 13:11:30", "12/8/2021 13:51:34", "12/13/2021 8:16:53", "12/13/2021 8:21:58", "12/13/2021 8:34:04", "12/13/2021 8:38:01", "12/13/2021 10:01:31", "12/13/2021 10:19:15", "12/13/2021 11:21:24", "12/13/2021 13:19:22", "12/13/2021 13:39:02", "12/13/2021 14:41:24", "12/13/2021 17:08:14", "12/13/2021 22:52:36", "12/14/2021 16:54:41", "12/15/2021 9:27:25", "12/17/2021 13:58:59", "12/18/2021 5:55:57", "12/18/2021 10:26:55", "12/18/2021 17:41:28", "12/19/2021 19:54:42"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>10/21/2021 13:03:25</b><br>1 osoba<br>1.0% online registrácií", "<b>10/21/2021 13:08:58</b><br>2 osoby<br>1.0% online registrácií", "<b>10/21/2021 13:22:10</b><br>4 osoby<br>2.0% online registrácií", "<b>10/21/2021 17:29:03</b><br>6 osôb<br>3.0% online registrácií", "<b>10/21/2021 21:22:53</b><br>7 osôb<br>4.0% online registrácií", "<b>10/25/2021 16:50:10</b><br>8 osôb<br>4.0% online registrácií", "<b>11/1/2021 17:46:22</b><br>12 osôb<br>6.0% online registrácií", "<b>11/1/2021 20:00:18</b><br>13 osôb<br>7.0% online registrácií", "<b>11/10/2021 19:34:54</b><br>15 osôb<br>8.0% online registrácií", "<b>11/10/2021 21:58:47</b><br>16 osôb<br>9.0% online registrácií", "<b>11/15/2021 22:00:53</b><br>18 osôb<br>10.0% online registrácií", "<b>11/17/2021 22:14:12</b><br>20 osôb<br>11.0% online registrácií", "<b>11/18/2021 19:48:56</b><br>22 osôb<br>12.0% online registrácií", "<b>11/18/2021 21:03:40</b><br>24 osôb<br>13.0% online registrácií", "<b>11/18/2021 21:18:10</b><br>25 osôb<br>14.0% online registrácií", "<b>11/19/2021 1:08:24</b><br>30 osôb<br>16.0% online registrácií", "<b>11/19/2021 2:49:03</b><br>31 osôb<br>17.0% online registrácií", "<b>11/19/2021 8:54:03</b><br>32 osôb<br>17.0% online registrácií", "<b>11/19/2021 9:14:37</b><br>34 osôb<br>18.0% online registrácií", "<b>11/19/2021 10:54:53</b><br>37 osôb<br>20.0% online registrácií", "<b>11/19/2021 11:46:59</b><br>38 osôb<br>21.0% online registrácií", "<b>11/24/2021 12:32:50</b><br>49 osôb<br>26.0% online registrácií", "<b>11/24/2021 13:14:24</b><br>50 osôb<br>27.0% online registrácií", "<b>11/24/2021 16:15:08</b><br>51 osôb<br>28.0% online registrácií", "<b>12/1/2021 20:21:00</b><br>61 osôb<br>33.0% online registrácií", "<b>12/2/2021 20:17:28</b><br>63 osôb<br>34.0% online registrácií", "<b>12/2/2021 21:58:38</b><br>64 osôb<br>35.0% online registrácií", "<b>12/4/2021 18:58:57</b><br>67 osôb<br>36.0% online registrácií", "<b>12/4/2021 20:49:09</b><br>68 osôb<br>37.0% online registrácií", "<b>12/4/2021 22:43:12</b><br>69 osôb<br>37.0% online registrácií", "<b>12/5/2021 19:03:42</b><br>72 osôb<br>39.0% online registrácií", "<b>12/5/2021 19:46:15</b><br>73 osôb<br>39.0% online registrácií", "<b>12/6/2021 6:48:41</b><br>75 osôb<br>41.0% online registrácií", "<b>12/6/2021 12:30:04</b><br>78 osôb<br>42.0% online registrácií", "<b>12/6/2021 21:25:52</b><br>81 osôb<br>44.0% online registrácií", "<b>12/7/2021 20:04:13</b><br>83 osôb<br>45.0% online registrácií", "<b>12/8/2021 13:11:30</b><br>85 osôb<br>46.0% online registrácií", "<b>12/8/2021 13:51:34</b><br>86 osôb<br>46.0% online registrácií", "<b>12/13/2021 8:16:53</b><br>96 osôb<br>52.0% online registrácií", "<b>12/13/2021 8:21:58</b><br>98 osôb<br>53.0% online registrácií", "<b>12/13/2021 8:34:04</b><br>100 osôb<br>54.0% online registrácií", "<b>12/13/2021 8:38:01</b><br>101 osôb<br>55.0% online registrácií", "<b>12/13/2021 10:01:31</b><br>109 osôb<br>59.0% online registrácií", "<b>12/13/2021 10:19:15</b><br>111 osôb<br>60.0% online registrácií", "<b>12/13/2021 11:21:24</b><br>113 osôb<br>61.0% online registrácií", "<b>12/13/2021 13:19:22</b><br>117 osôb<br>63.0% online registrácií", "<b>12/13/2021 13:39:02</b><br>118 osôb<br>64.0% online registrácií", "<b>12/13/2021 14:41:24</b><br>121 osôb<br>65.0% online registrácií", "<b>12/13/2021 17:08:14</b><br>123 osôb<br>66.0% online registrácií", "<b>12/13/2021 22:52:36</b><br>126 osôb<br>68.0% online registrácií", "<b>12/14/2021 16:54:41</b><br>133 osôb<br>72.0% online registrácií", "<b>12/15/2021 9:27:25</b><br>138 osôb<br>75.0% online registrácií", "<b>12/17/2021 13:58:59</b><br>152 osôb<br>82.0% online registrácií", "<b>12/18/2021 5:55:57</b><br>156 osôb<br>84.0% online registrácií", "<b>12/18/2021 10:26:55</b><br>157 osôb<br>85.0% online registrácií", "<b>12/18/2021 17:41:28</b><br>159 osôb<br>86.0% online registrácií", "<b>12/19/2021 19:54:42</b><br>161 osôb<br>87.0% online registrácií"]
	},

	{
		x: [0, 1152.54403935185, 1152.63653935185, 1152.70959490741, 1152.85653935185, 1154.14042824074, 1156.97126157407, 1160.8684837963, 1252.32320601852, 1253.16903935185, 1268.0909837963, 1396.64153935185, 1421.25987268519, 1423.49209490741, 1517.81709490741, 1639.06876157407, 1641.46681712963, 1641.84653935185, 1761.50181712963, 1801.34820601852, 1809.72376157407, 1831.05042824074, 1831.30265046296, 1831.95792824074, 1832.54820601852, 1832.78987268519, 1833.47903935185, 1833.58070601852, 1834.90376157407, 1835.04515046296, 1836.62709490741, 1838.30459490741, 1844.38792824074, 1844.72376157407, 1844.73070601852, 1845.00181712963, 1845.92792824074, 1846.40181712963, 1847.27015046296, 1849.97987268519, 1923.87487268519, 1928.51959490741, 1930.75042824074, 1939.15237268519, 1939.64126157407, 1940.95931712963, 1941.87903935185, 1950.38709490741, 1951.00265046296, 1968.03431712963, 1968.72709490741, 1971.73931712963, 1988.95487268519, 1990.17931712963, 2000.49653935185, 2027.23626157407, 2072.03903935185, 2075.01515046296, 2095.22987268518, 2122.73709490741, 2132.07265046296, 2143.83709490741, 2160.48570601852, 2167.77820601852, 2169.46431712963, 2179.94765046296, 2189.94181712963, 2214.46959490741, 2216.30626157407, 2218.20709490741, 2230.70459490741, 2238.12237268518, 2238.54876157407, 2239.25792824074, 2243.31737268518, 2250.2984837963, 2252.84903935185, 2255.15126157407, 2255.98820601852, 2258.63292824074, 2258.87987268518, 2264.91820601852, 2279.47459490741, 2287.55737268518, 2289.13265046296, 2304.67876157407, 2305.34653935185, 2325.41987268518, 2331.47403935185, 2338.35542824074, 2351.33292824074, 2357.11015046296, 2409.47237268518, 2409.78959490741, 2419.65431712963, 2419.68959490741, 2419.7684837963, 2419.81292824074, 2419.85320601852, 2419.92237268518, 2420.05487268518, 2420.12070601852, 2420.16237268518, 2420.29959490741, 2420.6134837963, 2420.75098379629, 2420.76265046296, 2420.94431712963, 2421.46320601852, 2421.51237268518, 2421.74570601852, 2421.80792824074, 2422.50459490741, 2422.84376157407, 2422.96570601852, 2423.62292824074, 2423.88265046296, 2424.80987268518, 2425.13765046296, 2425.7284837963, 2426.10737268518, 2426.17709490741, 2426.21098379629, 2428.62431712963, 2428.84903935185, 2431.7984837963, 2434.36376157407, 2436.38431712963, 2442.57126157407, 2444.39153935185, 2445.07653935185, 2445.60959490741, 2445.82265046296, 2452.39848379629, 2455.85265046296, 2455.9509837963, 2468.11126157407, 2468.85653935185, 2468.94403935185, 2473.47515046296, 2473.71209490741, 2479.11431712963, 2479.83348379629, 2489.92542824074, 2493.44515046296, 2498.08431712963, 2500.99292824074, 2503.38737268518, 2504.49626157407, 2512.87876157407, 2515.43987268518, 2518.02987268518, 2521.47015046296, 2523.02153935185, 2524.86070601852, 2528.07709490741, 2537.41959490741, 2541.93570601852, 2544.82292824074, 2549.17820601852, 2552.50931712963, 2575.39876157407, 2577.3559837963, 2578.05265046296, 2578.09515046296, 2587.21265046296, 2587.66403935185, 2587.99542824074, 2588.12292824074, 2588.64542824074, 2588.78987268518, 2589.40265046296, 2589.64015046296, 2589.67181712963, 2589.78070601852, 2590.62209490741, 2596.84292824074, 2598.47376157407],
		y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177],
		name: "",
		type: 'bar',
		marker: {
			color: ['rgb(255, 255, 255)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)']
		},
		showlegend: false,
		visible: true,
		hoverinfo: 'skip',
		hovermode: "none"
	},
];

var data_registration_timeLabels_2021 = ["", "21.10.", "", "", "", "", "", "", "", "", "", "", "1.11.", "", "", "", "", "", "", "", "", "18.11.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "13.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "19.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

var updateMenu_position_country_2021 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, true, false, false, false, false, false]],
		label: 'Zoradiť podľa pozície',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, true, true, true, true, true]],
		label: 'Zoradiť podľa celkového počtu',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 0.00,
	xanchor: 'middle',
	y: 1.15,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];

var updateMenu_position_gender_2021 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, false, false, false]],
		label: 'Zoradiť podľa pozície',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, true, true, true]],
		label: 'Zoradiť podľa celkového počtu',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 0.00,
	xanchor: 'middle',
	y: 1.15,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];

var updateMenu_institution_country_2021 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, false, false, false, false]],
		label: 'Zoradiť podľa typu pracoviska',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, true, true, true, true]],
		label: 'Zoradiť podľa celkového počtu',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 0.00,
	xanchor: 'middle',
	y: 1.15,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];

var updateMenu_institution_gender_2021 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, false, false, false]],
		label: 'Zoradiť podľa typu pracoviska',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, true, true, true]],
		label: 'Zoradiť podľa celkového počtu',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 0.00,
	xanchor: 'middle',
	y: 1.15,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];





var data_participation_2019 = [
// participation 2019
{
	type: "sunburst",
	ids: ["všetci", "prítomní", "neprítomní", "nesúhlas", "muži 1", "ženy 1", "bez registrácie", "muži 0", "ženy 0"],
	labels: ["dáta z prihlasovania + neregistrovaní účastníci", "prítomní", "neprítomní", "nesúhlas s analýzou", "muži", "ženy", "bez registrácie", "muži", "ženy"],
	values: [229, 226, 0, 3, 103, 103, 20, 0, 0],
	parents: ["", "všetci", "všetci", "všetci", "prítomní", "prítomní", "prítomní", "neprítomní", "neprítomní"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(124, 124, 124)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(204, 221, 255)', 'rgb(255, 204, 204)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania + neregistrovaní účastníci</b><br>229 osôb<br>", "226 prítomných<br>108.1% registrovaných", "0 neprítomných<br>0.0% registrovaných", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.3% prítomných<br>1.4% registrovaných", "103 mužov<br>45.6% prítomných<br>49.3% registrovaných", "103 žien<br>45.6% prítomných<br>49.3% registrovaných", "<b>bez registrácie</b><br>20 osôb<br>8.8% prítomných<br>", "0 mužov<br>0.0% registrovaných", "0 žien<br>0.0% registrovaných"]
}];

var data_participation_detail_2019 = [
// participation_detail 2019
{
	type: "sunburst",
	ids: ["všetci", "účasť", "iniciatívy", "prednášajúci", "organizácia", "nesúhlas", "účastníčky", "účastníci", "bez registrácie", "zástupkyne firiem", "zástupcovia firiem", "aktívne účastníčky", "aktívni účastníci", "organizátorky", "organizátori"],
	labels: ["iba prítomní", "účasť", "iniciatívy", "prednášajúci", "organizácia", "nesúhlas s analýzou", "ženy", "muži", "bez registrácie", "ženy", "muži", "ženy", "muži", "ženy", "muži"],
	values: [229, 162, 40, 9, 15, 3, 0, 0, 20, 0, 0, 0, 0, 0, 0],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "účasť", "účasť", "účasť", "iniciatívy", "iniciatívy", "prednášajúci", "prednášajúci", "organizácia", "organizácia"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 214, 16)', 'rgb(255, 174, 16)', 'rgb(255, 134, 16', 'rgb(200, 200, 200)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(0, 230, 0)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>229 osôb<br>", "<b>účasť</b><br>162 osôb<br>70.7% prítomných<br>", "<b>iniciatívy</b><br>40 osôb<br>17.5% prítomných<br>", "<b>prednášajúci</b><br>9 osôb<br>3.9% prítomných<br>", "<b>organizácia</b><br>15 osôb<br>6.6% prítomných<br>", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.3% prítomných<br>", "0 žien<br>0.0% prítomných<br>", "0 mužov<br>0.0% prítomných<br>", "<b>bez registrácie</b><br>20 osôb<br>8.7% prítomných<br>", "0 žien<br>0.0% prítomných<br>", "0 mužov<br>0.0% prítomných<br>", "0 žien<br>0.0% prítomných<br>", "0 mužov<br>0.0% prítomných<br>", "0 žien<br>0.0% prítomných<br>", "0 mužov<br>0.0% prítomných<br>"]
}];

var data_abroad_2019 = [
// abroad 2019
{
	type: "sunburst",
	ids: ["všetci", "Slovensko", "oboje", "zahraničie", "neuvedené", "nesúhlas", "muži (SR)", "ženy (SR)", "muži (NA)", "ženy (NA)", "bez dát", "muži (oboje)", "ženy (oboje", "muži (zahr.)", "ženy (zahr.)"],
	labels: ["iba prítomní", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "nesúhlas s analýzou", "muži", "ženy", "muži", "ženy", "bez dát ", "muži", "ženy", "muži", "ženy"],
	values: [229, 145, 10, 40, 31, 3, 0, 0, 0, 0, 20, 0, 0, 0, 0],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "Slovensko", "Slovensko", "neuvedené", "neuvedené", "neuvedené", "oboje", "oboje", "zahraničie", "zahraničie"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>229 osôb<br>", "<b>Slovensko</b><br>145 osôb<br>63.3% prítomných<br>", "<b>SR a zahraničie</b><br>10 osôb<br>4.4% prítomných<br>", "<b>zahraničie</b><br>40 osôb<br>17.5% prítomných<br>", "<b>neuvedené</b><br>31 osôb<br>13.5% prítomných<br>", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.3% prítomných<br>", "0 mužov<br>0.0% prítomných<br>", "0 žien<br>0.0% prítomných<br>", "0 mužov<br>0.0% prítomných<br>", "0 žien<br>0.0% prítomných<br>", "<b>bez dát </b><br>20 osôb<br>8.7% prítomných<br>", "0 mužov<br>0.0% prítomných<br>", "0 žien<br>0.0% prítomných<br>", "0 mužov<br>0.0% prítomných<br>", "0 žien<br>0.0% prítomných<br>"]
}];

var data_subject_2019 = [
// subject 2019
{
	type: "sunburst",
	ids: ["všetci", "neprítomní", "nesúhlas", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "STEM (neprítomní)", "SSH (neprítomní)", "iné (neprítomní)", "iniciatívy (neprítomní)", "neuvedené (neprítomní)", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "STEM nezaradené", "STEM neuvedené", "digital humanities", "história", "archeológia", "antropológia", "religionistika", "psychológia", "didaktika", "sociológia", "politické vedy", "ekonomické vedy", "SSH nezaradené", "SSH neuvedené", "podpora výskumu", "vzdelávanie, poradenstvo", "práca s mládežou", "projektový manažment", "popularizácia", "médiá", "iné nezaradené", "iné neuvedené", "iniciatívy podpora výskumu", "iniciatívy podpora výskumu (STEM)", "iniciatívy práca s mládežou (STEM)", "iniciatívy práca s mládežou", "iniciatívy vzdelávanie, poradenstvo", "iniciatívy popularizácia", "iniciatívy chémia", "iniciatívy fyzika", "neuvedené (iniciatívy)", "neuvedené (neuvedené)"],
	labels: ["iba dáta z registrácie", "neprítomní", "nesúhlas s analýzou", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "nezaradené", "neuvedené", "digital humanities", "história", "archeológia", "antropológia", "religionistika", "psychológia", "didaktika", "sociológia", "politické vedy", "ekonomické vedy", "nezaradené", "neuvedené", "podpora výskumu", "vzdelávanie, poradenstvo", "práca s mládežou", "projektový manažment", "popularizácia", "médiá", "nezaradené", "neuvedené", "podpora výskumu", "podpora výskumu (STEM)", "práca s mládežou (STEM)", "práca s mládežou", "vzdelávanie, poradenstvo", "popularizácia", "chémia", "fyzika", "neuvedené", "neuvedené"],
	values: [198, 0, 3, 114, 27, 14, 40, 0, 0, 0, 0, 0, 0, 12, 8, 12, 6, 3, 3, 0, 2, 2, 15, 0, 10, 5, 4, 9, 7, 4, 6, 2, 2, 2, 0, 2, 2, 3, 3, 0, 3, 2, 0, 3, 7, 2, 0, 6, 3, 0, 1, 0, 1, 2, 1, 11, 3, 10, 2, 4, 10, 0, 0, 0, 0],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "všetci", "všetci", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "neuvedené"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(190, 190, 190)', 'rgb(200, 200, 200)', 'rgb(0, 102, 102)', 'rgb(204, 0, 0)', 'rgb(62, 0, 62)', 'rgb(92, 0, 92)', 'rgb(124, 124, 124)', 'rgb(95, 146, 146)', 'rgb(197, 95, 95)', 'rgb(126,95,126)', 'rgb(82, 0, 82)', 'rgb(157, 157, 157)', 'rgb(53, 104, 0)', 'rgb(82, 163, 0)', 'rgb(102, 204, 0)', 'rgb(222, 222, 92)', 'rgb(255, 238, 153)', 'rgb(255,247,126)', 'rgb(255, 255, 98)', 'rgb(255, 255, 0)', 'rgb(255, 204, 0)', 'rgb(255, 128, 0)', 'rgb(204, 101, 0)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(0, 0, 255)', 'rgb(0, 128, 255)', 'rgb(136, 136, 136)', 'rgb(175, 175, 175)', 'rgb(36, 18, 0)', 'rgb(75, 37, 0)', 'rgb(89, 121, 0)', 'rgb(0, 102, 102)', 'rgb(0, 102, 102)', 'rgb(102, 51, 77)', 'rgb(145,0,73)', 'rgb(204, 0, 102)', 'rgb(255, 47, 151)', 'rgb(153, 0, 76)', 'rgb(214, 48, 90)', 'rgb(214, 48, 62)', 'rgb(214, 48, 48)', 'rgb(218, 94, 69)', 'rgb(218, 106, 69)', 'rgb(204, 0, 0)', 'rgb(204, 0, 0)', 'rgb(82, 0, 82)', 'rgb(132, 0, 132)', 'rgb(142, 0, 142)', 'rgb(152, 0, 152)', 'rgb(162, 0, 162)', 'rgb(172, 0, 172)', 'rgb(62, 0, 62)', 'rgb(62, 0, 62)', 'rgb(82, 0, 82)', 'rgb(31, 51, 82)', 'rgb(36, 77, 112)', 'rgb(142, 0, 142)', 'rgb(132, 0, 132)', 'rgb(162, 0, 162)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(124, 124, 124)', 'rgb(124, 124, 124)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba dáta z registrácie</b><br>198 osôb<br>", "0 neprítomných<br>0.0% registrovaných", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.5% registrovaných", "<b>STEM</b><br>114 osôb<br>57.6% registrovaných", "<b>SSH</b><br>27 osôb<br>13.6% registrovaných", "<b>iné</b><br>14 osôb<br>7.1% registrovaných", "<b>iniciatívy</b><br>40 osôb<br>20.2% registrovaných", "<b>neuvedené</b><br>0 osôb<br>0.0% registrovaných", "<b>STEM</b><br>0 osôb<br>0.0% registrovaných", "<b>SSH</b><br>0 osôb<br>0.0% registrovaných", "<b>iné</b><br>0 osôb<br>0.0% registrovaných", "<b>iniciatívy</b><br>0 osôb<br>0.0% registrovaných", "<b>neuvedené</b><br>0 osôb<br>0.0% registrovaných", "<b>genetika</b><br>12 osôb<br>6.1% registrovaných", "<b>molekulárna biológia</b><br>8 osôb<br>4.0% registrovaných", "<b>biológia</b><br>12 osôb<br>6.1% registrovaných", "<b>biochémia</b><br>6 osôb<br>3.0% registrovaných", "<b>biofyzika</b><br>3 osoby<br>1.5% registrovaných", "<b>bioinformatika</b><br>3 osoby<br>1.5% registrovaných", "<b>biomedicína</b><br>0 osôb<br>0.0% registrovaných", "<b>biotechnológie, biomateriály</b><br>2 osoby<br>1.0% registrovaných", "<b>neurovedy</b><br>2 osoby<br>1.0% registrovaných", "<b>medicína, lekárske vedy</b><br>15 osôb<br>7.6% registrovaných", "<b>farmácia</b><br>0 osôb<br>0.0% registrovaných", "<b>chémia</b><br>10 osôb<br>5.1% registrovaných", "<b>fyzika</b><br>5 osôb<br>2.5% registrovaných", "<b>matematika</b><br>4 osoby<br>2.0% registrovaných", "<b>IT</b><br>9 osôb<br>4.5% registrovaných", "<b>technológie</b><br>7 osôb<br>3.5% registrovaných", "<b>stavebné inžinierstvo, architektúra</b><br>4 osoby<br>2.0% registrovaných", "<b>geopriestorové vedy</b><br>6 osôb<br>3.0% registrovaných", "<b>vedy o Zemi</b><br>2 osoby<br>1.0% registrovaných", "<b>ekologické a environmentálne vedy</b><br>2 osoby<br>1.0% registrovaných", "<b>nezaradené</b><br>2 osoby<br>1.0% registrovaných", "<b>neuvedené</b><br>0 osôb<br>0.0% registrovaných", "<b>digital humanities</b><br>2 osoby<br>1.0% registrovaných", "<b>história</b><br>2 osoby<br>1.0% registrovaných", "<b>archeológia</b><br>3 osoby<br>1.5% registrovaných", "<b>antropológia</b><br>3 osoby<br>1.5% registrovaných", "<b>religionistika</b><br>0 osôb<br>0.0% registrovaných", "<b>psychológia</b><br>3 osoby<br>1.5% registrovaných", "<b>didaktika</b><br>2 osoby<br>1.0% registrovaných", "<b>sociológia</b><br>0 osôb<br>0.0% registrovaných", "<b>politické vedy</b><br>3 osoby<br>1.5% registrovaných", "<b>ekonomické vedy</b><br>7 osôb<br>3.5% registrovaných", "<b>nezaradené</b><br>2 osoby<br>1.0% registrovaných", "<b>neuvedené</b><br>0 osôb<br>0.0% registrovaných", "<b>podpora výskumu</b><br>6 osôb<br>3.0% registrovaných", "<b>vzdelávanie, poradenstvo</b><br>3 osoby<br>1.5% registrovaných", "<b>práca s mládežou</b><br>0 osôb<br>0.0% registrovaných", "<b>projektový manažment</b><br>1 osoba<br>0.5% registrovaných", "<b>popularizácia</b><br>0 osôb<br>0.0% registrovaných", "<b>médiá</b><br>1 osoba<br>0.5% registrovaných", "<b>nezaradené</b><br>2 osoby<br>1.0% registrovaných", "<b>neuvedené</b><br>1 osoba<br>0.5% registrovaných", "<b>podpora výskumu</b><br>11 osôb<br>5.6% registrovaných", "<b>podpora výskumu (STEM)</b><br>3 osoby<br>1.5% registrovaných", "<b>práca s mládežou (STEM)</b><br>10 osôb<br>5.1% registrovaných", "<b>práca s mládežou</b><br>2 osoby<br>1.0% registrovaných", "<b>vzdelávanie, poradenstvo</b><br>4 osoby<br>2.0% registrovaných", "<b>popularizácia</b><br>10 osôb<br>5.1% registrovaných", "<b>chémia</b><br>0 osôb<br>0.0% registrovaných", "<b>fyzika</b><br>0 osôb<br>0.0% registrovaných", "<b>neuvedené</b><br>0 osôb<br>0.0% registrovaných", "<b>neuvedené</b><br>0 osôb<br>0.0% registrovaných"]
}];

var data_position_country_2019 = [
	// position_country 2019
	{
		x: [3, 18, 6, 8, 3, 14, 69, 12, 12, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'Slovensko',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>profesor, docent </b><br>Slovensko: 3 osoby<br>1.3% prítomných<br>1.4% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 18 osôb<br>7.9% prítomných<br>8.5% registrovaných", "<b>PI (vedúci laboratória)</b><br>Slovensko: 6 osôb<br>2.6% prítomných<br>2.8% registrovaných", "<b>postdok, junior researcher</b><br>Slovensko: 8 osôb<br>3.5% prítomných<br>3.8% registrovaných", "<b>výskum v industry</b><br>Slovensko: 3 osoby<br>1.3% prítomných<br>1.4% registrovaných", "<b>doktorand </b><br>Slovensko: 14 osôb<br>6.1% prítomných<br>6.6% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 69 osôb<br>30.1% prítomných<br>32.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 12 osôb<br>5.2% prítomných<br>5.7% registrovaných", "<b>iné </b><br>Slovensko: 12 osôb<br>5.2% prítomných<br>5.7% registrovaných", ""]
	},
	{
		x: [1, 1, 1, 3, 0, 2, 1, 0, 1, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'SR + zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(161, 80, 22)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>profesor, docent </b><br>SR + zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>SR + zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", "<b>PI (vedúci laboratória)</b><br>SR + zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", "<b>postdok, junior researcher</b><br>SR + zahraničie: 3 osoby<br>1.3% prítomných<br>1.4% registrovaných", "", "<b>doktorand </b><br>SR + zahraničie: 2 osoby<br>0.9% prítomných<br>0.9% registrovaných", "<b>mimo akadémie </b><br>SR + zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", "", "<b>iné </b><br>SR + zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", ""]
	},
	{
		x: [0, 3, 1, 16, 1, 11, 3, 3, 2, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(255, 127, 14)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 3 osoby<br>1.3% prítomných<br>1.4% registrovaných", "<b>PI (vedúci laboratória)</b><br>zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", "<b>postdok, junior researcher</b><br>zahraničie: 16 osôb<br>7.0% prítomných<br>7.5% registrovaných", "<b>výskum v industry</b><br>zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", "<b>doktorand </b><br>zahraničie: 11 osôb<br>4.8% prítomných<br>5.2% registrovaných", "<b>mimo akadémie </b><br>zahraničie: 3 osoby<br>1.3% prítomných<br>1.4% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 3 osoby<br>1.3% prítomných<br>1.4% registrovaných", "<b>iné </b><br>zahraničie: 2 osoby<br>0.9% prítomných<br>0.9% registrovaných", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 11],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'neuvedené',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(124, 124, 124)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>neuvedené (krajina): 11 osôb<br>4.8% prítomných<br>5.2% registrovaných"]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "<b>iné </b><br>nesúhlas s analýzou: 3 osoby<br>1.4% registrovaných", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>8.7% prítomných<br>"]
	},
	{
		x: [69, 14, 8, 18, 12, 12, 6, 3, 3, 0],
		y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
		name: 'Slovensko',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>mimo akadémie </b><br>Slovensko: 69 osôb<br>30.1% prítomných<br>32.5% registrovaných", "<b>doktorand </b><br>Slovensko: 14 osôb<br>6.1% prítomných<br>6.6% registrovaných", "<b>postdok, junior researcher</b><br>Slovensko: 8 osôb<br>3.5% prítomných<br>3.8% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 18 osôb<br>7.9% prítomných<br>8.5% registrovaných", "<b>iné </b><br>Slovensko: 12 osôb<br>5.2% prítomných<br>5.7% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 12 osôb<br>5.2% prítomných<br>5.7% registrovaných", "<b>PI (vedúci laboratória)</b><br>Slovensko: 6 osôb<br>2.6% prítomných<br>2.8% registrovaných", "<b>profesor, docent </b><br>Slovensko: 3 osoby<br>1.3% prítomných<br>1.4% registrovaných", "<b>výskum v industry</b><br>Slovensko: 3 osoby<br>1.3% prítomných<br>1.4% registrovaných", ""]
	},
	{
		x: [1, 2, 3, 1, 1, 0, 1, 1, 0, 0],
		y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
		name: 'SR + zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(161, 80, 22)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>mimo akadémie </b><br>SR + zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", "<b>doktorand </b><br>SR + zahraničie: 2 osoby<br>0.9% prítomných<br>0.9% registrovaných", "<b>postdok, junior researcher</b><br>SR + zahraničie: 3 osoby<br>1.3% prítomných<br>1.4% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>SR + zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", "<b>iné </b><br>SR + zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", "", "<b>PI (vedúci laboratória)</b><br>SR + zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", "<b>profesor, docent </b><br>SR + zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", "", ""]
	},
	{
		x: [3, 11, 16, 3, 2, 3, 1, 0, 1, 0],
		y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
		name: 'zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(255, 127, 14)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>mimo akadémie </b><br>zahraničie: 3 osoby<br>1.3% prítomných<br>1.4% registrovaných", "<b>doktorand </b><br>zahraničie: 11 osôb<br>4.8% prítomných<br>5.2% registrovaných", "<b>postdok, junior researcher</b><br>zahraničie: 16 osôb<br>7.0% prítomných<br>7.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 3 osoby<br>1.3% prítomných<br>1.4% registrovaných", "<b>iné </b><br>zahraničie: 2 osoby<br>0.9% prítomných<br>0.9% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 3 osoby<br>1.3% prítomných<br>1.4% registrovaných", "<b>PI (vedúci laboratória)</b><br>zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", "", "<b>výskum v industry</b><br>zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 11],
		y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
		name: 'neuvedené',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(124, 124, 124)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>neuvedené (krajina): 11 osôb<br>4.8% prítomných<br>5.2% registrovaných"]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
		y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "<b>iné </b><br>nesúhlas s analýzou: 3 osoby<br>1.4% registrovaných", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
		y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>8.7% prítomných<br>"]
	}
];

var data_position_gender_2019 = [
	// position_gender 2019
	{
		x: [2, 11, 4, 13, 2, 14, 36, 7, 8, 6],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'ženy',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(230, 0, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>profesor, docent </b><br>2 ženy<br>0.9% prítomných<br>0.9% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>11 žien<br>4.8% prítomných<br>5.2% registrovaných", "<b>PI (vedúci laboratória)</b><br>4 ženy<br>1.7% prítomných<br>1.9% registrovaných", "<b>postdok, junior researcher</b><br>13 žien<br>5.7% prítomných<br>6.1% registrovaných", "<b>výskum v industry</b><br>2 ženy<br>0.9% prítomných<br>0.9% registrovaných", "<b>doktorand </b><br>14 žien<br>6.1% prítomných<br>6.6% registrovaných", "<b>mimo akadémie </b><br>36 žien<br>15.7% prítomných<br>17.0% registrovaných", "<b>študent (Bc./Mgr.) </b><br>7 žien<br>3.1% prítomných<br>3.3% registrovaných", "<b>iné </b><br>8 žien<br>3.5% prítomných<br>3.8% registrovaných", "<b>neuvedené </b><br>6 žien<br>2.6% prítomných<br>2.8% registrovaných"]
	},
	{
		x: [2, 11, 4, 14, 2, 14, 37, 8, 8, 6],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'muži',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 230)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>profesor, docent </b><br>2 muži<br>0.9% prítomných<br>0.9% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>11 mužov<br>4.8% prítomných<br>5.2% registrovaných", "<b>PI (vedúci laboratória)</b><br>4 muži<br>1.7% prítomných<br>1.9% registrovaných", "<b>postdok, junior researcher</b><br>14 mužov<br>6.1% prítomných<br>6.6% registrovaných", "<b>výskum v industry</b><br>2 muži<br>0.9% prítomných<br>0.9% registrovaných", "<b>doktorand </b><br>14 mužov<br>6.1% prítomných<br>6.6% registrovaných", "<b>mimo akadémie </b><br>37 mužov<br>16.2% prítomných<br>17.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>8 mužov<br>3.5% prítomných<br>3.8% registrovaných", "<b>iné </b><br>8 mužov<br>3.5% prítomných<br>3.8% registrovaných", "<b>neuvedené </b><br>6 mužov<br>2.6% prítomných<br>2.8% registrovaných"]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "<b>iné </b><br>nesúhlas s analýzou: 3 osoby<br>1.4% registrovaných", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>8.7% prítomných<br>"]
	},
	{
		x: [36, 14, 13, 11, 8, 7, 4, 2, 2, 6],
		y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
		name: 'ženy',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(230, 0, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>mimo akadémie </b><br>36 žien<br>15.7% prítomných<br>17.0% registrovaných", "<b>doktorand </b><br>14 žien<br>6.1% prítomných<br>6.6% registrovaných", "<b>postdok, junior researcher</b><br>13 žien<br>5.7% prítomných<br>6.1% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>11 žien<br>4.8% prítomných<br>5.2% registrovaných", "<b>iné </b><br>8 žien<br>3.5% prítomných<br>3.8% registrovaných", "<b>študent (Bc./Mgr.) </b><br>7 žien<br>3.1% prítomných<br>3.3% registrovaných", "<b>PI (vedúci laboratória)</b><br>4 ženy<br>1.7% prítomných<br>1.9% registrovaných", "<b>profesor, docent </b><br>2 ženy<br>0.9% prítomných<br>0.9% registrovaných", "<b>výskum v industry</b><br>2 ženy<br>0.9% prítomných<br>0.9% registrovaných", "<b>neuvedené </b><br>6 žien<br>2.6% prítomných<br>2.8% registrovaných"]
	},
	{
		x: [37, 14, 14, 11, 8, 8, 4, 2, 2, 6],
		y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
		name: 'muži',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 230)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>mimo akadémie </b><br>37 mužov<br>16.2% prítomných<br>17.5% registrovaných", "<b>doktorand </b><br>14 mužov<br>6.1% prítomných<br>6.6% registrovaných", "<b>postdok, junior researcher</b><br>14 mužov<br>6.1% prítomných<br>6.6% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>11 mužov<br>4.8% prítomných<br>5.2% registrovaných", "<b>iné </b><br>8 mužov<br>3.5% prítomných<br>3.8% registrovaných", "<b>študent (Bc./Mgr.) </b><br>8 mužov<br>3.5% prítomných<br>3.8% registrovaných", "<b>PI (vedúci laboratória)</b><br>4 muži<br>1.7% prítomných<br>1.9% registrovaných", "<b>profesor, docent </b><br>2 muži<br>0.9% prítomných<br>0.9% registrovaných", "<b>výskum v industry</b><br>2 muži<br>0.9% prítomných<br>0.9% registrovaných", "<b>neuvedené </b><br>6 mužov<br>2.6% prítomných<br>2.8% registrovaných"]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
		y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "<b>iné </b><br>nesúhlas s analýzou: 3 osoby<br>1.4% registrovaných", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
		y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "iné ", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>8.7% prítomných<br>"]
	}
];

var data_institution_country_2019 = [
	// institution_country 2019
	{
		x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'Slovensko',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
		x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'SR + zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(161, 80, 22)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
		x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(255, 127, 14)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
		x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'neuvedené',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(124, 124, 124)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "<b>iné</b><br>nesúhlas s analýzou: 3 osoby<br>0.8% registrovaných", ""]
	},
	{
		x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>výskumné pracovisko</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>výskum + univerzita</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>nadnárodná organizácia</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>komerčná spoločnosť</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>podpora výskumu</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>práca s mládežou</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>štátna správa</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>iné</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>neuvedené</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>"]
	},
	{
		x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'Slovensko',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
		x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'SR + zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(161, 80, 22)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
		x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(255, 127, 14)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
		x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'neuvedené',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(124, 124, 124)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "<b>iné</b><br>nesúhlas s analýzou: 3 osoby<br>0.8% registrovaných", ""]
	},
	{
		x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>výskumné pracovisko</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>výskum + univerzita</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>nadnárodná organizácia</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>komerčná spoločnosť</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>podpora výskumu</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>práca s mládežou</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>štátna správa</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>iné</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>neuvedené</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>"]
	}
];

var data_institution_gender_2019 = [
	// institution_gender 2019
	{
		x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'ženy',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(230, 0, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
		x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'muži',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 230)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "<b>iné</b><br>nesúhlas s analýzou: 3 osoby<br>0.8% registrovaných", ""]
	},
	{
		x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>výskumné pracovisko</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>výskum + univerzita</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>nadnárodná organizácia</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>komerčná spoločnosť</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>podpora výskumu</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>práca s mládežou</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>štátna správa</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>iné</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>neuvedené</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>"]
	},
	{
		x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'ženy',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(230, 0, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
		x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'muži',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 230)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "<b>iné</b><br>nesúhlas s analýzou: 3 osoby<br>0.8% registrovaných", ""]
	},
	{
		x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>výskumné pracovisko</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>výskum + univerzita</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>nadnárodná organizácia</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>komerčná spoločnosť</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>podpora výskumu</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>práca s mládežou</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>štátna správa</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>iné</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>neuvedené</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>"]
	}
];

var data_registration_timeSeries_2019 = [
	// registration_timeSeries 2019
	{
		x: [503.284398148, 687.80912037, 860.248287037, 860.267731481, 985.38162037, 986.640787037, 1011.75939815, 1012.08384259, 1022.78939815, 1023.43023148, 1023.75300926, 1025.77078704, 1029.11134259, 1030.31634259, 1046.59078704, 1047.4924537, 1121.9824537, 1124.24606481, 1204.17384259, 1224.46217593, 1243.3124537, 1393.99523148, 1394.04773148, 1550.50689815, 1574.60634259, 1695.80578704, 1770.06606481, 1848.82328704, 1939.08439815, 1943.13773148, 1959.64078704, 1987.84578704, 1987.86106481, 1988.72189815, 1988.9524537, 1989.96439815, 1990.09634259, 1990.22384259, 1990.27828704, 1995.02912037, 1996.58689815, 2004.97578704, 2006.67078704, 2007.01023148, 2007.18273148, 2009.42550926, 2017.75217593, 2031.86717593, 2064.21023148, 2067.93356481, 2067.97023148, 2084.68884259, 2101.18717593, 2108.32856481, 2111.69550926, 2158.25523148, 2200.15634259, 2236.03800926, 2269.76550926, 2271.36412037, 2272.75800926, 2296.34217593, 2307.38384259, 2323.0074537, 2323.13634259, 2323.28634259, 2324.03828704, 2330.19162037, 2330.9174537, 2341.83078704, 2342.17328704, 2353.92273148, 2366.72050926, 2378.09550926, 2392.29717593, 2395.01412037, 2397.02856481, 2419.33356481, 2422.01662037, 2431.96106481, 2438.16884259, 2438.36606481, 2439.11578704, 2439.45662037, 2439.55412037, 2441.6899537, 2443.99634259, 2444.81356481, 2449.06523148, 2449.7899537, 2449.92828704, 2451.65328704, 2453.43412037, 2510.0024537, 2511.05523148, 2512.02328704, 2515.95884259, 2534.39634259, 2599.00634259],
		y: [5, 6, 8, 9, 11, 12, 20, 21, 23, 24, 25, 27, 29, 30, 31, 32, 38, 39, 40, 42, 43, 44, 45, 47, 48, 49, 52, 53, 55, 56, 58, 59, 60, 63, 64, 66, 67, 68, 69, 72, 74, 75, 76, 77, 78, 79, 81, 82, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 112, 113, 114, 115, 116, 117, 120, 121, 123, 124, 125, 126, 129, 130, 131, 132, 133, 134, 136, 138, 139, 140, 141, 142, 143, 144],
		name: "Slovensko",
		text: ["23.09.2019 17:47", "01.10.2019 10:18", "08.10.2019 14:45", "08.10.2019 14:46", "13.10.2019 19:53", "13.10.2019 21:08", "14.10.2019 22:15", "14.10.2019 22:35", "15.10.2019 09:17", "15.10.2019 09:55", "15.10.2019 10:15", "15.10.2019 12:16", "15.10.2019 15:36", "15.10.2019 16:49", "16.10.2019 09:05", "16.10.2019 09:59", "19.10.2019 12:29", "19.10.2019 14:44", "22.10.2019 22:40", "23.10.2019 18:57", "24.10.2019 13:48", "30.10.2019 20:29", "30.10.2019 20:33", "06.11.2019 09:00", "07.11.2019 09:06", "12.11.2019 10:18", "15.11.2019 12:34", "18.11.2019 19:19", "22.11.2019 13:35", "22.11.2019 17:38", "23.11.2019 10:08", "24.11.2019 14:20", "24.11.2019 14:21", "24.11.2019 15:13", "24.11.2019 15:27", "24.11.2019 16:28", "24.11.2019 16:35", "24.11.2019 16:43", "24.11.2019 16:46", "24.11.2019 21:31", "24.11.2019 23:05", "25.11.2019 07:28", "25.11.2019 09:10", "25.11.2019 09:30", "25.11.2019 09:41", "25.11.2019 11:55", "25.11.2019 20:15", "26.11.2019 10:22", "27.11.2019 18:42", "27.11.2019 22:26", "27.11.2019 22:28", "28.11.2019 15:11", "29.11.2019 07:41", "29.11.2019 14:49", "29.11.2019 18:11", "01.12.2019 16:45", "03.12.2019 10:39", "04.12.2019 22:32", "06.12.2019 08:16", "06.12.2019 09:52", "06.12.2019 11:15", "07.12.2019 10:50", "07.12.2019 21:53", "08.12.2019 13:30", "08.12.2019 13:38", "08.12.2019 13:47", "08.12.2019 14:32", "08.12.2019 20:41", "08.12.2019 21:25", "09.12.2019 08:20", "09.12.2019 08:40", "09.12.2019 20:25", "10.12.2019 09:13", "10.12.2019 20:35", "11.12.2019 10:48", "11.12.2019 13:31", "11.12.2019 15:31", "12.12.2019 13:50", "12.12.2019 16:31", "13.12.2019 02:27", "13.12.2019 08:40", "13.12.2019 08:52", "13.12.2019 09:37", "13.12.2019 09:57", "13.12.2019 10:03", "13.12.2019 12:11", "13.12.2019 14:29", "13.12.2019 15:18", "13.12.2019 19:34", "13.12.2019 20:17", "13.12.2019 20:25", "13.12.2019 22:09", "13.12.2019 23:56", "16.12.2019 08:30", "16.12.2019 09:33", "16.12.2019 10:31", "16.12.2019 14:27", "17.12.2019 08:53", "20.12.2019 01:30"],
		type: 'scatter',
		mode: 'markers',
		marker: {
			color: 'rgb(0, 77, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovermode: "closest",
		hovertext: ["<b>23.09.2019 17:47</b><br>5 osôb<br>3.0% online registrácií", "<b>01.10.2019 10:18</b><br>6 osôb<br>4.0% online registrácií", "<b>08.10.2019 14:45</b><br>8 osôb<br>6.0% online registrácií", "<b>08.10.2019 14:46</b><br>9 osôb<br>6.0% online registrácií", "<b>13.10.2019 19:53</b><br>11 osôb<br>8.0% online registrácií", "<b>13.10.2019 21:08</b><br>12 osôb<br>8.0% online registrácií", "<b>14.10.2019 22:15</b><br>20 osôb<br>14.0% online registrácií", "<b>14.10.2019 22:35</b><br>21 osôb<br>15.0% online registrácií", "<b>15.10.2019 09:17</b><br>23 osôb<br>16.0% online registrácií", "<b>15.10.2019 09:55</b><br>24 osôb<br>17.0% online registrácií", "<b>15.10.2019 10:15</b><br>25 osôb<br>17.0% online registrácií", "<b>15.10.2019 12:16</b><br>27 osôb<br>19.0% online registrácií", "<b>15.10.2019 15:36</b><br>29 osôb<br>20.0% online registrácií", "<b>15.10.2019 16:49</b><br>30 osôb<br>21.0% online registrácií", "<b>16.10.2019 09:05</b><br>31 osôb<br>22.0% online registrácií", "<b>16.10.2019 09:59</b><br>32 osôb<br>22.0% online registrácií", "<b>19.10.2019 12:29</b><br>38 osôb<br>26.0% online registrácií", "<b>19.10.2019 14:44</b><br>39 osôb<br>27.0% online registrácií", "<b>22.10.2019 22:40</b><br>40 osôb<br>28.0% online registrácií", "<b>23.10.2019 18:57</b><br>42 osôb<br>29.0% online registrácií", "<b>24.10.2019 13:48</b><br>43 osôb<br>30.0% online registrácií", "<b>30.10.2019 20:29</b><br>44 osôb<br>31.0% online registrácií", "<b>30.10.2019 20:33</b><br>45 osôb<br>31.0% online registrácií", "<b>06.11.2019 09:00</b><br>47 osôb<br>33.0% online registrácií", "<b>07.11.2019 09:06</b><br>48 osôb<br>33.0% online registrácií", "<b>12.11.2019 10:18</b><br>49 osôb<br>34.0% online registrácií", "<b>15.11.2019 12:34</b><br>52 osôb<br>36.0% online registrácií", "<b>18.11.2019 19:19</b><br>53 osôb<br>37.0% online registrácií", "<b>22.11.2019 13:35</b><br>55 osôb<br>38.0% online registrácií", "<b>22.11.2019 17:38</b><br>56 osôb<br>39.0% online registrácií", "<b>23.11.2019 10:08</b><br>58 osôb<br>40.0% online registrácií", "<b>24.11.2019 14:20</b><br>59 osôb<br>41.0% online registrácií", "<b>24.11.2019 14:21</b><br>60 osôb<br>42.0% online registrácií", "<b>24.11.2019 15:13</b><br>63 osôb<br>44.0% online registrácií", "<b>24.11.2019 15:27</b><br>64 osôb<br>44.0% online registrácií", "<b>24.11.2019 16:28</b><br>66 osôb<br>46.0% online registrácií", "<b>24.11.2019 16:35</b><br>67 osôb<br>47.0% online registrácií", "<b>24.11.2019 16:43</b><br>68 osôb<br>47.0% online registrácií", "<b>24.11.2019 16:46</b><br>69 osôb<br>48.0% online registrácií", "<b>24.11.2019 21:31</b><br>72 osôb<br>50.0% online registrácií", "<b>24.11.2019 23:05</b><br>74 osôb<br>51.0% online registrácií", "<b>25.11.2019 07:28</b><br>75 osôb<br>52.0% online registrácií", "<b>25.11.2019 09:10</b><br>76 osôb<br>53.0% online registrácií", "<b>25.11.2019 09:30</b><br>77 osôb<br>53.0% online registrácií", "<b>25.11.2019 09:41</b><br>78 osôb<br>54.0% online registrácií", "<b>25.11.2019 11:55</b><br>79 osôb<br>55.0% online registrácií", "<b>25.11.2019 20:15</b><br>81 osôb<br>56.0% online registrácií", "<b>26.11.2019 10:22</b><br>82 osôb<br>57.0% online registrácií", "<b>27.11.2019 18:42</b><br>86 osôb<br>60.0% online registrácií", "<b>27.11.2019 22:26</b><br>87 osôb<br>60.0% online registrácií", "<b>27.11.2019 22:28</b><br>88 osôb<br>61.0% online registrácií", "<b>28.11.2019 15:11</b><br>89 osôb<br>62.0% online registrácií", "<b>29.11.2019 07:41</b><br>90 osôb<br>63.0% online registrácií", "<b>29.11.2019 14:49</b><br>91 osôb<br>63.0% online registrácií", "<b>29.11.2019 18:11</b><br>92 osôb<br>64.0% online registrácií", "<b>01.12.2019 16:45</b><br>93 osôb<br>65.0% online registrácií", "<b>03.12.2019 10:39</b><br>94 osôb<br>65.0% online registrácií", "<b>04.12.2019 22:32</b><br>95 osôb<br>66.0% online registrácií", "<b>06.12.2019 08:16</b><br>96 osôb<br>67.0% online registrácií", "<b>06.12.2019 09:52</b><br>97 osôb<br>67.0% online registrácií", "<b>06.12.2019 11:15</b><br>98 osôb<br>68.0% online registrácií", "<b>07.12.2019 10:50</b><br>99 osôb<br>69.0% online registrácií", "<b>07.12.2019 21:53</b><br>100 osôb<br>69.0% online registrácií", "<b>08.12.2019 13:30</b><br>101 osôb<br>70.0% online registrácií", "<b>08.12.2019 13:38</b><br>102 osôb<br>71.0% online registrácií", "<b>08.12.2019 13:47</b><br>103 osôb<br>72.0% online registrácií", "<b>08.12.2019 14:32</b><br>104 osôb<br>72.0% online registrácií", "<b>08.12.2019 20:41</b><br>105 osôb<br>73.0% online registrácií", "<b>08.12.2019 21:25</b><br>106 osôb<br>74.0% online registrácií", "<b>09.12.2019 08:20</b><br>107 osôb<br>74.0% online registrácií", "<b>09.12.2019 08:40</b><br>108 osôb<br>75.0% online registrácií", "<b>09.12.2019 20:25</b><br>109 osôb<br>76.0% online registrácií", "<b>10.12.2019 09:13</b><br>110 osôb<br>76.0% online registrácií", "<b>10.12.2019 20:35</b><br>112 osôb<br>78.0% online registrácií", "<b>11.12.2019 10:48</b><br>113 osôb<br>78.0% online registrácií", "<b>11.12.2019 13:31</b><br>114 osôb<br>79.0% online registrácií", "<b>11.12.2019 15:31</b><br>115 osôb<br>80.0% online registrácií", "<b>12.12.2019 13:50</b><br>116 osôb<br>81.0% online registrácií", "<b>12.12.2019 16:31</b><br>117 osôb<br>81.0% online registrácií", "<b>13.12.2019 02:27</b><br>120 osôb<br>83.0% online registrácií", "<b>13.12.2019 08:40</b><br>121 osôb<br>84.0% online registrácií", "<b>13.12.2019 08:52</b><br>123 osôb<br>85.0% online registrácií", "<b>13.12.2019 09:37</b><br>124 osôb<br>86.0% online registrácií", "<b>13.12.2019 09:57</b><br>125 osôb<br>87.0% online registrácií", "<b>13.12.2019 10:03</b><br>126 osôb<br>88.0% online registrácií", "<b>13.12.2019 12:11</b><br>129 osôb<br>90.0% online registrácií", "<b>13.12.2019 14:29</b><br>130 osôb<br>90.0% online registrácií", "<b>13.12.2019 15:18</b><br>131 osôb<br>91.0% online registrácií", "<b>13.12.2019 19:34</b><br>132 osôb<br>92.0% online registrácií", "<b>13.12.2019 20:17</b><br>133 osôb<br>92.0% online registrácií", "<b>13.12.2019 20:25</b><br>134 osôb<br>93.0% online registrácií", "<b>13.12.2019 22:09</b><br>136 osôb<br>94.0% online registrácií", "<b>13.12.2019 23:56</b><br>138 osôb<br>96.0% online registrácií", "<b>16.12.2019 08:30</b><br>139 osôb<br>97.0% online registrácií", "<b>16.12.2019 09:33</b><br>140 osôb<br>97.0% online registrácií", "<b>16.12.2019 10:31</b><br>141 osôb<br>98.0% online registrácií", "<b>16.12.2019 14:27</b><br>142 osôb<br>99.0% online registrácií", "<b>17.12.2019 08:53</b><br>143 osôb<br>99.0% online registrácií", "<b>20.12.2019 01:30</b><br>144 osôb<br>100.0% online registrácií"]
	},
	{
		x: [480.80412037, 1011.42689815, 1077.92634259, 1706.81078704, 1908.35773148, 1987.97606481, 1990.68467593, 1995.89912037, 2042.29717593, 2373.98412037],
		y: [1, 19, 36, 50, 54, 61, 70, 73, 85, 111],
		name: "SR + zahraničie",
		text: ["22.09.2019 19:18", "14.10.2019 21:55", "17.10.2019 16:25", "12.11.2019 21:18", "21.11.2019 06:51", "24.11.2019 14:28", "24.11.2019 17:11", "24.11.2019 22:24", "26.11.2019 20:48", "10.12.2019 16:29"],
		type: 'scatter',
		mode: 'markers',
		marker: {
			color: 'rgb(161, 80, 22)'
		},
		visible: true,
		hoverinfo: 'text',
		hovermode: "closest",
		hovertext: ["<b>22.09.2019 19:18</b><br>1 osoba<br>1.0% online registrácií", "<b>14.10.2019 21:55</b><br>19 osôb<br>13.0% online registrácií", "<b>17.10.2019 16:25</b><br>36 osôb<br>25.0% online registrácií", "<b>12.11.2019 21:18</b><br>50 osôb<br>35.0% online registrácií", "<b>21.11.2019 06:51</b><br>54 osôb<br>38.0% online registrácií", "<b>24.11.2019 14:28</b><br>61 osôb<br>42.0% online registrácií", "<b>24.11.2019 17:11</b><br>70 osôb<br>49.0% online registrácií", "<b>24.11.2019 22:24</b><br>73 osôb<br>51.0% online registrácií", "<b>26.11.2019 20:48</b><br>85 osôb<br>59.0% online registrácií", "<b>10.12.2019 16:29</b><br>111 osôb<br>77.0% online registrácií"]
	},
	{
		x: [480.853009259, 496.353287037, 498.502175926, 767.163564815, 984.063009259, 987.104953704, 988.05162037, 1001.86884259, 1002.58328704, 1003.87912037, 1007.2124537, 1013.3949537, 1027.46578704, 1048.9349537, 1056.68578704, 1072.58023148, 1094.84939815, 1204.6299537, 1462.2574537, 1952.56273148, 1988.08134259, 1989.28578704, 1994.50078704, 2017.27912037, 2038.50634259, 2041.2424537, 2426.10078704, 2430.79773148, 2438.28106481, 2439.8699537, 2440.06328704, 2451.1924537, 2452.09467593],
		y: [2, 3, 4, 7, 10, 13, 14, 15, 16, 17, 18, 22, 28, 33, 34, 35, 37, 41, 46, 57, 62, 65, 71, 80, 83, 84, 118, 119, 122, 127, 128, 135, 137],
		name: "zahraničie",
		text: ["22.09.2019 19:21", "23.09.2019 10:51", "23.09.2019 13:00", "04.10.2019 17:39", "13.10.2019 18:33", "13.10.2019 21:36", "13.10.2019 22:33", "14.10.2019 12:22", "14.10.2019 13:05", "14.10.2019 14:22", "14.10.2019 17:42", "14.10.2019 23:53", "15.10.2019 13:58", "16.10.2019 11:26", "16.10.2019 19:11", "17.10.2019 11:04", "18.10.2019 09:21", "22.10.2019 23:07", "02.11.2019 16:45", "23.11.2019 03:03", "24.11.2019 14:35", "24.11.2019 15:47", "24.11.2019 21:00", "25.11.2019 19:46", "26.11.2019 17:00", "26.11.2019 19:44", "12.12.2019 20:36", "13.12.2019 01:18", "13.12.2019 08:47", "13.12.2019 10:22", "13.12.2019 10:33", "13.12.2019 21:41", "13.12.2019 22:35"],
		type: 'scatter',
		mode: 'markers',
		marker: {
			color: 'rgb(255, 127, 14)'
		},
		visible: true,
		hoverinfo: 'text',
		hovermode: "closest",
		hovertext: ["<b>22.09.2019 19:21</b><br>2 osoby<br>1.0% online registrácií", "<b>23.09.2019 10:51</b><br>3 osoby<br>2.0% online registrácií", "<b>23.09.2019 13:00</b><br>4 osoby<br>3.0% online registrácií", "<b>04.10.2019 17:39</b><br>7 osôb<br>5.0% online registrácií", "<b>13.10.2019 18:33</b><br>10 osôb<br>7.0% online registrácií", "<b>13.10.2019 21:36</b><br>13 osôb<br>9.0% online registrácií", "<b>13.10.2019 22:33</b><br>14 osôb<br>10.0% online registrácií", "<b>14.10.2019 12:22</b><br>15 osôb<br>10.0% online registrácií", "<b>14.10.2019 13:05</b><br>16 osôb<br>11.0% online registrácií", "<b>14.10.2019 14:22</b><br>17 osôb<br>12.0% online registrácií", "<b>14.10.2019 17:42</b><br>18 osôb<br>13.0% online registrácií", "<b>14.10.2019 23:53</b><br>22 osôb<br>15.0% online registrácií", "<b>15.10.2019 13:58</b><br>28 osôb<br>19.0% online registrácií", "<b>16.10.2019 11:26</b><br>33 osôb<br>23.0% online registrácií", "<b>16.10.2019 19:11</b><br>34 osôb<br>24.0% online registrácií", "<b>17.10.2019 11:04</b><br>35 osôb<br>24.0% online registrácií", "<b>18.10.2019 09:21</b><br>37 osôb<br>26.0% online registrácií", "<b>22.10.2019 23:07</b><br>41 osôb<br>28.0% online registrácií", "<b>02.11.2019 16:45</b><br>46 osôb<br>32.0% online registrácií", "<b>23.11.2019 03:03</b><br>57 osôb<br>40.0% online registrácií", "<b>24.11.2019 14:35</b><br>62 osôb<br>43.0% online registrácií", "<b>24.11.2019 15:47</b><br>65 osôb<br>45.0% online registrácií", "<b>24.11.2019 21:00</b><br>71 osôb<br>49.0% online registrácií", "<b>25.11.2019 19:46</b><br>80 osôb<br>56.0% online registrácií", "<b>26.11.2019 17:00</b><br>83 osôb<br>58.0% online registrácií", "<b>26.11.2019 19:44</b><br>84 osôb<br>58.0% online registrácií", "<b>12.12.2019 20:36</b><br>118 osôb<br>82.0% online registrácií", "<b>13.12.2019 01:18</b><br>119 osôb<br>83.0% online registrácií", "<b>13.12.2019 08:47</b><br>122 osôb<br>85.0% online registrácií", "<b>13.12.2019 10:22</b><br>127 osôb<br>88.0% online registrácií", "<b>13.12.2019 10:33</b><br>128 osôb<br>89.0% online registrácií", "<b>13.12.2019 21:41</b><br>135 osôb<br>94.0% online registrácií", "<b>13.12.2019 22:35</b><br>137 osôb<br>95.0% online registrácií"]
	},

	{
		x: [0.0, 480.80412037, 480.853009259, 496.353287037, 498.502175926, 503.284398148, 687.80912037, 767.163564815, 860.248287037, 860.267731481, 984.063009259, 985.38162037, 986.640787037, 987.104953704, 988.05162037, 1001.86884259, 1002.58328704, 1003.87912037, 1007.2124537, 1011.42689815, 1011.75939815, 1012.08384259, 1013.3949537, 1022.78939815, 1023.43023148, 1023.75300926, 1025.77078704, 1027.46578704, 1029.11134259, 1030.31634259, 1046.59078704, 1047.4924537, 1048.9349537, 1056.68578704, 1072.58023148, 1077.92634259, 1094.84939815, 1121.9824537, 1124.24606481, 1204.17384259, 1204.6299537, 1224.46217593, 1243.3124537, 1393.99523148, 1394.04773148, 1462.2574537, 1550.50689815, 1574.60634259, 1695.80578704, 1706.81078704, 1770.06606481, 1848.82328704, 1908.35773148, 1939.08439815, 1943.13773148, 1952.56273148, 1959.64078704, 1987.84578704, 1987.86106481, 1987.97606481, 1988.08134259, 1988.72189815, 1988.9524537, 1989.28578704, 1989.96439815, 1990.09634259, 1990.22384259, 1990.27828704, 1990.68467593, 1994.50078704, 1995.02912037, 1995.89912037, 1996.58689815, 2004.97578704, 2006.67078704, 2007.01023148, 2007.18273148, 2009.42550926, 2017.27912037, 2017.75217593, 2031.86717593, 2038.50634259, 2041.2424537, 2042.29717593, 2064.21023148, 2067.93356481, 2067.97023148, 2084.68884259, 2101.18717593, 2108.32856481, 2111.69550926, 2158.25523148, 2200.15634259, 2236.03800926, 2269.76550926, 2271.36412037, 2272.75800926, 2296.34217593, 2307.38384259, 2323.0074537, 2323.13634259, 2323.28634259, 2324.03828704, 2330.19162037, 2330.9174537, 2341.83078704, 2342.17328704, 2353.92273148, 2366.72050926, 2373.98412037, 2378.09550926, 2392.29717593, 2395.01412037, 2397.02856481, 2419.33356481, 2422.01662037, 2426.10078704, 2430.79773148, 2431.96106481, 2438.16884259, 2438.28106481, 2438.36606481, 2439.11578704, 2439.45662037, 2439.55412037, 2439.8699537, 2440.06328704, 2441.6899537, 2443.99634259, 2444.81356481, 2449.06523148, 2449.7899537, 2449.92828704, 2451.1924537, 2451.65328704, 2452.09467593, 2453.43412037, 2510.0024537, 2511.05523148, 2512.02328704, 2515.95884259, 2534.39634259, 2599.00634259],
		y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144],
		name: "",
		type: 'bar',
		marker: {
			color: ['rgb(255, 255, 255)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)']
		},
		showlegend: false,
		visible: true,
		hoverinfo: 'skip',
		hovermode: "none"
	},
];

var data_registration_timeLabels_2019 = ["", "22.09.", "", "", "", "", "", "", "", "", "13.10.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "24.11.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "8.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "13.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

var updateMenu_position_country_2019 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, true, true, true, false, false, false, false, false, false, false]],
		label: 'Zoradiť podľa pozície',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, true, true, true, true, true, true, true]],
		label: 'Zoradiť podľa celkového počtu',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 0.00,
	xanchor: 'middle',
	y: 1.15,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];

var updateMenu_position_gender_2019 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, true, false, false, false, false, false]],
		label: 'Zoradiť podľa pozície',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, true, true, true, true, true]],
		label: 'Zoradiť podľa celkového počtu',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 0.00,
	xanchor: 'middle',
	y: 1.15,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];

var updateMenu_institution_country_2019 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, true, true, true, false, false, false, false, false, false, false]],
		label: 'Zoradiť podľa typu pracoviska',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, true, true, true, true, true, true, true]],
		label: 'Zoradiť podľa celkového počtu',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 0.00,
	xanchor: 'middle',
	y: 1.15,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];

var updateMenu_institution_gender_2019 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, true, false, false, false, false, false]],
		label: 'Zoradiť podľa typu pracoviska',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, true, true, true, true, true]],
		label: 'Zoradiť podľa celkového počtu',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 0.00,
	xanchor: 'middle',
	y: 1.15,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];



var data_participation_2018 = [
// participation 2018
{
	type: "sunburst",
	ids: ["všetci", "prítomní", "neprítomní", "nesúhlas", "muži 1", "ženy 1", "bez registrácie", "muži 0", "ženy 0"],
	labels: ["dáta z prihlasovania + neregistrovaní účastníci", "prítomní", "neprítomní", "nesúhlas s analýzou", "muži", "ženy", "bez registrácie", "muži", "ženy"],
	values: [177, 139, 38, 0, 63, 56, 20, 14, 24],
	parents: ["", "všetci", "všetci", "všetci", "prítomní", "prítomní", "prítomní", "neprítomní", "neprítomní"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(124, 124, 124)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(204, 221, 255)', 'rgb(255, 204, 204)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania + neregistrovaní účastníci</b><br>177 osôb<br>", "139 prítomných<br>88.5% registrovaných", "38 neprítomných<br>24.2% registrovaných", "<b>nesúhlas s analýzou</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "63 mužov<br>45.3% prítomných<br>40.1% registrovaných", "56 žien<br>40.3% prítomných<br>35.7% registrovaných", "<b>bez registrácie</b><br>20 osôb<br>14.4% prítomných<br>", "14 mužov<br>8.9% registrovaných", "24 žien<br>15.3% registrovaných"]
}];

var data_participation_detail_2018 = [
// participation_detail 2018
{
	type: "sunburst",
	ids: ["všetci", "účasť", "iniciatívy", "prednášajúci", "organizácia", "nesúhlas", "účastníčky", "účastníci", "bez registrácie", "zástupkyne firiem", "zástupcovia firiem", "aktívne účastníčky", "aktívni účastníci", "organizátorky", "organizátori"],
	labels: ["iba prítomní", "účasť", "iniciatívy", "prednášajúci", "organizácia", "nesúhlas s analýzou", "ženy", "muži", "bez registrácie", "ženy", "muži", "ženy", "muži", "ženy", "muži"],
	values: [139, 93, 21, 15, 10, 0, 37, 36, 20, 9, 12, 4, 11, 7, 3],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "účasť", "účasť", "účasť", "iniciatívy", "iniciatívy", "prednášajúci", "prednášajúci", "organizácia", "organizácia"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 214, 16)', 'rgb(255, 174, 16)', 'rgb(255, 134, 16', 'rgb(200, 200, 200)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(0, 230, 0)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>139 osôb<br>", "<b>účasť</b><br>93 osôb<br>66.9% prítomných<br>", "<b>iniciatívy</b><br>21 osôb<br>15.1% prítomných<br>", "<b>prednášajúci</b><br>15 osôb<br>10.8% prítomných<br>", "<b>organizácia</b><br>10 osôb<br>7.2% prítomných<br>", "<b>nesúhlas s analýzou</b><br>0 osôb<br>0.0% prítomných<br>", "37 žien<br>26.6% prítomných<br>", "36 mužov<br>25.9% prítomných<br>", "<b>bez registrácie</b><br>20 osôb<br>14.4% prítomných<br>", "9 žien<br>6.5% prítomných<br>", "12 mužov<br>8.6% prítomných<br>", "4 ženy<br>2.9% prítomných<br>", "11 mužov<br>7.9% prítomných<br>", "7 žien<br>5.0% prítomných<br>", "3 muži<br>2.2% prítomných<br>"]
}];

var data_abroad_2018 = [
// abroad 2018
{
	type: "sunburst",
	ids: ["všetci", "Slovensko", "oboje", "zahraničie", "neuvedené", "nesúhlas", "muži (SR)", "ženy (SR)", "muži (NA)", "ženy (NA)", "bez dát", "muži (oboje)", "ženy (oboje", "muži (zahr.)", "ženy (zahr.)"],
	labels: ["iba prítomní", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "nesúhlas s analýzou", "muži", "ženy", "muži", "ženy", "bez dát ", "muži", "ženy", "muži", "ženy"],
	values: [139, 70, 1, 30, 38, 0, 35, 35, 12, 6, 20, 1, 0, 15, 15],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "Slovensko", "Slovensko", "neuvedené", "neuvedené", "neuvedené", "oboje", "oboje", "zahraničie", "zahraničie"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>139 osôb<br>", "<b>Slovensko</b><br>70 osôb<br>50.4% prítomných<br>", "<b>SR a zahraničie</b><br>1 osoba<br>0.7% prítomných<br>", "<b>zahraničie</b><br>30 osôb<br>21.6% prítomných<br>", "<b>neuvedené</b><br>38 osôb<br>27.3% prítomných<br>", "<b>nesúhlas s analýzou</b><br>0 osôb<br>0.0% prítomných<br>", "35 mužov<br>25.2% prítomných<br>", "35 žien<br>25.2% prítomných<br>", "12 mužov<br>8.6% prítomných<br>", "6 žien<br>4.3% prítomných<br>", "<b>bez dát </b><br>20 osôb<br>14.4% prítomných<br>", "1 muž<br>0.7% prítomných<br>", "0 žien<br>0.0% prítomných<br>", "15 mužov<br>10.8% prítomných<br>", "15 žien<br>10.8% prítomných<br>"]
}];

var data_subject_2018 = [
// subject 2018
{
	type: "sunburst",
	ids: ["všetci", "prítomní", "neprítomní", "nesúhlas", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "STEM (neprítomní)", "SSH (neprítomní)", "iné (neprítomní)", "iniciatívy (neprítomní)", "neuvedené (neprítomní)", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "STEM nezaradené", "STEM neuvedené", "digital humanities", "história", "archeológia", "antropológia", "religionistika", "psychológia", "didaktika", "sociológia", "politické vedy", "ekonomické vedy", "SSH nezaradené", "SSH neuvedené", "podpora výskumu", "vzdelávanie, poradenstvo", "práca s mládežou", "projektový manažment", "popularizácia", "médiá", "iné nezaradené", "iné neuvedené", "iniciatívy podpora výskumu", "iniciatívy podpora výskumu (STEM)", "iniciatívy práca s mládežou (STEM)", "iniciatívy práca s mládežou", "iniciatívy vzdelávanie, poradenstvo", "iniciatívy popularizácia", "iniciatívy chémia", "iniciatívy fyzika", "neuvedené (iniciatívy)", "neuvedené (neuvedené)"],
	labels: ["iba dáta z registrácie", "prítomní", "neprítomní", "nesúhlas s analýzou", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "nezaradené", "neuvedené", "digital humanities", "história", "archeológia", "antropológia", "religionistika", "psychológia", "didaktika", "sociológia", "politické vedy", "ekonomické vedy", "nezaradené", "neuvedené", "podpora výskumu", "vzdelávanie, poradenstvo", "práca s mládežou", "projektový manažment", "popularizácia", "médiá", "nezaradené", "neuvedené", "podpora výskumu", "podpora výskumu (STEM)", "práca s mládežou (STEM)", "práca s mládežou", "vzdelávanie, poradenstvo", "popularizácia", "chémia", "fyzika", "neuvedené", "neuvedené"],
	values: [157, 119, 38, 0, 67, 20, 11, 21, 0, 33, 2, 1, 2, 0, 9, 8, 4, 8, 0, 1, 2, 0, 4, 2, 1, 5, 4, 2, 3, 2, 0, 2, 2, 1, 1, 6, 0, 1, 4, 3, 0, 2, 1, 2, 2, 0, 1, 4, 3, 1, 0, 1, 0, 0, 1, 5, 8, 2, 4, 3, 1, 0, 1, 0, 2, 0],
	parents: ["", "všetci", "všetci", "všetci", "prítomní", "prítomní", "prítomní", "prítomní", "prítomní", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "neuvedené"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(190, 190, 190)', 'rgb(200, 200, 200)', 'rgb(0, 102, 102)', 'rgb(204, 0, 0)', 'rgb(62, 0, 62)', 'rgb(92, 0, 92)', 'rgb(124, 124, 124)', 'rgb(95, 146, 146)', 'rgb(197, 95, 95)', 'rgb(126,95,126)', 'rgb(82, 0, 82)', 'rgb(157, 157, 157)', 'rgb(53, 104, 0)', 'rgb(82, 163, 0)', 'rgb(102, 204, 0)', 'rgb(222, 222, 92)', 'rgb(255, 238, 153)', 'rgb(255,247,126)', 'rgb(255, 255, 98)', 'rgb(255, 255, 0)', 'rgb(255, 204, 0)', 'rgb(255, 128, 0)', 'rgb(204, 101, 0)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(0, 0, 255)', 'rgb(0, 128, 255)', 'rgb(136, 136, 136)', 'rgb(175, 175, 175)', 'rgb(36, 18, 0)', 'rgb(75, 37, 0)', 'rgb(89, 121, 0)', 'rgb(0, 102, 102)', 'rgb(0, 102, 102)', 'rgb(102, 51, 77)', 'rgb(145,0,73)', 'rgb(204, 0, 102)', 'rgb(255, 47, 151)', 'rgb(153, 0, 76)', 'rgb(214, 48, 90)', 'rgb(214, 48, 62)', 'rgb(214, 48, 48)', 'rgb(218, 94, 69)', 'rgb(218, 106, 69)', 'rgb(204, 0, 0)', 'rgb(204, 0, 0)', 'rgb(82, 0, 82)', 'rgb(132, 0, 132)', 'rgb(142, 0, 142)', 'rgb(152, 0, 152)', 'rgb(162, 0, 162)', 'rgb(172, 0, 172)', 'rgb(62, 0, 62)', 'rgb(62, 0, 62)', 'rgb(82, 0, 82)', 'rgb(31, 51, 82)', 'rgb(36, 77, 112)', 'rgb(142, 0, 142)', 'rgb(132, 0, 132)', 'rgb(162, 0, 162)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(124, 124, 124)', 'rgb(124, 124, 124)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba dáta z registrácie</b><br>157 osôb<br>", "119 prítomných<br>75.8% registrovaných", "38 neprítomných<br>24.2% registrovaných", "<b>nesúhlas s analýzou</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>STEM</b><br>67 osôb<br>56.3% prítomných<br>42.7% registrovaných", "<b>SSH</b><br>20 osôb<br>16.8% prítomných<br>12.7% registrovaných", "<b>iné</b><br>11 osôb<br>9.2% prítomných<br>7.0% registrovaných", "<b>iniciatívy</b><br>21 osôb<br>17.6% prítomných<br>13.4% registrovaných", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>STEM</b><br>33 osôb<br>21.0% registrovaných", "<b>SSH</b><br>2 osoby<br>1.3% registrovaných", "<b>iné</b><br>1 osoba<br>0.6% registrovaných", "<b>iniciatívy</b><br>2 osoby<br>1.3% registrovaných", "<b>neuvedené</b><br>0 osôb<br>0.0% registrovaných", "<b>genetika</b><br>9 osôb<br>7.6% prítomných<br>5.7% registrovaných", "<b>molekulárna biológia</b><br>8 osôb<br>6.7% prítomných<br>5.1% registrovaných", "<b>biológia</b><br>4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>biochémia</b><br>8 osôb<br>6.7% prítomných<br>5.1% registrovaných", "<b>biofyzika</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>bioinformatika</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>biomedicína</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>biotechnológie, biomateriály</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>neurovedy</b><br>4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>medicína, lekárske vedy</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>farmácia</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>chémia</b><br>5 osôb<br>4.2% prítomných<br>3.2% registrovaných", "<b>fyzika</b><br>4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>matematika</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>IT</b><br>3 osoby<br>2.5% prítomných<br>1.9% registrovaných", "<b>technológie</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>stavebné inžinierstvo, architektúra</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>geopriestorové vedy</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>vedy o Zemi</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>ekologické a environmentálne vedy</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>nezaradené</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>neuvedené</b><br>6 osôb<br>5.0% prítomných<br>3.8% registrovaných", "<b>digital humanities</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>história</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>archeológia</b><br>4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>antropológia</b><br>3 osoby<br>2.5% prítomných<br>1.9% registrovaných", "<b>religionistika</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>psychológia</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>didaktika</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>sociológia</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>politické vedy</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>ekonomické vedy</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>nezaradené</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>neuvedené</b><br>4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>podpora výskumu</b><br>3 osoby<br>2.5% prítomných<br>1.9% registrovaných", "<b>vzdelávanie, poradenstvo</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>práca s mládežou</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>projektový manažment</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>popularizácia</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>médiá</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>nezaradené</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>neuvedené</b><br>5 osôb<br>4.2% prítomných<br>3.2% registrovaných", "<b>podpora výskumu</b><br>8 osôb<br>6.7% prítomných<br>5.1% registrovaných", "<b>podpora výskumu (STEM)</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>práca s mládežou (STEM)</b><br>4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>práca s mládežou</b><br>3 osoby<br>2.5% prítomných<br>1.9% registrovaných", "<b>vzdelávanie, poradenstvo</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>popularizácia</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>chémia</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>fyzika</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>neuvedené</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných"]
}];

var data_position_country_2018 = [
	// position_country 2018
	{
		x: [2, 11, 2, 5, 0, 9, 14, 7, 5, 15],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'Slovensko',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>profesor, docent </b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 11 osôb<br>7.9% prítomných<br>7.0% registrovaných", "<b>PI (vedúci laboratória)</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>postdok, junior researcher</b><br>Slovensko: 5 osôb<br>3.6% prítomných<br>3.2% registrovaných", "", "<b>doktorand </b><br>Slovensko: 9 osôb<br>6.5% prítomných<br>5.7% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 14 osôb<br>10.1% prítomných<br>8.9% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>iné </b><br>Slovensko: 5 osôb<br>3.6% prítomných<br>3.2% registrovaných", "<b>neuvedené </b><br>Slovensko: 15 osôb<br>10.8% prítomných<br>9.6% registrovaných"]
	},
	{
		x: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'SR + zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(161, 80, 22)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "<b>postdok, junior researcher</b><br>SR + zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "", "", "", "", ""]
	},
	{
		x: [1, 3, 2, 5, 0, 6, 4, 4, 2, 3],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(255, 127, 14)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>profesor, docent </b><br>zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 3 osoby<br>2.2% prítomných<br>1.9% registrovaných", "<b>PI (vedúci laboratória)</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>postdok, junior researcher</b><br>zahraničie: 5 osôb<br>3.6% prítomných<br>3.2% registrovaných", "", "<b>doktorand </b><br>zahraničie: 6 osôb<br>4.3% prítomných<br>3.8% registrovaných", "<b>mimo akadémie </b><br>zahraničie: 4 osoby<br>2.9% prítomných<br>2.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 4 osoby<br>2.9% prítomných<br>2.5% registrovaných", "<b>iné </b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>neuvedené </b><br>zahraničie: 3 osoby<br>2.2% prítomných<br>1.9% registrovaných"]
	},
	{
		x: [1, 1, 5, 1, 0, 1, 1, 1, 6, 1],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'neuvedené',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(124, 124, 124)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>profesor, docent </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>PI (vedúci laboratória)</b><br>neuvedené (krajina): 5 osôb<br>3.6% prítomných<br>3.2% registrovaných", "<b>postdok, junior researcher</b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "<b>doktorand </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>mimo akadémie </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>študent (Bc./Mgr.) </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>iné </b><br>neuvedené (krajina): 6 osôb<br>4.3% prítomných<br>3.8% registrovaných", "<b>neuvedené </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných"]
	},
	{
		x: [0, 4, 0, 5, 0, 6, 4, 15, 3, 1],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>4 neprítomní<br>2.5% registrovaných", "", "<b>postdok, junior researcher</b><br>5 neprítomných<br>3.2% registrovaných", "", "<b>doktorand </b><br>6 neprítomných<br>3.8% registrovaných", "<b>mimo akadémie </b><br>4 neprítomní<br>2.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>15 neprítomných<br>9.6% registrovaných", "<b>iné </b><br>3 neprítomní<br>1.9% registrovaných", "<b>neuvedené </b><br>1 neprítomný/á<br>0.6% registrovaných"]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	},
	{
		x: [14, 15, 9, 11, 5, 5, 7, 2, 2, 0],
		y: ["mimo akadémie ", "neuvedené ", "doktorand ", "vedecký pracovník (senior researcher) ", "iné ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry"],
		name: 'Slovensko',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>mimo akadémie </b><br>Slovensko: 14 osôb<br>11.8% prítomných<br>8.9% registrovaných", "<b>neuvedené </b><br>Slovensko: 15 osôb<br>12.6% prítomných<br>9.6% registrovaných", "<b>doktorand </b><br>Slovensko: 9 osôb<br>7.6% prítomných<br>5.7% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 11 osôb<br>9.2% prítomných<br>7.0% registrovaných", "<b>iné </b><br>Slovensko: 5 osôb<br>4.2% prítomných<br>3.2% registrovaných", "<b>postdok, junior researcher</b><br>Slovensko: 5 osôb<br>4.2% prítomných<br>3.2% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 7 osôb<br>5.9% prítomných<br>4.5% registrovaných", "<b>PI (vedúci laboratória)</b><br>Slovensko: 2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>profesor, docent </b><br>Slovensko: 2 osoby<br>1.7% prítomných<br>1.3% registrovaných", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
		y: ["mimo akadémie ", "neuvedené ", "doktorand ", "vedecký pracovník (senior researcher) ", "iné ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry"],
		name: 'SR + zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(161, 80, 22)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "<b>postdok, junior researcher</b><br>SR + zahraničie: 1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "", "", "", ""]
	},
	{
		x: [4, 3, 6, 3, 2, 5, 4, 2, 1, 0],
		y: ["mimo akadémie ", "neuvedené ", "doktorand ", "vedecký pracovník (senior researcher) ", "iné ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry"],
		name: 'zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(255, 127, 14)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>mimo akadémie </b><br>zahraničie: 4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>neuvedené </b><br>zahraničie: 3 osoby<br>2.5% prítomných<br>1.9% registrovaných", "<b>doktorand </b><br>zahraničie: 6 osôb<br>5.0% prítomných<br>3.8% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 3 osoby<br>2.5% prítomných<br>1.9% registrovaných", "<b>iné </b><br>zahraničie: 2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>postdok, junior researcher</b><br>zahraničie: 5 osôb<br>4.2% prítomných<br>3.2% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>PI (vedúci laboratória)</b><br>zahraničie: 2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>profesor, docent </b><br>zahraničie: 1 osoba<br>0.8% prítomných<br>0.6% registrovaných", ""]
	},
	{
		x: [1, 1, 1, 1, 6, 1, 1, 5, 1, 0],
		y: ["mimo akadémie ", "neuvedené ", "doktorand ", "vedecký pracovník (senior researcher) ", "iné ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry"],
		name: 'neuvedené',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(124, 124, 124)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>mimo akadémie </b><br>neuvedené (krajina): 1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>neuvedené </b><br>neuvedené (krajina): 1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>doktorand </b><br>neuvedené (krajina): 1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>neuvedené (krajina): 1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>iné </b><br>neuvedené (krajina): 6 osôb<br>5.0% prítomných<br>3.8% registrovaných", "<b>postdok, junior researcher</b><br>neuvedené (krajina): 1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>študent (Bc./Mgr.) </b><br>neuvedené (krajina): 1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>PI (vedúci laboratória)</b><br>neuvedené (krajina): 5 osôb<br>4.2% prítomných<br>3.2% registrovaných", "<b>profesor, docent </b><br>neuvedené (krajina): 1 osoba<br>0.8% prítomných<br>0.6% registrovaných", ""]
	},
	{
		x: [4, 1, 6, 4, 3, 5, 15, 0, 0, 0],
		y: ["mimo akadémie ", "neuvedené ", "doktorand ", "vedecký pracovník (senior researcher) ", "iné ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry"],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>mimo akadémie </b><br>4 neprítomní<br>2.5% registrovaných", "<b>neuvedené </b><br>1 neprítomný/á<br>0.6% registrovaných", "<b>doktorand </b><br>6 neprítomných<br>3.8% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>4 neprítomní<br>2.5% registrovaných", "<b>iné </b><br>3 neprítomní<br>1.9% registrovaných", "<b>postdok, junior researcher</b><br>5 neprítomných<br>3.2% registrovaných", "<b>študent (Bc./Mgr.) </b><br>15 neprítomných<br>9.6% registrovaných", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["mimo akadémie ", "neuvedené ", "doktorand ", "vedecký pracovník (senior researcher) ", "iné ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry"],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["mimo akadémie ", "neuvedené ", "doktorand ", "vedecký pracovník (senior researcher) ", "iné ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry"],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	}
];

var data_position_gender_2018 = [
	// position_gender 2018
	{
		x: [1, 4, 2, 4, 0, 10, 12, 10, 5, 8],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'ženy',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(230, 0, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>profesor, docent </b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>4 ženy<br>2.9% prítomných<br>2.5% registrovaných", "<b>PI (vedúci laboratória)</b><br>2 ženy<br>1.4% prítomných<br>1.3% registrovaných", "<b>postdok, junior researcher</b><br>4 ženy<br>2.9% prítomných<br>2.5% registrovaných", "", "<b>doktorand </b><br>10 žien<br>7.2% prítomných<br>6.4% registrovaných", "<b>mimo akadémie </b><br>12 žien<br>8.6% prítomných<br>7.6% registrovaných", "<b>študent (Bc./Mgr.) </b><br>10 žien<br>7.2% prítomných<br>6.4% registrovaných", "<b>iné </b><br>5 žien<br>3.6% prítomných<br>3.2% registrovaných", "<b>neuvedené </b><br>8 žien<br>5.8% prítomných<br>5.1% registrovaných"]
	},
	{
		x: [3, 11, 7, 8, 0, 6, 7, 2, 8, 11],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'muži',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 230)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>profesor, docent </b><br>3 muži<br>2.2% prítomných<br>1.9% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>11 mužov<br>7.9% prítomných<br>7.0% registrovaných", "<b>PI (vedúci laboratória)</b><br>7 mužov<br>5.0% prítomných<br>4.5% registrovaných", "<b>postdok, junior researcher</b><br>8 mužov<br>5.8% prítomných<br>5.1% registrovaných", "", "<b>doktorand </b><br>6 mužov<br>4.3% prítomných<br>3.8% registrovaných", "<b>mimo akadémie </b><br>7 mužov<br>5.0% prítomných<br>4.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>2 muži<br>1.4% prítomných<br>1.3% registrovaných", "<b>iné </b><br>8 mužov<br>5.8% prítomných<br>5.1% registrovaných", "<b>neuvedené </b><br>11 mužov<br>7.9% prítomných<br>7.0% registrovaných"]
	},
	{
		x: [0, 4, 0, 5, 0, 6, 4, 15, 3, 1],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>4 neprítomní<br>2.5% registrovaných", "", "<b>postdok, junior researcher</b><br>5 neprítomných<br>3.2% registrovaných", "", "<b>doktorand </b><br>6 neprítomných<br>3.8% registrovaných", "<b>mimo akadémie </b><br>4 neprítomní<br>2.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>15 neprítomných<br>9.6% registrovaných", "<b>iné </b><br>3 neprítomní<br>1.9% registrovaných", "<b>neuvedené </b><br>1 neprítomný/á<br>0.6% registrovaných"]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	},
	{
		x: [12, 10, 4, 5, 4, 10, 2, 1, 0, 8],
		y: ["mimo akadémie ", "doktorand ", "vedecký pracovník (senior researcher) ", "iné ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
		name: 'ženy',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(230, 0, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>mimo akadémie </b><br>12 žien<br>10.1% prítomných<br>7.6% registrovaných", "<b>neuvedené </b><br>8 žien<br>6.7% prítomných<br>5.1% registrovaných", "<b>doktorand </b><br>10 žien<br>8.4% prítomných<br>6.4% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>4 ženy<br>3.4% prítomných<br>2.5% registrovaných", "<b>iné </b><br>5 žien<br>4.2% prítomných<br>3.2% registrovaných", "<b>postdok, junior researcher</b><br>4 ženy<br>3.4% prítomných<br>2.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>10 žien<br>8.4% prítomných<br>6.4% registrovaných", "<b>PI (vedúci laboratória)</b><br>2 ženy<br>1.7% prítomných<br>1.3% registrovaných", "<b>profesor, docent </b><br>1 žena<br>0.8% prítomných<br>0.6% registrovaných", ""]
	},
	{
		x: [7, 6, 11, 8, 8, 2, 7, 3, 0, 11],
		y: ["mimo akadémie ", "doktorand ", "vedecký pracovník (senior researcher) ", "iné ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
		name: 'muži',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 230)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>mimo akadémie </b><br>7 mužov<br>5.9% prítomných<br>4.5% registrovaných", "<b>neuvedené </b><br>11 mužov<br>9.2% prítomných<br>7.0% registrovaných", "<b>doktorand </b><br>6 mužov<br>5.0% prítomných<br>3.8% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>11 mužov<br>9.2% prítomných<br>7.0% registrovaných", "<b>iné </b><br>8 mužov<br>6.7% prítomných<br>5.1% registrovaných", "<b>postdok, junior researcher</b><br>8 mužov<br>6.7% prítomných<br>5.1% registrovaných", "<b>študent (Bc./Mgr.) </b><br>2 muži<br>1.7% prítomných<br>1.3% registrovaných", "<b>PI (vedúci laboratória)</b><br>7 mužov<br>5.9% prítomných<br>4.5% registrovaných", "<b>profesor, docent </b><br>3 muži<br>2.5% prítomných<br>1.9% registrovaných", ""]
	},
	{
		x: [4, 6, 4, 3, 5, 15, 0, 0, 0, 1],
		y: ["mimo akadémie ", "doktorand ", "vedecký pracovník (senior researcher) ", "iné ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>mimo akadémie </b><br>4 neprítomní<br>2.5% registrovaných", "<b>neuvedené </b><br>1 neprítomný/á<br>0.6% registrovaných", "<b>doktorand </b><br>6 neprítomných<br>3.8% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>4 neprítomní<br>2.5% registrovaných", "<b>iné </b><br>3 neprítomní<br>1.9% registrovaných", "<b>postdok, junior researcher</b><br>5 neprítomných<br>3.2% registrovaných", "<b>študent (Bc./Mgr.) </b><br>15 neprítomných<br>9.6% registrovaných", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["mimo akadémie ", "doktorand ", "vedecký pracovník (senior researcher) ", "iné ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
		y: ["mimo akadémie ", "doktorand ", "vedecký pracovník (senior researcher) ", "iné ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	}
];

var data_institution_country_2018 = [
	// institution_country 2018
	{
		x: [27, 0, 13, 0, 7, 9, 7, 2, 3, 2],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'Slovensko',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>Slovensko: 27 osôb<br>19.4% prítomných<br>17.2% registrovaných", "", "<b>výskumné pracovisko</b><br>Slovensko: 13 osôb<br>9.4% prítomných<br>8.3% registrovaných", "", "<b>komerčná spoločnosť</b><br>Slovensko: 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 9 osôb<br>6.5% prítomných<br>5.7% registrovaných", "<b>práca s mládežou</b><br>Slovensko: 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>štátna správa</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>iné</b><br>Slovensko: 3 osoby<br>2.2% prítomných<br>1.9% registrovaných", "<b>neuvedené</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných"]
	},
	{
		x: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'SR + zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(161, 80, 22)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>SR + zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [19, 2, 2, 0, 3, 0, 0, 0, 2, 2],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(255, 127, 14)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>zahraničie: 19 osôb<br>13.7% prítomných<br>12.1% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "", "<b>komerčná spoločnosť</b><br>zahraničie: 3 osoby<br>2.2% prítomných<br>1.9% registrovaných", "", "", "", "<b>iné</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>neuvedené</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných"]
	},
	{
		x: [0, 0, 0, 0, 1, 1, 0, 0, 0, 16],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'neuvedené',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(124, 124, 124)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "<b>komerčná spoločnosť</b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>podpora výskumu</b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "", "", "<b>neuvedené</b><br>neuvedené (krajina): 16 osôb<br>11.5% prítomných<br>10.2% registrovaných"]
	},
	{
		x: [22, 2, 5, 0, 4, 2, 1, 0, 2, 0],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>22 neprítomných<br>14.0% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.3% registrovaných", "<b>výskumné pracovisko</b><br>5 neprítomných<br>3.2% registrovaných", "", "<b>komerčná spoločnosť</b><br>4 neprítomní<br>2.5% registrovaných", "<b>podpora výskumu</b><br>2 neprítomní<br>1.3% registrovaných", "<b>práca s mládežou</b><br>1 neprítomný/á<br>0.6% registrovaných", "", "<b>iné</b><br>2 neprítomní<br>1.3% registrovaných", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	},
	{
		x: [27, 13, 7, 9, 7, 3, 0, 2, 0, 2],
		y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "nadnárodná organizácia", "neuvedené"],
		name: 'Slovensko',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>Slovensko: 27 osôb<br>19.4% prítomných<br>17.2% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 13 osôb<br>9.4% prítomných<br>8.3% registrovaných", "<b>komerčná spoločnosť</b><br>Slovensko: 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 9 osôb<br>6.5% prítomných<br>5.7% registrovaných", "<b>práca s mládežou</b><br>Slovensko: 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>iné</b><br>Slovensko: 3 osoby<br>2.2% prítomných<br>1.9% registrovaných", "", "<b>štátna správa</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "", "<b>neuvedené</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných"]
	},
	{
		x: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "nadnárodná organizácia", "neuvedené"],
		name: 'SR + zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(161, 80, 22)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>SR + zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [19, 2, 3, 0, 0, 2, 2, 0, 0, 2],
		y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "nadnárodná organizácia", "neuvedené"],
		name: 'zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(255, 127, 14)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>zahraničie: 19 osôb<br>13.7% prítomných<br>12.1% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>komerčná spoločnosť</b><br>zahraničie: 3 osoby<br>2.2% prítomných<br>1.9% registrovaných", "", "", "<b>iné</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "", "", "<b>neuvedené</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných"]
	},
	{
		x: [0, 0, 1, 1, 0, 0, 0, 0, 0, 16],
		y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "nadnárodná organizácia", "neuvedené"],
		name: 'neuvedené',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(124, 124, 124)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "<b>komerčná spoločnosť</b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>podpora výskumu</b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "", "", "", "", "<b>neuvedené</b><br>neuvedené (krajina): 16 osôb<br>11.5% prítomných<br>10.2% registrovaných"]
	},
	{
		x: [22, 5, 4, 2, 1, 2, 2, 0, 0, 0],
		y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "nadnárodná organizácia", "neuvedené"],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>22 neprítomných<br>14.0% registrovaných", "<b>výskumné pracovisko</b><br>5 neprítomných<br>3.2% registrovaných", "<b>komerčná spoločnosť</b><br>4 neprítomní<br>2.5% registrovaných", "<b>podpora výskumu</b><br>2 neprítomní<br>1.3% registrovaných", "<b>práca s mládežou</b><br>1 neprítomný/á<br>0.6% registrovaných", "<b>iné</b><br>2 neprítomní<br>1.3% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.3% registrovaných", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "nadnárodná organizácia", "neuvedené"],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
		y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "nadnárodná organizácia", "neuvedené"],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	}
];

var data_institution_gender_2018 = [
	// institution_gender 2018
	{
		x: [22, 1, 9, 0, 6, 8, 1, 1, 3, 5],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'ženy',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(230, 0, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>22 žien<br>15.8% prítomných<br>14.0% registrovaných", "<b>výskum + univerzita</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>výskumné pracovisko</b><br>9 žien<br>6.5% prítomných<br>5.7% registrovaných", "", "<b>komerčná spoločnosť</b><br>6 žien<br>4.3% prítomných<br>3.8% registrovaných", "<b>podpora výskumu</b><br>8 žien<br>5.8% prítomných<br>5.1% registrovaných", "<b>práca s mládežou</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>štátna správa</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>iné</b><br>3 ženy<br>2.2% prítomných<br>1.9% registrovaných", "<b>neuvedené</b><br>5 žien<br>3.6% prítomných<br>3.2% registrovaných"]
	},
	{
		x: [25, 1, 6, 0, 5, 2, 6, 1, 2, 15],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'muži',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 230)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>25 mužov<br>18.0% prítomných<br>15.9% registrovaných", "<b>výskum + univerzita</b><br>1 muž<br>0.7% prítomných<br>0.6% registrovaných", "<b>výskumné pracovisko</b><br>6 mužov<br>4.3% prítomných<br>3.8% registrovaných", "", "<b>komerčná spoločnosť</b><br>5 mužov<br>3.6% prítomných<br>3.2% registrovaných", "<b>podpora výskumu</b><br>2 muži<br>1.4% prítomných<br>1.3% registrovaných", "<b>práca s mládežou</b><br>6 mužov<br>4.3% prítomných<br>3.8% registrovaných", "<b>štátna správa</b><br>1 muž<br>0.7% prítomných<br>0.6% registrovaných", "<b>iné</b><br>2 muži<br>1.4% prítomných<br>1.3% registrovaných", "<b>neuvedené</b><br>15 mužov<br>10.8% prítomných<br>9.6% registrovaných"]
	},
	{
		x: [22, 2, 5, 0, 4, 2, 1, 0, 2, 0],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>22 neprítomných<br>14.0% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.3% registrovaných", "<b>výskumné pracovisko</b><br>5 neprítomných<br>3.2% registrovaných", "", "<b>komerčná spoločnosť</b><br>4 neprítomní<br>2.5% registrovaných", "<b>podpora výskumu</b><br>2 neprítomní<br>1.3% registrovaných", "<b>práca s mládežou</b><br>1 neprítomný/á<br>0.6% registrovaných", "", "<b>iné</b><br>2 neprítomní<br>1.3% registrovaných", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	},
	{
		x: [22, 9, 6, 8, 1, 3, 1, 1, 0, 5],
		y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "nadnárodná organizácia", "neuvedené"],
		name: 'ženy',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(230, 0, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>22 žien<br>15.8% prítomných<br>14.0% registrovaných", "<b>výskumné pracovisko</b><br>9 žien<br>6.5% prítomných<br>5.7% registrovaných", "<b>komerčná spoločnosť</b><br>6 žien<br>4.3% prítomných<br>3.8% registrovaných", "<b>podpora výskumu</b><br>8 žien<br>5.8% prítomných<br>5.1% registrovaných", "<b>práca s mládežou</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>iné</b><br>3 ženy<br>2.2% prítomných<br>1.9% registrovaných", "<b>výskum + univerzita</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>štátna správa</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "", "<b>neuvedené</b><br>5 žien<br>3.6% prítomných<br>3.2% registrovaných"]
	},
	{
		x: [25, 6, 5, 2, 6, 2, 1, 1, 0, 15],
		y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "nadnárodná organizácia", "neuvedené"],
		name: 'muži',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 230)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>25 mužov<br>18.0% prítomných<br>15.9% registrovaných", "<b>výskumné pracovisko</b><br>6 mužov<br>4.3% prítomných<br>3.8% registrovaných", "<b>komerčná spoločnosť</b><br>5 mužov<br>3.6% prítomných<br>3.2% registrovaných", "<b>podpora výskumu</b><br>2 muži<br>1.4% prítomných<br>1.3% registrovaných", "<b>práca s mládežou</b><br>6 mužov<br>4.3% prítomných<br>3.8% registrovaných", "<b>iné</b><br>2 muži<br>1.4% prítomných<br>1.3% registrovaných", "<b>výskum + univerzita</b><br>1 muž<br>0.7% prítomných<br>0.6% registrovaných", "<b>štátna správa</b><br>1 muž<br>0.7% prítomných<br>0.6% registrovaných", "", "<b>neuvedené</b><br>15 mužov<br>10.8% prítomných<br>9.6% registrovaných"]
	},
	{
		x: [22, 5, 4, 2, 1, 2, 2, 0, 0, 0],
		y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "nadnárodná organizácia", "neuvedené"],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>22 neprítomných<br>14.0% registrovaných", "<b>výskumné pracovisko</b><br>5 neprítomných<br>3.2% registrovaných", "<b>komerčná spoločnosť</b><br>4 neprítomní<br>2.5% registrovaných", "<b>podpora výskumu</b><br>2 neprítomní<br>1.3% registrovaných", "<b>práca s mládežou</b><br>1 neprítomný/á<br>0.6% registrovaných", "<b>iné</b><br>2 neprítomní<br>1.3% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.3% registrovaných", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "nadnárodná organizácia", "neuvedené"],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
		y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "nadnárodná organizácia", "neuvedené"],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	}
];

var data_registration_timeSeries_2018 = [
	// registration_timeSeries 2018
	{
		x: [24.38125, 31.1479166667, 36.0979166667, 55.0979166667, 59.2645833333, 59.88125, 69.4645833333, 72.53125, 72.6979166667, 75.5645833333, 77.13125, 216.48125, 240.03125, 506.53125, 718.997916667, 719.064583333, 719.58125, 732.53125, 732.614583333, 733.08125, 733.364583333, 743.047916667, 803.03125, 843.297916667, 995.68125, 1039.26458333, 1082.64791667, 1138.88125, 1517.38125, 1524.68125, 1536.39791667, 1539.88125, 1542.34791667, 1544.84791667, 1645.33125, 1667.43125, 2047.78125, 2138.54791667, 2196.09791667, 2220.83125, 2234.94791667, 2269.99791667, 2282.03125, 2304.08125, 2306.19791667, 2307.23125, 2312.13125, 2315.69791667, 2332.66458333, 2375.63125, 2378.04791667, 2380.43125, 2382.09791667, 2384.76458333, 2385.23125, 2386.69791667, 2387.56458333, 2399.71458333, 2404.88125, 2406.14791667, 2410.09791667, 2412.03125, 2426.79791667, 2450.76458333, 2456.93125, 2460.14791667, 2472.83125, 2472.86458333, 2473.06458333, 2483.93125, 2485.24791667, 2571.51458333],
		y: [1, 2, 3, 4, 6, 8, 9, 10, 11, 12, 14, 16, 17, 18, 22, 23, 25, 27, 28, 31, 32, 33, 36, 37, 39, 40, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 56, 58, 60, 62, 63, 69, 70, 72, 73, 74, 77, 78, 79, 80, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 94, 95, 97, 99, 100, 101, 102, 103, 104, 105, 106, 108],
		name: "Slovensko",
		text: ["03.09.2018 09:09", "03.09.2018 15:55", "03.09.2018 20:52", "04.09.2018 15:52", "04.09.2018 20:02", "04.09.2018 20:39", "05.09.2018 06:14", "05.09.2018 09:18", "05.09.2018 09:28", "05.09.2018 12:20", "05.09.2018 13:54", "11.09.2018 09:15", "12.09.2018 08:48", "23.09.2018 11:18", "02.10.2018 07:46", "02.10.2018 07:50", "02.10.2018 08:21", "02.10.2018 21:18", "02.10.2018 21:23", "02.10.2018 21:51", "02.10.2018 22:08", "03.10.2018 07:49", "05.10.2018 19:48", "07.10.2018 12:04", "13.10.2018 20:27", "15.10.2018 16:02", "17.10.2018 11:25", "19.10.2018 19:39", "04.11.2018 14:09", "04.11.2018 21:27", "05.11.2018 09:10", "05.11.2018 12:39", "05.11.2018 15:07", "05.11.2018 17:37", "09.11.2018 22:06", "10.11.2018 20:12", "26.11.2018 16:33", "30.11.2018 11:19", "02.12.2018 20:52", "03.12.2018 21:36", "04.12.2018 11:43", "05.12.2018 22:46", "06.12.2018 10:48", "07.12.2018 08:51", "07.12.2018 10:58", "07.12.2018 12:00", "07.12.2018 16:54", "07.12.2018 20:28", "08.12.2018 13:26", "10.12.2018 08:24", "10.12.2018 10:49", "10.12.2018 13:12", "10.12.2018 14:52", "10.12.2018 17:32", "10.12.2018 18:00", "10.12.2018 19:28", "10.12.2018 20:20", "11.12.2018 08:29", "11.12.2018 13:39", "11.12.2018 14:55", "11.12.2018 18:52", "11.12.2018 20:48", "12.12.2018 11:34", "13.12.2018 11:32", "13.12.2018 17:42", "13.12.2018 20:55", "14.12.2018 09:36", "14.12.2018 09:38", "14.12.2018 09:50", "14.12.2018 20:42", "14.12.2018 22:01", "18.12.2018 12:17"],
		type: 'scatter',
		mode: 'markers',
		marker: {
			color: 'rgb(0, 77, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovermode: "closest",
		hovertext: ["<b>03.09.2018 09:09</b><br>1 osoba<br>1.0% online registrácií", "<b>03.09.2018 15:55</b><br>2 osoby<br>2.0% online registrácií", "<b>03.09.2018 20:52</b><br>3 osoby<br>3.0% online registrácií", "<b>04.09.2018 15:52</b><br>4 osoby<br>4.0% online registrácií", "<b>04.09.2018 20:02</b><br>6 osôb<br>6.0% online registrácií", "<b>04.09.2018 20:39</b><br>8 osôb<br>7.0% online registrácií", "<b>05.09.2018 06:14</b><br>9 osôb<br>8.0% online registrácií", "<b>05.09.2018 09:18</b><br>10 osôb<br>9.0% online registrácií", "<b>05.09.2018 09:28</b><br>11 osôb<br>10.0% online registrácií", "<b>05.09.2018 12:20</b><br>12 osôb<br>11.0% online registrácií", "<b>05.09.2018 13:54</b><br>14 osôb<br>13.0% online registrácií", "<b>11.09.2018 09:15</b><br>16 osôb<br>15.0% online registrácií", "<b>12.09.2018 08:48</b><br>17 osôb<br>16.0% online registrácií", "<b>23.09.2018 11:18</b><br>18 osôb<br>17.0% online registrácií", "<b>02.10.2018 07:46</b><br>22 osôb<br>20.0% online registrácií", "<b>02.10.2018 07:50</b><br>23 osôb<br>21.0% online registrácií", "<b>02.10.2018 08:21</b><br>25 osôb<br>23.0% online registrácií", "<b>02.10.2018 21:18</b><br>27 osôb<br>25.0% online registrácií", "<b>02.10.2018 21:23</b><br>28 osôb<br>26.0% online registrácií", "<b>02.10.2018 21:51</b><br>31 osôb<br>28.0% online registrácií", "<b>02.10.2018 22:08</b><br>32 osôb<br>29.0% online registrácií", "<b>03.10.2018 07:49</b><br>33 osôb<br>30.0% online registrácií", "<b>05.10.2018 19:48</b><br>36 osôb<br>33.0% online registrácií", "<b>07.10.2018 12:04</b><br>37 osôb<br>34.0% online registrácií", "<b>13.10.2018 20:27</b><br>39 osôb<br>36.0% online registrácií", "<b>15.10.2018 16:02</b><br>40 osôb<br>37.0% online registrácií", "<b>17.10.2018 11:25</b><br>44 osôb<br>40.0% online registrácií", "<b>19.10.2018 19:39</b><br>46 osôb<br>42.0% online registrácií", "<b>04.11.2018 14:09</b><br>47 osôb<br>43.0% online registrácií", "<b>04.11.2018 21:27</b><br>48 osôb<br>44.0% online registrácií", "<b>05.11.2018 09:10</b><br>49 osôb<br>45.0% online registrácií", "<b>05.11.2018 12:39</b><br>50 osôb<br>46.0% online registrácií", "<b>05.11.2018 15:07</b><br>51 osôb<br>47.0% online registrácií", "<b>05.11.2018 17:37</b><br>52 osôb<br>48.0% online registrácií", "<b>09.11.2018 22:06</b><br>53 osôb<br>49.0% online registrácií", "<b>10.11.2018 20:12</b><br>54 osôb<br>50.0% online registrácií", "<b>26.11.2018 16:33</b><br>56 osôb<br>51.0% online registrácií", "<b>30.11.2018 11:19</b><br>58 osôb<br>53.0% online registrácií", "<b>02.12.2018 20:52</b><br>60 osôb<br>55.0% online registrácií", "<b>03.12.2018 21:36</b><br>62 osôb<br>57.0% online registrácií", "<b>04.12.2018 11:43</b><br>63 osôb<br>58.0% online registrácií", "<b>05.12.2018 22:46</b><br>69 osôb<br>63.0% online registrácií", "<b>06.12.2018 10:48</b><br>70 osôb<br>64.0% online registrácií", "<b>07.12.2018 08:51</b><br>72 osôb<br>66.0% online registrácií", "<b>07.12.2018 10:58</b><br>73 osôb<br>67.0% online registrácií", "<b>07.12.2018 12:00</b><br>74 osôb<br>68.0% online registrácií", "<b>07.12.2018 16:54</b><br>77 osôb<br>71.0% online registrácií", "<b>07.12.2018 20:28</b><br>78 osôb<br>72.0% online registrácií", "<b>08.12.2018 13:26</b><br>79 osôb<br>72.0% online registrácií", "<b>10.12.2018 08:24</b><br>80 osôb<br>73.0% online registrácií", "<b>10.12.2018 10:49</b><br>82 osôb<br>75.0% online registrácií", "<b>10.12.2018 13:12</b><br>83 osôb<br>76.0% online registrácií", "<b>10.12.2018 14:52</b><br>84 osôb<br>77.0% online registrácií", "<b>10.12.2018 17:32</b><br>85 osôb<br>78.0% online registrácií", "<b>10.12.2018 18:00</b><br>86 osôb<br>79.0% online registrácií", "<b>10.12.2018 19:28</b><br>87 osôb<br>80.0% online registrácií", "<b>10.12.2018 20:20</b><br>88 osôb<br>81.0% online registrácií", "<b>11.12.2018 08:29</b><br>89 osôb<br>82.0% online registrácií", "<b>11.12.2018 13:39</b><br>91 osôb<br>83.0% online registrácií", "<b>11.12.2018 14:55</b><br>92 osôb<br>84.0% online registrácií", "<b>11.12.2018 18:52</b><br>94 osôb<br>86.0% online registrácií", "<b>11.12.2018 20:48</b><br>95 osôb<br>87.0% online registrácií", "<b>12.12.2018 11:34</b><br>97 osôb<br>89.0% online registrácií", "<b>13.12.2018 11:32</b><br>99 osôb<br>91.0% online registrácií", "<b>13.12.2018 17:42</b><br>100 osôb<br>92.0% online registrácií", "<b>13.12.2018 20:55</b><br>101 osôb<br>93.0% online registrácií", "<b>14.12.2018 09:36</b><br>102 osôb<br>94.0% online registrácií", "<b>14.12.2018 09:38</b><br>103 osôb<br>94.0% online registrácií", "<b>14.12.2018 09:50</b><br>104 osôb<br>95.0% online registrácií", "<b>14.12.2018 20:42</b><br>105 osôb<br>96.0% online registrácií", "<b>14.12.2018 22:01</b><br>106 osôb<br>97.0% online registrácií", "<b>18.12.2018 12:17</b><br>108 osôb<br>99.0% online registrácií"]
	},
	{
		x: [1950.73125],
		y: [55],
		name: "SR + zahraničie",
		text: ["22.11.2018 15:30"],
		type: 'scatter',
		mode: 'markers',
		marker: {
			color: 'rgb(161, 80, 22)'
		},
		visible: true,
		hoverinfo: 'text',
		hovermode: "closest",
		hovertext: ["<b>22.11.2018 15:30</b><br>55 osôb<br>50.0% online registrácií"]
	},
	{
		x: [56.13125, 59.48125, 75.98125, 96.0645833333, 512.58125, 717.464583333, 718.947916667, 719.464583333, 724.914583333, 732.697916667, 732.83125, 747.897916667, 753.547916667, 963.53125, 1062.26458333, 1062.73125, 1067.01458333, 1101.93125, 2052.18125, 2167.64791667, 2217.18125, 2257.43125, 2260.31458333, 2261.73125, 2262.53125, 2269.71458333, 2295.48125, 2307.93125, 2310.29791667, 2376.08125, 2406.44791667, 2423.69791667, 2450.21458333, 2545.29791667],
		y: [5, 7, 13, 15, 19, 20, 21, 24, 26, 29, 30, 34, 35, 38, 41, 42, 43, 45, 57, 59, 61, 64, 65, 66, 67, 68, 71, 75, 76, 81, 93, 96, 98, 107],
		name: "zahraničie",
		text: ["04.09.2018 16:54", "04.09.2018 20:15", "05.09.2018 12:45", "06.09.2018 08:50", "23.09.2018 17:21", "02.10.2018 06:14", "02.10.2018 07:43", "02.10.2018 08:14", "02.10.2018 13:41", "02.10.2018 21:28", "02.10.2018 21:36", "03.10.2018 12:40", "03.10.2018 18:19", "12.10.2018 12:18", "16.10.2018 15:02", "16.10.2018 15:30", "16.10.2018 19:47", "18.10.2018 06:42", "26.11.2018 20:57", "01.12.2018 16:25", "03.12.2018 17:57", "05.12.2018 10:12", "05.12.2018 13:05", "05.12.2018 14:30", "05.12.2018 15:18", "05.12.2018 22:29", "07.12.2018 12:15", "07.12.2018 12:42", "07.12.2018 15:04", "10.12.2018 08:51", "11.12.2018 15:13", "12.12.2018 08:28", "13.12.2018 10:59", "17.12.2018 10:04"],
		type: 'scatter',
		mode: 'markers',
		marker: {
			color: 'rgb(255, 127, 14)'
		},
		visible: true,
		hoverinfo: 'text',
		hovermode: "closest",
		hovertext: ["<b>04.09.2018 16:54</b><br>5 osôb<br>5.0% online registrácií", "<b>04.09.2018 20:15</b><br>7 osôb<br>6.0% online registrácií", "<b>05.09.2018 12:45</b><br>13 osôb<br>12.0% online registrácií", "<b>06.09.2018 08:50</b><br>15 osôb<br>14.0% online registrácií", "<b>23.09.2018 17:21</b><br>19 osôb<br>17.0% online registrácií", "<b>02.10.2018 06:14</b><br>20 osôb<br>18.0% online registrácií", "<b>02.10.2018 07:43</b><br>21 osôb<br>19.0% online registrácií", "<b>02.10.2018 08:14</b><br>24 osôb<br>22.0% online registrácií", "<b>02.10.2018 13:41</b><br>26 osôb<br>24.0% online registrácií", "<b>02.10.2018 21:28</b><br>29 osôb<br>27.0% online registrácií", "<b>02.10.2018 21:36</b><br>30 osôb<br>28.0% online registrácií", "<b>03.10.2018 12:40</b><br>34 osôb<br>31.0% online registrácií", "<b>03.10.2018 18:19</b><br>35 osôb<br>32.0% online registrácií", "<b>12.10.2018 12:18</b><br>38 osôb<br>35.0% online registrácií", "<b>16.10.2018 15:02</b><br>41 osôb<br>38.0% online registrácií", "<b>16.10.2018 15:30</b><br>42 osôb<br>39.0% online registrácií", "<b>16.10.2018 19:47</b><br>43 osôb<br>39.0% online registrácií", "<b>18.10.2018 06:42</b><br>45 osôb<br>41.0% online registrácií", "<b>26.11.2018 20:57</b><br>57 osôb<br>52.0% online registrácií", "<b>01.12.2018 16:25</b><br>59 osôb<br>54.0% online registrácií", "<b>03.12.2018 17:57</b><br>61 osôb<br>56.0% online registrácií", "<b>05.12.2018 10:12</b><br>64 osôb<br>59.0% online registrácií", "<b>05.12.2018 13:05</b><br>65 osôb<br>60.0% online registrácií", "<b>05.12.2018 14:30</b><br>66 osôb<br>61.0% online registrácií", "<b>05.12.2018 15:18</b><br>67 osôb<br>61.0% online registrácií", "<b>05.12.2018 22:29</b><br>68 osôb<br>62.0% online registrácií", "<b>07.12.2018 12:15</b><br>71 osôb<br>65.0% online registrácií", "<b>07.12.2018 12:42</b><br>75 osôb<br>69.0% online registrácií", "<b>07.12.2018 15:04</b><br>76 osôb<br>70.0% online registrácií", "<b>10.12.2018 08:51</b><br>81 osôb<br>74.0% online registrácií", "<b>11.12.2018 15:13</b><br>93 osôb<br>85.0% online registrácií", "<b>12.12.2018 08:28</b><br>96 osôb<br>88.0% online registrácií", "<b>13.12.2018 10:59</b><br>98 osôb<br>90.0% online registrácií", "<b>17.12.2018 10:04</b><br>107 osôb<br>98.0% online registrácií"]
	},
	{
		x: [2400.23125],
		y: [90],
		name: "neuvedené",
		text: ["11.12.2018 09:00"],
		type: 'scatter',
		mode: 'markers',
		marker: {
			color: 'rgb(124, 124, 124)'
		},
		visible: true,
		hoverinfo: 'text',
		hovermode: "closest",
		hovertext: ["<b>11.12.2018 09:00</b><br>90 osôb<br>83.0% online registrácií"]
	},
	{
		x: [0.0, 24.38125, 31.1479166667, 36.0979166667, 55.0979166667, 56.13125, 59.2645833333, 59.48125, 59.88125, 69.4645833333, 72.53125, 72.6979166667, 75.5645833333, 75.98125, 77.13125, 96.0645833333, 216.48125, 240.03125, 506.53125, 512.58125, 717.464583333, 718.947916667, 718.997916667, 719.064583333, 719.464583333, 719.58125, 724.914583333, 732.53125, 732.614583333, 732.697916667, 732.83125, 733.08125, 733.364583333, 743.047916667, 747.897916667, 753.547916667, 803.03125, 843.297916667, 963.53125, 995.68125, 1039.26458333, 1062.26458333, 1062.73125, 1067.01458333, 1082.64791667, 1101.93125, 1138.88125, 1517.38125, 1524.68125, 1536.39791667, 1539.88125, 1542.34791667, 1544.84791667, 1645.33125, 1667.43125, 1950.73125, 2047.78125, 2052.18125, 2138.54791667, 2167.64791667, 2196.09791667, 2217.18125, 2220.83125, 2234.94791667, 2257.43125, 2260.31458333, 2261.73125, 2262.53125, 2269.71458333, 2269.99791667, 2282.03125, 2295.48125, 2304.08125, 2306.19791667, 2307.23125, 2307.93125, 2310.29791667, 2312.13125, 2315.69791667, 2332.66458333, 2375.63125, 2376.08125, 2378.04791667, 2380.43125, 2382.09791667, 2384.76458333, 2385.23125, 2386.69791667, 2387.56458333, 2399.71458333, 2400.23125, 2404.88125, 2406.14791667, 2406.44791667, 2410.09791667, 2412.03125, 2423.69791667, 2426.79791667, 2450.21458333, 2450.76458333, 2456.93125, 2460.14791667, 2472.83125, 2472.86458333, 2473.06458333, 2483.93125, 2485.24791667, 2545.29791667, 2571.51458333],
		y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108],
		name: "",
		type: 'bar',
		marker: {
			color: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)']
		},
		showlegend: false,
		visible: true,
		hoverinfo: 'skip',
		hovermode: "none"
	},
];

var data_registration_timeLabels_2018 = ["", "03.09.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "02.10.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "15.10.", "", "", "", "", "", "", "04.11.", "", "", "", "", "", "", "", "", "", "", "", "01.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "14.12.", "", "", "", "", "", "18.12."];

var updateMenu_position_country_2018 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, true, true, true, false, false, false, false, false, false, false]],
		label: 'Zoradiť podľa pozície',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, true, true, true, true, true, true, true]],
		label: 'Zoradiť podľa celkového počtu',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 0.00,
	xanchor: 'middle',
	y: 1.15,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];

var updateMenu_position_gender_2018 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, true, false, false, false, false, false]],
		label: 'Zoradiť podľa pozície',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, true, true, true, true, true]],
		label: 'Zoradiť podľa celkového počtu',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 0.00,
	xanchor: 'middle',
	y: 1.15,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];

var updateMenu_institution_country_2018 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, true, true, true, false, false, false, false, false, false, false]],
		label: 'Zoradiť podľa typu pracoviska',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, true, true, true, true, true, true, true]],
		label: 'Zoradiť podľa celkového počtu',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 0.00,
	xanchor: 'middle',
	y: 1.15,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];

var updateMenu_institution_gender_2018 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, true, false, false, false, false, false]],
		label: 'Zoradiť podľa typu pracoviska',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, true, true, true, true, true]],
		label: 'Zoradiť podľa celkového počtu',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 0.00,
	xanchor: 'middle',
	y: 1.15,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];



var data_participation_2017 = [
// participation 2017
{
	type: "sunburst",
	ids: ["všetci", "prítomní", "neprítomní", "nesúhlas", "muži 1", "ženy 1", "bez registrácie", "muži 0", "ženy 0"],
	labels: ["dáta z prihlasovania + neregistrovaní účastníci", "prítomní", "neprítomní", "nesúhlas s analýzou", "muži", "ženy", "bez registrácie", "muži", "ženy"],
	values: [224, 155, 69, 0, 74, 56, 25, 25, 44],
	parents: ["", "všetci", "všetci", "všetci", "prítomní", "prítomní", "prítomní", "neprítomní", "neprítomní"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(124, 124, 124)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(204, 221, 255)', 'rgb(255, 204, 204)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania + neregistrovaní účastníci</b><br>224 osôb<br>", "155 prítomných<br>77.9% registrovaných", "69 neprítomných<br>34.7% registrovaných", "<b>nesúhlas s analýzou</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "74 mužov<br>47.7% prítomných<br>37.2% registrovaných", "56 žien<br>36.1% prítomných<br>28.1% registrovaných", "<b>bez registrácie</b><br>25 osôb<br>16.1% prítomných<br>", "25 mužov<br>12.6% registrovaných", "44 žien<br>22.1% registrovaných"]
}];

var data_participation_detail_2017 = [
// participation_detail 2017
{
	type: "sunburst",
	ids: ["všetci", "účasť", "iniciatívy", "prednášajúci", "organizácia", "nesúhlas", "účastníčky", "účastníci", "bez registrácie", "zástupkyne firiem", "zástupcovia firiem", "aktívne účastníčky", "aktívni účastníci", "organizátorky", "organizátori"],
	labels: ["iba prítomní", "účasť", "iniciatívy", "prednášajúci", "organizácia", "nesúhlas s analýzou", "ženy", "muži", "bez registrácie", "ženy", "muži", "ženy", "muži", "ženy", "muži"],
	values: [155, 132, 0, 5, 18, 0, 48, 59, 25, 0, 0, 1, 4, 7, 11],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "účasť", "účasť", "účasť", "iniciatívy", "iniciatívy", "prednášajúci", "prednášajúci", "organizácia", "organizácia"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 214, 16)', 'rgb(255, 174, 16)', 'rgb(255, 134, 16', 'rgb(200, 200, 200)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(0, 230, 0)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>155 osôb<br>", "<b>účasť</b><br>132 osôb<br>85.2% prítomných<br>", "<b>iniciatívy</b><br>0 osôb<br>0.0% prítomných<br>", "<b>prednášajúci</b><br>5 osôb<br>3.2% prítomných<br>", "<b>organizácia</b><br>18 osôb<br>11.6% prítomných<br>", "<b>nesúhlas s analýzou</b><br>0 osôb<br>0.0% prítomných<br>", "48 žien<br>31.0% prítomných<br>", "59 mužov<br>38.1% prítomných<br>", "<b>bez registrácie</b><br>25 osôb<br>16.1% prítomných<br>", "0 žien<br>0.0% prítomných<br>", "0 mužov<br>0.0% prítomných<br>", "1 žena<br>0.6% prítomných<br>", "4 muži<br>2.6% prítomných<br>", "7 žien<br>4.5% prítomných<br>", "11 mužov<br>7.1% prítomných<br>"]
}];

var data_abroad_2017 = [
// abroad 2017
{
	type: "sunburst",
	ids: ["všetci", "Slovensko", "oboje", "zahraničie", "neuvedené", "nesúhlas", "muži (SR)", "ženy (SR)", "muži (NA)", "ženy (NA)", "bez dát", "muži (oboje)", "ženy (oboje", "muži (zahr.)", "ženy (zahr.)"],
	labels: ["iba prítomní", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "nesúhlas s analýzou", "muži", "ženy", "muži", "ženy", "bez dát ", "muži", "ženy", "muži", "ženy"],
	values: [155, 73, 4, 48, 30, 0, 38, 35, 5, 0, 25, 4, 0, 27, 21],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "Slovensko", "Slovensko", "neuvedené", "neuvedené", "neuvedené", "oboje", "oboje", "zahraničie", "zahraničie"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>155 osôb<br>", "<b>Slovensko</b><br>73 osôb<br>47.1% prítomných<br>", "<b>SR a zahraničie</b><br>4 osoby<br>2.6% prítomných<br>", "<b>zahraničie</b><br>48 osôb<br>31.0% prítomných<br>", "<b>neuvedené</b><br>30 osôb<br>19.4% prítomných<br>", "<b>nesúhlas s analýzou</b><br>0 osôb<br>0.0% prítomných<br>", "38 mužov<br>24.5% prítomných<br>", "35 žien<br>22.6% prítomných<br>", "5 mužov<br>3.2% prítomných<br>", "0 žien<br>0.0% prítomných<br>", "<b>bez dát </b><br>25 osôb<br>16.1% prítomných<br>", "4 muži<br>2.6% prítomných<br>", "0 žien<br>0.0% prítomných<br>", "27 mužov<br>17.4% prítomných<br>", "21 žien<br>13.5% prítomných<br>"]
}];

var data_subject_2017 = [
// subject 2017
{
	type: "sunburst",
	ids: ["všetci", "prítomní", "neprítomní", "nesúhlas", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "STEM (neprítomní)", "SSH (neprítomní)", "iné (neprítomní)", "iniciatívy (neprítomní)", "neuvedené (neprítomní)", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "STEM nezaradené", "STEM neuvedené", "digital humanities", "história", "archeológia", "antropológia", "religionistika", "psychológia", "didaktika", "sociológia", "politické vedy", "ekonomické vedy", "SSH nezaradené", "SSH neuvedené", "podpora výskumu", "vzdelávanie, poradenstvo", "práca s mládežou", "projektový manažment", "popularizácia", "médiá", "iné nezaradené", "iné neuvedené", "iniciatívy podpora výskumu", "iniciatívy podpora výskumu (STEM)", "iniciatívy práca s mládežou (STEM)", "iniciatívy práca s mládežou", "iniciatívy vzdelávanie, poradenstvo", "iniciatívy popularizácia", "iniciatívy chémia", "iniciatívy fyzika", "neuvedené (iniciatívy)", "neuvedené (neuvedené)"],
	labels: ["iba dáta z registrácie", "prítomní", "neprítomní", "nesúhlas s analýzou", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "nezaradené", "neuvedené", "digital humanities", "história", "archeológia", "antropológia", "religionistika", "psychológia", "didaktika", "sociológia", "politické vedy", "ekonomické vedy", "nezaradené", "neuvedené", "podpora výskumu", "vzdelávanie, poradenstvo", "práca s mládežou", "projektový manažment", "popularizácia", "médiá", "nezaradené", "neuvedené", "podpora výskumu", "podpora výskumu (STEM)", "práca s mládežou (STEM)", "práca s mládežou", "vzdelávanie, poradenstvo", "popularizácia", "chémia", "fyzika", "neuvedené", "neuvedené"],
	values: [199, 130, 69, 0, 114, 11, 5, 0, 0, 50, 15, 3, 0, 1, 7, 15, 12, 11, 1, 1, 4, 4, 5, 8, 0, 5, 19, 3, 3, 4, 0, 7, 2, 3, 0, 0, 0, 1, 3, 2, 0, 1, 0, 1, 2, 1, 0, 0, 2, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	parents: ["", "všetci", "všetci", "všetci", "prítomní", "prítomní", "prítomní", "prítomní", "prítomní", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "neuvedené"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(190, 190, 190)', 'rgb(200, 200, 200)', 'rgb(0, 102, 102)', 'rgb(204, 0, 0)', 'rgb(62, 0, 62)', 'rgb(92, 0, 92)', 'rgb(124, 124, 124)', 'rgb(95, 146, 146)', 'rgb(197, 95, 95)', 'rgb(126,95,126)', 'rgb(82, 0, 82)', 'rgb(157, 157, 157)', 'rgb(53, 104, 0)', 'rgb(82, 163, 0)', 'rgb(102, 204, 0)', 'rgb(222, 222, 92)', 'rgb(255, 238, 153)', 'rgb(255,247,126)', 'rgb(255, 255, 98)', 'rgb(255, 255, 0)', 'rgb(255, 204, 0)', 'rgb(255, 128, 0)', 'rgb(204, 101, 0)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(0, 0, 255)', 'rgb(0, 128, 255)', 'rgb(136, 136, 136)', 'rgb(175, 175, 175)', 'rgb(36, 18, 0)', 'rgb(75, 37, 0)', 'rgb(89, 121, 0)', 'rgb(0, 102, 102)', 'rgb(0, 102, 102)', 'rgb(102, 51, 77)', 'rgb(145,0,73)', 'rgb(204, 0, 102)', 'rgb(255, 47, 151)', 'rgb(153, 0, 76)', 'rgb(214, 48, 90)', 'rgb(214, 48, 62)', 'rgb(214, 48, 48)', 'rgb(218, 94, 69)', 'rgb(218, 106, 69)', 'rgb(204, 0, 0)', 'rgb(204, 0, 0)', 'rgb(82, 0, 82)', 'rgb(132, 0, 132)', 'rgb(142, 0, 142)', 'rgb(152, 0, 152)', 'rgb(162, 0, 162)', 'rgb(172, 0, 172)', 'rgb(62, 0, 62)', 'rgb(62, 0, 62)', 'rgb(82, 0, 82)', 'rgb(31, 51, 82)', 'rgb(36, 77, 112)', 'rgb(142, 0, 142)', 'rgb(132, 0, 132)', 'rgb(162, 0, 162)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(124, 124, 124)', 'rgb(124, 124, 124)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba dáta z registrácie</b><br>199 osôb<br>", "130 prítomných<br>65.3% registrovaných", "69 neprítomných<br>34.7% registrovaných", "<b>nesúhlas s analýzou</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>STEM</b><br>114 osôb<br>87.7% prítomných<br>57.3% registrovaných", "<b>SSH</b><br>11 osôb<br>8.5% prítomných<br>5.5% registrovaných", "<b>iné</b><br>5 osôb<br>3.8% prítomných<br>2.5% registrovaných", "<b>iniciatívy</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>STEM</b><br>50 osôb<br>25.1% registrovaných", "<b>SSH</b><br>15 osôb<br>7.5% registrovaných", "<b>iné</b><br>3 osoby<br>1.5% registrovaných", "<b>iniciatívy</b><br>0 osôb<br>0.0% registrovaných", "<b>neuvedené</b><br>1 osoba<br>0.5% registrovaných", "<b>genetika</b><br>7 osôb<br>5.4% prítomných<br>3.5% registrovaných", "<b>molekulárna biológia</b><br>15 osôb<br>11.5% prítomných<br>7.5% registrovaných", "<b>biológia</b><br>12 osôb<br>9.2% prítomných<br>6.0% registrovaných", "<b>biochémia</b><br>11 osôb<br>8.5% prítomných<br>5.5% registrovaných", "<b>biofyzika</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>bioinformatika</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>biomedicína</b><br>4 osoby<br>3.1% prítomných<br>2.0% registrovaných", "<b>biotechnológie, biomateriály</b><br>4 osoby<br>3.1% prítomných<br>2.0% registrovaných", "<b>neurovedy</b><br>5 osôb<br>3.8% prítomných<br>2.5% registrovaných", "<b>medicína, lekárske vedy</b><br>8 osôb<br>6.2% prítomných<br>4.0% registrovaných", "<b>farmácia</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>chémia</b><br>5 osôb<br>3.8% prítomných<br>2.5% registrovaných", "<b>fyzika</b><br>19 osôb<br>14.6% prítomných<br>9.5% registrovaných", "<b>matematika</b><br>3 osoby<br>2.3% prítomných<br>1.5% registrovaných", "<b>IT</b><br>3 osoby<br>2.3% prítomných<br>1.5% registrovaných", "<b>technológie</b><br>4 osoby<br>3.1% prítomných<br>2.0% registrovaných", "<b>stavebné inžinierstvo, architektúra</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>geopriestorové vedy</b><br>7 osôb<br>5.4% prítomných<br>3.5% registrovaných", "<b>vedy o Zemi</b><br>2 osoby<br>1.5% prítomných<br>1.0% registrovaných", "<b>ekologické a environmentálne vedy</b><br>3 osoby<br>2.3% prítomných<br>1.5% registrovaných", "<b>nezaradené</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>digital humanities</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>história</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>archeológia</b><br>3 osoby<br>2.3% prítomných<br>1.5% registrovaných", "<b>antropológia</b><br>2 osoby<br>1.5% prítomných<br>1.0% registrovaných", "<b>religionistika</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>psychológia</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>didaktika</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>sociológia</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>politické vedy</b><br>2 osoby<br>1.5% prítomných<br>1.0% registrovaných", "<b>ekonomické vedy</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>nezaradené</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>podpora výskumu</b><br>2 osoby<br>1.5% prítomných<br>1.0% registrovaných", "<b>vzdelávanie, poradenstvo</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>práca s mládežou</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>projektový manažment</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>popularizácia</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>médiá</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>nezaradené</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>neuvedené</b><br>2 osoby<br>1.5% prítomných<br>1.0% registrovaných", "<b>podpora výskumu</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>podpora výskumu (STEM)</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>práca s mládežou (STEM)</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>práca s mládežou</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>vzdelávanie, poradenstvo</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>popularizácia</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>chémia</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>fyzika</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>0.0% registrovaných"]
}];

var data_position_country_2017 = [
	// position_country 2017
	{
		x: [6, 16, 0, 11, 0, 14, 1, 12, 13, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'Slovensko',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>profesor, docent </b><br>Slovensko: 6 osôb<br>3.9% prítomných<br>3.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 16 osôb<br>10.3% prítomných<br>8.0% registrovaných", "", "<b>postdok, junior researcher</b><br>Slovensko: 11 osôb<br>7.1% prítomných<br>5.5% registrovaných", "", "<b>doktorand </b><br>Slovensko: 14 osôb<br>9.0% prítomných<br>7.0% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 12 osôb<br>7.7% prítomných<br>6.0% registrovaných", "<b>iné </b><br>Slovensko: 13 osôb<br>8.4% prítomných<br>6.5% registrovaných", ""]
	},
	{
		x: [1, 2, 0, 0, 0, 1, 0, 0, 0, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'SR + zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(161, 80, 22)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>profesor, docent </b><br>SR + zahraničie: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>SR + zahraničie: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", "", "<b>doktorand </b><br>SR + zahraničie: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", "", ""]
	},
	{
		x: [0, 4, 0, 16, 0, 14, 2, 11, 1, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(255, 127, 14)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 4 osoby<br>2.6% prítomných<br>2.0% registrovaných", "", "<b>postdok, junior researcher</b><br>zahraničie: 16 osôb<br>10.3% prítomných<br>8.0% registrovaných", "", "<b>doktorand </b><br>zahraničie: 14 osôb<br>9.0% prítomných<br>7.0% registrovaných", "<b>mimo akadémie </b><br>zahraničie: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 11 osôb<br>7.1% prítomných<br>5.5% registrovaných", "<b>iné </b><br>zahraničie: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", ""]
	},
	{
		x: [0, 2, 0, 1, 0, 0, 1, 0, 1, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'neuvedené',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(124, 124, 124)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>neuvedené (krajina): 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "<b>postdok, junior researcher</b><br>neuvedené (krajina): 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", "<b>mimo akadémie </b><br>neuvedené (krajina): 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "<b>iné </b><br>neuvedené (krajina): 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", ""]
	},
	{
		x: [4, 9, 0, 9, 0, 17, 0, 16, 14, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>profesor, docent </b><br>4 neprítomní<br>2.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>9 neprítomných<br>4.5% registrovaných", "", "<b>postdok, junior researcher</b><br>9 neprítomných<br>4.5% registrovaných", "", "<b>doktorand </b><br>17 neprítomných<br>8.5% registrovaných", "", "<b>študent (Bc./Mgr.) </b><br>16 neprítomných<br>8.0% registrovaných", "<b>iné </b><br>14 neprítomných<br>7.0% registrovaných", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 25],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 25 osôb<br>16.1% prítomných<br>"]
	},
	{
		x: [14, 11, 16, 12, 13, 6, 1, 0, 0, 0],
		y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
		name: 'Slovensko',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>doktorand </b><br>Slovensko: 14 osôb<br>10.8% prítomných<br>7.0% registrovaných", "<b>postdok, junior researcher</b><br>Slovensko: 11 osôb<br>8.5% prítomných<br>5.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 16 osôb<br>12.3% prítomných<br>8.0% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 12 osôb<br>9.2% prítomných<br>6.0% registrovaných", "<b>iné </b><br>Slovensko: 13 osôb<br>10.0% prítomných<br>6.5% registrovaných", "<b>profesor, docent </b><br>Slovensko: 6 osôb<br>4.6% prítomných<br>3.0% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "", "", ""]
	},
	{
		x: [1, 0, 2, 0, 0, 1, 0, 0, 0, 0],
		y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
		name: 'SR + zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(161, 80, 22)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>doktorand </b><br>SR + zahraničie: 1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "", "<b>vedecký pracovník (senior researcher) </b><br>SR + zahraničie: 2 osoby<br>1.5% prítomných<br>1.0% registrovaných", "", "", "<b>profesor, docent </b><br>SR + zahraničie: 1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "", "", "", ""]
	},
	{
		x: [14, 16, 4, 11, 1, 0, 2, 0, 0, 0],
		y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
		name: 'zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(255, 127, 14)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>doktorand </b><br>zahraničie: 14 osôb<br>10.8% prítomných<br>7.0% registrovaných", "<b>postdok, junior researcher</b><br>zahraničie: 16 osôb<br>12.3% prítomných<br>8.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 4 osoby<br>3.1% prítomných<br>2.0% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 11 osôb<br>8.5% prítomných<br>5.5% registrovaných", "<b>iné </b><br>zahraničie: 1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "", "<b>mimo akadémie </b><br>zahraničie: 2 osoby<br>1.5% prítomných<br>1.0% registrovaných", "", "", ""]
	},
	{
		x: [0, 1, 2, 0, 1, 0, 1, 0, 0, 0],
		y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
		name: 'neuvedené',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(124, 124, 124)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "<b>postdok, junior researcher</b><br>neuvedené (krajina): 1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>neuvedené (krajina): 2 osoby<br>1.5% prítomných<br>1.0% registrovaných", "", "<b>iné </b><br>neuvedené (krajina): 1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "", "<b>mimo akadémie </b><br>neuvedené (krajina): 1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "", "", ""]
	},
	{
		x: [17, 9, 9, 16, 14, 4, 0, 0, 0, 0],
		y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>doktorand </b><br>17 neprítomných<br>8.5% registrovaných", "<b>postdok, junior researcher</b><br>9 neprítomných<br>4.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>9 neprítomných<br>4.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>16 neprítomných<br>8.0% registrovaných", "<b>iné </b><br>14 neprítomných<br>7.0% registrovaných", "<b>profesor, docent </b><br>4 neprítomní<br>2.0% registrovaných", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	}
];

var data_position_gender_2017 = [
	// position_gender 2017
	{
		x: [1, 5, 0, 16, 0, 12, 1, 15, 6, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'ženy',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(230, 0, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>profesor, docent </b><br>1 žena<br>0.6% prítomných<br>0.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>5 žien<br>3.2% prítomných<br>2.5% registrovaných", "", "<b>postdok, junior researcher</b><br>16 žien<br>10.3% prítomných<br>8.0% registrovaných", "", "<b>doktorand </b><br>12 žien<br>7.7% prítomných<br>6.0% registrovaných", "<b>mimo akadémie </b><br>1 žena<br>0.6% prítomných<br>0.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>15 žien<br>9.7% prítomných<br>7.5% registrovaných", "<b>iné </b><br>6 žien<br>3.9% prítomných<br>3.0% registrovaných", ""]
	},
	{
		x: [6, 19, 0, 12, 0, 17, 3, 8, 9, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'muži',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 230)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>profesor, docent </b><br>6 mužov<br>3.9% prítomných<br>3.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>19 mužov<br>12.3% prítomných<br>9.5% registrovaných", "", "<b>postdok, junior researcher</b><br>12 mužov<br>7.7% prítomných<br>6.0% registrovaných", "", "<b>doktorand </b><br>17 mužov<br>11.0% prítomných<br>8.5% registrovaných", "<b>mimo akadémie </b><br>3 muži<br>1.9% prítomných<br>1.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>8 mužov<br>5.2% prítomných<br>4.0% registrovaných", "<b>iné </b><br>9 mužov<br>5.8% prítomných<br>4.5% registrovaných", ""]
	},
	{
		x: [4, 9, 0, 9, 0, 17, 0, 16, 14, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>profesor, docent </b><br>4 neprítomní<br>2.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>9 neprítomných<br>4.5% registrovaných", "", "<b>postdok, junior researcher</b><br>9 neprítomných<br>4.5% registrovaných", "", "<b>doktorand </b><br>17 neprítomných<br>8.5% registrovaných", "", "<b>študent (Bc./Mgr.) </b><br>16 neprítomných<br>8.0% registrovaných", "<b>iné </b><br>14 neprítomných<br>7.0% registrovaných", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 25],
		y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 25 osôb<br>16.1% prítomných<br>"]
	},
	{
		x: [12, 16, 5, 15, 6, 1, 1, 0, 0, 0],
		y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
		name: 'ženy',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(230, 0, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>doktorand </b><br>12 žien<br>9.2% prítomných<br>6.0% registrovaných", "<b>postdok, junior researcher</b><br>16 žien<br>12.3% prítomných<br>8.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>5 žien<br>3.8% prítomných<br>2.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>15 žien<br>11.5% prítomných<br>7.5% registrovaných", "<b>iné </b><br>6 žien<br>4.6% prítomných<br>3.0% registrovaných", "<b>profesor, docent </b><br>1 žena<br>0.8% prítomných<br>0.5% registrovaných", "<b>mimo akadémie </b><br>1 žena<br>0.8% prítomných<br>0.5% registrovaných", "", "", ""]
	},
	{
		x: [17, 12, 19, 8, 9, 6, 3, 0, 0, 0],
		y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
		name: 'muži',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 230)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>doktorand </b><br>17 mužov<br>13.1% prítomných<br>8.5% registrovaných", "<b>postdok, junior researcher</b><br>12 mužov<br>9.2% prítomných<br>6.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>19 mužov<br>14.6% prítomných<br>9.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>8 mužov<br>6.2% prítomných<br>4.0% registrovaných", "<b>iné </b><br>9 mužov<br>6.9% prítomných<br>4.5% registrovaných", "<b>profesor, docent </b><br>6 mužov<br>4.6% prítomných<br>3.0% registrovaných", "<b>mimo akadémie </b><br>3 muži<br>2.3% prítomných<br>1.5% registrovaných", "", "", ""]
	},
	{
		x: [17, 9, 9, 16, 14, 4, 0, 0, 0, 0],
		y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>doktorand </b><br>17 neprítomných<br>8.5% registrovaných", "<b>postdok, junior researcher</b><br>9 neprítomných<br>4.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>9 neprítomných<br>4.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>16 neprítomných<br>8.0% registrovaných", "<b>iné </b><br>14 neprítomných<br>7.0% registrovaných", "<b>profesor, docent </b><br>4 neprítomní<br>2.0% registrovaných", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 25],
		y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 25 osôb<br>16.1% prítomných<br>"]
	}
];

var data_institution_country_2017 = [
	// institution_country 2017
	{
		x: [33, 1, 27, 0, 2, 5, 0, 0, 4, 1],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'Slovensko',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>Slovensko: 33 osôb<br>21.3% prítomných<br>16.6% registrovaných", "<b>výskum + univerzita</b><br>Slovensko: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 27 osôb<br>17.4% prítomných<br>13.6% registrovaných", "", "<b>komerčná spoločnosť</b><br>Slovensko: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 5 osôb<br>3.2% prítomných<br>2.5% registrovaných", "", "", "<b>iné</b><br>Slovensko: 4 osoby<br>2.6% prítomných<br>2.0% registrovaných", "<b>neuvedené</b><br>Slovensko: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných"]
	},
	{
		x: [2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'SR + zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(161, 80, 22)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>SR + zahraničie: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "<b>výskum + univerzita</b><br>SR + zahraničie: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", "", "", "", "", "", ""]
	},
	{
		x: [34, 9, 3, 0, 1, 0, 0, 0, 1, 0],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(255, 127, 14)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>zahraničie: 34 osôb<br>21.9% prítomných<br>17.1% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 9 osôb<br>5.8% prítomných<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 3 osoby<br>1.9% prítomných<br>1.5% registrovaných", "", "<b>komerčná spoločnosť</b><br>zahraničie: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", "", "<b>iné</b><br>zahraničie: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", ""]
	},
	{
		x: [2, 0, 0, 1, 0, 0, 0, 0, 2, 0],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'neuvedené',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(124, 124, 124)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>neuvedené (krajina): 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", "<b>nadnárodná organizácia</b><br>neuvedené (krajina): 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", "", "", "<b>iné</b><br>neuvedené (krajina): 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", ""]
	},
	{
		x: [38, 2, 13, 2, 5, 3, 0, 2, 3, 1],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>38 neprítomných<br>19.1% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.0% registrovaných", "<b>výskumné pracovisko</b><br>13 neprítomných<br>6.5% registrovaných", "<b>nadnárodná organizácia</b><br>2 neprítomní<br>1.0% registrovaných", "<b>komerčná spoločnosť</b><br>5 neprítomných<br>2.5% registrovaných", "<b>podpora výskumu</b><br>3 neprítomní<br>1.5% registrovaných", "", "<b>štátna správa</b><br>2 neprítomní<br>1.0% registrovaných", "<b>iné</b><br>3 neprítomní<br>1.5% registrovaných", "<b>neuvedené</b><br>1 neprítomný/á<br>0.5% registrovaných"]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 25],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 25 osôb<br>16.1% prítomných<br>"]
	},
	{
		x: [33, 27, 1, 4, 5, 2, 0, 0, 0, 1],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "štátna správa", "práca s mládežou", "neuvedené"],
		name: 'Slovensko',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>Slovensko: 33 osôb<br>21.3% prítomných<br>16.6% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 27 osôb<br>17.4% prítomných<br>13.6% registrovaných", "<b>výskum + univerzita</b><br>Slovensko: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "<b>iné</b><br>Slovensko: 4 osoby<br>2.6% prítomných<br>2.0% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 5 osôb<br>3.2% prítomných<br>2.5% registrovaných", "<b>komerčná spoločnosť</b><br>Slovensko: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", "", "<b>neuvedené</b><br>Slovensko: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných"]
	},
	{
		x: [2, 0, 2, 0, 0, 0, 0, 0, 0, 0],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "štátna správa", "práca s mládežou", "neuvedené"],
		name: 'SR + zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(161, 80, 22)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>SR + zahraničie: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "<b>výskum + univerzita</b><br>SR + zahraničie: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", "", "", "", "", ""]
	},
	{
		x: [34, 3, 9, 1, 0, 1, 0, 0, 0, 0],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "štátna správa", "práca s mládežou", "neuvedené"],
		name: 'zahraničie',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(255, 127, 14)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>zahraničie: 34 osôb<br>21.9% prítomných<br>17.1% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 3 osoby<br>1.9% prítomných<br>1.5% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 9 osôb<br>5.8% prítomných<br>4.5% registrovaných", "<b>iné</b><br>zahraničie: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "<b>komerčná spoločnosť</b><br>zahraničie: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", "", ""]
	},
	{
		x: [2, 0, 0, 2, 0, 0, 1, 0, 0, 0],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "štátna správa", "práca s mládežou", "neuvedené"],
		name: 'neuvedené',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(124, 124, 124)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>neuvedené (krajina): 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", "<b>iné</b><br>neuvedené (krajina): 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", "<b>nadnárodná organizácia</b><br>neuvedené (krajina): 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", ""]
	},
	{
		x: [38, 13, 2, 3, 3, 5, 2, 2, 0, 1],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "štátna správa", "práca s mládežou", "neuvedené"],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>38 neprítomných<br>19.1% registrovaných", "<b>výskumné pracovisko</b><br>13 neprítomných<br>6.5% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.0% registrovaných", "<b>iné</b><br>3 neprítomní<br>1.5% registrovaných", "<b>podpora výskumu</b><br>3 neprítomní<br>1.5% registrovaných", "<b>komerčná spoločnosť</b><br>5 neprítomných<br>2.5% registrovaných", "<b>nadnárodná organizácia</b><br>2 neprítomní<br>1.0% registrovaných", "<b>štátna správa</b><br>2 neprítomní<br>1.0% registrovaných", "", "<b>neuvedené</b><br>1 neprítomný/á<br>0.5% registrovaných"]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "štátna správa", "práca s mládežou", "neuvedené"],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 25],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "štátna správa", "práca s mládežou", "neuvedené"],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 25 osôb<br>16.1% prítomných<br>"]
	}
];

var data_institution_gender_2017 = [
	// institution_gender 2017
	{
		x: [31, 5, 13, 0, 1, 3, 0, 0, 3, 0],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'ženy',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(230, 0, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>31 žien<br>20.0% prítomných<br>15.6% registrovaných", "<b>výskum + univerzita</b><br>5 žien<br>3.2% prítomných<br>2.5% registrovaných", "<b>výskumné pracovisko</b><br>13 žien<br>8.4% prítomných<br>6.5% registrovaných", "", "<b>komerčná spoločnosť</b><br>1 žena<br>0.6% prítomných<br>0.5% registrovaných", "<b>podpora výskumu</b><br>3 ženy<br>1.9% prítomných<br>1.5% registrovaných", "", "", "<b>iné</b><br>3 ženy<br>1.9% prítomných<br>1.5% registrovaných", ""]
	},
	{
		x: [40, 7, 17, 1, 2, 2, 0, 0, 4, 1],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'muži',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 230)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>40 mužov<br>25.8% prítomných<br>20.1% registrovaných", "<b>výskum + univerzita</b><br>7 mužov<br>4.5% prítomných<br>3.5% registrovaných", "<b>výskumné pracovisko</b><br>17 mužov<br>11.0% prítomných<br>8.5% registrovaných", "<b>nadnárodná organizácia</b><br>1 muž<br>0.6% prítomných<br>0.5% registrovaných", "<b>komerčná spoločnosť</b><br>2 muži<br>1.3% prítomných<br>1.0% registrovaných", "<b>podpora výskumu</b><br>2 muži<br>1.3% prítomných<br>1.0% registrovaných", "", "", "<b>iné</b><br>4 muži<br>2.6% prítomných<br>2.0% registrovaných", "<b>neuvedené</b><br>1 muž<br>0.6% prítomných<br>0.5% registrovaných"]
	},
	{
		x: [38, 2, 13, 2, 5, 3, 0, 2, 3, 1],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>38 neprítomných<br>19.1% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.0% registrovaných", "<b>výskumné pracovisko</b><br>13 neprítomných<br>6.5% registrovaných", "<b>nadnárodná organizácia</b><br>2 neprítomní<br>1.0% registrovaných", "<b>komerčná spoločnosť</b><br>5 neprítomných<br>2.5% registrovaných", "<b>podpora výskumu</b><br>3 neprítomní<br>1.5% registrovaných", "", "<b>štátna správa</b><br>2 neprítomní<br>1.0% registrovaných", "<b>iné</b><br>3 neprítomní<br>1.5% registrovaných", "<b>neuvedené</b><br>1 neprítomný/á<br>0.5% registrovaných"]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 25],
		y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 25 osôb<br>16.1% prítomných<br>"]
	},
	{
		x: [31, 13, 5, 3, 3, 1, 0, 0, 0, 0],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "štátna správa", "práca s mládežou", "neuvedené"],
		name: 'ženy',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(230, 0, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>31 žien<br>20.0% prítomných<br>15.6% registrovaných", "<b>výskumné pracovisko</b><br>13 žien<br>8.4% prítomných<br>6.5% registrovaných", "<b>výskum + univerzita</b><br>5 žien<br>3.2% prítomných<br>2.5% registrovaných", "<b>iné</b><br>3 ženy<br>1.9% prítomných<br>1.5% registrovaných", "<b>podpora výskumu</b><br>3 ženy<br>1.9% prítomných<br>1.5% registrovaných", "<b>komerčná spoločnosť</b><br>1 žena<br>0.6% prítomných<br>0.5% registrovaných", "", "", "", ""]
	},
	{
		x: [40, 17, 7, 4, 2, 2, 1, 0, 0, 1],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "štátna správa", "práca s mládežou", "neuvedené"],
		name: 'muži',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 77, 230)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>40 mužov<br>25.8% prítomných<br>20.1% registrovaných", "<b>výskumné pracovisko</b><br>17 mužov<br>11.0% prítomných<br>8.5% registrovaných", "<b>výskum + univerzita</b><br>7 mužov<br>4.5% prítomných<br>3.5% registrovaných", "<b>iné</b><br>4 muži<br>2.6% prítomných<br>2.0% registrovaných", "<b>podpora výskumu</b><br>2 muži<br>1.3% prítomných<br>1.0% registrovaných", "<b>komerčná spoločnosť</b><br>2 muži<br>1.3% prítomných<br>1.0% registrovaných", "<b>nadnárodná organizácia</b><br>1 muž<br>0.6% prítomných<br>0.5% registrovaných", "", "", "<b>neuvedené</b><br>1 muž<br>0.6% prítomných<br>0.5% registrovaných"]
	},
	{
		x: [38, 13, 2, 3, 3, 5, 2, 2, 0, 1],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "štátna správa", "práca s mládežou", "neuvedené"],
		name: 'neprítomní',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(190, 190, 190)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["<b>univerzita</b><br>38 neprítomných<br>19.1% registrovaných", "<b>výskumné pracovisko</b><br>13 neprítomných<br>6.5% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.0% registrovaných", "<b>iné</b><br>3 neprítomní<br>1.5% registrovaných", "<b>podpora výskumu</b><br>3 neprítomní<br>1.5% registrovaných", "<b>komerčná spoločnosť</b><br>5 neprítomných<br>2.5% registrovaných", "<b>nadnárodná organizácia</b><br>2 neprítomní<br>1.0% registrovaných", "<b>štátna správa</b><br>2 neprítomní<br>1.0% registrovaných", "", "<b>neuvedené</b><br>1 neprítomný/á<br>0.5% registrovaných"]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "štátna správa", "práca s mládežou", "neuvedené"],
		name: 'nesúhlas s analýzou',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(222, 222, 222)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
		x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 25],
		y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "štátna správa", "práca s mládežou", "neuvedené"],
		name: 'bez dát',
		type: 'bar',
		orientation: 'h',
		marker: {
			color: 'rgb(0, 230, 0)'
		},
		visible: false,
		hoverinfo: 'text',
		hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 25 osôb<br>16.1% prítomných<br>"]
	}
];

var data_registration_timeSeries_2017 = [
	// registration_timeSeries 2017
	{
		x: [433.812858796, 437.623414352, 462.043969907, 583.711469907, 1259.89508102, 1262.5178588, 1269.98646991, 1270.2753588, 1272.26146991, 1273.32924769, 1274.05063657, 1274.06924769, 1274.09313657, 1274.24619213, 1274.66924769, 1274.8078588, 1275.87008102, 1277.45369213, 1279.10508102, 1283.43230324, 1283.56646991, 1297.3278588, 1300.46841435, 1319.83563657, 1321.74230324, 1322.20480324, 1358.10174769, 1379.1278588, 1402.69813657, 1418.07646991, 1444.09396991, 1464.49480324, 1465.89646991, 1474.82063657, 1501.50369213, 1514.12174769, 1519.01591435, 1567.00091435, 1613.08369213, 1694.77980324, 1764.67591435, 1782.04980324, 1799.05230324, 1959.4428588, 1968.87563657, 1971.9678588, 1992.79480324, 1992.9603588, 1994.96424769, 2019.93508102, 2031.42758102, 2125.39063657, 2141.1928588, 2163.88896991, 2218.29091435, 2218.63341435, 2234.97674769, 2240.03452546, 2255.65869213, 2287.10702546, 2287.12369213, 2319.44313657, 2404.53952546, 2439.70619213, 2448.86619213, 2449.15174769, 2449.38591435, 2450.10202546, 2452.28869213, 2453.82452546, 2453.83952546, 2471.82896991, 2475.07063657, 2476.97119213, 2478.74452546, 2485.38119213, 2494.93730324, 2495.37091435, 2496.39396991, 2498.22424769, 2498.90952546, 2498.94758102, 2499.92952546, 2499.95480324, 2501.39674769, 2502.56591435, 2503.32341435, 2503.57980324, 2503.78924769, 2527.16813657, 2533.71619213, 2534.87730324, 2545.43119213, 2547.98091435, 2549.75452546, 2549.88091435, 2550.63174769, 2553.52869213, 2554.68063657, 2557.05646991, 2557.53174769, 2568.23758102, 2568.34063657, 2569.10369213, 2572.09730324, 2572.15258102, 2572.15702546, 2572.33730324, 2572.7428588, 2572.9453588, 2574.78869213, 2575.67980324],
		y: [2, 3, 4, 5, 7, 8, 10, 11, 13, 15, 16, 17, 18, 19, 20, 22, 24, 25, 27, 29, 30, 31, 32, 34, 35, 36, 38, 40, 41, 42, 44, 46, 47, 49, 54, 56, 57, 59, 61, 65, 67, 69, 71, 75, 76, 77, 78, 79, 80, 81, 82, 87, 88, 89, 91, 92, 93, 95, 96, 97, 98, 101, 103, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 116, 117, 123, 125, 126, 128, 130, 131, 132, 134, 135, 137, 138, 139, 140, 141, 143, 145, 147, 151, 153, 154, 155, 156, 158, 159, 161, 162, 164, 165, 166, 169, 170, 171, 172, 176, 178, 180, 182],
		name: "Slovensko",
		text: ["20.09.2017 10:34", "20.09.2017 14:22", "21.09.2017 14:47", "26.09.2017 16:27", "24.10.2017 20:38", "24.10.2017 23:16", "25.10.2017 06:44", "25.10.2017 07:01", "25.10.2017 09:00", "25.10.2017 10:05", "25.10.2017 10:48", "25.10.2017 10:49", "25.10.2017 10:50", "25.10.2017 11:00", "25.10.2017 11:25", "25.10.2017 11:33", "25.10.2017 12:37", "25.10.2017 14:12", "25.10.2017 15:51", "25.10.2017 20:11", "25.10.2017 20:19", "26.10.2017 10:04", "26.10.2017 13:13", "27.10.2017 08:35", "27.10.2017 10:29", "27.10.2017 10:57", "28.10.2017 22:51", "29.10.2017 19:52", "30.10.2017 19:27", "31.10.2017 10:49", "01.11.2017 12:50", "02.11.2017 09:14", "02.11.2017 10:39", "02.11.2017 19:34", "03.11.2017 22:15", "04.11.2017 10:52", "04.11.2017 15:46", "06.11.2017 15:45", "08.11.2017 13:50", "11.11.2017 23:32", "14.11.2017 21:25", "15.11.2017 14:48", "16.11.2017 07:48", "23.11.2017 00:11", "23.11.2017 09:37", "23.11.2017 12:43", "24.11.2017 09:32", "24.11.2017 09:42", "24.11.2017 11:43", "25.11.2017 12:41", "26.11.2017 00:10", "29.11.2017 22:08", "30.11.2017 13:56", "01.12.2017 12:38", "03.12.2017 19:02", "03.12.2017 19:23", "04.12.2017 11:43", "04.12.2017 16:47", "05.12.2017 08:24", "06.12.2017 15:51", "06.12.2017 15:52", "08.12.2017 00:11", "11.12.2017 13:17", "13.12.2017 00:27", "13.12.2017 09:37", "13.12.2017 09:54", "13.12.2017 10:08", "13.12.2017 10:51", "13.12.2017 13:02", "13.12.2017 14:34", "13.12.2017 14:35", "14.12.2017 08:35", "14.12.2017 11:49", "14.12.2017 13:43", "14.12.2017 15:29", "14.12.2017 22:08", "15.12.2017 07:41", "15.12.2017 08:07", "15.12.2017 09:08", "15.12.2017 10:58", "15.12.2017 11:39", "15.12.2017 11:42", "15.12.2017 12:41", "15.12.2017 12:42", "15.12.2017 14:09", "15.12.2017 15:19", "15.12.2017 16:04", "15.12.2017 16:20", "15.12.2017 16:32", "16.12.2017 15:55", "16.12.2017 22:28", "16.12.2017 23:37", "17.12.2017 10:11", "17.12.2017 12:44", "17.12.2017 14:30", "17.12.2017 14:38", "17.12.2017 15:23", "17.12.2017 18:17", "17.12.2017 19:26", "17.12.2017 21:48", "17.12.2017 22:17", "18.12.2017 08:59", "18.12.2017 09:05", "18.12.2017 09:51", "18.12.2017 12:51", "18.12.2017 12:54", "18.12.2017 12:54", "18.12.2017 13:05", "18.12.2017 13:29", "18.12.2017 13:42", "18.12.2017 15:32", "18.12.2017 16:26"],
		type: 'scatter',
		mode: 'markers',
		marker: {
			color: 'rgb(0, 77, 0)'
		},
		visible: true,
		hoverinfo: 'text',
		hovermode: "closest",
		hovertext: ["<b>20.09.2017 10:34</b><br>2 osoby<br>1.0% online registrácií", "<b>20.09.2017 14:22</b><br>3 osoby<br>2.0% online registrácií", "<b>21.09.2017 14:47</b><br>4 osoby<br>2.0% online registrácií", "<b>26.09.2017 16:27</b><br>5 osôb<br>3.0% online registrácií", "<b>24.10.2017 20:38</b><br>7 osôb<br>4.0% online registrácií", "<b>24.10.2017 23:16</b><br>8 osôb<br>4.0% online registrácií", "<b>25.10.2017 06:44</b><br>10 osôb<br>5.0% online registrácií", "<b>25.10.2017 07:01</b><br>11 osôb<br>6.0% online registrácií", "<b>25.10.2017 09:00</b><br>13 osôb<br>7.0% online registrácií", "<b>25.10.2017 10:05</b><br>15 osôb<br>8.0% online registrácií", "<b>25.10.2017 10:48</b><br>16 osôb<br>9.0% online registrácií", "<b>25.10.2017 10:49</b><br>17 osôb<br>9.0% online registrácií", "<b>25.10.2017 10:50</b><br>18 osôb<br>10.0% online registrácií", "<b>25.10.2017 11:00</b><br>19 osôb<br>10.0% online registrácií", "<b>25.10.2017 11:25</b><br>20 osôb<br>11.0% online registrácií", "<b>25.10.2017 11:33</b><br>22 osôb<br>12.0% online registrácií", "<b>25.10.2017 12:37</b><br>24 osôb<br>13.0% online registrácií", "<b>25.10.2017 14:12</b><br>25 osôb<br>14.0% online registrácií", "<b>25.10.2017 15:51</b><br>27 osôb<br>15.0% online registrácií", "<b>25.10.2017 20:11</b><br>29 osôb<br>16.0% online registrácií", "<b>25.10.2017 20:19</b><br>30 osôb<br>16.0% online registrácií", "<b>26.10.2017 10:04</b><br>31 osôb<br>17.0% online registrácií", "<b>26.10.2017 13:13</b><br>32 osôb<br>17.0% online registrácií", "<b>27.10.2017 08:35</b><br>34 osôb<br>18.0% online registrácií", "<b>27.10.2017 10:29</b><br>35 osôb<br>19.0% online registrácií", "<b>27.10.2017 10:57</b><br>36 osôb<br>20.0% online registrácií", "<b>28.10.2017 22:51</b><br>38 osôb<br>21.0% online registrácií", "<b>29.10.2017 19:52</b><br>40 osôb<br>22.0% online registrácií", "<b>30.10.2017 19:27</b><br>41 osôb<br>22.0% online registrácií", "<b>31.10.2017 10:49</b><br>42 osôb<br>23.0% online registrácií", "<b>01.11.2017 12:50</b><br>44 osôb<br>24.0% online registrácií", "<b>02.11.2017 09:14</b><br>46 osôb<br>25.0% online registrácií", "<b>02.11.2017 10:39</b><br>47 osôb<br>26.0% online registrácií", "<b>02.11.2017 19:34</b><br>49 osôb<br>27.0% online registrácií", "<b>03.11.2017 22:15</b><br>54 osôb<br>29.0% online registrácií", "<b>04.11.2017 10:52</b><br>56 osôb<br>30.0% online registrácií", "<b>04.11.2017 15:46</b><br>57 osôb<br>31.0% online registrácií", "<b>06.11.2017 15:45</b><br>59 osôb<br>32.0% online registrácií", "<b>08.11.2017 13:50</b><br>61 osôb<br>33.0% online registrácií", "<b>11.11.2017 23:32</b><br>65 osôb<br>35.0% online registrácií", "<b>14.11.2017 21:25</b><br>67 osôb<br>36.0% online registrácií", "<b>15.11.2017 14:48</b><br>69 osôb<br>38.0% online registrácií", "<b>16.11.2017 07:48</b><br>71 osôb<br>39.0% online registrácií", "<b>23.11.2017 00:11</b><br>75 osôb<br>41.0% online registrácií", "<b>23.11.2017 09:37</b><br>76 osôb<br>41.0% online registrácií", "<b>23.11.2017 12:43</b><br>77 osôb<br>42.0% online registrácií", "<b>24.11.2017 09:32</b><br>78 osôb<br>42.0% online registrácií", "<b>24.11.2017 09:42</b><br>79 osôb<br>43.0% online registrácií", "<b>24.11.2017 11:43</b><br>80 osôb<br>43.0% online registrácií", "<b>25.11.2017 12:41</b><br>81 osôb<br>44.0% online registrácií", "<b>26.11.2017 00:10</b><br>82 osôb<br>45.0% online registrácií", "<b>29.11.2017 22:08</b><br>87 osôb<br>47.0% online registrácií", "<b>30.11.2017 13:56</b><br>88 osôb<br>48.0% online registrácií", "<b>01.12.2017 12:38</b><br>89 osôb<br>48.0% online registrácií", "<b>03.12.2017 19:02</b><br>91 osôb<br>49.0% online registrácií", "<b>03.12.2017 19:23</b><br>92 osôb<br>50.0% online registrácií", "<b>04.12.2017 11:43</b><br>93 osôb<br>51.0% online registrácií", "<b>04.12.2017 16:47</b><br>95 osôb<br>52.0% online registrácií", "<b>05.12.2017 08:24</b><br>96 osôb<br>52.0% online registrácií", "<b>06.12.2017 15:51</b><br>97 osôb<br>53.0% online registrácií", "<b>06.12.2017 15:52</b><br>98 osôb<br>53.0% online registrácií", "<b>08.12.2017 00:11</b><br>101 osôb<br>55.0% online registrácií", "<b>11.12.2017 13:17</b><br>103 osôb<br>56.0% online registrácií", "<b>13.12.2017 00:27</b><br>105 osôb<br>57.0% online registrácií", "<b>13.12.2017 09:37</b><br>106 osôb<br>58.0% online registrácií", "<b>13.12.2017 09:54</b><br>107 osôb<br>58.0% online registrácií", "<b>13.12.2017 10:08</b><br>108 osôb<br>59.0% online registrácií", "<b>13.12.2017 10:51</b><br>109 osôb<br>59.0% online registrácií", "<b>13.12.2017 13:02</b><br>110 osôb<br>60.0% online registrácií", "<b>13.12.2017 14:34</b><br>111 osôb<br>60.0% online registrácií", "<b>13.12.2017 14:35</b><br>112 osôb<br>61.0% online registrácií", "<b>14.12.2017 08:35</b><br>113 osôb<br>61.0% online registrácií", "<b>14.12.2017 11:49</b><br>114 osôb<br>62.0% online registrácií", "<b>14.12.2017 13:43</b><br>116 osôb<br>63.0% online registrácií", "<b>14.12.2017 15:29</b><br>117 osôb<br>64.0% online registrácií", "<b>14.12.2017 22:08</b><br>123 osôb<br>67.0% online registrácií", "<b>15.12.2017 07:41</b><br>125 osôb<br>68.0% online registrácií", "<b>15.12.2017 08:07</b><br>126 osôb<br>68.0% online registrácií", "<b>15.12.2017 09:08</b><br>128 osôb<br>70.0% online registrácií", "<b>15.12.2017 10:58</b><br>130 osôb<br>71.0% online registrácií", "<b>15.12.2017 11:39</b><br>131 osôb<br>71.0% online registrácií", "<b>15.12.2017 11:42</b><br>132 osôb<br>72.0% online registrácií", "<b>15.12.2017 12:41</b><br>134 osôb<br>73.0% online registrácií", "<b>15.12.2017 12:42</b><br>135 osôb<br>73.0% online registrácií", "<b>15.12.2017 14:09</b><br>137 osôb<br>74.0% online registrácií", "<b>15.12.2017 15:19</b><br>138 osôb<br>75.0% online registrácií", "<b>15.12.2017 16:04</b><br>139 osôb<br>76.0% online registrácií", "<b>15.12.2017 16:20</b><br>140 osôb<br>76.0% online registrácií", "<b>15.12.2017 16:32</b><br>141 osôb<br>77.0% online registrácií", "<b>16.12.2017 15:55</b><br>143 osôb<br>78.0% online registrácií", "<b>16.12.2017 22:28</b><br>145 osôb<br>79.0% online registrácií", "<b>16.12.2017 23:37</b><br>147 osôb<br>80.0% online registrácií", "<b>17.12.2017 10:11</b><br>151 osôb<br>82.0% online registrácií", "<b>17.12.2017 12:44</b><br>153 osôb<br>83.0% online registrácií", "<b>17.12.2017 14:30</b><br>154 osôb<br>84.0% online registrácií", "<b>17.12.2017 14:38</b><br>155 osôb<br>84.0% online registrácií", "<b>17.12.2017 15:23</b><br>156 osôb<br>85.0% online registrácií", "<b>17.12.2017 18:17</b><br>158 osôb<br>86.0% online registrácií", "<b>17.12.2017 19:26</b><br>159 osôb<br>86.0% online registrácií", "<b>17.12.2017 21:48</b><br>161 osôb<br>88.0% online registrácií", "<b>17.12.2017 22:17</b><br>162 osôb<br>88.0% online registrácií", "<b>18.12.2017 08:59</b><br>164 osôb<br>89.0% online registrácií", "<b>18.12.2017 09:05</b><br>165 osôb<br>90.0% online registrácií", "<b>18.12.2017 09:51</b><br>166 osôb<br>90.0% online registrácií", "<b>18.12.2017 12:51</b><br>169 osôb<br>92.0% online registrácií", "<b>18.12.2017 12:54</b><br>170 osôb<br>92.0% online registrácií", "<b>18.12.2017 12:54</b><br>171 osôb<br>93.0% online registrácií", "<b>18.12.2017 13:05</b><br>172 osôb<br>93.0% online registrácií", "<b>18.12.2017 13:29</b><br>176 osôb<br>96.0% online registrácií", "<b>18.12.2017 13:42</b><br>178 osôb<br>97.0% online registrácií", "<b>18.12.2017 15:32</b><br>180 osôb<br>98.0% online registrácií", "<b>18.12.2017 16:26</b><br>182 osôb<br>99.0% online registrácií"]
	},
	{
		x: [1280.50924769, 1585.31313657, 1619.56646991, 2485.8128588],
		y: [28, 60, 62, 124],
		name: "SR + zahraničie",
		text: ["25.10.2017 17:15", "07.11.2017 10:04", "08.11.2017 20:19", "14.12.2017 22:34"],
		type: 'scatter',
		mode: 'markers',
		marker: {
			color: 'rgb(161, 80, 22)'
		},
		visible: true,
		hoverinfo: 'text',
		hovermode: "closest",
		hovertext: ["<b>25.10.2017 17:15</b><br>28 osôb<br>15.0% online registrácií", "<b>07.11.2017 10:04</b><br>60 osôb<br>33.0% online registrácií", "<b>08.11.2017 20:19</b><br>62 osôb<br>34.0% online registrácií", "<b>14.12.2017 22:34</b><br>124 osôb<br>67.0% online registrácií"]
	},
	{
		x: [432.380636574, 1189.00202546, 1263.02258102, 1271.78980324, 1272.80508102, 1274.69619213, 1275.17341435, 1277.93952546, 1355.80952546, 1378.46008102, 1424.88952546, 1455.07674769, 1474.68758102, 1490.78563657, 1499.73674769, 1500.0078588, 1501.47646991, 1501.75063657, 1540.19008102, 1665.7028588, 1682.37646991, 1777.89730324, 1786.51980324, 1860.69008102, 2052.48091435, 2052.48980324, 2066.02813657, 2066.79841435, 2213.80813657, 2238.62146991, 2293.11619213, 2316.40563657, 2329.02619213, 2476.89452546, 2479.36869213, 2481.37063657, 2481.40369213, 2496.27008102, 2497.87702546, 2499.0728588, 2500.51674769, 2506.69063657, 2528.44980324, 2534.47591435, 2535.58396991, 2536.47230324, 2544.64758102, 2546.53258102, 2552.16396991, 2555.09202546, 2571.11980324, 2572.05341435, 2572.37230324, 2572.36813657, 2572.42119213, 2572.77508102, 2573.01619213, 2575.65674769, 2575.70674769],
		y: [1, 6, 9, 12, 14, 21, 23, 26, 37, 39, 43, 45, 48, 50, 51, 52, 53, 55, 58, 63, 64, 68, 70, 72, 83, 84, 85, 86, 90, 94, 99, 100, 102, 115, 118, 120, 121, 127, 129, 133, 136, 142, 144, 146, 148, 149, 150, 152, 157, 160, 167, 168, 173, 174, 175, 177, 179, 181, 183],
		name: "zahraničie",
		text: ["20.09.2017 09:08", "21.10.2017 21:45", "24.10.2017 23:46", "25.10.2017 08:32", "25.10.2017 09:33", "25.10.2017 11:27", "25.10.2017 11:55", "25.10.2017 14:41", "28.10.2017 20:33", "29.10.2017 19:12", "31.10.2017 17:38", "01.11.2017 23:49", "02.11.2017 19:26", "03.11.2017 11:32", "03.11.2017 20:29", "03.11.2017 20:45", "03.11.2017 22:13", "03.11.2017 22:30", "05.11.2017 12:56", "10.11.2017 18:27", "11.11.2017 11:07", "15.11.2017 10:39", "15.11.2017 19:16", "18.11.2017 21:26", "26.11.2017 21:14", "26.11.2017 21:14", "27.11.2017 10:46", "27.11.2017 11:33", "03.12.2017 14:33", "04.12.2017 15:22", "06.12.2017 21:52", "07.12.2017 21:09", "08.12.2017 09:46", "14.12.2017 13:38", "14.12.2017 16:07", "14.12.2017 18:07", "14.12.2017 18:09", "15.12.2017 09:01", "15.12.2017 10:37", "15.12.2017 11:49", "15.12.2017 13:16", "15.12.2017 19:26", "16.12.2017 17:12", "16.12.2017 23:13", "17.12.2017 00:20", "17.12.2017 01:13", "17.12.2017 09:24", "17.12.2017 11:17", "17.12.2017 16:55", "17.12.2017 19:50", "18.12.2017 11:52", "18.12.2017 12:48", "18.12.2017 13:07", "18.12.2017 13:07", "18.12.2017 13:10", "18.12.2017 13:31", "18.12.2017 13:46", "18.12.2017 16:24", "18.12.2017 16:27"],
		type: 'scatter',
		mode: 'markers',
		marker: {
			color: 'rgb(255, 127, 14)'
		},
		visible: true,
		hoverinfo: 'text',
		hovermode: "closest",
		hovertext: ["<b>20.09.2017 09:08</b><br>1 osoba<br>1.0% online registrácií", "<b>21.10.2017 21:45</b><br>6 osôb<br>3.0% online registrácií", "<b>24.10.2017 23:46</b><br>9 osôb<br>5.0% online registrácií", "<b>25.10.2017 08:32</b><br>12 osôb<br>7.0% online registrácií", "<b>25.10.2017 09:33</b><br>14 osôb<br>8.0% online registrácií", "<b>25.10.2017 11:27</b><br>21 osôb<br>11.0% online registrácií", "<b>25.10.2017 11:55</b><br>23 osôb<br>13.0% online registrácií", "<b>25.10.2017 14:41</b><br>26 osôb<br>14.0% online registrácií", "<b>28.10.2017 20:33</b><br>37 osôb<br>20.0% online registrácií", "<b>29.10.2017 19:12</b><br>39 osôb<br>21.0% online registrácií", "<b>31.10.2017 17:38</b><br>43 osôb<br>23.0% online registrácií", "<b>01.11.2017 23:49</b><br>45 osôb<br>24.0% online registrácií", "<b>02.11.2017 19:26</b><br>48 osôb<br>26.0% online registrácií", "<b>03.11.2017 11:32</b><br>50 osôb<br>27.0% online registrácií", "<b>03.11.2017 20:29</b><br>51 osôb<br>28.0% online registrácií", "<b>03.11.2017 20:45</b><br>52 osôb<br>28.0% online registrácií", "<b>03.11.2017 22:13</b><br>53 osôb<br>29.0% online registrácií", "<b>03.11.2017 22:30</b><br>55 osôb<br>30.0% online registrácií", "<b>05.11.2017 12:56</b><br>58 osôb<br>32.0% online registrácií", "<b>10.11.2017 18:27</b><br>63 osôb<br>34.0% online registrácií", "<b>11.11.2017 11:07</b><br>64 osôb<br>35.0% online registrácií", "<b>15.11.2017 10:39</b><br>68 osôb<br>37.0% online registrácií", "<b>15.11.2017 19:16</b><br>70 osôb<br>38.0% online registrácií", "<b>18.11.2017 21:26</b><br>72 osôb<br>39.0% online registrácií", "<b>26.11.2017 21:14</b><br>83 osôb<br>45.0% online registrácií", "<b>26.11.2017 21:14</b><br>84 osôb<br>46.0% online registrácií", "<b>27.11.2017 10:46</b><br>85 osôb<br>46.0% online registrácií", "<b>27.11.2017 11:33</b><br>86 osôb<br>47.0% online registrácií", "<b>03.12.2017 14:33</b><br>90 osôb<br>49.0% online registrácií", "<b>04.12.2017 15:22</b><br>94 osôb<br>51.0% online registrácií", "<b>06.12.2017 21:52</b><br>99 osôb<br>54.0% online registrácií", "<b>07.12.2017 21:09</b><br>100 osôb<br>54.0% online registrácií", "<b>08.12.2017 09:46</b><br>102 osôb<br>55.0% online registrácií", "<b>14.12.2017 13:38</b><br>115 osôb<br>63.0% online registrácií", "<b>14.12.2017 16:07</b><br>118 osôb<br>64.0% online registrácií", "<b>14.12.2017 18:07</b><br>120 osôb<br>65.0% online registrácií", "<b>14.12.2017 18:09</b><br>121 osôb<br>66.0% online registrácií", "<b>15.12.2017 09:01</b><br>127 osôb<br>69.0% online registrácií", "<b>15.12.2017 10:37</b><br>129 osôb<br>70.0% online registrácií", "<b>15.12.2017 11:49</b><br>133 osôb<br>72.0% online registrácií", "<b>15.12.2017 13:16</b><br>136 osôb<br>74.0% online registrácií", "<b>15.12.2017 19:26</b><br>142 osôb<br>77.0% online registrácií", "<b>16.12.2017 17:12</b><br>144 osôb<br>78.0% online registrácií", "<b>16.12.2017 23:13</b><br>146 osôb<br>79.0% online registrácií", "<b>17.12.2017 00:20</b><br>148 osôb<br>80.0% online registrácií", "<b>17.12.2017 01:13</b><br>149 osôb<br>81.0% online registrácií", "<b>17.12.2017 09:24</b><br>150 osôb<br>82.0% online registrácií", "<b>17.12.2017 11:17</b><br>152 osôb<br>83.0% online registrácií", "<b>17.12.2017 16:55</b><br>157 osôb<br>85.0% online registrácií", "<b>17.12.2017 19:50</b><br>160 osôb<br>87.0% online registrácií", "<b>18.12.2017 11:52</b><br>167 osôb<br>91.0% online registrácií", "<b>18.12.2017 12:48</b><br>168 osôb<br>91.0% online registrácií", "<b>18.12.2017 13:07</b><br>173 osôb<br>94.0% online registrácií", "<b>18.12.2017 13:07</b><br>174 osôb<br>95.0% online registrácií", "<b>18.12.2017 13:10</b><br>175 osôb<br>95.0% online registrácií", "<b>18.12.2017 13:31</b><br>177 osôb<br>96.0% online registrácií", "<b>18.12.2017 13:46</b><br>179 osôb<br>97.0% online registrácií", "<b>18.12.2017 16:24</b><br>181 osôb<br>98.0% online registrácií", "<b>18.12.2017 16:27</b><br>183 osôb<br>99.0% online registrácií"]
	},
	{
		x: [1305.33063657, 1733.51619213, 1896.8778588, 1957.85369213, 2404.55869213, 2481.16869213, 2481.48563657, 2559.08091435],
		y: [33, 66, 73, 74, 104, 119, 122, 163],
		name: "neuvedené",
		text: ["26.10.2017 18:05", "13.11.2017 14:16", "20.11.2017 09:37", "22.11.2017 22:36", "11.12.2017 13:18", "14.12.2017 17:55", "14.12.2017 18:14", "17.12.2017 23:50"],
		type: 'scatter',
		mode: 'markers',
		marker: {
			color: 'rgb(124, 124, 124)'
		},
		visible: true,
		hoverinfo: 'text',
		hovermode: "closest",
		hovertext: ["<b>26.10.2017 18:05</b><br>33 osôb<br>18.0% online registrácií", "<b>13.11.2017 14:16</b><br>66 osôb<br>36.0% online registrácií", "<b>20.11.2017 09:37</b><br>73 osôb<br>40.0% online registrácií", "<b>22.11.2017 22:36</b><br>74 osôb<br>40.0% online registrácií", "<b>11.12.2017 13:18</b><br>104 osôb<br>57.0% online registrácií", "<b>14.12.2017 17:55</b><br>119 osôb<br>65.0% online registrácií", "<b>14.12.2017 18:14</b><br>122 osôb<br>66.0% online registrácií", "<b>17.12.2017 23:50</b><br>163 osôb<br>89.0% online registrácií"]
	},
	{
		x: [0.0, 432.380636574, 433.812858796, 437.623414352, 462.043969907, 583.711469907, 1189.00202546, 1259.89508102, 1262.5178588, 1263.02258102, 1269.98646991, 1270.2753588, 1271.78980324, 1272.26146991, 1272.80508102, 1273.32924769, 1274.05063657, 1274.06924769, 1274.09313657, 1274.24619213, 1274.66924769, 1274.69619213, 1274.8078588, 1275.17341435, 1275.87008102, 1277.45369213, 1277.93952546, 1279.10508102, 1280.50924769, 1283.43230324, 1283.56646991, 1297.3278588, 1300.46841435, 1305.33063657, 1319.83563657, 1321.74230324, 1322.20480324, 1355.80952546, 1358.10174769, 1378.46008102, 1379.1278588, 1402.69813657, 1418.07646991, 1424.88952546, 1444.09396991, 1455.07674769, 1464.49480324, 1465.89646991, 1474.68758102, 1474.82063657, 1490.78563657, 1499.73674769, 1500.0078588, 1501.47646991, 1501.50369213, 1501.75063657, 1514.12174769, 1519.01591435, 1540.19008102, 1567.00091435, 1585.31313657, 1613.08369213, 1619.56646991, 1665.7028588, 1682.37646991, 1694.77980324, 1733.51619213, 1764.67591435, 1777.89730324, 1782.04980324, 1786.51980324, 1799.05230324, 1860.69008102, 1896.8778588, 1957.85369213, 1959.4428588, 1968.87563657, 1971.9678588, 1992.79480324, 1992.9603588, 1994.96424769, 2019.93508102, 2031.42758102, 2052.48091435, 2052.48980324, 2066.02813657, 2066.79841435, 2125.39063657, 2141.1928588, 2163.88896991, 2213.80813657, 2218.29091435, 2218.63341435, 2234.97674769, 2238.62146991, 2240.03452546, 2255.65869213, 2287.10702546, 2287.12369213, 2293.11619213, 2316.40563657, 2319.44313657, 2329.02619213, 2404.53952546, 2404.55869213, 2439.70619213, 2448.86619213, 2449.15174769, 2449.38591435, 2450.10202546, 2452.28869213, 2453.82452546, 2453.83952546, 2471.82896991, 2475.07063657, 2476.89452546, 2476.97119213, 2478.74452546, 2479.36869213, 2481.16869213, 2481.37063657, 2481.40369213, 2481.48563657, 2485.38119213, 2485.8128588, 2494.93730324, 2495.37091435, 2496.27008102, 2496.39396991, 2497.87702546, 2498.22424769, 2498.90952546, 2498.94758102, 2499.0728588, 2499.92952546, 2499.95480324, 2500.51674769, 2501.39674769, 2502.56591435, 2503.32341435, 2503.57980324, 2503.78924769, 2506.69063657, 2527.16813657, 2528.44980324, 2533.71619213, 2534.47591435, 2534.87730324, 2535.58396991, 2536.47230324, 2544.64758102, 2545.43119213, 2546.53258102, 2547.98091435, 2549.75452546, 2549.88091435, 2550.63174769, 2552.16396991, 2553.52869213, 2554.68063657, 2555.09202546, 2557.05646991, 2557.53174769, 2559.08091435, 2568.23758102, 2568.34063657, 2569.10369213, 2571.11980324, 2572.05341435, 2572.09730324, 2572.15258102, 2572.15702546, 2572.33730324, 2572.37230324, 2572.36813657, 2572.42119213, 2572.7428588, 2572.77508102, 2572.9453588, 2573.01619213, 2574.78869213, 2575.65674769, 2575.67980324, 2575.70674769],
		y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183],
		name: "",
		type: 'bar',
		marker: {
			color: ['rgb(255, 255, 255)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)']
		},
		showlegend: false,
		visible: true,
		hoverinfo: 'skip',
		hovermode: "none"
	}
];

var data_registration_timeLabels_2017 = ["", "17.09.", "", "", "", "", "", "24.10.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "03.11.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "01.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "13.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "18.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

var updateMenu_position_country_2017 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, true, true, true, false, false, false, false, false, false, false]],
		label: 'Zoradiť podľa pozície',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, true, true, true, true, true, true, true]],
		label: 'Zoradiť podľa celkového počtu',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 0.00,
	xanchor: 'middle',
	y: 1.15,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];

var updateMenu_position_gender_2017 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, true, false, false, false, false, false]],
		label: 'Zoradiť podľa pozície',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, true, true, true, true, true]],
		label: 'Zoradiť podľa celkového počtu',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 0.00,
	xanchor: 'middle',
	y: 1.15,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];

var updateMenu_institution_country_2017 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, true, true, true, false, false, false, false, false, false, false]],
		label: 'Zoradiť podľa typu pracoviska',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, true, true, true, true, true, true, true]],
		label: 'Zoradiť podľa celkového počtu',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 0.00,
	xanchor: 'middle',
	y: 1.15,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];

var updateMenu_institution_gender_2017 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, true, false, false, false, false, false]],
		label: 'Zoradiť podľa typu pracoviska',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, true, true, true, true, true]],
		label: 'Zoradiť podľa celkového počtu',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 0.00,
	xanchor: 'middle',
	y: 1.15,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];

var data_participation = [
// participation 2021
{
	type: "sunburst",
	ids: ["všetci", "prítomní", "neprítomní", "nesúhlas", "muži 1", "ženy 1", "bez registrácie", "muži 0", "ženy 0"],
	labels: ["dáta z prihlasovania + neregistrovaní účastníci", "preferujú online", "preferujú prezenčne", "nesúhlas s analýzou", "muži", "ženy", "online / prezenčne: neuvedené", "muži", "ženy"],
	values: [194, 169, 22, 3, 55, 104, 10, 7, 15],
	parents: ["", "všetci", "všetci", "všetci", "prítomní", "prítomní", "prítomní", "neprítomní", "neprítomní"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 255, 98)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(204, 221, 255)', 'rgb(255, 204, 204)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania + neregistrovaní účastníci</b><br>194 osôb<br>", "<b>preferujú online</b><br>169 osôb<br>87.1% prítomných<br>", "<b>preferujú prezenčne</b><br>22 osôb<br>11.3% prítomných<br>", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.5% prítomných<br>", "55 mužov<br>28.4% prítomných<br>", "104 žien<br>53.6% prítomných<br>", "<b>online / prezenčne: neuvedené</b><br>10 osôb<br>5.2% prítomných<br>", "7 mužov<br>", "15 žien<br>"]
},
// participation 2019
{
	type: "sunburst",
	ids: ["všetci", "prítomní", "neprítomní", "nesúhlas", "muži 1", "ženy 1", "bez registrácie", "muži 0", "ženy 0"],
	labels: ["dáta z prihlasovania + neregistrovaní účastníci", "prítomní", "neprítomní", "nesúhlas s analýzou", "muži", "ženy", "bez registrácie", "muži", "ženy"],
	values: [229, 226, 0, 3, 50, 50, 26, 50, 50],
	parents: ["", "všetci", "všetci", "všetci", "prítomní", "prítomní", "prítomní", "neprítomní", "neprítomní"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(124, 124, 124)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(204, 221, 255)', 'rgb(255, 204, 204)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania + neregistrovaní účastníci</b><br>229 osôb<br>", "226 prítomných<br>", "0 neprítomných<br>", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.3% prítomných<br>", "50 mužov<br>21.8% prítomných<br>", "50 žien<br>21.8% prítomných<br>", "<b>bez registrácie</b><br>26 osôb<br>11.4% prítomných<br>", "50 mužov<br>", "50 žien<br>"]
},
// participation 2018
{
	type: "sunburst",
	ids: ["všetci", "prítomní", "neprítomní", "nesúhlas", "muži 1", "ženy 1", "bez registrácie", "muži 0", "ženy 0"],
	labels: ["dáta z prihlasovania + neregistrovaní účastníci", "prítomní", "neprítomní", "nesúhlas s analýzou", "muži", "ženy", "bez registrácie", "muži", "ženy"],
	values: [177, 139, 38, 0, 63, 56, 20, 14, 24],
	parents: ["", "všetci", "všetci", "všetci", "prítomní", "prítomní", "prítomní", "neprítomní", "neprítomní"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(124, 124, 124)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(204, 221, 255)', 'rgb(255, 204, 204)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania + neregistrovaní účastníci</b><br>177 osôb<br>", "139 prítomných<br>", "38 neprítomných<br>", "<b>nesúhlas s analýzou</b><br>0 osôb<br>0.0% prítomných<br>", "63 mužov<br>35.6% prítomných<br>", "56 žien<br>31.6% prítomných<br>", "<b>bez registrácie</b><br>20 osôb<br>11.3% prítomných<br>", "14 mužov<br>", "24 žien<br>"]
},
// participation 2017
{
	type: "sunburst",
	ids: ["všetci", "prítomní", "neprítomní", "nesúhlas", "muži 1", "ženy 1", "bez registrácie", "muži 0", "ženy 0"],
	labels: ["dáta z prihlasovania + neregistrovaní účastníci", "prítomní", "neprítomní", "nesúhlas s analýzou", "muži", "ženy", "bez registrácie", "muži", "ženy"],
	values: [224, 155, 69, 0, 74, 56, 25, 25, 44],
	parents: ["", "všetci", "všetci", "všetci", "prítomní", "prítomní", "prítomní", "neprítomní", "neprítomní"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(124, 124, 124)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(204, 221, 255)', 'rgb(255, 204, 204)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania + neregistrovaní účastníci</b><br>224 osôb<br>", "155 prítomných<br>", "69 neprítomných<br>", "<b>nesúhlas s analýzou</b><br>0 osôb<br>0.0% prítomných<br>", "74 mužov<br>33.0% prítomných<br>", "56 žien<br>25.0% prítomných<br>", "<b>bez registrácie</b><br>25 osôb<br>11.2% prítomných<br>", "25 mužov<br>", "44 žien<br>"]
}];

var data_participation_detail = [
// participation_detail 2021
{
	type: "sunburst",
	ids: ["všetci", "účasť", "iniciatívy", "prednášajúci", "organizácia", "nesúhlas", "účastníčky", "účastníci", "bez registrácie", "zástupkyne firiem", "zástupcovia firiem", "aktívne účastníčky", "aktívni účastníci", "organizátorky", "organizátori"],
	labels: ["iba prítomní", "účasť", "pozvané príspevky", "prednášajúci", "organizácia", "nesúhlas s analýzou", "ženy", "muži", "bez registrácie", "ženy", "muži", "ženy", "muži", "ženy", "muži"],
	values: [194, 162, 13, 7, 9, 3, 104, 58, 0, 11, 2, 3, 4, 7, 2],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "účasť", "účasť", "účasť", "iniciatívy", "iniciatívy", "prednášajúci", "prednášajúci", "organizácia", "organizácia"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 214, 16)', 'rgb(255, 174, 16)', 'rgb(255, 134, 16', 'rgb(200, 200, 200)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(0, 230, 0)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>194 osôb<br>", "<b>účasť</b><br>162 osôb<br>83.5% prítomných<br>", "<b>pozvané príspevky</b><br>13 osôb<br>6.7% prítomných<br>", "<b>prednášajúci</b><br>7 osôb<br>3.6% prítomných<br>", "<b>organizácia</b><br>9 osôb<br>4.6% prítomných<br>", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.5% prítomných<br>", "104 žien<br>53.6% prítomných<br>", "58 mužov<br>29.9% prítomných<br>", "<b>bez registrácie</b><br>0 osôb<br>0.0% prítomných<br>", "11 žien<br>5.7% prítomných<br>", "2 muži<br>1.0% prítomných<br>", "3 ženy<br>1.5% prítomných<br>", "4 muži<br>2.1% prítomných<br>", "7 žien<br>3.6% prítomných<br>", "2 muži<br>1.0% prítomných<br>"]
},
// participation_detail 2019
{
	type: "sunburst",
	ids: ["všetci", "účasť", "iniciatívy", "prednášajúci", "organizácia", "nesúhlas", "účastníčky", "účastníci", "bez registrácie", "zástupkyne firiem", "zástupcovia firiem", "aktívne účastníčky", "aktívni účastníci", "organizátorky", "organizátori"],
	labels: ["iba prítomní", "účasť", "iniciatívy", "prednášajúci", "organizácia", "nesúhlas s analýzou", "ženy", "muži", "bez registrácie", "ženy", "muži", "ženy", "muži", "ženy", "muži"],
	values: [229, 162, 40, 9, 15, 3, 73, 72, 20, 20, 20, 5, 4, 8, 7],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "účasť", "účasť", "účasť", "iniciatívy", "iniciatívy", "prednášajúci", "prednášajúci", "organizácia", "organizácia"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 214, 16)', 'rgb(255, 174, 16)', 'rgb(255, 134, 16', 'rgb(200, 200, 200)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(0, 230, 0)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>229 osôb<br>", "<b>účasť</b><br>162 osôb<br>70.7% prítomných<br>", "<b>iniciatívy</b><br>40 osôb<br>17.5% prítomných<br>", "<b>prednášajúci</b><br>9 osôb<br>3.9% prítomných<br>", "<b>organizácia</b><br>15 osôb<br>6.6% prítomných<br>", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.3% prítomných<br>", "73 žien<br>31.9% prítomných<br>", "72 mužov<br>31.4% prítomných<br>", "<b>bez registrácie</b><br>20 osôb<br>8.7% prítomných<br>", "20 žien<br>8.7% prítomných<br>", "20 mužov<br>8.7% prítomných<br>", "5 žien<br>2.2% prítomných<br>", "4 muži<br>1.7% prítomných<br>", "8 žien<br>3.5% prítomných<br>", "7 mužov<br>3.1% prítomných<br>"]
},
// participation_detail 2018
{
	type: "sunburst",
	ids: ["všetci", "účasť", "iniciatívy", "prednášajúci", "organizácia", "nesúhlas", "účastníčky", "účastníci", "bez registrácie", "zástupkyne firiem", "zástupcovia firiem", "aktívne účastníčky", "aktívni účastníci", "organizátorky", "organizátori"],
	labels: ["iba prítomní", "účasť", "iniciatívy", "prednášajúci", "organizácia", "nesúhlas s analýzou", "ženy", "muži", "bez registrácie", "ženy", "muži", "ženy", "muži", "ženy", "muži"],
	values: [139, 93, 21, 15, 10, 0, 37, 36, 20, 9, 12, 4, 11, 7, 3],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "účasť", "účasť", "účasť", "iniciatívy", "iniciatívy", "prednášajúci", "prednášajúci", "organizácia", "organizácia"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 214, 16)', 'rgb(255, 174, 16)', 'rgb(255, 134, 16', 'rgb(200, 200, 200)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(0, 230, 0)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>139 osôb<br>", "<b>účasť</b><br>93 osôb<br>66.9% prítomných<br>", "<b>iniciatívy</b><br>21 osôb<br>15.1% prítomných<br>", "<b>prednášajúci</b><br>15 osôb<br>10.8% prítomných<br>", "<b>organizácia</b><br>10 osôb<br>7.2% prítomných<br>", "<b>nesúhlas s analýzou</b><br>0 osôb<br>0.0% prítomných<br>", "37 žien<br>26.6% prítomných<br>", "36 mužov<br>25.9% prítomných<br>", "<b>bez registrácie</b><br>20 osôb<br>14.4% prítomných<br>", "9 žien<br>6.5% prítomných<br>", "12 mužov<br>8.6% prítomných<br>", "4 ženy<br>2.9% prítomných<br>", "11 mužov<br>7.9% prítomných<br>", "7 žien<br>5.0% prítomných<br>", "3 muži<br>2.2% prítomných<br>"]
},
// participation_detail 2017
{
	type: "sunburst",
	ids: ["všetci", "účasť", "iniciatívy", "prednášajúci", "organizácia", "nesúhlas", "účastníčky", "účastníci", "bez registrácie", "zástupkyne firiem", "zástupcovia firiem", "aktívne účastníčky", "aktívni účastníci", "organizátorky", "organizátori"],
	labels: ["iba prítomní", "účasť", "iniciatívy", "prednášajúci", "organizácia", "nesúhlas s analýzou", "ženy", "muži", "bez registrácie", "ženy", "muži", "ženy", "muži", "ženy", "muži"],
	values: [155, 132, 0, 5, 18, 0, 48, 59, 25, 0, 0, 1, 4, 7, 11],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "účasť", "účasť", "účasť", "iniciatívy", "iniciatívy", "prednášajúci", "prednášajúci", "organizácia", "organizácia"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 214, 16)', 'rgb(255, 174, 16)', 'rgb(255, 134, 16', 'rgb(200, 200, 200)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(0, 230, 0)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>155 osôb<br>", "<b>účasť</b><br>132 osôb<br>85.2% prítomných<br>", "<b>iniciatívy</b><br>0 osôb<br>0.0% prítomných<br>", "<b>prednášajúci</b><br>5 osôb<br>3.2% prítomných<br>", "<b>organizácia</b><br>18 osôb<br>11.6% prítomných<br>", "<b>nesúhlas s analýzou</b><br>0 osôb<br>0.0% prítomných<br>", "48 žien<br>31.0% prítomných<br>", "59 mužov<br>38.1% prítomných<br>", "<b>bez registrácie</b><br>25 osôb<br>16.1% prítomných<br>", "0 žien<br>0.0% prítomných<br>", "0 mužov<br>0.0% prítomných<br>", "1 žena<br>0.6% prítomných<br>", "4 muži<br>2.6% prítomných<br>", "7 žien<br>4.5% prítomných<br>", "11 mužov<br>7.1% prítomných<br>"]
}];

var data_abroad = [
// abroad 2021
{
	type: "sunburst",
	ids: ["všetci", "Slovensko", "oboje", "zahraničie", "neuvedené", "nesúhlas", "muži (SR)", "ženy (SR)", "muži (NA)", "ženy (NA)", "bez dát", "muži (oboje)", "ženy (oboje", "muži (zahr.)", "ženy (zahr.)"],
	labels: ["iba prítomní", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "nesúhlas s analýzou", "muži", "ženy", "muži", "ženy", "bez registrácie", "muži", "ženy", "muži", "ženy"],
	values: [194, 119, 11, 60, 1, 3, 43, 76, 0, 1, 0, 6, 5, 17, 43],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "Slovensko", "Slovensko", "neuvedené", "neuvedené", "neuvedené", "oboje", "oboje", "zahraničie", "zahraničie"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>194 osôb<br>", "<b>Slovensko</b><br>119 osôb<br>61.3% prítomných<br>", "<b>SR a zahraničie</b><br>11 osôb<br>5.7% prítomných<br>", "<b>zahraničie</b><br>60 osôb<br>30.9% prítomných<br>", "<b>neuvedené</b><br>1 osoba<br>0.5% prítomných<br>", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.5% prítomných<br>", "43 mužov<br>22.2% prítomných<br>", "76 žien<br>39.2% prítomných<br>", "0 mužov<br>0.0% prítomných<br>", "1 žena<br>0.5% prítomných<br>", "<b>bez registrácie</b><br>0 osôb<br>0.0% prítomných<br>", "6 mužov<br>3.1% prítomných<br>", "5 žien<br>2.6% prítomných<br>", "17 mužov<br>8.8% prítomných<br>", "43 žien<br>22.2% prítomných<br>"]
},
// abroad 2019
{
	type: "sunburst",
	ids: ["všetci", "Slovensko", "oboje", "zahraničie", "neuvedené", "nesúhlas", "muži (SR)", "ženy (SR)", "muži (NA)", "ženy (NA)", "bez dát", "muži (oboje)", "ženy (oboje", "muži (zahr.)", "ženy (zahr.)"],
	labels: ["iba prítomní", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "nesúhlas s analýzou", "muži", "ženy", "muži", "ženy", "bez registrácie", "muži", "ženy", "muži", "ženy"],
	values: [229, 145, 10, 40, 31, 3, 71, 71, 0, 0, 20, 5, 5, 17, 16],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "Slovensko", "Slovensko", "neuvedené", "neuvedené", "neuvedené", "oboje", "oboje", "zahraničie", "zahraničie"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>229 osôb<br>", "<b>Slovensko</b><br>145 osôb<br>63.3% prítomných<br>", "<b>SR a zahraničie</b><br>10 osôb<br>4.4% prítomných<br>", "<b>zahraničie</b><br>40 osôb<br>17.5% prítomných<br>", "<b>neuvedené</b><br>31 osôb<br>13.5% prítomných<br>", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.3% prítomných<br>", "71 mužov<br>31.0% prítomných<br>", "71 žien<br>31.0% prítomných<br>", "0 mužov<br>0.0% prítomných<br>", "0 žien<br>0.0% prítomných<br>", "<b>bez registrácie</b><br>20 osôb<br>8.7% prítomných<br>", "5 mužov<br>2.2% prítomných<br>", "5 žien<br>2.2% prítomných<br>", "17 mužov<br>7.4% prítomných<br>", "16 žien<br>7.0% prítomných<br>"]
},
// abroad 2018
{
	type: "sunburst",
	ids: ["všetci", "Slovensko", "oboje", "zahraničie", "neuvedené", "nesúhlas", "muži (SR)", "ženy (SR)", "muži (NA)", "ženy (NA)", "bez dát", "muži (oboje)", "ženy (oboje", "muži (zahr.)", "ženy (zahr.)"],
	labels: ["iba prítomní", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "nesúhlas s analýzou", "muži", "ženy", "muži", "ženy", "bez registrácie", "muži", "ženy", "muži", "ženy"],
	values: [139, 70, 1, 30, 38, 0, 35, 35, 12, 6, 20, 1, 0, 15, 15],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "Slovensko", "Slovensko", "neuvedené", "neuvedené", "neuvedené", "oboje", "oboje", "zahraničie", "zahraničie"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>139 osôb<br>", "<b>Slovensko</b><br>70 osôb<br>50.4% prítomných<br>", "<b>SR a zahraničie</b><br>1 osoba<br>0.7% prítomných<br>", "<b>zahraničie</b><br>30 osôb<br>21.6% prítomných<br>", "<b>neuvedené</b><br>38 osôb<br>27.3% prítomných<br>", "<b>nesúhlas s analýzou</b><br>0 osôb<br>0.0% prítomných<br>", "35 mužov<br>25.2% prítomných<br>", "35 žien<br>25.2% prítomných<br>", "12 mužov<br>8.6% prítomných<br>", "6 žien<br>4.3% prítomných<br>", "<b>bez registrácie</b><br>20 osôb<br>14.4% prítomných<br>", "1 muž<br>0.7% prítomných<br>", "0 žien<br>0.0% prítomných<br>", "15 mužov<br>10.8% prítomných<br>", "15 žien<br>10.8% prítomných<br>"]
},
// abroad 2017
{
	type: "sunburst",
	ids: ["všetci", "Slovensko", "oboje", "zahraničie", "neuvedené", "nesúhlas", "muži (SR)", "ženy (SR)", "muži (NA)", "ženy (NA)", "bez dát", "muži (oboje)", "ženy (oboje", "muži (zahr.)", "ženy (zahr.)"],
	labels: ["iba prítomní", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "nesúhlas s analýzou", "muži", "ženy", "muži", "ženy", "bez registrácie", "muži", "ženy", "muži", "ženy"],
	values: [155, 73, 4, 48, 30, 0, 38, 35, 5, 0, 25, 4, 0, 27, 21],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "Slovensko", "Slovensko", "neuvedené", "neuvedené", "neuvedené", "oboje", "oboje", "zahraničie", "zahraničie"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>155 osôb<br>", "<b>Slovensko</b><br>73 osôb<br>47.1% prítomných<br>", "<b>SR a zahraničie</b><br>4 osoby<br>2.6% prítomných<br>", "<b>zahraničie</b><br>48 osôb<br>31.0% prítomných<br>", "<b>neuvedené</b><br>30 osôb<br>19.4% prítomných<br>", "<b>nesúhlas s analýzou</b><br>0 osôb<br>0.0% prítomných<br>", "38 mužov<br>24.5% prítomných<br>", "35 žien<br>22.6% prítomných<br>", "5 mužov<br>3.2% prítomných<br>", "0 žien<br>0.0% prítomných<br>", "<b>bez registrácie</b><br>25 osôb<br>16.1% prítomných<br>", "4 muži<br>2.6% prítomných<br>", "0 žien<br>0.0% prítomných<br>", "27 mužov<br>17.4% prítomných<br>", "21 žien<br>13.5% prítomných<br>"]
}];

var data_subject = [
// subject 2021
{
	type: "sunburst",
	ids: ["všetci", "neprítomní", "nesúhlas", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "STEM (neprítomní)", "SSH (neprítomní)", "iné (neprítomní)", "iniciatívy (neprítomní)", "neuvedené (neprítomní)", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "STEM nezaradené", "STEM neuvedené", "knižničná a informačná veda", "digital humanities", "história, pomocné vedy historické", "archeológia", "antropológia", "religionistika", "psychológia", "didaktika", "sociológia", "politické vedy", "ekonomické vedy", "SSH nezaradené", "SSH neuvedené", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "práca s mládežou", "projektový manažment", "popularizácia", "médiá", "štátna správa", "iné nezaradené", "iné neuvedené", "iniciatívy podpora výskumu", "iniciatívy podpora výskumu (STEM)", "iniciatívy práca s mládežou (STEM)", "iniciatívy práca s mládežou", "iniciatívy vzdelávanie, poradenstvo", "iniciatívy popularizácia", "iniciatívy chémia", "iniciatívy fyzika", "neuvedené (iniciatívy)", "neuvedené (neuvedené)"],
	labels: ["iba dáta z registrácie", "neprítomní", "nesúhlas s analýzou", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "nezaradené", "neuvedené", "knižničná a informačná veda", "digital humanities", "história, pomocné vedy historické", "archeológia", "antropológia", "religionistika", "psychológia", "didaktika", "sociológia", "politické vedy", "ekonomické vedy", "nezaradené", "neuvedené", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "práca s mládežou", "projektový manažment", "popularizácia", "médiá", "štátna správa", "nezaradené", "neuvedené", "podpora výskumu", "podpora výskumu (STEM)", "práca s mládežou (STEM)", "práca s mládežou", "vzdelávanie, poradenstvo", "popularizácia", "chémia", "fyzika", "neuvedené", "neuvedené"],
	values: [194, 0, 3, 125, 37, 24, 0, 5, 0, 0, 0, 0, 0, 6, 18, 18, 3, 4, 2, 1, 1, 4, 18, 3, 7, 10, 3, 7, 8, 2, 1, 1, 7, 0, 1, 3, 1, 8, 1, 0, 1, 7, 1, 1, 6, 6, 1, 1, 6, 5, 4, 0, 3, 2, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "všetci", "všetci", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "neuvedené"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(190, 190, 190)', 'rgb(200, 200, 200)', 'rgb(0, 102, 102)', 'rgb(204, 0, 0)', 'rgb(62, 0, 62)', 'rgb(82, 0, 82)', 'rgb(124, 124, 124)', 'rgb(95, 146, 146)', 'rgb(197, 95, 95)', 'rgb(126,95,126)', 'rgb(82, 0, 82)', 'rgb(157, 157, 157)', 'rgb(53, 104, 0)', 'rgb(82, 163, 0)', 'rgb(102, 204, 0)', 'rgb(222, 222, 92)', 'rgb(255, 238, 153)', 'rgb(255,247,126)', 'rgb(255, 255, 98)', 'rgb(255, 255, 0)', 'rgb(255, 204, 0)', 'rgb(255, 128, 0)', 'rgb(204, 101, 0)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(0, 0, 255)', 'rgb(0, 128, 255)', 'rgb(136, 136, 136)', 'rgb(175, 175, 175)', 'rgb(36, 18, 0)', 'rgb(75, 37, 0)', 'rgb(89, 121, 0)', 'rgb(0, 102, 102)', 'rgb(0, 102, 102)', 'rgb(119,94,107)', 'rgb(102, 51, 77)', 'rgb(145,0,73)', 'rgb(204, 0, 102)', 'rgb(255, 47, 151)', 'rgb(153, 0, 76)', 'rgb(214, 48, 90)', 'rgb(214, 48, 62)', 'rgb(214, 48, 48)', 'rgb(218, 94, 69)', 'rgb(218, 106, 69)', 'rgb(204, 0, 0)', 'rgb(204, 0, 0)', 'rgb(82, 0, 82)', 'rgb(107, 0, 107)', 'rgb(132, 0, 132)', 'rgb(142, 0, 142)', 'rgb(152, 0, 152)', 'rgb(162, 0, 162)', 'rgb(172, 0, 172)', 'rgb(182, 0, 182)', 'rgb(62, 0, 62)', 'rgb(62, 0, 62)', 'rgb(82, 0, 82)', 'rgb(31, 51, 82)', 'rgb(36, 77, 112)', 'rgb(142, 0, 142)', 'rgb(132, 0, 132)', 'rgb(162, 0, 162)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(124, 124, 124)', 'rgb(124, 124, 124)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba dáta z registrácie</b><br>194 osôb<br>", "0 neprítomných<br>", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.5% prítomných<br>", "<b>STEM</b><br>125 osôb<br>64.4% prítomných<br>", "<b>SSH</b><br>37 osôb<br>19.1% prítomných<br>", "<b>iné</b><br>24 osôb<br>12.4% prítomných<br>", "<b>iniciatívy</b><br>0 osôb<br>0.0% prítomných<br>", "<b>neuvedené</b><br>5 osôb<br>2.6% prítomných<br>", "<b>STEM</b><br>0 osôb<br>", "<b>SSH</b><br>0 osôb<br>", "<b>iné</b><br>0 osôb<br>", "<b>iniciatívy</b><br>0 osôb<br>", "<b>neuvedené</b><br>0 osôb<br>", "<b>genetika</b><br>6 osôb<br>3.1% prítomných<br>", "<b>molekulárna biológia</b><br>18 osôb<br>9.3% prítomných<br>", "<b>biológia</b><br>18 osôb<br>9.3% prítomných<br>", "<b>biochémia</b><br>3 osoby<br>1.5% prítomných<br>", "<b>biofyzika</b><br>4 osoby<br>2.1% prítomných<br>", "<b>bioinformatika</b><br>2 osoby<br>1.0% prítomných<br>", "<b>biomedicína</b><br>1 osoba<br>0.5% prítomných<br>", "<b>biotechnológie, biomateriály</b><br>1 osoba<br>0.5% prítomných<br>", "<b>neurovedy</b><br>4 osoby<br>2.1% prítomných<br>", "<b>medicína, lekárske vedy</b><br>18 osôb<br>9.3% prítomných<br>", "<b>farmácia</b><br>3 osoby<br>1.5% prítomných<br>", "<b>chémia</b><br>7 osôb<br>3.6% prítomných<br>", "<b>fyzika</b><br>10 osôb<br>5.2% prítomných<br>", "<b>matematika</b><br>3 osoby<br>1.5% prítomných<br>", "<b>IT</b><br>7 osôb<br>3.6% prítomných<br>", "<b>technológie</b><br>8 osôb<br>4.1% prítomných<br>", "<b>stavebné inžinierstvo, architektúra</b><br>2 osoby<br>1.0% prítomných<br>", "<b>geopriestorové vedy</b><br>1 osoba<br>0.5% prítomných<br>", "<b>vedy o Zemi</b><br>1 osoba<br>0.5% prítomných<br>", "<b>ekologické a environmentálne vedy</b><br>7 osôb<br>3.6% prítomných<br>", "<b>nezaradené</b><br>0 osôb<br>0.0% prítomných<br>", "<b>neuvedené</b><br>1 osoba<br>0.5% prítomných<br>", "<b>knižničná a informačná veda</b><br>3 osoby<br>1.5% prítomných<br>", "<b>digital humanities</b><br>1 osoba<br>0.5% prítomných<br>", "<b>história, pomocné vedy historické</b><br>8 osôb<br>4.1% prítomných<br>", "<b>archeológia</b><br>1 osoba<br>0.5% prítomných<br>", "<b>antropológia</b><br>0 osôb<br>0.0% prítomných<br>", "<b>religionistika</b><br>1 osoba<br>0.5% prítomných<br>", "<b>psychológia</b><br>7 osôb<br>3.6% prítomných<br>", "<b>didaktika</b><br>1 osoba<br>0.5% prítomných<br>", "<b>sociológia</b><br>1 osoba<br>0.5% prítomných<br>", "<b>politické vedy</b><br>6 osôb<br>3.1% prítomných<br>", "<b>ekonomické vedy</b><br>6 osôb<br>3.1% prítomných<br>", "<b>nezaradené</b><br>1 osoba<br>0.5% prítomných<br>", "<b>neuvedené</b><br>1 osoba<br>0.5% prítomných<br>", "<b>podpora výskumu</b><br>6 osôb<br>3.1% prítomných<br>", "<b>otvorená veda</b><br>5 osôb<br>2.6% prítomných<br>", "<b>vzdelávanie, poradenstvo</b><br>4 osoby<br>2.1% prítomných<br>", "<b>práca s mládežou</b><br>0 osôb<br>0.0% prítomných<br>", "<b>projektový manažment</b><br>3 osoby<br>1.5% prítomných<br>", "<b>popularizácia</b><br>2 osoby<br>1.0% prítomných<br>", "<b>médiá</b><br>0 osôb<br>0.0% prítomných<br>", "<b>štátna správa</b><br>1 osoba<br>0.5% prítomných<br>", "<b>nezaradené</b><br>1 osoba<br>0.5% prítomných<br>", "<b>neuvedené</b><br>2 osoby<br>1.0% prítomných<br>", "<b>podpora výskumu</b><br>0 osôb<br>0.0% prítomných<br>", "<b>podpora výskumu (STEM)</b><br>0 osôb<br>0.0% prítomných<br>", "<b>práca s mládežou (STEM)</b><br>0 osôb<br>0.0% prítomných<br>", "<b>práca s mládežou</b><br>0 osôb<br>0.0% prítomných<br>", "<b>vzdelávanie, poradenstvo</b><br>0 osôb<br>0.0% prítomných<br>", "<b>popularizácia</b><br>0 osôb<br>0.0% prítomných<br>", "<b>chémia</b><br>0 osôb<br>0.0% prítomných<br>", "<b>fyzika</b><br>0 osôb<br>0.0% prítomných<br>", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>", "<b>neuvedené</b><br>5 osôb<br>2.6% prítomných<br>"]
},
// subject 2019
{
	type: "sunburst",
	ids: ["všetci", "neprítomní", "nesúhlas", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "STEM (neprítomní)", "SSH (neprítomní)", "iné (neprítomní)", "iniciatívy (neprítomní)", "neuvedené (neprítomní)", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "STEM nezaradené", "STEM neuvedené", "knižničná a informačná veda", "digital humanities", "história, pomocné vedy historické", "archeológia", "antropológia", "religionistika", "psychológia", "didaktika", "sociológia", "politické vedy", "ekonomické vedy", "SSH nezaradené", "SSH neuvedené", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "práca s mládežou", "projektový manažment", "popularizácia", "médiá", "štátna správa", "iné nezaradené", "iné neuvedené", "iniciatívy podpora výskumu", "iniciatívy podpora výskumu (STEM)", "iniciatívy práca s mládežou (STEM)", "iniciatívy práca s mládežou", "iniciatívy vzdelávanie, poradenstvo", "iniciatívy popularizácia", "iniciatívy chémia", "iniciatívy fyzika", "neuvedené (iniciatívy)", "neuvedené (neuvedené)"],
	labels: ["iba dáta z registrácie", "neprítomní", "nesúhlas s analýzou", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "nezaradené", "neuvedené", "knižničná a informačná veda", "digital humanities", "história, pomocné vedy historické", "archeológia", "antropológia", "religionistika", "psychológia", "didaktika", "sociológia", "politické vedy", "ekonomické vedy", "nezaradené", "neuvedené", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "práca s mládežou", "projektový manažment", "popularizácia", "médiá", "štátna správa", "nezaradené", "neuvedené", "podpora výskumu", "podpora výskumu (STEM)", "práca s mládežou (STEM)", "práca s mládežou", "vzdelávanie, poradenstvo", "popularizácia", "chémia", "fyzika", "neuvedené", "neuvedené"],
	values: [198, 0, 3, 114, 27, 14, 40, 0, 0, 0, 0, 0, 0, 12, 8, 12, 6, 3, 3, 0, 2, 2, 15, 0, 10, 5, 4, 9, 7, 4, 6, 2, 2, 2, 0, 0, 2, 2, 3, 3, 0, 3, 2, 0, 3, 7, 2, 0, 6, 0, 3, 0, 1, 0, 1, 0, 2, 1, 11, 3, 10, 2, 4, 10, 0, 0, 0, 0],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "všetci", "všetci", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "neuvedené"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(190, 190, 190)', 'rgb(200, 200, 200)', 'rgb(0, 102, 102)', 'rgb(204, 0, 0)', 'rgb(62, 0, 62)', 'rgb(82, 0, 82)', 'rgb(124, 124, 124)', 'rgb(95, 146, 146)', 'rgb(197, 95, 95)', 'rgb(126,95,126)', 'rgb(82, 0, 82)', 'rgb(157, 157, 157)', 'rgb(53, 104, 0)', 'rgb(82, 163, 0)', 'rgb(102, 204, 0)', 'rgb(222, 222, 92)', 'rgb(255, 238, 153)', 'rgb(255,247,126)', 'rgb(255, 255, 98)', 'rgb(255, 255, 0)', 'rgb(255, 204, 0)', 'rgb(255, 128, 0)', 'rgb(204, 101, 0)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(0, 0, 255)', 'rgb(0, 128, 255)', 'rgb(136, 136, 136)', 'rgb(175, 175, 175)', 'rgb(36, 18, 0)', 'rgb(75, 37, 0)', 'rgb(89, 121, 0)', 'rgb(0, 102, 102)', 'rgb(0, 102, 102)', 'rgb(119,94,107)', 'rgb(102, 51, 77)', 'rgb(145,0,73)', 'rgb(204, 0, 102)', 'rgb(255, 47, 151)', 'rgb(153, 0, 76)', 'rgb(214, 48, 90)', 'rgb(214, 48, 62)', 'rgb(214, 48, 48)', 'rgb(218, 94, 69)', 'rgb(218, 106, 69)', 'rgb(204, 0, 0)', 'rgb(204, 0, 0)', 'rgb(82, 0, 82)', 'rgb(107, 0, 107)', 'rgb(132, 0, 132)', 'rgb(142, 0, 142)', 'rgb(152, 0, 152)', 'rgb(162, 0, 162)', 'rgb(172, 0, 172)', 'rgb(182, 0, 182)', 'rgb(62, 0, 62)', 'rgb(62, 0, 62)', 'rgb(82, 0, 82)', 'rgb(31, 51, 82)', 'rgb(36, 77, 112)', 'rgb(142, 0, 142)', 'rgb(132, 0, 132)', 'rgb(162, 0, 162)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(124, 124, 124)', 'rgb(124, 124, 124)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba dáta z registrácie</b><br>198 osôb<br>", "0 neprítomných<br>", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.5% prítomných<br>", "<b>STEM</b><br>114 osôb<br>57.6% prítomných<br>", "<b>SSH</b><br>27 osôb<br>13.6% prítomných<br>", "<b>iné</b><br>14 osôb<br>7.1% prítomných<br>", "<b>iniciatívy</b><br>40 osôb<br>20.2% prítomných<br>", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>", "<b>STEM</b><br>0 osôb<br>", "<b>SSH</b><br>0 osôb<br>", "<b>iné</b><br>0 osôb<br>", "<b>iniciatívy</b><br>0 osôb<br>", "<b>neuvedené</b><br>0 osôb<br>", "<b>genetika</b><br>12 osôb<br>6.1% prítomných<br>", "<b>molekulárna biológia</b><br>8 osôb<br>4.0% prítomných<br>", "<b>biológia</b><br>12 osôb<br>6.1% prítomných<br>", "<b>biochémia</b><br>6 osôb<br>3.0% prítomných<br>", "<b>biofyzika</b><br>3 osoby<br>1.5% prítomných<br>", "<b>bioinformatika</b><br>3 osoby<br>1.5% prítomných<br>", "<b>biomedicína</b><br>0 osôb<br>0.0% prítomných<br>", "<b>biotechnológie, biomateriály</b><br>2 osoby<br>1.0% prítomných<br>", "<b>neurovedy</b><br>2 osoby<br>1.0% prítomných<br>", "<b>medicína, lekárske vedy</b><br>15 osôb<br>7.6% prítomných<br>", "<b>farmácia</b><br>0 osôb<br>0.0% prítomných<br>", "<b>chémia</b><br>10 osôb<br>5.1% prítomných<br>", "<b>fyzika</b><br>5 osôb<br>2.5% prítomných<br>", "<b>matematika</b><br>4 osoby<br>2.0% prítomných<br>", "<b>IT</b><br>9 osôb<br>4.5% prítomných<br>", "<b>technológie</b><br>7 osôb<br>3.5% prítomných<br>", "<b>stavebné inžinierstvo, architektúra</b><br>4 osoby<br>2.0% prítomných<br>", "<b>geopriestorové vedy</b><br>6 osôb<br>3.0% prítomných<br>", "<b>vedy o Zemi</b><br>2 osoby<br>1.0% prítomných<br>", "<b>ekologické a environmentálne vedy</b><br>2 osoby<br>1.0% prítomných<br>", "<b>nezaradené</b><br>2 osoby<br>1.0% prítomných<br>", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>", "<b>knižničná a informačná veda</b><br>0 osôb<br>0.0% prítomných<br>", "<b>digital humanities</b><br>2 osoby<br>1.0% prítomných<br>", "<b>história, pomocné vedy historické</b><br>2 osoby<br>1.0% prítomných<br>", "<b>archeológia</b><br>3 osoby<br>1.5% prítomných<br>", "<b>antropológia</b><br>3 osoby<br>1.5% prítomných<br>", "<b>religionistika</b><br>0 osôb<br>0.0% prítomných<br>", "<b>psychológia</b><br>3 osoby<br>1.5% prítomných<br>", "<b>didaktika</b><br>2 osoby<br>1.0% prítomných<br>", "<b>sociológia</b><br>0 osôb<br>0.0% prítomných<br>", "<b>politické vedy</b><br>3 osoby<br>1.5% prítomných<br>", "<b>ekonomické vedy</b><br>7 osôb<br>3.5% prítomných<br>", "<b>nezaradené</b><br>2 osoby<br>1.0% prítomných<br>", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>", "<b>podpora výskumu</b><br>6 osôb<br>3.0% prítomných<br>", "<b>otvorená veda</b><br>0 osôb<br>0.0% prítomných<br>", "<b>vzdelávanie, poradenstvo</b><br>3 osoby<br>1.5% prítomných<br>", "<b>práca s mládežou</b><br>0 osôb<br>0.0% prítomných<br>", "<b>projektový manažment</b><br>1 osoba<br>0.5% prítomných<br>", "<b>popularizácia</b><br>0 osôb<br>0.0% prítomných<br>", "<b>médiá</b><br>1 osoba<br>0.5% prítomných<br>", "<b>štátna správa</b><br>0 osôb<br>0.0% prítomných<br>", "<b>nezaradené</b><br>2 osoby<br>1.0% prítomných<br>", "<b>neuvedené</b><br>1 osoba<br>0.5% prítomných<br>", "<b>podpora výskumu</b><br>11 osôb<br>5.6% prítomných<br>", "<b>podpora výskumu (STEM)</b><br>3 osoby<br>1.5% prítomných<br>", "<b>práca s mládežou (STEM)</b><br>10 osôb<br>5.1% prítomných<br>", "<b>práca s mládežou</b><br>2 osoby<br>1.0% prítomných<br>", "<b>vzdelávanie, poradenstvo</b><br>4 osoby<br>2.0% prítomných<br>", "<b>popularizácia</b><br>10 osôb<br>5.1% prítomných<br>", "<b>chémia</b><br>0 osôb<br>0.0% prítomných<br>", "<b>fyzika</b><br>0 osôb<br>0.0% prítomných<br>", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>"]
},
// subject 2018
{
	type: "sunburst",
	ids: ["všetci", "neprítomní", "nesúhlas", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "STEM (neprítomní)", "SSH (neprítomní)", "iné (neprítomní)", "iniciatívy (neprítomní)", "neuvedené (neprítomní)", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "STEM nezaradené", "STEM neuvedené", "knižničná a informačná veda", "digital humanities", "história, pomocné vedy historické", "archeológia", "antropológia", "religionistika", "psychológia", "didaktika", "sociológia", "politické vedy", "ekonomické vedy", "SSH nezaradené", "SSH neuvedené", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "práca s mládežou", "projektový manažment", "popularizácia", "médiá", "štátna správa", "iné nezaradené", "iné neuvedené", "iniciatívy podpora výskumu", "iniciatívy podpora výskumu (STEM)", "iniciatívy práca s mládežou (STEM)", "iniciatívy práca s mládežou", "iniciatívy vzdelávanie, poradenstvo", "iniciatívy popularizácia", "iniciatívy chémia", "iniciatívy fyzika", "neuvedené (iniciatívy)", "neuvedené (neuvedené)"],
	labels: ["iba dáta z registrácie", "neprítomní", "nesúhlas s analýzou", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "nezaradené", "neuvedené", "knižničná a informačná veda", "digital humanities", "história, pomocné vedy historické", "archeológia", "antropológia", "religionistika", "psychológia", "didaktika", "sociológia", "politické vedy", "ekonomické vedy", "nezaradené", "neuvedené", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "práca s mládežou", "projektový manažment", "popularizácia", "médiá", "štátna správa", "nezaradené", "neuvedené", "podpora výskumu", "podpora výskumu (STEM)", "práca s mládežou (STEM)", "práca s mládežou", "vzdelávanie, poradenstvo", "popularizácia", "chémia", "fyzika", "neuvedené", "neuvedené"],
	values: [156, 38, 0, 67, 20, 11, 20, 0, 33, 2, 1, 2, 0, 9, 8, 4, 8, 0, 1, 2, 0, 4, 2, 1, 5, 4, 2, 3, 2, 0, 2, 2, 1, 1, 6, 0, 0, 1, 4, 3, 0, 2, 1, 2, 2, 0, 1, 4, 3, 0, 1, 0, 1, 0, 0, 0, 1, 5, 8, 1, 4, 3, 1, 0, 1, 0, 2, 0],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "všetci", "všetci", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "neuvedené"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(190, 190, 190)', 'rgb(200, 200, 200)', 'rgb(0, 102, 102)', 'rgb(204, 0, 0)', 'rgb(62, 0, 62)', 'rgb(82, 0, 82)', 'rgb(124, 124, 124)', 'rgb(95, 146, 146)', 'rgb(197, 95, 95)', 'rgb(126,95,126)', 'rgb(82, 0, 82)', 'rgb(157, 157, 157)', 'rgb(53, 104, 0)', 'rgb(82, 163, 0)', 'rgb(102, 204, 0)', 'rgb(222, 222, 92)', 'rgb(255, 238, 153)', 'rgb(255,247,126)', 'rgb(255, 255, 98)', 'rgb(255, 255, 0)', 'rgb(255, 204, 0)', 'rgb(255, 128, 0)', 'rgb(204, 101, 0)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(0, 0, 255)', 'rgb(0, 128, 255)', 'rgb(136, 136, 136)', 'rgb(175, 175, 175)', 'rgb(36, 18, 0)', 'rgb(75, 37, 0)', 'rgb(89, 121, 0)', 'rgb(0, 102, 102)', 'rgb(0, 102, 102)', 'rgb(119,94,107)', 'rgb(102, 51, 77)', 'rgb(145,0,73)', 'rgb(204, 0, 102)', 'rgb(255, 47, 151)', 'rgb(153, 0, 76)', 'rgb(214, 48, 90)', 'rgb(214, 48, 62)', 'rgb(214, 48, 48)', 'rgb(218, 94, 69)', 'rgb(218, 106, 69)', 'rgb(204, 0, 0)', 'rgb(204, 0, 0)', 'rgb(82, 0, 82)', 'rgb(107, 0, 107)', 'rgb(132, 0, 132)', 'rgb(142, 0, 142)', 'rgb(152, 0, 152)', 'rgb(162, 0, 162)', 'rgb(172, 0, 172)', 'rgb(182, 0, 182)', 'rgb(62, 0, 62)', 'rgb(62, 0, 62)', 'rgb(82, 0, 82)', 'rgb(31, 51, 82)', 'rgb(36, 77, 112)', 'rgb(142, 0, 142)', 'rgb(132, 0, 132)', 'rgb(162, 0, 162)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(124, 124, 124)', 'rgb(124, 124, 124)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba dáta z registrácie</b><br>156 osôb<br>", "38 neprítomných<br>", "<b>nesúhlas s analýzou</b><br>0 osôb<br>0.0% prítomných<br>", "<b>STEM</b><br>67 osôb<br>42.9% prítomných<br>", "<b>SSH</b><br>20 osôb<br>12.8% prítomných<br>", "<b>iné</b><br>11 osôb<br>7.1% prítomných<br>", "<b>iniciatívy</b><br>20 osôb<br>12.8% prítomných<br>", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>", "<b>STEM</b><br>33 osôb<br>", "<b>SSH</b><br>2 osoby<br>", "<b>iné</b><br>1 osoba<br>", "<b>iniciatívy</b><br>2 osoby<br>", "<b>neuvedené</b><br>0 osôb<br>", "<b>genetika</b><br>9 osôb<br>5.8% prítomných<br>", "<b>molekulárna biológia</b><br>8 osôb<br>5.1% prítomných<br>", "<b>biológia</b><br>4 osoby<br>2.6% prítomných<br>", "<b>biochémia</b><br>8 osôb<br>5.1% prítomných<br>", "<b>biofyzika</b><br>0 osôb<br>0.0% prítomných<br>", "<b>bioinformatika</b><br>1 osoba<br>0.6% prítomných<br>", "<b>biomedicína</b><br>2 osoby<br>1.3% prítomných<br>", "<b>biotechnológie, biomateriály</b><br>0 osôb<br>0.0% prítomných<br>", "<b>neurovedy</b><br>4 osoby<br>2.6% prítomných<br>", "<b>medicína, lekárske vedy</b><br>2 osoby<br>1.3% prítomných<br>", "<b>farmácia</b><br>1 osoba<br>0.6% prítomných<br>", "<b>chémia</b><br>5 osôb<br>3.2% prítomných<br>", "<b>fyzika</b><br>4 osoby<br>2.6% prítomných<br>", "<b>matematika</b><br>2 osoby<br>1.3% prítomných<br>", "<b>IT</b><br>3 osoby<br>1.9% prítomných<br>", "<b>technológie</b><br>2 osoby<br>1.3% prítomných<br>", "<b>stavebné inžinierstvo, architektúra</b><br>0 osôb<br>0.0% prítomných<br>", "<b>geopriestorové vedy</b><br>2 osoby<br>1.3% prítomných<br>", "<b>vedy o Zemi</b><br>2 osoby<br>1.3% prítomných<br>", "<b>ekologické a environmentálne vedy</b><br>1 osoba<br>0.6% prítomných<br>", "<b>nezaradené</b><br>1 osoba<br>0.6% prítomných<br>", "<b>neuvedené</b><br>6 osôb<br>3.8% prítomných<br>", "<b>knižničná a informačná veda</b><br>0 osôb<br>0.0% prítomných<br>", "<b>digital humanities</b><br>0 osôb<br>0.0% prítomných<br>", "<b>história, pomocné vedy historické</b><br>1 osoba<br>0.6% prítomných<br>", "<b>archeológia</b><br>4 osoby<br>2.6% prítomných<br>", "<b>antropológia</b><br>3 osoby<br>1.9% prítomných<br>", "<b>religionistika</b><br>0 osôb<br>0.0% prítomných<br>", "<b>psychológia</b><br>2 osoby<br>1.3% prítomných<br>", "<b>didaktika</b><br>1 osoba<br>0.6% prítomných<br>", "<b>sociológia</b><br>2 osoby<br>1.3% prítomných<br>", "<b>politické vedy</b><br>2 osoby<br>1.3% prítomných<br>", "<b>ekonomické vedy</b><br>0 osôb<br>0.0% prítomných<br>", "<b>nezaradené</b><br>1 osoba<br>0.6% prítomných<br>", "<b>neuvedené</b><br>4 osoby<br>2.6% prítomných<br>", "<b>podpora výskumu</b><br>3 osoby<br>1.9% prítomných<br>", "<b>otvorená veda</b><br>0 osôb<br>0.0% prítomných<br>", "<b>vzdelávanie, poradenstvo</b><br>1 osoba<br>0.6% prítomných<br>", "<b>práca s mládežou</b><br>0 osôb<br>0.0% prítomných<br>", "<b>projektový manažment</b><br>1 osoba<br>0.6% prítomných<br>", "<b>popularizácia</b><br>0 osôb<br>0.0% prítomných<br>", "<b>médiá</b><br>0 osôb<br>0.0% prítomných<br>", "<b>štátna správa</b><br>0 osôb<br>0.0% prítomných<br>", "<b>nezaradené</b><br>1 osoba<br>0.6% prítomných<br>", "<b>neuvedené</b><br>5 osôb<br>3.2% prítomných<br>", "<b>podpora výskumu</b><br>8 osôb<br>5.1% prítomných<br>", "<b>podpora výskumu (STEM)</b><br>1 osoba<br>0.6% prítomných<br>", "<b>práca s mládežou (STEM)</b><br>4 osoby<br>2.6% prítomných<br>", "<b>práca s mládežou</b><br>3 osoby<br>1.9% prítomných<br>", "<b>vzdelávanie, poradenstvo</b><br>1 osoba<br>0.6% prítomných<br>", "<b>popularizácia</b><br>0 osôb<br>0.0% prítomných<br>", "<b>chémia</b><br>1 osoba<br>0.6% prítomných<br>", "<b>fyzika</b><br>0 osôb<br>0.0% prítomných<br>", "<b>neuvedené</b><br>2 osoby<br>1.3% prítomných<br>", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>"]
},
// subject 2017
{
	type: "sunburst",
	ids: ["všetci", "neprítomní", "nesúhlas", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "STEM (neprítomní)", "SSH (neprítomní)", "iné (neprítomní)", "iniciatívy (neprítomní)", "neuvedené (neprítomní)", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "STEM nezaradené", "STEM neuvedené", "knižničná a informačná veda", "digital humanities", "história, pomocné vedy historické", "archeológia", "antropológia", "religionistika", "psychológia", "didaktika", "sociológia", "politické vedy", "ekonomické vedy", "SSH nezaradené", "SSH neuvedené", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "práca s mládežou", "projektový manažment", "popularizácia", "médiá", "štátna správa", "iné nezaradené", "iné neuvedené", "iniciatívy podpora výskumu", "iniciatívy podpora výskumu (STEM)", "iniciatívy práca s mládežou (STEM)", "iniciatívy práca s mládežou", "iniciatívy vzdelávanie, poradenstvo", "iniciatívy popularizácia", "iniciatívy chémia", "iniciatívy fyzika", "neuvedené (iniciatívy)", "neuvedené (neuvedené)"],
	labels: ["iba dáta z registrácie", "neprítomní", "nesúhlas s analýzou", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "STEM", "SSH", "iné", "iniciatívy", "neuvedené", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "nezaradené", "neuvedené", "knižničná a informačná veda", "digital humanities", "história, pomocné vedy historické", "archeológia", "antropológia", "religionistika", "psychológia", "didaktika", "sociológia", "politické vedy", "ekonomické vedy", "nezaradené", "neuvedené", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "práca s mládežou", "projektový manažment", "popularizácia", "médiá", "štátna správa", "nezaradené", "neuvedené", "podpora výskumu", "podpora výskumu (STEM)", "práca s mládežou (STEM)", "práca s mládežou", "vzdelávanie, poradenstvo", "popularizácia", "chémia", "fyzika", "neuvedené", "neuvedené"],
	values: [199, 69, 0, 114, 11, 5, 0, 0, 50, 15, 3, 0, 1, 7, 15, 12, 11, 1, 1, 4, 4, 5, 8, 0, 5, 19, 3, 3, 4, 0, 7, 2, 3, 0, 0, 0, 0, 1, 3, 2, 0, 1, 0, 1, 2, 1, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "všetci", "všetci", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "neuvedené"],
	outsidetextfont: {
		size: 20,
		color: 'rgb(255, 255, 255)'
	},
	leaf: {
		opacity: 0.85
	},
	marker: {
		line: {
			width: 1,
			color: 'rgb(200, 200, 200)'
		},
		colors: ['rgb(255, 255, 255)', 'rgb(190, 190, 190)', 'rgb(200, 200, 200)', 'rgb(0, 102, 102)', 'rgb(204, 0, 0)', 'rgb(62, 0, 62)', 'rgb(82, 0, 82)', 'rgb(124, 124, 124)', 'rgb(95, 146, 146)', 'rgb(197, 95, 95)', 'rgb(126,95,126)', 'rgb(82, 0, 82)', 'rgb(157, 157, 157)', 'rgb(53, 104, 0)', 'rgb(82, 163, 0)', 'rgb(102, 204, 0)', 'rgb(222, 222, 92)', 'rgb(255, 238, 153)', 'rgb(255,247,126)', 'rgb(255, 255, 98)', 'rgb(255, 255, 0)', 'rgb(255, 204, 0)', 'rgb(255, 128, 0)', 'rgb(204, 101, 0)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(0, 0, 255)', 'rgb(0, 128, 255)', 'rgb(136, 136, 136)', 'rgb(175, 175, 175)', 'rgb(36, 18, 0)', 'rgb(75, 37, 0)', 'rgb(89, 121, 0)', 'rgb(0, 102, 102)', 'rgb(0, 102, 102)', 'rgb(119,94,107)', 'rgb(102, 51, 77)', 'rgb(145,0,73)', 'rgb(204, 0, 102)', 'rgb(255, 47, 151)', 'rgb(153, 0, 76)', 'rgb(214, 48, 90)', 'rgb(214, 48, 62)', 'rgb(214, 48, 48)', 'rgb(218, 94, 69)', 'rgb(218, 106, 69)', 'rgb(204, 0, 0)', 'rgb(204, 0, 0)', 'rgb(82, 0, 82)', 'rgb(107, 0, 107)', 'rgb(132, 0, 132)', 'rgb(142, 0, 142)', 'rgb(152, 0, 152)', 'rgb(162, 0, 162)', 'rgb(172, 0, 172)', 'rgb(182, 0, 182)', 'rgb(62, 0, 62)', 'rgb(62, 0, 62)', 'rgb(82, 0, 82)', 'rgb(31, 51, 82)', 'rgb(36, 77, 112)', 'rgb(142, 0, 142)', 'rgb(132, 0, 132)', 'rgb(162, 0, 162)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(124, 124, 124)', 'rgb(124, 124, 124)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba dáta z registrácie</b><br>199 osôb<br>", "69 neprítomných<br>", "<b>nesúhlas s analýzou</b><br>0 osôb<br>0.0% prítomných<br>", "<b>STEM</b><br>114 osôb<br>57.3% prítomných<br>", "<b>SSH</b><br>11 osôb<br>5.5% prítomných<br>", "<b>iné</b><br>5 osôb<br>2.5% prítomných<br>", "<b>iniciatívy</b><br>0 osôb<br>0.0% prítomných<br>", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>", "<b>STEM</b><br>50 osôb<br>", "<b>SSH</b><br>15 osôb<br>", "<b>iné</b><br>3 osoby<br>", "<b>iniciatívy</b><br>0 osôb<br>", "<b>neuvedené</b><br>1 osoba<br>", "<b>genetika</b><br>7 osôb<br>3.5% prítomných<br>", "<b>molekulárna biológia</b><br>15 osôb<br>7.5% prítomných<br>", "<b>biológia</b><br>12 osôb<br>6.0% prítomných<br>", "<b>biochémia</b><br>11 osôb<br>5.5% prítomných<br>", "<b>biofyzika</b><br>1 osoba<br>0.5% prítomných<br>", "<b>bioinformatika</b><br>1 osoba<br>0.5% prítomných<br>", "<b>biomedicína</b><br>4 osoby<br>2.0% prítomných<br>", "<b>biotechnológie, biomateriály</b><br>4 osoby<br>2.0% prítomných<br>", "<b>neurovedy</b><br>5 osôb<br>2.5% prítomných<br>", "<b>medicína, lekárske vedy</b><br>8 osôb<br>4.0% prítomných<br>", "<b>farmácia</b><br>0 osôb<br>0.0% prítomných<br>", "<b>chémia</b><br>5 osôb<br>2.5% prítomných<br>", "<b>fyzika</b><br>19 osôb<br>9.5% prítomných<br>", "<b>matematika</b><br>3 osoby<br>1.5% prítomných<br>", "<b>IT</b><br>3 osoby<br>1.5% prítomných<br>", "<b>technológie</b><br>4 osoby<br>2.0% prítomných<br>", "<b>stavebné inžinierstvo, architektúra</b><br>0 osôb<br>0.0% prítomných<br>", "<b>geopriestorové vedy</b><br>7 osôb<br>3.5% prítomných<br>", "<b>vedy o Zemi</b><br>2 osoby<br>1.0% prítomných<br>", "<b>ekologické a environmentálne vedy</b><br>3 osoby<br>1.5% prítomných<br>", "<b>nezaradené</b><br>0 osôb<br>0.0% prítomných<br>", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>", "<b>knižničná a informačná veda</b><br>0 osôb<br>0.0% prítomných<br>", "<b>digital humanities</b><br>0 osôb<br>0.0% prítomných<br>", "<b>história, pomocné vedy historické</b><br>1 osoba<br>0.5% prítomných<br>", "<b>archeológia</b><br>3 osoby<br>1.5% prítomných<br>", "<b>antropológia</b><br>2 osoby<br>1.0% prítomných<br>", "<b>religionistika</b><br>0 osôb<br>0.0% prítomných<br>", "<b>psychológia</b><br>1 osoba<br>0.5% prítomných<br>", "<b>didaktika</b><br>0 osôb<br>0.0% prítomných<br>", "<b>sociológia</b><br>1 osoba<br>0.5% prítomných<br>", "<b>politické vedy</b><br>2 osoby<br>1.0% prítomných<br>", "<b>ekonomické vedy</b><br>1 osoba<br>0.5% prítomných<br>", "<b>nezaradené</b><br>0 osôb<br>0.0% prítomných<br>", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>", "<b>podpora výskumu</b><br>2 osoby<br>1.0% prítomných<br>", "<b>otvorená veda</b><br>0 osôb<br>0.0% prítomných<br>", "<b>vzdelávanie, poradenstvo</b><br>0 osôb<br>0.0% prítomných<br>", "<b>práca s mládežou</b><br>0 osôb<br>0.0% prítomných<br>", "<b>projektový manažment</b><br>0 osôb<br>0.0% prítomných<br>", "<b>popularizácia</b><br>1 osoba<br>0.5% prítomných<br>", "<b>médiá</b><br>0 osôb<br>0.0% prítomných<br>", "<b>štátna správa</b><br>0 osôb<br>0.0% prítomných<br>", "<b>nezaradené</b><br>0 osôb<br>0.0% prítomných<br>", "<b>neuvedené</b><br>2 osoby<br>1.0% prítomných<br>", "<b>podpora výskumu</b><br>0 osôb<br>0.0% prítomných<br>", "<b>podpora výskumu (STEM)</b><br>0 osôb<br>0.0% prítomných<br>", "<b>práca s mládežou (STEM)</b><br>0 osôb<br>0.0% prítomných<br>", "<b>práca s mládežou</b><br>0 osôb<br>0.0% prítomných<br>", "<b>vzdelávanie, poradenstvo</b><br>0 osôb<br>0.0% prítomných<br>", "<b>popularizácia</b><br>0 osôb<br>0.0% prítomných<br>", "<b>chémia</b><br>0 osôb<br>0.0% prítomných<br>", "<b>fyzika</b><br>0 osôb<br>0.0% prítomných<br>", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>", "<b>neuvedené</b><br>0 osôb<br>0.0% prítomných<br>"]
}];

var data_position_country = [
	// position_country 2021
	{
	x: [1, 20, 8, 14, 1, 9, 26, 16, 21, 3],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>Slovensko: 1 osoba<br>0.5% prítomných<br>0.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 20 osôb<br>10.5% prítomných<br>10.3% registrovaných", "<b>PI (vedúci laboratória)</b><br>Slovensko: 8 osôb<br>4.2% prítomných<br>4.1% registrovaných", "<b>postdok, junior researcher</b><br>Slovensko: 14 osôb<br>7.3% prítomných<br>7.2% registrovaných", "<b>výskum v industry</b><br>Slovensko: 1 osoba<br>0.5% prítomných<br>0.5% registrovaných", "<b>doktorand </b><br>Slovensko: 9 osôb<br>4.7% prítomných<br>4.6% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 26 osôb<br>13.6% prítomných<br>13.4% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 16 osôb<br>8.4% prítomných<br>8.2% registrovaných", "<b>iné </b><br>Slovensko: 21 osôb<br>11.0% prítomných<br>10.8% registrovaných", "<b>neuvedené </b><br>Slovensko: 3 osoby<br>1.6% prítomných<br>1.5% registrovaných"]
	},
	{
	x: [0, 3, 0, 1, 0, 3, 1, 0, 1, 2],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>SR + zahraničie: 3 osoby<br>1.6% prítomných<br>1.5% registrovaných", "", "<b>postdok, junior researcher</b><br>SR + zahraničie: 1 osoba<br>0.5% prítomných<br>0.5% registrovaných", "", "<b>doktorand </b><br>SR + zahraničie: 3 osoby<br>1.6% prítomných<br>1.5% registrovaných", "<b>mimo akadémie </b><br>SR + zahraničie: 1 osoba<br>0.5% prítomných<br>0.5% registrovaných", "", "<b>iné </b><br>SR + zahraničie: 1 osoba<br>0.5% prítomných<br>0.5% registrovaných", "<b>neuvedené </b><br>SR + zahraničie: 2 osoby<br>1.0% prítomných<br>1.0% registrovaných"]
	},
	{
	x: [2, 2, 4, 19, 1, 21, 4, 4, 3, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>zahraničie: 2 osoby<br>1.0% prítomných<br>1.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 2 osoby<br>1.0% prítomných<br>1.0% registrovaných", "<b>PI (vedúci laboratória)</b><br>zahraničie: 4 osoby<br>2.1% prítomných<br>2.1% registrovaných", "<b>postdok, junior researcher</b><br>zahraničie: 19 osôb<br>9.9% prítomných<br>9.8% registrovaných", "<b>výskum v industry</b><br>zahraničie: 1 osoba<br>0.5% prítomných<br>0.5% registrovaných", "<b>doktorand </b><br>zahraničie: 21 osôb<br>11.0% prítomných<br>10.8% registrovaných", "<b>mimo akadémie </b><br>zahraničie: 4 osoby<br>2.1% prítomných<br>2.1% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 4 osoby<br>2.1% prítomných<br>2.1% registrovaných", "<b>iné </b><br>zahraničie: 3 osoby<br>1.6% prítomných<br>1.5% registrovaných", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>neuvedené (krajina): 1 osoba<br>0.5% prítomných<br>0.5% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>nesúhlas s analýzou: 3 osoby<br>1.5% registrovaných"]
	},
	// position_country 2019
	{
	x: [3, 18, 6, 8, 3, 14, 69, 12, 12, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>Slovensko: 3 osoby<br>1.3% prítomných<br>1.4% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 18 osôb<br>7.9% prítomných<br>8.5% registrovaných", "<b>PI (vedúci laboratória)</b><br>Slovensko: 6 osôb<br>2.6% prítomných<br>2.8% registrovaných", "<b>postdok, junior researcher</b><br>Slovensko: 8 osôb<br>3.5% prítomných<br>3.8% registrovaných", "<b>výskum v industry</b><br>Slovensko: 3 osoby<br>1.3% prítomných<br>1.4% registrovaných", "<b>doktorand </b><br>Slovensko: 14 osôb<br>6.1% prítomných<br>6.6% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 69 osôb<br>30.1% prítomných<br>32.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 12 osôb<br>5.2% prítomných<br>5.7% registrovaných", "<b>iné </b><br>Slovensko: 12 osôb<br>5.2% prítomných<br>5.7% registrovaných", ""]
	},
	{
	x: [1, 1, 1, 3, 0, 2, 1, 0, 1, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>SR + zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>SR + zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", "<b>PI (vedúci laboratória)</b><br>SR + zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", "<b>postdok, junior researcher</b><br>SR + zahraničie: 3 osoby<br>1.3% prítomných<br>1.4% registrovaných", "", "<b>doktorand </b><br>SR + zahraničie: 2 osoby<br>0.9% prítomných<br>0.9% registrovaných", "<b>mimo akadémie </b><br>SR + zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", "", "<b>iné </b><br>SR + zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", ""]
	},
	{
	x: [0, 3, 1, 16, 1, 11, 3, 3, 2, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 3 osoby<br>1.3% prítomných<br>1.4% registrovaných", "<b>PI (vedúci laboratória)</b><br>zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", "<b>postdok, junior researcher</b><br>zahraničie: 16 osôb<br>7.0% prítomných<br>7.5% registrovaných", "<b>výskum v industry</b><br>zahraničie: 1 osoba<br>0.4% prítomných<br>0.5% registrovaných", "<b>doktorand </b><br>zahraničie: 11 osôb<br>4.8% prítomných<br>5.2% registrovaných", "<b>mimo akadémie </b><br>zahraničie: 3 osoby<br>1.3% prítomných<br>1.4% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 3 osoby<br>1.3% prítomných<br>1.4% registrovaných", "<b>iné </b><br>zahraničie: 2 osoby<br>0.9% prítomných<br>0.9% registrovaných", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 11],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>neuvedené (krajina): 11 osôb<br>4.8% prítomných<br>5.2% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>nesúhlas s analýzou: 3 osoby<br>1.4% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>8.7% prítomných<br>"]
	},
	// position_country 2018
	{
	x: [2, 11, 2, 5, 0, 9, 14, 7, 5, 15],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 11 osôb<br>7.9% prítomných<br>7.0% registrovaných", "<b>PI (vedúci laboratória)</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>postdok, junior researcher</b><br>Slovensko: 5 osôb<br>3.6% prítomných<br>3.2% registrovaných", "", "<b>doktorand </b><br>Slovensko: 9 osôb<br>6.5% prítomných<br>5.7% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 14 osôb<br>10.1% prítomných<br>8.9% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>iné </b><br>Slovensko: 5 osôb<br>3.6% prítomných<br>3.2% registrovaných", "<b>neuvedené </b><br>Slovensko: 15 osôb<br>10.8% prítomných<br>9.6% registrovaných"]
	},
	{
	x: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "<b>postdok, junior researcher</b><br>SR + zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "", "", "", "", ""]
	},
	{
	x: [1, 3, 2, 5, 0, 6, 4, 4, 2, 3],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 3 osoby<br>2.2% prítomných<br>1.9% registrovaných", "<b>PI (vedúci laboratória)</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>postdok, junior researcher</b><br>zahraničie: 5 osôb<br>3.6% prítomných<br>3.2% registrovaných", "", "<b>doktorand </b><br>zahraničie: 6 osôb<br>4.3% prítomných<br>3.8% registrovaných", "<b>mimo akadémie </b><br>zahraničie: 4 osoby<br>2.9% prítomných<br>2.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 4 osoby<br>2.9% prítomných<br>2.5% registrovaných", "<b>iné </b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>neuvedené </b><br>zahraničie: 3 osoby<br>2.2% prítomných<br>1.9% registrovaných"]
	},
	{
	x: [1, 1, 5, 1, 0, 1, 1, 1, 6, 1],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>PI (vedúci laboratória)</b><br>neuvedené (krajina): 5 osôb<br>3.6% prítomných<br>3.2% registrovaných", "<b>postdok, junior researcher</b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "<b>doktorand </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>mimo akadémie </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>študent (Bc./Mgr.) </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>iné </b><br>neuvedené (krajina): 6 osôb<br>4.3% prítomných<br>3.8% registrovaných", "<b>neuvedené </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných"]
	},
	{
	x: [0, 4, 0, 5, 0, 6, 4, 15, 3, 1],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>4 neprítomní<br>2.5% registrovaných", "", "<b>postdok, junior researcher</b><br>5 neprítomných<br>3.2% registrovaných", "", "<b>doktorand </b><br>6 neprítomných<br>3.8% registrovaných", "<b>mimo akadémie </b><br>4 neprítomní<br>2.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>15 neprítomných<br>9.6% registrovaných", "<b>iné </b><br>3 neprítomní<br>1.9% registrovaných", "<b>neuvedené </b><br>1 neprítomný/á<br>0.6% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	},
	// position_country 2017
	{
	x: [6, 16, 0, 11, 0, 14, 1, 12, 13, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>Slovensko: 6 osôb<br>3.9% prítomných<br>3.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 16 osôb<br>10.3% prítomných<br>8.0% registrovaných", "", "<b>postdok, junior researcher</b><br>Slovensko: 11 osôb<br>7.1% prítomných<br>5.5% registrovaných", "", "<b>doktorand </b><br>Slovensko: 14 osôb<br>9.0% prítomných<br>7.0% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 12 osôb<br>7.7% prítomných<br>6.0% registrovaných", "<b>iné </b><br>Slovensko: 13 osôb<br>8.4% prítomných<br>6.5% registrovaných", ""]
	},
	{
	x: [1, 2, 0, 0, 0, 1, 0, 0, 0, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>SR + zahraničie: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>SR + zahraničie: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", "", "<b>doktorand </b><br>SR + zahraničie: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", "", ""]
	},
	{
	x: [0, 4, 0, 16, 0, 14, 2, 11, 1, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 4 osoby<br>2.6% prítomných<br>2.0% registrovaných", "", "<b>postdok, junior researcher</b><br>zahraničie: 16 osôb<br>10.3% prítomných<br>8.0% registrovaných", "", "<b>doktorand </b><br>zahraničie: 14 osôb<br>9.0% prítomných<br>7.0% registrovaných", "<b>mimo akadémie </b><br>zahraničie: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 11 osôb<br>7.1% prítomných<br>5.5% registrovaných", "<b>iné </b><br>zahraničie: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", ""]
	},
	{
	x: [0, 2, 0, 1, 0, 0, 1, 0, 1, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>neuvedené (krajina): 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "<b>postdok, junior researcher</b><br>neuvedené (krajina): 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", "<b>mimo akadémie </b><br>neuvedené (krajina): 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "<b>iné </b><br>neuvedené (krajina): 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", ""]
	},
	{
	x: [4, 9, 0, 9, 0, 17, 0, 16, 14, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>4 neprítomní<br>2.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>9 neprítomných<br>4.5% registrovaných", "", "<b>postdok, junior researcher</b><br>9 neprítomných<br>4.5% registrovaných", "", "<b>doktorand </b><br>17 neprítomných<br>8.5% registrovaných", "", "<b>študent (Bc./Mgr.) </b><br>16 neprítomných<br>8.0% registrovaných", "<b>iné </b><br>14 neprítomných<br>7.0% registrovaných", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 25],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 25 osôb<br>16.1% prítomných<br>"]
	}
];

var data_position_gender = [
	// position_gender 2021
	{
	x: [1, 15, 4, 18, 1, 28, 19, 16, 19, 4],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>1 žena<br>0.5% prítomných<br>0.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>15 žien<br>7.9% prítomných<br>7.7% registrovaných", "<b>PI (vedúci laboratória)</b><br>4 ženy<br>2.1% prítomných<br>2.1% registrovaných", "<b>postdok, junior researcher</b><br>18 žien<br>9.4% prítomných<br>9.3% registrovaných", "<b>výskum v industry</b><br>1 žena<br>0.5% prítomných<br>0.5% registrovaných", "<b>doktorand </b><br>28 žien<br>14.7% prítomných<br>14.4% registrovaných", "<b>mimo akadémie </b><br>19 žien<br>9.9% prítomných<br>9.8% registrovaných", "<b>študent (Bc./Mgr.) </b><br>16 žien<br>8.4% prítomných<br>8.2% registrovaných", "<b>iné </b><br>19 žien<br>9.9% prítomných<br>9.8% registrovaných", "<b>neuvedené </b><br>4 ženy<br>2.1% prítomných<br>2.1% registrovaných"]
	},
	{
	x: [2, 10, 8, 16, 1, 5, 12, 4, 6, 2],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>2 muži<br>1.0% prítomných<br>1.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>10 mužov<br>5.2% prítomných<br>5.2% registrovaných", "<b>PI (vedúci laboratória)</b><br>8 mužov<br>4.2% prítomných<br>4.1% registrovaných", "<b>postdok, junior researcher</b><br>16 mužov<br>8.4% prítomných<br>8.2% registrovaných", "<b>výskum v industry</b><br>1 muž<br>0.5% prítomných<br>0.5% registrovaných", "<b>doktorand </b><br>5 mužov<br>2.6% prítomných<br>2.6% registrovaných", "<b>mimo akadémie </b><br>12 mužov<br>6.3% prítomných<br>6.2% registrovaných", "<b>študent (Bc./Mgr.) </b><br>4 muži<br>2.1% prítomných<br>2.1% registrovaných", "<b>iné </b><br>6 mužov<br>3.1% prítomných<br>3.1% registrovaných", "<b>neuvedené </b><br>2 muži<br>1.0% prítomných<br>1.0% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>nesúhlas s analýzou: 3 osoby<br>1.5% registrovaných"]
	},
	// position_gender 2019
	{
	x: [2, 11, 4, 13, 2, 14, 36, 7, 8, 6],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>2 ženy<br>0.9% prítomných<br>0.9% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>11 žien<br>4.8% prítomných<br>5.2% registrovaných", "<b>PI (vedúci laboratória)</b><br>4 ženy<br>1.7% prítomných<br>1.9% registrovaných", "<b>postdok, junior researcher</b><br>13 žien<br>5.7% prítomných<br>6.1% registrovaných", "<b>výskum v industry</b><br>2 ženy<br>0.9% prítomných<br>0.9% registrovaných", "<b>doktorand </b><br>14 žien<br>6.1% prítomných<br>6.6% registrovaných", "<b>mimo akadémie </b><br>36 žien<br>15.7% prítomných<br>17.0% registrovaných", "<b>študent (Bc./Mgr.) </b><br>7 žien<br>3.1% prítomných<br>3.3% registrovaných", "<b>iné </b><br>8 žien<br>3.5% prítomných<br>3.8% registrovaných", "<b>neuvedené </b><br>6 žien<br>2.6% prítomných<br>2.8% registrovaných"]
	},
	{
	x: [2, 11, 4, 14, 2, 14, 37, 8, 8, 6],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>2 muži<br>0.9% prítomných<br>0.9% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>11 mužov<br>4.8% prítomných<br>5.2% registrovaných", "<b>PI (vedúci laboratória)</b><br>4 muži<br>1.7% prítomných<br>1.9% registrovaných", "<b>postdok, junior researcher</b><br>14 mužov<br>6.1% prítomných<br>6.6% registrovaných", "<b>výskum v industry</b><br>2 muži<br>0.9% prítomných<br>0.9% registrovaných", "<b>doktorand </b><br>14 mužov<br>6.1% prítomných<br>6.6% registrovaných", "<b>mimo akadémie </b><br>37 mužov<br>16.2% prítomných<br>17.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>8 mužov<br>3.5% prítomných<br>3.8% registrovaných", "<b>iné </b><br>8 mužov<br>3.5% prítomných<br>3.8% registrovaných", "<b>neuvedené </b><br>6 mužov<br>2.6% prítomných<br>2.8% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>nesúhlas s analýzou: 3 osoby<br>1.4% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>8.7% prítomných<br>"]
	},
	// position_gender 2018
	{
	x: [1, 4, 2, 4, 0, 10, 12, 10, 5, 8],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>4 ženy<br>2.9% prítomných<br>2.5% registrovaných", "<b>PI (vedúci laboratória)</b><br>2 ženy<br>1.4% prítomných<br>1.3% registrovaných", "<b>postdok, junior researcher</b><br>4 ženy<br>2.9% prítomných<br>2.5% registrovaných", "", "<b>doktorand </b><br>10 žien<br>7.2% prítomných<br>6.4% registrovaných", "<b>mimo akadémie </b><br>12 žien<br>8.6% prítomných<br>7.6% registrovaných", "<b>študent (Bc./Mgr.) </b><br>10 žien<br>7.2% prítomných<br>6.4% registrovaných", "<b>iné </b><br>5 žien<br>3.6% prítomných<br>3.2% registrovaných", "<b>neuvedené </b><br>8 žien<br>5.8% prítomných<br>5.1% registrovaných"]
	},
	{
	x: [3, 11, 7, 8, 0, 6, 7, 2, 8, 11],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>3 muži<br>2.2% prítomných<br>1.9% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>11 mužov<br>7.9% prítomných<br>7.0% registrovaných", "<b>PI (vedúci laboratória)</b><br>7 mužov<br>5.0% prítomných<br>4.5% registrovaných", "<b>postdok, junior researcher</b><br>8 mužov<br>5.8% prítomných<br>5.1% registrovaných", "", "<b>doktorand </b><br>6 mužov<br>4.3% prítomných<br>3.8% registrovaných", "<b>mimo akadémie </b><br>7 mužov<br>5.0% prítomných<br>4.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>2 muži<br>1.4% prítomných<br>1.3% registrovaných", "<b>iné </b><br>8 mužov<br>5.8% prítomných<br>5.1% registrovaných", "<b>neuvedené </b><br>11 mužov<br>7.9% prítomných<br>7.0% registrovaných"]
	},
	{
	x: [0, 4, 0, 5, 0, 6, 4, 15, 3, 1],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>4 neprítomní<br>2.5% registrovaných", "", "<b>postdok, junior researcher</b><br>5 neprítomných<br>3.2% registrovaných", "", "<b>doktorand </b><br>6 neprítomných<br>3.8% registrovaných", "<b>mimo akadémie </b><br>4 neprítomní<br>2.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>15 neprítomných<br>9.6% registrovaných", "<b>iné </b><br>3 neprítomní<br>1.9% registrovaných", "<b>neuvedené </b><br>1 neprítomný/á<br>0.6% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	},
	// position_gender 2017
	{
	x: [1, 5, 0, 16, 0, 12, 1, 15, 6, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>1 žena<br>0.6% prítomných<br>0.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>5 žien<br>3.2% prítomných<br>2.5% registrovaných", "", "<b>postdok, junior researcher</b><br>16 žien<br>10.3% prítomných<br>8.0% registrovaných", "", "<b>doktorand </b><br>12 žien<br>7.7% prítomných<br>6.0% registrovaných", "<b>mimo akadémie </b><br>1 žena<br>0.6% prítomných<br>0.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>15 žien<br>9.7% prítomných<br>7.5% registrovaných", "<b>iné </b><br>6 žien<br>3.9% prítomných<br>3.0% registrovaných", ""]
	},
	{
	x: [6, 19, 0, 12, 0, 17, 3, 8, 9, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>6 mužov<br>3.9% prítomných<br>3.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>19 mužov<br>12.3% prítomných<br>9.5% registrovaných", "", "<b>postdok, junior researcher</b><br>12 mužov<br>7.7% prítomných<br>6.0% registrovaných", "", "<b>doktorand </b><br>17 mužov<br>11.0% prítomných<br>8.5% registrovaných", "<b>mimo akadémie </b><br>3 muži<br>1.9% prítomných<br>1.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>8 mužov<br>5.2% prítomných<br>4.0% registrovaných", "<b>iné </b><br>9 mužov<br>5.8% prítomných<br>4.5% registrovaných", ""]
	},
	{
	x: [4, 9, 0, 9, 0, 17, 0, 16, 14, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>4 neprítomní<br>2.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>9 neprítomných<br>4.5% registrovaných", "", "<b>postdok, junior researcher</b><br>9 neprítomných<br>4.5% registrovaných", "", "<b>doktorand </b><br>17 neprítomných<br>8.5% registrovaných", "", "<b>študent (Bc./Mgr.) </b><br>16 neprítomných<br>8.0% registrovaných", "<b>iné </b><br>14 neprítomných<br>7.0% registrovaných", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 25],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 25 osôb<br>16.1% prítomných<br>"]
	}
];

var data_institution_country = [
	// institution_country 2021
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>Slovensko: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>SR + zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>zahraničie: 21 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>neuvedené (krajina): 21 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>nesúhlas s analýzou: 3 osoby<br>0.7% registrovaných"]
	},
	// institution_country 2019
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>Slovensko: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>SR + zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>zahraničie: 19 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>neuvedené (krajina): 19 osôb<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "<b>iné</b><br>nesúhlas s analýzou: 3 osoby<br>0.8% registrovaných", ""]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>výskumné pracovisko</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>výskum + univerzita</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>nadnárodná organizácia</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>komerčná spoločnosť</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>podpora výskumu</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>práca s mládežou</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>štátna správa</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>iné</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>neuvedené</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>"]
	},
	// institution_country 2018
	{
	x: [27, 0, 13, 0, 7, 9, 7, 2, 3, 2],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 27 osôb<br>19.4% prítomných<br>17.2% registrovaných", "", "<b>výskumné pracovisko</b><br>Slovensko: 13 osôb<br>9.4% prítomných<br>8.3% registrovaných", "", "<b>komerčná spoločnosť</b><br>Slovensko: 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 9 osôb<br>6.5% prítomných<br>5.7% registrovaných", "<b>práca s mládežou</b><br>Slovensko: 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>štátna správa</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>iné</b><br>Slovensko: 3 osoby<br>2.2% prítomných<br>1.9% registrovaných", "<b>neuvedené</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných"]
	},
	{
	x: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [19, 2, 2, 0, 3, 0, 0, 0, 2, 2],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 19 osôb<br>13.7% prítomných<br>12.1% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "", "<b>komerčná spoločnosť</b><br>zahraničie: 3 osoby<br>2.2% prítomných<br>1.9% registrovaných", "", "", "", "<b>iné</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>neuvedené</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 1, 1, 0, 0, 0, 16],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "<b>komerčná spoločnosť</b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>podpora výskumu</b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "", "", "<b>neuvedené</b><br>neuvedené (krajina): 16 osôb<br>11.5% prítomných<br>10.2% registrovaných"]
	},
	{
	x: [22, 2, 5, 0, 4, 2, 1, 0, 2, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>22 neprítomných<br>14.0% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.3% registrovaných", "<b>výskumné pracovisko</b><br>5 neprítomných<br>3.2% registrovaných", "", "<b>komerčná spoločnosť</b><br>4 neprítomní<br>2.5% registrovaných", "<b>podpora výskumu</b><br>2 neprítomní<br>1.3% registrovaných", "<b>práca s mládežou</b><br>1 neprítomný/á<br>0.6% registrovaných", "", "<b>iné</b><br>2 neprítomní<br>1.3% registrovaných", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	},
	// institution_country 2017
	{
	x: [33, 1, 27, 0, 2, 5, 0, 0, 4, 1],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 33 osôb<br>21.3% prítomných<br>16.6% registrovaných", "<b>výskum + univerzita</b><br>Slovensko: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 27 osôb<br>17.4% prítomných<br>13.6% registrovaných", "", "<b>komerčná spoločnosť</b><br>Slovensko: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 5 osôb<br>3.2% prítomných<br>2.5% registrovaných", "", "", "<b>iné</b><br>Slovensko: 4 osoby<br>2.6% prítomných<br>2.0% registrovaných", "<b>neuvedené</b><br>Slovensko: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných"]
	},
	{
	x: [2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "<b>výskum + univerzita</b><br>SR + zahraničie: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", "", "", "", "", "", ""]
	},
	{
	x: [34, 9, 3, 0, 1, 0, 0, 0, 1, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 34 osôb<br>21.9% prítomných<br>17.1% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 9 osôb<br>5.8% prítomných<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 3 osoby<br>1.9% prítomných<br>1.5% registrovaných", "", "<b>komerčná spoločnosť</b><br>zahraničie: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", "", "<b>iné</b><br>zahraničie: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", ""]
	},
	{
	x: [2, 0, 0, 1, 0, 0, 0, 0, 2, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>neuvedené (krajina): 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", "<b>nadnárodná organizácia</b><br>neuvedené (krajina): 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", "", "", "<b>iné</b><br>neuvedené (krajina): 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", ""]
	},
	{
	x: [38, 2, 13, 2, 5, 3, 0, 2, 3, 1],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>38 neprítomných<br>19.1% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.0% registrovaných", "<b>výskumné pracovisko</b><br>13 neprítomných<br>6.5% registrovaných", "<b>nadnárodná organizácia</b><br>2 neprítomní<br>1.0% registrovaných", "<b>komerčná spoločnosť</b><br>5 neprítomných<br>2.5% registrovaných", "<b>podpora výskumu</b><br>3 neprítomní<br>1.5% registrovaných", "", "<b>štátna správa</b><br>2 neprítomní<br>1.0% registrovaných", "<b>iné</b><br>3 neprítomní<br>1.5% registrovaných", "<b>neuvedené</b><br>1 neprítomný/á<br>0.5% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 25],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 25 osôb<br>16.1% prítomných<br>"]
	}
];

var data_institution_gender = [
	// institution_gender 2021
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>21 žien<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>21 mužov<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>nesúhlas s analýzou: 3 osoby<br>0.7% registrovaných"]
	},
	// institution_gender 2019
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>19 žien<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>výskum + univerzita</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>nadnárodná organizácia</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>komerčná spoločnosť</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>podpora výskumu</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>práca s mládežou</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>štátna správa</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>iné</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných", "<b>neuvedené</b><br>19 mužov<br>3.3% prítomných<br>5.0% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "<b>iné</b><br>nesúhlas s analýzou: 3 osoby<br>0.8% registrovaných", ""]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>výskumné pracovisko</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>výskum + univerzita</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>nadnárodná organizácia</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>komerčná spoločnosť</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>podpora výskumu</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>práca s mládežou</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>štátna správa</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>iné</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>", "<b>neuvedené</b><br>bez dát: 19 osôb<br>3.3% prítomných<br>"]
	},
	// institution_gender 2018
	{
	x: [22, 1, 9, 0, 6, 8, 1, 1, 3, 5],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>22 žien<br>15.8% prítomných<br>14.0% registrovaných", "<b>výskum + univerzita</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>výskumné pracovisko</b><br>9 žien<br>6.5% prítomných<br>5.7% registrovaných", "", "<b>komerčná spoločnosť</b><br>6 žien<br>4.3% prítomných<br>3.8% registrovaných", "<b>podpora výskumu</b><br>8 žien<br>5.8% prítomných<br>5.1% registrovaných", "<b>práca s mládežou</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>štátna správa</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>iné</b><br>3 ženy<br>2.2% prítomných<br>1.9% registrovaných", "<b>neuvedené</b><br>5 žien<br>3.6% prítomných<br>3.2% registrovaných"]
	},
	{
	x: [25, 1, 6, 0, 5, 2, 6, 1, 2, 15],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>25 mužov<br>18.0% prítomných<br>15.9% registrovaných", "<b>výskum + univerzita</b><br>1 muž<br>0.7% prítomných<br>0.6% registrovaných", "<b>výskumné pracovisko</b><br>6 mužov<br>4.3% prítomných<br>3.8% registrovaných", "", "<b>komerčná spoločnosť</b><br>5 mužov<br>3.6% prítomných<br>3.2% registrovaných", "<b>podpora výskumu</b><br>2 muži<br>1.4% prítomných<br>1.3% registrovaných", "<b>práca s mládežou</b><br>6 mužov<br>4.3% prítomných<br>3.8% registrovaných", "<b>štátna správa</b><br>1 muž<br>0.7% prítomných<br>0.6% registrovaných", "<b>iné</b><br>2 muži<br>1.4% prítomných<br>1.3% registrovaných", "<b>neuvedené</b><br>15 mužov<br>10.8% prítomných<br>9.6% registrovaných"]
	},
	{
	x: [22, 2, 5, 0, 4, 2, 1, 0, 2, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>22 neprítomných<br>14.0% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.3% registrovaných", "<b>výskumné pracovisko</b><br>5 neprítomných<br>3.2% registrovaných", "", "<b>komerčná spoločnosť</b><br>4 neprítomní<br>2.5% registrovaných", "<b>podpora výskumu</b><br>2 neprítomní<br>1.3% registrovaných", "<b>práca s mládežou</b><br>1 neprítomný/á<br>0.6% registrovaných", "", "<b>iné</b><br>2 neprítomní<br>1.3% registrovaných", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	},
	// institution_gender 2017
	{
	x: [31, 5, 13, 0, 1, 3, 0, 0, 3, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>31 žien<br>20.0% prítomných<br>15.6% registrovaných", "<b>výskum + univerzita</b><br>5 žien<br>3.2% prítomných<br>2.5% registrovaných", "<b>výskumné pracovisko</b><br>13 žien<br>8.4% prítomných<br>6.5% registrovaných", "", "<b>komerčná spoločnosť</b><br>1 žena<br>0.6% prítomných<br>0.5% registrovaných", "<b>podpora výskumu</b><br>3 ženy<br>1.9% prítomných<br>1.5% registrovaných", "", "", "<b>iné</b><br>3 ženy<br>1.9% prítomných<br>1.5% registrovaných", ""]
	},
	{
	x: [40, 7, 17, 1, 2, 2, 0, 0, 4, 1],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>40 mužov<br>25.8% prítomných<br>20.1% registrovaných", "<b>výskum + univerzita</b><br>7 mužov<br>4.5% prítomných<br>3.5% registrovaných", "<b>výskumné pracovisko</b><br>17 mužov<br>11.0% prítomných<br>8.5% registrovaných", "<b>nadnárodná organizácia</b><br>1 muž<br>0.6% prítomných<br>0.5% registrovaných", "<b>komerčná spoločnosť</b><br>2 muži<br>1.3% prítomných<br>1.0% registrovaných", "<b>podpora výskumu</b><br>2 muži<br>1.3% prítomných<br>1.0% registrovaných", "", "", "<b>iné</b><br>4 muži<br>2.6% prítomných<br>2.0% registrovaných", "<b>neuvedené</b><br>1 muž<br>0.6% prítomných<br>0.5% registrovaných"]
	},
	{
	x: [38, 2, 13, 2, 5, 3, 0, 2, 3, 1],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>38 neprítomných<br>19.1% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.0% registrovaných", "<b>výskumné pracovisko</b><br>13 neprítomných<br>6.5% registrovaných", "<b>nadnárodná organizácia</b><br>2 neprítomní<br>1.0% registrovaných", "<b>komerčná spoločnosť</b><br>5 neprítomných<br>2.5% registrovaných", "<b>podpora výskumu</b><br>3 neprítomní<br>1.5% registrovaných", "", "<b>štátna správa</b><br>2 neprítomní<br>1.0% registrovaných", "<b>iné</b><br>3 neprítomní<br>1.5% registrovaných", "<b>neuvedené</b><br>1 neprítomný/á<br>0.5% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 25],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 25 osôb<br>16.1% prítomných<br>"]
	}
];

var data_registration_timeSeries = [
	// registration_timeSeries 2021
	{
	x: [1152.70959490741, 1154.14042824074, 1253.16903935185, 1268.0909837963, 1396.64153935185, 1641.84653935185, 1801.34820601852, 1831.05042824074, 1831.95792824074, 1833.47903935185, 1833.58070601852, 1834.90376157407, 1835.04515046296, 1844.72376157407, 1845.00181712963, 1845.92792824074, 1849.97987268519, 1923.87487268519, 1928.51959490741, 1930.75042824074, 1939.15237268519, 1939.64126157407, 1940.95931712963, 1941.87903935185, 1950.38709490741, 1951.00265046296, 1988.95487268519, 1990.17931712963, 2000.49653935185, 2027.23626157407, 2072.03903935185, 2075.01515046296, 2095.22987268518, 2122.73709490741, 2132.07265046296, 2160.48570601852, 2179.94765046296, 2189.94181712963, 2230.70459490741, 2238.12237268518, 2243.31737268518, 2252.84903935185, 2255.15126157407, 2258.63292824074, 2258.87987268518, 2279.47459490741, 2289.13265046296, 2325.41987268518, 2338.35542824074, 2351.33292824074, 2357.11015046296, 2409.47237268518, 2409.78959490741, 2419.65431712963, 2419.68959490741, 2419.81292824074, 2419.92237268518, 2420.16237268518, 2420.29959490741, 2420.6134837963, 2420.75098379629, 2420.76265046296, 2421.46320601852, 2421.74570601852, 2422.50459490741, 2422.96570601852, 2423.62292824074, 2423.88265046296, 2426.10737268518, 2426.21098379629, 2431.7984837963, 2436.38431712963, 2442.57126157407, 2444.39153935185, 2445.07653935185, 2445.60959490741, 2445.82265046296, 2455.85265046296, 2455.9509837963, 2468.11126157407, 2468.85653935185, 2473.71209490741, 2479.11431712963, 2479.83348379629, 2489.92542824074, 2493.44515046296, 2498.08431712963, 2500.99292824074, 2503.38737268518, 2504.49626157407, 2512.87876157407, 2515.43987268518, 2518.02987268518, 2523.02153935185, 2524.86070601852, 2528.07709490741, 2544.82292824074, 2552.50931712963, 2577.3559837963, 2578.05265046296, 2578.09515046296, 2587.21265046296, 2587.66403935185, 2587.99542824074, 2588.12292824074, 2588.64542824074, 2588.78987268518, 2589.40265046296, 2589.64015046296, 2589.67181712963, 2589.78070601852, 2596.84292824074, 2598.47376157407],
	y: ["3", "5", "9", "10", "11", "17", "19", "21", "23", "26", "27", "28", "29", "33", "35", "36", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "52", "53", "54", "55", "56", "57", "58", "59", "60", "62", "65", "66", "70", "71", "74", "76", "77", "79", "80", "82", "84", "87", "89", "90", "91", "92", "93", "94", "95", "97", "99", "102", "103", "104", "105", "106", "108", "110", "112", "114", "115", "116", "120", "122", "125", "127", "128", "129", "130", "131", "132", "134", "135", "136", "137", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151", "153", "154", "155", "158", "160", "162", "163", "164", "165", "166", "167", "168", "169", "170", "171", "172", "173", "174", "176", "177"],
	name: 'Slovensko',
	text: ["10/21/2021 13:13:21", "10/21/2021 14:39:12", "10/25/2021 17:40:55", "10/26/2021 8:36:14", "10/31/2021 17:09:16", "11/10/2021 22:21:34", "11/17/2021 13:51:40", "11/18/2021 19:33:48", "11/18/2021 20:28:15", "11/18/2021 21:59:31", "11/18/2021 22:05:37", "11/18/2021 23:25:00", "11/18/2021 23:33:29", "11/19/2021 9:14:12", "11/19/2021 9:30:53", "11/19/2021 10:26:27", "11/19/2021 14:29:34", "11/22/2021 16:23:16", "11/22/2021 21:01:57", "11/22/2021 23:15:48", "11/23/2021 7:39:55", "11/23/2021 8:09:15", "11/23/2021 9:28:20", "11/23/2021 10:23:31", "11/23/2021 18:54:00", "11/23/2021 19:30:56", "11/25/2021 9:28:04", "11/25/2021 10:41:32", "11/25/2021 21:00:34", "11/26/2021 23:44:57", "11/28/2021 20:33:07", "11/28/2021 23:31:41", "11/29/2021 19:44:34", "11/30/2021 23:15:00", "12/1/2021 8:35:08", "12/2/2021 12:59:55", "12/3/2021 8:27:38", "12/3/2021 18:27:17", "12/5/2021 11:13:03", "12/5/2021 18:38:07", "12/5/2021 23:49:49", "12/6/2021 9:21:43", "12/6/2021 11:39:51", "12/6/2021 15:08:45", "12/6/2021 15:23:34", "12/7/2021 11:59:15", "12/7/2021 21:38:44", "12/9/2021 9:55:58", "12/9/2021 22:52:06", "12/10/2021 11:50:45", "12/10/2021 17:37:23", "12/12/2021 21:59:07", "12/12/2021 22:18:09", "12/13/2021 8:10:02", "12/13/2021 8:12:09", "12/13/2021 8:19:33", "12/13/2021 8:26:07", "12/13/2021 8:40:31", "12/13/2021 8:48:45", "12/13/2021 9:07:35", "12/13/2021 9:15:50", "12/13/2021 9:16:32", "12/13/2021 9:58:34", "12/13/2021 10:15:31", "12/13/2021 11:01:03", "12/13/2021 11:28:43", "12/13/2021 12:08:09", "12/13/2021 12:23:44", "12/13/2021 14:37:13", "12/13/2021 14:43:26", "12/13/2021 20:18:41", "12/14/2021 0:53:50", "12/14/2021 7:05:03", "12/14/2021 8:54:16", "12/14/2021 9:35:22", "12/14/2021 10:07:21", "12/14/2021 10:20:08", "12/14/2021 20:21:56", "12/14/2021 20:27:50", "12/15/2021 8:37:27", "12/15/2021 9:22:10", "12/15/2021 14:13:30", "12/15/2021 19:37:38", "12/15/2021 20:20:47", "12/16/2021 6:26:18", "12/16/2021 9:57:29", "12/16/2021 14:35:50", "12/16/2021 17:30:21", "12/16/2021 19:54:01", "12/16/2021 21:00:33", "12/17/2021 5:23:30", "12/17/2021 7:57:10", "12/17/2021 10:32:34", "12/17/2021 15:32:04", "12/17/2021 17:22:25", "12/17/2021 20:35:24", "12/18/2021 13:20:09", "12/18/2021 21:01:20", "12/19/2021 21:52:08", "12/19/2021 22:33:56", "12/19/2021 22:36:29", "12/20/2021 7:43:32", "12/20/2021 8:10:37", "12/20/2021 8:30:30", "12/20/2021 8:38:09", "12/20/2021 9:09:30", "12/20/2021 9:18:10", "12/20/2021 9:54:56", "12/20/2021 10:09:11", "12/20/2021 10:11:05", "12/20/2021 10:17:37", "12/20/2021 17:21:21", "12/20/2021 18:59:12"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>10/21/2021 13:13:21</b><br>3 osoby<br>2.0% online registrácií", "<b>10/21/2021 14:39:12</b><br>5 osôb<br>3.0% online registrácií", "<b>10/25/2021 17:40:55</b><br>9 osôb<br>5.0% online registrácií", "<b>10/26/2021 8:36:14</b><br>10 osôb<br>5.0% online registrácií", "<b>10/31/2021 17:09:16</b><br>11 osôb<br>6.0% online registrácií", "<b>11/10/2021 22:21:34</b><br>17 osôb<br>9.0% online registrácií", "<b>11/17/2021 13:51:40</b><br>19 osôb<br>10.0% online registrácií", "<b>11/18/2021 19:33:48</b><br>21 osôb<br>11.0% online registrácií", "<b>11/18/2021 20:28:15</b><br>23 osôb<br>12.0% online registrácií", "<b>11/18/2021 21:59:31</b><br>26 osôb<br>14.0% online registrácií", "<b>11/18/2021 22:05:37</b><br>27 osôb<br>15.0% online registrácií", "<b>11/18/2021 23:25:00</b><br>28 osôb<br>15.0% online registrácií", "<b>11/18/2021 23:33:29</b><br>29 osôb<br>16.0% online registrácií", "<b>11/19/2021 9:14:12</b><br>33 osôb<br>18.0% online registrácií", "<b>11/19/2021 9:30:53</b><br>35 osôb<br>19.0% online registrácií", "<b>11/19/2021 10:26:27</b><br>36 osôb<br>19.0% online registrácií", "<b>11/19/2021 14:29:34</b><br>39 osôb<br>21.0% online registrácií", "<b>11/22/2021 16:23:16</b><br>40 osôb<br>22.0% online registrácií", "<b>11/22/2021 21:01:57</b><br>41 osôb<br>22.0% online registrácií", "<b>11/22/2021 23:15:48</b><br>42 osôb<br>23.0% online registrácií", "<b>11/23/2021 7:39:55</b><br>43 osôb<br>23.0% online registrácií", "<b>11/23/2021 8:09:15</b><br>44 osôb<br>24.0% online registrácií", "<b>11/23/2021 9:28:20</b><br>45 osôb<br>24.0% online registrácií", "<b>11/23/2021 10:23:31</b><br>46 osôb<br>25.0% online registrácií", "<b>11/23/2021 18:54:00</b><br>47 osôb<br>25.0% online registrácií", "<b>11/23/2021 19:30:56</b><br>48 osôb<br>26.0% online registrácií", "<b>11/25/2021 9:28:04</b><br>52 osôb<br>28.0% online registrácií", "<b>11/25/2021 10:41:32</b><br>53 osôb<br>29.0% online registrácií", "<b>11/25/2021 21:00:34</b><br>54 osôb<br>29.0% online registrácií", "<b>11/26/2021 23:44:57</b><br>55 osôb<br>30.0% online registrácií", "<b>11/28/2021 20:33:07</b><br>56 osôb<br>30.0% online registrácií", "<b>11/28/2021 23:31:41</b><br>57 osôb<br>31.0% online registrácií", "<b>11/29/2021 19:44:34</b><br>58 osôb<br>31.0% online registrácií", "<b>11/30/2021 23:15:00</b><br>59 osôb<br>32.0% online registrácií", "<b>12/1/2021 8:35:08</b><br>60 osôb<br>32.0% online registrácií", "<b>12/2/2021 12:59:55</b><br>62 osôb<br>34.0% online registrácií", "<b>12/3/2021 8:27:38</b><br>65 osôb<br>35.0% online registrácií", "<b>12/3/2021 18:27:17</b><br>66 osôb<br>36.0% online registrácií", "<b>12/5/2021 11:13:03</b><br>70 osôb<br>38.0% online registrácií", "<b>12/5/2021 18:38:07</b><br>71 osôb<br>38.0% online registrácií", "<b>12/5/2021 23:49:49</b><br>74 osôb<br>40.0% online registrácií", "<b>12/6/2021 9:21:43</b><br>76 osôb<br>41.0% online registrácií", "<b>12/6/2021 11:39:51</b><br>77 osôb<br>42.0% online registrácií", "<b>12/6/2021 15:08:45</b><br>79 osôb<br>43.0% online registrácií", "<b>12/6/2021 15:23:34</b><br>80 osôb<br>43.0% online registrácií", "<b>12/7/2021 11:59:15</b><br>82 osôb<br>44.0% online registrácií", "<b>12/7/2021 21:38:44</b><br>84 osôb<br>45.0% online registrácií", "<b>12/9/2021 9:55:58</b><br>87 osôb<br>47.0% online registrácií", "<b>12/9/2021 22:52:06</b><br>89 osôb<br>48.0% online registrácií", "<b>12/10/2021 11:50:45</b><br>90 osôb<br>49.0% online registrácií", "<b>12/10/2021 17:37:23</b><br>91 osôb<br>49.0% online registrácií", "<b>12/12/2021 21:59:07</b><br>92 osôb<br>50.0% online registrácií", "<b>12/12/2021 22:18:09</b><br>93 osôb<br>50.0% online registrácií", "<b>12/13/2021 8:10:02</b><br>94 osôb<br>51.0% online registrácií", "<b>12/13/2021 8:12:09</b><br>95 osôb<br>51.0% online registrácií", "<b>12/13/2021 8:19:33</b><br>97 osôb<br>52.0% online registrácií", "<b>12/13/2021 8:26:07</b><br>99 osôb<br>54.0% online registrácií", "<b>12/13/2021 8:40:31</b><br>102 osôb<br>55.0% online registrácií", "<b>12/13/2021 8:48:45</b><br>103 osôb<br>56.0% online registrácií", "<b>12/13/2021 9:07:35</b><br>104 osôb<br>56.0% online registrácií", "<b>12/13/2021 9:15:50</b><br>105 osôb<br>57.0% online registrácií", "<b>12/13/2021 9:16:32</b><br>106 osôb<br>57.0% online registrácií", "<b>12/13/2021 9:58:34</b><br>108 osôb<br>58.0% online registrácií", "<b>12/13/2021 10:15:31</b><br>110 osôb<br>59.0% online registrácií", "<b>12/13/2021 11:01:03</b><br>112 osôb<br>61.0% online registrácií", "<b>12/13/2021 11:28:43</b><br>114 osôb<br>62.0% online registrácií", "<b>12/13/2021 12:08:09</b><br>115 osôb<br>62.0% online registrácií", "<b>12/13/2021 12:23:44</b><br>116 osôb<br>63.0% online registrácií", "<b>12/13/2021 14:37:13</b><br>120 osôb<br>65.0% online registrácií", "<b>12/13/2021 14:43:26</b><br>122 osôb<br>66.0% online registrácií", "<b>12/13/2021 20:18:41</b><br>125 osôb<br>68.0% online registrácií", "<b>12/14/2021 0:53:50</b><br>127 osôb<br>69.0% online registrácií", "<b>12/14/2021 7:05:03</b><br>128 osôb<br>69.0% online registrácií", "<b>12/14/2021 8:54:16</b><br>129 osôb<br>70.0% online registrácií", "<b>12/14/2021 9:35:22</b><br>130 osôb<br>70.0% online registrácií", "<b>12/14/2021 10:07:21</b><br>131 osôb<br>71.0% online registrácií", "<b>12/14/2021 10:20:08</b><br>132 osôb<br>71.0% online registrácií", "<b>12/14/2021 20:21:56</b><br>134 osôb<br>72.0% online registrácií", "<b>12/14/2021 20:27:50</b><br>135 osôb<br>73.0% online registrácií", "<b>12/15/2021 8:37:27</b><br>136 osôb<br>74.0% online registrácií", "<b>12/15/2021 9:22:10</b><br>137 osôb<br>74.0% online registrácií", "<b>12/15/2021 14:13:30</b><br>140 osôb<br>76.0% online registrácií", "<b>12/15/2021 19:37:38</b><br>141 osôb<br>76.0% online registrácií", "<b>12/15/2021 20:20:47</b><br>142 osôb<br>77.0% online registrácií", "<b>12/16/2021 6:26:18</b><br>143 osôb<br>77.0% online registrácií", "<b>12/16/2021 9:57:29</b><br>144 osôb<br>78.0% online registrácií", "<b>12/16/2021 14:35:50</b><br>145 osôb<br>78.0% online registrácií", "<b>12/16/2021 17:30:21</b><br>146 osôb<br>79.0% online registrácií", "<b>12/16/2021 19:54:01</b><br>147 osôb<br>79.0% online registrácií", "<b>12/16/2021 21:00:33</b><br>148 osôb<br>80.0% online registrácií", "<b>12/17/2021 5:23:30</b><br>149 osôb<br>81.0% online registrácií", "<b>12/17/2021 7:57:10</b><br>150 osôb<br>81.0% online registrácií", "<b>12/17/2021 10:32:34</b><br>151 osôb<br>82.0% online registrácií", "<b>12/17/2021 15:32:04</b><br>153 osôb<br>83.0% online registrácií", "<b>12/17/2021 17:22:25</b><br>154 osôb<br>83.0% online registrácií", "<b>12/17/2021 20:35:24</b><br>155 osôb<br>84.0% online registrácií", "<b>12/18/2021 13:20:09</b><br>158 osôb<br>85.0% online registrácií", "<b>12/18/2021 21:01:20</b><br>160 osôb<br>86.0% online registrácií", "<b>12/19/2021 21:52:08</b><br>162 osôb<br>88.0% online registrácií", "<b>12/19/2021 22:33:56</b><br>163 osôb<br>88.0% online registrácií", "<b>12/19/2021 22:36:29</b><br>164 osôb<br>89.0% online registrácií", "<b>12/20/2021 7:43:32</b><br>165 osôb<br>89.0% online registrácií", "<b>12/20/2021 8:10:37</b><br>166 osôb<br>90.0% online registrácií", "<b>12/20/2021 8:30:30</b><br>167 osôb<br>90.0% online registrácií", "<b>12/20/2021 8:38:09</b><br>168 osôb<br>91.0% online registrácií", "<b>12/20/2021 9:09:30</b><br>169 osôb<br>91.0% online registrácií", "<b>12/20/2021 9:18:10</b><br>170 osôb<br>92.0% online registrácií", "<b>12/20/2021 9:54:56</b><br>171 osôb<br>92.0% online registrácií", "<b>12/20/2021 10:09:11</b><br>172 osôb<br>93.0% online registrácií", "<b>12/20/2021 10:11:05</b><br>173 osôb<br>94.0% online registrácií", "<b>12/20/2021 10:17:37</b><br>174 osôb<br>94.0% online registrácií", "<b>12/20/2021 17:21:21</b><br>176 osôb<br>95.0% online registrácií", "<b>12/20/2021 18:59:12</b><br>177 osôb<br>96.0% online registrácií"]
	},
	{
	x: [1517.81709490741, 2331.47403935185, 2420.94431712963, 2425.7284837963, 2428.84903935185, 2473.47515046296, 2590.62209490741],
	y: ["14", "88", "107", "119", "124", "139", "175"],
	name: 'SR + zahraničie',
	text: ["11/5/2021 18:19:48", "12/9/2021 15:59:13", "12/13/2021 9:27:26", "12/13/2021 14:14:29", "12/13/2021 17:21:43", "12/15/2021 13:59:17", "12/20/2021 11:08:06"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>11/5/2021 18:19:48</b><br>14 osôb<br>8.0% online registrácií", "<b>12/9/2021 15:59:13</b><br>88 osôb<br>48.0% online registrácií", "<b>12/13/2021 9:27:26</b><br>107 osôb<br>58.0% online registrácií", "<b>12/13/2021 14:14:29</b><br>119 osôb<br>64.0% online registrácií", "<b>12/13/2021 17:21:43</b><br>124 osôb<br>67.0% online registrácií", "<b>12/15/2021 13:59:17</b><br>139 osôb<br>75.0% online registrácií", "<b>12/20/2021 11:08:06</b><br>175 osôb<br>95.0% online registrácií"]
	},
	{
	x: [1152.54403935185, 1152.63653935185, 1152.85653935185, 1156.97126157407, 1160.8684837963, 1252.32320601852, 1421.25987268519, 1423.49209490741, 1639.06876157407, 1641.46681712963, 1761.50181712963, 1809.72376157407, 1831.30265046296, 1832.54820601852, 1832.78987268519, 1836.62709490741, 1838.30459490741, 1844.38792824074, 1844.73070601852, 1846.40181712963, 1847.27015046296, 1968.03431712963, 1968.72709490741, 1971.73931712963, 2143.83709490741, 2167.77820601852, 2169.46431712963, 2214.46959490741, 2216.30626157407, 2218.20709490741, 2238.54876157407, 2239.25792824074, 2250.2984837963, 2255.98820601852, 2264.91820601852, 2287.55737268518, 2304.67876157407, 2305.34653935185, 2419.7684837963, 2419.85320601852, 2420.05487268518, 2420.12070601852, 2421.51237268518, 2421.80792824074, 2422.84376157407, 2424.80987268518, 2425.13765046296, 2426.17709490741, 2428.62431712963, 2434.36376157407, 2452.39848379629, 2468.94403935185, 2521.47015046296, 2537.41959490741, 2541.93570601852, 2549.17820601852, 2575.39876157407],
	y: ["1", "2", "4", "6", "7", "8", "12", "13", "15", "16", "18", "20", "22", "24", "25", "30", "31", "32", "34", "37", "38", "49", "50", "51", "61", "63", "64", "67", "68", "69", "72", "73", "75", "78", "81", "83", "85", "86", "96", "98", "100", "101", "109", "111", "113", "117", "118", "121", "123", "126", "133", "138", "152", "156", "157", "159", "161"],
	name: 'zahraničie',
	text: ["10/21/2021 13:03:25", "10/21/2021 13:08:58", "10/21/2021 13:22:10", "10/21/2021 17:29:03", "10/21/2021 21:22:53", "10/25/2021 16:50:10", "11/1/2021 17:46:22", "11/1/2021 20:00:18", "11/10/2021 19:34:54", "11/10/2021 21:58:47", "11/15/2021 22:00:53", "11/17/2021 22:14:12", "11/18/2021 19:48:56", "11/18/2021 21:03:40", "11/18/2021 21:18:10", "11/19/2021 1:08:24", "11/19/2021 2:49:03", "11/19/2021 8:54:03", "11/19/2021 9:14:37", "11/19/2021 10:54:53", "11/19/2021 11:46:59", "11/24/2021 12:32:50", "11/24/2021 13:14:24", "11/24/2021 16:15:08", "12/1/2021 20:21:00", "12/2/2021 20:17:28", "12/2/2021 21:58:38", "12/4/2021 18:58:57", "12/4/2021 20:49:09", "12/4/2021 22:43:12", "12/5/2021 19:03:42", "12/5/2021 19:46:15", "12/6/2021 6:48:41", "12/6/2021 12:30:04", "12/6/2021 21:25:52", "12/7/2021 20:04:13", "12/8/2021 13:11:30", "12/8/2021 13:51:34", "12/13/2021 8:16:53", "12/13/2021 8:21:58", "12/13/2021 8:34:04", "12/13/2021 8:38:01", "12/13/2021 10:01:31", "12/13/2021 10:19:15", "12/13/2021 11:21:24", "12/13/2021 13:19:22", "12/13/2021 13:39:02", "12/13/2021 14:41:24", "12/13/2021 17:08:14", "12/13/2021 22:52:36", "12/14/2021 16:54:41", "12/15/2021 9:27:25", "12/17/2021 13:58:59", "12/18/2021 5:55:57", "12/18/2021 10:26:55", "12/18/2021 17:41:28", "12/19/2021 19:54:42"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>10/21/2021 13:03:25</b><br>1 osoba<br>1.0% online registrácií", "<b>10/21/2021 13:08:58</b><br>2 osoby<br>1.0% online registrácií", "<b>10/21/2021 13:22:10</b><br>4 osoby<br>2.0% online registrácií", "<b>10/21/2021 17:29:03</b><br>6 osôb<br>3.0% online registrácií", "<b>10/21/2021 21:22:53</b><br>7 osôb<br>4.0% online registrácií", "<b>10/25/2021 16:50:10</b><br>8 osôb<br>4.0% online registrácií", "<b>11/1/2021 17:46:22</b><br>12 osôb<br>6.0% online registrácií", "<b>11/1/2021 20:00:18</b><br>13 osôb<br>7.0% online registrácií", "<b>11/10/2021 19:34:54</b><br>15 osôb<br>8.0% online registrácií", "<b>11/10/2021 21:58:47</b><br>16 osôb<br>9.0% online registrácií", "<b>11/15/2021 22:00:53</b><br>18 osôb<br>10.0% online registrácií", "<b>11/17/2021 22:14:12</b><br>20 osôb<br>11.0% online registrácií", "<b>11/18/2021 19:48:56</b><br>22 osôb<br>12.0% online registrácií", "<b>11/18/2021 21:03:40</b><br>24 osôb<br>13.0% online registrácií", "<b>11/18/2021 21:18:10</b><br>25 osôb<br>14.0% online registrácií", "<b>11/19/2021 1:08:24</b><br>30 osôb<br>16.0% online registrácií", "<b>11/19/2021 2:49:03</b><br>31 osôb<br>17.0% online registrácií", "<b>11/19/2021 8:54:03</b><br>32 osôb<br>17.0% online registrácií", "<b>11/19/2021 9:14:37</b><br>34 osôb<br>18.0% online registrácií", "<b>11/19/2021 10:54:53</b><br>37 osôb<br>20.0% online registrácií", "<b>11/19/2021 11:46:59</b><br>38 osôb<br>21.0% online registrácií", "<b>11/24/2021 12:32:50</b><br>49 osôb<br>26.0% online registrácií", "<b>11/24/2021 13:14:24</b><br>50 osôb<br>27.0% online registrácií", "<b>11/24/2021 16:15:08</b><br>51 osôb<br>28.0% online registrácií", "<b>12/1/2021 20:21:00</b><br>61 osôb<br>33.0% online registrácií", "<b>12/2/2021 20:17:28</b><br>63 osôb<br>34.0% online registrácií", "<b>12/2/2021 21:58:38</b><br>64 osôb<br>35.0% online registrácií", "<b>12/4/2021 18:58:57</b><br>67 osôb<br>36.0% online registrácií", "<b>12/4/2021 20:49:09</b><br>68 osôb<br>37.0% online registrácií", "<b>12/4/2021 22:43:12</b><br>69 osôb<br>37.0% online registrácií", "<b>12/5/2021 19:03:42</b><br>72 osôb<br>39.0% online registrácií", "<b>12/5/2021 19:46:15</b><br>73 osôb<br>39.0% online registrácií", "<b>12/6/2021 6:48:41</b><br>75 osôb<br>41.0% online registrácií", "<b>12/6/2021 12:30:04</b><br>78 osôb<br>42.0% online registrácií", "<b>12/6/2021 21:25:52</b><br>81 osôb<br>44.0% online registrácií", "<b>12/7/2021 20:04:13</b><br>83 osôb<br>45.0% online registrácií", "<b>12/8/2021 13:11:30</b><br>85 osôb<br>46.0% online registrácií", "<b>12/8/2021 13:51:34</b><br>86 osôb<br>46.0% online registrácií", "<b>12/13/2021 8:16:53</b><br>96 osôb<br>52.0% online registrácií", "<b>12/13/2021 8:21:58</b><br>98 osôb<br>53.0% online registrácií", "<b>12/13/2021 8:34:04</b><br>100 osôb<br>54.0% online registrácií", "<b>12/13/2021 8:38:01</b><br>101 osôb<br>55.0% online registrácií", "<b>12/13/2021 10:01:31</b><br>109 osôb<br>59.0% online registrácií", "<b>12/13/2021 10:19:15</b><br>111 osôb<br>60.0% online registrácií", "<b>12/13/2021 11:21:24</b><br>113 osôb<br>61.0% online registrácií", "<b>12/13/2021 13:19:22</b><br>117 osôb<br>63.0% online registrácií", "<b>12/13/2021 13:39:02</b><br>118 osôb<br>64.0% online registrácií", "<b>12/13/2021 14:41:24</b><br>121 osôb<br>65.0% online registrácií", "<b>12/13/2021 17:08:14</b><br>123 osôb<br>66.0% online registrácií", "<b>12/13/2021 22:52:36</b><br>126 osôb<br>68.0% online registrácií", "<b>12/14/2021 16:54:41</b><br>133 osôb<br>72.0% online registrácií", "<b>12/15/2021 9:27:25</b><br>138 osôb<br>75.0% online registrácií", "<b>12/17/2021 13:58:59</b><br>152 osôb<br>82.0% online registrácií", "<b>12/18/2021 5:55:57</b><br>156 osôb<br>84.0% online registrácií", "<b>12/18/2021 10:26:55</b><br>157 osôb<br>85.0% online registrácií", "<b>12/18/2021 17:41:28</b><br>159 osôb<br>86.0% online registrácií", "<b>12/19/2021 19:54:42</b><br>161 osôb<br>87.0% online registrácií"]
	},

	{
		x: [0, 1152.54403935185, 1152.63653935185, 1152.70959490741, 1152.85653935185, 1154.14042824074, 1156.97126157407, 1160.8684837963, 1252.32320601852, 1253.16903935185, 1268.0909837963, 1396.64153935185, 1421.25987268519, 1423.49209490741, 1517.81709490741, 1639.06876157407, 1641.46681712963, 1641.84653935185, 1761.50181712963, 1801.34820601852, 1809.72376157407, 1831.05042824074, 1831.30265046296, 1831.95792824074, 1832.54820601852, 1832.78987268519, 1833.47903935185, 1833.58070601852, 1834.90376157407, 1835.04515046296, 1836.62709490741, 1838.30459490741, 1844.38792824074, 1844.72376157407, 1844.73070601852, 1845.00181712963, 1845.92792824074, 1846.40181712963, 1847.27015046296, 1849.97987268519, 1923.87487268519, 1928.51959490741, 1930.75042824074, 1939.15237268519, 1939.64126157407, 1940.95931712963, 1941.87903935185, 1950.38709490741, 1951.00265046296, 1968.03431712963, 1968.72709490741, 1971.73931712963, 1988.95487268519, 1990.17931712963, 2000.49653935185, 2027.23626157407, 2072.03903935185, 2075.01515046296, 2095.22987268518, 2122.73709490741, 2132.07265046296, 2143.83709490741, 2160.48570601852, 2167.77820601852, 2169.46431712963, 2179.94765046296, 2189.94181712963, 2214.46959490741, 2216.30626157407, 2218.20709490741, 2230.70459490741, 2238.12237268518, 2238.54876157407, 2239.25792824074, 2243.31737268518, 2250.2984837963, 2252.84903935185, 2255.15126157407, 2255.98820601852, 2258.63292824074, 2258.87987268518, 2264.91820601852, 2279.47459490741, 2287.55737268518, 2289.13265046296, 2304.67876157407, 2305.34653935185, 2325.41987268518, 2331.47403935185, 2338.35542824074, 2351.33292824074, 2357.11015046296, 2409.47237268518, 2409.78959490741, 2419.65431712963, 2419.68959490741, 2419.7684837963, 2419.81292824074, 2419.85320601852, 2419.92237268518, 2420.05487268518, 2420.12070601852, 2420.16237268518, 2420.29959490741, 2420.6134837963, 2420.75098379629, 2420.76265046296, 2420.94431712963, 2421.46320601852, 2421.51237268518, 2421.74570601852, 2421.80792824074, 2422.50459490741, 2422.84376157407, 2422.96570601852, 2423.62292824074, 2423.88265046296, 2424.80987268518, 2425.13765046296, 2425.7284837963, 2426.10737268518, 2426.17709490741, 2426.21098379629, 2428.62431712963, 2428.84903935185, 2431.7984837963, 2434.36376157407, 2436.38431712963, 2442.57126157407, 2444.39153935185, 2445.07653935185, 2445.60959490741, 2445.82265046296, 2452.39848379629, 2455.85265046296, 2455.9509837963, 2468.11126157407, 2468.85653935185, 2468.94403935185, 2473.47515046296, 2473.71209490741, 2479.11431712963, 2479.83348379629, 2489.92542824074, 2493.44515046296, 2498.08431712963, 2500.99292824074, 2503.38737268518, 2504.49626157407, 2512.87876157407, 2515.43987268518, 2518.02987268518, 2521.47015046296, 2523.02153935185, 2524.86070601852, 2528.07709490741, 2537.41959490741, 2541.93570601852, 2544.82292824074, 2549.17820601852, 2552.50931712963, 2575.39876157407, 2577.3559837963, 2578.05265046296, 2578.09515046296, 2587.21265046296, 2587.66403935185, 2587.99542824074, 2588.12292824074, 2588.64542824074, 2588.78987268518, 2589.40265046296, 2589.64015046296, 2589.67181712963, 2589.78070601852, 2590.62209490741, 2596.84292824074, 2598.47376157407],
		y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177],
		name: "",
		type: 'bar',
		marker: {
			color: ['rgb(255, 255, 255)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)']
		},
		showlegend: false,
		visible: true,
		hoverinfo: 'skip',
		hovermode: "none"
	},
	// registration_timeSeries 2019
	{
	x: [503.284398148148, 687.809120370371, 860.248287037037, 860.267731481481, 985.38162037037, 986.640787037037, 1011.75939814815, 1012.08384259259, 1022.78939814815, 1023.43023148148, 1023.75300925926, 1025.77078703704, 1029.11134259259, 1030.31634259259, 1046.59078703704, 1047.4924537037, 1121.9824537037, 1124.24606481482, 1204.17384259259, 1224.46217592593, 1243.3124537037, 1393.99523148148, 1394.04773148148, 1550.50689814815, 1574.60634259259, 1695.80578703704, 1770.06606481481, 1848.82328703704, 1939.08439814815, 1943.13773148148, 1959.64078703704, 1987.84578703704, 1987.86106481481, 1988.72189814815, 1988.9524537037, 1989.96439814815, 1990.09634259259, 1990.22384259259, 1990.27828703704, 1995.02912037037, 1996.58689814815, 2004.97578703704, 2006.67078703704, 2007.01023148148, 2007.18273148148, 2009.42550925926, 2017.75217592593, 2031.86717592593, 2064.21023148148, 2067.93356481481, 2067.97023148148, 2084.68884259259, 2101.18717592592, 2108.32856481481, 2111.69550925926, 2158.25523148148, 2200.15634259259, 2236.03800925926, 2269.76550925926, 2271.36412037037, 2272.75800925926, 2296.34217592592, 2307.38384259259, 2323.0074537037, 2323.13634259259, 2323.28634259259, 2324.03828703704, 2330.19162037037, 2330.9174537037, 2341.83078703704, 2342.17328703704, 2353.92273148148, 2366.72050925926, 2378.09550925926, 2392.29717592592, 2395.01412037037, 2397.02856481481, 2419.33356481481, 2422.01662037037, 2431.96106481481, 2438.16884259259, 2438.36606481481, 2439.11578703704, 2439.45662037037, 2439.55412037037, 2441.6899537037, 2443.99634259259, 2444.81356481481, 2449.06523148148, 2449.7899537037, 2449.92828703704, 2451.65328703704, 2453.43412037037, 2510.0024537037, 2511.05523148148, 2512.02328703704, 2515.95884259259, 2534.39634259259, 2599.00634259259],
	y: ["5", "6", "8", "9", "11", "12", "20", "21", "23", "24", "25", "27", "29", "30", "31", "32", "38", "39", "40", "42", "43", "44", "45", "47", "48", "49", "52", "53", "55", "56", "58", "59", "60", "63", "64", "66", "67", "68", "69", "72", "74", "75", "76", "77", "78", "79", "81", "82", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "112", "113", "114", "115", "116", "117", "120", "121", "123", "124", "125", "126", "129", "130", "131", "132", "133", "134", "136", "138", "139", "140", "141", "142", "143", "144"],
	name: 'Slovensko',
	text: ["9/23/2019 17:46:45", "10/1/2019 10:18:14", "10/8/2019 14:44:35", "10/8/2019 14:45:45", "10/13/2019 19:52:35", "10/13/2019 21:08:08", "10/14/2019 22:15:15", "10/14/2019 22:34:43", "10/15/2019 9:17:03", "10/15/2019 9:55:30", "10/15/2019 10:14:52", "10/15/2019 12:15:56", "10/15/2019 15:36:22", "10/15/2019 16:48:40", "10/16/2019 9:05:08", "10/16/2019 9:59:14", "10/19/2019 12:28:38", "10/19/2019 14:44:27", "10/22/2019 22:40:07", "10/23/2019 18:57:25", "10/24/2019 13:48:26", "10/30/2019 20:29:24", "10/30/2019 20:32:33", "11/6/2019 9:00:06", "11/7/2019 9:06:04", "11/12/2019 10:18:02", "11/15/2019 12:33:39", "11/18/2019 19:19:05", "11/22/2019 13:34:45", "11/22/2019 17:37:57", "11/23/2019 10:08:08", "11/24/2019 14:20:26", "11/24/2019 14:21:21", "11/24/2019 15:13:00", "11/24/2019 15:26:50", "11/24/2019 16:27:33", "11/24/2019 16:35:28", "11/24/2019 16:43:07", "11/24/2019 16:46:23", "11/24/2019 21:31:26", "11/24/2019 23:04:54", "11/25/2019 7:28:14", "11/25/2019 9:09:56", "11/25/2019 9:30:18", "11/25/2019 9:40:39", "11/25/2019 11:55:13", "11/25/2019 20:14:49", "11/26/2019 10:21:43", "11/27/2019 18:42:18", "11/27/2019 22:25:42", "11/27/2019 22:27:54", "11/28/2019 15:11:01", "11/29/2019 7:40:55", "11/29/2019 14:49:24", "11/29/2019 18:11:25", "12/1/2019 16:45:00", "12/3/2019 10:39:04", "12/4/2019 22:31:58", "12/6/2019 8:15:37", "12/6/2019 9:51:32", "12/6/2019 11:15:10", "12/7/2019 10:50:13", "12/7/2019 21:52:43", "12/8/2019 13:30:08", "12/8/2019 13:37:52", "12/8/2019 13:46:52", "12/8/2019 14:31:59", "12/8/2019 20:41:11", "12/8/2019 21:24:44", "12/9/2019 8:19:32", "12/9/2019 8:40:05", "12/9/2019 20:25:03", "12/10/2019 9:12:55", "12/10/2019 20:35:25", "12/11/2019 10:47:31", "12/11/2019 13:30:32", "12/11/2019 15:31:24", "12/12/2019 13:49:42", "12/12/2019 16:30:41", "12/13/2019 2:27:21", "12/13/2019 8:39:49", "12/13/2019 8:51:39", "12/13/2019 9:36:38", "12/13/2019 9:57:05", "12/13/2019 10:02:56", "12/13/2019 12:11:05", "12/13/2019 14:29:28", "12/13/2019 15:18:30", "12/13/2019 19:33:36", "12/13/2019 20:17:05", "12/13/2019 20:25:23", "12/13/2019 22:08:53", "12/13/2019 23:55:44", "12/16/2019 8:29:50", "12/16/2019 9:33:00", "12/16/2019 10:31:05", "12/16/2019 14:27:13", "12/17/2019 8:53:28", "12/20/2019 1:30:04"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>9/23/2019 17:46:45</b><br>5 osôb<br>3.0% online registrácií", "<b>10/1/2019 10:18:14</b><br>6 osôb<br>3.0% online registrácií", "<b>10/8/2019 14:44:35</b><br>8 osôb<br>4.0% online registrácií", "<b>10/8/2019 14:45:45</b><br>9 osôb<br>5.0% online registrácií", "<b>10/13/2019 19:52:35</b><br>11 osôb<br>6.0% online registrácií", "<b>10/13/2019 21:08:08</b><br>12 osôb<br>6.0% online registrácií", "<b>10/14/2019 22:15:15</b><br>20 osôb<br>11.0% online registrácií", "<b>10/14/2019 22:34:43</b><br>21 osôb<br>11.0% online registrácií", "<b>10/15/2019 9:17:03</b><br>23 osôb<br>12.0% online registrácií", "<b>10/15/2019 9:55:30</b><br>24 osôb<br>13.0% online registrácií", "<b>10/15/2019 10:14:52</b><br>25 osôb<br>14.0% online registrácií", "<b>10/15/2019 12:15:56</b><br>27 osôb<br>15.0% online registrácií", "<b>10/15/2019 15:36:22</b><br>29 osôb<br>16.0% online registrácií", "<b>10/15/2019 16:48:40</b><br>30 osôb<br>16.0% online registrácií", "<b>10/16/2019 9:05:08</b><br>31 osôb<br>17.0% online registrácií", "<b>10/16/2019 9:59:14</b><br>32 osôb<br>17.0% online registrácií", "<b>10/19/2019 12:28:38</b><br>38 osôb<br>21.0% online registrácií", "<b>10/19/2019 14:44:27</b><br>39 osôb<br>21.0% online registrácií", "<b>10/22/2019 22:40:07</b><br>40 osôb<br>22.0% online registrácií", "<b>10/23/2019 18:57:25</b><br>42 osôb<br>23.0% online registrácií", "<b>10/24/2019 13:48:26</b><br>43 osôb<br>23.0% online registrácií", "<b>10/30/2019 20:29:24</b><br>44 osôb<br>24.0% online registrácií", "<b>10/30/2019 20:32:33</b><br>45 osôb<br>24.0% online registrácií", "<b>11/6/2019 9:00:06</b><br>47 osôb<br>25.0% online registrácií", "<b>11/7/2019 9:06:04</b><br>48 osôb<br>26.0% online registrácií", "<b>11/12/2019 10:18:02</b><br>49 osôb<br>26.0% online registrácií", "<b>11/15/2019 12:33:39</b><br>52 osôb<br>28.0% online registrácií", "<b>11/18/2019 19:19:05</b><br>53 osôb<br>29.0% online registrácií", "<b>11/22/2019 13:34:45</b><br>55 osôb<br>30.0% online registrácií", "<b>11/22/2019 17:37:57</b><br>56 osôb<br>30.0% online registrácií", "<b>11/23/2019 10:08:08</b><br>58 osôb<br>31.0% online registrácií", "<b>11/24/2019 14:20:26</b><br>59 osôb<br>32.0% online registrácií", "<b>11/24/2019 14:21:21</b><br>60 osôb<br>32.0% online registrácií", "<b>11/24/2019 15:13:00</b><br>63 osôb<br>34.0% online registrácií", "<b>11/24/2019 15:26:50</b><br>64 osôb<br>35.0% online registrácií", "<b>11/24/2019 16:27:33</b><br>66 osôb<br>36.0% online registrácií", "<b>11/24/2019 16:35:28</b><br>67 osôb<br>36.0% online registrácií", "<b>11/24/2019 16:43:07</b><br>68 osôb<br>37.0% online registrácií", "<b>11/24/2019 16:46:23</b><br>69 osôb<br>37.0% online registrácií", "<b>11/24/2019 21:31:26</b><br>72 osôb<br>39.0% online registrácií", "<b>11/24/2019 23:04:54</b><br>74 osôb<br>40.0% online registrácií", "<b>11/25/2019 7:28:14</b><br>75 osôb<br>41.0% online registrácií", "<b>11/25/2019 9:09:56</b><br>76 osôb<br>41.0% online registrácií", "<b>11/25/2019 9:30:18</b><br>77 osôb<br>42.0% online registrácií", "<b>11/25/2019 9:40:39</b><br>78 osôb<br>42.0% online registrácií", "<b>11/25/2019 11:55:13</b><br>79 osôb<br>43.0% online registrácií", "<b>11/25/2019 20:14:49</b><br>81 osôb<br>44.0% online registrácií", "<b>11/26/2019 10:21:43</b><br>82 osôb<br>44.0% online registrácií", "<b>11/27/2019 18:42:18</b><br>86 osôb<br>46.0% online registrácií", "<b>11/27/2019 22:25:42</b><br>87 osôb<br>47.0% online registrácií", "<b>11/27/2019 22:27:54</b><br>88 osôb<br>48.0% online registrácií", "<b>11/28/2019 15:11:01</b><br>89 osôb<br>48.0% online registrácií", "<b>11/29/2019 7:40:55</b><br>90 osôb<br>49.0% online registrácií", "<b>11/29/2019 14:49:24</b><br>91 osôb<br>49.0% online registrácií", "<b>11/29/2019 18:11:25</b><br>92 osôb<br>50.0% online registrácií", "<b>12/1/2019 16:45:00</b><br>93 osôb<br>50.0% online registrácií", "<b>12/3/2019 10:39:04</b><br>94 osôb<br>51.0% online registrácií", "<b>12/4/2019 22:31:58</b><br>95 osôb<br>51.0% online registrácií", "<b>12/6/2019 8:15:37</b><br>96 osôb<br>52.0% online registrácií", "<b>12/6/2019 9:51:32</b><br>97 osôb<br>52.0% online registrácií", "<b>12/6/2019 11:15:10</b><br>98 osôb<br>53.0% online registrácií", "<b>12/7/2019 10:50:13</b><br>99 osôb<br>54.0% online registrácií", "<b>12/7/2019 21:52:43</b><br>100 osôb<br>54.0% online registrácií", "<b>12/8/2019 13:30:08</b><br>101 osôb<br>55.0% online registrácií", "<b>12/8/2019 13:37:52</b><br>102 osôb<br>55.0% online registrácií", "<b>12/8/2019 13:46:52</b><br>103 osôb<br>56.0% online registrácií", "<b>12/8/2019 14:31:59</b><br>104 osôb<br>56.0% online registrácií", "<b>12/8/2019 20:41:11</b><br>105 osôb<br>57.0% online registrácií", "<b>12/8/2019 21:24:44</b><br>106 osôb<br>57.0% online registrácií", "<b>12/9/2019 8:19:32</b><br>107 osôb<br>58.0% online registrácií", "<b>12/9/2019 8:40:05</b><br>108 osôb<br>58.0% online registrácií", "<b>12/9/2019 20:25:03</b><br>109 osôb<br>59.0% online registrácií", "<b>12/10/2019 9:12:55</b><br>110 osôb<br>59.0% online registrácií", "<b>12/10/2019 20:35:25</b><br>112 osôb<br>61.0% online registrácií", "<b>12/11/2019 10:47:31</b><br>113 osôb<br>61.0% online registrácií", "<b>12/11/2019 13:30:32</b><br>114 osôb<br>62.0% online registrácií", "<b>12/11/2019 15:31:24</b><br>115 osôb<br>62.0% online registrácií", "<b>12/12/2019 13:49:42</b><br>116 osôb<br>63.0% online registrácií", "<b>12/12/2019 16:30:41</b><br>117 osôb<br>63.0% online registrácií", "<b>12/13/2019 2:27:21</b><br>120 osôb<br>65.0% online registrácií", "<b>12/13/2019 8:39:49</b><br>121 osôb<br>65.0% online registrácií", "<b>12/13/2019 8:51:39</b><br>123 osôb<br>66.0% online registrácií", "<b>12/13/2019 9:36:38</b><br>124 osôb<br>67.0% online registrácií", "<b>12/13/2019 9:57:05</b><br>125 osôb<br>68.0% online registrácií", "<b>12/13/2019 10:02:56</b><br>126 osôb<br>68.0% online registrácií", "<b>12/13/2019 12:11:05</b><br>129 osôb<br>70.0% online registrácií", "<b>12/13/2019 14:29:28</b><br>130 osôb<br>70.0% online registrácií", "<b>12/13/2019 15:18:30</b><br>131 osôb<br>71.0% online registrácií", "<b>12/13/2019 19:33:36</b><br>132 osôb<br>71.0% online registrácií", "<b>12/13/2019 20:17:05</b><br>133 osôb<br>72.0% online registrácií", "<b>12/13/2019 20:25:23</b><br>134 osôb<br>72.0% online registrácií", "<b>12/13/2019 22:08:53</b><br>136 osôb<br>74.0% online registrácií", "<b>12/13/2019 23:55:44</b><br>138 osôb<br>75.0% online registrácií", "<b>12/16/2019 8:29:50</b><br>139 osôb<br>75.0% online registrácií", "<b>12/16/2019 9:33:00</b><br>140 osôb<br>76.0% online registrácií", "<b>12/16/2019 10:31:05</b><br>141 osôb<br>76.0% online registrácií", "<b>12/16/2019 14:27:13</b><br>142 osôb<br>77.0% online registrácií", "<b>12/17/2019 8:53:28</b><br>143 osôb<br>77.0% online registrácií", "<b>12/20/2019 1:30:04</b><br>144 osôb<br>78.0% online registrácií"]
	},
	{
	x: [480.80412037037, 1011.42689814815, 1077.92634259259, 1706.81078703704, 1908.35773148148, 1987.97606481481, 1990.68467592593, 1995.89912037037, 2042.29717592592, 2373.98412037037],
	y: ["1", "19", "36", "50", "54", "61", "70", "73", "85", "111"],
	name: 'SR + zahraničie',
	text: ["9/22/2019 19:17:56", "10/14/2019 21:55:18", "10/17/2019 16:25:16", "11/12/2019 21:18:20", "11/21/2019 6:51:09", "11/24/2019 14:28:15", "11/24/2019 17:10:46", "11/24/2019 22:23:38", "11/26/2019 20:47:31", "12/10/2019 16:28:44"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>9/22/2019 19:17:56</b><br>1 osoba<br>1.0% online registrácií", "<b>10/14/2019 21:55:18</b><br>19 osôb<br>10.0% online registrácií", "<b>10/17/2019 16:25:16</b><br>36 osôb<br>19.0% online registrácií", "<b>11/12/2019 21:18:20</b><br>50 osôb<br>27.0% online registrácií", "<b>11/21/2019 6:51:09</b><br>54 osôb<br>29.0% online registrácií", "<b>11/24/2019 14:28:15</b><br>61 osôb<br>33.0% online registrácií", "<b>11/24/2019 17:10:46</b><br>70 osôb<br>38.0% online registrácií", "<b>11/24/2019 22:23:38</b><br>73 osôb<br>39.0% online registrácií", "<b>11/26/2019 20:47:31</b><br>85 osôb<br>46.0% online registrácií", "<b>12/10/2019 16:28:44</b><br>111 osôb<br>60.0% online registrácií"]
	},
	{
	x: [480.853009259259, 496.353287037037, 498.502175925926, 767.163564814815, 984.063009259259, 987.104953703704, 988.05162037037, 1001.86884259259, 1002.58328703704, 1003.87912037037, 1007.2124537037, 1013.3949537037, 1027.46578703704, 1048.9349537037, 1056.68578703704, 1072.58023148148, 1094.84939814815, 1204.6299537037, 1462.2574537037, 1952.56273148148, 1988.08134259259, 1989.28578703704, 1994.50078703704, 2017.27912037037, 2038.50634259259, 2041.2424537037, 2426.10078703704, 2430.79773148148, 2438.28106481481, 2439.8699537037, 2440.06328703704, 2451.1924537037, 2452.09467592592],
	y: ["2", "3", "4", "7", "10", "13", "14", "15", "16", "17", "18", "22", "28", "33", "34", "35", "37", "41", "46", "57", "62", "65", "71", "80", "83", "84", "118", "119", "122", "127", "128", "135", "137"],
	name: 'zahraničie',
	text: ["9/22/2019 19:20:52", "9/23/2019 10:50:53", "9/23/2019 12:59:49", "10/4/2019 17:39:30", "10/13/2019 18:33:28", "10/13/2019 21:35:59", "10/13/2019 22:32:47", "10/14/2019 12:21:49", "10/14/2019 13:04:41", "10/14/2019 14:22:26", "10/14/2019 17:42:26", "10/14/2019 23:53:23", "10/15/2019 13:57:38", "10/16/2019 11:25:47", "10/16/2019 19:10:50", "10/17/2019 11:04:30", "10/18/2019 9:20:39", "10/22/2019 23:07:29", "11/2/2019 16:45:08", "11/23/2019 3:03:27", "11/24/2019 14:34:34", "11/24/2019 15:46:50", "11/24/2019 20:59:44", "11/25/2019 19:46:26", "11/26/2019 17:00:04", "11/26/2019 19:44:14", "12/12/2019 20:35:44", "12/13/2019 1:17:33", "12/13/2019 8:46:33", "12/13/2019 10:21:53", "12/13/2019 10:33:29", "12/13/2019 21:41:14", "12/13/2019 22:35:22"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>9/22/2019 19:20:52</b><br>2 osoby<br>1.0% online registrácií", "<b>9/23/2019 10:50:53</b><br>3 osoby<br>2.0% online registrácií", "<b>9/23/2019 12:59:49</b><br>4 osoby<br>2.0% online registrácií", "<b>10/4/2019 17:39:30</b><br>7 osôb<br>4.0% online registrácií", "<b>10/13/2019 18:33:28</b><br>10 osôb<br>5.0% online registrácií", "<b>10/13/2019 21:35:59</b><br>13 osôb<br>7.0% online registrácií", "<b>10/13/2019 22:32:47</b><br>14 osôb<br>8.0% online registrácií", "<b>10/14/2019 12:21:49</b><br>15 osôb<br>8.0% online registrácií", "<b>10/14/2019 13:04:41</b><br>16 osôb<br>9.0% online registrácií", "<b>10/14/2019 14:22:26</b><br>17 osôb<br>9.0% online registrácií", "<b>10/14/2019 17:42:26</b><br>18 osôb<br>10.0% online registrácií", "<b>10/14/2019 23:53:23</b><br>22 osôb<br>12.0% online registrácií", "<b>10/15/2019 13:57:38</b><br>28 osôb<br>15.0% online registrácií", "<b>10/16/2019 11:25:47</b><br>33 osôb<br>18.0% online registrácií", "<b>10/16/2019 19:10:50</b><br>34 osôb<br>18.0% online registrácií", "<b>10/17/2019 11:04:30</b><br>35 osôb<br>19.0% online registrácií", "<b>10/18/2019 9:20:39</b><br>37 osôb<br>20.0% online registrácií", "<b>10/22/2019 23:07:29</b><br>41 osôb<br>22.0% online registrácií", "<b>11/2/2019 16:45:08</b><br>46 osôb<br>25.0% online registrácií", "<b>11/23/2019 3:03:27</b><br>57 osôb<br>31.0% online registrácií", "<b>11/24/2019 14:34:34</b><br>62 osôb<br>34.0% online registrácií", "<b>11/24/2019 15:46:50</b><br>65 osôb<br>35.0% online registrácií", "<b>11/24/2019 20:59:44</b><br>71 osôb<br>38.0% online registrácií", "<b>11/25/2019 19:46:26</b><br>80 osôb<br>43.0% online registrácií", "<b>11/26/2019 17:00:04</b><br>83 osôb<br>45.0% online registrácií", "<b>11/26/2019 19:44:14</b><br>84 osôb<br>45.0% online registrácií", "<b>12/12/2019 20:35:44</b><br>118 osôb<br>64.0% online registrácií", "<b>12/13/2019 1:17:33</b><br>119 osôb<br>64.0% online registrácií", "<b>12/13/2019 8:46:33</b><br>122 osôb<br>66.0% online registrácií", "<b>12/13/2019 10:21:53</b><br>127 osôb<br>69.0% online registrácií", "<b>12/13/2019 10:33:29</b><br>128 osôb<br>69.0% online registrácií", "<b>12/13/2019 21:41:14</b><br>135 osôb<br>73.0% online registrácií", "<b>12/13/2019 22:35:22</b><br>137 osôb<br>74.0% online registrácií"]
	},

	{
		x: [0, 480.80412037037, 480.853009259259, 496.353287037037, 498.502175925926, 503.284398148148, 687.809120370371, 767.163564814815, 860.248287037037, 860.267731481481, 984.063009259259, 985.38162037037, 986.640787037037, 987.104953703704, 988.05162037037, 1001.86884259259, 1002.58328703704, 1003.87912037037, 1007.2124537037, 1011.42689814815, 1011.75939814815, 1012.08384259259, 1013.3949537037, 1022.78939814815, 1023.43023148148, 1023.75300925926, 1025.77078703704, 1027.46578703704, 1029.11134259259, 1030.31634259259, 1046.59078703704, 1047.4924537037, 1048.9349537037, 1056.68578703704, 1072.58023148148, 1077.92634259259, 1094.84939814815, 1121.9824537037, 1124.24606481482, 1204.17384259259, 1204.6299537037, 1224.46217592593, 1243.3124537037, 1393.99523148148, 1394.04773148148, 1462.2574537037, 1550.50689814815, 1574.60634259259, 1695.80578703704, 1706.81078703704, 1770.06606481481, 1848.82328703704, 1908.35773148148, 1939.08439814815, 1943.13773148148, 1952.56273148148, 1959.64078703704, 1987.84578703704, 1987.86106481481, 1987.97606481481, 1988.08134259259, 1988.72189814815, 1988.9524537037, 1989.28578703704, 1989.96439814815, 1990.09634259259, 1990.22384259259, 1990.27828703704, 1990.68467592593, 1994.50078703704, 1995.02912037037, 1995.89912037037, 1996.58689814815, 2004.97578703704, 2006.67078703704, 2007.01023148148, 2007.18273148148, 2009.42550925926, 2017.27912037037, 2017.75217592593, 2031.86717592593, 2038.50634259259, 2041.2424537037, 2042.29717592592, 2064.21023148148, 2067.93356481481, 2067.97023148148, 2084.68884259259, 2101.18717592592, 2108.32856481481, 2111.69550925926, 2158.25523148148, 2200.15634259259, 2236.03800925926, 2269.76550925926, 2271.36412037037, 2272.75800925926, 2296.34217592592, 2307.38384259259, 2323.0074537037, 2323.13634259259, 2323.28634259259, 2324.03828703704, 2330.19162037037, 2330.9174537037, 2341.83078703704, 2342.17328703704, 2353.92273148148, 2366.72050925926, 2373.98412037037, 2378.09550925926, 2392.29717592592, 2395.01412037037, 2397.02856481481, 2419.33356481481, 2422.01662037037, 2426.10078703704, 2430.79773148148, 2431.96106481481, 2438.16884259259, 2438.28106481481, 2438.36606481481, 2439.11578703704, 2439.45662037037, 2439.55412037037, 2439.8699537037, 2440.06328703704, 2441.6899537037, 2443.99634259259, 2444.81356481481, 2449.06523148148, 2449.7899537037, 2449.92828703704, 2451.1924537037, 2451.65328703704, 2452.09467592592, 2453.43412037037, 2510.0024537037, 2511.05523148148, 2512.02328703704, 2515.95884259259, 2534.39634259259, 2599.00634259259],
		y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144],
		name: "",
		type: 'bar',
		marker: {
			color: ['rgb(255, 255, 255)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)']
		},
		showlegend: false,
		visible: false,
		hoverinfo: 'skip',
		hovermode: "none"
	},
	// registration_timeSeries 2018
	{
	x: [24.38125, 31.1479166666667, 36.0979166666667, 55.0979166666667, 59.2645833333333, 59.88125, 69.4645833333333, 72.53125, 72.6979166666667, 75.5645833333333, 77.13125, 216.48125, 240.03125, 506.53125, 718.997916666667, 719.064583333333, 719.58125, 732.53125, 732.614583333334, 733.08125, 733.364583333333, 743.047916666667, 803.03125, 843.297916666667, 995.68125, 1039.26458333333, 1082.64791666667, 1138.88125, 1517.38125, 1524.68125, 1536.39791666667, 1539.88125, 1542.34791666667, 1544.84791666667, 1645.33125, 1667.43125, 2047.78125, 2138.54791666667, 2196.09791666667, 2220.83125, 2234.94791666667, 2269.99791666667, 2282.03125, 2304.08125, 2306.19791666667, 2307.23125, 2312.13125, 2315.69791666667, 2332.66458333333, 2375.63125, 2378.04791666667, 2380.43125, 2382.09791666667, 2384.76458333333, 2385.23125, 2386.69791666667, 2387.56458333333, 2399.71458333333, 2404.88125, 2406.14791666667, 2410.09791666667, 2412.03125, 2426.79791666667, 2450.76458333333, 2456.93125, 2460.14791666667, 2472.83125, 2472.86458333333, 2473.06458333333, 2483.93125, 2485.24791666667, 2571.51458333333],
	y: ["1", "2", "3", "4", "6", "8", "9", "10", "11", "12", "14", "16", "17", "18", "22", "23", "25", "27", "28", "31", "32", "33", "36", "37", "39", "40", "44", "46", "47", "48", "49", "50", "51", "52", "53", "54", "56", "58", "60", "62", "63", "69", "70", "72", "73", "74", "77", "78", "79", "80", "82", "83", "84", "85", "86", "87", "88", "89", "91", "92", "94", "95", "97", "99", "100", "101", "102", "103", "104", "105", "106", "108"],
	name: 'Slovensko',
	text: ["09/03/18 09:09 AM", "09/03/18 03:55 PM", "09/03/18 08:52 PM", "09/04/18 03:52 PM", "09/04/18 08:02 PM", "09/04/18 08:39 PM", "09/05/18 06:14 AM", "09/05/18 09:18 AM", "09/05/18 09:28 AM", "09/05/18 12:20 PM", "09/05/18 01:54 PM", "09/11/18 09:15 AM", "09/12/18 08:48 AM", "09/23/18 11:18 AM", "10/02/18 07:46 AM", "10/02/18 07:50 AM", "10/02/18 08:21 AM", "10/02/18 09:18 PM", "10/02/18 09:23 PM", "10/02/18 09:51 PM", "10/02/18 10:08 PM", "10/03/18 07:49 AM", "10/05/18 07:48 PM", "10/07/18 12:04 PM", "10/13/18 08:27 PM", "10/15/18 04:02 PM", "10/17/18 11:25 AM", "10/19/18 07:39 PM", "11/04/18 02:09 PM", "11/04/18 09:27 PM", "11/05/18 09:10 AM", "11/05/18 12:39 PM", "11/05/18 03:07 PM", "11/05/18 05:37 PM", "11/09/18 10:06 PM", "11/10/18 08:12 PM", "11/26/18 04:33 PM", "11/30/18 11:19 AM", "12/02/18 08:52 PM", "12/03/18 09:36 PM", "12/04/18 11:43 AM", "12/05/18 10:46 PM", "12/06/18 10:48 AM", "12/07/18 08:51 AM", "12/07/18 10:58 AM", "12/07/18 12:00 PM", "12/07/18 04:54 PM", "12/07/18 08:28 PM", "12/08/18 01:26 PM", "12/10/18 08:24 AM", "12/10/18 10:49 AM", "12/10/18 01:12 PM", "12/10/18 02:52 PM", "12/10/18 05:32 PM", "12/10/18 06:00 PM", "12/10/18 07:28 PM", "12/10/18 08:20 PM", "12/11/18 08:29 AM", "12/11/18 01:39 PM", "12/11/18 02:55 PM", "12/11/18 06:52 PM", "12/11/18 08:48 PM", "12/12/18 11:34 AM", "12/13/18 11:32 AM", "12/13/18 05:42 PM", "12/13/18 08:55 PM", "12/14/18 09:36 AM", "12/14/18 09:38 AM", "12/14/18 09:50 AM", "12/14/18 08:42 PM", "12/14/18 10:01 PM", "12/18/18 12:17 PM"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>09/03/18 09:09 AM</b><br>1 osoba<br>1.0% online registrácií", "<b>09/03/18 03:55 PM</b><br>2 osoby<br>1.0% online registrácií", "<b>09/03/18 08:52 PM</b><br>3 osoby<br>2.0% online registrácií", "<b>09/04/18 03:52 PM</b><br>4 osoby<br>2.0% online registrácií", "<b>09/04/18 08:02 PM</b><br>6 osôb<br>3.0% online registrácií", "<b>09/04/18 08:39 PM</b><br>8 osôb<br>4.0% online registrácií", "<b>09/05/18 06:14 AM</b><br>9 osôb<br>5.0% online registrácií", "<b>09/05/18 09:18 AM</b><br>10 osôb<br>5.0% online registrácií", "<b>09/05/18 09:28 AM</b><br>11 osôb<br>6.0% online registrácií", "<b>09/05/18 12:20 PM</b><br>12 osôb<br>6.0% online registrácií", "<b>09/05/18 01:54 PM</b><br>14 osôb<br>8.0% online registrácií", "<b>09/11/18 09:15 AM</b><br>16 osôb<br>9.0% online registrácií", "<b>09/12/18 08:48 AM</b><br>17 osôb<br>9.0% online registrácií", "<b>09/23/18 11:18 AM</b><br>18 osôb<br>10.0% online registrácií", "<b>10/02/18 07:46 AM</b><br>22 osôb<br>12.0% online registrácií", "<b>10/02/18 07:50 AM</b><br>23 osôb<br>12.0% online registrácií", "<b>10/02/18 08:21 AM</b><br>25 osôb<br>14.0% online registrácií", "<b>10/02/18 09:18 PM</b><br>27 osôb<br>15.0% online registrácií", "<b>10/02/18 09:23 PM</b><br>28 osôb<br>15.0% online registrácií", "<b>10/02/18 09:51 PM</b><br>31 osôb<br>17.0% online registrácií", "<b>10/02/18 10:08 PM</b><br>32 osôb<br>17.0% online registrácií", "<b>10/03/18 07:49 AM</b><br>33 osôb<br>18.0% online registrácií", "<b>10/05/18 07:48 PM</b><br>36 osôb<br>19.0% online registrácií", "<b>10/07/18 12:04 PM</b><br>37 osôb<br>20.0% online registrácií", "<b>10/13/18 08:27 PM</b><br>39 osôb<br>21.0% online registrácií", "<b>10/15/18 04:02 PM</b><br>40 osôb<br>22.0% online registrácií", "<b>10/17/18 11:25 AM</b><br>44 osôb<br>24.0% online registrácií", "<b>10/19/18 07:39 PM</b><br>46 osôb<br>25.0% online registrácií", "<b>11/04/18 02:09 PM</b><br>47 osôb<br>25.0% online registrácií", "<b>11/04/18 09:27 PM</b><br>48 osôb<br>26.0% online registrácií", "<b>11/05/18 09:10 AM</b><br>49 osôb<br>26.0% online registrácií", "<b>11/05/18 12:39 PM</b><br>50 osôb<br>27.0% online registrácií", "<b>11/05/18 03:07 PM</b><br>51 osôb<br>28.0% online registrácií", "<b>11/05/18 05:37 PM</b><br>52 osôb<br>28.0% online registrácií", "<b>11/09/18 10:06 PM</b><br>53 osôb<br>29.0% online registrácií", "<b>11/10/18 08:12 PM</b><br>54 osôb<br>29.0% online registrácií", "<b>11/26/18 04:33 PM</b><br>56 osôb<br>30.0% online registrácií", "<b>11/30/18 11:19 AM</b><br>58 osôb<br>31.0% online registrácií", "<b>12/02/18 08:52 PM</b><br>60 osôb<br>32.0% online registrácií", "<b>12/03/18 09:36 PM</b><br>62 osôb<br>34.0% online registrácií", "<b>12/04/18 11:43 AM</b><br>63 osôb<br>34.0% online registrácií", "<b>12/05/18 10:46 PM</b><br>69 osôb<br>37.0% online registrácií", "<b>12/06/18 10:48 AM</b><br>70 osôb<br>38.0% online registrácií", "<b>12/07/18 08:51 AM</b><br>72 osôb<br>39.0% online registrácií", "<b>12/07/18 10:58 AM</b><br>73 osôb<br>39.0% online registrácií", "<b>12/07/18 12:00 PM</b><br>74 osôb<br>40.0% online registrácií", "<b>12/07/18 04:54 PM</b><br>77 osôb<br>42.0% online registrácií", "<b>12/07/18 08:28 PM</b><br>78 osôb<br>42.0% online registrácií", "<b>12/08/18 01:26 PM</b><br>79 osôb<br>43.0% online registrácií", "<b>12/10/18 08:24 AM</b><br>80 osôb<br>43.0% online registrácií", "<b>12/10/18 10:49 AM</b><br>82 osôb<br>44.0% online registrácií", "<b>12/10/18 01:12 PM</b><br>83 osôb<br>45.0% online registrácií", "<b>12/10/18 02:52 PM</b><br>84 osôb<br>45.0% online registrácií", "<b>12/10/18 05:32 PM</b><br>85 osôb<br>46.0% online registrácií", "<b>12/10/18 06:00 PM</b><br>86 osôb<br>46.0% online registrácií", "<b>12/10/18 07:28 PM</b><br>87 osôb<br>47.0% online registrácií", "<b>12/10/18 08:20 PM</b><br>88 osôb<br>48.0% online registrácií", "<b>12/11/18 08:29 AM</b><br>89 osôb<br>48.0% online registrácií", "<b>12/11/18 01:39 PM</b><br>91 osôb<br>49.0% online registrácií", "<b>12/11/18 02:55 PM</b><br>92 osôb<br>50.0% online registrácií", "<b>12/11/18 06:52 PM</b><br>94 osôb<br>51.0% online registrácií", "<b>12/11/18 08:48 PM</b><br>95 osôb<br>51.0% online registrácií", "<b>12/12/18 11:34 AM</b><br>97 osôb<br>52.0% online registrácií", "<b>12/13/18 11:32 AM</b><br>99 osôb<br>54.0% online registrácií", "<b>12/13/18 05:42 PM</b><br>100 osôb<br>54.0% online registrácií", "<b>12/13/18 08:55 PM</b><br>101 osôb<br>55.0% online registrácií", "<b>12/14/18 09:36 AM</b><br>102 osôb<br>55.0% online registrácií", "<b>12/14/18 09:38 AM</b><br>103 osôb<br>56.0% online registrácií", "<b>12/14/18 09:50 AM</b><br>104 osôb<br>56.0% online registrácií", "<b>12/14/18 08:42 PM</b><br>105 osôb<br>57.0% online registrácií", "<b>12/14/18 10:01 PM</b><br>106 osôb<br>57.0% online registrácií", "<b>12/18/18 12:17 PM</b><br>108 osôb<br>58.0% online registrácií"]
	},
	{
	x: [1950.73125],
	y: ["55"],
	name: 'SR + zahraničie',
	text: ["11/22/18 03:30 PM"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>11/22/18 03:30 PM</b><br>55 osôb<br>30.0% online registrácií"]
	},
	{
	x: [56.13125, 59.48125, 75.98125, 96.0645833333333, 512.58125, 717.464583333333, 718.947916666667, 719.464583333333, 724.914583333333, 732.697916666667, 732.83125, 747.897916666667, 753.547916666667, 963.53125, 1062.26458333333, 1062.73125, 1067.01458333333, 1101.93125, 2052.18125, 2167.64791666667, 2217.18125, 2257.43125, 2260.31458333333, 2261.73125, 2262.53125, 2269.71458333333, 2295.48125, 2307.93125, 2310.29791666667, 2376.08125, 2406.44791666667, 2423.69791666667, 2450.21458333333, 2545.29791666667],
	y: ["5", "7", "13", "15", "19", "20", "21", "24", "26", "29", "30", "34", "35", "38", "41", "42", "43", "45", "57", "59", "61", "64", "65", "66", "67", "68", "71", "75", "76", "81", "93", "96", "98", "107"],
	name: 'zahraničie',
	text: ["09/04/18 04:54 PM", "09/04/18 08:15 PM", "09/05/18 12:45 PM", "09/06/18 08:50 AM", "09/23/18 05:21 PM", "10/02/18 06:14 AM", "10/02/18 07:43 AM", "10/02/18 08:14 AM", "10/02/18 01:41 PM", "10/02/18 09:28 PM", "10/02/18 09:36 PM", "10/03/18 12:40 PM", "10/03/18 06:19 PM", "10/12/18 12:18 PM", "10/16/18 03:02 PM", "10/16/18 03:30 PM", "10/16/18 07:47 PM", "10/18/18 06:42 AM", "11/26/18 08:57 PM", "12/01/18 04:25 PM", "12/03/18 05:57 PM", "12/05/18 10:12 AM", "12/05/18 01:05 PM", "12/05/18 02:30 PM", "12/05/18 03:18 PM", "12/05/18 10:29 PM", "12/07/18 12:15 AM", "12/07/18 12:42 PM", "12/07/18 03:04 PM", "12/10/18 08:51 AM", "12/11/18 03:13 PM", "12/12/18 08:28 AM", "12/13/18 10:59 AM", "12/17/18 10:04 AM"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>09/04/18 04:54 PM</b><br>5 osôb<br>3.0% online registrácií", "<b>09/04/18 08:15 PM</b><br>7 osôb<br>4.0% online registrácií", "<b>09/05/18 12:45 PM</b><br>13 osôb<br>7.0% online registrácií", "<b>09/06/18 08:50 AM</b><br>15 osôb<br>8.0% online registrácií", "<b>09/23/18 05:21 PM</b><br>19 osôb<br>10.0% online registrácií", "<b>10/02/18 06:14 AM</b><br>20 osôb<br>11.0% online registrácií", "<b>10/02/18 07:43 AM</b><br>21 osôb<br>11.0% online registrácií", "<b>10/02/18 08:14 AM</b><br>24 osôb<br>13.0% online registrácií", "<b>10/02/18 01:41 PM</b><br>26 osôb<br>14.0% online registrácií", "<b>10/02/18 09:28 PM</b><br>29 osôb<br>16.0% online registrácií", "<b>10/02/18 09:36 PM</b><br>30 osôb<br>16.0% online registrácií", "<b>10/03/18 12:40 PM</b><br>34 osôb<br>18.0% online registrácií", "<b>10/03/18 06:19 PM</b><br>35 osôb<br>19.0% online registrácií", "<b>10/12/18 12:18 PM</b><br>38 osôb<br>21.0% online registrácií", "<b>10/16/18 03:02 PM</b><br>41 osôb<br>22.0% online registrácií", "<b>10/16/18 03:30 PM</b><br>42 osôb<br>23.0% online registrácií", "<b>10/16/18 07:47 PM</b><br>43 osôb<br>23.0% online registrácií", "<b>10/18/18 06:42 AM</b><br>45 osôb<br>24.0% online registrácií", "<b>11/26/18 08:57 PM</b><br>57 osôb<br>31.0% online registrácií", "<b>12/01/18 04:25 PM</b><br>59 osôb<br>32.0% online registrácií", "<b>12/03/18 05:57 PM</b><br>61 osôb<br>33.0% online registrácií", "<b>12/05/18 10:12 AM</b><br>64 osôb<br>35.0% online registrácií", "<b>12/05/18 01:05 PM</b><br>65 osôb<br>35.0% online registrácií", "<b>12/05/18 02:30 PM</b><br>66 osôb<br>36.0% online registrácií", "<b>12/05/18 03:18 PM</b><br>67 osôb<br>36.0% online registrácií", "<b>12/05/18 10:29 PM</b><br>68 osôb<br>37.0% online registrácií", "<b>12/07/18 12:15 AM</b><br>71 osôb<br>38.0% online registrácií", "<b>12/07/18 12:42 PM</b><br>75 osôb<br>41.0% online registrácií", "<b>12/07/18 03:04 PM</b><br>76 osôb<br>41.0% online registrácií", "<b>12/10/18 08:51 AM</b><br>81 osôb<br>44.0% online registrácií", "<b>12/11/18 03:13 PM</b><br>93 osôb<br>50.0% online registrácií", "<b>12/12/18 08:28 AM</b><br>96 osôb<br>52.0% online registrácií", "<b>12/13/18 10:59 AM</b><br>98 osôb<br>53.0% online registrácií", "<b>12/17/18 10:04 AM</b><br>107 osôb<br>58.0% online registrácií"]
	},
	{
	x: [2400.23125],
	y: ["90"],
	name: 'neuvedené',
	text: ["12/11/18 09:00 AM"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>12/11/18 09:00 AM</b><br>90 osôb<br>49.0% online registrácií"]
	},
	{
		x: [0, 24.38125, 31.1479166666667, 36.0979166666667, 55.0979166666667, 56.13125, 59.2645833333333, 59.48125, 59.88125, 69.4645833333333, 72.53125, 72.6979166666667, 75.5645833333333, 75.98125, 77.13125, 96.0645833333333, 216.48125, 240.03125, 506.53125, 512.58125, 717.464583333333, 718.947916666667, 718.997916666667, 719.064583333333, 719.464583333333, 719.58125, 724.914583333333, 732.53125, 732.614583333334, 732.697916666667, 732.83125, 733.08125, 733.364583333333, 743.047916666667, 747.897916666667, 753.547916666667, 803.03125, 843.297916666667, 963.53125, 995.68125, 1039.26458333333, 1062.26458333333, 1062.73125, 1067.01458333333, 1082.64791666667, 1101.93125, 1138.88125, 1517.38125, 1524.68125, 1536.39791666667, 1539.88125, 1542.34791666667, 1544.84791666667, 1645.33125, 1667.43125, 1950.73125, 2047.78125, 2052.18125, 2138.54791666667, 2167.64791666667, 2196.09791666667, 2217.18125, 2220.83125, 2234.94791666667, 2257.43125, 2260.31458333333, 2261.73125, 2262.53125, 2269.71458333333, 2269.99791666667, 2282.03125, 2295.48125, 2304.08125, 2306.19791666667, 2307.23125, 2307.93125, 2310.29791666667, 2312.13125, 2315.69791666667, 2332.66458333333, 2375.63125, 2376.08125, 2378.04791666667, 2380.43125, 2382.09791666667, 2384.76458333333, 2385.23125, 2386.69791666667, 2387.56458333333, 2399.71458333333, 2400.23125, 2404.88125, 2406.14791666667, 2406.44791666667, 2410.09791666667, 2412.03125, 2423.69791666667, 2426.79791666667, 2450.21458333333, 2450.76458333333, 2456.93125, 2460.14791666667, 2472.83125, 2472.86458333333, 2473.06458333333, 2483.93125, 2485.24791666667, 2545.29791666667, 2571.51458333333],
		y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108],
		name: "",
		type: 'bar',
		marker: {
			color: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)']
		},
		showlegend: false,
		visible: false,
		hoverinfo: 'skip',
		hovermode: "none"
	},
	// registration_timeSeries 2017
	{
	x: [433.8128587963, 437.6234143519, 462.0439699074, 583.7114699074, 1259.8950810185, 1262.5178587963, 1269.9864699074, 1270.2753587963, 1272.2614699074, 1273.3292476852, 1274.0506365741, 1274.0692476852, 1274.0931365741, 1274.2461921296, 1274.6692476852, 1274.8078587963, 1275.8700810185, 1277.4536921296, 1279.1050810185, 1283.4323032408, 1283.5664699074, 1297.3278587963, 1300.4684143519, 1319.8356365741, 1321.7423032408, 1322.2048032408, 1358.1017476852, 1379.1278587963, 1402.6981365741, 1418.0764699074, 1444.0939699074, 1464.4948032408, 1465.8964699074, 1474.8206365741, 1501.5036921296, 1514.1217476852, 1519.0159143519, 1567.0009143519, 1613.0836921296, 1694.7798032408, 1764.6759143519, 1782.0498032408, 1799.0523032408, 1959.4428587963, 1968.8756365741, 1971.9678587963, 1992.7948032408, 1992.9603587963, 1994.9642476852, 2019.9350810185, 2031.4275810185, 2125.3906365741, 2141.1928587963, 2163.8889699074, 2218.2909143519, 2218.6334143519, 2234.9767476852, 2240.034525463, 2255.6586921296, 2287.107025463, 2287.1236921296, 2319.4431365741, 2404.539525463, 2439.7061921296, 2448.8661921296, 2449.1517476852, 2449.3859143519, 2450.102025463, 2452.2886921296, 2453.824525463, 2453.839525463, 2471.8289699074, 2475.0706365741, 2476.9711921296, 2478.744525463, 2485.3811921296, 2494.9373032408, 2495.3709143519, 2496.3939699074, 2498.2242476852, 2498.909525463, 2498.9475810185, 2499.929525463, 2499.9548032408, 2501.3967476852, 2502.5659143519, 2503.3234143519, 2503.5798032408, 2503.7892476852, 2527.1681365741, 2533.7161921296, 2534.8773032408, 2545.4311921296, 2547.9809143519, 2549.754525463, 2549.8809143519, 2550.6317476852, 2553.5286921296, 2554.6806365741, 2557.0564699074, 2557.5317476852, 2568.2375810185, 2568.3406365741, 2569.1036921296, 2572.0973032407, 2572.1525810185, 2572.157025463, 2572.3373032408, 2572.7428587963, 2572.9453587963, 2574.7886921296, 2575.6798032408],
	y: ["2", "3", "4", "5", "7", "8", "10", "11", "13", "15", "16", "17", "18", "19", "20", "22", "24", "25", "27", "29", "30", "31", "32", "34", "35", "36", "38", "40", "41", "42", "44", "46", "47", "49", "54", "56", "57", "59", "61", "65", "67", "69", "71", "75", "76", "77", "78", "79", "80", "81", "82", "87", "88", "89", "91", "92", "93", "95", "96", "97", "98", "101", "103", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "116", "117", "123", "125", "126", "128", "130", "131", "132", "134", "135", "137", "138", "139", "140", "141", "143", "145", "147", "151", "153", "154", "155", "156", "158", "159", "161", "162", "164", "165", "166", "169", "170", "171", "172", "176", "178", "180", "182"],
	name: 'Slovensko',
	text: ["17/09/20 10:34", "17/09/20 14:22", "17/09/21 14:47", "17/09/26 16:27", "17/10/24 20:38", "17/10/24 23:16", "17/10/25 06:44", "17/10/25 07:01", "17/10/25 09:00", "17/10/25 10:05", "17/10/25 10:48", "17/10/25 10:49", "17/10/25 10:50", "17/10/25 11:00", "17/10/25 11:25", "17/10/25 11:33", "17/10/25 12:37", "17/10/25 14:12", "17/10/25 15:51", "17/10/25 20:11", "17/10/25 20:19", "17/10/26 10:04", "17/10/26 13:13", "17/10/27 08:35", "17/10/27 10:29", "17/10/27 10:57", "17/10/28 22:51", "17/10/29 19:52", "17/10/30 19:27", "17/10/31 10:49", "17/11/1 12:50", "17/11/2 09:14", "17/11/2 10:39", "17/11/2 19:34", "17/11/3 22:15", "17/11/4 10:52", "17/11/4 15:46", "17/11/6 15:45", "17/11/8 13:50", "17/11/11 23:32", "17/11/14 21:25", "17/11/15 14:48", "17/11/16 07:48", "17/11/23 00:11", "17/11/23 09:37", "17/11/23 12:43", "17/11/24 09:32", "17/11/24 09:42", "17/11/24 11:43", "17/11/25 12:41", "17/11/26 00:10", "17/11/29 22:08", "17/11/30 13:56", "17/12/1 12:38", "17/12/3 19:02", "17/12/3 19:23", "17/12/4 11:43", "17/12/4 16:47", "17/12/5 08:24", "17/12/6 15:51", "17/12/6 15:52", "17/12/8 00:11", "17/12/11 13:17", "17/12/13 00:27", "17/12/13 09:37", "17/12/13 09:54", "17/12/13 10:08", "17/12/13 10:51", "17/12/13 13:02", "17/12/13 14:34", "17/12/13 14:35", "17/12/14 08:35", "17/12/14 11:49", "17/12/14 13:43", "17/12/14 15:29", "17/12/14 22:08", "17/12/15 07:41", "17/12/15 08:07", "17/12/15 09:08", "17/12/15 10:58", "17/12/15 11:39", "17/12/15 11:42", "17/12/15 12:41", "17/12/15 12:42", "17/12/15 14:09", "17/12/15 15:19", "17/12/15 16:04", "17/12/15 16:20", "17/12/15 16:32", "17/12/16 15:55", "17/12/16 22:28", "17/12/16 23:37", "17/12/17 10:11", "17/12/17 12:44", "17/12/17 14:30", "17/12/17 14:38", "17/12/17 15:23", "17/12/17 18:17", "17/12/17 19:26", "17/12/17 21:48", "17/12/17 22:17", "17/12/18 08:59", "17/12/18 09:05", "17/12/18 09:51", "17/12/18 12:51", "17/12/18 12:54", "17/12/18 12:54", "17/12/18 13:05", "17/12/18 13:29", "17/12/18 13:42", "17/12/18 15:32", "17/12/18 16:26"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>17/09/20 10:34</b><br>2 osoby<br>1.0% online registrácií", "<b>17/09/20 14:22</b><br>3 osoby<br>2.0% online registrácií", "<b>17/09/21 14:47</b><br>4 osoby<br>2.0% online registrácií", "<b>17/09/26 16:27</b><br>5 osôb<br>3.0% online registrácií", "<b>17/10/24 20:38</b><br>7 osôb<br>4.0% online registrácií", "<b>17/10/24 23:16</b><br>8 osôb<br>4.0% online registrácií", "<b>17/10/25 06:44</b><br>10 osôb<br>5.0% online registrácií", "<b>17/10/25 07:01</b><br>11 osôb<br>6.0% online registrácií", "<b>17/10/25 09:00</b><br>13 osôb<br>7.0% online registrácií", "<b>17/10/25 10:05</b><br>15 osôb<br>8.0% online registrácií", "<b>17/10/25 10:48</b><br>16 osôb<br>9.0% online registrácií", "<b>17/10/25 10:49</b><br>17 osôb<br>9.0% online registrácií", "<b>17/10/25 10:50</b><br>18 osôb<br>10.0% online registrácií", "<b>17/10/25 11:00</b><br>19 osôb<br>10.0% online registrácií", "<b>17/10/25 11:25</b><br>20 osôb<br>11.0% online registrácií", "<b>17/10/25 11:33</b><br>22 osôb<br>12.0% online registrácií", "<b>17/10/25 12:37</b><br>24 osôb<br>13.0% online registrácií", "<b>17/10/25 14:12</b><br>25 osôb<br>14.0% online registrácií", "<b>17/10/25 15:51</b><br>27 osôb<br>15.0% online registrácií", "<b>17/10/25 20:11</b><br>29 osôb<br>16.0% online registrácií", "<b>17/10/25 20:19</b><br>30 osôb<br>16.0% online registrácií", "<b>17/10/26 10:04</b><br>31 osôb<br>17.0% online registrácií", "<b>17/10/26 13:13</b><br>32 osôb<br>17.0% online registrácií", "<b>17/10/27 08:35</b><br>34 osôb<br>18.0% online registrácií", "<b>17/10/27 10:29</b><br>35 osôb<br>19.0% online registrácií", "<b>17/10/27 10:57</b><br>36 osôb<br>19.0% online registrácií", "<b>17/10/28 22:51</b><br>38 osôb<br>21.0% online registrácií", "<b>17/10/29 19:52</b><br>40 osôb<br>22.0% online registrácií", "<b>17/10/30 19:27</b><br>41 osôb<br>22.0% online registrácií", "<b>17/10/31 10:49</b><br>42 osôb<br>23.0% online registrácií", "<b>17/11/1 12:50</b><br>44 osôb<br>24.0% online registrácií", "<b>17/11/2 09:14</b><br>46 osôb<br>25.0% online registrácií", "<b>17/11/2 10:39</b><br>47 osôb<br>25.0% online registrácií", "<b>17/11/2 19:34</b><br>49 osôb<br>26.0% online registrácií", "<b>17/11/3 22:15</b><br>54 osôb<br>29.0% online registrácií", "<b>17/11/4 10:52</b><br>56 osôb<br>30.0% online registrácií", "<b>17/11/4 15:46</b><br>57 osôb<br>31.0% online registrácií", "<b>17/11/6 15:45</b><br>59 osôb<br>32.0% online registrácií", "<b>17/11/8 13:50</b><br>61 osôb<br>33.0% online registrácií", "<b>17/11/11 23:32</b><br>65 osôb<br>35.0% online registrácií", "<b>17/11/14 21:25</b><br>67 osôb<br>36.0% online registrácií", "<b>17/11/15 14:48</b><br>69 osôb<br>37.0% online registrácií", "<b>17/11/16 07:48</b><br>71 osôb<br>38.0% online registrácií", "<b>17/11/23 00:11</b><br>75 osôb<br>41.0% online registrácií", "<b>17/11/23 09:37</b><br>76 osôb<br>41.0% online registrácií", "<b>17/11/23 12:43</b><br>77 osôb<br>42.0% online registrácií", "<b>17/11/24 09:32</b><br>78 osôb<br>42.0% online registrácií", "<b>17/11/24 09:42</b><br>79 osôb<br>43.0% online registrácií", "<b>17/11/24 11:43</b><br>80 osôb<br>43.0% online registrácií", "<b>17/11/25 12:41</b><br>81 osôb<br>44.0% online registrácií", "<b>17/11/26 00:10</b><br>82 osôb<br>44.0% online registrácií", "<b>17/11/29 22:08</b><br>87 osôb<br>47.0% online registrácií", "<b>17/11/30 13:56</b><br>88 osôb<br>48.0% online registrácií", "<b>17/12/1 12:38</b><br>89 osôb<br>48.0% online registrácií", "<b>17/12/3 19:02</b><br>91 osôb<br>49.0% online registrácií", "<b>17/12/3 19:23</b><br>92 osôb<br>50.0% online registrácií", "<b>17/12/4 11:43</b><br>93 osôb<br>50.0% online registrácií", "<b>17/12/4 16:47</b><br>95 osôb<br>51.0% online registrácií", "<b>17/12/5 08:24</b><br>96 osôb<br>52.0% online registrácií", "<b>17/12/6 15:51</b><br>97 osôb<br>52.0% online registrácií", "<b>17/12/6 15:52</b><br>98 osôb<br>53.0% online registrácií", "<b>17/12/8 00:11</b><br>101 osôb<br>55.0% online registrácií", "<b>17/12/11 13:17</b><br>103 osôb<br>56.0% online registrácií", "<b>17/12/13 00:27</b><br>105 osôb<br>57.0% online registrácií", "<b>17/12/13 09:37</b><br>106 osôb<br>57.0% online registrácií", "<b>17/12/13 09:54</b><br>107 osôb<br>58.0% online registrácií", "<b>17/12/13 10:08</b><br>108 osôb<br>58.0% online registrácií", "<b>17/12/13 10:51</b><br>109 osôb<br>59.0% online registrácií", "<b>17/12/13 13:02</b><br>110 osôb<br>59.0% online registrácií", "<b>17/12/13 14:34</b><br>111 osôb<br>60.0% online registrácií", "<b>17/12/13 14:35</b><br>112 osôb<br>61.0% online registrácií", "<b>17/12/14 08:35</b><br>113 osôb<br>61.0% online registrácií", "<b>17/12/14 11:49</b><br>114 osôb<br>62.0% online registrácií", "<b>17/12/14 13:43</b><br>116 osôb<br>63.0% online registrácií", "<b>17/12/14 15:29</b><br>117 osôb<br>63.0% online registrácií", "<b>17/12/14 22:08</b><br>123 osôb<br>66.0% online registrácií", "<b>17/12/15 07:41</b><br>125 osôb<br>68.0% online registrácií", "<b>17/12/15 08:07</b><br>126 osôb<br>68.0% online registrácií", "<b>17/12/15 09:08</b><br>128 osôb<br>69.0% online registrácií", "<b>17/12/15 10:58</b><br>130 osôb<br>70.0% online registrácií", "<b>17/12/15 11:39</b><br>131 osôb<br>71.0% online registrácií", "<b>17/12/15 11:42</b><br>132 osôb<br>71.0% online registrácií", "<b>17/12/15 12:41</b><br>134 osôb<br>72.0% online registrácií", "<b>17/12/15 12:42</b><br>135 osôb<br>73.0% online registrácií", "<b>17/12/15 14:09</b><br>137 osôb<br>74.0% online registrácií", "<b>17/12/15 15:19</b><br>138 osôb<br>75.0% online registrácií", "<b>17/12/15 16:04</b><br>139 osôb<br>75.0% online registrácií", "<b>17/12/15 16:20</b><br>140 osôb<br>76.0% online registrácií", "<b>17/12/15 16:32</b><br>141 osôb<br>76.0% online registrácií", "<b>17/12/16 15:55</b><br>143 osôb<br>77.0% online registrácií", "<b>17/12/16 22:28</b><br>145 osôb<br>78.0% online registrácií", "<b>17/12/16 23:37</b><br>147 osôb<br>79.0% online registrácií", "<b>17/12/17 10:11</b><br>151 osôb<br>82.0% online registrácií", "<b>17/12/17 12:44</b><br>153 osôb<br>83.0% online registrácií", "<b>17/12/17 14:30</b><br>154 osôb<br>83.0% online registrácií", "<b>17/12/17 14:38</b><br>155 osôb<br>84.0% online registrácií", "<b>17/12/17 15:23</b><br>156 osôb<br>84.0% online registrácií", "<b>17/12/17 18:17</b><br>158 osôb<br>85.0% online registrácií", "<b>17/12/17 19:26</b><br>159 osôb<br>86.0% online registrácií", "<b>17/12/17 21:48</b><br>161 osôb<br>87.0% online registrácií", "<b>17/12/17 22:17</b><br>162 osôb<br>88.0% online registrácií", "<b>17/12/18 08:59</b><br>164 osôb<br>89.0% online registrácií", "<b>17/12/18 09:05</b><br>165 osôb<br>89.0% online registrácií", "<b>17/12/18 09:51</b><br>166 osôb<br>90.0% online registrácií", "<b>17/12/18 12:51</b><br>169 osôb<br>91.0% online registrácií", "<b>17/12/18 12:54</b><br>170 osôb<br>92.0% online registrácií", "<b>17/12/18 12:54</b><br>171 osôb<br>92.0% online registrácií", "<b>17/12/18 13:05</b><br>172 osôb<br>93.0% online registrácií", "<b>17/12/18 13:29</b><br>176 osôb<br>95.0% online registrácií", "<b>17/12/18 13:42</b><br>178 osôb<br>96.0% online registrácií", "<b>17/12/18 15:32</b><br>180 osôb<br>97.0% online registrácií", "<b>17/12/18 16:26</b><br>182 osôb<br>98.0% online registrácií"]
	},
	{
	x: [1280.5092476852, 1585.3131365741, 1619.5664699074, 2485.8128587963],
	y: ["28", "60", "62", "124"],
	name: 'SR + zahraničie',
	text: ["17/10/25 17:15", "17/11/7 10:04", "17/11/8 20:19", "17/12/14 22:34"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>17/10/25 17:15</b><br>28 osôb<br>15.0% online registrácií", "<b>17/11/7 10:04</b><br>60 osôb<br>32.0% online registrácií", "<b>17/11/8 20:19</b><br>62 osôb<br>34.0% online registrácií", "<b>17/12/14 22:34</b><br>124 osôb<br>67.0% online registrácií"]
	},
	{
	x: [432.3806365741, 1189.002025463, 1263.0225810185, 1271.7898032407, 1272.8050810185, 1274.6961921296, 1275.1734143519, 1277.939525463, 1355.809525463, 1378.4600810185, 1424.889525463, 1455.0767476852, 1474.6875810185, 1490.7856365741, 1499.7367476852, 1500.0078587963, 1501.4764699074, 1501.7506365741, 1540.1900810185, 1665.7028587963, 1682.3764699074, 1777.8973032408, 1786.5198032408, 1860.6900810185, 2052.4809143519, 2052.4898032408, 2066.0281365741, 2066.7984143519, 2213.8081365741, 2238.6214699074, 2293.1161921296, 2316.4056365741, 2329.0261921296, 2476.894525463, 2479.3686921296, 2481.3706365741, 2481.4036921296, 2496.2700810185, 2497.877025463, 2499.0728587963, 2500.5167476852, 2506.6906365741, 2528.4498032408, 2534.4759143519, 2535.5839699074, 2536.4723032408, 2544.6475810185, 2546.5325810185, 2552.1639699074, 2555.092025463, 2571.1198032408, 2572.0534143519, 2572.3723032408, 2572.3681365741, 2572.4211921296, 2572.7750810185, 2573.0161921296, 2575.6567476852, 2575.7067476852],
	y: ["1", "6", "9", "12", "14", "21", "23", "26", "37", "39", "43", "45", "48", "50", "51", "52", "53", "55", "58", "63", "64", "68", "70", "72", "83", "84", "85", "86", "90", "94", "99", "100", "102", "115", "118", "120", "121", "127", "129", "133", "136", "142", "144", "146", "148", "149", "150", "152", "157", "160", "167", "168", "173", "174", "175", "177", "179", "181", "183"],
	name: 'zahraničie',
	text: ["17/09/20 09:08", "17/10/21 21:45", "17/10/24 23:46", "17/10/25 08:32", "17/10/25 09:33", "17/10/25 11:27", "17/10/25 11:55", "17/10/25 14:41", "17/10/28 20:33", "17/10/29 19:12", "17/10/31 17:38", "17/11/1 23:49", "17/11/2 19:26", "17/11/3 11:32", "17/11/3 20:29", "17/11/3 20:45", "17/11/3 22:13", "17/11/3 22:30", "17/11/5 12:56", "17/11/10 18:27", "17/11/11 11:07", "17/11/15 10:39", "17/11/15 19:16", "17/11/18 21:26", "17/11/26 21:14", "17/11/26 21:14", "17/11/27 10:46", "17/11/27 11:33", "17/12/3 14:33", "17/12/4 15:22", "17/12/6 21:52", "17/12/7 21:09", "17/12/8 09:46", "17/12/14 13:38", "17/12/14 16:07", "17/12/14 18:07", "17/12/14 18:09", "17/12/15 09:01", "17/12/15 10:37", "17/12/15 11:49", "17/12/15 13:16", "17/12/15 19:26", "17/12/16 17:12", "17/12/16 23:13", "17/12/17 00:20", "17/12/17 01:13", "17/12/17 09:24", "17/12/17 11:17", "17/12/17 16:55", "17/12/17 19:50", "17/12/18 11:52", "17/12/18 12:48", "17/12/18 13:07", "17/12/18 13:07", "17/12/18 13:10", "17/12/18 13:31", "17/12/18 13:46", "17/12/18 16:24", "17/12/18 16:27"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>17/09/20 09:08</b><br>1 osoba<br>1.0% online registrácií", "<b>17/10/21 21:45</b><br>6 osôb<br>3.0% online registrácií", "<b>17/10/24 23:46</b><br>9 osôb<br>5.0% online registrácií", "<b>17/10/25 08:32</b><br>12 osôb<br>6.0% online registrácií", "<b>17/10/25 09:33</b><br>14 osôb<br>8.0% online registrácií", "<b>17/10/25 11:27</b><br>21 osôb<br>11.0% online registrácií", "<b>17/10/25 11:55</b><br>23 osôb<br>12.0% online registrácií", "<b>17/10/25 14:41</b><br>26 osôb<br>14.0% online registrácií", "<b>17/10/28 20:33</b><br>37 osôb<br>20.0% online registrácií", "<b>17/10/29 19:12</b><br>39 osôb<br>21.0% online registrácií", "<b>17/10/31 17:38</b><br>43 osôb<br>23.0% online registrácií", "<b>17/11/1 23:49</b><br>45 osôb<br>24.0% online registrácií", "<b>17/11/2 19:26</b><br>48 osôb<br>26.0% online registrácií", "<b>17/11/3 11:32</b><br>50 osôb<br>27.0% online registrácií", "<b>17/11/3 20:29</b><br>51 osôb<br>28.0% online registrácií", "<b>17/11/3 20:45</b><br>52 osôb<br>28.0% online registrácií", "<b>17/11/3 22:13</b><br>53 osôb<br>29.0% online registrácií", "<b>17/11/3 22:30</b><br>55 osôb<br>30.0% online registrácií", "<b>17/11/5 12:56</b><br>58 osôb<br>31.0% online registrácií", "<b>17/11/10 18:27</b><br>63 osôb<br>34.0% online registrácií", "<b>17/11/11 11:07</b><br>64 osôb<br>35.0% online registrácií", "<b>17/11/15 10:39</b><br>68 osôb<br>37.0% online registrácií", "<b>17/11/15 19:16</b><br>70 osôb<br>38.0% online registrácií", "<b>17/11/18 21:26</b><br>72 osôb<br>39.0% online registrácií", "<b>17/11/26 21:14</b><br>83 osôb<br>45.0% online registrácií", "<b>17/11/26 21:14</b><br>84 osôb<br>45.0% online registrácií", "<b>17/11/27 10:46</b><br>85 osôb<br>46.0% online registrácií", "<b>17/11/27 11:33</b><br>86 osôb<br>46.0% online registrácií", "<b>17/12/3 14:33</b><br>90 osôb<br>49.0% online registrácií", "<b>17/12/4 15:22</b><br>94 osôb<br>51.0% online registrácií", "<b>17/12/6 21:52</b><br>99 osôb<br>54.0% online registrácií", "<b>17/12/7 21:09</b><br>100 osôb<br>54.0% online registrácií", "<b>17/12/8 09:46</b><br>102 osôb<br>55.0% online registrácií", "<b>17/12/14 13:38</b><br>115 osôb<br>62.0% online registrácií", "<b>17/12/14 16:07</b><br>118 osôb<br>64.0% online registrácií", "<b>17/12/14 18:07</b><br>120 osôb<br>65.0% online registrácií", "<b>17/12/14 18:09</b><br>121 osôb<br>65.0% online registrácií", "<b>17/12/15 09:01</b><br>127 osôb<br>69.0% online registrácií", "<b>17/12/15 10:37</b><br>129 osôb<br>70.0% online registrácií", "<b>17/12/15 11:49</b><br>133 osôb<br>72.0% online registrácií", "<b>17/12/15 13:16</b><br>136 osôb<br>74.0% online registrácií", "<b>17/12/15 19:26</b><br>142 osôb<br>77.0% online registrácií", "<b>17/12/16 17:12</b><br>144 osôb<br>78.0% online registrácií", "<b>17/12/16 23:13</b><br>146 osôb<br>79.0% online registrácií", "<b>17/12/17 00:20</b><br>148 osôb<br>80.0% online registrácií", "<b>17/12/17 01:13</b><br>149 osôb<br>81.0% online registrácií", "<b>17/12/17 09:24</b><br>150 osôb<br>81.0% online registrácií", "<b>17/12/17 11:17</b><br>152 osôb<br>82.0% online registrácií", "<b>17/12/17 16:55</b><br>157 osôb<br>85.0% online registrácií", "<b>17/12/17 19:50</b><br>160 osôb<br>86.0% online registrácií", "<b>17/12/18 11:52</b><br>167 osôb<br>90.0% online registrácií", "<b>17/12/18 12:48</b><br>168 osôb<br>91.0% online registrácií", "<b>17/12/18 13:07</b><br>173 osôb<br>94.0% online registrácií", "<b>17/12/18 13:07</b><br>174 osôb<br>94.0% online registrácií", "<b>17/12/18 13:10</b><br>175 osôb<br>95.0% online registrácií", "<b>17/12/18 13:31</b><br>177 osôb<br>96.0% online registrácií", "<b>17/12/18 13:46</b><br>179 osôb<br>97.0% online registrácií", "<b>17/12/18 16:24</b><br>181 osôb<br>98.0% online registrácií", "<b>17/12/18 16:27</b><br>183 osôb<br>99.0% online registrácií"]
	},
	{
	x: [1305.3306365741, 1733.5161921296, 1896.8778587963, 1957.8536921296, 2404.5586921296, 2481.1686921296, 2481.4856365741, 2559.0809143519],
	y: ["33", "66", "73", "74", "104", "119", "122", "163"],
	name: 'neuvedené',
	text: ["17/10/26 18:05", "17/11/13 14:16", "17/11/20 09:37", "17/11/22 22:36", "17/12/11 13:18", "17/12/14 17:55", "17/12/14 18:14", "17/12/17 23:50"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>17/10/26 18:05</b><br>33 osôb<br>18.0% online registrácií", "<b>17/11/13 14:16</b><br>66 osôb<br>36.0% online registrácií", "<b>17/11/20 09:37</b><br>73 osôb<br>39.0% online registrácií", "<b>17/11/22 22:36</b><br>74 osôb<br>40.0% online registrácií", "<b>17/12/11 13:18</b><br>104 osôb<br>56.0% online registrácií", "<b>17/12/14 17:55</b><br>119 osôb<br>64.0% online registrácií", "<b>17/12/14 18:14</b><br>122 osôb<br>66.0% online registrácií", "<b>17/12/17 23:50</b><br>163 osôb<br>88.0% online registrácií"]
	},
	{
		x: [0, 432.3806365741, 433.8128587963, 437.6234143519, 462.0439699074, 583.7114699074, 1189.002025463, 1259.8950810185, 1262.5178587963, 1263.0225810185, 1269.9864699074, 1270.2753587963, 1271.7898032407, 1272.2614699074, 1272.8050810185, 1273.3292476852, 1274.0506365741, 1274.0692476852, 1274.0931365741, 1274.2461921296, 1274.6692476852, 1274.6961921296, 1274.8078587963, 1275.1734143519, 1275.8700810185, 1277.4536921296, 1277.939525463, 1279.1050810185, 1280.5092476852, 1283.4323032408, 1283.5664699074, 1297.3278587963, 1300.4684143519, 1305.3306365741, 1319.8356365741, 1321.7423032408, 1322.2048032408, 1355.809525463, 1358.1017476852, 1378.4600810185, 1379.1278587963, 1402.6981365741, 1418.0764699074, 1424.889525463, 1444.0939699074, 1455.0767476852, 1464.4948032408, 1465.8964699074, 1474.6875810185, 1474.8206365741, 1490.7856365741, 1499.7367476852, 1500.0078587963, 1501.4764699074, 1501.5036921296, 1501.7506365741, 1514.1217476852, 1519.0159143519, 1540.1900810185, 1567.0009143519, 1585.3131365741, 1613.0836921296, 1619.5664699074, 1665.7028587963, 1682.3764699074, 1694.7798032408, 1733.5161921296, 1764.6759143519, 1777.8973032408, 1782.0498032408, 1786.5198032408, 1799.0523032408, 1860.6900810185, 1896.8778587963, 1957.8536921296, 1959.4428587963, 1968.8756365741, 1971.9678587963, 1992.7948032408, 1992.9603587963, 1994.9642476852, 2019.9350810185, 2031.4275810185, 2052.4809143519, 2052.4898032408, 2066.0281365741, 2066.7984143519, 2125.3906365741, 2141.1928587963, 2163.8889699074, 2213.8081365741, 2218.2909143519, 2218.6334143519, 2234.9767476852, 2238.6214699074, 2240.034525463, 2255.6586921296, 2287.107025463, 2287.1236921296, 2293.1161921296, 2316.4056365741, 2319.4431365741, 2329.0261921296, 2404.539525463, 2404.5586921296, 2439.7061921296, 2448.8661921296, 2449.1517476852, 2449.3859143519, 2450.102025463, 2452.2886921296, 2453.824525463, 2453.839525463, 2471.8289699074, 2475.0706365741, 2476.894525463, 2476.9711921296, 2478.744525463, 2479.3686921296, 2481.1686921296, 2481.3706365741, 2481.4036921296, 2481.4856365741, 2485.3811921296, 2485.8128587963, 2494.9373032408, 2495.3709143519, 2496.2700810185, 2496.3939699074, 2497.877025463, 2498.2242476852, 2498.909525463, 2498.9475810185, 2499.0728587963, 2499.929525463, 2499.9548032408, 2500.5167476852, 2501.3967476852, 2502.5659143519, 2503.3234143519, 2503.5798032408, 2503.7892476852, 2506.6906365741, 2527.1681365741, 2528.4498032408, 2533.7161921296, 2534.4759143519, 2534.8773032408, 2535.5839699074, 2536.4723032408, 2544.6475810185, 2545.4311921296, 2546.5325810185, 2547.9809143519, 2549.754525463, 2549.8809143519, 2550.6317476852, 2552.1639699074, 2553.5286921296, 2554.6806365741, 2555.092025463, 2557.0564699074, 2557.5317476852, 2559.0809143519, 2568.2375810185, 2568.3406365741, 2569.1036921296, 2571.1198032408, 2572.0534143519, 2572.0973032407, 2572.1525810185, 2572.157025463, 2572.3373032408, 2572.3723032408, 2572.3681365741, 2572.4211921296, 2572.7428587963, 2572.7750810185, 2572.9453587963, 2573.0161921296, 2574.7886921296, 2575.6567476852, 2575.6798032408, 2575.7067476852],
		y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183],
		name: "",
		type: 'bar',
		marker: {
			color: ['rgb(255, 255, 255)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 0, 255)']
		},
		showlegend: false,
		visible: false,
		hoverinfo: 'skip',
		hovermode: "none"
	}
];

var data_registration_timeLabels = ["", "21.10.", "", "", "", "", "", "", "", "", "", "", "1.11.", "", "", "", "", "", "", "", "", "18.11.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "13.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "19.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

var updateMenu_sunburst = [{
	buttons: [
	{
		args: ['visible', [true, false, false, false]],
		label: '2021',
		method: 'restyle'
	},
	{
		args: ['visible', [false, true, false, false]],
		label: '2019',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, true, false]],
		label: '2018',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, true]],
		label: '2017',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 0.0,
	xanchor: 'middle',
	y: 1.0,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];

var updateMenu_sunburst_tempSkip = [{
	buttons: [
	{
		args: ['visible', [true, false, false, false]],
		label: '2021',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false]],
		label: '2019',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, true, false]],
		label: '2018',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, true]],
		label: '2017',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 0.0,
	xanchor: 'middle',
	y: 1.0,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];

var updateMenu_position_country = [{
	buttons: [
	{
		args: ['visible', [
			true, true, true, true, true, 
			false, false, false, false, false, false, false, 
			false, false, false, false, false, false, false, 
			false, false, false, false, false, false, false
		]],
		label: '2021',
		method: 'restyle'
	},
	{
		args: ['visible', [
			false, false, false, false, false, 
			true, true, true, true, true, true, true, 
			false, false, false, false, false, false, false, 
			false, false, false, false, false, false, false
		]],
		label: '2019',
		method: 'restyle'
	},
	{
		args: ['visible', [
			false, false, false, false, false, 
			false, false, false, false, false, false, false, 
			true, true, true, true, true, true, true, 
			false, false, false, false, false, false, false
		]],
		label: '2018',
		method: 'restyle'
	},
	{
		args: ['visible', [
			false, false, false, false, false, 
			false, false, false, false, false, false, false, 
			false, false, false, false, false, false, false, 
			true, true, true, true, true, true, true]],
		label: '2017',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 1.21,
	xanchor: 'middle',
	y: 0.55,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];

var updateMenu_position_gender = [{
	buttons: [
	{
		args: ['visible', [
			true, true, true, 
			false, false, false, false, false, 
			false, false, false, false, false, 
			false, false, false, false, false
		]],
		label: '2021',
		method: 'restyle'
	},
	{
		args: ['visible', [
			false, false, false, 
			true, true, true, true, true, 
			false, false, false, false, false, 
			false, false, false, false, false
		]],
		label: '2019',
		method: 'restyle'
	},
	{
		args: ['visible', [
			false, false, false, 
			false, false, false, false, false, 
			true, true, true, true, true, 
			false, false, false, false, false
		]],
		label: '2018',
		method: 'restyle'
	},
	{
		args: ['visible', [
			false, false, false, 
			false, false, false, false, false, 
			false, false, false, false, false, 
			true, true, true, true, true
		]],
		label: '2017',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 1.2,
	xanchor: 'middle',
	y: 0.73,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];

var updateMenu_institution_country_tempSkip = [{
	buttons: [
	{
		args: ['visible', [
			false, false, false, false, false, 
			false, false, false, false, false, false, false, 
			false, false, false, false, false, false, false, 
			false, false, false, false, false, false, false
		]],
		label: '2021',
		method: 'restyle'
	},
	{
		args: ['visible', [
			false, false, false, false, false, 
			false, false, false, false, false, false, false, 
			false, false, false, false, false, false, false, 
			false, false, false, false, false, false, false
		]],
		label: '2019',
		method: 'restyle'
	},
	{
		args: ['visible', [
			false, false, false, false, false, 
			false, false, false, false, false, false, false, 
			true, true, true, true, true, true, true, 
			false, false, false, false, false, false, false
		]],
		label: '2018',
		method: 'restyle'
	},
	{
		args: ['visible', [
			false, false, false, false, false, 
			false, false, false, false, false, false, false, 
			false, false, false, false, false, false, false, 
			true, true, true, true, true, true, true
		]],
		label: '2017',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 1.184,
	xanchor: 'middle',
	y: 0.55,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];

var updateMenu_institution_gender_tempSkip = [{
	buttons: [
	{
		args: ['visible', [
			false, false, false,
			false, false, false, false, false, 
			false, false, false, false, false, 
			false, false, false, false, false
		]],
		label: '2021',
		method: 'restyle'
	},
	{
		args: ['visible', [
			false, false, false, 
			false, false, false, false, false, 
			false, false, false, false, false, 
			false, false, false, false, false
		]],
		label: '2019',
		method: 'restyle'
	},
	{
		args: ['visible', [
			false, false, false, 
			false, false, false, false, false, 
			true, true, true, true, true, 
			false, false, false, false, false
		]],
		label: '2018',
		method: 'restyle'
	},
	{
		args: ['visible', [
			false, false, false, 
			false, false, false, false, false, 
			false, false, false, false, false, 
			true, true, true, true, true
		]],
		label: '2017',
		method: 'restyle'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 1.176,
	xanchor: 'middle',
	y: 0.73,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];

var updateMenu_registration_timeSeries = [{
	buttons: [
	{
		args: [
			{'visible': [
				true, true, true, true, 
				false, false, false, false, 
				false, false, false, false, false, 
				false, false, false, false, false
			]},
			{'xaxis': {
				'title': "<b>Deň prihlásenia v roku 2021</b>",
				'tickvals': data_registration_timeSeries[3]['x'],
				'ticktext': data_registration_timeLabels_2021}
			}
		],
		label: '2021',
		method: 'update'
	},
	{
		args: [
			{'visible': [
				false, false, false, false,
				true, true, true, true, 
				false, false, false, false, false, 
				false, false, false, false, false
			]},
			{'xaxis': {
				'title': "<b>Deň prihlásenia v roku 2019</b>",
				'tickvals': data_registration_timeSeries[7]['x'],
				'ticktext': data_registration_timeLabels_2019}
			}
		],
		label: '2019',
		method: 'update'
	},
	{
		args: [
			{'visible': [
				false, false, false, false, 
				false, false, false, false, 
				true, true, true, true, true, 
				false, false, false, false, false
			]},
			{'xaxis': {
				'title': "<b>Deň prihlásenia v roku 2018</b>",
				'tickvals': data_registration_timeSeries[12]['x'],
				'ticktext': data_registration_timeLabels_2018}
			}
		],
		label: '2018',
		method: 'update'
	},
	{
		args: [
			{'visible': [
				false, false, false, false, 
				false, false, false, false, 
				false, false, false, false, false, 
				true, true, true, true, true
			]},
			{'xaxis': {
				'title': "<b>Deň prihlásenia v roku 2017</b>",
				'tickvals': data_registration_timeSeries[17]['x'],
				'ticktext': data_registration_timeLabels_2017}
			}
		],
		label: '2017',
		method: 'update'
	}],
	direction: 'down',
	pad: {'r': 10, 't': 10},
	showactive: true,
	type: 'dropdown',
	active: 0,
	x: 1.145,
	xanchor: 'middle',
	y: 0.57,
	yanchor: 'center',
	font: {color: '#5072a8'}
}];
