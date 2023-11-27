var data_participation_2017 = [
// participation 2017
{
	type: "sunburst",
	ids: ["všetci_do2020", "prítomní", "neprítomní", "muži 1", "ženy 1", "bez registrácie", "muži 0", "ženy 0"],
	labels: ["dáta z prihlasovania + neregistrovaní účastníci", "prítomní", "neprítomní", "muži", "ženy", "bez registrácie", "muži", "ženy"],
	values: [224, 156, 68, 74, 57, 25, 25, 43],
	parents: ["", "všetci_do2020", "všetci_do2020", "prítomní", "prítomní", "prítomní", "neprítomní", "neprítomní"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(124, 124, 124)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(204, 221, 255)', 'rgb(255, 204, 204)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania + neregistrovaní účastníci</b><br>224 osôb<br>", "156 prítomných<br>78.4% registrovaných", "68 neprítomných<br>34.2% registrovaných", "<b>prítomní</b><br>74 mužov<br>47.4% prítomných<br>37.2% registrovaných", "<b>prítomné</b><br>57 žien<br>36.5% prítomných<br>28.6% registrovaných", "<b>bez registrácie</b><br>25 osôb<br>16.0% prítomných<br>", "<b>neprítomní</b><br>25 mužov<br>12.6% registrovaných", "<b>neprítomné</b><br>43 žien<br>21.6% registrovaných"]
}];

var data_participation_detail_2017 = [
// participation_detail 2017
{
	type: "sunburst",
	ids: ["všetci", "účasť", "prednášky", "organizácia", "účastníčky", "účastníci", "bez registrácie", "aktívne účastníčky", "aktívni účastníci", "organizátorky", "organizátori"],
	labels: ["iba prítomní", "účasť", "prednášky", "organizácia", "ženy", "muži", "bez registrácie", "ženy", "muži", "ženy", "muži"],
	values: [156, 133, 5, 18, 49, 59, 25, 1, 4, 7, 11],
	parents: ["", "všetci", "všetci", "všetci", "účasť", "účasť", "účasť", "prednášky", "prednášky", "organizácia", "organizácia"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 174, 16)', 'rgb(255, 134, 16', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(0, 230, 0)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>156 osôb<br>", "<b>účasť</b><br>133 osôb<br>85.3% prítomných<br>", "<b>prednášky</b><br>5 osôb<br>3.2% prítomných<br>", "<b>organizácia</b><br>18 osôb<br>11.5% prítomných<br>", "<b>účasť</b><br>49 žien<br>31.4% prítomných<br>", "<b>účasť</b><br>59 mužov<br>37.8% prítomných<br>", "<b>bez registrácie</b><br>25 osôb<br>16.0% prítomných<br>", "<b>prednášky</b><br>1 žena<br>0.6% prítomných<br>", "<b>prednášky</b><br>4 muži<br>2.6% prítomných<br>", "<b>organizácia</b><br>7 žien<br>4.5% prítomných<br>", "<b>organizácia</b><br>11 mužov<br>7.1% prítomných<br>"]
}];

var data_abroad_2017 = [
// abroad 2017
{
	type: "sunburst",
	ids: ["všetci", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "muži (SR)", "ženy (SR)", "muži (NA)", "bez dát", "muži (oboje)", "muži (zahr.)", "ženy (zahr.)"],
	labels: ["iba prítomní", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "muži", "ženy", "muži", "bez registrácie", "muži", "muži", "ženy"],
	values: [156, 74, 4, 48, 30, 38, 36, 5, 25, 4, 27, 21],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "Slovensko", "Slovensko", "neuvedené", "neuvedené", "SR a zahraničie", "zahraničie", "zahraničie"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(0, 230, 0)', 'rgb(0, 77, 230)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>156 osôb<br>", "<b>Slovensko</b><br>74 osôb<br>47.4% prítomných<br>", "<b>SR a zahraničie</b><br>4 osoby<br>2.6% prítomných<br>", "<b>zahraničie</b><br>48 osôb<br>30.8% prítomných<br>", "<b>neuvedené</b><br>30 osôb<br>19.2% prítomných<br>", "<b>Slovensko</b><br>38 mužov<br>24.4% prítomných<br>", "<b>Slovensko</b><br>36 žien<br>23.1% prítomných<br>", "<b>neuvedené</b><br>5 mužov<br>3.2% prítomných<br>", "<b>bez registrácie</b><br>25 osôb<br>16.0% prítomných<br>", "<b>SR a zahraničie</b><br>4 muži<br>2.6% prítomných<br>", "<b>zahraničie</b><br>27 mužov<br>17.3% prítomných<br>", "<b>zahraničie</b><br>21 žien<br>13.5% prítomných<br>"]
}];

var data_subject_2017 = [
// subject 2017
{
	type: "sunburst",
	ids: ["všetci", "prítomní", "neprítomní", "STEM", "SSH", "iné", "STEM (neprítomní)", "SSH (neprítomní)", "iné (neprítomní)", "neuvedené (neprítomní)", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "chémia", "fyzika", "matematika", "IT", "technológie", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "história, pomocné vedy historické", "archeológia", "antropológia", "psychológia", "sociológia", "politické vedy", "ekonómia a manažment", "podpora výskumu", "otvorená veda", "popularizácia", "iné neuvedené"],
	labels: ["iba dáta z registrácie", "prítomní", "neprítomní", "STEM", "SSH", "iné", "STEM", "SSH", "iné", "neuvedené", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "chémia", "fyzika", "matematika", "IT", "technológie", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "história, pomocné vedy historické", "archeológia", "antropológia", "psychológia", "sociológia", "politické vedy", "ekonómia a manažment", "podpora výskumu", "otvorená veda", "popularizácia", "neuvedené"],
	values: [199, 131, 68, 115, 11, 5, 49, 16, 2, 1, 7, 15, 12, 11, 1, 1, 4, 4, 6, 8, 5, 19, 3, 2, 5, 7, 2, 3, 1, 3, 2, 1, 1, 2, 1, 1, 1, 1, 2],
	parents: ["", "všetci", "všetci", "prítomní", "prítomní", "prítomní", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "iné", "iné", "iné", "iné"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(190, 190, 190)', 'rgb(0, 102, 102)', 'rgb(204, 0, 0)', 'rgb(62, 0, 62)', 'rgb(95, 146, 146)', 'rgb(197, 95, 95)', 'rgb(126,95,126)', 'rgb(157, 157, 157)', 'rgb(53, 104, 0)', 'rgb(82, 163, 0)', 'rgb(102, 204, 0)', 'rgb(222, 222, 92)', 'rgb(255, 238, 153)', 'rgb(255,247,126)', 'rgb(255, 255, 98)', 'rgb(255, 255, 0)', 'rgb(255, 204, 0)', 'rgb(255, 128, 0)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(0, 0, 255)', 'rgb(0, 128, 255)', 'rgb(136, 136, 136)', 'rgb(36, 18, 0)', 'rgb(75, 37, 0)', 'rgb(89, 121, 0)', 'rgb(145,0,73)', 'rgb(204, 0, 102)', 'rgb(255, 47, 151)', 'rgb(214, 48, 90)', 'rgb(214, 48, 48)', 'rgb(218, 94, 69)', 'rgb(218, 106, 69)', 'rgb(82, 0, 82)', 'rgb(107, 0, 107)', 'rgb(162, 0, 162)', 'rgb(62, 0, 62)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba dáta z registrácie</b><br>199 osôb<br>", "131 prítomných<br>65.8% registrovaných", "68 neprítomných<br>34.2% registrovaných", "<b>STEM</b><br>115 osôb<br>87.8% prítomných<br>57.8% registrovaných", "<b>SSH</b><br>11 osôb<br>8.4% prítomných<br>5.5% registrovaných", "<b>iné</b><br>5 osôb<br>3.8% prítomných<br>2.5% registrovaných", "<b>STEM</b><br>49 osôb<br>24.6% registrovaných", "<b>SSH</b><br>16 osôb<br>8.0% registrovaných", "<b>iné</b><br>2 osoby<br>1.0% registrovaných", "<b>neuvedené</b><br>1 osoba<br>0.5% registrovaných", "<b>genetika</b><br>7 osôb<br>5.3% prítomných<br>3.5% registrovaných", "<b>molekulárna biológia</b><br>15 osôb<br>11.5% prítomných<br>7.5% registrovaných", "<b>biológia</b><br>12 osôb<br>9.2% prítomných<br>6.0% registrovaných", "<b>biochémia</b><br>11 osôb<br>8.4% prítomných<br>5.5% registrovaných", "<b>biofyzika</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>bioinformatika</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>biomedicína</b><br>4 osoby<br>3.1% prítomných<br>2.0% registrovaných", "<b>biotechnológie, biomateriály</b><br>4 osoby<br>3.1% prítomných<br>2.0% registrovaných", "<b>neurovedy</b><br>6 osôb<br>4.6% prítomných<br>3.0% registrovaných", "<b>medicína, lekárske vedy</b><br>8 osôb<br>6.1% prítomných<br>4.0% registrovaných", "<b>chémia</b><br>5 osôb<br>3.8% prítomných<br>2.5% registrovaných", "<b>fyzika</b><br>19 osôb<br>14.5% prítomných<br>9.5% registrovaných", "<b>matematika</b><br>3 osoby<br>2.3% prítomných<br>1.5% registrovaných", "<b>IT</b><br>2 osoby<br>1.5% prítomných<br>1.0% registrovaných", "<b>technológie</b><br>5 osôb<br>3.8% prítomných<br>2.5% registrovaných", "<b>geopriestorové vedy</b><br>7 osôb<br>5.3% prítomných<br>3.5% registrovaných", "<b>vedy o Zemi</b><br>2 osoby<br>1.5% prítomných<br>1.0% registrovaných", "<b>ekologické a environmentálne vedy</b><br>3 osoby<br>2.3% prítomných<br>1.5% registrovaných", "<b>história, pomocné vedy historické</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>archeológia</b><br>3 osoby<br>2.3% prítomných<br>1.5% registrovaných", "<b>antropológia</b><br>2 osoby<br>1.5% prítomných<br>1.0% registrovaných", "<b>psychológia</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>sociológia</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>politické vedy</b><br>2 osoby<br>1.5% prítomných<br>1.0% registrovaných", "<b>ekonómia a manažment</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>podpora výskumu</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>otvorená veda</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>popularizácia</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>neuvedené</b><br>2 osoby<br>1.5% prítomných<br>1.0% registrovaných"]
}];

var data_institution_country_2017 = [
	// institution_country 2017
	{
	x: [34, 1, 27, 0, 2, 5, 0, 0, 0, 4, 1],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 34 osôb<br>21.8% prítomných<br>17.1% registrovaných", "<b>výskum + univerzita</b><br>Slovensko: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 27 osôb<br>17.3% prítomných<br>13.6% registrovaných", "", "<b>komerčná spoločnosť</b><br>Slovensko: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 5 osôb<br>3.2% prítomných<br>2.5% registrovaných", "", "", "", "<b>iné</b><br>Slovensko: 4 osoby<br>2.6% prítomných<br>2.0% registrovaných", "<b>neuvedené</b><br>Slovensko: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných"]
	},
	{
	x: [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "<b>výskum + univerzita</b><br>SR + zahraničie: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [34, 10, 3, 0, 1, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 34 osôb<br>21.8% prítomných<br>17.1% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 10 osôb<br>6.4% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 3 osoby<br>1.9% prítomných<br>1.5% registrovaných", "", "<b>komerčná spoločnosť</b><br>zahraničie: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", "", "", "", ""]
	},
	{
	x: [2, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>neuvedené (krajina): 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", "<b>nadnárodná organizácia</b><br>neuvedené (krajina): 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", "", "", "", "<b>iné</b><br>neuvedené (krajina): 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", ""]
	},
	{
	x: [37, 2, 13, 2, 5, 3, 0, 2, 1, 2, 1],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>37 neprítomných<br>18.6% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.0% registrovaných", "<b>výskumné pracovisko</b><br>13 neprítomných<br>6.5% registrovaných", "<b>nadnárodná organizácia</b><br>2 neprítomní<br>1.0% registrovaných", "<b>komerčná spoločnosť</b><br>5 neprítomných<br>2.5% registrovaných", "<b>podpora výskumu</b><br>3 neprítomní<br>1.5% registrovaných", "", "<b>štátna správa</b><br>2 neprítomní<br>1.0% registrovaných", "<b>mimovládna organizácia</b><br>1 neprítomný/á<br>0.5% registrovaných", "<b>iné</b><br>2 neprítomní<br>1.0% registrovaných", "<b>neuvedené</b><br>1 neprítomný/á<br>0.5% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 25 osôb<br>16.0% prítomných<br>"]
	},
	{
	x: [34, 27, 1, 4, 5, 2, 0, 0, 0, 0, 1],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "mimovládna organizácia", "práca s mládežou", "štátna správa", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 34 osôb<br>21.8% prítomných<br>17.1% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 27 osôb<br>17.3% prítomných<br>13.6% registrovaných", "<b>výskum + univerzita</b><br>Slovensko: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "<b>iné</b><br>Slovensko: 4 osoby<br>2.6% prítomných<br>2.0% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 5 osôb<br>3.2% prítomných<br>2.5% registrovaných", "<b>komerčná spoločnosť</b><br>Slovensko: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", "", "", "<b>neuvedené</b><br>Slovensko: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných"]
	},
	{
	x: [2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "mimovládna organizácia", "práca s mládežou", "štátna správa", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "<b>výskum + univerzita</b><br>SR + zahraničie: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", "", "", "", "", "", ""]
	},
	{
	x: [34, 3, 10, 0, 0, 1, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "mimovládna organizácia", "práca s mládežou", "štátna správa", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 34 osôb<br>21.8% prítomných<br>17.1% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 3 osoby<br>1.9% prítomných<br>1.5% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 10 osôb<br>6.4% prítomných<br>5.0% registrovaných", "", "", "<b>komerčná spoločnosť</b><br>zahraničie: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", "", "", ""]
	},
	{
	x: [2, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "mimovládna organizácia", "práca s mládežou", "štátna správa", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>neuvedené (krajina): 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", "<b>iné</b><br>neuvedené (krajina): 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", "<b>nadnárodná organizácia</b><br>neuvedené (krajina): 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", "", ""]
	},
	{
	x: [37, 13, 2, 2, 3, 5, 2, 1, 0, 2, 1],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "mimovládna organizácia", "práca s mládežou", "štátna správa", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>37 neprítomných<br>18.6% registrovaných", "<b>výskumné pracovisko</b><br>13 neprítomných<br>6.5% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.0% registrovaných", "<b>iné</b><br>2 neprítomní<br>1.0% registrovaných", "<b>podpora výskumu</b><br>3 neprítomní<br>1.5% registrovaných", "<b>komerčná spoločnosť</b><br>5 neprítomných<br>2.5% registrovaných", "<b>nadnárodná organizácia</b><br>2 neprítomní<br>1.0% registrovaných", "<b>mimovládna organizácia</b><br>1 neprítomný/á<br>0.5% registrovaných", "", "<b>štátna správa</b><br>2 neprítomní<br>1.0% registrovaných", "<b>neuvedené</b><br>1 neprítomný/á<br>0.5% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "mimovládna organizácia", "práca s mládežou", "štátna správa", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 25 osôb<br>16.0% prítomných<br>"]
	}
];

var data_institution_gender_2017 = [
	// institution_gender 2017
	{
	x: [32, 6, 13, 0, 1, 3, 0, 0, 0, 2, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>32 žien<br>20.5% prítomných<br>16.1% registrovaných", "<b>výskum + univerzita</b><br>6 žien<br>3.8% prítomných<br>3.0% registrovaných", "<b>výskumné pracovisko</b><br>13 žien<br>8.3% prítomných<br>6.5% registrovaných", "", "<b>komerčná spoločnosť</b><br>1 žena<br>0.6% prítomných<br>0.5% registrovaných", "<b>podpora výskumu</b><br>3 ženy<br>1.9% prítomných<br>1.5% registrovaných", "", "", "", "<b>iné</b><br>2 ženy<br>1.3% prítomných<br>1.0% registrovaných", ""]
	},
	{
	x: [40, 7, 17, 1, 2, 2, 0, 0, 0, 4, 1],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>40 mužov<br>25.6% prítomných<br>20.1% registrovaných", "<b>výskum + univerzita</b><br>7 mužov<br>4.5% prítomných<br>3.5% registrovaných", "<b>výskumné pracovisko</b><br>17 mužov<br>10.9% prítomných<br>8.5% registrovaných", "<b>nadnárodná organizácia</b><br>1 muž<br>0.6% prítomných<br>0.5% registrovaných", "<b>komerčná spoločnosť</b><br>2 muži<br>1.3% prítomných<br>1.0% registrovaných", "<b>podpora výskumu</b><br>2 muži<br>1.3% prítomných<br>1.0% registrovaných", "", "", "", "<b>iné</b><br>4 muži<br>2.6% prítomných<br>2.0% registrovaných", "<b>neuvedené</b><br>1 muž<br>0.6% prítomných<br>0.5% registrovaných"]
	},
	{
	x: [37, 2, 13, 2, 5, 3, 0, 2, 1, 2, 1],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>37 neprítomných<br>18.6% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.0% registrovaných", "<b>výskumné pracovisko</b><br>13 neprítomných<br>6.5% registrovaných", "<b>nadnárodná organizácia</b><br>2 neprítomní<br>1.0% registrovaných", "<b>komerčná spoločnosť</b><br>5 neprítomných<br>2.5% registrovaných", "<b>podpora výskumu</b><br>3 neprítomní<br>1.5% registrovaných", "", "<b>štátna správa</b><br>2 neprítomní<br>1.0% registrovaných", "<b>mimovládna organizácia</b><br>1 neprítomný/á<br>0.5% registrovaných", "<b>iné</b><br>2 neprítomní<br>1.0% registrovaných", "<b>neuvedené</b><br>1 neprítomný/á<br>0.5% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 25 osôb<br>16.0% prítomných<br>"]
	},
	{
	x: [32, 13, 6, 2, 3, 1, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "mimovládna organizácia", "práca s mládežou", "štátna správa", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>32 žien<br>20.5% prítomných<br>16.1% registrovaných", "<b>výskumné pracovisko</b><br>13 žien<br>8.3% prítomných<br>6.5% registrovaných", "<b>výskum + univerzita</b><br>6 žien<br>3.8% prítomných<br>3.0% registrovaných", "<b>iné</b><br>2 ženy<br>1.3% prítomných<br>1.0% registrovaných", "<b>podpora výskumu</b><br>3 ženy<br>1.9% prítomných<br>1.5% registrovaných", "<b>komerčná spoločnosť</b><br>1 žena<br>0.6% prítomných<br>0.5% registrovaných", "", "", "", "", ""]
	},
	{
	x: [40, 17, 7, 4, 2, 2, 1, 0, 0, 0, 1],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "mimovládna organizácia", "práca s mládežou", "štátna správa", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>40 mužov<br>25.6% prítomných<br>20.1% registrovaných", "<b>výskumné pracovisko</b><br>17 mužov<br>10.9% prítomných<br>8.5% registrovaných", "<b>výskum + univerzita</b><br>7 mužov<br>4.5% prítomných<br>3.5% registrovaných", "<b>iné</b><br>4 muži<br>2.6% prítomných<br>2.0% registrovaných", "<b>podpora výskumu</b><br>2 muži<br>1.3% prítomných<br>1.0% registrovaných", "<b>komerčná spoločnosť</b><br>2 muži<br>1.3% prítomných<br>1.0% registrovaných", "<b>nadnárodná organizácia</b><br>1 muž<br>0.6% prítomných<br>0.5% registrovaných", "", "", "", "<b>neuvedené</b><br>1 muž<br>0.6% prítomných<br>0.5% registrovaných"]
	},
	{
	x: [37, 13, 2, 2, 3, 5, 2, 1, 0, 2, 1],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "mimovládna organizácia", "práca s mládežou", "štátna správa", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>37 neprítomných<br>18.6% registrovaných", "<b>výskumné pracovisko</b><br>13 neprítomných<br>6.5% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.0% registrovaných", "<b>iné</b><br>2 neprítomní<br>1.0% registrovaných", "<b>podpora výskumu</b><br>3 neprítomní<br>1.5% registrovaných", "<b>komerčná spoločnosť</b><br>5 neprítomných<br>2.5% registrovaných", "<b>nadnárodná organizácia</b><br>2 neprítomní<br>1.0% registrovaných", "<b>mimovládna organizácia</b><br>1 neprítomný/á<br>0.5% registrovaných", "", "<b>štátna správa</b><br>2 neprítomní<br>1.0% registrovaných", "<b>neuvedené</b><br>1 neprítomný/á<br>0.5% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "iné", "podpora výskumu", "komerčná spoločnosť", "nadnárodná organizácia", "mimovládna organizácia", "práca s mládežou", "štátna správa", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 25 osôb<br>16.0% prítomných<br>"]
	}
];

var data_position_country_2017 = [
	// position_country 2017
	{
	x: [7, 16, 0, 11, 0, 14, 1, 12, 13, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>Slovensko: 7 osôb<br>4.5% prítomných<br>3.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 16 osôb<br>10.3% prítomných<br>8.0% registrovaných", "", "<b>postdok, junior researcher</b><br>Slovensko: 11 osôb<br>7.1% prítomných<br>5.5% registrovaných", "", "<b>doktorand </b><br>Slovensko: 14 osôb<br>9.0% prítomných<br>7.0% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 12 osôb<br>7.7% prítomných<br>6.0% registrovaných", "<b>iné </b><br>Slovensko: 13 osôb<br>8.3% prítomných<br>6.5% registrovaných", ""]
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
	visible: true,
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
	visible: true,
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
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>neuvedené (krajina): 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "<b>postdok, junior researcher</b><br>neuvedené (krajina): 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", "<b>mimo akadémie </b><br>neuvedené (krajina): 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "<b>iné </b><br>neuvedené (krajina): 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", ""]
	},
	{
	x: [3, 9, 0, 9, 0, 17, 0, 16, 14, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>3 neprítomní<br>1.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>9 neprítomných<br>4.5% registrovaných", "", "<b>postdok, junior researcher</b><br>9 neprítomných<br>4.5% registrovaných", "", "<b>doktorand </b><br>17 neprítomných<br>8.5% registrovaných", "", "<b>študent (Bc./Mgr.) </b><br>16 neprítomných<br>8.0% registrovaných", "<b>iné </b><br>14 neprítomných<br>7.0% registrovaných", ""]
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
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 25 osôb<br>16.0% prítomných<br>"]
	},
	{
	x: [14, 11, 16, 12, 13, 7, 1, 0, 0, 0],
	y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>doktorand </b><br>Slovensko: 14 osôb<br>9.0% prítomných<br>7.0% registrovaných", "<b>postdok, junior researcher</b><br>Slovensko: 11 osôb<br>7.1% prítomných<br>5.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 16 osôb<br>10.3% prítomných<br>8.0% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 12 osôb<br>7.7% prítomných<br>6.0% registrovaných", "<b>iné </b><br>Slovensko: 13 osôb<br>8.3% prítomných<br>6.5% registrovaných", "<b>profesor, docent </b><br>Slovensko: 7 osôb<br>4.5% prítomných<br>3.5% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", ""]
	},
	{
	x: [1, 0, 2, 0, 0, 1, 0, 0, 0, 0],
	y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>doktorand </b><br>SR + zahraničie: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "<b>vedecký pracovník (senior researcher) </b><br>SR + zahraničie: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", "<b>profesor, docent </b><br>SR + zahraničie: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", "", ""]
	},
	{
	x: [14, 16, 4, 11, 1, 0, 2, 0, 0, 0],
	y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>doktorand </b><br>zahraničie: 14 osôb<br>9.0% prítomných<br>7.0% registrovaných", "<b>postdok, junior researcher</b><br>zahraničie: 16 osôb<br>10.3% prítomných<br>8.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 4 osoby<br>2.6% prítomných<br>2.0% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 11 osôb<br>7.1% prítomných<br>5.5% registrovaných", "<b>iné </b><br>zahraničie: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "<b>mimo akadémie </b><br>zahraničie: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", ""]
	},
	{
	x: [0, 1, 2, 0, 1, 0, 1, 0, 0, 0],
	y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "<b>postdok, junior researcher</b><br>neuvedené (krajina): 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>neuvedené (krajina): 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "<b>iné </b><br>neuvedené (krajina): 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "<b>mimo akadémie </b><br>neuvedené (krajina): 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", ""]
	},
	{
	x: [17, 9, 9, 16, 14, 3, 0, 0, 0, 0],
	y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>doktorand </b><br>17 neprítomných<br>8.5% registrovaných", "<b>postdok, junior researcher</b><br>9 neprítomných<br>4.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>9 neprítomných<br>4.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>16 neprítomných<br>8.0% registrovaných", "<b>iné </b><br>14 neprítomných<br>7.0% registrovaných", "<b>profesor, docent </b><br>3 neprítomní<br>1.5% registrovaných", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 25],
	y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 25 osôb<br>16.0% prítomných<br>"]
	}
];

var data_position_gender_2017 = [
	// position_gender 2017
	{
	x: [2, 5, 0, 16, 0, 12, 1, 15, 6, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesorka, docentka </b><br>2 ženy<br>1.3% prítomných<br>1.0% registrovaných", "<b>vedecká pracovníčka (senior researcher) </b><br>5 žien<br>3.2% prítomných<br>2.5% registrovaných", "", "<b>postdok, junior researcher</b><br>16 žien<br>10.3% prítomných<br>8.0% registrovaných", "", "<b>doktorandka </b><br>12 žien<br>7.7% prítomných<br>6.0% registrovaných", "<b>mimo akadémie </b><br>1 žena<br>0.6% prítomných<br>0.5% registrovaných", "<b>študentka (Bc./Mgr.) </b><br>15 žien<br>9.6% prítomných<br>7.5% registrovaných", "<b>iné </b><br>6 žien<br>3.8% prítomných<br>3.0% registrovaných", ""]
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
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>6 mužov<br>3.8% prítomných<br>3.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>19 mužov<br>12.2% prítomných<br>9.5% registrovaných", "", "<b>postdok, junior researcher</b><br>12 mužov<br>7.7% prítomných<br>6.0% registrovaných", "", "<b>doktorand </b><br>17 mužov<br>10.9% prítomných<br>8.5% registrovaných", "<b>mimo akadémie </b><br>3 muži<br>1.9% prítomných<br>1.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>8 mužov<br>5.1% prítomných<br>4.0% registrovaných", "<b>iné </b><br>9 mužov<br>5.8% prítomných<br>4.5% registrovaných", ""]
	},
	{
	x: [3, 9, 0, 9, 0, 17, 0, 16, 14, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>3 neprítomní<br>1.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>9 neprítomných<br>4.5% registrovaných", "", "<b>postdok, junior researcher</b><br>9 neprítomných<br>4.5% registrovaných", "", "<b>doktorand </b><br>17 neprítomných<br>8.5% registrovaných", "", "<b>študent (Bc./Mgr.) </b><br>16 neprítomných<br>8.0% registrovaných", "<b>iné </b><br>14 neprítomných<br>7.0% registrovaných", ""]
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
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 25 osôb<br>16.0% prítomných<br>"]
	},
	{
	x: [12, 16, 5, 15, 6, 2, 1, 0, 0, 0],
	y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>doktorandka </b><br>12 žien<br>7.7% prítomných<br>6.0% registrovaných", "<b>postdok, junior researcher</b><br>16 žien<br>10.3% prítomných<br>8.0% registrovaných", "<b>vedecká pracovníčka (senior researcher) </b><br>5 žien<br>3.2% prítomných<br>2.5% registrovaných", "<b>študentka (Bc./Mgr.) </b><br>15 žien<br>9.6% prítomných<br>7.5% registrovaných", "<b>iné </b><br>6 žien<br>3.8% prítomných<br>3.0% registrovaných", "<b>profesorka, docentka </b><br>2 ženy<br>1.3% prítomných<br>1.0% registrovaných", "<b>mimo akadémie </b><br>1 žena<br>0.6% prítomných<br>0.5% registrovaných", "", "", ""]
	},
	{
	x: [17, 12, 19, 8, 9, 6, 3, 0, 0, 0],
	y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>doktorand </b><br>17 mužov<br>10.9% prítomných<br>8.5% registrovaných", "<b>postdok, junior researcher</b><br>12 mužov<br>7.7% prítomných<br>6.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>19 mužov<br>12.2% prítomných<br>9.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>8 mužov<br>5.1% prítomných<br>4.0% registrovaných", "<b>iné </b><br>9 mužov<br>5.8% prítomných<br>4.5% registrovaných", "<b>profesor, docent </b><br>6 mužov<br>3.8% prítomných<br>3.0% registrovaných", "<b>mimo akadémie </b><br>3 muži<br>1.9% prítomných<br>1.5% registrovaných", "", "", ""]
	},
	{
	x: [17, 9, 9, 16, 14, 3, 0, 0, 0, 0],
	y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>doktorand </b><br>17 neprítomných<br>8.5% registrovaných", "<b>postdok, junior researcher</b><br>9 neprítomných<br>4.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>9 neprítomných<br>4.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>16 neprítomných<br>8.0% registrovaných", "<b>iné </b><br>14 neprítomných<br>7.0% registrovaných", "<b>profesor, docent </b><br>3 neprítomní<br>1.5% registrovaných", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 25],
	y: ["doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "profesor, docent ", "mimo akadémie ", "PI (vedúci laboratória)", "výskum v industry", "neuvedené "],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 25 osôb<br>16.0% prítomných<br>"]
	}
];

var data_registration_timeSeries_2017 = [
	// registration_timeSeries 2017
	{
	x: [433.8128587963, 437.6234143519, 462.0439699074, 583.7114699074, 1259.8950810185, 1262.5178587963, 1269.9864699074, 1270.2753587963, 1272.2614699074, 1273.3292476852, 1274.0506365741, 1274.0692476852, 1274.0931365741, 1274.2461921296, 1274.6692476852, 1274.8078587963, 1275.8700810185, 1277.4536921296, 1279.1050810185, 1283.4323032408, 1283.5664699074, 1297.3278587963, 1300.4684143519, 1319.8356365741, 1321.7423032408, 1322.2048032408, 1358.1017476852, 1379.1278587963, 1402.6981365741, 1418.0764699074, 1444.0939699074, 1464.4948032408, 1465.8964699074, 1474.8206365741, 1501.5036921296, 1514.1217476852, 1519.0159143519, 1567.0009143519, 1613.0836921296, 1694.7798032408, 1764.6759143519, 1782.0498032408, 1799.0523032408, 1959.4428587963, 1968.8756365741, 1971.9678587963, 1992.7948032408, 1992.9603587963, 1994.9642476852, 2019.9350810185, 2031.4275810185, 2125.3906365741, 2141.1928587963, 2163.8889699074, 2218.2909143519, 2218.6334143519, 2234.9767476852, 2240.034525463, 2255.6586921296, 2287.107025463, 2287.1236921296, 2319.4431365741, 2404.539525463, 2439.7061921296, 2448.8661921296, 2449.1517476852, 2449.3859143519, 2450.102025463, 2452.2886921296, 2453.824525463, 2453.839525463, 2471.8289699074, 2475.0706365741, 2476.9711921296, 2478.744525463, 2485.3811921296, 2494.9373032408, 2495.3709143519, 2496.3939699074, 2498.2242476852, 2498.909525463, 2498.9475810185, 2499.929525463, 2499.9548032408, 2501.3967476852, 2502.5659143519, 2503.3234143519, 2503.5798032408, 2503.7892476852, 2527.1681365741, 2533.7161921296, 2534.8773032408, 2545.4311921296, 2547.9809143519, 2549.754525463, 2549.8809143519, 2550.6317476852, 2553.5286921296, 2554.6806365741, 2557.0564699074, 2557.5317476852, 2568.2375810185, 2568.3406365741, 2569.1036921296, 2572.0973032407, 2572.1525810185, 2572.157025463, 2572.3373032408, 2572.7428587963, 2572.9453587963, 2574.78869212963, 2575.6798032408],
	y: ["2", "3", "4", "5", "7", "8", "10", "11", "13", "15", "16", "17", "18", "19", "20", "22", "24", "25", "27", "29", "30", "31", "32", "34", "35", "36", "38", "40", "41", "42", "44", "46", "47", "49", "54", "56", "57", "59", "61", "65", "67", "69", "71", "75", "76", "77", "78", "79", "80", "81", "82", "87", "88", "89", "91", "92", "93", "95", "96", "97", "98", "101", "103", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "116", "117", "123", "125", "126", "128", "130", "131", "132", "134", "135", "137", "138", "139", "140", "141", "143", "145", "147", "151", "153", "154", "155", "156", "158", "159", "161", "162", "164", "165", "166", "169", "170", "171", "172", "176", "178", "180", "182"],
	name: 'Slovensko',
	text: ["20.09.2017 10:34", "20.09.2017 14:22", "21.09.2017 14:47", "26.09.2017 16:27", "24.10.2017 20:38", "24.10.2017 23:16", "25.10.2017 06:44", "25.10.2017 07:01", "25.10.2017 09:00", "25.10.2017 10:05", "25.10.2017 10:48", "25.10.2017 10:49", "25.10.2017 10:50", "25.10.2017 11:00", "25.10.2017 11:25", "25.10.2017 11:33", "25.10.2017 12:37", "25.10.2017 14:12", "25.10.2017 15:51", "25.10.2017 20:11", "25.10.2017 20:19", "26.10.2017 10:04", "26.10.2017 13:13", "27.10.2017 08:35", "27.10.2017 10:29", "27.10.2017 10:57", "28.10.2017 22:51", "29.10.2017 19:52", "30.10.2017 19:27", "31.10.2017 10:49", "01.11.2017 12:50", "02.11.2017 09:14", "02.11.2017 10:39", "02.11.2017 19:34", "03.11.2017 22:15", "04.11.2017 10:52", "04.11.2017 15:46", "06.11.2017 15:45", "08.11.2017 13:50", "11.11.2017 23:32", "14.11.2017 21:25", "15.11.2017 14:48", "16.11.2017 07:48", "23.11.2017 00:11", "23.11.2017 09:37", "23.11.2017 12:43", "24.11.2017 09:32", "24.11.2017 09:42", "24.11.2017 11:43", "25.11.2017 12:41", "26.11.2017 00:10", "29.11.2017 22:08", "30.11.2017 13:56", "01.12.2017 12:38", "03.12.2017 19:02", "03.12.2017 19:23", "04.12.2017 11:43", "04.12.2017 16:47", "05.12.2017 08:24", "06.12.2017 15:51", "06.12.2017 15:52", "08.12.2017 00:11", "11.12.2017 13:17", "13.12.2017 00:27", "13.12.2017 09:37", "13.12.2017 09:54", "13.12.2017 10:08", "13.12.2017 10:51", "13.12.2017 13:02", "13.12.2017 14:34", "13.12.2017 14:35", "14.12.2017 08:35", "14.12.2017 11:49", "14.12.2017 13:43", "14.12.2017 15:29", "14.12.2017 22:08", "15.12.2017 07:41", "15.12.2017 08:07", "15.12.2017 09:08", "15.12.2017 10:58", "15.12.2017 11:39", "15.12.2017 11:42", "15.12.2017 12:41", "15.12.2017 12:42", "15.12.2017 14:09", "15.12.2017 15:19", "15.12.2017 16:04", "15.12.2017 16:20", "15.12.2017 16:32", "16.12.2017 15:55", "16.12.2017 22:28", "16.12.2017 23:37", "17.12.2017 10:11", "17.12.2017 12:44", "17.12.2017 14:30", "17.12.2017 14:38", "17.12.2017 15:23", "17.12.2017 18:17", "17.12.2017 19:26", "17.12.2017 21:48", "17.12.2017 22:17", "18.12.2017 08:59", "18.12.2017 09:05", "18.12.2017 09:51", "18.12.2017 12:51", "18.12.2017 12:54", "18.12.2017 12:54", "18.12.2017 13:05", "18.12.2017 13:29", "18.12.2017 13:42", "18.12.2017 15:33", "18.12.2017 16:26"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>20.09.2017 10:34</b><br>2 osoby<br>1.0% online registrácií", "<b>20.09.2017 14:22</b><br>3 osoby<br>2.0% online registrácií", "<b>21.09.2017 14:47</b><br>4 osoby<br>2.0% online registrácií", "<b>26.09.2017 16:27</b><br>5 osôb<br>3.0% online registrácií", "<b>24.10.2017 20:38</b><br>7 osôb<br>4.0% online registrácií", "<b>24.10.2017 23:16</b><br>8 osôb<br>4.0% online registrácií", "<b>25.10.2017 06:44</b><br>10 osôb<br>5.0% online registrácií", "<b>25.10.2017 07:01</b><br>11 osôb<br>6.0% online registrácií", "<b>25.10.2017 09:00</b><br>13 osôb<br>7.0% online registrácií", "<b>25.10.2017 10:05</b><br>15 osôb<br>8.0% online registrácií", "<b>25.10.2017 10:48</b><br>16 osôb<br>9.0% online registrácií", "<b>25.10.2017 10:49</b><br>17 osôb<br>9.0% online registrácií", "<b>25.10.2017 10:50</b><br>18 osôb<br>10.0% online registrácií", "<b>25.10.2017 11:00</b><br>19 osôb<br>10.0% online registrácií", "<b>25.10.2017 11:25</b><br>20 osôb<br>11.0% online registrácií", "<b>25.10.2017 11:33</b><br>22 osôb<br>12.0% online registrácií", "<b>25.10.2017 12:37</b><br>24 osôb<br>13.0% online registrácií", "<b>25.10.2017 14:12</b><br>25 osôb<br>14.0% online registrácií", "<b>25.10.2017 15:51</b><br>27 osôb<br>15.0% online registrácií", "<b>25.10.2017 20:11</b><br>29 osôb<br>16.0% online registrácií", "<b>25.10.2017 20:19</b><br>30 osôb<br>16.0% online registrácií", "<b>26.10.2017 10:04</b><br>31 osôb<br>17.0% online registrácií", "<b>26.10.2017 13:13</b><br>32 osôb<br>17.0% online registrácií", "<b>27.10.2017 08:35</b><br>34 osôb<br>18.0% online registrácií", "<b>27.10.2017 10:29</b><br>35 osôb<br>19.0% online registrácií", "<b>27.10.2017 10:57</b><br>36 osôb<br>19.0% online registrácií", "<b>28.10.2017 22:51</b><br>38 osôb<br>21.0% online registrácií", "<b>29.10.2017 19:52</b><br>40 osôb<br>22.0% online registrácií", "<b>30.10.2017 19:27</b><br>41 osôb<br>22.0% online registrácií", "<b>31.10.2017 10:49</b><br>42 osôb<br>23.0% online registrácií", "<b>01.11.2017 12:50</b><br>44 osôb<br>24.0% online registrácií", "<b>02.11.2017 09:14</b><br>46 osôb<br>25.0% online registrácií", "<b>02.11.2017 10:39</b><br>47 osôb<br>25.0% online registrácií", "<b>02.11.2017 19:34</b><br>49 osôb<br>26.0% online registrácií", "<b>03.11.2017 22:15</b><br>54 osôb<br>29.0% online registrácií", "<b>04.11.2017 10:52</b><br>56 osôb<br>30.0% online registrácií", "<b>04.11.2017 15:46</b><br>57 osôb<br>31.0% online registrácií", "<b>06.11.2017 15:45</b><br>59 osôb<br>32.0% online registrácií", "<b>08.11.2017 13:50</b><br>61 osôb<br>33.0% online registrácií", "<b>11.11.2017 23:32</b><br>65 osôb<br>35.0% online registrácií", "<b>14.11.2017 21:25</b><br>67 osôb<br>36.0% online registrácií", "<b>15.11.2017 14:48</b><br>69 osôb<br>37.0% online registrácií", "<b>16.11.2017 07:48</b><br>71 osôb<br>38.0% online registrácií", "<b>23.11.2017 00:11</b><br>75 osôb<br>41.0% online registrácií", "<b>23.11.2017 09:37</b><br>76 osôb<br>41.0% online registrácií", "<b>23.11.2017 12:43</b><br>77 osôb<br>42.0% online registrácií", "<b>24.11.2017 09:32</b><br>78 osôb<br>42.0% online registrácií", "<b>24.11.2017 09:42</b><br>79 osôb<br>43.0% online registrácií", "<b>24.11.2017 11:43</b><br>80 osôb<br>43.0% online registrácií", "<b>25.11.2017 12:41</b><br>81 osôb<br>44.0% online registrácií", "<b>26.11.2017 00:10</b><br>82 osôb<br>44.0% online registrácií", "<b>29.11.2017 22:08</b><br>87 osôb<br>47.0% online registrácií", "<b>30.11.2017 13:56</b><br>88 osôb<br>48.0% online registrácií", "<b>01.12.2017 12:38</b><br>89 osôb<br>48.0% online registrácií", "<b>03.12.2017 19:02</b><br>91 osôb<br>49.0% online registrácií", "<b>03.12.2017 19:23</b><br>92 osôb<br>50.0% online registrácií", "<b>04.12.2017 11:43</b><br>93 osôb<br>50.0% online registrácií", "<b>04.12.2017 16:47</b><br>95 osôb<br>51.0% online registrácií", "<b>05.12.2017 08:24</b><br>96 osôb<br>52.0% online registrácií", "<b>06.12.2017 15:51</b><br>97 osôb<br>52.0% online registrácií", "<b>06.12.2017 15:52</b><br>98 osôb<br>53.0% online registrácií", "<b>08.12.2017 00:11</b><br>101 osôb<br>55.0% online registrácií", "<b>11.12.2017 13:17</b><br>103 osôb<br>56.0% online registrácií", "<b>13.12.2017 00:27</b><br>105 osôb<br>57.0% online registrácií", "<b>13.12.2017 09:37</b><br>106 osôb<br>57.0% online registrácií", "<b>13.12.2017 09:54</b><br>107 osôb<br>58.0% online registrácií", "<b>13.12.2017 10:08</b><br>108 osôb<br>58.0% online registrácií", "<b>13.12.2017 10:51</b><br>109 osôb<br>59.0% online registrácií", "<b>13.12.2017 13:02</b><br>110 osôb<br>59.0% online registrácií", "<b>13.12.2017 14:34</b><br>111 osôb<br>60.0% online registrácií", "<b>13.12.2017 14:35</b><br>112 osôb<br>61.0% online registrácií", "<b>14.12.2017 08:35</b><br>113 osôb<br>61.0% online registrácií", "<b>14.12.2017 11:49</b><br>114 osôb<br>62.0% online registrácií", "<b>14.12.2017 13:43</b><br>116 osôb<br>63.0% online registrácií", "<b>14.12.2017 15:29</b><br>117 osôb<br>63.0% online registrácií", "<b>14.12.2017 22:08</b><br>123 osôb<br>66.0% online registrácií", "<b>15.12.2017 07:41</b><br>125 osôb<br>68.0% online registrácií", "<b>15.12.2017 08:07</b><br>126 osôb<br>68.0% online registrácií", "<b>15.12.2017 09:08</b><br>128 osôb<br>69.0% online registrácií", "<b>15.12.2017 10:58</b><br>130 osôb<br>70.0% online registrácií", "<b>15.12.2017 11:39</b><br>131 osôb<br>71.0% online registrácií", "<b>15.12.2017 11:42</b><br>132 osôb<br>71.0% online registrácií", "<b>15.12.2017 12:41</b><br>134 osôb<br>72.0% online registrácií", "<b>15.12.2017 12:42</b><br>135 osôb<br>73.0% online registrácií", "<b>15.12.2017 14:09</b><br>137 osôb<br>74.0% online registrácií", "<b>15.12.2017 15:19</b><br>138 osôb<br>75.0% online registrácií", "<b>15.12.2017 16:04</b><br>139 osôb<br>75.0% online registrácií", "<b>15.12.2017 16:20</b><br>140 osôb<br>76.0% online registrácií", "<b>15.12.2017 16:32</b><br>141 osôb<br>76.0% online registrácií", "<b>16.12.2017 15:55</b><br>143 osôb<br>77.0% online registrácií", "<b>16.12.2017 22:28</b><br>145 osôb<br>78.0% online registrácií", "<b>16.12.2017 23:37</b><br>147 osôb<br>79.0% online registrácií", "<b>17.12.2017 10:11</b><br>151 osôb<br>82.0% online registrácií", "<b>17.12.2017 12:44</b><br>153 osôb<br>83.0% online registrácií", "<b>17.12.2017 14:30</b><br>154 osôb<br>83.0% online registrácií", "<b>17.12.2017 14:38</b><br>155 osôb<br>84.0% online registrácií", "<b>17.12.2017 15:23</b><br>156 osôb<br>84.0% online registrácií", "<b>17.12.2017 18:17</b><br>158 osôb<br>85.0% online registrácií", "<b>17.12.2017 19:26</b><br>159 osôb<br>86.0% online registrácií", "<b>17.12.2017 21:48</b><br>161 osôb<br>87.0% online registrácií", "<b>17.12.2017 22:17</b><br>162 osôb<br>88.0% online registrácií", "<b>18.12.2017 08:59</b><br>164 osôb<br>89.0% online registrácií", "<b>18.12.2017 09:05</b><br>165 osôb<br>89.0% online registrácií", "<b>18.12.2017 09:51</b><br>166 osôb<br>90.0% online registrácií", "<b>18.12.2017 12:51</b><br>169 osôb<br>91.0% online registrácií", "<b>18.12.2017 12:54</b><br>170 osôb<br>92.0% online registrácií", "<b>18.12.2017 12:54</b><br>171 osôb<br>92.0% online registrácií", "<b>18.12.2017 13:05</b><br>172 osôb<br>93.0% online registrácií", "<b>18.12.2017 13:29</b><br>176 osôb<br>95.0% online registrácií", "<b>18.12.2017 13:42</b><br>178 osôb<br>96.0% online registrácií", "<b>18.12.2017 15:33</b><br>180 osôb<br>97.0% online registrácií", "<b>18.12.2017 16:26</b><br>182 osôb<br>98.0% online registrácií"]
	},
	{
	x: [1280.5092476852, 1585.3131365741, 1619.5664699074, 2485.8128587963],
	y: ["28", "60", "62", "124"],
	name: 'SR + zahraničie',
	text: ["25.10.2017 17:15", "07.11.2017 10:04", "08.11.2017 20:19", "14.12.2017 22:34"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>25.10.2017 17:15</b><br>28 osôb<br>15.0% online registrácií", "<b>07.11.2017 10:04</b><br>60 osôb<br>32.0% online registrácií", "<b>08.11.2017 20:19</b><br>62 osôb<br>34.0% online registrácií", "<b>14.12.2017 22:34</b><br>124 osôb<br>67.0% online registrácií"]
	},
	{
	x: [432.3806365741, 1189.002025463, 1263.0225810185, 1271.7898032407, 1272.8050810185, 1274.6961921296, 1275.1734143519, 1277.939525463, 1355.809525463, 1378.4600810185, 1424.889525463, 1455.0767476852, 1474.6875810185, 1490.7856365741, 1499.7367476852, 1500.0078587963, 1501.4764699074, 1501.7506365741, 1540.1900810185, 1665.7028587963, 1682.3764699074, 1777.8973032408, 1786.5198032408, 1860.6900810185, 2052.4809143519, 2052.4898032408, 2066.0281365741, 2066.7984143519, 2213.8081365741, 2238.6214699074, 2293.1161921296, 2316.4056365741, 2329.0261921296, 2476.894525463, 2479.3686921296, 2481.3706365741, 2481.4036921296, 2496.2700810185, 2497.877025463, 2499.0728587963, 2500.5167476852, 2506.6906365741, 2528.4498032408, 2534.4759143519, 2535.5839699074, 2536.4723032408, 2544.6475810185, 2546.5325810185, 2552.1639699074, 2555.092025463, 2571.1198032408, 2572.0534143519, 2572.3723032408, 2572.3681365741, 2572.4211921296, 2572.7750810185, 2573.01619212963, 2575.6567476852, 2575.7067476852],
	y: ["1", "6", "9", "12", "14", "21", "23", "26", "37", "39", "43", "45", "48", "50", "51", "52", "53", "55", "58", "63", "64", "68", "70", "72", "83", "84", "85", "86", "90", "94", "99", "100", "102", "115", "118", "120", "121", "127", "129", "133", "136", "142", "144", "146", "148", "149", "150", "152", "157", "160", "167", "168", "173", "174", "175", "177", "179", "181", "183"],
	name: 'zahraničie',
	text: ["20.09.2017 09:08", "21.10.2017 21:45", "24.10.2017 23:46", "25.10.2017 08:32", "25.10.2017 09:33", "25.10.2017 11:27", "25.10.2017 11:55", "25.10.2017 14:41", "28.10.2017 20:33", "29.10.2017 19:12", "31.10.2017 17:38", "01.11.2017 23:49", "02.11.2017 19:26", "03.11.2017 11:32", "03.11.2017 20:29", "03.11.2017 20:45", "03.11.2017 22:13", "03.11.2017 22:30", "05.11.2017 12:56", "10.11.2017 18:27", "11.11.2017 11:07", "15.11.2017 10:39", "15.11.2017 19:16", "18.11.2017 21:26", "26.11.2017 21:14", "26.11.2017 21:14", "27.11.2017 10:46", "27.11.2017 11:33", "03.12.2017 14:33", "04.12.2017 15:22", "06.12.2017 21:52", "07.12.2017 21:09", "08.12.2017 09:46", "14.12.2017 13:38", "14.12.2017 16:07", "14.12.2017 18:07", "14.12.2017 18:09", "15.12.2017 09:01", "15.12.2017 10:37", "15.12.2017 11:49", "15.12.2017 13:16", "15.12.2017 19:26", "16.12.2017 17:12", "16.12.2017 23:13", "17.12.2017 00:20", "17.12.2017 01:13", "17.12.2017 09:24", "17.12.2017 11:17", "17.12.2017 16:55", "17.12.2017 19:50", "18.12.2017 11:52", "18.12.2017 12:48", "18.12.2017 13:07", "18.12.2017 13:07", "18.12.2017 13:10", "18.12.2017 13:31", "18.12.2017 13:46", "18.12.2017 16:24", "18.12.2017 16:27"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>20.09.2017 09:08</b><br>1 osoba<br>1.0% online registrácií", "<b>21.10.2017 21:45</b><br>6 osôb<br>3.0% online registrácií", "<b>24.10.2017 23:46</b><br>9 osôb<br>5.0% online registrácií", "<b>25.10.2017 08:32</b><br>12 osôb<br>6.0% online registrácií", "<b>25.10.2017 09:33</b><br>14 osôb<br>8.0% online registrácií", "<b>25.10.2017 11:27</b><br>21 osôb<br>11.0% online registrácií", "<b>25.10.2017 11:55</b><br>23 osôb<br>12.0% online registrácií", "<b>25.10.2017 14:41</b><br>26 osôb<br>14.0% online registrácií", "<b>28.10.2017 20:33</b><br>37 osôb<br>20.0% online registrácií", "<b>29.10.2017 19:12</b><br>39 osôb<br>21.0% online registrácií", "<b>31.10.2017 17:38</b><br>43 osôb<br>23.0% online registrácií", "<b>01.11.2017 23:49</b><br>45 osôb<br>24.0% online registrácií", "<b>02.11.2017 19:26</b><br>48 osôb<br>26.0% online registrácií", "<b>03.11.2017 11:32</b><br>50 osôb<br>27.0% online registrácií", "<b>03.11.2017 20:29</b><br>51 osôb<br>28.0% online registrácií", "<b>03.11.2017 20:45</b><br>52 osôb<br>28.0% online registrácií", "<b>03.11.2017 22:13</b><br>53 osôb<br>29.0% online registrácií", "<b>03.11.2017 22:30</b><br>55 osôb<br>30.0% online registrácií", "<b>05.11.2017 12:56</b><br>58 osôb<br>31.0% online registrácií", "<b>10.11.2017 18:27</b><br>63 osôb<br>34.0% online registrácií", "<b>11.11.2017 11:07</b><br>64 osôb<br>35.0% online registrácií", "<b>15.11.2017 10:39</b><br>68 osôb<br>37.0% online registrácií", "<b>15.11.2017 19:16</b><br>70 osôb<br>38.0% online registrácií", "<b>18.11.2017 21:26</b><br>72 osôb<br>39.0% online registrácií", "<b>26.11.2017 21:14</b><br>83 osôb<br>45.0% online registrácií", "<b>26.11.2017 21:14</b><br>84 osôb<br>45.0% online registrácií", "<b>27.11.2017 10:46</b><br>85 osôb<br>46.0% online registrácií", "<b>27.11.2017 11:33</b><br>86 osôb<br>46.0% online registrácií", "<b>03.12.2017 14:33</b><br>90 osôb<br>49.0% online registrácií", "<b>04.12.2017 15:22</b><br>94 osôb<br>51.0% online registrácií", "<b>06.12.2017 21:52</b><br>99 osôb<br>54.0% online registrácií", "<b>07.12.2017 21:09</b><br>100 osôb<br>54.0% online registrácií", "<b>08.12.2017 09:46</b><br>102 osôb<br>55.0% online registrácií", "<b>14.12.2017 13:38</b><br>115 osôb<br>62.0% online registrácií", "<b>14.12.2017 16:07</b><br>118 osôb<br>64.0% online registrácií", "<b>14.12.2017 18:07</b><br>120 osôb<br>65.0% online registrácií", "<b>14.12.2017 18:09</b><br>121 osôb<br>65.0% online registrácií", "<b>15.12.2017 09:01</b><br>127 osôb<br>69.0% online registrácií", "<b>15.12.2017 10:37</b><br>129 osôb<br>70.0% online registrácií", "<b>15.12.2017 11:49</b><br>133 osôb<br>72.0% online registrácií", "<b>15.12.2017 13:16</b><br>136 osôb<br>74.0% online registrácií", "<b>15.12.2017 19:26</b><br>142 osôb<br>77.0% online registrácií", "<b>16.12.2017 17:12</b><br>144 osôb<br>78.0% online registrácií", "<b>16.12.2017 23:13</b><br>146 osôb<br>79.0% online registrácií", "<b>17.12.2017 00:20</b><br>148 osôb<br>80.0% online registrácií", "<b>17.12.2017 01:13</b><br>149 osôb<br>81.0% online registrácií", "<b>17.12.2017 09:24</b><br>150 osôb<br>81.0% online registrácií", "<b>17.12.2017 11:17</b><br>152 osôb<br>82.0% online registrácií", "<b>17.12.2017 16:55</b><br>157 osôb<br>85.0% online registrácií", "<b>17.12.2017 19:50</b><br>160 osôb<br>86.0% online registrácií", "<b>18.12.2017 11:52</b><br>167 osôb<br>90.0% online registrácií", "<b>18.12.2017 12:48</b><br>168 osôb<br>91.0% online registrácií", "<b>18.12.2017 13:07</b><br>173 osôb<br>94.0% online registrácií", "<b>18.12.2017 13:07</b><br>174 osôb<br>94.0% online registrácií", "<b>18.12.2017 13:10</b><br>175 osôb<br>95.0% online registrácií", "<b>18.12.2017 13:31</b><br>177 osôb<br>96.0% online registrácií", "<b>18.12.2017 13:46</b><br>179 osôb<br>97.0% online registrácií", "<b>18.12.2017 16:24</b><br>181 osôb<br>98.0% online registrácií", "<b>18.12.2017 16:27</b><br>183 osôb<br>99.0% online registrácií"]
	},
	{
	x: [1305.3306365741, 1733.5161921296, 1896.8778587963, 1957.8536921296, 2404.5586921296, 2481.1686921296, 2481.4856365741, 2559.0809143519],
	y: ["33", "66", "73", "74", "104", "119", "122", "163"],
	name: 'neuvedené',
	text: ["26.10.2017 18:05", "13.11.2017 14:16", "20.11.2017 09:37", "22.11.2017 22:36", "11.12.2017 13:18", "14.12.2017 17:55", "14.12.2017 18:14", "17.12.2017 23:50"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>26.10.2017 18:05</b><br>33 osôb<br>18.0% online registrácií", "<b>13.11.2017 14:16</b><br>66 osôb<br>36.0% online registrácií", "<b>20.11.2017 09:37</b><br>73 osôb<br>39.0% online registrácií", "<b>22.11.2017 22:36</b><br>74 osôb<br>40.0% online registrácií", "<b>11.12.2017 13:18</b><br>104 osôb<br>56.0% online registrácií", "<b>14.12.2017 17:55</b><br>119 osôb<br>64.0% online registrácií", "<b>14.12.2017 18:14</b><br>122 osôb<br>66.0% online registrácií", "<b>17.12.2017 23:50</b><br>163 osôb<br>88.0% online registrácií"]
	},
	{
		x: [0, 432.3806365741, 433.8128587963, 437.6234143519, 462.0439699074, 583.7114699074, 1189.002025463, 1259.8950810185, 1262.5178587963, 1263.0225810185, 1269.9864699074, 1270.2753587963, 1271.7898032407, 1272.2614699074, 1272.8050810185, 1273.3292476852, 1274.0506365741, 1274.0692476852, 1274.0931365741, 1274.2461921296, 1274.6692476852, 1274.6961921296, 1274.8078587963, 1275.1734143519, 1275.8700810185, 1277.4536921296, 1277.939525463, 1279.1050810185, 1280.5092476852, 1283.4323032408, 1283.5664699074, 1297.3278587963, 1300.4684143519, 1305.3306365741, 1319.8356365741, 1321.7423032408, 1322.2048032408, 1355.809525463, 1358.1017476852, 1378.4600810185, 1379.1278587963, 1402.6981365741, 1418.0764699074, 1424.889525463, 1444.0939699074, 1455.0767476852, 1464.4948032408, 1465.8964699074, 1474.6875810185, 1474.8206365741, 1490.7856365741, 1499.7367476852, 1500.0078587963, 1501.4764699074, 1501.5036921296, 1501.7506365741, 1514.1217476852, 1519.0159143519, 1540.1900810185, 1567.0009143519, 1585.3131365741, 1613.0836921296, 1619.5664699074, 1665.7028587963, 1682.3764699074, 1694.7798032408, 1733.5161921296, 1764.6759143519, 1777.8973032408, 1782.0498032408, 1786.5198032408, 1799.0523032408, 1860.6900810185, 1896.8778587963, 1957.8536921296, 1959.4428587963, 1968.8756365741, 1971.9678587963, 1992.7948032408, 1992.9603587963, 1994.9642476852, 2019.9350810185, 2031.4275810185, 2052.4809143519, 2052.4898032408, 2066.0281365741, 2066.7984143519, 2125.3906365741, 2141.1928587963, 2163.8889699074, 2213.8081365741, 2218.2909143519, 2218.6334143519, 2234.9767476852, 2238.6214699074, 2240.034525463, 2255.6586921296, 2287.107025463, 2287.1236921296, 2293.1161921296, 2316.4056365741, 2319.4431365741, 2329.0261921296, 2404.539525463, 2404.5586921296, 2439.7061921296, 2448.8661921296, 2449.1517476852, 2449.3859143519, 2450.102025463, 2452.2886921296, 2453.824525463, 2453.839525463, 2471.8289699074, 2475.0706365741, 2476.894525463, 2476.9711921296, 2478.744525463, 2479.3686921296, 2481.1686921296, 2481.3706365741, 2481.4036921296, 2481.4856365741, 2485.3811921296, 2485.8128587963, 2494.9373032408, 2495.3709143519, 2496.2700810185, 2496.3939699074, 2497.877025463, 2498.2242476852, 2498.909525463, 2498.9475810185, 2499.0728587963, 2499.929525463, 2499.9548032408, 2500.5167476852, 2501.3967476852, 2502.5659143519, 2503.3234143519, 2503.5798032408, 2503.7892476852, 2506.6906365741, 2527.1681365741, 2528.4498032408, 2533.7161921296, 2534.4759143519, 2534.8773032408, 2535.5839699074, 2536.4723032408, 2544.6475810185, 2545.4311921296, 2546.5325810185, 2547.9809143519, 2549.754525463, 2549.8809143519, 2550.6317476852, 2552.1639699074, 2553.5286921296, 2554.6806365741, 2555.092025463, 2557.0564699074, 2557.5317476852, 2559.0809143519, 2568.2375810185, 2568.3406365741, 2569.1036921296, 2571.1198032408, 2572.0534143519, 2572.0973032407, 2572.1525810185, 2572.157025463, 2572.3373032408, 2572.3723032408, 2572.3681365741, 2572.4211921296, 2572.7428587963, 2572.7750810185, 2572.9453587963, 2573.01619212963, 2574.78869212963, 2575.6567476852, 2575.6798032408, 2575.7067476852],
		y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183],
		name: "",
		type: 'bar',
		marker: {
			color: ['rgb(255, 255, 255)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)']
		},
		showlegend: false,
		visible: true,
		hoverinfo: 'skip',
		hovermode: "none"
	}
];

var data_registration_timeLabels_2017 = ["", "20.9.", "", "", "", "", "", "24.10.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "3.11.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "1.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "13.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "18.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

var updateMenu_institution_country_2017 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, true, true, false, false, false, false, false, false]],
		label: 'Zoradiť podľa typu pracoviska',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, true, true, true, true, true, true]],
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

var updateMenu_position_country_2017 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, true, true, false, false, false, false, false, false]],
		label: 'Zoradiť podľa pozície',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, true, true, true, true, true, true]],
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
		args: ['visible', [true, true, true, true, false, false, false, false]],
		label: 'Zoradiť podľa pozície',
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

var data_participation_2018 = [
// participation 2018
{
	type: "sunburst",
	ids: ["všetci_do2020", "prítomní", "neprítomní", "muži 1", "ženy 1", "bez registrácie", "muži 0", "ženy 0"],
	labels: ["dáta z prihlasovania + neregistrovaní účastníci", "prítomní", "neprítomní", "muži", "ženy", "bez registrácie", "muži", "ženy"],
	values: [177, 139, 38, 63, 56, 20, 14, 24],
	parents: ["", "všetci_do2020", "všetci_do2020", "prítomní", "prítomní", "prítomní", "neprítomní", "neprítomní"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(124, 124, 124)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(204, 221, 255)', 'rgb(255, 204, 204)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania + neregistrovaní účastníci</b><br>177 osôb<br>", "139 prítomných<br>88.5% registrovaných", "38 neprítomných<br>24.2% registrovaných", "<b>prítomní</b><br>63 mužov<br>45.3% prítomných<br>40.1% registrovaných", "<b>prítomné</b><br>56 žien<br>40.3% prítomných<br>35.7% registrovaných", "<b>bez registrácie</b><br>20 osôb<br>14.4% prítomných<br>", "<b>neprítomní</b><br>14 mužov<br>8.9% registrovaných", "<b>neprítomné</b><br>24 žien<br>15.3% registrovaných"]
}];

var data_participation_detail_2018 = [
// participation_detail 2018
{
	type: "sunburst",
	ids: ["všetci", "účasť", "iniciatívy", "prednášky", "organizácia", "účastníčky", "účastníci", "bez registrácie", "zástupkyne firiem", "zástupcovia firiem", "aktívne účastníčky", "aktívni účastníci", "organizátorky", "organizátori"],
	labels: ["iba prítomní", "účasť", "iniciatívy", "prednášky", "organizácia", "ženy", "muži", "bez registrácie", "ženy", "muži", "ženy", "muži", "ženy", "muži"],
	values: [139, 93, 21, 15, 10, 37, 36, 20, 9, 12, 4, 11, 7, 3],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "účasť", "účasť", "účasť", "iniciatívy", "iniciatívy", "prednášky", "prednášky", "organizácia", "organizácia"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 214, 16)', 'rgb(255, 174, 16)', 'rgb(255, 134, 16', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(0, 230, 0)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>139 osôb<br>", "<b>účasť</b><br>93 osôb<br>66.9% prítomných<br>", "<b>iniciatívy</b><br>21 osôb<br>15.1% prítomných<br>", "<b>prednášky</b><br>15 osôb<br>10.8% prítomných<br>", "<b>organizácia</b><br>10 osôb<br>7.2% prítomných<br>", "<b>účasť</b><br>37 žien<br>26.6% prítomných<br>", "<b>účasť</b><br>36 mužov<br>25.9% prítomných<br>", "<b>bez registrácie</b><br>20 osôb<br>14.4% prítomných<br>", "<b>iniciatívy</b><br>9 žien<br>6.5% prítomných<br>", "<b>iniciatívy</b><br>12 mužov<br>8.6% prítomných<br>", "<b>prednášky</b><br>4 ženy<br>2.9% prítomných<br>", "<b>prednášky</b><br>11 mužov<br>7.9% prítomných<br>", "<b>organizácia</b><br>7 žien<br>5.0% prítomných<br>", "<b>organizácia</b><br>3 muži<br>2.2% prítomných<br>"]
}];

var data_abroad_2018 = [
// abroad 2018
{
	type: "sunburst",
	ids: ["všetci", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "muži (SR)", "ženy (SR)", "muži (NA)", "ženy (NA)", "bez dát", "muži (oboje)", "muži (zahr.)", "ženy (zahr.)"],
	labels: ["iba prítomní", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "muži", "ženy", "muži", "ženy", "bez registrácie", "muži", "muži", "ženy"],
	values: [139, 70, 1, 27, 41, 35, 35, 14, 7, 20, 1, 13, 14],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "Slovensko", "Slovensko", "neuvedené", "neuvedené", "neuvedené", "SR a zahraničie", "zahraničie", "zahraničie"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(0, 77, 230)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>139 osôb<br>", "<b>Slovensko</b><br>70 osôb<br>50.4% prítomných<br>", "<b>SR a zahraničie</b><br>1 osoba<br>0.7% prítomných<br>", "<b>zahraničie</b><br>27 osôb<br>19.4% prítomných<br>", "<b>neuvedené</b><br>41 osôb<br>29.5% prítomných<br>", "<b>Slovensko</b><br>35 mužov<br>25.2% prítomných<br>", "<b>Slovensko</b><br>35 žien<br>25.2% prítomných<br>", "<b>neuvedené</b><br>14 mužov<br>10.1% prítomných<br>", "<b>neuvedené</b><br>7 žien<br>5.0% prítomných<br>", "<b>bez registrácie</b><br>20 osôb<br>14.4% prítomných<br>", "<b>SR a zahraničie</b><br>1 muž<br>0.7% prítomných<br>", "<b>zahraničie</b><br>13 mužov<br>9.4% prítomných<br>", "<b>zahraničie</b><br>14 žien<br>10.1% prítomných<br>"]
}];

var data_subject_2018 = [
// subject 2018
{
	type: "sunburst",
	ids: ["všetci", "prítomní", "neprítomní", "STEM", "SSH", "iné", "iniciatívy", "STEM (neprítomní)", "SSH (neprítomní)", "iné (neprítomní)", "iniciatívy (neprítomní)", "genetika", "molekulárna biológia", "biológia", "biochémia", "bioinformatika", "biomedicína", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra, urbanizmus", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "STEM neuvedené", "história, pomocné vedy historické", "archeológia", "antropológia", "filológia", "vedy o umení a kultúre", "psychológia", "didaktika", "sociológia", "politické vedy", "SSH neuvedené", "podpora výskumu (STEM)", "podpora výskumu", "vzdelávanie, poradenstvo", "projektový manažment", "štátna správa", "nezaradené", "iné neuvedené", "iniciatíva (podpora výskumu)", "iniciatíva (podpora výskumu (STEM))", "iniciatíva (práca s mládežou (STEM))", "iniciatíva (práca s mládežou)", "iniciatíva (vzdelávanie, poradenstvo)", "iniciatíva (chémia)", "iniciatíva (neuvedené)"],
	labels: ["iba dáta z registrácie", "prítomní", "neprítomní", "STEM", "SSH", "iné", "iniciatívy", "STEM", "SSH", "iné", "iniciatívy", "genetika", "molekulárna biológia", "biológia", "biochémia", "bioinformatika", "biomedicína", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra, urbanizmus", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "neuvedené", "história, pomocné vedy historické", "archeológia", "antropológia", "filológia", "vedy o umení a kultúre", "psychológia", "didaktika", "sociológia", "politické vedy", "neuvedené", "podpora výskumu (STEM)", "podpora výskumu", "vzdelávanie, poradenstvo", "projektový manažment", "štátna správa", "nezaradené", "neuvedené", "podpora výskumu", "podpora výskumu (STEM)", "práca s mládežou (STEM)", "práca s mládežou", "vzdelávanie, poradenstvo", "chémia", "neuvedené"],
	values: [157, 119, 38, 66, 21, 11, 21, 33, 2, 1, 2, 9, 8, 4, 8, 1, 2, 4, 2, 1, 5, 4, 2, 2, 2, 1, 2, 2, 1, 6, 1, 4, 3, 1, 1, 2, 1, 2, 2, 4, 1, 1, 1, 1, 1, 1, 5, 8, 2, 4, 3, 1, 1, 2],
	parents: ["", "všetci", "všetci", "prítomní", "prítomní", "prítomní", "prítomní", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(190, 190, 190)', 'rgb(0, 102, 102)', 'rgb(204, 0, 0)', 'rgb(62, 0, 62)', 'rgb(82, 0, 82)', 'rgb(95, 146, 146)', 'rgb(197, 95, 95)', 'rgb(126,95,126)', 'rgb(82, 0, 82)', 'rgb(53, 104, 0)', 'rgb(82, 163, 0)', 'rgb(102, 204, 0)', 'rgb(222, 222, 92)', 'rgb(255,247,126)', 'rgb(255, 255, 98)', 'rgb(255, 204, 0)', 'rgb(255, 128, 0)', 'rgb(204, 101, 0)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(0, 0, 255)', 'rgb(0, 128, 255)', 'rgb(136, 136, 136)', 'rgb(175, 175, 175)', 'rgb(36, 18, 0)', 'rgb(75, 37, 0)', 'rgb(89, 121, 0)', 'rgb(0, 102, 102)', 'rgb(145,0,73)', 'rgb(204, 0, 102)', 'rgb(255, 47, 151)', 'rgb(153, 0, 76)', 'rgb(184, 24, 83)', 'rgb(214, 48, 90)', 'rgb(214, 48, 62)', 'rgb(214, 48, 48)', 'rgb(218, 94, 69)', 'rgb(204, 0, 0)', 'rgb(31, 51, 82)', 'rgb(82, 0, 82)', 'rgb(132, 0, 132)', 'rgb(152, 0, 152)', 'rgb(172, 0, 172)', 'rgb(62, 0, 62)', 'rgb(62, 0, 62)', 'rgb(82, 0, 82)', 'rgb(31, 51, 82)', 'rgb(36, 77, 112)', 'rgb(142, 0, 142)', 'rgb(132, 0, 132)', 'rgb(204, 101, 0)', 'rgb(124, 124, 124)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba dáta z registrácie</b><br>157 osôb<br>", "119 prítomných<br>75.8% registrovaných", "38 neprítomných<br>24.2% registrovaných", "<b>STEM</b><br>66 osôb<br>55.5% prítomných<br>42.0% registrovaných", "<b>SSH</b><br>21 osôb<br>17.6% prítomných<br>13.4% registrovaných", "<b>iné</b><br>11 osôb<br>9.2% prítomných<br>7.0% registrovaných", "<b>iniciatívy</b><br>21 osôb<br>17.6% prítomných<br>13.4% registrovaných", "<b>STEM</b><br>33 osôb<br>21.0% registrovaných", "<b>SSH</b><br>2 osoby<br>1.3% registrovaných", "<b>iné</b><br>1 osoba<br>0.6% registrovaných", "<b>iniciatívy</b><br>2 osoby<br>1.3% registrovaných", "<b>genetika</b><br>9 osôb<br>7.6% prítomných<br>5.7% registrovaných", "<b>molekulárna biológia</b><br>8 osôb<br>6.7% prítomných<br>5.1% registrovaných", "<b>biológia</b><br>4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>biochémia</b><br>8 osôb<br>6.7% prítomných<br>5.1% registrovaných", "<b>bioinformatika</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>biomedicína</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>neurovedy</b><br>4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>medicína, lekárske vedy</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>farmácia</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>chémia</b><br>5 osôb<br>4.2% prítomných<br>3.2% registrovaných", "<b>fyzika</b><br>4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>matematika</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>IT</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>technológie</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>stavebné inžinierstvo, architektúra, urbanizmus</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>geopriestorové vedy</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>vedy o Zemi</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>ekologické a environmentálne vedy</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>neuvedené</b><br>6 osôb<br>5.0% prítomných<br>3.8% registrovaných", "<b>história, pomocné vedy historické</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>archeológia</b><br>4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>antropológia</b><br>3 osoby<br>2.5% prítomných<br>1.9% registrovaných", "<b>filológia</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>vedy o umení a kultúre</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>psychológia</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>didaktika</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>sociológia</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>politické vedy</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>neuvedené</b><br>4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>podpora výskumu (STEM)</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>podpora výskumu</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>vzdelávanie, poradenstvo</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>projektový manažment</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>štátna správa</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>nezaradené</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>neuvedené</b><br>5 osôb<br>4.2% prítomných<br>3.2% registrovaných", "<b>podpora výskumu</b><br>8 osôb<br>6.7% prítomných<br>5.1% registrovaných", "<b>podpora výskumu (STEM)</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>práca s mládežou (STEM)</b><br>4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>práca s mládežou</b><br>3 osoby<br>2.5% prítomných<br>1.9% registrovaných", "<b>vzdelávanie, poradenstvo</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>chémia</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>neuvedené</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných"]
}];

var data_institution_country_2018 = [
	// institution_country 2018
	{
	x: [27, 0, 13, 0, 7, 9, 7, 2, 1, 2, 2],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 27 osôb<br>19.4% prítomných<br>17.2% registrovaných", "", "<b>výskumné pracovisko</b><br>Slovensko: 13 osôb<br>9.4% prítomných<br>8.3% registrovaných", "", "<b>komerčná spoločnosť</b><br>Slovensko: 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 9 osôb<br>6.5% prítomných<br>5.7% registrovaných", "<b>práca s mládežou</b><br>Slovensko: 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>štátna správa</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>mimovládna organizácia</b><br>Slovensko: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>iné</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>neuvedené</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných"]
	},
	{
	x: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [19, 2, 2, 0, 2, 0, 0, 0, 0, 1, 1],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 19 osôb<br>13.7% prítomných<br>12.1% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "", "<b>komerčná spoločnosť</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "", "", "", "", "<b>iné</b><br>zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>neuvedené</b><br>zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 2, 1, 0, 0, 0, 1, 17],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "<b>komerčná spoločnosť</b><br>neuvedené (krajina): 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>podpora výskumu</b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "", "", "<b>iné</b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>neuvedené</b><br>neuvedené (krajina): 17 osôb<br>12.2% prítomných<br>10.8% registrovaných"]
	},
	{
	x: [22, 2, 5, 0, 4, 2, 1, 0, 0, 2, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>22 neprítomných<br>14.0% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.3% registrovaných", "<b>výskumné pracovisko</b><br>5 neprítomných<br>3.2% registrovaných", "", "<b>komerčná spoločnosť</b><br>4 neprítomní<br>2.5% registrovaných", "<b>podpora výskumu</b><br>2 neprítomní<br>1.3% registrovaných", "<b>práca s mládežou</b><br>1 neprítomný/á<br>0.6% registrovaných", "", "", "<b>iné</b><br>2 neprítomní<br>1.3% registrovaných", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	},
	{
	x: [27, 13, 7, 9, 7, 2, 0, 2, 1, 0, 2],
	y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "mimovládna organizácia", "nadnárodná organizácia", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 27 osôb<br>19.4% prítomných<br>17.2% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 13 osôb<br>9.4% prítomných<br>8.3% registrovaných", "<b>komerčná spoločnosť</b><br>Slovensko: 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 9 osôb<br>6.5% prítomných<br>5.7% registrovaných", "<b>práca s mládežou</b><br>Slovensko: 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>iné</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "", "<b>štátna správa</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>mimovládna organizácia</b><br>Slovensko: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "<b>neuvedené</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných"]
	},
	{
	x: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "mimovládna organizácia", "nadnárodná organizácia", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [19, 2, 2, 0, 0, 1, 2, 0, 0, 0, 1],
	y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "mimovládna organizácia", "nadnárodná organizácia", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 19 osôb<br>13.7% prítomných<br>12.1% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>komerčná spoločnosť</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "", "", "<b>iné</b><br>zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "", "", "", "<b>neuvedené</b><br>zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných"]
	},
	{
	x: [0, 0, 2, 1, 0, 1, 0, 0, 0, 0, 17],
	y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "mimovládna organizácia", "nadnárodná organizácia", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "<b>komerčná spoločnosť</b><br>neuvedené (krajina): 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>podpora výskumu</b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "<b>iné</b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "", "", "", "<b>neuvedené</b><br>neuvedené (krajina): 17 osôb<br>12.2% prítomných<br>10.8% registrovaných"]
	},
	{
	x: [22, 5, 4, 2, 1, 2, 2, 0, 0, 0, 0],
	y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "mimovládna organizácia", "nadnárodná organizácia", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>22 neprítomných<br>14.0% registrovaných", "<b>výskumné pracovisko</b><br>5 neprítomných<br>3.2% registrovaných", "<b>komerčná spoločnosť</b><br>4 neprítomní<br>2.5% registrovaných", "<b>podpora výskumu</b><br>2 neprítomní<br>1.3% registrovaných", "<b>práca s mládežou</b><br>1 neprítomný/á<br>0.6% registrovaných", "<b>iné</b><br>2 neprítomní<br>1.3% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.3% registrovaných", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
	y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "mimovládna organizácia", "nadnárodná organizácia", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	}
];

var data_institution_gender_2018 = [
	// institution_gender 2018
	{
	x: [22, 1, 9, 0, 6, 8, 1, 1, 1, 2, 5],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>22 žien<br>15.8% prítomných<br>14.0% registrovaných", "<b>výskum + univerzita</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>výskumné pracovisko</b><br>9 žien<br>6.5% prítomných<br>5.7% registrovaných", "", "<b>komerčná spoločnosť</b><br>6 žien<br>4.3% prítomných<br>3.8% registrovaných", "<b>podpora výskumu</b><br>8 žien<br>5.8% prítomných<br>5.1% registrovaných", "<b>práca s mládežou</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>štátna správa</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>mimovládna organizácia</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>iné</b><br>2 ženy<br>1.4% prítomných<br>1.3% registrovaných", "<b>neuvedené</b><br>5 žien<br>3.6% prítomných<br>3.2% registrovaných"]
	},
	{
	x: [25, 1, 6, 0, 5, 2, 6, 1, 0, 2, 15],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>25 mužov<br>18.0% prítomných<br>15.9% registrovaných", "<b>výskum + univerzita</b><br>1 muž<br>0.7% prítomných<br>0.6% registrovaných", "<b>výskumné pracovisko</b><br>6 mužov<br>4.3% prítomných<br>3.8% registrovaných", "", "<b>komerčná spoločnosť</b><br>5 mužov<br>3.6% prítomných<br>3.2% registrovaných", "<b>podpora výskumu</b><br>2 muži<br>1.4% prítomných<br>1.3% registrovaných", "<b>práca s mládežou</b><br>6 mužov<br>4.3% prítomných<br>3.8% registrovaných", "<b>štátna správa</b><br>1 muž<br>0.7% prítomných<br>0.6% registrovaných", "", "<b>iné</b><br>2 muži<br>1.4% prítomných<br>1.3% registrovaných", "<b>neuvedené</b><br>15 mužov<br>10.8% prítomných<br>9.6% registrovaných"]
	},
	{
	x: [22, 2, 5, 0, 4, 2, 1, 0, 0, 2, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>22 neprítomných<br>14.0% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.3% registrovaných", "<b>výskumné pracovisko</b><br>5 neprítomných<br>3.2% registrovaných", "", "<b>komerčná spoločnosť</b><br>4 neprítomní<br>2.5% registrovaných", "<b>podpora výskumu</b><br>2 neprítomní<br>1.3% registrovaných", "<b>práca s mládežou</b><br>1 neprítomný/á<br>0.6% registrovaných", "", "", "<b>iné</b><br>2 neprítomní<br>1.3% registrovaných", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	},
	{
	x: [22, 9, 6, 8, 1, 2, 1, 1, 1, 0, 5],
	y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "mimovládna organizácia", "nadnárodná organizácia", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>22 žien<br>15.8% prítomných<br>14.0% registrovaných", "<b>výskumné pracovisko</b><br>9 žien<br>6.5% prítomných<br>5.7% registrovaných", "<b>komerčná spoločnosť</b><br>6 žien<br>4.3% prítomných<br>3.8% registrovaných", "<b>podpora výskumu</b><br>8 žien<br>5.8% prítomných<br>5.1% registrovaných", "<b>práca s mládežou</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>iné</b><br>2 ženy<br>1.4% prítomných<br>1.3% registrovaných", "<b>výskum + univerzita</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>štátna správa</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>mimovládna organizácia</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "", "<b>neuvedené</b><br>5 žien<br>3.6% prítomných<br>3.2% registrovaných"]
	},
	{
	x: [25, 6, 5, 2, 6, 2, 1, 1, 0, 0, 15],
	y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "mimovládna organizácia", "nadnárodná organizácia", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>25 mužov<br>18.0% prítomných<br>15.9% registrovaných", "<b>výskumné pracovisko</b><br>6 mužov<br>4.3% prítomných<br>3.8% registrovaných", "<b>komerčná spoločnosť</b><br>5 mužov<br>3.6% prítomných<br>3.2% registrovaných", "<b>podpora výskumu</b><br>2 muži<br>1.4% prítomných<br>1.3% registrovaných", "<b>práca s mládežou</b><br>6 mužov<br>4.3% prítomných<br>3.8% registrovaných", "<b>iné</b><br>2 muži<br>1.4% prítomných<br>1.3% registrovaných", "<b>výskum + univerzita</b><br>1 muž<br>0.7% prítomných<br>0.6% registrovaných", "<b>štátna správa</b><br>1 muž<br>0.7% prítomných<br>0.6% registrovaných", "", "", "<b>neuvedené</b><br>15 mužov<br>10.8% prítomných<br>9.6% registrovaných"]
	},
	{
	x: [22, 5, 4, 2, 1, 2, 2, 0, 0, 0, 0],
	y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "mimovládna organizácia", "nadnárodná organizácia", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>22 neprítomných<br>14.0% registrovaných", "<b>výskumné pracovisko</b><br>5 neprítomných<br>3.2% registrovaných", "<b>komerčná spoločnosť</b><br>4 neprítomní<br>2.5% registrovaných", "<b>podpora výskumu</b><br>2 neprítomní<br>1.3% registrovaných", "<b>práca s mládežou</b><br>1 neprítomný/á<br>0.6% registrovaných", "<b>iné</b><br>2 neprítomní<br>1.3% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.3% registrovaných", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
	y: ["univerzita", "výskumné pracovisko", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "iné", "výskum + univerzita", "štátna správa", "mimovládna organizácia", "nadnárodná organizácia", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	}
];

var data_position_country_2018 = [
	// position_country 2018
	{
	x: [2, 11, 2, 5, 0, 9, 9, 7, 10, 15],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 11 osôb<br>7.9% prítomných<br>7.0% registrovaných", "<b>PI (vedúci laboratória)</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>postdok, junior researcher</b><br>Slovensko: 5 osôb<br>3.6% prítomných<br>3.2% registrovaných", "", "<b>doktorand </b><br>Slovensko: 9 osôb<br>6.5% prítomných<br>5.7% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 9 osôb<br>6.5% prítomných<br>5.7% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>iné </b><br>Slovensko: 10 osôb<br>7.2% prítomných<br>6.4% registrovaných", "<b>neuvedené </b><br>Slovensko: 15 osôb<br>10.8% prítomných<br>9.6% registrovaných"]
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
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "<b>postdok, junior researcher</b><br>SR + zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "", "", "", "", ""]
	},
	{
	x: [1, 3, 2, 5, 0, 6, 2, 4, 2, 2],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 3 osoby<br>2.2% prítomných<br>1.9% registrovaných", "<b>PI (vedúci laboratória)</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>postdok, junior researcher</b><br>zahraničie: 5 osôb<br>3.6% prítomných<br>3.2% registrovaných", "", "<b>doktorand </b><br>zahraničie: 6 osôb<br>4.3% prítomných<br>3.8% registrovaných", "<b>mimo akadémie </b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 4 osoby<br>2.9% prítomných<br>2.5% registrovaných", "<b>iné </b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>neuvedené </b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných"]
	},
	{
	x: [1, 1, 5, 1, 0, 1, 2, 1, 7, 2],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>PI (vedúci laboratória)</b><br>neuvedené (krajina): 5 osôb<br>3.6% prítomných<br>3.2% registrovaných", "<b>postdok, junior researcher</b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "<b>doktorand </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>mimo akadémie </b><br>neuvedené (krajina): 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>študent (Bc./Mgr.) </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>iné </b><br>neuvedené (krajina): 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>neuvedené </b><br>neuvedené (krajina): 2 osoby<br>1.4% prítomných<br>1.3% registrovaných"]
	},
	{
	x: [0, 4, 0, 5, 0, 6, 3, 15, 4, 1],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>4 neprítomní<br>2.5% registrovaných", "", "<b>postdok, junior researcher</b><br>5 neprítomných<br>3.2% registrovaných", "", "<b>doktorand </b><br>6 neprítomných<br>3.8% registrovaných", "<b>mimo akadémie </b><br>3 neprítomní<br>1.9% registrovaných", "<b>študent (Bc./Mgr.) </b><br>15 neprítomných<br>9.6% registrovaných", "<b>iné </b><br>4 neprítomní<br>2.5% registrovaných", "<b>neuvedené </b><br>1 neprítomný/á<br>0.6% registrovaných"]
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
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	},
	{
	x: [10, 9, 11, 9, 5, 7, 2, 2, 0, 15],
	y: ["iné ", "doktorand ", "vedecký pracovník (senior researcher) ", "mimo akadémie ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>iné </b><br>Slovensko: 10 osôb<br>7.2% prítomných<br>6.4% registrovaných", "<b>doktorand </b><br>Slovensko: 9 osôb<br>6.5% prítomných<br>5.7% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 11 osôb<br>7.9% prítomných<br>7.0% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 9 osôb<br>6.5% prítomných<br>5.7% registrovaných", "<b>postdok, junior researcher</b><br>Slovensko: 5 osôb<br>3.6% prítomných<br>3.2% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>PI (vedúci laboratória)</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>profesor, docent </b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "", "<b>neuvedené </b><br>Slovensko: 15 osôb<br>10.8% prítomných<br>9.6% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
	y: ["iné ", "doktorand ", "vedecký pracovník (senior researcher) ", "mimo akadémie ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "<b>postdok, junior researcher</b><br>SR + zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "", "", "", ""]
	},
	{
	x: [2, 6, 3, 2, 5, 4, 2, 1, 0, 2],
	y: ["iné ", "doktorand ", "vedecký pracovník (senior researcher) ", "mimo akadémie ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>iné </b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>doktorand </b><br>zahraničie: 6 osôb<br>4.3% prítomných<br>3.8% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 3 osoby<br>2.2% prítomných<br>1.9% registrovaných", "<b>mimo akadémie </b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>postdok, junior researcher</b><br>zahraničie: 5 osôb<br>3.6% prítomných<br>3.2% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 4 osoby<br>2.9% prítomných<br>2.5% registrovaných", "<b>PI (vedúci laboratória)</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>profesor, docent </b><br>zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "<b>neuvedené </b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných"]
	},
	{
	x: [7, 1, 1, 2, 1, 1, 5, 1, 0, 2],
	y: ["iné ", "doktorand ", "vedecký pracovník (senior researcher) ", "mimo akadémie ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>iné </b><br>neuvedené (krajina): 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>doktorand </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>mimo akadémie </b><br>neuvedené (krajina): 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>postdok, junior researcher</b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>študent (Bc./Mgr.) </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>PI (vedúci laboratória)</b><br>neuvedené (krajina): 5 osôb<br>3.6% prítomných<br>3.2% registrovaných", "<b>profesor, docent </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "<b>neuvedené </b><br>neuvedené (krajina): 2 osoby<br>1.4% prítomných<br>1.3% registrovaných"]
	},
	{
	x: [4, 6, 4, 3, 5, 15, 0, 0, 0, 1],
	y: ["iné ", "doktorand ", "vedecký pracovník (senior researcher) ", "mimo akadémie ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>iné </b><br>4 neprítomní<br>2.5% registrovaných", "<b>doktorand </b><br>6 neprítomných<br>3.8% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>4 neprítomní<br>2.5% registrovaných", "<b>mimo akadémie </b><br>3 neprítomní<br>1.9% registrovaných", "<b>postdok, junior researcher</b><br>5 neprítomných<br>3.2% registrovaných", "<b>študent (Bc./Mgr.) </b><br>15 neprítomných<br>9.6% registrovaných", "", "", "", "<b>neuvedené </b><br>1 neprítomný/á<br>0.6% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
	y: ["iné ", "doktorand ", "vedecký pracovník (senior researcher) ", "mimo akadémie ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	}
];

var data_position_gender_2018 = [
	// position_gender 2018
	{
	x: [1, 4, 2, 4, 0, 10, 8, 10, 9, 8],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesorka, docentka </b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>vedecká pracovníčka (senior researcher) </b><br>4 ženy<br>2.9% prítomných<br>2.5% registrovaných", "<b>PI (vedúca laboratória)</b><br>2 ženy<br>1.4% prítomných<br>1.3% registrovaných", "<b>postdok, junior researcher</b><br>4 ženy<br>2.9% prítomných<br>2.5% registrovaných", "", "<b>doktorandka </b><br>10 žien<br>7.2% prítomných<br>6.4% registrovaných", "<b>mimo akadémie </b><br>8 žien<br>5.8% prítomných<br>5.1% registrovaných", "<b>študentka (Bc./Mgr.) </b><br>10 žien<br>7.2% prítomných<br>6.4% registrovaných", "<b>iné </b><br>9 žien<br>6.5% prítomných<br>5.7% registrovaných", "<b>neuvedené </b><br>8 žien<br>5.8% prítomných<br>5.1% registrovaných"]
	},
	{
	x: [3, 11, 7, 8, 0, 6, 5, 2, 10, 11],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>3 muži<br>2.2% prítomných<br>1.9% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>11 mužov<br>7.9% prítomných<br>7.0% registrovaných", "<b>PI (vedúci laboratória)</b><br>7 mužov<br>5.0% prítomných<br>4.5% registrovaných", "<b>postdok, junior researcher</b><br>8 mužov<br>5.8% prítomných<br>5.1% registrovaných", "", "<b>doktorand </b><br>6 mužov<br>4.3% prítomných<br>3.8% registrovaných", "<b>mimo akadémie </b><br>5 mužov<br>3.6% prítomných<br>3.2% registrovaných", "<b>študent (Bc./Mgr.) </b><br>2 muži<br>1.4% prítomných<br>1.3% registrovaných", "<b>iné </b><br>10 mužov<br>7.2% prítomných<br>6.4% registrovaných", "<b>neuvedené </b><br>11 mužov<br>7.9% prítomných<br>7.0% registrovaných"]
	},
	{
	x: [0, 4, 0, 5, 0, 6, 3, 15, 4, 1],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>4 neprítomní<br>2.5% registrovaných", "", "<b>postdok, junior researcher</b><br>5 neprítomných<br>3.2% registrovaných", "", "<b>doktorand </b><br>6 neprítomných<br>3.8% registrovaných", "<b>mimo akadémie </b><br>3 neprítomní<br>1.9% registrovaných", "<b>študent (Bc./Mgr.) </b><br>15 neprítomných<br>9.6% registrovaných", "<b>iné </b><br>4 neprítomní<br>2.5% registrovaných", "<b>neuvedené </b><br>1 neprítomný/á<br>0.6% registrovaných"]
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
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	},
	{
	x: [9, 10, 4, 8, 4, 10, 2, 1, 0, 8],
	y: ["iné ", "doktorand ", "vedecký pracovník (senior researcher) ", "mimo akadémie ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>iné </b><br>9 žien<br>6.5% prítomných<br>5.7% registrovaných", "<b>doktorandka </b><br>10 žien<br>7.2% prítomných<br>6.4% registrovaných", "<b>vedecká pracovníčka (senior researcher) </b><br>4 ženy<br>2.9% prítomných<br>2.5% registrovaných", "<b>mimo akadémie </b><br>8 žien<br>5.8% prítomných<br>5.1% registrovaných", "<b>postdok, junior researcher</b><br>4 ženy<br>2.9% prítomných<br>2.5% registrovaných", "<b>študentka (Bc./Mgr.) </b><br>10 žien<br>7.2% prítomných<br>6.4% registrovaných", "<b>PI (vedúca laboratória)</b><br>2 ženy<br>1.4% prítomných<br>1.3% registrovaných", "<b>profesorka, docentka </b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "", "<b>neuvedené </b><br>8 žien<br>5.8% prítomných<br>5.1% registrovaných"]
	},
	{
	x: [10, 6, 11, 5, 8, 2, 7, 3, 0, 11],
	y: ["iné ", "doktorand ", "vedecký pracovník (senior researcher) ", "mimo akadémie ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>iné </b><br>10 mužov<br>7.2% prítomných<br>6.4% registrovaných", "<b>doktorand </b><br>6 mužov<br>4.3% prítomných<br>3.8% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>11 mužov<br>7.9% prítomných<br>7.0% registrovaných", "<b>mimo akadémie </b><br>5 mužov<br>3.6% prítomných<br>3.2% registrovaných", "<b>postdok, junior researcher</b><br>8 mužov<br>5.8% prítomných<br>5.1% registrovaných", "<b>študent (Bc./Mgr.) </b><br>2 muži<br>1.4% prítomných<br>1.3% registrovaných", "<b>PI (vedúci laboratória)</b><br>7 mužov<br>5.0% prítomných<br>4.5% registrovaných", "<b>profesor, docent </b><br>3 muži<br>2.2% prítomných<br>1.9% registrovaných", "", "<b>neuvedené </b><br>11 mužov<br>7.9% prítomných<br>7.0% registrovaných"]
	},
	{
	x: [4, 6, 4, 3, 5, 15, 0, 0, 0, 1],
	y: ["iné ", "doktorand ", "vedecký pracovník (senior researcher) ", "mimo akadémie ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>iné </b><br>4 neprítomní<br>2.5% registrovaných", "<b>doktorand </b><br>6 neprítomných<br>3.8% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>4 neprítomní<br>2.5% registrovaných", "<b>mimo akadémie </b><br>3 neprítomní<br>1.9% registrovaných", "<b>postdok, junior researcher</b><br>5 neprítomných<br>3.2% registrovaných", "<b>študent (Bc./Mgr.) </b><br>15 neprítomných<br>9.6% registrovaných", "", "", "", "<b>neuvedené </b><br>1 neprítomný/á<br>0.6% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
	y: ["iné ", "doktorand ", "vedecký pracovník (senior researcher) ", "mimo akadémie ", "postdok, junior researcher", "študent (Bc./Mgr.) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	}
];

var data_registration_timeSeries_2018 = [
	// registration_timeSeries 2018
	{
	x: [24.38125, 36.0979166666667, 55.0979166666667, 59.2645833333333, 72.53125, 75.5645833333333, 96.0645833333333, 216.48125, 718.947916666667, 719.064583333333, 724.914583333333, 732.53125, 732.614583333334, 732.697916666667, 732.83125, 733.364583333333, 743.047916666667, 753.547916666667, 803.03125, 843.297916666667, 963.53125, 995.68125, 1062.26458333333, 1062.73125, 1067.01458333333, 1082.64791666667, 1138.88125, 1517.38125, 1524.68125, 1536.39791666667, 1539.88125, 1544.84791666667, 1645.33125, 1667.43125, 2047.78125, 2052.18125, 2167.64791666667, 2196.09791666667, 2217.18125, 2234.94791666667, 2257.43125, 2260.31458333333, 2261.73125, 2262.53125, 2269.71458333333, 2269.99791666667, 2282.03125, 2304.08125, 2306.19791666667, 2307.23125, 2307.93125, 2315.69791666667, 2332.66458333333, 2375.63125, 2376.08125, 2378.04791666667, 2382.09791666667, 2404.88125, 2406.44791666667, 2410.09791666667, 2412.03125, 2423.69791666667, 2426.79791666667, 2450.21458333333, 2450.76458333333, 2456.93125, 2472.83125, 2472.86458333333, 2483.93125, 2545.29791666667, 2571.51458333333],
	y: ["1", "3", "4", "6", "10", "12", "15", "16", "21", "23", "26", "27", "28", "29", "30", "32", "33", "35", "36", "37", "38", "39", "41", "42", "43", "44", "46", "47", "48", "49", "50", "52", "53", "54", "56", "57", "59", "60", "61", "63", "64", "65", "66", "67", "68", "69", "70", "72", "73", "74", "75", "78", "79", "80", "81", "82", "84", "91", "93", "94", "95", "96", "97", "98", "99", "100", "102", "103", "105", "107", "108"],
	name: 'Slovensko',
	text: ["03.09.2018 09:09", "03.09.2018 20:52", "04.09.2018 15:52", "04.09.2018 20:02", "05.09.2018 09:18", "05.09.2018 12:20", "06.09.2018 08:50", "11.09.2018 09:15", "02.10.2018 07:43", "02.10.2018 07:50", "02.10.2018 13:41", "02.10.2018 21:18", "02.10.2018 21:23", "02.10.2018 21:28", "02.10.2018 21:36", "02.10.2018 22:08", "03.10.2018 07:49", "03.10.2018 18:19", "05.10.2018 19:48", "07.10.2018 12:04", "12.10.2018 12:18", "13.10.2018 20:27", "16.10.2018 15:02", "16.10.2018 15:30", "16.10.2018 19:47", "17.10.2018 11:25", "19.10.2018 19:39", "04.11.2018 14:09", "04.11.2018 21:27", "05.11.2018 09:10", "05.11.2018 12:39", "05.11.2018 17:37", "09.11.2018 22:06", "10.11.2018 20:12", "26.11.2018 16:33", "26.11.2018 20:57", "01.12.2018 16:25", "02.12.2018 20:52", "03.12.2018 17:57", "04.12.2018 11:43", "05.12.2018 10:12", "05.12.2018 13:05", "05.12.2018 14:30", "05.12.2018 15:18", "05.12.2018 22:29", "05.12.2018 22:46", "06.12.2018 10:48", "07.12.2018 08:51", "07.12.2018 10:58", "07.12.2018 12:00", "07.12.2018 12:42", "07.12.2018 20:28", "08.12.2018 13:26", "10.12.2018 08:24", "10.12.2018 08:51", "10.12.2018 10:49", "10.12.2018 14:52", "11.12.2018 13:39", "11.12.2018 15:13", "11.12.2018 18:52", "11.12.2018 20:48", "12.12.2018 08:28", "12.12.2018 11:34", "13.12.2018 10:59", "13.12.2018 11:32", "13.12.2018 17:42", "14.12.2018 09:36", "14.12.2018 09:38", "14.12.2018 20:42", "17.12.2018 10:04", "18.12.2018 12:17"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>03.09.2018 09:09</b><br>1 osoba<br>1.0% online registrácií", "<b>03.09.2018 20:52</b><br>3 osoby<br>3.0% online registrácií", "<b>04.09.2018 15:52</b><br>4 osoby<br>4.0% online registrácií", "<b>04.09.2018 20:02</b><br>6 osôb<br>5.0% online registrácií", "<b>05.09.2018 09:18</b><br>10 osôb<br>9.0% online registrácií", "<b>05.09.2018 12:20</b><br>12 osôb<br>11.0% online registrácií", "<b>06.09.2018 08:50</b><br>15 osôb<br>14.0% online registrácií", "<b>11.09.2018 09:15</b><br>16 osôb<br>15.0% online registrácií", "<b>02.10.2018 07:43</b><br>21 osôb<br>19.0% online registrácií", "<b>02.10.2018 07:50</b><br>23 osôb<br>21.0% online registrácií", "<b>02.10.2018 13:41</b><br>26 osôb<br>24.0% online registrácií", "<b>02.10.2018 21:18</b><br>27 osôb<br>25.0% online registrácií", "<b>02.10.2018 21:23</b><br>28 osôb<br>25.0% online registrácií", "<b>02.10.2018 21:28</b><br>29 osôb<br>26.0% online registrácií", "<b>02.10.2018 21:36</b><br>30 osôb<br>27.0% online registrácií", "<b>02.10.2018 22:08</b><br>32 osôb<br>29.0% online registrácií", "<b>03.10.2018 07:49</b><br>33 osôb<br>30.0% online registrácií", "<b>03.10.2018 18:19</b><br>35 osôb<br>32.0% online registrácií", "<b>05.10.2018 19:48</b><br>36 osôb<br>33.0% online registrácií", "<b>07.10.2018 12:04</b><br>37 osôb<br>34.0% online registrácií", "<b>12.10.2018 12:18</b><br>38 osôb<br>35.0% online registrácií", "<b>13.10.2018 20:27</b><br>39 osôb<br>35.0% online registrácií", "<b>16.10.2018 15:02</b><br>41 osôb<br>37.0% online registrácií", "<b>16.10.2018 15:30</b><br>42 osôb<br>38.0% online registrácií", "<b>16.10.2018 19:47</b><br>43 osôb<br>39.0% online registrácií", "<b>17.10.2018 11:25</b><br>44 osôb<br>40.0% online registrácií", "<b>19.10.2018 19:39</b><br>46 osôb<br>42.0% online registrácií", "<b>04.11.2018 14:09</b><br>47 osôb<br>43.0% online registrácií", "<b>04.11.2018 21:27</b><br>48 osôb<br>44.0% online registrácií", "<b>05.11.2018 09:10</b><br>49 osôb<br>45.0% online registrácií", "<b>05.11.2018 12:39</b><br>50 osôb<br>45.0% online registrácií", "<b>05.11.2018 17:37</b><br>52 osôb<br>47.0% online registrácií", "<b>09.11.2018 22:06</b><br>53 osôb<br>48.0% online registrácií", "<b>10.11.2018 20:12</b><br>54 osôb<br>49.0% online registrácií", "<b>26.11.2018 16:33</b><br>56 osôb<br>51.0% online registrácií", "<b>26.11.2018 20:57</b><br>57 osôb<br>52.0% online registrácií", "<b>01.12.2018 16:25</b><br>59 osôb<br>54.0% online registrácií", "<b>02.12.2018 20:52</b><br>60 osôb<br>55.0% online registrácií", "<b>03.12.2018 17:57</b><br>61 osôb<br>55.0% online registrácií", "<b>04.12.2018 11:43</b><br>63 osôb<br>57.0% online registrácií", "<b>05.12.2018 10:12</b><br>64 osôb<br>58.0% online registrácií", "<b>05.12.2018 13:05</b><br>65 osôb<br>59.0% online registrácií", "<b>05.12.2018 14:30</b><br>66 osôb<br>60.0% online registrácií", "<b>05.12.2018 15:18</b><br>67 osôb<br>61.0% online registrácií", "<b>05.12.2018 22:29</b><br>68 osôb<br>62.0% online registrácií", "<b>05.12.2018 22:46</b><br>69 osôb<br>63.0% online registrácií", "<b>06.12.2018 10:48</b><br>70 osôb<br>64.0% online registrácií", "<b>07.12.2018 08:51</b><br>72 osôb<br>65.0% online registrácií", "<b>07.12.2018 10:58</b><br>73 osôb<br>66.0% online registrácií", "<b>07.12.2018 12:00</b><br>74 osôb<br>67.0% online registrácií", "<b>07.12.2018 12:42</b><br>75 osôb<br>68.0% online registrácií", "<b>07.12.2018 20:28</b><br>78 osôb<br>71.0% online registrácií", "<b>08.12.2018 13:26</b><br>79 osôb<br>72.0% online registrácií", "<b>10.12.2018 08:24</b><br>80 osôb<br>73.0% online registrácií", "<b>10.12.2018 08:51</b><br>81 osôb<br>74.0% online registrácií", "<b>10.12.2018 10:49</b><br>82 osôb<br>75.0% online registrácií", "<b>10.12.2018 14:52</b><br>84 osôb<br>76.0% online registrácií", "<b>11.12.2018 13:39</b><br>91 osôb<br>83.0% online registrácií", "<b>11.12.2018 15:13</b><br>93 osôb<br>85.0% online registrácií", "<b>11.12.2018 18:52</b><br>94 osôb<br>85.0% online registrácií", "<b>11.12.2018 20:48</b><br>95 osôb<br>86.0% online registrácií", "<b>12.12.2018 08:28</b><br>96 osôb<br>87.0% online registrácií", "<b>12.12.2018 11:34</b><br>97 osôb<br>88.0% online registrácií", "<b>13.12.2018 10:59</b><br>98 osôb<br>89.0% online registrácií", "<b>13.12.2018 11:32</b><br>99 osôb<br>90.0% online registrácií", "<b>13.12.2018 17:42</b><br>100 osôb<br>91.0% online registrácií", "<b>14.12.2018 09:36</b><br>102 osôb<br>93.0% online registrácií", "<b>14.12.2018 09:38</b><br>103 osôb<br>94.0% online registrácií", "<b>14.12.2018 20:42</b><br>105 osôb<br>95.0% online registrácií", "<b>17.12.2018 10:04</b><br>107 osôb<br>97.0% online registrácií", "<b>18.12.2018 12:17</b><br>108 osôb<br>98.0% online registrácií"]
	},
	{
	x: [1950.73125],
	y: ["55"],
	name: 'SR + zahraničie',
	text: ["22.11.2018 15:30"],
	type: "scatter",
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
	x: [31.1479166666667, 56.13125, 59.48125, 59.88125, 69.4645833333333, 72.6979166666667, 75.98125, 77.13125, 240.03125, 506.53125, 512.58125, 717.464583333333, 718.997916666667, 719.464583333333, 719.58125, 733.08125, 1039.26458333333, 1101.93125, 1542.34791666667, 2138.54791666667, 2220.83125, 2295.48125, 2310.29791666667, 2312.13125, 2380.43125, 2385.23125, 2386.69791666667, 2387.56458333333, 2399.71458333333, 2400.23125, 2406.14791666667, 2460.14791666667, 2485.24791666667],
	y: ["2", "5", "7", "8", "9", "11", "13", "14", "17", "18", "19", "20", "22", "24", "25", "31", "40", "45", "51", "58", "62", "71", "76", "77", "83", "86", "87", "88", "89", "90", "92", "101", "106"],
	name: 'zahraničie',
	text: ["03.09.2018 15:55", "04.09.2018 16:54", "04.09.2018 20:15", "04.09.2018 20:39", "05.09.2018 06:14", "05.09.2018 09:28", "05.09.2018 12:45", "05.09.2018 13:54", "12.09.2018 08:48", "23.09.2018 11:18", "23.09.2018 17:21", "02.10.2018 06:14", "02.10.2018 07:46", "02.10.2018 08:14", "02.10.2018 08:21", "02.10.2018 21:51", "15.10.2018 16:02", "18.10.2018 06:42", "05.11.2018 15:07", "30.11.2018 11:19", "03.12.2018 21:36", "07.12.2018 12:15", "07.12.2018 15:04", "07.12.2018 16:54", "10.12.2018 13:12", "10.12.2018 18:00", "10.12.2018 19:28", "10.12.2018 20:20", "11.12.2018 08:29", "11.12.2018 09:00", "11.12.2018 14:55", "13.12.2018 20:55", "14.12.2018 22:01"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>03.09.2018 15:55</b><br>2 osoby<br>2.0% online registrácií", "<b>04.09.2018 16:54</b><br>5 osôb<br>5.0% online registrácií", "<b>04.09.2018 20:15</b><br>7 osôb<br>6.0% online registrácií", "<b>04.09.2018 20:39</b><br>8 osôb<br>7.0% online registrácií", "<b>05.09.2018 06:14</b><br>9 osôb<br>8.0% online registrácií", "<b>05.09.2018 09:28</b><br>11 osôb<br>10.0% online registrácií", "<b>05.09.2018 12:45</b><br>13 osôb<br>12.0% online registrácií", "<b>05.09.2018 13:54</b><br>14 osôb<br>13.0% online registrácií", "<b>12.09.2018 08:48</b><br>17 osôb<br>15.0% online registrácií", "<b>23.09.2018 11:18</b><br>18 osôb<br>16.0% online registrácií", "<b>23.09.2018 17:21</b><br>19 osôb<br>17.0% online registrácií", "<b>02.10.2018 06:14</b><br>20 osôb<br>18.0% online registrácií", "<b>02.10.2018 07:46</b><br>22 osôb<br>20.0% online registrácií", "<b>02.10.2018 08:14</b><br>24 osôb<br>22.0% online registrácií", "<b>02.10.2018 08:21</b><br>25 osôb<br>23.0% online registrácií", "<b>02.10.2018 21:51</b><br>31 osôb<br>28.0% online registrácií", "<b>15.10.2018 16:02</b><br>40 osôb<br>36.0% online registrácií", "<b>18.10.2018 06:42</b><br>45 osôb<br>41.0% online registrácií", "<b>05.11.2018 15:07</b><br>51 osôb<br>46.0% online registrácií", "<b>30.11.2018 11:19</b><br>58 osôb<br>53.0% online registrácií", "<b>03.12.2018 21:36</b><br>62 osôb<br>56.0% online registrácií", "<b>07.12.2018 12:15</b><br>71 osôb<br>65.0% online registrácií", "<b>07.12.2018 15:04</b><br>76 osôb<br>69.0% online registrácií", "<b>07.12.2018 16:54</b><br>77 osôb<br>70.0% online registrácií", "<b>10.12.2018 13:12</b><br>83 osôb<br>75.0% online registrácií", "<b>10.12.2018 18:00</b><br>86 osôb<br>78.0% online registrácií", "<b>10.12.2018 19:28</b><br>87 osôb<br>79.0% online registrácií", "<b>10.12.2018 20:20</b><br>88 osôb<br>80.0% online registrácií", "<b>11.12.2018 08:29</b><br>89 osôb<br>81.0% online registrácií", "<b>11.12.2018 09:00</b><br>90 osôb<br>82.0% online registrácií", "<b>11.12.2018 14:55</b><br>92 osôb<br>84.0% online registrácií", "<b>13.12.2018 20:55</b><br>101 osôb<br>92.0% online registrácií", "<b>14.12.2018 22:01</b><br>106 osôb<br>96.0% online registrácií"]
	},
	{
	x: [747.897916666667, 2384.76458333333, 2473.06458333333],
	y: ["34", "85", "104"],
	name: 'neuvedené',
	text: ["03.10.2018 12:40", "10.12.2018 17:32", "14.12.2018 09:50"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>03.10.2018 12:40</b><br>34 osôb<br>31.0% online registrácií", "<b>10.12.2018 17:32</b><br>85 osôb<br>77.0% online registrácií", "<b>14.12.2018 09:50</b><br>104 osôb<br>95.0% online registrácií"]
	},
	{
		x: [0, 24.38125, 31.1479166666667, 36.0979166666667, 55.0979166666667, 56.13125, 59.2645833333333, 59.48125, 59.88125, 69.4645833333333, 72.53125, 72.6979166666667, 75.5645833333333, 75.98125, 77.13125, 96.0645833333333, 216.48125, 240.03125, 506.53125, 512.58125, 717.464583333333, 718.947916666667, 718.997916666667, 719.064583333333, 719.464583333333, 719.58125, 724.914583333333, 732.53125, 732.614583333334, 732.697916666667, 732.83125, 733.08125, 733.364583333333, 743.047916666667, 747.897916666667, 753.547916666667, 803.03125, 843.297916666667, 963.53125, 995.68125, 1039.26458333333, 1062.26458333333, 1062.73125, 1067.01458333333, 1082.64791666667, 1101.93125, 1138.88125, 1517.38125, 1524.68125, 1536.39791666667, 1539.88125, 1542.34791666667, 1544.84791666667, 1645.33125, 1667.43125, 1950.73125, 2047.78125, 2052.18125, 2138.54791666667, 2167.64791666667, 2196.09791666667, 2217.18125, 2220.83125, 2234.94791666667, 2257.43125, 2260.31458333333, 2261.73125, 2262.53125, 2269.71458333333, 2269.99791666667, 2282.03125, 2295.48125, 2304.08125, 2306.19791666667, 2307.23125, 2307.93125, 2310.29791666667, 2312.13125, 2315.69791666667, 2332.66458333333, 2375.63125, 2376.08125, 2378.04791666667, 2380.43125, 2382.09791666667, 2384.76458333333, 2385.23125, 2386.69791666667, 2387.56458333333, 2399.71458333333, 2400.23125, 2404.88125, 2406.14791666667, 2406.44791666667, 2410.09791666667, 2412.03125, 2423.69791666667, 2426.79791666667, 2450.21458333333, 2450.76458333333, 2456.93125, 2460.14791666667, 2472.83125, 2472.86458333333, 2473.06458333333, 2483.93125, 2485.24791666667, 2545.29791666667, 2571.51458333333],
		y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108],
		name: "",
		type: 'bar',
		marker: {
			color: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)']
		},
		showlegend: false,
		visible: true,
		hoverinfo: 'skip',
		hovermode: "none"
	},
];

var data_registration_timeLabels_2018 = ["", "3.9.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "2.10.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "15.10.", "", "", "", "", "", "", " 4.11.", "", "", "", "", "", "", "", "", "", "", "", "1.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "14.12.", "", "", "", "", "", "18.12."];

var updateMenu_institution_country_2018 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, true, true, false, false, false, false, false, false]],
		label: 'Zoradiť podľa typu pracoviska',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, true, true, true, true, true, true]],
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

var updateMenu_position_country_2018 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, true, true, false, false, false, false, false, false]],
		label: 'Zoradiť podľa pozície',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, true, true, true, true, true, true]],
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
		args: ['visible', [true, true, true, true, false, false, false, false]],
		label: 'Zoradiť podľa pozície',
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

var data_participation_2019 = [
// participation 2019
{
	type: "sunburst",
	ids: ["všetci_do2020", "prítomní", "nesúhlas", "muži 1", "ženy 1", "bez registrácie"],
	labels: ["dáta z prihlasovania + neregistrovaní účastníci", "prítomní", "nesúhlas s analýzou", "muži", "ženy", "bez registrácie"],
	values: [229, 206, 3, 93, 93, 20],
	parents: ["", "všetci_do2020", "všetci_do2020", "prítomní", "prítomní", "prítomní"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania + neregistrovaní účastníci</b><br>229 osôb<br>", "206 prítomných<br>98.6% z celkového počtu", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.4% z celkového počtu", "<b>prítomní</b><br>93 mužov<br>44.5% z celkového počtu", "<b>prítomné</b><br>93 žien<br>44.5% z celkového počtu", "<b>bez registrácie</b><br>20 osôb<br>"]
}];

var data_participation_detail_2019 = [
// participation_detail 2019
{
	type: "sunburst",
	ids: ["všetci", "účasť", "iniciatívy", "prednášky", "organizácia", "nesúhlas", "bez registrácie"],
	labels: ["iba prítomní", "účasť", "iniciatívy", "prednášky", "organizácia", "nesúhlas s analýzou", "bez registrácie"],
	values: [229, 162, 40, 9, 15, 3, 20],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "účasť"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 214, 16)', 'rgb(255, 174, 16)', 'rgb(255, 134, 16', 'rgb(200, 200, 200)', 'rgb(0, 230, 0)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania + neregistrovaní účastníci</b><br>229 osôb<br>", "<b>účasť</b><br>162 osôb<br>70.7% z celkového počtu", "<b>iniciatívy</b><br>40 osôb<br>17.5% z celkového počtu", "<b>prednášky</b><br>9 osôb<br>3.9% z celkového počtu", "<b>organizácia</b><br>15 osôb<br>6.6% z celkového počtu", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.3% z celkového počtu", "<b>bez registrácie</b><br>20 osôb<br>"]
}];

var data_abroad_2019 = [
// abroad 2019
{
	type: "sunburst",
	ids: ["všetci", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "nesúhlas", "bez dát"],
	labels: ["iba prítomní", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "nesúhlas s analýzou", "bez registrácie"],
	values: [229, 145, 10, 39, 32, 3, 20],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "neuvedené"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(200, 200, 200)', 'rgb(0, 230, 0)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania + neregistrovaní účastníci</b><br>229 osôb<br>", "<b>Slovensko</b><br>145 osôb<br>63.3% z celkového počtu", "<b>SR a zahraničie</b><br>10 osôb<br>4.4% z celkového počtu", "<b>zahraničie</b><br>39 osôb<br>17.0% z celkového počtu", "<b>neuvedené</b><br>32 osôb<br>14.0% z celkového počtu", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.3% z celkového počtu", "<b>bez registrácie</b><br>20 osôb<br>"]
}];

var data_subject_2019 = [
// subject 2019
{
	type: "sunburst",
	ids: ["všetci", "nesúhlas", "STEM", "SSH", "iné", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra, urbanizmus", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "STEM neuvedené", "knižničná a informačná veda", "digital humanities", "história, pomocné vedy historické", "archeológia", "antropológia", "vedy o umení a kultúre", "psychológia", "didaktika", "politické vedy", "ekonómia a manažment", "SSH nezaradené", "podpora výskumu (STEM)", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "projektový manažment", "médiá", "nezaradené"],
	labels: ["iba dáta z registrácie", "nesúhlas s analýzou", "STEM", "SSH", "iné", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra, urbanizmus", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "neuvedené", "knižničná a informačná veda", "digital humanities", "história, pomocné vedy historické", "archeológia", "antropológia", "vedy o umení a kultúre", "psychológia", "didaktika", "politické vedy", "ekonómia a manažment", "nezaradené", "podpora výskumu (STEM)", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "projektový manažment", "médiá", "nezaradené"],
	values: [158, 3, 113, 29, 13, 12, 9, 12, 6, 2, 2, 2, 3, 15, 10, 6, 4, 9, 7, 3, 6, 2, 2, 1, 1, 2, 2, 3, 3, 1, 3, 2, 3, 7, 2, 1, 4, 1, 3, 2, 1, 1],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "iné", "iné", "iné", "iné", "iné", "iné", "iné"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(200, 200, 200)', 'rgb(0, 102, 102)', 'rgb(204, 0, 0)', 'rgb(62, 0, 62)', 'rgb(53, 104, 0)', 'rgb(82, 163, 0)', 'rgb(102, 204, 0)', 'rgb(222, 222, 92)', 'rgb(255, 238, 153)', 'rgb(255,247,126)', 'rgb(255, 255, 0)', 'rgb(255, 204, 0)', 'rgb(255, 128, 0)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(0, 0, 255)', 'rgb(0, 128, 255)', 'rgb(136, 136, 136)', 'rgb(175, 175, 175)', 'rgb(36, 18, 0)', 'rgb(75, 37, 0)', 'rgb(89, 121, 0)', 'rgb(0, 102, 102)', 'rgb(77, 64, 83)', 'rgb(102, 51, 77)', 'rgb(145,0,73)', 'rgb(204, 0, 102)', 'rgb(255, 47, 151)', 'rgb(184, 24, 83)', 'rgb(214, 48, 90)', 'rgb(214, 48, 62)', 'rgb(218, 94, 69)', 'rgb(218, 106, 69)', 'rgb(204, 0, 0)', 'rgb(31, 51, 82)', 'rgb(82, 0, 82)', 'rgb(107, 0, 107)', 'rgb(132, 0, 132)', 'rgb(152, 0, 152)', 'rgb(172, 0, 172)', 'rgb(62, 0, 62)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba dáta z registrácie</b><br>158 osôb<br>", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.9% online registrácií", "<b>STEM</b><br>113 osôb<br>71.5% online registrácií", "<b>SSH</b><br>29 osôb<br>18.4% online registrácií", "<b>iné</b><br>13 osôb<br>8.2% online registrácií", "<b>genetika</b><br>12 osôb<br>7.6% online registrácií", "<b>molekulárna biológia</b><br>9 osôb<br>5.7% online registrácií", "<b>biológia</b><br>12 osôb<br>7.6% online registrácií", "<b>biochémia</b><br>6 osôb<br>3.8% online registrácií", "<b>biofyzika</b><br>2 osoby<br>1.3% online registrácií", "<b>bioinformatika</b><br>2 osoby<br>1.3% online registrácií", "<b>biotechnológie, biomateriály</b><br>2 osoby<br>1.3% online registrácií", "<b>neurovedy</b><br>3 osoby<br>1.9% online registrácií", "<b>medicína, lekárske vedy</b><br>15 osôb<br>9.5% online registrácií", "<b>chémia</b><br>10 osôb<br>6.3% online registrácií", "<b>fyzika</b><br>6 osôb<br>3.8% online registrácií", "<b>matematika</b><br>4 osoby<br>2.5% online registrácií", "<b>IT</b><br>9 osôb<br>5.7% online registrácií", "<b>technológie</b><br>7 osôb<br>4.4% online registrácií", "<b>stavebné inžinierstvo, architektúra, urbanizmus</b><br>3 osoby<br>1.9% online registrácií", "<b>geopriestorové vedy</b><br>6 osôb<br>3.8% online registrácií", "<b>vedy o Zemi</b><br>2 osoby<br>1.3% online registrácií", "<b>ekologické a environmentálne vedy</b><br>2 osoby<br>1.3% online registrácií", "<b>neuvedené</b><br>1 osoba<br>0.6% online registrácií", "<b>knižničná a informačná veda</b><br>1 osoba<br>0.6% online registrácií", "<b>digital humanities</b><br>2 osoby<br>1.3% online registrácií", "<b>história, pomocné vedy historické</b><br>2 osoby<br>1.3% online registrácií", "<b>archeológia</b><br>3 osoby<br>1.9% online registrácií", "<b>antropológia</b><br>3 osoby<br>1.9% online registrácií", "<b>vedy o umení a kultúre</b><br>1 osoba<br>0.6% online registrácií", "<b>psychológia</b><br>3 osoby<br>1.9% online registrácií", "<b>didaktika</b><br>2 osoby<br>1.3% online registrácií", "<b>politické vedy</b><br>3 osoby<br>1.9% online registrácií", "<b>ekonómia a manažment</b><br>7 osôb<br>4.4% online registrácií", "<b>nezaradené</b><br>2 osoby<br>1.3% online registrácií", "<b>podpora výskumu (STEM)</b><br>1 osoba<br>0.6% online registrácií", "<b>podpora výskumu</b><br>4 osoby<br>2.5% online registrácií", "<b>otvorená veda</b><br>1 osoba<br>0.6% online registrácií", "<b>vzdelávanie, poradenstvo</b><br>3 osoby<br>1.9% online registrácií", "<b>projektový manažment</b><br>2 osoby<br>1.3% online registrácií", "<b>médiá</b><br>1 osoba<br>0.6% online registrácií", "<b>nezaradené</b><br>1 osoba<br>0.6% online registrácií"]
}];

var data_institution_country_2019 = [
	// institution_country 2019
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>výskumné pracovisko</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>výskum + univerzita</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>nadnárodná organizácia</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>komerčná spoločnosť</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>podpora výskumu</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>práca s mládežou</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>štátna správa</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>mimovládna organizácia</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>iné</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>neuvedené</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu"]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>výskumné pracovisko</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>výskum + univerzita</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>nadnárodná organizácia</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>komerčná spoločnosť</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>podpora výskumu</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>práca s mládežou</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>štátna správa</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>mimovládna organizácia</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>iné</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>neuvedené</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu"]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>výskumné pracovisko</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>výskum + univerzita</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>nadnárodná organizácia</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>komerčná spoločnosť</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>podpora výskumu</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>práca s mládežou</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>štátna správa</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>mimovládna organizácia</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>iné</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>neuvedené</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu"]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>výskumné pracovisko</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>výskum + univerzita</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>nadnárodná organizácia</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>komerčná spoločnosť</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>podpora výskumu</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>práca s mládežou</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>štátna správa</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>mimovládna organizácia</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>iné</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>neuvedené</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>iné</b><br>nesúhlas s analýzou: 3 osoby<br>0.7% z celkového počtu", ""]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>bez dát: 19 osôb<br>", "<b>výskumné pracovisko</b><br>bez dát: 19 osôb<br>", "<b>výskum + univerzita</b><br>bez dát: 19 osôb<br>", "<b>nadnárodná organizácia</b><br>bez dát: 19 osôb<br>", "<b>komerčná spoločnosť</b><br>bez dát: 19 osôb<br>", "<b>podpora výskumu</b><br>bez dát: 19 osôb<br>", "<b>práca s mládežou</b><br>bez dát: 19 osôb<br>", "<b>štátna správa</b><br>bez dát: 19 osôb<br>", "<b>mimovládna organizácia</b><br>bez dát: 19 osôb<br>", "<b>iné</b><br>bez dát: 19 osôb<br>", "<b>neuvedené</b><br>bez dát: 19 osôb<br>"]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>výskumné pracovisko</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>výskum + univerzita</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>nadnárodná organizácia</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>komerčná spoločnosť</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>podpora výskumu</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>práca s mládežou</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>štátna správa</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>mimovládna organizácia</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>iné</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>neuvedené</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu"]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>výskumné pracovisko</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>výskum + univerzita</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>nadnárodná organizácia</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>komerčná spoločnosť</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>podpora výskumu</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>práca s mládežou</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>štátna správa</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>mimovládna organizácia</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>iné</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>neuvedené</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu"]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>výskumné pracovisko</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>výskum + univerzita</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>nadnárodná organizácia</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>komerčná spoločnosť</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>podpora výskumu</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>práca s mládežou</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>štátna správa</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>mimovládna organizácia</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>iné</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>neuvedené</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu"]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>výskumné pracovisko</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>výskum + univerzita</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>nadnárodná organizácia</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>komerčná spoločnosť</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>podpora výskumu</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>práca s mládežou</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>štátna správa</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>mimovládna organizácia</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>iné</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>neuvedené</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "<b>mimovládna organizácia</b><br>nesúhlas s analýzou: 3 osoby<br>0.7% z celkového počtu", "", ""]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>bez dát: 19 osôb<br>", "<b>výskumné pracovisko</b><br>bez dát: 19 osôb<br>", "<b>výskum + univerzita</b><br>bez dát: 19 osôb<br>", "<b>nadnárodná organizácia</b><br>bez dát: 19 osôb<br>", "<b>komerčná spoločnosť</b><br>bez dát: 19 osôb<br>", "<b>podpora výskumu</b><br>bez dát: 19 osôb<br>", "<b>práca s mládežou</b><br>bez dát: 19 osôb<br>", "<b>štátna správa</b><br>bez dát: 19 osôb<br>", "<b>mimovládna organizácia</b><br>bez dát: 19 osôb<br>", "<b>iné</b><br>bez dát: 19 osôb<br>", "<b>neuvedené</b><br>bez dát: 19 osôb<br>"]
	}
];

var data_institution_gender_2019 = [
	// institution_gender 2019
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>19 žien<br>4.5% z celkového počtu", "<b>výskumné pracovisko</b><br>19 žien<br>4.5% z celkového počtu", "<b>výskum + univerzita</b><br>19 žien<br>4.5% z celkového počtu", "<b>nadnárodná organizácia</b><br>19 žien<br>4.5% z celkového počtu", "<b>komerčná spoločnosť</b><br>19 žien<br>4.5% z celkového počtu", "<b>podpora výskumu</b><br>19 žien<br>4.5% z celkového počtu", "<b>práca s mládežou</b><br>19 žien<br>4.5% z celkového počtu", "<b>štátna správa</b><br>19 žien<br>4.5% z celkového počtu", "<b>mimovládna organizácia</b><br>19 žien<br>4.5% z celkového počtu", "<b>iné</b><br>19 žien<br>4.5% z celkového počtu", "<b>neuvedené</b><br>19 žien<br>4.5% z celkového počtu"]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>19 mužov<br>4.5% z celkového počtu", "<b>výskumné pracovisko</b><br>19 mužov<br>4.5% z celkového počtu", "<b>výskum + univerzita</b><br>19 mužov<br>4.5% z celkového počtu", "<b>nadnárodná organizácia</b><br>19 mužov<br>4.5% z celkového počtu", "<b>komerčná spoločnosť</b><br>19 mužov<br>4.5% z celkového počtu", "<b>podpora výskumu</b><br>19 mužov<br>4.5% z celkového počtu", "<b>práca s mládežou</b><br>19 mužov<br>4.5% z celkového počtu", "<b>štátna správa</b><br>19 mužov<br>4.5% z celkového počtu", "<b>mimovládna organizácia</b><br>19 mužov<br>4.5% z celkového počtu", "<b>iné</b><br>19 mužov<br>4.5% z celkového počtu", "<b>neuvedené</b><br>19 mužov<br>4.5% z celkového počtu"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>iné</b><br>nesúhlas s analýzou: 3 osoby<br>0.7% z celkového počtu", ""]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>bez dát: 19 osôb<br>", "<b>výskumné pracovisko</b><br>bez dát: 19 osôb<br>", "<b>výskum + univerzita</b><br>bez dát: 19 osôb<br>", "<b>nadnárodná organizácia</b><br>bez dát: 19 osôb<br>", "<b>komerčná spoločnosť</b><br>bez dát: 19 osôb<br>", "<b>podpora výskumu</b><br>bez dát: 19 osôb<br>", "<b>práca s mládežou</b><br>bez dát: 19 osôb<br>", "<b>štátna správa</b><br>bez dát: 19 osôb<br>", "<b>mimovládna organizácia</b><br>bez dát: 19 osôb<br>", "<b>iné</b><br>bez dát: 19 osôb<br>", "<b>neuvedené</b><br>bez dát: 19 osôb<br>"]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>19 žien<br>4.5% z celkového počtu", "<b>výskumné pracovisko</b><br>19 žien<br>4.5% z celkového počtu", "<b>výskum + univerzita</b><br>19 žien<br>4.5% z celkového počtu", "<b>nadnárodná organizácia</b><br>19 žien<br>4.5% z celkového počtu", "<b>komerčná spoločnosť</b><br>19 žien<br>4.5% z celkového počtu", "<b>podpora výskumu</b><br>19 žien<br>4.5% z celkového počtu", "<b>práca s mládežou</b><br>19 žien<br>4.5% z celkového počtu", "<b>štátna správa</b><br>19 žien<br>4.5% z celkového počtu", "<b>mimovládna organizácia</b><br>19 žien<br>4.5% z celkového počtu", "<b>iné</b><br>19 žien<br>4.5% z celkového počtu", "<b>neuvedené</b><br>19 žien<br>4.5% z celkového počtu"]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>19 mužov<br>4.5% z celkového počtu", "<b>výskumné pracovisko</b><br>19 mužov<br>4.5% z celkového počtu", "<b>výskum + univerzita</b><br>19 mužov<br>4.5% z celkového počtu", "<b>nadnárodná organizácia</b><br>19 mužov<br>4.5% z celkového počtu", "<b>komerčná spoločnosť</b><br>19 mužov<br>4.5% z celkového počtu", "<b>podpora výskumu</b><br>19 mužov<br>4.5% z celkového počtu", "<b>práca s mládežou</b><br>19 mužov<br>4.5% z celkového počtu", "<b>štátna správa</b><br>19 mužov<br>4.5% z celkového počtu", "<b>mimovládna organizácia</b><br>19 mužov<br>4.5% z celkového počtu", "<b>iné</b><br>19 mužov<br>4.5% z celkového počtu", "<b>neuvedené</b><br>19 mužov<br>4.5% z celkového počtu"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "<b>mimovládna organizácia</b><br>nesúhlas s analýzou: 3 osoby<br>0.7% z celkového počtu", "", ""]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>bez dát: 19 osôb<br>", "<b>výskumné pracovisko</b><br>bez dát: 19 osôb<br>", "<b>výskum + univerzita</b><br>bez dát: 19 osôb<br>", "<b>nadnárodná organizácia</b><br>bez dát: 19 osôb<br>", "<b>komerčná spoločnosť</b><br>bez dát: 19 osôb<br>", "<b>podpora výskumu</b><br>bez dát: 19 osôb<br>", "<b>práca s mládežou</b><br>bez dát: 19 osôb<br>", "<b>štátna správa</b><br>bez dát: 19 osôb<br>", "<b>mimovládna organizácia</b><br>bez dát: 19 osôb<br>", "<b>iné</b><br>bez dát: 19 osôb<br>", "<b>neuvedené</b><br>bez dát: 19 osôb<br>"]
	}
];

var data_position_country_2019 = [
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
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>Slovensko: 3 osoby<br>1.4% z celkového počtu", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 18 osôb<br>8.5% z celkového počtu", "<b>PI (vedúci laboratória)</b><br>Slovensko: 6 osôb<br>2.8% z celkového počtu", "<b>postdok, junior researcher</b><br>Slovensko: 8 osôb<br>3.8% z celkového počtu", "<b>výskum v industry</b><br>Slovensko: 3 osoby<br>1.4% z celkového počtu", "<b>doktorand </b><br>Slovensko: 14 osôb<br>6.6% z celkového počtu", "<b>mimo akadémie </b><br>Slovensko: 69 osôb<br>32.5% z celkového počtu", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 12 osôb<br>5.7% z celkového počtu", "<b>iné </b><br>Slovensko: 12 osôb<br>5.7% z celkového počtu", ""]
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
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>SR + zahraničie: 1 osoba<br>0.5% z celkového počtu", "<b>vedecký pracovník (senior researcher) </b><br>SR + zahraničie: 1 osoba<br>0.5% z celkového počtu", "<b>PI (vedúci laboratória)</b><br>SR + zahraničie: 1 osoba<br>0.5% z celkového počtu", "<b>postdok, junior researcher</b><br>SR + zahraničie: 3 osoby<br>1.4% z celkového počtu", "", "<b>doktorand </b><br>SR + zahraničie: 2 osoby<br>0.9% z celkového počtu", "<b>mimo akadémie </b><br>SR + zahraničie: 1 osoba<br>0.5% z celkového počtu", "", "<b>iné </b><br>SR + zahraničie: 1 osoba<br>0.5% z celkového počtu", ""]
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
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 3 osoby<br>1.4% z celkového počtu", "<b>PI (vedúci laboratória)</b><br>zahraničie: 1 osoba<br>0.5% z celkového počtu", "<b>postdok, junior researcher</b><br>zahraničie: 16 osôb<br>7.5% z celkového počtu", "<b>výskum v industry</b><br>zahraničie: 1 osoba<br>0.5% z celkového počtu", "<b>doktorand </b><br>zahraničie: 11 osôb<br>5.2% z celkového počtu", "<b>mimo akadémie </b><br>zahraničie: 3 osoby<br>1.4% z celkového počtu", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 3 osoby<br>1.4% z celkového počtu", "<b>iné </b><br>zahraničie: 2 osoby<br>0.9% z celkového počtu", ""]
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
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>neuvedené (krajina): 11 osôb<br>5.2% z celkového počtu"]
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
	visible: true,
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
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>nesúhlas s analýzou: 3 osoby<br>1.4% z celkového počtu"]
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
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>"]
	},
	{
	x: [69, 14, 8, 18, 12, 12, 6, 3, 3, 0],
	y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>mimo akadémie </b><br>Slovensko: 69 osôb<br>32.5% z celkového počtu", "<b>doktorand </b><br>Slovensko: 14 osôb<br>6.6% z celkového počtu", "<b>postdok, junior researcher</b><br>Slovensko: 8 osôb<br>3.8% z celkového počtu", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 18 osôb<br>8.5% z celkového počtu", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 12 osôb<br>5.7% z celkového počtu", "<b>iné </b><br>Slovensko: 12 osôb<br>5.7% z celkového počtu", "<b>PI (vedúci laboratória)</b><br>Slovensko: 6 osôb<br>2.8% z celkového počtu", "<b>profesor, docent </b><br>Slovensko: 3 osoby<br>1.4% z celkového počtu", "<b>výskum v industry</b><br>Slovensko: 3 osoby<br>1.4% z celkového počtu", ""]
	},
	{
	x: [1, 2, 3, 1, 0, 1, 1, 1, 0, 0],
	y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>mimo akadémie </b><br>SR + zahraničie: 1 osoba<br>0.5% z celkového počtu", "<b>doktorand </b><br>SR + zahraničie: 2 osoby<br>0.9% z celkového počtu", "<b>postdok, junior researcher</b><br>SR + zahraničie: 3 osoby<br>1.4% z celkového počtu", "<b>vedecký pracovník (senior researcher) </b><br>SR + zahraničie: 1 osoba<br>0.5% z celkového počtu", "", "<b>iné </b><br>SR + zahraničie: 1 osoba<br>0.5% z celkového počtu", "<b>PI (vedúci laboratória)</b><br>SR + zahraničie: 1 osoba<br>0.5% z celkového počtu", "<b>profesor, docent </b><br>SR + zahraničie: 1 osoba<br>0.5% z celkového počtu", "", ""]
	},
	{
	x: [3, 11, 16, 3, 3, 2, 1, 0, 1, 0],
	y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>mimo akadémie </b><br>zahraničie: 3 osoby<br>1.4% z celkového počtu", "<b>doktorand </b><br>zahraničie: 11 osôb<br>5.2% z celkového počtu", "<b>postdok, junior researcher</b><br>zahraničie: 16 osôb<br>7.5% z celkového počtu", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 3 osoby<br>1.4% z celkového počtu", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 3 osoby<br>1.4% z celkového počtu", "<b>iné </b><br>zahraničie: 2 osoby<br>0.9% z celkového počtu", "<b>PI (vedúci laboratória)</b><br>zahraničie: 1 osoba<br>0.5% z celkového počtu", "", "<b>výskum v industry</b><br>zahraničie: 1 osoba<br>0.5% z celkového počtu", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 11],
	y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>neuvedené (krajina): 11 osôb<br>5.2% z celkového počtu"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
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
	y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>nesúhlas s analýzou: 3 osoby<br>1.4% z celkového počtu"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
	y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>"]
	}
];

var data_position_gender_2019 = [
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
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesorka, docentka </b><br>2 ženy<br>0.9% z celkového počtu", "<b>vedecká pracovníčka (senior researcher) </b><br>11 žien<br>5.2% z celkového počtu", "<b>PI (vedúca laboratória)</b><br>4 ženy<br>1.9% z celkového počtu", "<b>postdok, junior researcher</b><br>13 žien<br>6.1% z celkového počtu", "<b>výskum v industry</b><br>2 ženy<br>0.9% z celkového počtu", "<b>doktorandka </b><br>14 žien<br>6.6% z celkového počtu", "<b>mimo akadémie </b><br>36 žien<br>17.0% z celkového počtu", "<b>študentka (Bc./Mgr.) </b><br>7 žien<br>3.3% z celkového počtu", "<b>iné </b><br>8 žien<br>3.8% z celkového počtu", "<b>neuvedené </b><br>6 žien<br>2.8% z celkového počtu"]
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
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>2 muži<br>0.9% z celkového počtu", "<b>vedecký pracovník (senior researcher) </b><br>11 mužov<br>5.2% z celkového počtu", "<b>PI (vedúci laboratória)</b><br>4 muži<br>1.9% z celkového počtu", "<b>postdok, junior researcher</b><br>14 mužov<br>6.6% z celkového počtu", "<b>výskum v industry</b><br>2 muži<br>0.9% z celkového počtu", "<b>doktorand </b><br>14 mužov<br>6.6% z celkového počtu", "<b>mimo akadémie </b><br>37 mužov<br>17.5% z celkového počtu", "<b>študent (Bc./Mgr.) </b><br>8 mužov<br>3.8% z celkového počtu", "<b>iné </b><br>8 mužov<br>3.8% z celkového počtu", "<b>neuvedené </b><br>6 mužov<br>2.8% z celkového počtu"]
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
	visible: true,
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
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>nesúhlas s analýzou: 3 osoby<br>1.4% z celkového počtu"]
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
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>"]
	},
	{
	x: [36, 14, 13, 11, 7, 8, 4, 2, 2, 6],
	y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>mimo akadémie </b><br>36 žien<br>17.0% z celkového počtu", "<b>doktorandka </b><br>14 žien<br>6.6% z celkového počtu", "<b>postdok, junior researcher</b><br>13 žien<br>6.1% z celkového počtu", "<b>vedecká pracovníčka (senior researcher) </b><br>11 žien<br>5.2% z celkového počtu", "<b>študentka (Bc./Mgr.) </b><br>7 žien<br>3.3% z celkového počtu", "<b>iné </b><br>8 žien<br>3.8% z celkového počtu", "<b>PI (vedúca laboratória)</b><br>4 ženy<br>1.9% z celkového počtu", "<b>profesorka, docentka </b><br>2 ženy<br>0.9% z celkového počtu", "<b>výskum v industry</b><br>2 ženy<br>0.9% z celkového počtu", "<b>neuvedené </b><br>6 žien<br>2.8% z celkového počtu"]
	},
	{
	x: [37, 14, 14, 11, 8, 8, 4, 2, 2, 6],
	y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>mimo akadémie </b><br>37 mužov<br>17.5% z celkového počtu", "<b>doktorand </b><br>14 mužov<br>6.6% z celkového počtu", "<b>postdok, junior researcher</b><br>14 mužov<br>6.6% z celkového počtu", "<b>vedecký pracovník (senior researcher) </b><br>11 mužov<br>5.2% z celkového počtu", "<b>študent (Bc./Mgr.) </b><br>8 mužov<br>3.8% z celkového počtu", "<b>iné </b><br>8 mužov<br>3.8% z celkového počtu", "<b>PI (vedúci laboratória)</b><br>4 muži<br>1.9% z celkového počtu", "<b>profesor, docent </b><br>2 muži<br>0.9% z celkového počtu", "<b>výskum v industry</b><br>2 muži<br>0.9% z celkového počtu", "<b>neuvedené </b><br>6 mužov<br>2.8% z celkového počtu"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
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
	y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>nesúhlas s analýzou: 3 osoby<br>1.4% z celkového počtu"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
	y: ["mimo akadémie ", "doktorand ", "postdok, junior researcher", "vedecký pracovník (senior researcher) ", "študent (Bc./Mgr.) ", "iné ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>"]
	}
];

var data_registration_timeSeries_2019 = [
	// registration_timeSeries 2019
	{
	x: [503.284398148148, 687.809120370371, 860.248287037037, 860.267731481481, 985.38162037037, 986.640787037037, 1011.75939814815, 1012.08384259259, 1022.78939814815, 1023.43023148148, 1023.75300925926, 1025.77078703704, 1029.11134259259, 1030.31634259259, 1046.59078703704, 1047.4924537037, 1121.9824537037, 1124.24606481482, 1204.17384259259, 1224.46217592593, 1243.3124537037, 1393.99523148148, 1394.04773148148, 1550.50689814815, 1574.60634259259, 1695.80578703704, 1770.06606481481, 1848.82328703704, 1939.08439814815, 1943.13773148148, 1959.64078703704, 1987.84578703704, 1987.86106481481, 1988.72189814815, 1988.9524537037, 1989.96439814815, 1990.09634259259, 1990.22384259259, 1990.27828703704, 1995.02912037037, 1996.58689814815, 2004.97578703704, 2006.67078703704, 2007.01023148148, 2007.18273148148, 2009.42550925926, 2017.75217592593, 2031.86717592593, 2064.21023148148, 2067.93356481481, 2067.97023148148, 2084.68884259259, 2101.18717592592, 2108.32856481481, 2111.69550925926, 2158.25523148148, 2200.15634259259, 2236.03800925926, 2269.76550925926, 2271.36412037037, 2272.75800925926, 2296.34217592592, 2307.38384259259, 2323.0074537037, 2323.13634259259, 2323.28634259259, 2324.03828703704, 2330.19162037037, 2330.9174537037, 2341.83078703704, 2342.17328703704, 2353.92273148148, 2366.72050925926, 2378.09550925926, 2392.29717592592, 2395.01412037037, 2397.02856481481, 2419.33356481481, 2422.01662037037, 2431.96106481481, 2438.16884259259, 2438.36606481481, 2439.11578703704, 2439.45662037037, 2439.55412037037, 2441.6899537037, 2443.99634259259, 2444.81356481481, 2449.06523148148, 2449.7899537037, 2449.92828703704, 2451.65328703704, 2453.43412037037, 2510.0024537037, 2511.05523148148, 2512.02328703704, 2515.95884259259, 2534.39634259259, 2599.00634259259],
	y: ["5", "6", "8", "9", "11", "12", "20", "21", "23", "24", "25", "27", "29", "30", "31", "32", "38", "39", "40", "42", "43", "44", "45", "47", "48", "49", "52", "53", "55", "56", "58", "59", "60", "63", "64", "66", "67", "68", "69", "72", "74", "75", "76", "77", "78", "79", "81", "82", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "112", "113", "114", "115", "116", "117", "120", "121", "123", "124", "125", "126", "129", "130", "131", "132", "133", "134", "136", "138", "139", "140", "141", "142", "143", "144"],
	name: 'Slovensko',
	text: ["23.09.2019 17:46:45", "01.10.2019 10:18:14", "08.10.2019 14:44:35", "08.10.2019 14:45:45", "13.10.2019 19:52:35", "13.10.2019 21:08:08", "14.10.2019 22:15:15", "14.10.2019 22:34:43", "15.10.2019 09:17:03", "15.10.2019 09:55:30", "15.10.2019 10:14:52", "15.10.2019 12:15:56", "15.10.2019 15:36:22", "15.10.2019 16:48:40", "16.10.2019 09:05:08", "16.10.2019 09:59:14", "19.10.2019 12:28:38", "19.10.2019 14:44:27", "22.10.2019 22:40:07", "23.10.2019 18:57:25", "24.10.2019 13:48:26", "30.10.2019 20:29:24", "30.10.2019 20:32:33", "06.11.2019 09:00:06", "07.11.2019 09:06:04", "12.11.2019 10:18:02", "15.11.2019 12:33:39", "18.11.2019 19:19:05", "22.11.2019 13:34:45", "22.11.2019 17:37:57", "23.11.2019 10:08:08", "24.11.2019 14:20:26", "24.11.2019 14:21:21", "24.11.2019 15:13:00", "24.11.2019 15:26:50", "24.11.2019 16:27:33", "24.11.2019 16:35:28", "24.11.2019 16:43:07", "24.11.2019 16:46:23", "24.11.2019 21:31:26", "24.11.2019 23:04:54", "25.11.2019 07:28:14", "25.11.2019 09:09:56", "25.11.2019 09:30:18", "25.11.2019 09:40:39", "25.11.2019 11:55:13", "25.11.2019 20:14:49", "26.11.2019 10:21:43", "27.11.2019 18:42:18", "27.11.2019 22:25:42", "27.11.2019 22:27:54", "28.11.2019 15:11:01", "29.11.2019 07:40:55", "29.11.2019 14:49:24", "29.11.2019 18:11:25", "01.12.2019 16:45:00", "03.12.2019 10:39:04", "04.12.2019 22:31:58", "06.12.2019 08:15:37", "06.12.2019 09:51:32", "06.12.2019 11:15:10", "07.12.2019 10:50:13", "07.12.2019 21:52:43", "08.12.2019 13:30:08", "08.12.2019 13:37:52", "08.12.2019 13:46:52", "08.12.2019 14:31:59", "08.12.2019 20:41:11", "08.12.2019 21:24:44", "09.12.2019 08:19:32", "09.12.2019 08:40:05", "09.12.2019 20:25:03", "10.12.2019 09:12:55", "10.12.2019 20:35:25", "11.12.2019 10:47:31", "11.12.2019 13:30:32", "11.12.2019 15:31:24", "12.12.2019 13:49:42", "12.12.2019 16:30:41", "13.12.2019 02:27:21", "13.12.2019 08:39:49", "13.12.2019 08:51:39", "13.12.2019 09:36:38", "13.12.2019 09:57:05", "13.12.2019 10:02:56", "13.12.2019 12:11:05", "13.12.2019 14:29:28", "13.12.2019 15:18:30", "13.12.2019 19:33:36", "13.12.2019 20:17:05", "13.12.2019 20:25:23", "13.12.2019 22:08:53", "13.12.2019 23:55:44", "16.12.2019 08:29:50", "16.12.2019 09:33:00", "16.12.2019 10:31:05", "16.12.2019 14:27:13", "17.12.2019 08:53:28", "20.12.2019 01:30:04"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>23.09.2019 17:46:45</b><br>5 osôb<br>3.0% online registrácií", "<b>01.10.2019 10:18:14</b><br>6 osôb<br>4.0% online registrácií", "<b>08.10.2019 14:44:35</b><br>8 osôb<br>6.0% online registrácií", "<b>08.10.2019 14:45:45</b><br>9 osôb<br>6.0% online registrácií", "<b>13.10.2019 19:52:35</b><br>11 osôb<br>8.0% online registrácií", "<b>13.10.2019 21:08:08</b><br>12 osôb<br>8.0% online registrácií", "<b>14.10.2019 22:15:15</b><br>20 osôb<br>14.0% online registrácií", "<b>14.10.2019 22:34:43</b><br>21 osôb<br>14.0% online registrácií", "<b>15.10.2019 09:17:03</b><br>23 osôb<br>16.0% online registrácií", "<b>15.10.2019 09:55:30</b><br>24 osôb<br>17.0% online registrácií", "<b>15.10.2019 10:14:52</b><br>25 osôb<br>17.0% online registrácií", "<b>15.10.2019 12:15:56</b><br>27 osôb<br>19.0% online registrácií", "<b>15.10.2019 15:36:22</b><br>29 osôb<br>20.0% online registrácií", "<b>15.10.2019 16:48:40</b><br>30 osôb<br>21.0% online registrácií", "<b>16.10.2019 09:05:08</b><br>31 osôb<br>21.0% online registrácií", "<b>16.10.2019 09:59:14</b><br>32 osôb<br>22.0% online registrácií", "<b>19.10.2019 12:28:38</b><br>38 osôb<br>26.0% online registrácií", "<b>19.10.2019 14:44:27</b><br>39 osôb<br>27.0% online registrácií", "<b>22.10.2019 22:40:07</b><br>40 osôb<br>28.0% online registrácií", "<b>23.10.2019 18:57:25</b><br>42 osôb<br>29.0% online registrácií", "<b>24.10.2019 13:48:26</b><br>43 osôb<br>30.0% online registrácií", "<b>30.10.2019 20:29:24</b><br>44 osôb<br>30.0% online registrácií", "<b>30.10.2019 20:32:33</b><br>45 osôb<br>31.0% online registrácií", "<b>06.11.2019 09:00:06</b><br>47 osôb<br>32.0% online registrácií", "<b>07.11.2019 09:06:04</b><br>48 osôb<br>33.0% online registrácií", "<b>12.11.2019 10:18:02</b><br>49 osôb<br>34.0% online registrácií", "<b>15.11.2019 12:33:39</b><br>52 osôb<br>36.0% online registrácií", "<b>18.11.2019 19:19:05</b><br>53 osôb<br>37.0% online registrácií", "<b>22.11.2019 13:34:45</b><br>55 osôb<br>38.0% online registrácií", "<b>22.11.2019 17:37:57</b><br>56 osôb<br>39.0% online registrácií", "<b>23.11.2019 10:08:08</b><br>58 osôb<br>40.0% online registrácií", "<b>24.11.2019 14:20:26</b><br>59 osôb<br>41.0% online registrácií", "<b>24.11.2019 14:21:21</b><br>60 osôb<br>41.0% online registrácií", "<b>24.11.2019 15:13:00</b><br>63 osôb<br>43.0% online registrácií", "<b>24.11.2019 15:26:50</b><br>64 osôb<br>44.0% online registrácií", "<b>24.11.2019 16:27:33</b><br>66 osôb<br>46.0% online registrácií", "<b>24.11.2019 16:35:28</b><br>67 osôb<br>46.0% online registrácií", "<b>24.11.2019 16:43:07</b><br>68 osôb<br>47.0% online registrácií", "<b>24.11.2019 16:46:23</b><br>69 osôb<br>48.0% online registrácií", "<b>24.11.2019 21:31:26</b><br>72 osôb<br>50.0% online registrácií", "<b>24.11.2019 23:04:54</b><br>74 osôb<br>51.0% online registrácií", "<b>25.11.2019 07:28:14</b><br>75 osôb<br>52.0% online registrácií", "<b>25.11.2019 09:09:56</b><br>76 osôb<br>52.0% online registrácií", "<b>25.11.2019 09:30:18</b><br>77 osôb<br>53.0% online registrácií", "<b>25.11.2019 09:40:39</b><br>78 osôb<br>54.0% online registrácií", "<b>25.11.2019 11:55:13</b><br>79 osôb<br>54.0% online registrácií", "<b>25.11.2019 20:14:49</b><br>81 osôb<br>56.0% online registrácií", "<b>26.11.2019 10:21:43</b><br>82 osôb<br>57.0% online registrácií", "<b>27.11.2019 18:42:18</b><br>86 osôb<br>59.0% online registrácií", "<b>27.11.2019 22:25:42</b><br>87 osôb<br>60.0% online registrácií", "<b>27.11.2019 22:27:54</b><br>88 osôb<br>61.0% online registrácií", "<b>28.11.2019 15:11:01</b><br>89 osôb<br>61.0% online registrácií", "<b>29.11.2019 07:40:55</b><br>90 osôb<br>62.0% online registrácií", "<b>29.11.2019 14:49:24</b><br>91 osôb<br>63.0% online registrácií", "<b>29.11.2019 18:11:25</b><br>92 osôb<br>63.0% online registrácií", "<b>01.12.2019 16:45:00</b><br>93 osôb<br>64.0% online registrácií", "<b>03.12.2019 10:39:04</b><br>94 osôb<br>65.0% online registrácií", "<b>04.12.2019 22:31:58</b><br>95 osôb<br>66.0% online registrácií", "<b>06.12.2019 08:15:37</b><br>96 osôb<br>66.0% online registrácií", "<b>06.12.2019 09:51:32</b><br>97 osôb<br>67.0% online registrácií", "<b>06.12.2019 11:15:10</b><br>98 osôb<br>68.0% online registrácií", "<b>07.12.2019 10:50:13</b><br>99 osôb<br>68.0% online registrácií", "<b>07.12.2019 21:52:43</b><br>100 osôb<br>69.0% online registrácií", "<b>08.12.2019 13:30:08</b><br>101 osôb<br>70.0% online registrácií", "<b>08.12.2019 13:37:52</b><br>102 osôb<br>70.0% online registrácií", "<b>08.12.2019 13:46:52</b><br>103 osôb<br>71.0% online registrácií", "<b>08.12.2019 14:31:59</b><br>104 osôb<br>72.0% online registrácií", "<b>08.12.2019 20:41:11</b><br>105 osôb<br>72.0% online registrácií", "<b>08.12.2019 21:24:44</b><br>106 osôb<br>73.0% online registrácií", "<b>09.12.2019 08:19:32</b><br>107 osôb<br>74.0% online registrácií", "<b>09.12.2019 08:40:05</b><br>108 osôb<br>74.0% online registrácií", "<b>09.12.2019 20:25:03</b><br>109 osôb<br>75.0% online registrácií", "<b>10.12.2019 09:12:55</b><br>110 osôb<br>76.0% online registrácií", "<b>10.12.2019 20:35:25</b><br>112 osôb<br>77.0% online registrácií", "<b>11.12.2019 10:47:31</b><br>113 osôb<br>78.0% online registrácií", "<b>11.12.2019 13:30:32</b><br>114 osôb<br>79.0% online registrácií", "<b>11.12.2019 15:31:24</b><br>115 osôb<br>79.0% online registrácií", "<b>12.12.2019 13:49:42</b><br>116 osôb<br>80.0% online registrácií", "<b>12.12.2019 16:30:41</b><br>117 osôb<br>81.0% online registrácií", "<b>13.12.2019 02:27:21</b><br>120 osôb<br>83.0% online registrácií", "<b>13.12.2019 08:39:49</b><br>121 osôb<br>83.0% online registrácií", "<b>13.12.2019 08:51:39</b><br>123 osôb<br>85.0% online registrácií", "<b>13.12.2019 09:36:38</b><br>124 osôb<br>86.0% online registrácií", "<b>13.12.2019 09:57:05</b><br>125 osôb<br>86.0% online registrácií", "<b>13.12.2019 10:02:56</b><br>126 osôb<br>87.0% online registrácií", "<b>13.12.2019 12:11:05</b><br>129 osôb<br>89.0% online registrácií", "<b>13.12.2019 14:29:28</b><br>130 osôb<br>90.0% online registrácií", "<b>13.12.2019 15:18:30</b><br>131 osôb<br>90.0% online registrácií", "<b>13.12.2019 19:33:36</b><br>132 osôb<br>91.0% online registrácií", "<b>13.12.2019 20:17:05</b><br>133 osôb<br>92.0% online registrácií", "<b>13.12.2019 20:25:23</b><br>134 osôb<br>92.0% online registrácií", "<b>13.12.2019 22:08:53</b><br>136 osôb<br>94.0% online registrácií", "<b>13.12.2019 23:55:44</b><br>138 osôb<br>95.0% online registrácií", "<b>16.12.2019 08:29:50</b><br>139 osôb<br>96.0% online registrácií", "<b>16.12.2019 09:33:00</b><br>140 osôb<br>97.0% online registrácií", "<b>16.12.2019 10:31:05</b><br>141 osôb<br>97.0% online registrácií", "<b>16.12.2019 14:27:13</b><br>142 osôb<br>98.0% online registrácií", "<b>17.12.2019 08:53:28</b><br>143 osôb<br>99.0% online registrácií", "<b>20.12.2019 01:30:04</b><br>144 osôb<br>99.0% online registrácií"]
	},
	{
	x: [480.80412037037, 1011.42689814815, 1077.92634259259, 1706.81078703704, 1908.35773148148, 1987.97606481481, 1990.68467592593, 1995.89912037037, 2042.29717592592, 2373.98412037037],
	y: ["1", "19", "36", "50", "54", "61", "70", "73", "85", "111"],
	name: 'SR + zahraničie',
	text: ["22.09.2019 19:17:56", "14.10.2019 21:55:18", "17.10.2019 16:25:16", "12.11.2019 21:18:20", "21.11.2019 06:51:09", "24.11.2019 14:28:15", "24.11.2019 17:10:46", "24.11.2019 22:23:38", "26.11.2019 20:47:31", "10.12.2019 16:28:44"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>22.09.2019 19:17:56</b><br>1 osoba<br>1.0% online registrácií", "<b>14.10.2019 21:55:18</b><br>19 osôb<br>13.0% online registrácií", "<b>17.10.2019 16:25:16</b><br>36 osôb<br>25.0% online registrácií", "<b>12.11.2019 21:18:20</b><br>50 osôb<br>34.0% online registrácií", "<b>21.11.2019 06:51:09</b><br>54 osôb<br>37.0% online registrácií", "<b>24.11.2019 14:28:15</b><br>61 osôb<br>42.0% online registrácií", "<b>24.11.2019 17:10:46</b><br>70 osôb<br>48.0% online registrácií", "<b>24.11.2019 22:23:38</b><br>73 osôb<br>50.0% online registrácií", "<b>26.11.2019 20:47:31</b><br>85 osôb<br>59.0% online registrácií", "<b>10.12.2019 16:28:44</b><br>111 osôb<br>77.0% online registrácií"]
	},
	{
	x: [480.853009259259, 496.353287037037, 498.502175925926, 767.163564814815, 984.063009259259, 987.104953703704, 988.05162037037, 1001.86884259259, 1002.58328703704, 1003.87912037037, 1007.2124537037, 1013.3949537037, 1027.46578703704, 1048.9349537037, 1056.68578703704, 1072.58023148148, 1094.84939814815, 1204.6299537037, 1462.2574537037, 1952.56273148148, 1988.08134259259, 1989.28578703704, 1994.50078703704, 2017.27912037037, 2038.50634259259, 2041.2424537037, 2426.10078703704, 2430.79773148148, 2439.8699537037, 2440.06328703704, 2451.1924537037, 2452.09467592592],
	y: ["2", "3", "4", "7", "10", "13", "14", "15", "16", "17", "18", "22", "28", "33", "34", "35", "37", "41", "46", "57", "62", "65", "71", "80", "83", "84", "118", "119", "127", "128", "135", "137"],
	name: 'zahraničie',
	text: ["22.09.2019 19:20:52", "23.09.2019 10:50:53", "23.09.2019 12:59:49", "04.10.2019 17:39:30", "13.10.2019 18:33:28", "13.10.2019 21:35:59", "13.10.2019 22:32:47", "14.10.2019 12:21:49", "14.10.2019 13:04:41", "14.10.2019 14:22:26", "14.10.2019 17:42:26", "14.10.2019 23:53:23", "15.10.2019 13:57:38", "16.10.2019 11:25:47", "16.10.2019 19:10:50", "17.10.2019 11:04:30", "18.10.2019 09:20:39", "22.10.2019 23:07:29", "02.11.2019 16:45:08", "23.11.2019 03:03:27", "24.11.2019 14:34:34", "24.11.2019 15:46:50", "24.11.2019 20:59:44", "25.11.2019 19:46:26", "26.11.2019 17:00:04", "26.11.2019 19:44:14", "12.12.2019 20:35:44", "13.12.2019 01:17:33", "13.12.2019 10:21:53", "13.12.2019 10:33:29", "13.12.2019 21:41:14", "13.12.2019 22:35:22"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>22.09.2019 19:20:52</b><br>2 osoby<br>1.0% online registrácií", "<b>23.09.2019 10:50:53</b><br>3 osoby<br>2.0% online registrácií", "<b>23.09.2019 12:59:49</b><br>4 osoby<br>3.0% online registrácií", "<b>04.10.2019 17:39:30</b><br>7 osôb<br>5.0% online registrácií", "<b>13.10.2019 18:33:28</b><br>10 osôb<br>7.0% online registrácií", "<b>13.10.2019 21:35:59</b><br>13 osôb<br>9.0% online registrácií", "<b>13.10.2019 22:32:47</b><br>14 osôb<br>10.0% online registrácií", "<b>14.10.2019 12:21:49</b><br>15 osôb<br>10.0% online registrácií", "<b>14.10.2019 13:04:41</b><br>16 osôb<br>11.0% online registrácií", "<b>14.10.2019 14:22:26</b><br>17 osôb<br>12.0% online registrácií", "<b>14.10.2019 17:42:26</b><br>18 osôb<br>12.0% online registrácií", "<b>14.10.2019 23:53:23</b><br>22 osôb<br>15.0% online registrácií", "<b>15.10.2019 13:57:38</b><br>28 osôb<br>19.0% online registrácií", "<b>16.10.2019 11:25:47</b><br>33 osôb<br>23.0% online registrácií", "<b>16.10.2019 19:10:50</b><br>34 osôb<br>23.0% online registrácií", "<b>17.10.2019 11:04:30</b><br>35 osôb<br>24.0% online registrácií", "<b>18.10.2019 09:20:39</b><br>37 osôb<br>26.0% online registrácií", "<b>22.10.2019 23:07:29</b><br>41 osôb<br>28.0% online registrácií", "<b>02.11.2019 16:45:08</b><br>46 osôb<br>32.0% online registrácií", "<b>23.11.2019 03:03:27</b><br>57 osôb<br>39.0% online registrácií", "<b>24.11.2019 14:34:34</b><br>62 osôb<br>43.0% online registrácií", "<b>24.11.2019 15:46:50</b><br>65 osôb<br>45.0% online registrácií", "<b>24.11.2019 20:59:44</b><br>71 osôb<br>49.0% online registrácií", "<b>25.11.2019 19:46:26</b><br>80 osôb<br>55.0% online registrácií", "<b>26.11.2019 17:00:04</b><br>83 osôb<br>57.0% online registrácií", "<b>26.11.2019 19:44:14</b><br>84 osôb<br>58.0% online registrácií", "<b>12.12.2019 20:35:44</b><br>118 osôb<br>81.0% online registrácií", "<b>13.12.2019 01:17:33</b><br>119 osôb<br>82.0% online registrácií", "<b>13.12.2019 10:21:53</b><br>127 osôb<br>88.0% online registrácií", "<b>13.12.2019 10:33:29</b><br>128 osôb<br>88.0% online registrácií", "<b>13.12.2019 21:41:14</b><br>135 osôb<br>93.0% online registrácií", "<b>13.12.2019 22:35:22</b><br>137 osôb<br>94.0% online registrácií"]
	},
	{
	x: [2438.28106481481],
	y: ["122"],
	name: 'neuvedené',
	text: ["13.12.2019 08:46:33"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>13.12.2019 08:46:33</b><br>122 osôb<br>84.0% online registrácií"]
	},
	{
		x: [0, 480.80412037037, 480.853009259259, 496.353287037037, 498.502175925926, 503.284398148148, 687.809120370371, 767.163564814815, 860.248287037037, 860.267731481481, 984.063009259259, 985.38162037037, 986.640787037037, 987.104953703704, 988.05162037037, 1001.86884259259, 1002.58328703704, 1003.87912037037, 1007.2124537037, 1011.42689814815, 1011.75939814815, 1012.08384259259, 1013.3949537037, 1022.78939814815, 1023.43023148148, 1023.75300925926, 1025.77078703704, 1027.46578703704, 1029.11134259259, 1030.31634259259, 1046.59078703704, 1047.4924537037, 1048.9349537037, 1056.68578703704, 1072.58023148148, 1077.92634259259, 1094.84939814815, 1121.9824537037, 1124.24606481482, 1204.17384259259, 1204.6299537037, 1224.46217592593, 1243.3124537037, 1393.99523148148, 1394.04773148148, 1462.2574537037, 1550.50689814815, 1574.60634259259, 1695.80578703704, 1706.81078703704, 1770.06606481481, 1848.82328703704, 1908.35773148148, 1939.08439814815, 1943.13773148148, 1952.56273148148, 1959.64078703704, 1987.84578703704, 1987.86106481481, 1987.97606481481, 1988.08134259259, 1988.72189814815, 1988.9524537037, 1989.28578703704, 1989.96439814815, 1990.09634259259, 1990.22384259259, 1990.27828703704, 1990.68467592593, 1994.50078703704, 1995.02912037037, 1995.89912037037, 1996.58689814815, 2004.97578703704, 2006.67078703704, 2007.01023148148, 2007.18273148148, 2009.42550925926, 2017.27912037037, 2017.75217592593, 2031.86717592593, 2038.50634259259, 2041.2424537037, 2042.29717592592, 2064.21023148148, 2067.93356481481, 2067.97023148148, 2084.68884259259, 2101.18717592592, 2108.32856481481, 2111.69550925926, 2158.25523148148, 2200.15634259259, 2236.03800925926, 2269.76550925926, 2271.36412037037, 2272.75800925926, 2296.34217592592, 2307.38384259259, 2323.0074537037, 2323.13634259259, 2323.28634259259, 2324.03828703704, 2330.19162037037, 2330.9174537037, 2341.83078703704, 2342.17328703704, 2353.92273148148, 2366.72050925926, 2373.98412037037, 2378.09550925926, 2392.29717592592, 2395.01412037037, 2397.02856481481, 2419.33356481481, 2422.01662037037, 2426.10078703704, 2430.79773148148, 2431.96106481481, 2438.16884259259, 2438.28106481481, 2438.36606481481, 2439.11578703704, 2439.45662037037, 2439.55412037037, 2439.8699537037, 2440.06328703704, 2441.6899537037, 2443.99634259259, 2444.81356481481, 2449.06523148148, 2449.7899537037, 2449.92828703704, 2451.1924537037, 2451.65328703704, 2452.09467592592, 2453.43412037037, 2510.0024537037, 2511.05523148148, 2512.02328703704, 2515.95884259259, 2534.39634259259, 2599.00634259259],
		y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144],
		name: "",
		type: 'bar',
		marker: {
			color: ['rgb(255, 255, 255)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)']
		},
		showlegend: false,
		visible: true,
		hoverinfo: 'skip',
		hovermode: "none"
	},
];

var data_registration_timeLabels_2019 = ["", "22.9.", "", "", "", "", "", "", "", "", "13.10.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "24.11.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "8.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "13.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

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

var data_participation_2021 = [
// participation 2021
{
	type: "sunburst",
	ids: ["všetci_po2020", "preferujú online", "preferujú prezenčne", "online/prezenčne: neuvedené", "nesúhlas", "muži online", "ženy online", "muži prezenčne", "ženy prezenčne"],
	labels: ["dáta z prihlasovania", "preferujú online", "preferujú prezenčne", "neuvedené", "nesúhlas s analýzou", "muži", "ženy", "muži", "ženy"],
	values: [194, 159, 22, 10, 3, 55, 104, 7, 15],
	parents: ["", "všetci_po2020", "všetci_po2020", "všetci_po2020", "všetci_po2020", "preferujú online", "preferujú online", "preferujú prezenčne", "preferujú prezenčne"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 255, 98)', 'rgb(0, 230, 0)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(204, 221, 255)', 'rgb(255, 204, 204)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania</b><br>194 osôb<br>", "<b>preferujú online</b><br>159 osôb<br>82.0% registrovaných", "<b>preferujú prezenčne</b><br>22 osôb<br>11.3% registrovaných", "<b>neuvedené</b><br>10 osôb<br>5.2% registrovaných", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.5% registrovaných", "<b>preferujú online</b><br>55 mužov<br>28.4% registrovaných", "<b>preferujú online</b><br>104 žien<br>53.6% registrovaných", "<b>preferujú prezenčne</b><br>7 mužov<br>3.6% registrovaných", "<b>preferujú prezenčne</b><br>15 žien<br>7.7% registrovaných"]
}];

var data_participation_detail_2021 = [
// participation_detail 2021
{
	type: "sunburst",
	ids: ["všetci", "účasť", "pozvané príspevky", "prednášky", "organizácia", "nesúhlas", "účastníčky", "účastníci", "pozvané príspevky: ženy", "pozvané príspevky: muži", "aktívne účastníčky", "aktívni účastníci", "organizátorky", "organizátori"],
	labels: ["iba prítomní", "účasť", "pozvané príspevky", "prednášky", "organizácia", "nesúhlas s analýzou", "ženy", "muži", "ženy", "muži", "ženy", "muži", "ženy", "muži"],
	values: [194, 162, 13, 7, 9, 3, 104, 58, 11, 2, 3, 4, 7, 2],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "účasť", "účasť", "pozvané príspevky", "pozvané príspevky", "prednášky", "prednášky", "organizácia", "organizácia"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 214, 16)', 'rgb(255, 174, 16)', 'rgb(255, 134, 16', 'rgb(200, 200, 200)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania</b><br>194 osôb<br>", "<b>účasť</b><br>162 osôb<br>83.5% registrovaných", "<b>pozvané príspevky</b><br>13 osôb<br>6.7% registrovaných", "<b>prednášky</b><br>7 osôb<br>3.6% registrovaných", "<b>organizácia</b><br>9 osôb<br>4.6% registrovaných", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.5% registrovaných", "<b>účasť</b><br>104 žien<br>53.6% registrovaných", "<b>účasť</b><br>58 mužov<br>29.9% registrovaných", "<b>pozvané príspevky</b><br>11 žien<br>5.7% registrovaných", "<b>pozvané príspevky</b><br>2 muži<br>1.0% registrovaných", "<b>prednášky</b><br>3 ženy<br>1.5% registrovaných", "<b>prednášky</b><br>4 muži<br>2.1% registrovaných", "<b>organizácia</b><br>7 žien<br>3.6% registrovaných", "<b>organizácia</b><br>2 muži<br>1.0% registrovaných"]
}];

var data_abroad_2021 = [
// abroad 2021
{
	type: "sunburst",
	ids: ["všetci", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "nesúhlas", "muži (SR)", "ženy (SR)", "ženy (NA)", "muži (oboje)", "ženy (oboje", "muži (zahr.)", "ženy (zahr.)"],
	labels: ["iba prítomní", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "nesúhlas s analýzou", "muži", "ženy", "ženy", "muži", "ženy", "muži", "ženy"],
	values: [194, 119, 11, 60, 1, 3, 43, 76, 1, 6, 5, 17, 43],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "Slovensko", "Slovensko", "neuvedené", "SR a zahraničie", "SR a zahraničie", "zahraničie", "zahraničie"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania</b><br>194 osôb<br>", "<b>Slovensko</b><br>119 osôb<br>61.3% registrovaných", "<b>SR a zahraničie</b><br>11 osôb<br>5.7% registrovaných", "<b>zahraničie</b><br>60 osôb<br>30.9% registrovaných", "<b>neuvedené</b><br>1 osoba<br>0.5% registrovaných", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.5% registrovaných", "<b>Slovensko</b><br>43 mužov<br>22.2% registrovaných", "<b>Slovensko</b><br>76 žien<br>39.2% registrovaných", "<b>neuvedené</b><br>1 žena<br>0.5% registrovaných", "<b>SR a zahraničie</b><br>6 mužov<br>3.1% registrovaných", "<b>SR a zahraničie</b><br>5 žien<br>2.6% registrovaných", "<b>zahraničie</b><br>17 mužov<br>8.8% registrovaných", "<b>zahraničie</b><br>43 žien<br>22.2% registrovaných"]
}];

var data_subject_2021 = [
// subject 2021
{
	type: "sunburst",
	ids: ["všetci", "nesúhlas", "STEM", "SSH", "iné", "neuvedené", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra, urbanizmus", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "STEM neuvedené", "knižničná a informačná veda", "digital humanities", "história, pomocné vedy historické", "archeológia", "religionistika", "psychológia", "didaktika", "sociálna práca", "sociológia", "politické vedy", "ekonómia a manažment", "SSH nezaradené", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "projektový manažment", "popularizácia", "štátna správa", "nezaradené", "iné neuvedené", "neuvedené (neuvedené)"],
	labels: ["iba dáta z registrácie", "nesúhlas s analýzou", "STEM", "SSH", "iné", "neuvedené", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra, urbanizmus", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "neuvedené", "knižničná a informačná veda", "digital humanities", "história, pomocné vedy historické", "archeológia", "religionistika", "psychológia", "didaktika", "sociálna práca", "sociológia", "politické vedy", "ekonómia a manažment", "nezaradené", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "projektový manažment", "popularizácia", "štátna správa", "nezaradené", "neuvedené", "neuvedené"],
	values: [194, 3, 125, 37, 24, 5, 8, 17, 18, 3, 4, 2, 1, 1, 4, 17, 3, 7, 10, 3, 7, 8, 2, 1, 1, 7, 1, 3, 1, 8, 1, 1, 7, 1, 1, 1, 6, 6, 1, 6, 5, 4, 3, 2, 1, 1, 2, 5],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "neuvedené"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(200, 200, 200)', 'rgb(0, 102, 102)', 'rgb(204, 0, 0)', 'rgb(62, 0, 62)', 'rgb(124, 124, 124)', 'rgb(53, 104, 0)', 'rgb(82, 163, 0)', 'rgb(102, 204, 0)', 'rgb(222, 222, 92)', 'rgb(255, 238, 153)', 'rgb(255,247,126)', 'rgb(255, 255, 98)', 'rgb(255, 255, 0)', 'rgb(255, 204, 0)', 'rgb(255, 128, 0)', 'rgb(204, 101, 0)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(0, 0, 255)', 'rgb(0, 128, 255)', 'rgb(136, 136, 136)', 'rgb(175, 175, 175)', 'rgb(36, 18, 0)', 'rgb(75, 37, 0)', 'rgb(89, 121, 0)', 'rgb(0, 102, 102)', 'rgb(77, 64, 83)', 'rgb(102, 51, 77)', 'rgb(145,0,73)', 'rgb(204, 0, 102)', 'rgb(153, 0, 76)', 'rgb(214, 48, 90)', 'rgb(214, 48, 62)', 'rgb(209, 24, 31)', 'rgb(214, 48, 48)', 'rgb(218, 94, 69)', 'rgb(218, 106, 69)', 'rgb(204, 0, 0)', 'rgb(82, 0, 82)', 'rgb(107, 0, 107)', 'rgb(132, 0, 132)', 'rgb(152, 0, 152)', 'rgb(162, 0, 162)', 'rgb(172, 0, 172)', 'rgb(62, 0, 62)', 'rgb(62, 0, 62)', 'rgb(124, 124, 124)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba dáta z registrácie</b><br>194 osôb<br>", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.5% registrovaných", "<b>STEM</b><br>125 osôb<br>64.4% registrovaných", "<b>SSH</b><br>37 osôb<br>19.1% registrovaných", "<b>iné</b><br>24 osôb<br>12.4% registrovaných", "<b>neuvedené</b><br>5 osôb<br>2.6% registrovaných", "<b>genetika</b><br>8 osôb<br>4.1% registrovaných", "<b>molekulárna biológia</b><br>17 osôb<br>8.8% registrovaných", "<b>biológia</b><br>18 osôb<br>9.3% registrovaných", "<b>biochémia</b><br>3 osoby<br>1.5% registrovaných", "<b>biofyzika</b><br>4 osoby<br>2.1% registrovaných", "<b>bioinformatika</b><br>2 osoby<br>1.0% registrovaných", "<b>biomedicína</b><br>1 osoba<br>0.5% registrovaných", "<b>biotechnológie, biomateriály</b><br>1 osoba<br>0.5% registrovaných", "<b>neurovedy</b><br>4 osoby<br>2.1% registrovaných", "<b>medicína, lekárske vedy</b><br>17 osôb<br>8.8% registrovaných", "<b>farmácia</b><br>3 osoby<br>1.5% registrovaných", "<b>chémia</b><br>7 osôb<br>3.6% registrovaných", "<b>fyzika</b><br>10 osôb<br>5.2% registrovaných", "<b>matematika</b><br>3 osoby<br>1.5% registrovaných", "<b>IT</b><br>7 osôb<br>3.6% registrovaných", "<b>technológie</b><br>8 osôb<br>4.1% registrovaných", "<b>stavebné inžinierstvo, architektúra, urbanizmus</b><br>2 osoby<br>1.0% registrovaných", "<b>geopriestorové vedy</b><br>1 osoba<br>0.5% registrovaných", "<b>vedy o Zemi</b><br>1 osoba<br>0.5% registrovaných", "<b>ekologické a environmentálne vedy</b><br>7 osôb<br>3.6% registrovaných", "<b>neuvedené</b><br>1 osoba<br>0.5% registrovaných", "<b>knižničná a informačná veda</b><br>3 osoby<br>1.5% registrovaných", "<b>digital humanities</b><br>1 osoba<br>0.5% registrovaných", "<b>história, pomocné vedy historické</b><br>8 osôb<br>4.1% registrovaných", "<b>archeológia</b><br>1 osoba<br>0.5% registrovaných", "<b>religionistika</b><br>1 osoba<br>0.5% registrovaných", "<b>psychológia</b><br>7 osôb<br>3.6% registrovaných", "<b>didaktika</b><br>1 osoba<br>0.5% registrovaných", "<b>sociálna práca</b><br>1 osoba<br>0.5% registrovaných", "<b>sociológia</b><br>1 osoba<br>0.5% registrovaných", "<b>politické vedy</b><br>6 osôb<br>3.1% registrovaných", "<b>ekonómia a manažment</b><br>6 osôb<br>3.1% registrovaných", "<b>nezaradené</b><br>1 osoba<br>0.5% registrovaných", "<b>podpora výskumu</b><br>6 osôb<br>3.1% registrovaných", "<b>otvorená veda</b><br>5 osôb<br>2.6% registrovaných", "<b>vzdelávanie, poradenstvo</b><br>4 osoby<br>2.1% registrovaných", "<b>projektový manažment</b><br>3 osoby<br>1.5% registrovaných", "<b>popularizácia</b><br>2 osoby<br>1.0% registrovaných", "<b>štátna správa</b><br>1 osoba<br>0.5% registrovaných", "<b>nezaradené</b><br>1 osoba<br>0.5% registrovaných", "<b>neuvedené</b><br>2 osoby<br>1.0% registrovaných", "<b>neuvedené</b><br>5 osôb<br>2.6% registrovaných"]
}];

var data_institution_country_2021 = [
	// institution_country 2021
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>výskum + univerzita</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>nadnárodná organizácia</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>komerčná spoločnosť</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>práca s mládežou</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>štátna správa</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>iné</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>neuvedené</b><br>Slovensko: 21 osôb<br>4.5% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>výskum + univerzita</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>nadnárodná organizácia</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>komerčná spoločnosť</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>podpora výskumu</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>práca s mládežou</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>štátna správa</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>iné</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>neuvedené</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>nadnárodná organizácia</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>komerčná spoločnosť</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>podpora výskumu</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>práca s mládežou</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>štátna správa</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>iné</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>neuvedené</b><br>zahraničie: 21 osôb<br>4.5% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>výskum + univerzita</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>nadnárodná organizácia</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>komerčná spoločnosť</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>podpora výskumu</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>práca s mládežou</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>štátna správa</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>iné</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>neuvedené</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>nesúhlas s analýzou: 3 osoby<br>0.6% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>výskum + univerzita</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>nadnárodná organizácia</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>komerčná spoločnosť</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>práca s mládežou</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>štátna správa</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>iné</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>neuvedené</b><br>Slovensko: 21 osôb<br>4.5% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>výskum + univerzita</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>nadnárodná organizácia</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>komerčná spoločnosť</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>podpora výskumu</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>práca s mládežou</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>štátna správa</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>iné</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>neuvedené</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>nadnárodná organizácia</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>komerčná spoločnosť</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>podpora výskumu</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>práca s mládežou</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>štátna správa</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>iné</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>neuvedené</b><br>zahraničie: 21 osôb<br>4.5% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>výskum + univerzita</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>nadnárodná organizácia</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>komerčná spoločnosť</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>podpora výskumu</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>práca s mládežou</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>štátna správa</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>iné</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>neuvedené</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných"]
	},
];

var data_institution_gender_2021 = [
	// institution_gender 2021
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>21 žien<br>4.5% registrovaných", "<b>výskum + univerzita</b><br>21 žien<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>21 žien<br>4.5% registrovaných", "<b>nadnárodná organizácia</b><br>21 žien<br>4.5% registrovaných", "<b>komerčná spoločnosť</b><br>21 žien<br>4.5% registrovaných", "<b>podpora výskumu</b><br>21 žien<br>4.5% registrovaných", "<b>práca s mládežou</b><br>21 žien<br>4.5% registrovaných", "<b>štátna správa</b><br>21 žien<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>21 žien<br>4.5% registrovaných", "<b>iné</b><br>21 žien<br>4.5% registrovaných", "<b>neuvedené</b><br>21 žien<br>4.5% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>21 mužov<br>4.5% registrovaných", "<b>výskum + univerzita</b><br>21 mužov<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>21 mužov<br>4.5% registrovaných", "<b>nadnárodná organizácia</b><br>21 mužov<br>4.5% registrovaných", "<b>komerčná spoločnosť</b><br>21 mužov<br>4.5% registrovaných", "<b>podpora výskumu</b><br>21 mužov<br>4.5% registrovaných", "<b>práca s mládežou</b><br>21 mužov<br>4.5% registrovaných", "<b>štátna správa</b><br>21 mužov<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>21 mužov<br>4.5% registrovaných", "<b>iné</b><br>21 mužov<br>4.5% registrovaných", "<b>neuvedené</b><br>21 mužov<br>4.5% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>nesúhlas s analýzou: 3 osoby<br>0.6% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>21 žien<br>4.5% registrovaných", "<b>výskum + univerzita</b><br>21 žien<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>21 žien<br>4.5% registrovaných", "<b>nadnárodná organizácia</b><br>21 žien<br>4.5% registrovaných", "<b>komerčná spoločnosť</b><br>21 žien<br>4.5% registrovaných", "<b>podpora výskumu</b><br>21 žien<br>4.5% registrovaných", "<b>práca s mládežou</b><br>21 žien<br>4.5% registrovaných", "<b>štátna správa</b><br>21 žien<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>21 žien<br>4.5% registrovaných", "<b>iné</b><br>21 žien<br>4.5% registrovaných", "<b>neuvedené</b><br>21 žien<br>4.5% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>21 mužov<br>4.5% registrovaných", "<b>výskum + univerzita</b><br>21 mužov<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>21 mužov<br>4.5% registrovaných", "<b>nadnárodná organizácia</b><br>21 mužov<br>4.5% registrovaných", "<b>komerčná spoločnosť</b><br>21 mužov<br>4.5% registrovaných", "<b>podpora výskumu</b><br>21 mužov<br>4.5% registrovaných", "<b>práca s mládežou</b><br>21 mužov<br>4.5% registrovaných", "<b>štátna správa</b><br>21 mužov<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>21 mužov<br>4.5% registrovaných", "<b>iné</b><br>21 mužov<br>4.5% registrovaných", "<b>neuvedené</b><br>21 mužov<br>4.5% registrovaných"]
	},
];

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
	hovertext: ["<b>profesor, docent </b><br>Slovensko: 1 osoba<br>0.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 20 osôb<br>10.3% registrovaných", "<b>PI (vedúci laboratória)</b><br>Slovensko: 8 osôb<br>4.1% registrovaných", "<b>postdok, junior researcher</b><br>Slovensko: 14 osôb<br>7.2% registrovaných", "<b>výskum v industry</b><br>Slovensko: 1 osoba<br>0.5% registrovaných", "<b>doktorand </b><br>Slovensko: 9 osôb<br>4.6% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 26 osôb<br>13.4% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 16 osôb<br>8.2% registrovaných", "<b>iné </b><br>Slovensko: 21 osôb<br>10.8% registrovaných", "<b>neuvedené </b><br>Slovensko: 3 osoby<br>1.5% registrovaných"]
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
	hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>SR + zahraničie: 3 osoby<br>1.5% registrovaných", "", "<b>postdok, junior researcher</b><br>SR + zahraničie: 1 osoba<br>0.5% registrovaných", "", "<b>doktorand </b><br>SR + zahraničie: 3 osoby<br>1.5% registrovaných", "<b>mimo akadémie </b><br>SR + zahraničie: 1 osoba<br>0.5% registrovaných", "", "<b>iné </b><br>SR + zahraničie: 1 osoba<br>0.5% registrovaných", "<b>neuvedené </b><br>SR + zahraničie: 2 osoby<br>1.0% registrovaných"]
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
	hovertext: ["<b>profesor, docent </b><br>zahraničie: 2 osoby<br>1.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 2 osoby<br>1.0% registrovaných", "<b>PI (vedúci laboratória)</b><br>zahraničie: 4 osoby<br>2.1% registrovaných", "<b>postdok, junior researcher</b><br>zahraničie: 19 osôb<br>9.8% registrovaných", "<b>výskum v industry</b><br>zahraničie: 1 osoba<br>0.5% registrovaných", "<b>doktorand </b><br>zahraničie: 21 osôb<br>10.8% registrovaných", "<b>mimo akadémie </b><br>zahraničie: 4 osoby<br>2.1% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 4 osoby<br>2.1% registrovaných", "<b>iné </b><br>zahraničie: 3 osoby<br>1.5% registrovaných", ""]
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
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>neuvedené (krajina): 1 osoba<br>0.5% registrovaných"]
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
	hovertext: ["<b>postdok, junior researcher</b><br>Slovensko: 14 osôb<br>7.2% registrovaných", "<b>doktorand </b><br>Slovensko: 9 osôb<br>4.6% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 26 osôb<br>13.4% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 20 osôb<br>10.3% registrovaných", "<b>iné </b><br>Slovensko: 21 osôb<br>10.8% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 16 osôb<br>8.2% registrovaných", "<b>PI (vedúci laboratória)</b><br>Slovensko: 8 osôb<br>4.1% registrovaných", "<b>profesor, docent </b><br>Slovensko: 1 osoba<br>0.5% registrovaných", "<b>výskum v industry</b><br>Slovensko: 1 osoba<br>0.5% registrovaných", "<b>neuvedené </b><br>Slovensko: 3 osoby<br>1.5% registrovaných"]
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
	hovertext: ["<b>postdok, junior researcher</b><br>SR + zahraničie: 1 osoba<br>0.5% registrovaných", "<b>doktorand </b><br>SR + zahraničie: 3 osoby<br>1.5% registrovaných", "<b>mimo akadémie </b><br>SR + zahraničie: 1 osoba<br>0.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>SR + zahraničie: 3 osoby<br>1.5% registrovaných", "<b>iné </b><br>SR + zahraničie: 1 osoba<br>0.5% registrovaných", "", "", "", "", "<b>neuvedené </b><br>SR + zahraničie: 2 osoby<br>1.0% registrovaných"]
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
	hovertext: ["<b>postdok, junior researcher</b><br>zahraničie: 19 osôb<br>9.8% registrovaných", "<b>doktorand </b><br>zahraničie: 21 osôb<br>10.8% registrovaných", "<b>mimo akadémie </b><br>zahraničie: 4 osoby<br>2.1% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 2 osoby<br>1.0% registrovaných", "<b>iné </b><br>zahraničie: 3 osoby<br>1.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 4 osoby<br>2.1% registrovaných", "<b>PI (vedúci laboratória)</b><br>zahraničie: 4 osoby<br>2.1% registrovaných", "<b>profesor, docent </b><br>zahraničie: 2 osoby<br>1.0% registrovaných", "<b>výskum v industry</b><br>zahraničie: 1 osoba<br>0.5% registrovaných", ""]
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
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>neuvedené (krajina): 1 osoba<br>0.5% registrovaných"]
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
	hovertext: ["<b>profesorka, docentka </b><br>1 žena<br>0.5% registrovaných", "<b>vedecká pracovníčka (senior researcher) </b><br>15 žien<br>7.7% registrovaných", "<b>PI (vedúca laboratória)</b><br>4 ženy<br>2.1% registrovaných", "<b>postdok, junior researcher</b><br>18 žien<br>9.3% registrovaných", "<b>výskum v industry</b><br>1 žena<br>0.5% registrovaných", "<b>doktorandka </b><br>28 žien<br>14.4% registrovaných", "<b>mimo akadémie </b><br>19 žien<br>9.8% registrovaných", "<b>študentka (Bc./Mgr.) </b><br>16 žien<br>8.2% registrovaných", "<b>iné </b><br>19 žien<br>9.8% registrovaných", "<b>neuvedené </b><br>4 ženy<br>2.1% registrovaných"]
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
	hovertext: ["<b>profesor, docent </b><br>2 muži<br>1.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>10 mužov<br>5.2% registrovaných", "<b>PI (vedúci laboratória)</b><br>8 mužov<br>4.1% registrovaných", "<b>postdok, junior researcher</b><br>16 mužov<br>8.2% registrovaných", "<b>výskum v industry</b><br>1 muž<br>0.5% registrovaných", "<b>doktorand </b><br>5 mužov<br>2.6% registrovaných", "<b>mimo akadémie </b><br>12 mužov<br>6.2% registrovaných", "<b>študent (Bc./Mgr.) </b><br>4 muži<br>2.1% registrovaných", "<b>iné </b><br>6 mužov<br>3.1% registrovaných", "<b>neuvedené </b><br>2 muži<br>1.0% registrovaných"]
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
	hovertext: ["<b>postdok, junior researcher</b><br>18 žien<br>9.3% registrovaných", "<b>doktorandka </b><br>28 žien<br>14.4% registrovaných", "<b>mimo akadémie </b><br>19 žien<br>9.8% registrovaných", "<b>vedecká pracovníčka (senior researcher) </b><br>15 žien<br>7.7% registrovaných", "<b>iné </b><br>19 žien<br>9.8% registrovaných", "<b>študentka (Bc./Mgr.) </b><br>16 žien<br>8.2% registrovaných", "<b>PI (vedúca laboratória)</b><br>4 ženy<br>2.1% registrovaných", "<b>profesorka, docentka </b><br>1 žena<br>0.5% registrovaných", "<b>výskum v industry</b><br>1 žena<br>0.5% registrovaných", "<b>neuvedené </b><br>4 ženy<br>2.1% registrovaných"]
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
	hovertext: ["<b>postdok, junior researcher</b><br>16 mužov<br>8.2% registrovaných", "<b>doktorand </b><br>5 mužov<br>2.6% registrovaných", "<b>mimo akadémie </b><br>12 mužov<br>6.2% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>10 mužov<br>5.2% registrovaných", "<b>iné </b><br>6 mužov<br>3.1% registrovaných", "<b>študent (Bc./Mgr.) </b><br>4 muži<br>2.1% registrovaných", "<b>PI (vedúci laboratória)</b><br>8 mužov<br>4.1% registrovaných", "<b>profesor, docent </b><br>2 muži<br>1.0% registrovaných", "<b>výskum v industry</b><br>1 muž<br>0.5% registrovaných", "<b>neuvedené </b><br>2 muži<br>1.0% registrovaných"]
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

var data_registration_timeSeries_2021 = [
	// registration_timeSeries 2021
	{
	x: [1152.70959490741, 1154.14042824074, 1253.16903935185, 1268.0909837963, 1396.64153935185, 1641.84653935185, 1801.34820601852, 1831.05042824074, 1831.95792824074, 1833.47903935185, 1833.58070601852, 1834.90376157407, 1835.04515046296, 1844.72376157407, 1845.00181712963, 1845.92792824074, 1849.97987268519, 1923.87487268519, 1928.51959490741, 1930.75042824074, 1939.15237268519, 1939.64126157407, 1940.95931712963, 1941.87903935185, 1950.38709490741, 1951.00265046296, 1988.95487268519, 1990.17931712963, 2000.49653935185, 2027.23626157407, 2072.03903935185, 2075.01515046296, 2095.22987268518, 2122.73709490741, 2132.07265046296, 2160.48570601852, 2179.94765046296, 2189.94181712963, 2230.70459490741, 2238.12237268518, 2243.31737268518, 2252.84903935185, 2255.15126157407, 2258.63292824074, 2258.87987268518, 2279.47459490741, 2289.13265046296, 2325.41987268518, 2338.35542824074, 2351.33292824074, 2357.11015046296, 2409.47237268518, 2409.78959490741, 2419.65431712963, 2419.68959490741, 2419.81292824074, 2419.92237268518, 2420.16237268518, 2420.29959490741, 2420.6134837963, 2420.75098379629, 2420.76265046296, 2421.46320601852, 2421.74570601852, 2422.50459490741, 2422.96570601852, 2423.62292824074, 2423.88265046296, 2426.10737268518, 2426.21098379629, 2431.7984837963, 2436.38431712963, 2442.57126157407, 2444.39153935185, 2445.07653935185, 2445.60959490741, 2445.82265046296, 2455.85265046296, 2455.9509837963, 2468.11126157407, 2468.85653935185, 2473.71209490741, 2479.11431712963, 2479.83348379629, 2489.92542824074, 2493.44515046296, 2498.08431712963, 2500.99292824074, 2503.38737268518, 2504.49626157407, 2512.87876157407, 2515.43987268518, 2518.02987268518, 2523.02153935185, 2524.86070601852, 2528.07709490741, 2544.82292824074, 2552.50931712963, 2577.3559837963, 2578.05265046296, 2578.09515046296, 2587.21265046296, 2587.66403935185, 2587.99542824074, 2588.12292824074, 2588.64542824074, 2588.78987268518, 2589.40265046296, 2589.64015046296, 2589.67181712963, 2589.78070601852, 2596.84292824074, 2598.47376157407],
	y: ["3", "5", "9", "10", "11", "17", "19", "21", "23", "26", "27", "28", "29", "33", "35", "36", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "52", "53", "54", "55", "56", "57", "58", "59", "60", "62", "65", "66", "70", "71", "74", "76", "77", "79", "80", "82", "84", "87", "89", "90", "91", "92", "93", "94", "95", "97", "99", "102", "103", "104", "105", "106", "108", "110", "112", "114", "115", "116", "120", "122", "125", "127", "128", "129", "130", "131", "132", "134", "135", "136", "137", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151", "153", "154", "155", "158", "160", "162", "163", "164", "165", "166", "167", "168", "169", "170", "171", "172", "173", "174", "176", "177"],
	name: 'Slovensko',
	text: ["21.10.2021 13:13:21", "21.10.2021 14:39:12", "25.10.2021 17:40:55", "26.10.2021 08:36:14", "31.10.2021 17:09:16", "10.11.2021 22:21:34", "17.11.2021 13:51:40", "18.11.2021 19:33:48", "18.11.2021 20:28:15", "18.11.2021 21:59:31", "18.11.2021 22:05:37", "18.11.2021 23:25:00", "18.11.2021 23:33:29", "19.11.2021 09:14:12", "19.11.2021 09:30:53", "19.11.2021 10:26:27", "19.11.2021 14:29:34", "22.11.2021 16:23:16", "22.11.2021 21:01:57", "22.11.2021 23:15:48", "23.11.2021 07:39:55", "23.11.2021 08:09:15", "23.11.2021 09:28:20", "23.11.2021 10:23:31", "23.11.2021 18:54:00", "23.11.2021 19:30:56", "25.11.2021 09:28:04", "25.11.2021 10:41:32", "25.11.2021 21:00:34", "26.11.2021 23:44:57", "28.11.2021 20:33:07", "28.11.2021 23:31:41", "29.11.2021 19:44:34", "30.11.2021 23:15:00", "01.12.2021 08:35:08", "02.12.2021 12:59:55", "03.12.2021 08:27:38", "03.12.2021 18:27:17", "05.12.2021 11:13:03", "05.12.2021 18:38:07", "05.12.2021 23:49:49", "06.12.2021 09:21:43", "06.12.2021 11:39:51", "06.12.2021 15:08:45", "06.12.2021 15:23:34", "07.12.2021 11:59:15", "07.12.2021 21:38:44", "09.12.2021 09:55:58", "09.12.2021 22:52:06", "10.12.2021 11:50:45", "10.12.2021 17:37:23", "12.12.2021 21:59:07", "12.12.2021 22:18:09", "13.12.2021 08:10:02", "13.12.2021 08:12:09", "13.12.2021 08:19:33", "13.12.2021 08:26:07", "13.12.2021 08:40:31", "13.12.2021 08:48:45", "13.12.2021 09:07:35", "13.12.2021 09:15:50", "13.12.2021 09:16:32", "13.12.2021 09:58:34", "13.12.2021 10:15:31", "13.12.2021 11:01:03", "13.12.2021 11:28:43", "13.12.2021 12:08:09", "13.12.2021 12:23:44", "13.12.2021 14:37:13", "13.12.2021 14:43:26", "13.12.2021 20:18:41", "14.12.2021 00:53:50", "14.12.2021 07:05:03", "14.12.2021 08:54:16", "14.12.2021 09:35:22", "14.12.2021 10:07:21", "14.12.2021 10:20:08", "14.12.2021 20:21:56", "14.12.2021 20:27:50", "15.12.2021 08:37:27", "15.12.2021 09:22:10", "15.12.2021 14:13:30", "15.12.2021 19:37:38", "15.12.2021 20:20:47", "16.12.2021 06:26:18", "16.12.2021 09:57:29", "16.12.2021 14:35:50", "16.12.2021 17:30:21", "16.12.2021 19:54:01", "16.12.2021 21:00:33", "17.12.2021 05:23:30", "17.12.2021 07:57:10", "17.12.2021 10:32:34", "17.12.2021 15:32:04", "17.12.2021 17:22:25", "17.12.2021 20:35:24", "18.12.2021 13:20:09", "18.12.2021 21:01:20", "19.12.2021 21:52:08", "19.12.2021 22:33:56", "19.12.2021 22:36:29", "20.12.2021 07:43:32", "20.12.2021 08:10:37", "20.12.2021 08:30:30", "20.12.2021 08:38:09", "20.12.2021 09:09:30", "20.12.2021 09:18:10", "20.12.2021 09:54:56", "20.12.2021 10:09:11", "20.12.2021 10:11:05", "20.12.2021 10:17:37", "20.12.2021 17:21:21", "20.12.2021 18:59:12"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>21.10.2021 13:13:21</b><br>3 osoby<br>2.0% online registrácií", "<b>21.10.2021 14:39:12</b><br>5 osôb<br>3.0% online registrácií", "<b>25.10.2021 17:40:55</b><br>9 osôb<br>5.0% online registrácií", "<b>26.10.2021 08:36:14</b><br>10 osôb<br>6.0% online registrácií", "<b>31.10.2021 17:09:16</b><br>11 osôb<br>6.0% online registrácií", "<b>10.11.2021 22:21:34</b><br>17 osôb<br>9.0% online registrácií", "<b>17.11.2021 13:51:40</b><br>19 osôb<br>11.0% online registrácií", "<b>18.11.2021 19:33:48</b><br>21 osôb<br>12.0% online registrácií", "<b>18.11.2021 20:28:15</b><br>23 osôb<br>13.0% online registrácií", "<b>18.11.2021 21:59:31</b><br>26 osôb<br>15.0% online registrácií", "<b>18.11.2021 22:05:37</b><br>27 osôb<br>15.0% online registrácií", "<b>18.11.2021 23:25:00</b><br>28 osôb<br>16.0% online registrácií", "<b>18.11.2021 23:33:29</b><br>29 osôb<br>16.0% online registrácií", "<b>19.11.2021 09:14:12</b><br>33 osôb<br>18.0% online registrácií", "<b>19.11.2021 09:30:53</b><br>35 osôb<br>20.0% online registrácií", "<b>19.11.2021 10:26:27</b><br>36 osôb<br>20.0% online registrácií", "<b>19.11.2021 14:29:34</b><br>39 osôb<br>22.0% online registrácií", "<b>22.11.2021 16:23:16</b><br>40 osôb<br>22.0% online registrácií", "<b>22.11.2021 21:01:57</b><br>41 osôb<br>23.0% online registrácií", "<b>22.11.2021 23:15:48</b><br>42 osôb<br>23.0% online registrácií", "<b>23.11.2021 07:39:55</b><br>43 osôb<br>24.0% online registrácií", "<b>23.11.2021 08:09:15</b><br>44 osôb<br>25.0% online registrácií", "<b>23.11.2021 09:28:20</b><br>45 osôb<br>25.0% online registrácií", "<b>23.11.2021 10:23:31</b><br>46 osôb<br>26.0% online registrácií", "<b>23.11.2021 18:54:00</b><br>47 osôb<br>26.0% online registrácií", "<b>23.11.2021 19:30:56</b><br>48 osôb<br>27.0% online registrácií", "<b>25.11.2021 09:28:04</b><br>52 osôb<br>29.0% online registrácií", "<b>25.11.2021 10:41:32</b><br>53 osôb<br>30.0% online registrácií", "<b>25.11.2021 21:00:34</b><br>54 osôb<br>30.0% online registrácií", "<b>26.11.2021 23:44:57</b><br>55 osôb<br>31.0% online registrácií", "<b>28.11.2021 20:33:07</b><br>56 osôb<br>31.0% online registrácií", "<b>28.11.2021 23:31:41</b><br>57 osôb<br>32.0% online registrácií", "<b>29.11.2021 19:44:34</b><br>58 osôb<br>32.0% online registrácií", "<b>30.11.2021 23:15:00</b><br>59 osôb<br>33.0% online registrácií", "<b>01.12.2021 08:35:08</b><br>60 osôb<br>34.0% online registrácií", "<b>02.12.2021 12:59:55</b><br>62 osôb<br>35.0% online registrácií", "<b>03.12.2021 08:27:38</b><br>65 osôb<br>36.0% online registrácií", "<b>03.12.2021 18:27:17</b><br>66 osôb<br>37.0% online registrácií", "<b>05.12.2021 11:13:03</b><br>70 osôb<br>39.0% online registrácií", "<b>05.12.2021 18:38:07</b><br>71 osôb<br>40.0% online registrácií", "<b>05.12.2021 23:49:49</b><br>74 osôb<br>41.0% online registrácií", "<b>06.12.2021 09:21:43</b><br>76 osôb<br>42.0% online registrácií", "<b>06.12.2021 11:39:51</b><br>77 osôb<br>43.0% online registrácií", "<b>06.12.2021 15:08:45</b><br>79 osôb<br>44.0% online registrácií", "<b>06.12.2021 15:23:34</b><br>80 osôb<br>45.0% online registrácií", "<b>07.12.2021 11:59:15</b><br>82 osôb<br>46.0% online registrácií", "<b>07.12.2021 21:38:44</b><br>84 osôb<br>47.0% online registrácií", "<b>09.12.2021 09:55:58</b><br>87 osôb<br>49.0% online registrácií", "<b>09.12.2021 22:52:06</b><br>89 osôb<br>50.0% online registrácií", "<b>10.12.2021 11:50:45</b><br>90 osôb<br>50.0% online registrácií", "<b>10.12.2021 17:37:23</b><br>91 osôb<br>51.0% online registrácií", "<b>12.12.2021 21:59:07</b><br>92 osôb<br>51.0% online registrácií", "<b>12.12.2021 22:18:09</b><br>93 osôb<br>52.0% online registrácií", "<b>13.12.2021 08:10:02</b><br>94 osôb<br>53.0% online registrácií", "<b>13.12.2021 08:12:09</b><br>95 osôb<br>53.0% online registrácií", "<b>13.12.2021 08:19:33</b><br>97 osôb<br>54.0% online registrácií", "<b>13.12.2021 08:26:07</b><br>99 osôb<br>55.0% online registrácií", "<b>13.12.2021 08:40:31</b><br>102 osôb<br>57.0% online registrácií", "<b>13.12.2021 08:48:45</b><br>103 osôb<br>58.0% online registrácií", "<b>13.12.2021 09:07:35</b><br>104 osôb<br>58.0% online registrácií", "<b>13.12.2021 09:15:50</b><br>105 osôb<br>59.0% online registrácií", "<b>13.12.2021 09:16:32</b><br>106 osôb<br>59.0% online registrácií", "<b>13.12.2021 09:58:34</b><br>108 osôb<br>60.0% online registrácií", "<b>13.12.2021 10:15:31</b><br>110 osôb<br>61.0% online registrácií", "<b>13.12.2021 11:01:03</b><br>112 osôb<br>63.0% online registrácií", "<b>13.12.2021 11:28:43</b><br>114 osôb<br>64.0% online registrácií", "<b>13.12.2021 12:08:09</b><br>115 osôb<br>64.0% online registrácií", "<b>13.12.2021 12:23:44</b><br>116 osôb<br>65.0% online registrácií", "<b>13.12.2021 14:37:13</b><br>120 osôb<br>67.0% online registrácií", "<b>13.12.2021 14:43:26</b><br>122 osôb<br>68.0% online registrácií", "<b>13.12.2021 20:18:41</b><br>125 osôb<br>70.0% online registrácií", "<b>14.12.2021 00:53:50</b><br>127 osôb<br>71.0% online registrácií", "<b>14.12.2021 07:05:03</b><br>128 osôb<br>72.0% online registrácií", "<b>14.12.2021 08:54:16</b><br>129 osôb<br>72.0% online registrácií", "<b>14.12.2021 09:35:22</b><br>130 osôb<br>73.0% online registrácií", "<b>14.12.2021 10:07:21</b><br>131 osôb<br>73.0% online registrácií", "<b>14.12.2021 10:20:08</b><br>132 osôb<br>74.0% online registrácií", "<b>14.12.2021 20:21:56</b><br>134 osôb<br>75.0% online registrácií", "<b>14.12.2021 20:27:50</b><br>135 osôb<br>75.0% online registrácií", "<b>15.12.2021 08:37:27</b><br>136 osôb<br>76.0% online registrácií", "<b>15.12.2021 09:22:10</b><br>137 osôb<br>77.0% online registrácií", "<b>15.12.2021 14:13:30</b><br>140 osôb<br>78.0% online registrácií", "<b>15.12.2021 19:37:38</b><br>141 osôb<br>79.0% online registrácií", "<b>15.12.2021 20:20:47</b><br>142 osôb<br>79.0% online registrácií", "<b>16.12.2021 06:26:18</b><br>143 osôb<br>80.0% online registrácií", "<b>16.12.2021 09:57:29</b><br>144 osôb<br>80.0% online registrácií", "<b>16.12.2021 14:35:50</b><br>145 osôb<br>81.0% online registrácií", "<b>16.12.2021 17:30:21</b><br>146 osôb<br>82.0% online registrácií", "<b>16.12.2021 19:54:01</b><br>147 osôb<br>82.0% online registrácií", "<b>16.12.2021 21:00:33</b><br>148 osôb<br>83.0% online registrácií", "<b>17.12.2021 05:23:30</b><br>149 osôb<br>83.0% online registrácií", "<b>17.12.2021 07:57:10</b><br>150 osôb<br>84.0% online registrácií", "<b>17.12.2021 10:32:34</b><br>151 osôb<br>84.0% online registrácií", "<b>17.12.2021 15:32:04</b><br>153 osôb<br>85.0% online registrácií", "<b>17.12.2021 17:22:25</b><br>154 osôb<br>86.0% online registrácií", "<b>17.12.2021 20:35:24</b><br>155 osôb<br>87.0% online registrácií", "<b>18.12.2021 13:20:09</b><br>158 osôb<br>88.0% online registrácií", "<b>18.12.2021 21:01:20</b><br>160 osôb<br>89.0% online registrácií", "<b>19.12.2021 21:52:08</b><br>162 osôb<br>91.0% online registrácií", "<b>19.12.2021 22:33:56</b><br>163 osôb<br>91.0% online registrácií", "<b>19.12.2021 22:36:29</b><br>164 osôb<br>92.0% online registrácií", "<b>20.12.2021 07:43:32</b><br>165 osôb<br>92.0% online registrácií", "<b>20.12.2021 08:10:37</b><br>166 osôb<br>93.0% online registrácií", "<b>20.12.2021 08:30:30</b><br>167 osôb<br>93.0% online registrácií", "<b>20.12.2021 08:38:09</b><br>168 osôb<br>94.0% online registrácií", "<b>20.12.2021 09:09:30</b><br>169 osôb<br>94.0% online registrácií", "<b>20.12.2021 09:18:10</b><br>170 osôb<br>95.0% online registrácií", "<b>20.12.2021 09:54:56</b><br>171 osôb<br>96.0% online registrácií", "<b>20.12.2021 10:09:11</b><br>172 osôb<br>96.0% online registrácií", "<b>20.12.2021 10:11:05</b><br>173 osôb<br>97.0% online registrácií", "<b>20.12.2021 10:17:37</b><br>174 osôb<br>97.0% online registrácií", "<b>20.12.2021 17:21:21</b><br>176 osôb<br>98.0% online registrácií", "<b>20.12.2021 18:59:12</b><br>177 osôb<br>99.0% online registrácií"]
	},
	{
	x: [1517.81709490741, 2331.47403935185, 2420.94431712963, 2425.7284837963, 2428.84903935185, 2473.47515046296, 2590.62209490741],
	y: ["14", "88", "107", "119", "124", "139", "175"],
	name: 'SR + zahraničie',
	text: ["05.11.2021 18:19:48", "09.12.2021 15:59:13", "13.12.2021 09:27:26", "13.12.2021 14:14:29", "13.12.2021 17:21:43", "15.12.2021 13:59:17", "20.12.2021 11:08:06"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>05.11.2021 18:19:48</b><br>14 osôb<br>8.0% online registrácií", "<b>09.12.2021 15:59:13</b><br>88 osôb<br>49.0% online registrácií", "<b>13.12.2021 09:27:26</b><br>107 osôb<br>60.0% online registrácií", "<b>13.12.2021 14:14:29</b><br>119 osôb<br>66.0% online registrácií", "<b>13.12.2021 17:21:43</b><br>124 osôb<br>69.0% online registrácií", "<b>15.12.2021 13:59:17</b><br>139 osôb<br>78.0% online registrácií", "<b>20.12.2021 11:08:06</b><br>175 osôb<br>98.0% online registrácií"]
	},
	{
	x: [1152.54403935185, 1152.63653935185, 1152.85653935185, 1156.97126157407, 1160.8684837963, 1252.32320601852, 1421.25987268519, 1423.49209490741, 1639.06876157407, 1641.46681712963, 1761.50181712963, 1809.72376157407, 1831.30265046296, 1832.54820601852, 1832.78987268519, 1836.62709490741, 1838.30459490741, 1844.38792824074, 1844.73070601852, 1846.40181712963, 1847.27015046296, 1968.03431712963, 1968.72709490741, 1971.73931712963, 2143.83709490741, 2167.77820601852, 2169.46431712963, 2214.46959490741, 2216.30626157407, 2218.20709490741, 2238.54876157407, 2239.25792824074, 2250.2984837963, 2255.98820601852, 2264.91820601852, 2287.55737268518, 2304.67876157407, 2305.34653935185, 2419.7684837963, 2419.85320601852, 2420.05487268518, 2420.12070601852, 2421.51237268518, 2421.80792824074, 2422.84376157407, 2424.80987268518, 2425.13765046296, 2426.17709490741, 2428.62431712963, 2434.36376157407, 2452.39848379629, 2468.94403935185, 2521.47015046296, 2537.41959490741, 2541.93570601852, 2549.17820601852, 2575.39876157407],
	y: ["1", "2", "4", "6", "7", "8", "12", "13", "15", "16", "18", "20", "22", "24", "25", "30", "31", "32", "34", "37", "38", "49", "50", "51", "61", "63", "64", "67", "68", "69", "72", "73", "75", "78", "81", "83", "85", "86", "96", "98", "100", "101", "109", "111", "113", "117", "118", "121", "123", "126", "133", "138", "152", "156", "157", "159", "161"],
	name: 'zahraničie',
	text: ["21.10.2021 13:03:25", "21.10.2021 13:08:58", "21.10.2021 13:22:10", "21.10.2021 17:29:03", "21.10.2021 21:22:53", "25.10.2021 16:50:10", "01.11.2021 17:46:22", "01.11.2021 20:00:18", "10.11.2021 19:34:54", "10.11.2021 21:58:47", "15.11.2021 22:00:53", "17.11.2021 22:14:12", "18.11.2021 19:48:56", "18.11.2021 21:03:40", "18.11.2021 21:18:10", "19.11.2021 01:08:24", "19.11.2021 02:49:03", "19.11.2021 08:54:03", "19.11.2021 09:14:37", "19.11.2021 10:54:53", "19.11.2021 11:46:59", "24.11.2021 12:32:50", "24.11.2021 13:14:24", "24.11.2021 16:15:08", "01.12.2021 20:21:00", "02.12.2021 20:17:28", "02.12.2021 21:58:38", "04.12.2021 18:58:57", "04.12.2021 20:49:09", "04.12.2021 22:43:12", "05.12.2021 19:03:42", "05.12.2021 19:46:15", "06.12.2021 06:48:41", "06.12.2021 12:30:04", "06.12.2021 21:25:52", "07.12.2021 20:04:13", "08.12.2021 13:11:30", "08.12.2021 13:51:34", "13.12.2021 08:16:53", "13.12.2021 08:21:58", "13.12.2021 08:34:04", "13.12.2021 08:38:01", "13.12.2021 10:01:31", "13.12.2021 10:19:15", "13.12.2021 11:21:24", "13.12.2021 13:19:22", "13.12.2021 13:39:02", "13.12.2021 14:41:24", "13.12.2021 17:08:14", "13.12.2021 22:52:36", "14.12.2021 16:54:41", "15.12.2021 09:27:25", "17.12.2021 13:58:59", "18.12.2021 05:55:57", "18.12.2021 10:26:55", "18.12.2021 17:41:28", "19.12.2021 19:54:42"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>21.10.2021 13:03:25</b><br>1 osoba<br>1.0% online registrácií", "<b>21.10.2021 13:08:58</b><br>2 osoby<br>1.0% online registrácií", "<b>21.10.2021 13:22:10</b><br>4 osoby<br>2.0% online registrácií", "<b>21.10.2021 17:29:03</b><br>6 osôb<br>3.0% online registrácií", "<b>21.10.2021 21:22:53</b><br>7 osôb<br>4.0% online registrácií", "<b>25.10.2021 16:50:10</b><br>8 osôb<br>4.0% online registrácií", "<b>01.11.2021 17:46:22</b><br>12 osôb<br>7.0% online registrácií", "<b>01.11.2021 20:00:18</b><br>13 osôb<br>7.0% online registrácií", "<b>10.11.2021 19:34:54</b><br>15 osôb<br>8.0% online registrácií", "<b>10.11.2021 21:58:47</b><br>16 osôb<br>9.0% online registrácií", "<b>15.11.2021 22:00:53</b><br>18 osôb<br>10.0% online registrácií", "<b>17.11.2021 22:14:12</b><br>20 osôb<br>11.0% online registrácií", "<b>18.11.2021 19:48:56</b><br>22 osôb<br>12.0% online registrácií", "<b>18.11.2021 21:03:40</b><br>24 osôb<br>13.0% online registrácií", "<b>18.11.2021 21:18:10</b><br>25 osôb<br>14.0% online registrácií", "<b>19.11.2021 01:08:24</b><br>30 osôb<br>17.0% online registrácií", "<b>19.11.2021 02:49:03</b><br>31 osôb<br>17.0% online registrácií", "<b>19.11.2021 08:54:03</b><br>32 osôb<br>18.0% online registrácií", "<b>19.11.2021 09:14:37</b><br>34 osôb<br>19.0% online registrácií", "<b>19.11.2021 10:54:53</b><br>37 osôb<br>21.0% online registrácií", "<b>19.11.2021 11:46:59</b><br>38 osôb<br>21.0% online registrácií", "<b>24.11.2021 12:32:50</b><br>49 osôb<br>27.0% online registrácií", "<b>24.11.2021 13:14:24</b><br>50 osôb<br>28.0% online registrácií", "<b>24.11.2021 16:15:08</b><br>51 osôb<br>28.0% online registrácií", "<b>01.12.2021 20:21:00</b><br>61 osôb<br>34.0% online registrácií", "<b>02.12.2021 20:17:28</b><br>63 osôb<br>35.0% online registrácií", "<b>02.12.2021 21:58:38</b><br>64 osôb<br>36.0% online registrácií", "<b>04.12.2021 18:58:57</b><br>67 osôb<br>37.0% online registrácií", "<b>04.12.2021 20:49:09</b><br>68 osôb<br>38.0% online registrácií", "<b>04.12.2021 22:43:12</b><br>69 osôb<br>39.0% online registrácií", "<b>05.12.2021 19:03:42</b><br>72 osôb<br>40.0% online registrácií", "<b>05.12.2021 19:46:15</b><br>73 osôb<br>41.0% online registrácií", "<b>06.12.2021 06:48:41</b><br>75 osôb<br>42.0% online registrácií", "<b>06.12.2021 12:30:04</b><br>78 osôb<br>44.0% online registrácií", "<b>06.12.2021 21:25:52</b><br>81 osôb<br>45.0% online registrácií", "<b>07.12.2021 20:04:13</b><br>83 osôb<br>46.0% online registrácií", "<b>08.12.2021 13:11:30</b><br>85 osôb<br>47.0% online registrácií", "<b>08.12.2021 13:51:34</b><br>86 osôb<br>48.0% online registrácií", "<b>13.12.2021 08:16:53</b><br>96 osôb<br>54.0% online registrácií", "<b>13.12.2021 08:21:58</b><br>98 osôb<br>55.0% online registrácií", "<b>13.12.2021 08:34:04</b><br>100 osôb<br>56.0% online registrácií", "<b>13.12.2021 08:38:01</b><br>101 osôb<br>56.0% online registrácií", "<b>13.12.2021 10:01:31</b><br>109 osôb<br>61.0% online registrácií", "<b>13.12.2021 10:19:15</b><br>111 osôb<br>62.0% online registrácií", "<b>13.12.2021 11:21:24</b><br>113 osôb<br>63.0% online registrácií", "<b>13.12.2021 13:19:22</b><br>117 osôb<br>65.0% online registrácií", "<b>13.12.2021 13:39:02</b><br>118 osôb<br>66.0% online registrácií", "<b>13.12.2021 14:41:24</b><br>121 osôb<br>68.0% online registrácií", "<b>13.12.2021 17:08:14</b><br>123 osôb<br>69.0% online registrácií", "<b>13.12.2021 22:52:36</b><br>126 osôb<br>70.0% online registrácií", "<b>14.12.2021 16:54:41</b><br>133 osôb<br>74.0% online registrácií", "<b>15.12.2021 09:27:25</b><br>138 osôb<br>77.0% online registrácií", "<b>17.12.2021 13:58:59</b><br>152 osôb<br>85.0% online registrácií", "<b>18.12.2021 05:55:57</b><br>156 osôb<br>87.0% online registrácií", "<b>18.12.2021 10:26:55</b><br>157 osôb<br>88.0% online registrácií", "<b>18.12.2021 17:41:28</b><br>159 osôb<br>89.0% online registrácií", "<b>19.12.2021 19:54:42</b><br>161 osôb<br>90.0% online registrácií"]
	},

	{
		x: [0, 1152.54403935185, 1152.63653935185, 1152.70959490741, 1152.85653935185, 1154.14042824074, 1156.97126157407, 1160.8684837963, 1252.32320601852, 1253.16903935185, 1268.0909837963, 1396.64153935185, 1421.25987268519, 1423.49209490741, 1517.81709490741, 1639.06876157407, 1641.46681712963, 1641.84653935185, 1761.50181712963, 1801.34820601852, 1809.72376157407, 1831.05042824074, 1831.30265046296, 1831.95792824074, 1832.54820601852, 1832.78987268519, 1833.47903935185, 1833.58070601852, 1834.90376157407, 1835.04515046296, 1836.62709490741, 1838.30459490741, 1844.38792824074, 1844.72376157407, 1844.73070601852, 1845.00181712963, 1845.92792824074, 1846.40181712963, 1847.27015046296, 1849.97987268519, 1923.87487268519, 1928.51959490741, 1930.75042824074, 1939.15237268519, 1939.64126157407, 1940.95931712963, 1941.87903935185, 1950.38709490741, 1951.00265046296, 1968.03431712963, 1968.72709490741, 1971.73931712963, 1988.95487268519, 1990.17931712963, 2000.49653935185, 2027.23626157407, 2072.03903935185, 2075.01515046296, 2095.22987268518, 2122.73709490741, 2132.07265046296, 2143.83709490741, 2160.48570601852, 2167.77820601852, 2169.46431712963, 2179.94765046296, 2189.94181712963, 2214.46959490741, 2216.30626157407, 2218.20709490741, 2230.70459490741, 2238.12237268518, 2238.54876157407, 2239.25792824074, 2243.31737268518, 2250.2984837963, 2252.84903935185, 2255.15126157407, 2255.98820601852, 2258.63292824074, 2258.87987268518, 2264.91820601852, 2279.47459490741, 2287.55737268518, 2289.13265046296, 2304.67876157407, 2305.34653935185, 2325.41987268518, 2331.47403935185, 2338.35542824074, 2351.33292824074, 2357.11015046296, 2409.47237268518, 2409.78959490741, 2419.65431712963, 2419.68959490741, 2419.7684837963, 2419.81292824074, 2419.85320601852, 2419.92237268518, 2420.05487268518, 2420.12070601852, 2420.16237268518, 2420.29959490741, 2420.6134837963, 2420.75098379629, 2420.76265046296, 2420.94431712963, 2421.46320601852, 2421.51237268518, 2421.74570601852, 2421.80792824074, 2422.50459490741, 2422.84376157407, 2422.96570601852, 2423.62292824074, 2423.88265046296, 2424.80987268518, 2425.13765046296, 2425.7284837963, 2426.10737268518, 2426.17709490741, 2426.21098379629, 2428.62431712963, 2428.84903935185, 2431.7984837963, 2434.36376157407, 2436.38431712963, 2442.57126157407, 2444.39153935185, 2445.07653935185, 2445.60959490741, 2445.82265046296, 2452.39848379629, 2455.85265046296, 2455.9509837963, 2468.11126157407, 2468.85653935185, 2468.94403935185, 2473.47515046296, 2473.71209490741, 2479.11431712963, 2479.83348379629, 2489.92542824074, 2493.44515046296, 2498.08431712963, 2500.99292824074, 2503.38737268518, 2504.49626157407, 2512.87876157407, 2515.43987268518, 2518.02987268518, 2521.47015046296, 2523.02153935185, 2524.86070601852, 2528.07709490741, 2537.41959490741, 2541.93570601852, 2544.82292824074, 2549.17820601852, 2552.50931712963, 2575.39876157407, 2577.3559837963, 2578.05265046296, 2578.09515046296, 2587.21265046296, 2587.66403935185, 2587.99542824074, 2588.12292824074, 2588.64542824074, 2588.78987268518, 2589.40265046296, 2589.64015046296, 2589.67181712963, 2589.78070601852, 2590.62209490741, 2596.84292824074, 2598.47376157407],
		y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177],
		name: "",
		type: 'bar',
		marker: {
			color: ['rgb(255, 255, 255)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)']
		},
		showlegend: false,
		visible: true,
		hoverinfo: 'skip',
		hovermode: "none"
	},
];

var data_registration_timeLabels_2021 = ["", "21.10.", "", "", "", "", "", "", "", "", "", "", "1.11.", "", "", "", "", "", "", "", "", "18.11.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "13.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "19.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

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

var data_participation_2022 = [
// participation 2022
{
	type: "sunburst",
	ids: ["všetci_po2020", "preferujú online", "preferujú prezenčne", "online/prezenčne: neuvedené", "muži online", "ženy online", "muži prezenčne", "ženy prezenčne"],
	labels: ["dáta z prihlasovania", "preferujú online", "preferujú prezenčne", "neuvedené", "muži", "ženy", "muži", "ženy"],
	values: [156, 40, 95, 21, 13, 27, 46, 49],
	parents: ["", "všetci_po2020", "všetci_po2020", "všetci_po2020", "preferujú online", "preferujú online", "preferujú prezenčne", "preferujú prezenčne"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 255, 98)', 'rgb(0, 230, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(204, 221, 255)', 'rgb(255, 204, 204)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania</b><br>156 osôb<br>", "<b>preferujú online</b><br>40 osôb<br>25.6% registrovaných", "<b>preferujú prezenčne</b><br>95 osôb<br>60.9% registrovaných", "<b>neuvedené</b><br>21 osôb<br>13.5% registrovaných", "<b>preferujú online</b><br>13 mužov<br>8.3% registrovaných", "<b>preferujú online</b><br>27 žien<br>17.3% registrovaných", "<b>preferujú prezenčne</b><br>46 mužov<br>29.5% registrovaných", "<b>preferujú prezenčne</b><br>49 žien<br>31.4% registrovaných"]
}];

var data_participation_detail_2022 = [
// participation_detail 2022
{
	type: "sunburst",
	ids: ["všetci", "účasť", "pozvané príspevky", "prednášky", "organizácia", "účastníčky", "účastníci", "pozvané príspevky: ženy", "pozvané príspevky: muži", "aktívne účastníčky", "aktívni účastníci", "organizátorky"],
	labels: ["iba prítomní", "účasť", "pozvané príspevky", "prednášky", "organizácia", "ženy", "muži", "ženy", "muži", "ženy", "muži", "ženy"],
	values: [156, 132, 7, 9, 8, 74, 58, 3, 4, 4, 5, 8],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "účasť", "účasť", "pozvané príspevky", "pozvané príspevky", "prednášky", "prednášky", "organizácia"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 214, 16)', 'rgb(255, 174, 16)', 'rgb(255, 134, 16', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania</b><br>156 osôb<br>", "<b>účasť</b><br>132 osôb<br>84.6% registrovaných", "<b>pozvané príspevky</b><br>7 osôb<br>4.5% registrovaných", "<b>prednášky</b><br>9 osôb<br>5.8% registrovaných", "<b>organizácia</b><br>8 osôb<br>5.1% registrovaných", "<b>účasť</b><br>74 žien<br>47.4% registrovaných", "<b>účasť</b><br>58 mužov<br>37.2% registrovaných", "<b>pozvané príspevky</b><br>3 ženy<br>1.9% registrovaných", "<b>pozvané príspevky</b><br>4 muži<br>2.6% registrovaných", "<b>prednášky</b><br>4 ženy<br>2.6% registrovaných", "<b>prednášky</b><br>5 mužov<br>3.2% registrovaných", "<b>organizácia</b><br>8 žien<br>5.1% registrovaných"]
}];

var data_abroad_2022 = [
// abroad 2022
{
	type: "sunburst",
	ids: ["všetci", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "muži (SR)", "ženy (SR)", "muži (NA)", "ženy (NA)", "muži (oboje)", "ženy (oboje", "muži (zahr.)", "ženy (zahr.)"],
	labels: ["iba prítomní", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "muži", "ženy", "muži", "ženy", "muži", "ženy", "muži", "ženy"],
	values: [156, 82, 3, 49, 22, 40, 42, 8, 14, 2, 1, 16, 33],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "Slovensko", "Slovensko", "neuvedené", "neuvedené", "SR a zahraničie", "SR a zahraničie", "zahraničie", "zahraničie"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania</b><br>156 osôb<br>", "<b>Slovensko</b><br>82 osôb<br>52.6% registrovaných", "<b>SR a zahraničie</b><br>3 osoby<br>1.9% registrovaných", "<b>zahraničie</b><br>49 osôb<br>31.4% registrovaných", "<b>neuvedené</b><br>22 osôb<br>14.1% registrovaných", "<b>Slovensko</b><br>40 mužov<br>25.6% registrovaných", "<b>Slovensko</b><br>42 žien<br>26.9% registrovaných", "<b>neuvedené</b><br>8 mužov<br>5.1% registrovaných", "<b>neuvedené</b><br>14 žien<br>9.0% registrovaných", "<b>SR a zahraničie</b><br>2 muži<br>1.3% registrovaných", "<b>SR a zahraničie</b><br>1 žena<br>0.6% registrovaných", "<b>zahraničie</b><br>16 mužov<br>10.3% registrovaných", "<b>zahraničie</b><br>33 žien<br>21.2% registrovaných"]
}];

var data_subject_2022 = [
// subject 2022
{
	type: "sunburst",
	ids: ["všetci", "STEM", "SSH", "iné", "neuvedené", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra, urbanizmus", "vedy o Zemi", "ekologické a environmentálne vedy", "STEM nezaradené", "filológia", "psychológia", "sociológia", "politické vedy", "ekonómia a manažment", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "projektový manažment", "popularizácia", "štátna správa", "nezaradené", "iné neuvedené", "neuvedené (neuvedené)"],
	labels: ["iba dáta z registrácie", "STEM", "SSH", "iné", "neuvedené", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra, urbanizmus", "vedy o Zemi", "ekologické a environmentálne vedy", "nezaradené", "filológia", "psychológia", "sociológia", "politické vedy", "ekonómia a manažment", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "projektový manažment", "popularizácia", "štátna správa", "nezaradené", "neuvedené", "neuvedené"],
	values: [156, 102, 15, 18, 21, 3, 5, 13, 5, 2, 3, 2, 3, 3, 15, 1, 6, 7, 2, 12, 6, 5, 2, 4, 3, 3, 8, 2, 1, 1, 8, 3, 1, 2, 1, 1, 1, 1, 21],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "SSH", "SSH", "SSH", "SSH", "SSH", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "neuvedené"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(0, 102, 102)', 'rgb(204, 0, 0)', 'rgb(62, 0, 62)', 'rgb(124, 124, 124)', 'rgb(53, 104, 0)', 'rgb(82, 163, 0)', 'rgb(102, 204, 0)', 'rgb(222, 222, 92)', 'rgb(255, 238, 153)', 'rgb(255,247,126)', 'rgb(255, 255, 98)', 'rgb(255, 255, 0)', 'rgb(255, 204, 0)', 'rgb(255, 128, 0)', 'rgb(204, 101, 0)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(0, 0, 255)', 'rgb(0, 128, 255)', 'rgb(136, 136, 136)', 'rgb(175, 175, 175)', 'rgb(75, 37, 0)', 'rgb(89, 121, 0)', 'rgb(0, 102, 102)', 'rgb(153, 0, 76)', 'rgb(214, 48, 90)', 'rgb(214, 48, 48)', 'rgb(218, 94, 69)', 'rgb(218, 106, 69)', 'rgb(82, 0, 82)', 'rgb(107, 0, 107)', 'rgb(132, 0, 132)', 'rgb(152, 0, 152)', 'rgb(162, 0, 162)', 'rgb(172, 0, 172)', 'rgb(62, 0, 62)', 'rgb(62, 0, 62)', 'rgb(124, 124, 124)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba dáta z registrácie</b><br>156 osôb<br>", "<b>STEM</b><br>102 osôb<br>65.4% registrovaných", "<b>SSH</b><br>15 osôb<br>9.6% registrovaných", "<b>iné</b><br>18 osôb<br>11.5% registrovaných", "<b>neuvedené</b><br>21 osôb<br>13.5% registrovaných", "<b>genetika</b><br>3 osoby<br>1.9% registrovaných", "<b>molekulárna biológia</b><br>5 osôb<br>3.2% registrovaných", "<b>biológia</b><br>13 osôb<br>8.3% registrovaných", "<b>biochémia</b><br>5 osôb<br>3.2% registrovaných", "<b>biofyzika</b><br>2 osoby<br>1.3% registrovaných", "<b>bioinformatika</b><br>3 osoby<br>1.9% registrovaných", "<b>biomedicína</b><br>2 osoby<br>1.3% registrovaných", "<b>biotechnológie, biomateriály</b><br>3 osoby<br>1.9% registrovaných", "<b>neurovedy</b><br>3 osoby<br>1.9% registrovaných", "<b>medicína, lekárske vedy</b><br>15 osôb<br>9.6% registrovaných", "<b>farmácia</b><br>1 osoba<br>0.6% registrovaných", "<b>chémia</b><br>6 osôb<br>3.8% registrovaných", "<b>fyzika</b><br>7 osôb<br>4.5% registrovaných", "<b>matematika</b><br>2 osoby<br>1.3% registrovaných", "<b>IT</b><br>12 osôb<br>7.7% registrovaných", "<b>technológie</b><br>6 osôb<br>3.8% registrovaných", "<b>stavebné inžinierstvo, architektúra, urbanizmus</b><br>5 osôb<br>3.2% registrovaných", "<b>vedy o Zemi</b><br>2 osoby<br>1.3% registrovaných", "<b>ekologické a environmentálne vedy</b><br>4 osoby<br>2.6% registrovaných", "<b>nezaradené</b><br>3 osoby<br>1.9% registrovaných", "<b>filológia</b><br>3 osoby<br>1.9% registrovaných", "<b>psychológia</b><br>8 osôb<br>5.1% registrovaných", "<b>sociológia</b><br>2 osoby<br>1.3% registrovaných", "<b>politické vedy</b><br>1 osoba<br>0.6% registrovaných", "<b>ekonómia a manažment</b><br>1 osoba<br>0.6% registrovaných", "<b>podpora výskumu</b><br>8 osôb<br>5.1% registrovaných", "<b>otvorená veda</b><br>3 osoby<br>1.9% registrovaných", "<b>vzdelávanie, poradenstvo</b><br>1 osoba<br>0.6% registrovaných", "<b>projektový manažment</b><br>2 osoby<br>1.3% registrovaných", "<b>popularizácia</b><br>1 osoba<br>0.6% registrovaných", "<b>štátna správa</b><br>1 osoba<br>0.6% registrovaných", "<b>nezaradené</b><br>1 osoba<br>0.6% registrovaných", "<b>neuvedené</b><br>1 osoba<br>0.6% registrovaných", "<b>neuvedené</b><br>21 osôb<br>13.5% registrovaných"]
}];

var data_institution_country_2022 = [
	// institution_country 2022
	{
	x: [30, 7, 12, 0, 7, 8, 0, 11, 2, 4, 1],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 30 osôb<br>19.2% registrovaných", "<b>výskum + univerzita</b><br>Slovensko: 7 osôb<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 12 osôb<br>7.7% registrovaných", "", "<b>komerčná spoločnosť</b><br>Slovensko: 7 osôb<br>4.5% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 8 osôb<br>5.1% registrovaných", "", "<b>štátna správa</b><br>Slovensko: 11 osôb<br>7.1% registrovaných", "<b>mimovládna organizácia</b><br>Slovensko: 2 osoby<br>1.3% registrovaných", "<b>iné</b><br>Slovensko: 4 osoby<br>2.6% registrovaných", "<b>neuvedené</b><br>Slovensko: 1 osoba<br>0.6% registrovaných"]
	},
	{
	x: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 1 osoba<br>0.6% registrovaných", "<b>výskum + univerzita</b><br>SR + zahraničie: 1 osoba<br>0.6% registrovaných", "<b>výskumné pracovisko</b><br>SR + zahraničie: 1 osoba<br>0.6% registrovaných", "", "", "", "", "", "", "", ""]
	},
	{
	x: [31, 6, 9, 0, 1, 1, 0, 0, 1, 0, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 31 osôb<br>19.9% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 6 osôb<br>3.8% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 9 osôb<br>5.8% registrovaných", "", "<b>komerčná spoločnosť</b><br>zahraničie: 1 osoba<br>0.6% registrovaných", "<b>podpora výskumu</b><br>zahraničie: 1 osoba<br>0.6% registrovaných", "", "", "<b>mimovládna organizácia</b><br>zahraničie: 1 osoba<br>0.6% registrovaných", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>iné</b><br>neuvedené (krajina): 1 osoba<br>0.6% registrovaných", "<b>neuvedené</b><br>neuvedené (krajina): 21 osôb<br>13.5% registrovaných"]
	},
	{
	x: [30, 12, 7, 11, 8, 7, 4, 2, 0, 0, 1],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "štátna správa", "podpora výskumu", "komerčná spoločnosť", "iné", "mimovládna organizácia", "nadnárodná organizácia", "práca s mládežou", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 30 osôb<br>19.2% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 12 osôb<br>7.7% registrovaných", "<b>výskum + univerzita</b><br>Slovensko: 7 osôb<br>4.5% registrovaných", "<b>štátna správa</b><br>Slovensko: 11 osôb<br>7.1% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 8 osôb<br>5.1% registrovaných", "<b>komerčná spoločnosť</b><br>Slovensko: 7 osôb<br>4.5% registrovaných", "<b>iné</b><br>Slovensko: 4 osoby<br>2.6% registrovaných", "<b>mimovládna organizácia</b><br>Slovensko: 2 osoby<br>1.3% registrovaných", "", "", "<b>neuvedené</b><br>Slovensko: 1 osoba<br>0.6% registrovaných"]
	},
	{
	x: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "štátna správa", "podpora výskumu", "komerčná spoločnosť", "iné", "mimovládna organizácia", "nadnárodná organizácia", "práca s mládežou", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 1 osoba<br>0.6% registrovaných", "<b>výskumné pracovisko</b><br>SR + zahraničie: 1 osoba<br>0.6% registrovaných", "<b>výskum + univerzita</b><br>SR + zahraničie: 1 osoba<br>0.6% registrovaných", "", "", "", "", "", "", "", ""]
	},
	{
	x: [31, 9, 6, 0, 1, 1, 0, 1, 0, 0, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "štátna správa", "podpora výskumu", "komerčná spoločnosť", "iné", "mimovládna organizácia", "nadnárodná organizácia", "práca s mládežou", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 31 osôb<br>19.9% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 9 osôb<br>5.8% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 6 osôb<br>3.8% registrovaných", "", "<b>podpora výskumu</b><br>zahraničie: 1 osoba<br>0.6% registrovaných", "<b>komerčná spoločnosť</b><br>zahraničie: 1 osoba<br>0.6% registrovaných", "", "<b>mimovládna organizácia</b><br>zahraničie: 1 osoba<br>0.6% registrovaných", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 21],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "štátna správa", "podpora výskumu", "komerčná spoločnosť", "iné", "mimovládna organizácia", "nadnárodná organizácia", "práca s mládežou", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "<b>iné</b><br>neuvedené (krajina): 1 osoba<br>0.6% registrovaných", "", "", "", "<b>neuvedené</b><br>neuvedené (krajina): 21 osôb<br>13.5% registrovaných"]
	},
];

var data_institution_gender_2022 = [
	// institution_gender 2022
	{
	x: [34, 10, 11, 0, 3, 7, 0, 7, 2, 2, 14],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>34 žien<br>21.8% registrovaných", "<b>výskum + univerzita</b><br>10 žien<br>6.4% registrovaných", "<b>výskumné pracovisko</b><br>11 žien<br>7.1% registrovaných", "", "<b>komerčná spoločnosť</b><br>3 ženy<br>1.9% registrovaných", "<b>podpora výskumu</b><br>7 žien<br>4.5% registrovaných", "", "<b>štátna správa</b><br>7 žien<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>2 ženy<br>1.3% registrovaných", "<b>iné</b><br>2 ženy<br>1.3% registrovaných", "<b>neuvedené</b><br>14 žien<br>9.0% registrovaných"]
	},
	{
	x: [28, 4, 11, 0, 5, 2, 0, 4, 1, 3, 8],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>28 mužov<br>17.9% registrovaných", "<b>výskum + univerzita</b><br>4 muži<br>2.6% registrovaných", "<b>výskumné pracovisko</b><br>11 mužov<br>7.1% registrovaných", "", "<b>komerčná spoločnosť</b><br>5 mužov<br>3.2% registrovaných", "<b>podpora výskumu</b><br>2 muži<br>1.3% registrovaných", "", "<b>štátna správa</b><br>4 muži<br>2.6% registrovaných", "<b>mimovládna organizácia</b><br>1 muž<br>0.6% registrovaných", "<b>iné</b><br>3 muži<br>1.9% registrovaných", "<b>neuvedené</b><br>8 mužov<br>5.1% registrovaných"]
	},
	{
	x: [34, 11, 10, 7, 7, 3, 2, 2, 0, 0, 14],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "štátna správa", "podpora výskumu", "komerčná spoločnosť", "iné", "mimovládna organizácia", "nadnárodná organizácia", "práca s mládežou", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>34 žien<br>21.8% registrovaných", "<b>výskumné pracovisko</b><br>11 žien<br>7.1% registrovaných", "<b>výskum + univerzita</b><br>10 žien<br>6.4% registrovaných", "<b>štátna správa</b><br>7 žien<br>4.5% registrovaných", "<b>podpora výskumu</b><br>7 žien<br>4.5% registrovaných", "<b>komerčná spoločnosť</b><br>3 ženy<br>1.9% registrovaných", "<b>iné</b><br>2 ženy<br>1.3% registrovaných", "<b>mimovládna organizácia</b><br>2 ženy<br>1.3% registrovaných", "", "", "<b>neuvedené</b><br>14 žien<br>9.0% registrovaných"]
	},
	{
	x: [28, 11, 4, 4, 2, 5, 3, 1, 0, 0, 8],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "štátna správa", "podpora výskumu", "komerčná spoločnosť", "iné", "mimovládna organizácia", "nadnárodná organizácia", "práca s mládežou", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>28 mužov<br>17.9% registrovaných", "<b>výskumné pracovisko</b><br>11 mužov<br>7.1% registrovaných", "<b>výskum + univerzita</b><br>4 muži<br>2.6% registrovaných", "<b>štátna správa</b><br>4 muži<br>2.6% registrovaných", "<b>podpora výskumu</b><br>2 muži<br>1.3% registrovaných", "<b>komerčná spoločnosť</b><br>5 mužov<br>3.2% registrovaných", "<b>iné</b><br>3 muži<br>1.9% registrovaných", "<b>mimovládna organizácia</b><br>1 muž<br>0.6% registrovaných", "", "", "<b>neuvedené</b><br>8 mužov<br>5.1% registrovaných"]
	},
];

var data_position_country_2022 = [
	// position_country 2022
	{
	x: [5, 10, 9, 8, 0, 5, 17, 14, 14, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>Slovensko: 5 osôb<br>3.2% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 10 osôb<br>6.4% registrovaných", "<b>PI (vedúci laboratória)</b><br>Slovensko: 9 osôb<br>5.8% registrovaných", "<b>postdok, junior researcher</b><br>Slovensko: 8 osôb<br>5.1% registrovaných", "", "<b>doktorand </b><br>Slovensko: 5 osôb<br>3.2% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 17 osôb<br>10.9% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 14 osôb<br>9.0% registrovaných", "<b>iné </b><br>Slovensko: 14 osôb<br>9.0% registrovaných", ""]
	},
	{
	x: [1, 0, 0, 0, 0, 2, 0, 0, 0, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>SR + zahraničie: 1 osoba<br>0.6% registrovaných", "", "", "", "", "<b>doktorand </b><br>SR + zahraničie: 2 osoby<br>1.3% registrovaných", "", "", "", ""]
	},
	{
	x: [2, 6, 2, 13, 0, 10, 3, 9, 4, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>zahraničie: 2 osoby<br>1.3% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 6 osôb<br>3.8% registrovaných", "<b>PI (vedúci laboratória)</b><br>zahraničie: 2 osoby<br>1.3% registrovaných", "<b>postdok, junior researcher</b><br>zahraničie: 13 osôb<br>8.3% registrovaných", "", "<b>doktorand </b><br>zahraničie: 10 osôb<br>6.4% registrovaných", "<b>mimo akadémie </b><br>zahraničie: 3 osoby<br>1.9% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 9 osôb<br>5.8% registrovaných", "<b>iné </b><br>zahraničie: 4 osoby<br>2.6% registrovaných", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 1, 21],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "<b>iné </b><br>neuvedené (krajina): 1 osoba<br>0.6% registrovaných", "<b>neuvedené </b><br>neuvedené (krajina): 21 osôb<br>13.5% registrovaných"]
	},
	{
	x: [14, 8, 17, 14, 5, 10, 9, 5, 0, 0],
	y: ["študent (Bc./Mgr.) ", "postdok, junior researcher", "mimo akadémie ", "iné ", "doktorand ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>študent (Bc./Mgr.) </b><br>Slovensko: 14 osôb<br>9.0% registrovaných", "<b>postdok, junior researcher</b><br>Slovensko: 8 osôb<br>5.1% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 17 osôb<br>10.9% registrovaných", "<b>iné </b><br>Slovensko: 14 osôb<br>9.0% registrovaných", "<b>doktorand </b><br>Slovensko: 5 osôb<br>3.2% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 10 osôb<br>6.4% registrovaných", "<b>PI (vedúci laboratória)</b><br>Slovensko: 9 osôb<br>5.8% registrovaných", "<b>profesor, docent </b><br>Slovensko: 5 osôb<br>3.2% registrovaných", "", ""]
	},
	{
	x: [0, 0, 0, 0, 2, 0, 0, 1, 0, 0],
	y: ["študent (Bc./Mgr.) ", "postdok, junior researcher", "mimo akadémie ", "iné ", "doktorand ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "<b>doktorand </b><br>SR + zahraničie: 2 osoby<br>1.3% registrovaných", "", "", "<b>profesor, docent </b><br>SR + zahraničie: 1 osoba<br>0.6% registrovaných", "", ""]
	},
	{
	x: [9, 13, 3, 4, 10, 6, 2, 2, 0, 0],
	y: ["študent (Bc./Mgr.) ", "postdok, junior researcher", "mimo akadémie ", "iné ", "doktorand ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>študent (Bc./Mgr.) </b><br>zahraničie: 9 osôb<br>5.8% registrovaných", "<b>postdok, junior researcher</b><br>zahraničie: 13 osôb<br>8.3% registrovaných", "<b>mimo akadémie </b><br>zahraničie: 3 osoby<br>1.9% registrovaných", "<b>iné </b><br>zahraničie: 4 osoby<br>2.6% registrovaných", "<b>doktorand </b><br>zahraničie: 10 osôb<br>6.4% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 6 osôb<br>3.8% registrovaných", "<b>PI (vedúci laboratória)</b><br>zahraničie: 2 osoby<br>1.3% registrovaných", "<b>profesor, docent </b><br>zahraničie: 2 osoby<br>1.3% registrovaných", "", ""]
	},
	{
	x: [0, 0, 0, 1, 0, 0, 0, 0, 0, 21],
	y: ["študent (Bc./Mgr.) ", "postdok, junior researcher", "mimo akadémie ", "iné ", "doktorand ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "<b>iné </b><br>neuvedené (krajina): 1 osoba<br>0.6% registrovaných", "", "", "", "", "", "<b>neuvedené </b><br>neuvedené (krajina): 21 osôb<br>13.5% registrovaných"]
	},
];

var data_position_gender_2022 = [
	// position_gender 2022
	{
	x: [4, 9, 3, 9, 0, 11, 9, 17, 14, 14],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesorka, docentka </b><br>4 ženy<br>2.6% registrovaných", "<b>vedecká pracovníčka (senior researcher) </b><br>9 žien<br>5.8% registrovaných", "<b>PI (vedúca laboratória)</b><br>3 ženy<br>1.9% registrovaných", "<b>postdok, junior researcher</b><br>9 žien<br>5.8% registrovaných", "", "<b>doktorandka </b><br>11 žien<br>7.1% registrovaných", "<b>mimo akadémie </b><br>9 žien<br>5.8% registrovaných", "<b>študentka (Bc./Mgr.) </b><br>17 žien<br>10.9% registrovaných", "<b>iné </b><br>14 žien<br>9.0% registrovaných", "<b>neuvedené </b><br>14 žien<br>9.0% registrovaných"]
	},
	{
	x: [4, 7, 8, 12, 0, 6, 11, 6, 5, 7],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>4 muži<br>2.6% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>7 mužov<br>4.5% registrovaných", "<b>PI (vedúci laboratória)</b><br>8 mužov<br>5.1% registrovaných", "<b>postdok, junior researcher</b><br>12 mužov<br>7.7% registrovaných", "", "<b>doktorand </b><br>6 mužov<br>3.8% registrovaných", "<b>mimo akadémie </b><br>11 mužov<br>7.1% registrovaných", "<b>študent (Bc./Mgr.) </b><br>6 mužov<br>3.8% registrovaných", "<b>iné </b><br>5 mužov<br>3.2% registrovaných", "<b>neuvedené </b><br>7 mužov<br>4.5% registrovaných"]
	},
	{
	x: [17, 9, 9, 14, 11, 9, 3, 4, 0, 14],
	y: ["študent (Bc./Mgr.) ", "postdok, junior researcher", "mimo akadémie ", "iné ", "doktorand ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>študentka (Bc./Mgr.) </b><br>17 žien<br>10.9% registrovaných", "<b>postdok, junior researcher</b><br>9 žien<br>5.8% registrovaných", "<b>mimo akadémie </b><br>9 žien<br>5.8% registrovaných", "<b>iné </b><br>14 žien<br>9.0% registrovaných", "<b>doktorandka </b><br>11 žien<br>7.1% registrovaných", "<b>vedecká pracovníčka (senior researcher) </b><br>9 žien<br>5.8% registrovaných", "<b>PI (vedúca laboratória)</b><br>3 ženy<br>1.9% registrovaných", "<b>profesorka, docentka </b><br>4 ženy<br>2.6% registrovaných", "", "<b>neuvedené </b><br>14 žien<br>9.0% registrovaných"]
	},
	{
	x: [6, 12, 11, 5, 6, 7, 8, 4, 0, 7],
	y: ["študent (Bc./Mgr.) ", "postdok, junior researcher", "mimo akadémie ", "iné ", "doktorand ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "profesor, docent ", "výskum v industry", "neuvedené "],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>študent (Bc./Mgr.) </b><br>6 mužov<br>3.8% registrovaných", "<b>postdok, junior researcher</b><br>12 mužov<br>7.7% registrovaných", "<b>mimo akadémie </b><br>11 mužov<br>7.1% registrovaných", "<b>iné </b><br>5 mužov<br>3.2% registrovaných", "<b>doktorand </b><br>6 mužov<br>3.8% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>7 mužov<br>4.5% registrovaných", "<b>PI (vedúci laboratória)</b><br>8 mužov<br>5.1% registrovaných", "<b>profesor, docent </b><br>4 muži<br>2.6% registrovaných", "", "<b>neuvedené </b><br>7 mužov<br>4.5% registrovaných"]
	},
];

var data_registration_timeSeries_2022 = [
	// registration_timeSeries 2022
	{
	x: [984.523900462963, 1020.71945601852, 1078.34556712963, 1107.55751157407, 1113.56334490741, 1149.66278935185, 1149.67334490741, 1209.67584490741, 1270.80334490741, 1347.2797337963, 1395.22667824074, 1397.95751157407, 1448.83917824074, 1532.04751157407, 1565.26751157407, 1687.24445601852, 1734.55862268519, 1737.52806712963, 1741.40195601852, 1748.92890046296, 1749.10084490741, 1749.93834490741, 1752.92890046296, 1756.40584490741, 1758.11306712963, 1779.78890046296, 1820.16806712963, 1820.17695601852, 1851.63584490741, 1895.08056712963, 1895.08445601852, 1895.11028935185, 1896.98112268519, 1898.10806712963, 1898.64251157407, 1898.8422337963, 1902.06945601852, 1905.51612268519, 1942.76001157407, 1945.5672337963, 1946.71140046296, 1969.52084490741, 1992.01417824074, 2037.98306712963, 2095.81834490741, 2097.5972337963, 2121.83945601852, 2137.92084490741, 2138.07917824074, 2193.6272337963, 2200.44306712963, 2276.20778935185, 2280.07917824074, 2302.55778935185, 2324.92778935185, 2353.22667824074, 2397.51862268519, 2403.20390046296, 2405.01390046296, 2410.38390046296, 2426.36667824074, 2446.40251157407, 2450.30945601852, 2457.30556712963, 2461.32140046296, 2480.50501157407, 2484.21945601852, 2498.36417824074, 2500.8222337963, 2506.82917824074, 2507.68778935185, 2519.64278935185, 2522.92167824074, 2551.6172337963, 2564.7222337963, 2568.56362268519, 2569.10890046296, 2569.81890046296, 2576.85778935185, 2577.84778935185, 2587.4822337963, 2593.29640046296],
	y: ["1", "3", "4", "6", "7", "8", "9", "11", "14", "16", "17", "18", "19", "23", "24", "29", "32", "34", "36", "37", "38", "39", "41", "42", "43", "44", "45", "46", "48", "49", "50", "51", "53", "54", "55", "56", "57", "58", "60", "61", "62", "63", "64", "66", "68", "69", "70", "71", "72", "78", "79", "82", "84", "85", "88", "90", "91", "93", "95", "98", "100", "101", "104", "105", "107", "109", "111", "113", "116", "118", "121", "122", "123", "124", "125", "126", "127", "128", "131", "132", "133", "135"],
	name: 'Slovensko',
	text: ["14.10.2022 12:34:25", "16.10.2022 00:46:09", "18.10.2022 10:23:43", "19.10.2022 15:36:26", "19.10.2022 21:36:47", "21.10.2022 09:42:45", "21.10.2022 09:43:23", "23.10.2022 21:43:32", "26.10.2022 10:51:11", "29.10.2022 15:19:46", "31.10.2022 15:16:35", "31.10.2022 18:00:26", "02.11.2022 20:53:20", "06.11.2022 08:05:50", "07.11.2022 17:19:02", "12.11.2022 19:17:39", "14.11.2022 18:36:30", "14.11.2022 21:34:40", "15.11.2022 01:27:06", "15.11.2022 08:58:43", "15.11.2022 09:09:02", "15.11.2022 09:59:17", "15.11.2022 12:58:43", "15.11.2022 16:27:20", "15.11.2022 18:09:46", "16.11.2022 15:50:19", "18.11.2022 08:13:04", "18.11.2022 08:13:36", "19.11.2022 15:41:08", "21.11.2022 11:07:49", "21.11.2022 11:08:03", "21.11.2022 11:09:36", "21.11.2022 13:01:51", "21.11.2022 14:09:28", "21.11.2022 14:41:32", "21.11.2022 14:53:31", "21.11.2022 18:07:09", "21.11.2022 21:33:57", "23.11.2022 10:48:35", "23.11.2022 13:37:01", "23.11.2022 14:45:40", "24.11.2022 13:34:14", "25.11.2022 12:03:50", "27.11.2022 10:01:58", "29.11.2022 19:52:05", "29.11.2022 21:38:49", "30.11.2022 21:53:21", "01.12.2022 13:58:14", "01.12.2022 14:07:44", "03.12.2022 21:40:37", "04.12.2022 04:29:34", "07.12.2022 08:15:27", "07.12.2022 12:07:44", "08.12.2022 10:36:27", "09.12.2022 08:58:39", "10.12.2022 13:16:35", "12.12.2022 09:34:06", "12.12.2022 15:15:13", "12.12.2022 17:03:49", "12.12.2022 22:26:01", "13.12.2022 14:24:59", "14.12.2022 10:27:08", "14.12.2022 14:21:33", "14.12.2022 21:21:19", "15.12.2022 01:22:16", "15.12.2022 20:33:17", "16.12.2022 00:16:09", "16.12.2022 14:24:50", "16.12.2022 16:52:19", "16.12.2022 22:52:44", "16.12.2022 23:44:15", "17.12.2022 11:41:33", "17.12.2022 14:58:17", "18.12.2022 19:40:01", "19.12.2022 08:46:19", "19.12.2022 12:36:48", "19.12.2022 13:09:31", "19.12.2022 13:52:07", "19.12.2022 20:54:27", "19.12.2022 21:53:51", "20.12.2022 07:31:55", "20.12.2022 13:20:46"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>14.10.2022 12:34:25</b><br>1 osoba<br>1.0% online registrácií", "<b>16.10.2022 00:46:09</b><br>3 osoby<br>2.0% online registrácií", "<b>18.10.2022 10:23:43</b><br>4 osoby<br>3.0% online registrácií", "<b>19.10.2022 15:36:26</b><br>6 osôb<br>4.0% online registrácií", "<b>19.10.2022 21:36:47</b><br>7 osôb<br>5.0% online registrácií", "<b>21.10.2022 09:42:45</b><br>8 osôb<br>6.0% online registrácií", "<b>21.10.2022 09:43:23</b><br>9 osôb<br>7.0% online registrácií", "<b>23.10.2022 21:43:32</b><br>11 osôb<br>8.0% online registrácií", "<b>26.10.2022 10:51:11</b><br>14 osôb<br>10.0% online registrácií", "<b>29.10.2022 15:19:46</b><br>16 osôb<br>12.0% online registrácií", "<b>31.10.2022 15:16:35</b><br>17 osôb<br>12.0% online registrácií", "<b>31.10.2022 18:00:26</b><br>18 osôb<br>13.0% online registrácií", "<b>02.11.2022 20:53:20</b><br>19 osôb<br>14.0% online registrácií", "<b>06.11.2022 08:05:50</b><br>23 osôb<br>17.0% online registrácií", "<b>07.11.2022 17:19:02</b><br>24 osôb<br>18.0% online registrácií", "<b>12.11.2022 19:17:39</b><br>29 osôb<br>21.0% online registrácií", "<b>14.11.2022 18:36:30</b><br>32 osôb<br>23.0% online registrácií", "<b>14.11.2022 21:34:40</b><br>34 osôb<br>25.0% online registrácií", "<b>15.11.2022 01:27:06</b><br>36 osôb<br>26.0% online registrácií", "<b>15.11.2022 08:58:43</b><br>37 osôb<br>27.0% online registrácií", "<b>15.11.2022 09:09:02</b><br>38 osôb<br>28.0% online registrácií", "<b>15.11.2022 09:59:17</b><br>39 osôb<br>28.0% online registrácií", "<b>15.11.2022 12:58:43</b><br>41 osôb<br>30.0% online registrácií", "<b>15.11.2022 16:27:20</b><br>42 osôb<br>31.0% online registrácií", "<b>15.11.2022 18:09:46</b><br>43 osôb<br>31.0% online registrácií", "<b>16.11.2022 15:50:19</b><br>44 osôb<br>32.0% online registrácií", "<b>18.11.2022 08:13:04</b><br>45 osôb<br>33.0% online registrácií", "<b>18.11.2022 08:13:36</b><br>46 osôb<br>34.0% online registrácií", "<b>19.11.2022 15:41:08</b><br>48 osôb<br>35.0% online registrácií", "<b>21.11.2022 11:07:49</b><br>49 osôb<br>36.0% online registrácií", "<b>21.11.2022 11:08:03</b><br>50 osôb<br>36.0% online registrácií", "<b>21.11.2022 11:09:36</b><br>51 osôb<br>37.0% online registrácií", "<b>21.11.2022 13:01:51</b><br>53 osôb<br>39.0% online registrácií", "<b>21.11.2022 14:09:28</b><br>54 osôb<br>39.0% online registrácií", "<b>21.11.2022 14:41:32</b><br>55 osôb<br>40.0% online registrácií", "<b>21.11.2022 14:53:31</b><br>56 osôb<br>41.0% online registrácií", "<b>21.11.2022 18:07:09</b><br>57 osôb<br>42.0% online registrácií", "<b>21.11.2022 21:33:57</b><br>58 osôb<br>42.0% online registrácií", "<b>23.11.2022 10:48:35</b><br>60 osôb<br>44.0% online registrácií", "<b>23.11.2022 13:37:01</b><br>61 osôb<br>45.0% online registrácií", "<b>23.11.2022 14:45:40</b><br>62 osôb<br>45.0% online registrácií", "<b>24.11.2022 13:34:14</b><br>63 osôb<br>46.0% online registrácií", "<b>25.11.2022 12:03:50</b><br>64 osôb<br>47.0% online registrácií", "<b>27.11.2022 10:01:58</b><br>66 osôb<br>48.0% online registrácií", "<b>29.11.2022 19:52:05</b><br>68 osôb<br>50.0% online registrácií", "<b>29.11.2022 21:38:49</b><br>69 osôb<br>50.0% online registrácií", "<b>30.11.2022 21:53:21</b><br>70 osôb<br>51.0% online registrácií", "<b>01.12.2022 13:58:14</b><br>71 osôb<br>52.0% online registrácií", "<b>01.12.2022 14:07:44</b><br>72 osôb<br>53.0% online registrácií", "<b>03.12.2022 21:40:37</b><br>78 osôb<br>57.0% online registrácií", "<b>04.12.2022 04:29:34</b><br>79 osôb<br>58.0% online registrácií", "<b>07.12.2022 08:15:27</b><br>82 osôb<br>60.0% online registrácií", "<b>07.12.2022 12:07:44</b><br>84 osôb<br>61.0% online registrácií", "<b>08.12.2022 10:36:27</b><br>85 osôb<br>62.0% online registrácií", "<b>09.12.2022 08:58:39</b><br>88 osôb<br>64.0% online registrácií", "<b>10.12.2022 13:16:35</b><br>90 osôb<br>66.0% online registrácií", "<b>12.12.2022 09:34:06</b><br>91 osôb<br>66.0% online registrácií", "<b>12.12.2022 15:15:13</b><br>93 osôb<br>68.0% online registrácií", "<b>12.12.2022 17:03:49</b><br>95 osôb<br>69.0% online registrácií", "<b>12.12.2022 22:26:01</b><br>98 osôb<br>72.0% online registrácií", "<b>13.12.2022 14:24:59</b><br>100 osôb<br>73.0% online registrácií", "<b>14.12.2022 10:27:08</b><br>101 osôb<br>74.0% online registrácií", "<b>14.12.2022 14:21:33</b><br>104 osôb<br>76.0% online registrácií", "<b>14.12.2022 21:21:19</b><br>105 osôb<br>77.0% online registrácií", "<b>15.12.2022 01:22:16</b><br>107 osôb<br>78.0% online registrácií", "<b>15.12.2022 20:33:17</b><br>109 osôb<br>80.0% online registrácií", "<b>16.12.2022 00:16:09</b><br>111 osôb<br>81.0% online registrácií", "<b>16.12.2022 14:24:50</b><br>113 osôb<br>82.0% online registrácií", "<b>16.12.2022 16:52:19</b><br>116 osôb<br>85.0% online registrácií", "<b>16.12.2022 22:52:44</b><br>118 osôb<br>86.0% online registrácií", "<b>16.12.2022 23:44:15</b><br>121 osôb<br>88.0% online registrácií", "<b>17.12.2022 11:41:33</b><br>122 osôb<br>89.0% online registrácií", "<b>17.12.2022 14:58:17</b><br>123 osôb<br>90.0% online registrácií", "<b>18.12.2022 19:40:01</b><br>124 osôb<br>91.0% online registrácií", "<b>19.12.2022 08:46:19</b><br>125 osôb<br>91.0% online registrácií", "<b>19.12.2022 12:36:48</b><br>126 osôb<br>92.0% online registrácií", "<b>19.12.2022 13:09:31</b><br>127 osôb<br>93.0% online registrácií", "<b>19.12.2022 13:52:07</b><br>128 osôb<br>93.0% online registrácií", "<b>19.12.2022 20:54:27</b><br>131 osôb<br>96.0% online registrácií", "<b>19.12.2022 21:53:51</b><br>132 osôb<br>96.0% online registrácií", "<b>20.12.2022 07:31:55</b><br>133 osôb<br>97.0% online registrácií", "<b>20.12.2022 13:20:46</b><br>135 osôb<br>99.0% online registrácií"]
	},
	{
	x: [2062.8922337963, 2278.57417824074, 2399.2997337963],
	y: ["67", "83", "92"],
	name: 'SR + zahraničie',
	text: ["28.11.2022 10:56:31", "07.12.2022 10:37:26", "12.12.2022 11:20:58"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>28.11.2022 10:56:31</b><br>67 osôb<br>49.0% online registrácií", "<b>07.12.2022 10:37:26</b><br>83 osôb<br>61.0% online registrácií", "<b>12.12.2022 11:20:58</b><br>92 osôb<br>67.0% online registrácií"]
	},
	{
	x: [993.407789351852, 1106.8997337963, 1153.38806712963, 1211.27640046296, 1229.87251157407, 1272.47056712963, 1449.93251157407, 1454.06806712963, 1464.57390046296, 1593.59834490741, 1657.09251157407, 1660.92806712963, 1676.6697337963, 1715.81862268519, 1729.40417824074, 1737.1497337963, 1737.99612268519, 1750.6997337963, 1830.6147337963, 1895.68390046296, 1923.46390046296, 1996.1772337963, 2138.14306712963, 2140.25556712963, 2146.3447337963, 2146.58556712963, 2162.12390046296, 2235.94806712963, 2261.01112268519, 2308.79528935185, 2312.63056712963, 2325.15667824074, 2403.85001157408, 2407.28945601852, 2411.66945601852, 2449.28084490741, 2449.91667824074, 2461.18640046296, 2477.3497337963, 2483.52667824074, 2495.21890046296, 2499.4122337963, 2500.00917824074, 2502.37751157408, 2507.16278935185, 2507.51195601852, 2576.0197337963, 2576.17334490741, 2591.82917824074],
	y: ["2", "5", "10", "12", "13", "15", "20", "21", "22", "25", "26", "27", "28", "30", "31", "33", "35", "40", "47", "52", "59", "65", "73", "74", "75", "76", "77", "80", "81", "86", "87", "89", "94", "97", "99", "102", "103", "106", "108", "110", "112", "114", "115", "117", "119", "120", "129", "130", "134"],
	name: 'zahraničie',
	text: ["14.10.2022 21:27:27", "19.10.2022 14:56:58", "21.10.2022 13:26:16", "23.10.2022 23:19:34", "24.10.2022 17:55:20", "26.10.2022 12:31:13", "02.11.2022 21:58:56", "03.11.2022 02:07:04", "03.11.2022 12:37:25", "08.11.2022 21:38:53", "11.11.2022 13:08:32", "11.11.2022 16:58:40", "12.11.2022 08:43:10", "13.11.2022 23:52:06", "14.11.2022 13:27:14", "14.11.2022 21:11:58", "14.11.2022 22:02:45", "15.11.2022 10:44:58", "18.11.2022 18:39:52", "21.11.2022 11:44:01", "22.11.2022 15:30:49", "25.11.2022 16:13:37", "01.12.2022 14:11:34", "01.12.2022 16:18:19", "01.12.2022 22:23:40", "01.12.2022 22:38:07", "02.12.2022 14:10:25", "05.12.2022 15:59:52", "06.12.2022 17:03:39", "08.12.2022 16:50:42", "08.12.2022 20:40:49", "09.12.2022 09:12:23", "12.12.2022 15:53:59", "12.12.2022 19:20:21", "12.12.2022 23:43:09", "14.12.2022 13:19:50", "14.12.2022 13:57:59", "15.12.2022 01:14:10", "15.12.2022 17:23:58", "15.12.2022 23:34:35", "16.12.2022 11:16:07", "16.12.2022 15:27:43", "16.12.2022 16:03:32", "16.12.2022 18:25:38", "16.12.2022 23:12:45", "16.12.2022 23:33:42", "19.12.2022 20:04:10", "19.12.2022 20:13:23", "20.12.2022 11:52:44"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>14.10.2022 21:27:27</b><br>2 osoby<br>1.0% online registrácií", "<b>19.10.2022 14:56:58</b><br>5 osôb<br>4.0% online registrácií", "<b>21.10.2022 13:26:16</b><br>10 osôb<br>7.0% online registrácií", "<b>23.10.2022 23:19:34</b><br>12 osôb<br>9.0% online registrácií", "<b>24.10.2022 17:55:20</b><br>13 osôb<br>9.0% online registrácií", "<b>26.10.2022 12:31:13</b><br>15 osôb<br>11.0% online registrácií", "<b>02.11.2022 21:58:56</b><br>20 osôb<br>15.0% online registrácií", "<b>03.11.2022 02:07:04</b><br>21 osôb<br>15.0% online registrácií", "<b>03.11.2022 12:37:25</b><br>22 osôb<br>16.0% online registrácií", "<b>08.11.2022 21:38:53</b><br>25 osôb<br>18.0% online registrácií", "<b>11.11.2022 13:08:32</b><br>26 osôb<br>19.0% online registrácií", "<b>11.11.2022 16:58:40</b><br>27 osôb<br>20.0% online registrácií", "<b>12.11.2022 08:43:10</b><br>28 osôb<br>20.0% online registrácií", "<b>13.11.2022 23:52:06</b><br>30 osôb<br>22.0% online registrácií", "<b>14.11.2022 13:27:14</b><br>31 osôb<br>23.0% online registrácií", "<b>14.11.2022 21:11:58</b><br>33 osôb<br>24.0% online registrácií", "<b>14.11.2022 22:02:45</b><br>35 osôb<br>26.0% online registrácií", "<b>15.11.2022 10:44:58</b><br>40 osôb<br>29.0% online registrácií", "<b>18.11.2022 18:39:52</b><br>47 osôb<br>34.0% online registrácií", "<b>21.11.2022 11:44:01</b><br>52 osôb<br>38.0% online registrácií", "<b>22.11.2022 15:30:49</b><br>59 osôb<br>43.0% online registrácií", "<b>25.11.2022 16:13:37</b><br>65 osôb<br>47.0% online registrácií", "<b>01.12.2022 14:11:34</b><br>73 osôb<br>53.0% online registrácií", "<b>01.12.2022 16:18:19</b><br>74 osôb<br>54.0% online registrácií", "<b>01.12.2022 22:23:40</b><br>75 osôb<br>55.0% online registrácií", "<b>01.12.2022 22:38:07</b><br>76 osôb<br>55.0% online registrácií", "<b>02.12.2022 14:10:25</b><br>77 osôb<br>56.0% online registrácií", "<b>05.12.2022 15:59:52</b><br>80 osôb<br>58.0% online registrácií", "<b>06.12.2022 17:03:39</b><br>81 osôb<br>59.0% online registrácií", "<b>08.12.2022 16:50:42</b><br>86 osôb<br>63.0% online registrácií", "<b>08.12.2022 20:40:49</b><br>87 osôb<br>64.0% online registrácií", "<b>09.12.2022 09:12:23</b><br>89 osôb<br>65.0% online registrácií", "<b>12.12.2022 15:53:59</b><br>94 osôb<br>69.0% online registrácií", "<b>12.12.2022 19:20:21</b><br>97 osôb<br>71.0% online registrácií", "<b>12.12.2022 23:43:09</b><br>99 osôb<br>72.0% online registrácií", "<b>14.12.2022 13:19:50</b><br>102 osôb<br>74.0% online registrácií", "<b>14.12.2022 13:57:59</b><br>103 osôb<br>75.0% online registrácií", "<b>15.12.2022 01:14:10</b><br>106 osôb<br>77.0% online registrácií", "<b>15.12.2022 17:23:58</b><br>108 osôb<br>79.0% online registrácií", "<b>15.12.2022 23:34:35</b><br>110 osôb<br>80.0% online registrácií", "<b>16.12.2022 11:16:07</b><br>112 osôb<br>82.0% online registrácií", "<b>16.12.2022 15:27:43</b><br>114 osôb<br>83.0% online registrácií", "<b>16.12.2022 16:03:32</b><br>115 osôb<br>84.0% online registrácií", "<b>16.12.2022 18:25:38</b><br>117 osôb<br>85.0% online registrácií", "<b>16.12.2022 23:12:45</b><br>119 osôb<br>87.0% online registrácií", "<b>16.12.2022 23:33:42</b><br>120 osôb<br>88.0% online registrácií", "<b>19.12.2022 20:04:10</b><br>129 osôb<br>94.0% online registrácií", "<b>19.12.2022 20:13:23</b><br>130 osôb<br>95.0% online registrácií", "<b>20.12.2022 11:52:44</b><br>134 osôb<br>98.0% online registrácií"]
	},
	{
	x: [2406.12584490741],
	y: ["96"],
	name: 'neuvedené',
	text: ["12.12.2022 18:10:32"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>12.12.2022 18:10:32</b><br>96 osôb<br>70.0% online registrácií"]
	},
	{
		x: [0, 984.523900462963, 993.407789351852, 1020.71945601852, 1078.34556712963, 1106.8997337963, 1107.55751157407, 1113.56334490741, 1149.66278935185, 1149.67334490741, 1153.38806712963, 1209.67584490741, 1211.27640046296, 1229.87251157407, 1270.80334490741, 1272.47056712963, 1347.2797337963, 1395.22667824074, 1397.95751157407, 1448.83917824074, 1449.93251157407, 1454.06806712963, 1464.57390046296, 1532.04751157407, 1565.26751157407, 1593.59834490741, 1657.09251157407, 1660.92806712963, 1676.6697337963, 1687.24445601852, 1715.81862268519, 1729.40417824074, 1734.55862268519, 1737.1497337963, 1737.52806712963, 1737.99612268519, 1741.40195601852, 1748.92890046296, 1749.10084490741, 1749.93834490741, 1750.6997337963, 1752.92890046296, 1756.40584490741, 1758.11306712963, 1779.78890046296, 1820.16806712963, 1820.17695601852, 1830.6147337963, 1851.63584490741, 1895.08056712963, 1895.08445601852, 1895.11028935185, 1895.68390046296, 1896.98112268519, 1898.10806712963, 1898.64251157407, 1898.8422337963, 1902.06945601852, 1905.51612268519, 1923.46390046296, 1942.76001157407, 1945.5672337963, 1946.71140046296, 1969.52084490741, 1992.01417824074, 1996.1772337963, 2037.98306712963, 2062.8922337963, 2095.81834490741, 2097.5972337963, 2121.83945601852, 2137.92084490741, 2138.07917824074, 2138.14306712963, 2140.25556712963, 2146.3447337963, 2146.58556712963, 2162.12390046296, 2193.6272337963, 2200.44306712963, 2235.94806712963, 2261.01112268519, 2276.20778935185, 2278.57417824074, 2280.07917824074, 2302.55778935185, 2308.79528935185, 2312.63056712963, 2324.92778935185, 2325.15667824074, 2353.22667824074, 2397.51862268519, 2399.2997337963, 2403.20390046296, 2403.85001157408, 2405.01390046296, 2406.12584490741, 2407.28945601852, 2410.38390046296, 2411.66945601852, 2426.36667824074, 2446.40251157407, 2449.28084490741, 2449.91667824074, 2450.30945601852, 2457.30556712963, 2461.18640046296, 2461.32140046296, 2477.3497337963, 2480.50501157407, 2483.52667824074, 2484.21945601852, 2495.21890046296, 2498.36417824074, 2499.4122337963, 2500.00917824074, 2500.8222337963, 2502.37751157408, 2506.82917824074, 2507.16278935185, 2507.51195601852, 2507.68778935185, 2519.64278935185, 2522.92167824074, 2551.6172337963, 2564.7222337963, 2568.56362268519, 2569.10890046296, 2569.81890046296, 2576.0197337963, 2576.17334490741, 2576.85778935185, 2577.84778935185, 2587.4822337963, 2591.82917824074, 2593.29640046296],
		y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135],
		name: "",
		type: 'bar',
		marker: {
			color: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)']
		},
		showlegend: false,
		visible: true,
		hoverinfo: 'skip',
		hovermode: "none"
	},
];

var data_registration_timeLabels_2022 = ["", "14.10.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "2.11.", "", "", "", "", "", "", "", "", "", "", "", "14.11.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "21.11.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "1.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "12.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "20.12."];

var updateMenu_institution_country_2022 = [{
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

var updateMenu_institution_gender_2022 = [{
	buttons: [
	{
		args: ['visible', [true, true, false, false]],
		label: 'Zoradiť podľa typu pracoviska',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, true, true]],
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

var updateMenu_position_country_2022 = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, false, false, false, false]],
		label: 'Zoradiť podľa pozície',
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

var updateMenu_position_gender_2022 = [{
	buttons: [
	{
		args: ['visible', [true, true, false, false]],
		label: 'Zoradiť podľa pozície',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, true, true]],
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
// participation 2022
{
	type: "sunburst",
	ids: ["všetci_po2020", "preferujú online", "preferujú prezenčne", "online/prezenčne: neuvedené", "muži online", "ženy online", "muži prezenčne", "ženy prezenčne"],
	labels: ["dáta z prihlasovania", "preferujú online", "preferujú prezenčne", "neuvedené", "muži", "ženy", "muži", "ženy"],
	values: [156, 40, 95, 21, 13, 27, 46, 49],
	parents: ["", "všetci_po2020", "všetci_po2020", "všetci_po2020", "preferujú online", "preferujú online", "preferujú prezenčne", "preferujú prezenčne"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 255, 98)', 'rgb(0, 230, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(204, 221, 255)', 'rgb(255, 204, 204)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania</b><br>156 osôb<br>", "<b>preferujú online</b><br>40 osôb<br>25.6% registrovaných", "<b>preferujú prezenčne</b><br>95 osôb<br>60.9% registrovaných", "<b>neuvedené</b><br>21 osôb<br>13.5% registrovaných", "<b>preferujú online</b><br>13 mužov<br>8.3% registrovaných", "<b>preferujú online</b><br>27 žien<br>17.3% registrovaných", "<b>preferujú prezenčne</b><br>46 mužov<br>29.5% registrovaných", "<b>preferujú prezenčne</b><br>49 žien<br>31.4% registrovaných"]
},
// participation 2021
{
	type: "sunburst",
	ids: ["všetci_po2020", "preferujú online", "preferujú prezenčne", "online/prezenčne: neuvedené", "nesúhlas", "muži online", "ženy online", "muži prezenčne", "ženy prezenčne"],
	labels: ["dáta z prihlasovania", "preferujú online", "preferujú prezenčne", "neuvedené", "nesúhlas s analýzou", "muži", "ženy", "muži", "ženy"],
	values: [194, 159, 22, 10, 3, 55, 104, 7, 15],
	parents: ["", "všetci_po2020", "všetci_po2020", "všetci_po2020", "všetci_po2020", "preferujú online", "preferujú online", "preferujú prezenčne", "preferujú prezenčne"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 255, 98)', 'rgb(0, 230, 0)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(204, 221, 255)', 'rgb(255, 204, 204)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania</b><br>194 osôb<br>", "<b>preferujú online</b><br>159 osôb<br>82.0% registrovaných", "<b>preferujú prezenčne</b><br>22 osôb<br>11.3% registrovaných", "<b>neuvedené</b><br>10 osôb<br>5.2% registrovaných", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.5% registrovaných", "<b>preferujú online</b><br>55 mužov<br>28.4% registrovaných", "<b>preferujú online</b><br>104 žien<br>53.6% registrovaných", "<b>preferujú prezenčne</b><br>7 mužov<br>3.6% registrovaných", "<b>preferujú prezenčne</b><br>15 žien<br>7.7% registrovaných"]
},
// participation 2019
{
	type: "sunburst",
	ids: ["všetci_do2020", "prítomní", "nesúhlas", "muži 1", "ženy 1", "bez registrácie"],
	labels: ["dáta z prihlasovania + neregistrovaní účastníci", "prítomní", "nesúhlas s analýzou", "muži", "ženy", "bez registrácie"],
	values: [229, 206, 3, 93, 93, 20],
	parents: ["", "všetci_do2020", "všetci_do2020", "prítomní", "prítomní", "prítomní"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania + neregistrovaní účastníci</b><br>229 osôb<br>", "206 prítomných<br>98.6% z celkového počtu", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.4% z celkového počtu", "<b>prítomní</b><br>93 mužov<br>44.5% z celkového počtu", "<b>prítomné</b><br>93 žien<br>44.5% z celkového počtu", "<b>bez registrácie</b><br>20 osôb<br>"]
},
// participation 2018
{
	type: "sunburst",
	ids: ["všetci_do2020", "prítomní", "neprítomní", "muži 1", "ženy 1", "bez registrácie", "muži 0", "ženy 0"],
	labels: ["dáta z prihlasovania + neregistrovaní účastníci", "prítomní", "neprítomní", "muži", "ženy", "bez registrácie", "muži", "ženy"],
	values: [177, 139, 38, 63, 56, 20, 14, 24],
	parents: ["", "všetci_do2020", "všetci_do2020", "prítomní", "prítomní", "prítomní", "neprítomní", "neprítomní"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(124, 124, 124)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(204, 221, 255)', 'rgb(255, 204, 204)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania + neregistrovaní účastníci</b><br>177 osôb<br>", "139 prítomných<br>88.5% registrovaných", "38 neprítomných<br>24.2% registrovaných", "<b>prítomní</b><br>63 mužov<br>45.3% prítomných<br>40.1% registrovaných", "<b>prítomné</b><br>56 žien<br>40.3% prítomných<br>35.7% registrovaných", "<b>bez registrácie</b><br>20 osôb<br>14.4% prítomných<br>", "<b>neprítomní</b><br>14 mužov<br>8.9% registrovaných", "<b>neprítomné</b><br>24 žien<br>15.3% registrovaných"]
},
// participation 2017
{
	type: "sunburst",
	ids: ["všetci_do2020", "prítomní", "neprítomní", "muži 1", "ženy 1", "bez registrácie", "muži 0", "ženy 0"],
	labels: ["dáta z prihlasovania + neregistrovaní účastníci", "prítomní", "neprítomní", "muži", "ženy", "bez registrácie", "muži", "ženy"],
	values: [224, 156, 68, 74, 57, 25, 25, 43],
	parents: ["", "všetci_do2020", "všetci_do2020", "prítomní", "prítomní", "prítomní", "neprítomní", "neprítomní"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(124, 124, 124)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(204, 221, 255)', 'rgb(255, 204, 204)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania + neregistrovaní účastníci</b><br>224 osôb<br>", "156 prítomných<br>78.4% registrovaných", "68 neprítomných<br>34.2% registrovaných", "<b>prítomní</b><br>74 mužov<br>47.4% prítomných<br>37.2% registrovaných", "<b>prítomné</b><br>57 žien<br>36.5% prítomných<br>28.6% registrovaných", "<b>bez registrácie</b><br>25 osôb<br>16.0% prítomných<br>", "<b>neprítomní</b><br>25 mužov<br>12.6% registrovaných", "<b>neprítomné</b><br>43 žien<br>21.6% registrovaných"]
}];

var data_participation_detail = [
// participation_detail 2022
{
	type: "sunburst",
	ids: ["všetci", "účasť", "pozvané príspevky", "prednášky", "organizácia", "účastníčky", "účastníci", "pozvané príspevky: ženy", "pozvané príspevky: muži", "aktívne účastníčky", "aktívni účastníci", "organizátorky"],
	labels: ["iba prítomní", "účasť", "pozvané príspevky", "prednášky", "organizácia", "ženy", "muži", "ženy", "muži", "ženy", "muži", "ženy"],
	values: [156, 132, 7, 9, 8, 74, 58, 3, 4, 4, 5, 8],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "účasť", "účasť", "pozvané príspevky", "pozvané príspevky", "prednášky", "prednášky", "organizácia"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 214, 16)', 'rgb(255, 174, 16)', 'rgb(255, 134, 16', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania</b><br>156 osôb<br>", "<b>účasť</b><br>132 osôb<br>84.6% registrovaných", "<b>pozvané príspevky</b><br>7 osôb<br>4.5% registrovaných", "<b>prednášky</b><br>9 osôb<br>5.8% registrovaných", "<b>organizácia</b><br>8 osôb<br>5.1% registrovaných", "<b>účasť</b><br>74 žien<br>47.4% registrovaných", "<b>účasť</b><br>58 mužov<br>37.2% registrovaných", "<b>pozvané príspevky</b><br>3 ženy<br>1.9% registrovaných", "<b>pozvané príspevky</b><br>4 muži<br>2.6% registrovaných", "<b>prednášky</b><br>4 ženy<br>2.6% registrovaných", "<b>prednášky</b><br>5 mužov<br>3.2% registrovaných", "<b>organizácia</b><br>8 žien<br>5.1% registrovaných"]
},
// participation_detail 2021
{
	type: "sunburst",
	ids: ["všetci", "účasť", "pozvané príspevky", "prednášky", "organizácia", "nesúhlas", "účastníčky", "účastníci", "pozvané príspevky: ženy", "pozvané príspevky: muži", "aktívne účastníčky", "aktívni účastníci", "organizátorky", "organizátori"],
	labels: ["iba prítomní", "účasť", "pozvané príspevky", "prednášky", "organizácia", "nesúhlas s analýzou", "ženy", "muži", "ženy", "muži", "ženy", "muži", "ženy", "muži"],
	values: [194, 162, 13, 7, 9, 3, 104, 58, 11, 2, 3, 4, 7, 2],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "účasť", "účasť", "pozvané príspevky", "pozvané príspevky", "prednášky", "prednášky", "organizácia", "organizácia"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 214, 16)', 'rgb(255, 174, 16)', 'rgb(255, 134, 16', 'rgb(200, 200, 200)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania</b><br>194 osôb<br>", "<b>účasť</b><br>162 osôb<br>83.5% registrovaných", "<b>pozvané príspevky</b><br>13 osôb<br>6.7% registrovaných", "<b>prednášky</b><br>7 osôb<br>3.6% registrovaných", "<b>organizácia</b><br>9 osôb<br>4.6% registrovaných", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.5% registrovaných", "<b>účasť</b><br>104 žien<br>53.6% registrovaných", "<b>účasť</b><br>58 mužov<br>29.9% registrovaných", "<b>pozvané príspevky</b><br>11 žien<br>5.7% registrovaných", "<b>pozvané príspevky</b><br>2 muži<br>1.0% registrovaných", "<b>prednášky</b><br>3 ženy<br>1.5% registrovaných", "<b>prednášky</b><br>4 muži<br>2.1% registrovaných", "<b>organizácia</b><br>7 žien<br>3.6% registrovaných", "<b>organizácia</b><br>2 muži<br>1.0% registrovaných"]
},
// participation_detail 2019
{
	type: "sunburst",
	ids: ["všetci", "účasť", "iniciatívy", "prednášky", "organizácia", "nesúhlas", "bez registrácie"],
	labels: ["iba prítomní", "účasť", "iniciatívy", "prednášky", "organizácia", "nesúhlas s analýzou", "bez registrácie"],
	values: [229, 162, 40, 9, 15, 3, 20],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "účasť"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 214, 16)', 'rgb(255, 174, 16)', 'rgb(255, 134, 16', 'rgb(200, 200, 200)', 'rgb(0, 230, 0)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania + neregistrovaní účastníci</b><br>229 osôb<br>", "<b>účasť</b><br>162 osôb<br>70.7% z celkového počtu", "<b>iniciatívy</b><br>40 osôb<br>17.5% z celkového počtu", "<b>prednášky</b><br>9 osôb<br>3.9% z celkového počtu", "<b>organizácia</b><br>15 osôb<br>6.6% z celkového počtu", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.3% z celkového počtu", "<b>bez registrácie</b><br>20 osôb<br>"]
},
// participation_detail 2018
{
	type: "sunburst",
	ids: ["všetci", "účasť", "iniciatívy", "prednášky", "organizácia", "účastníčky", "účastníci", "bez registrácie", "zástupkyne firiem", "zástupcovia firiem", "aktívne účastníčky", "aktívni účastníci", "organizátorky", "organizátori"],
	labels: ["iba prítomní", "účasť", "iniciatívy", "prednášky", "organizácia", "ženy", "muži", "bez registrácie", "ženy", "muži", "ženy", "muži", "ženy", "muži"],
	values: [139, 93, 21, 15, 10, 37, 36, 20, 9, 12, 4, 11, 7, 3],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "účasť", "účasť", "účasť", "iniciatívy", "iniciatívy", "prednášky", "prednášky", "organizácia", "organizácia"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 214, 16)', 'rgb(255, 174, 16)', 'rgb(255, 134, 16', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(0, 230, 0)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>139 osôb<br>", "<b>účasť</b><br>93 osôb<br>66.9% prítomných<br>", "<b>iniciatívy</b><br>21 osôb<br>15.1% prítomných<br>", "<b>prednášky</b><br>15 osôb<br>10.8% prítomných<br>", "<b>organizácia</b><br>10 osôb<br>7.2% prítomných<br>", "<b>účasť</b><br>37 žien<br>26.6% prítomných<br>", "<b>účasť</b><br>36 mužov<br>25.9% prítomných<br>", "<b>bez registrácie</b><br>20 osôb<br>14.4% prítomných<br>", "<b>iniciatívy</b><br>9 žien<br>6.5% prítomných<br>", "<b>iniciatívy</b><br>12 mužov<br>8.6% prítomných<br>", "<b>prednášky</b><br>4 ženy<br>2.9% prítomných<br>", "<b>prednášky</b><br>11 mužov<br>7.9% prítomných<br>", "<b>organizácia</b><br>7 žien<br>5.0% prítomných<br>", "<b>organizácia</b><br>3 muži<br>2.2% prítomných<br>"]
},
// participation_detail 2017
{
	type: "sunburst",
	ids: ["všetci", "účasť", "prednášky", "organizácia", "účastníčky", "účastníci", "bez registrácie", "aktívne účastníčky", "aktívni účastníci", "organizátorky", "organizátori"],
	labels: ["iba prítomní", "účasť", "prednášky", "organizácia", "ženy", "muži", "bez registrácie", "ženy", "muži", "ženy", "muži"],
	values: [156, 133, 5, 18, 49, 59, 25, 1, 4, 7, 11],
	parents: ["", "všetci", "všetci", "všetci", "účasť", "účasť", "účasť", "prednášky", "prednášky", "organizácia", "organizácia"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(255, 174, 16)', 'rgb(255, 134, 16', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(0, 230, 0)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>156 osôb<br>", "<b>účasť</b><br>133 osôb<br>85.3% prítomných<br>", "<b>prednášky</b><br>5 osôb<br>3.2% prítomných<br>", "<b>organizácia</b><br>18 osôb<br>11.5% prítomných<br>", "<b>účasť</b><br>49 žien<br>31.4% prítomných<br>", "<b>účasť</b><br>59 mužov<br>37.8% prítomných<br>", "<b>bez registrácie</b><br>25 osôb<br>16.0% prítomných<br>", "<b>prednášky</b><br>1 žena<br>0.6% prítomných<br>", "<b>prednášky</b><br>4 muži<br>2.6% prítomných<br>", "<b>organizácia</b><br>7 žien<br>4.5% prítomných<br>", "<b>organizácia</b><br>11 mužov<br>7.1% prítomných<br>"]
}];

var data_abroad = [
// abroad 2022
{
	type: "sunburst",
	ids: ["všetci", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "muži (SR)", "ženy (SR)", "muži (NA)", "ženy (NA)", "muži (oboje)", "ženy (oboje", "muži (zahr.)", "ženy (zahr.)"],
	labels: ["iba prítomní", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "muži", "ženy", "muži", "ženy", "muži", "ženy", "muži", "ženy"],
	values: [156, 82, 3, 49, 22, 40, 42, 8, 14, 2, 1, 16, 33],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "Slovensko", "Slovensko", "neuvedené", "neuvedené", "SR a zahraničie", "SR a zahraničie", "zahraničie", "zahraničie"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania</b><br>156 osôb<br>", "<b>Slovensko</b><br>82 osôb<br>52.6% registrovaných", "<b>SR a zahraničie</b><br>3 osoby<br>1.9% registrovaných", "<b>zahraničie</b><br>49 osôb<br>31.4% registrovaných", "<b>neuvedené</b><br>22 osôb<br>14.1% registrovaných", "<b>Slovensko</b><br>40 mužov<br>25.6% registrovaných", "<b>Slovensko</b><br>42 žien<br>26.9% registrovaných", "<b>neuvedené</b><br>8 mužov<br>5.1% registrovaných", "<b>neuvedené</b><br>14 žien<br>9.0% registrovaných", "<b>SR a zahraničie</b><br>2 muži<br>1.3% registrovaných", "<b>SR a zahraničie</b><br>1 žena<br>0.6% registrovaných", "<b>zahraničie</b><br>16 mužov<br>10.3% registrovaných", "<b>zahraničie</b><br>33 žien<br>21.2% registrovaných"]
},
// abroad 2021
{
	type: "sunburst",
	ids: ["všetci", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "nesúhlas", "muži (SR)", "ženy (SR)", "ženy (NA)", "muži (oboje)", "ženy (oboje", "muži (zahr.)", "ženy (zahr.)"],
	labels: ["iba prítomní", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "nesúhlas s analýzou", "muži", "ženy", "ženy", "muži", "ženy", "muži", "ženy"],
	values: [194, 119, 11, 60, 1, 3, 43, 76, 1, 6, 5, 17, 43],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "Slovensko", "Slovensko", "neuvedené", "SR a zahraničie", "SR a zahraničie", "zahraničie", "zahraničie"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(200, 200, 200)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania</b><br>194 osôb<br>", "<b>Slovensko</b><br>119 osôb<br>61.3% registrovaných", "<b>SR a zahraničie</b><br>11 osôb<br>5.7% registrovaných", "<b>zahraničie</b><br>60 osôb<br>30.9% registrovaných", "<b>neuvedené</b><br>1 osoba<br>0.5% registrovaných", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.5% registrovaných", "<b>Slovensko</b><br>43 mužov<br>22.2% registrovaných", "<b>Slovensko</b><br>76 žien<br>39.2% registrovaných", "<b>neuvedené</b><br>1 žena<br>0.5% registrovaných", "<b>SR a zahraničie</b><br>6 mužov<br>3.1% registrovaných", "<b>SR a zahraničie</b><br>5 žien<br>2.6% registrovaných", "<b>zahraničie</b><br>17 mužov<br>8.8% registrovaných", "<b>zahraničie</b><br>43 žien<br>22.2% registrovaných"]
},
// abroad 2019
{
	type: "sunburst",
	ids: ["všetci", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "nesúhlas", "bez dát"],
	labels: ["iba prítomní", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "nesúhlas s analýzou", "bez registrácie"],
	values: [229, 145, 10, 39, 32, 3, 20],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "neuvedené"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(200, 200, 200)', 'rgb(0, 230, 0)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>dáta z prihlasovania + neregistrovaní účastníci</b><br>229 osôb<br>", "<b>Slovensko</b><br>145 osôb<br>63.3% z celkového počtu", "<b>SR a zahraničie</b><br>10 osôb<br>4.4% z celkového počtu", "<b>zahraničie</b><br>39 osôb<br>17.0% z celkového počtu", "<b>neuvedené</b><br>32 osôb<br>14.0% z celkového počtu", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.3% z celkového počtu", "<b>bez registrácie</b><br>20 osôb<br>"]
},
// abroad 2018
{
	type: "sunburst",
	ids: ["všetci", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "muži (SR)", "ženy (SR)", "muži (NA)", "ženy (NA)", "bez dát", "muži (oboje)", "muži (zahr.)", "ženy (zahr.)"],
	labels: ["iba prítomní", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "muži", "ženy", "muži", "ženy", "bez registrácie", "muži", "muži", "ženy"],
	values: [139, 70, 1, 27, 41, 35, 35, 14, 7, 20, 1, 13, 14],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "Slovensko", "Slovensko", "neuvedené", "neuvedené", "neuvedené", "SR a zahraničie", "zahraničie", "zahraničie"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 230, 0)', 'rgb(0, 77, 230)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>139 osôb<br>", "<b>Slovensko</b><br>70 osôb<br>50.4% prítomných<br>", "<b>SR a zahraničie</b><br>1 osoba<br>0.7% prítomných<br>", "<b>zahraničie</b><br>27 osôb<br>19.4% prítomných<br>", "<b>neuvedené</b><br>41 osôb<br>29.5% prítomných<br>", "<b>Slovensko</b><br>35 mužov<br>25.2% prítomných<br>", "<b>Slovensko</b><br>35 žien<br>25.2% prítomných<br>", "<b>neuvedené</b><br>14 mužov<br>10.1% prítomných<br>", "<b>neuvedené</b><br>7 žien<br>5.0% prítomných<br>", "<b>bez registrácie</b><br>20 osôb<br>14.4% prítomných<br>", "<b>SR a zahraničie</b><br>1 muž<br>0.7% prítomných<br>", "<b>zahraničie</b><br>13 mužov<br>9.4% prítomných<br>", "<b>zahraničie</b><br>14 žien<br>10.1% prítomných<br>"]
},
// abroad 2017
{
	type: "sunburst",
	ids: ["všetci", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "muži (SR)", "ženy (SR)", "muži (NA)", "bez dát", "muži (oboje)", "muži (zahr.)", "ženy (zahr.)"],
	labels: ["iba prítomní", "Slovensko", "SR a zahraničie", "zahraničie", "neuvedené", "muži", "ženy", "muži", "bez registrácie", "muži", "muži", "ženy"],
	values: [156, 74, 4, 48, 30, 38, 36, 5, 25, 4, 27, 21],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "Slovensko", "Slovensko", "neuvedené", "neuvedené", "SR a zahraničie", "zahraničie", "zahraničie"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)', 'rgb(0, 77, 230)', 'rgb(0, 230, 0)', 'rgb(0, 77, 230)', 'rgb(0, 77, 230)', 'rgb(230, 0, 0)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba prítomní</b><br>156 osôb<br>", "<b>Slovensko</b><br>74 osôb<br>47.4% prítomných<br>", "<b>SR a zahraničie</b><br>4 osoby<br>2.6% prítomných<br>", "<b>zahraničie</b><br>48 osôb<br>30.8% prítomných<br>", "<b>neuvedené</b><br>30 osôb<br>19.2% prítomných<br>", "<b>Slovensko</b><br>38 mužov<br>24.4% prítomných<br>", "<b>Slovensko</b><br>36 žien<br>23.1% prítomných<br>", "<b>neuvedené</b><br>5 mužov<br>3.2% prítomných<br>", "<b>bez registrácie</b><br>25 osôb<br>16.0% prítomných<br>", "<b>SR a zahraničie</b><br>4 muži<br>2.6% prítomných<br>", "<b>zahraničie</b><br>27 mužov<br>17.3% prítomných<br>", "<b>zahraničie</b><br>21 žien<br>13.5% prítomných<br>"]
}];

var data_subject = [
// subject 2022
{
	type: "sunburst",
	ids: ["všetci", "STEM", "SSH", "iné", "neuvedené", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra, urbanizmus", "vedy o Zemi", "ekologické a environmentálne vedy", "STEM nezaradené", "filológia", "psychológia", "sociológia", "politické vedy", "ekonómia a manažment", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "projektový manažment", "popularizácia", "štátna správa", "nezaradené", "iné neuvedené", "neuvedené (neuvedené)"],
	labels: ["iba dáta z registrácie", "STEM", "SSH", "iné", "neuvedené", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra, urbanizmus", "vedy o Zemi", "ekologické a environmentálne vedy", "nezaradené", "filológia", "psychológia", "sociológia", "politické vedy", "ekonómia a manažment", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "projektový manažment", "popularizácia", "štátna správa", "nezaradené", "neuvedené", "neuvedené"],
	values: [156, 102, 15, 18, 21, 3, 5, 13, 5, 2, 3, 2, 3, 3, 15, 1, 6, 7, 2, 12, 6, 5, 2, 4, 3, 3, 8, 2, 1, 1, 8, 3, 1, 2, 1, 1, 1, 1, 21],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "SSH", "SSH", "SSH", "SSH", "SSH", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "neuvedené"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(0, 102, 102)', 'rgb(204, 0, 0)', 'rgb(62, 0, 62)', 'rgb(124, 124, 124)', 'rgb(53, 104, 0)', 'rgb(82, 163, 0)', 'rgb(102, 204, 0)', 'rgb(222, 222, 92)', 'rgb(255, 238, 153)', 'rgb(255,247,126)', 'rgb(255, 255, 98)', 'rgb(255, 255, 0)', 'rgb(255, 204, 0)', 'rgb(255, 128, 0)', 'rgb(204, 101, 0)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(0, 0, 255)', 'rgb(0, 128, 255)', 'rgb(136, 136, 136)', 'rgb(175, 175, 175)', 'rgb(75, 37, 0)', 'rgb(89, 121, 0)', 'rgb(0, 102, 102)', 'rgb(153, 0, 76)', 'rgb(214, 48, 90)', 'rgb(214, 48, 48)', 'rgb(218, 94, 69)', 'rgb(218, 106, 69)', 'rgb(82, 0, 82)', 'rgb(107, 0, 107)', 'rgb(132, 0, 132)', 'rgb(152, 0, 152)', 'rgb(162, 0, 162)', 'rgb(172, 0, 172)', 'rgb(62, 0, 62)', 'rgb(62, 0, 62)', 'rgb(124, 124, 124)']
	},
	branchvalues: 'total',
	visible: true,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba dáta z registrácie</b><br>156 osôb<br>", "<b>STEM</b><br>102 osôb<br>65.4% registrovaných", "<b>SSH</b><br>15 osôb<br>9.6% registrovaných", "<b>iné</b><br>18 osôb<br>11.5% registrovaných", "<b>neuvedené</b><br>21 osôb<br>13.5% registrovaných", "<b>genetika</b><br>3 osoby<br>1.9% registrovaných", "<b>molekulárna biológia</b><br>5 osôb<br>3.2% registrovaných", "<b>biológia</b><br>13 osôb<br>8.3% registrovaných", "<b>biochémia</b><br>5 osôb<br>3.2% registrovaných", "<b>biofyzika</b><br>2 osoby<br>1.3% registrovaných", "<b>bioinformatika</b><br>3 osoby<br>1.9% registrovaných", "<b>biomedicína</b><br>2 osoby<br>1.3% registrovaných", "<b>biotechnológie, biomateriály</b><br>3 osoby<br>1.9% registrovaných", "<b>neurovedy</b><br>3 osoby<br>1.9% registrovaných", "<b>medicína, lekárske vedy</b><br>15 osôb<br>9.6% registrovaných", "<b>farmácia</b><br>1 osoba<br>0.6% registrovaných", "<b>chémia</b><br>6 osôb<br>3.8% registrovaných", "<b>fyzika</b><br>7 osôb<br>4.5% registrovaných", "<b>matematika</b><br>2 osoby<br>1.3% registrovaných", "<b>IT</b><br>12 osôb<br>7.7% registrovaných", "<b>technológie</b><br>6 osôb<br>3.8% registrovaných", "<b>stavebné inžinierstvo, architektúra, urbanizmus</b><br>5 osôb<br>3.2% registrovaných", "<b>vedy o Zemi</b><br>2 osoby<br>1.3% registrovaných", "<b>ekologické a environmentálne vedy</b><br>4 osoby<br>2.6% registrovaných", "<b>nezaradené</b><br>3 osoby<br>1.9% registrovaných", "<b>filológia</b><br>3 osoby<br>1.9% registrovaných", "<b>psychológia</b><br>8 osôb<br>5.1% registrovaných", "<b>sociológia</b><br>2 osoby<br>1.3% registrovaných", "<b>politické vedy</b><br>1 osoba<br>0.6% registrovaných", "<b>ekonómia a manažment</b><br>1 osoba<br>0.6% registrovaných", "<b>podpora výskumu</b><br>8 osôb<br>5.1% registrovaných", "<b>otvorená veda</b><br>3 osoby<br>1.9% registrovaných", "<b>vzdelávanie, poradenstvo</b><br>1 osoba<br>0.6% registrovaných", "<b>projektový manažment</b><br>2 osoby<br>1.3% registrovaných", "<b>popularizácia</b><br>1 osoba<br>0.6% registrovaných", "<b>štátna správa</b><br>1 osoba<br>0.6% registrovaných", "<b>nezaradené</b><br>1 osoba<br>0.6% registrovaných", "<b>neuvedené</b><br>1 osoba<br>0.6% registrovaných", "<b>neuvedené</b><br>21 osôb<br>13.5% registrovaných"]
},
// subject 2021
{
	type: "sunburst",
	ids: ["všetci", "nesúhlas", "STEM", "SSH", "iné", "neuvedené", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra, urbanizmus", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "STEM neuvedené", "knižničná a informačná veda", "digital humanities", "história, pomocné vedy historické", "archeológia", "religionistika", "psychológia", "didaktika", "sociálna práca", "sociológia", "politické vedy", "ekonómia a manažment", "SSH nezaradené", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "projektový manažment", "popularizácia", "štátna správa", "nezaradené", "iné neuvedené", "neuvedené (neuvedené)"],
	labels: ["iba dáta z registrácie", "nesúhlas s analýzou", "STEM", "SSH", "iné", "neuvedené", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra, urbanizmus", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "neuvedené", "knižničná a informačná veda", "digital humanities", "história, pomocné vedy historické", "archeológia", "religionistika", "psychológia", "didaktika", "sociálna práca", "sociológia", "politické vedy", "ekonómia a manažment", "nezaradené", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "projektový manažment", "popularizácia", "štátna správa", "nezaradené", "neuvedené", "neuvedené"],
	values: [194, 3, 125, 37, 24, 5, 8, 17, 18, 3, 4, 2, 1, 1, 4, 17, 3, 7, 10, 3, 7, 8, 2, 1, 1, 7, 1, 3, 1, 8, 1, 1, 7, 1, 1, 1, 6, 6, 1, 6, 5, 4, 3, 2, 1, 1, 2, 5],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "všetci", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "neuvedené"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(200, 200, 200)', 'rgb(0, 102, 102)', 'rgb(204, 0, 0)', 'rgb(62, 0, 62)', 'rgb(124, 124, 124)', 'rgb(53, 104, 0)', 'rgb(82, 163, 0)', 'rgb(102, 204, 0)', 'rgb(222, 222, 92)', 'rgb(255, 238, 153)', 'rgb(255,247,126)', 'rgb(255, 255, 98)', 'rgb(255, 255, 0)', 'rgb(255, 204, 0)', 'rgb(255, 128, 0)', 'rgb(204, 101, 0)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(0, 0, 255)', 'rgb(0, 128, 255)', 'rgb(136, 136, 136)', 'rgb(175, 175, 175)', 'rgb(36, 18, 0)', 'rgb(75, 37, 0)', 'rgb(89, 121, 0)', 'rgb(0, 102, 102)', 'rgb(77, 64, 83)', 'rgb(102, 51, 77)', 'rgb(145,0,73)', 'rgb(204, 0, 102)', 'rgb(153, 0, 76)', 'rgb(214, 48, 90)', 'rgb(214, 48, 62)', 'rgb(209, 24, 31)', 'rgb(214, 48, 48)', 'rgb(218, 94, 69)', 'rgb(218, 106, 69)', 'rgb(204, 0, 0)', 'rgb(82, 0, 82)', 'rgb(107, 0, 107)', 'rgb(132, 0, 132)', 'rgb(152, 0, 152)', 'rgb(162, 0, 162)', 'rgb(172, 0, 172)', 'rgb(62, 0, 62)', 'rgb(62, 0, 62)', 'rgb(124, 124, 124)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba dáta z registrácie</b><br>194 osôb<br>", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.5% registrovaných", "<b>STEM</b><br>125 osôb<br>64.4% registrovaných", "<b>SSH</b><br>37 osôb<br>19.1% registrovaných", "<b>iné</b><br>24 osôb<br>12.4% registrovaných", "<b>neuvedené</b><br>5 osôb<br>2.6% registrovaných", "<b>genetika</b><br>8 osôb<br>4.1% registrovaných", "<b>molekulárna biológia</b><br>17 osôb<br>8.8% registrovaných", "<b>biológia</b><br>18 osôb<br>9.3% registrovaných", "<b>biochémia</b><br>3 osoby<br>1.5% registrovaných", "<b>biofyzika</b><br>4 osoby<br>2.1% registrovaných", "<b>bioinformatika</b><br>2 osoby<br>1.0% registrovaných", "<b>biomedicína</b><br>1 osoba<br>0.5% registrovaných", "<b>biotechnológie, biomateriály</b><br>1 osoba<br>0.5% registrovaných", "<b>neurovedy</b><br>4 osoby<br>2.1% registrovaných", "<b>medicína, lekárske vedy</b><br>17 osôb<br>8.8% registrovaných", "<b>farmácia</b><br>3 osoby<br>1.5% registrovaných", "<b>chémia</b><br>7 osôb<br>3.6% registrovaných", "<b>fyzika</b><br>10 osôb<br>5.2% registrovaných", "<b>matematika</b><br>3 osoby<br>1.5% registrovaných", "<b>IT</b><br>7 osôb<br>3.6% registrovaných", "<b>technológie</b><br>8 osôb<br>4.1% registrovaných", "<b>stavebné inžinierstvo, architektúra, urbanizmus</b><br>2 osoby<br>1.0% registrovaných", "<b>geopriestorové vedy</b><br>1 osoba<br>0.5% registrovaných", "<b>vedy o Zemi</b><br>1 osoba<br>0.5% registrovaných", "<b>ekologické a environmentálne vedy</b><br>7 osôb<br>3.6% registrovaných", "<b>neuvedené</b><br>1 osoba<br>0.5% registrovaných", "<b>knižničná a informačná veda</b><br>3 osoby<br>1.5% registrovaných", "<b>digital humanities</b><br>1 osoba<br>0.5% registrovaných", "<b>história, pomocné vedy historické</b><br>8 osôb<br>4.1% registrovaných", "<b>archeológia</b><br>1 osoba<br>0.5% registrovaných", "<b>religionistika</b><br>1 osoba<br>0.5% registrovaných", "<b>psychológia</b><br>7 osôb<br>3.6% registrovaných", "<b>didaktika</b><br>1 osoba<br>0.5% registrovaných", "<b>sociálna práca</b><br>1 osoba<br>0.5% registrovaných", "<b>sociológia</b><br>1 osoba<br>0.5% registrovaných", "<b>politické vedy</b><br>6 osôb<br>3.1% registrovaných", "<b>ekonómia a manažment</b><br>6 osôb<br>3.1% registrovaných", "<b>nezaradené</b><br>1 osoba<br>0.5% registrovaných", "<b>podpora výskumu</b><br>6 osôb<br>3.1% registrovaných", "<b>otvorená veda</b><br>5 osôb<br>2.6% registrovaných", "<b>vzdelávanie, poradenstvo</b><br>4 osoby<br>2.1% registrovaných", "<b>projektový manažment</b><br>3 osoby<br>1.5% registrovaných", "<b>popularizácia</b><br>2 osoby<br>1.0% registrovaných", "<b>štátna správa</b><br>1 osoba<br>0.5% registrovaných", "<b>nezaradené</b><br>1 osoba<br>0.5% registrovaných", "<b>neuvedené</b><br>2 osoby<br>1.0% registrovaných", "<b>neuvedené</b><br>5 osôb<br>2.6% registrovaných"]
},
// subject 2019
{
	type: "sunburst",
	ids: ["všetci", "nesúhlas", "STEM", "SSH", "iné", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra, urbanizmus", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "STEM neuvedené", "knižničná a informačná veda", "digital humanities", "história, pomocné vedy historické", "archeológia", "antropológia", "vedy o umení a kultúre", "psychológia", "didaktika", "politické vedy", "ekonómia a manažment", "SSH nezaradené", "podpora výskumu (STEM)", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "projektový manažment", "médiá", "nezaradené"],
	labels: ["iba dáta z registrácie", "nesúhlas s analýzou", "STEM", "SSH", "iné", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra, urbanizmus", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "neuvedené", "knižničná a informačná veda", "digital humanities", "história, pomocné vedy historické", "archeológia", "antropológia", "vedy o umení a kultúre", "psychológia", "didaktika", "politické vedy", "ekonómia a manažment", "nezaradené", "podpora výskumu (STEM)", "podpora výskumu", "otvorená veda", "vzdelávanie, poradenstvo", "projektový manažment", "médiá", "nezaradené"],
	values: [158, 3, 113, 29, 13, 12, 9, 12, 6, 2, 2, 2, 3, 15, 10, 6, 4, 9, 7, 3, 6, 2, 2, 1, 1, 2, 2, 3, 3, 1, 3, 2, 3, 7, 2, 1, 4, 1, 3, 2, 1, 1],
	parents: ["", "všetci", "všetci", "všetci", "všetci", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "iné", "iné", "iné", "iné", "iné", "iné", "iné"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(200, 200, 200)', 'rgb(0, 102, 102)', 'rgb(204, 0, 0)', 'rgb(62, 0, 62)', 'rgb(53, 104, 0)', 'rgb(82, 163, 0)', 'rgb(102, 204, 0)', 'rgb(222, 222, 92)', 'rgb(255, 238, 153)', 'rgb(255,247,126)', 'rgb(255, 255, 0)', 'rgb(255, 204, 0)', 'rgb(255, 128, 0)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(0, 0, 255)', 'rgb(0, 128, 255)', 'rgb(136, 136, 136)', 'rgb(175, 175, 175)', 'rgb(36, 18, 0)', 'rgb(75, 37, 0)', 'rgb(89, 121, 0)', 'rgb(0, 102, 102)', 'rgb(77, 64, 83)', 'rgb(102, 51, 77)', 'rgb(145,0,73)', 'rgb(204, 0, 102)', 'rgb(255, 47, 151)', 'rgb(184, 24, 83)', 'rgb(214, 48, 90)', 'rgb(214, 48, 62)', 'rgb(218, 94, 69)', 'rgb(218, 106, 69)', 'rgb(204, 0, 0)', 'rgb(31, 51, 82)', 'rgb(82, 0, 82)', 'rgb(107, 0, 107)', 'rgb(132, 0, 132)', 'rgb(152, 0, 152)', 'rgb(172, 0, 172)', 'rgb(62, 0, 62)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba dáta z registrácie</b><br>158 osôb<br>", "<b>nesúhlas s analýzou</b><br>3 osoby<br>1.9% online registrácií", "<b>STEM</b><br>113 osôb<br>71.5% online registrácií", "<b>SSH</b><br>29 osôb<br>18.4% online registrácií", "<b>iné</b><br>13 osôb<br>8.2% online registrácií", "<b>genetika</b><br>12 osôb<br>7.6% online registrácií", "<b>molekulárna biológia</b><br>9 osôb<br>5.7% online registrácií", "<b>biológia</b><br>12 osôb<br>7.6% online registrácií", "<b>biochémia</b><br>6 osôb<br>3.8% online registrácií", "<b>biofyzika</b><br>2 osoby<br>1.3% online registrácií", "<b>bioinformatika</b><br>2 osoby<br>1.3% online registrácií", "<b>biotechnológie, biomateriály</b><br>2 osoby<br>1.3% online registrácií", "<b>neurovedy</b><br>3 osoby<br>1.9% online registrácií", "<b>medicína, lekárske vedy</b><br>15 osôb<br>9.5% online registrácií", "<b>chémia</b><br>10 osôb<br>6.3% online registrácií", "<b>fyzika</b><br>6 osôb<br>3.8% online registrácií", "<b>matematika</b><br>4 osoby<br>2.5% online registrácií", "<b>IT</b><br>9 osôb<br>5.7% online registrácií", "<b>technológie</b><br>7 osôb<br>4.4% online registrácií", "<b>stavebné inžinierstvo, architektúra, urbanizmus</b><br>3 osoby<br>1.9% online registrácií", "<b>geopriestorové vedy</b><br>6 osôb<br>3.8% online registrácií", "<b>vedy o Zemi</b><br>2 osoby<br>1.3% online registrácií", "<b>ekologické a environmentálne vedy</b><br>2 osoby<br>1.3% online registrácií", "<b>neuvedené</b><br>1 osoba<br>0.6% online registrácií", "<b>knižničná a informačná veda</b><br>1 osoba<br>0.6% online registrácií", "<b>digital humanities</b><br>2 osoby<br>1.3% online registrácií", "<b>história, pomocné vedy historické</b><br>2 osoby<br>1.3% online registrácií", "<b>archeológia</b><br>3 osoby<br>1.9% online registrácií", "<b>antropológia</b><br>3 osoby<br>1.9% online registrácií", "<b>vedy o umení a kultúre</b><br>1 osoba<br>0.6% online registrácií", "<b>psychológia</b><br>3 osoby<br>1.9% online registrácií", "<b>didaktika</b><br>2 osoby<br>1.3% online registrácií", "<b>politické vedy</b><br>3 osoby<br>1.9% online registrácií", "<b>ekonómia a manažment</b><br>7 osôb<br>4.4% online registrácií", "<b>nezaradené</b><br>2 osoby<br>1.3% online registrácií", "<b>podpora výskumu (STEM)</b><br>1 osoba<br>0.6% online registrácií", "<b>podpora výskumu</b><br>4 osoby<br>2.5% online registrácií", "<b>otvorená veda</b><br>1 osoba<br>0.6% online registrácií", "<b>vzdelávanie, poradenstvo</b><br>3 osoby<br>1.9% online registrácií", "<b>projektový manažment</b><br>2 osoby<br>1.3% online registrácií", "<b>médiá</b><br>1 osoba<br>0.6% online registrácií", "<b>nezaradené</b><br>1 osoba<br>0.6% online registrácií"]
},
// subject 2018
{
	type: "sunburst",
	ids: ["všetci", "prítomní", "neprítomní", "STEM", "SSH", "iné", "iniciatívy", "STEM (neprítomní)", "SSH (neprítomní)", "iné (neprítomní)", "iniciatívy (neprítomní)", "genetika", "molekulárna biológia", "biológia", "biochémia", "bioinformatika", "biomedicína", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra, urbanizmus", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "STEM neuvedené", "história, pomocné vedy historické", "archeológia", "antropológia", "filológia", "vedy o umení a kultúre", "psychológia", "didaktika", "sociológia", "politické vedy", "SSH neuvedené", "podpora výskumu (STEM)", "podpora výskumu", "vzdelávanie, poradenstvo", "projektový manažment", "štátna správa", "nezaradené", "iné neuvedené", "iniciatíva (podpora výskumu)", "iniciatíva (podpora výskumu (STEM))", "iniciatíva (práca s mládežou (STEM))", "iniciatíva (práca s mládežou)", "iniciatíva (vzdelávanie, poradenstvo)", "iniciatíva (chémia)", "iniciatíva (neuvedené)"],
	labels: ["iba dáta z registrácie", "prítomní", "neprítomní", "STEM", "SSH", "iné", "iniciatívy", "STEM", "SSH", "iné", "iniciatívy", "genetika", "molekulárna biológia", "biológia", "biochémia", "bioinformatika", "biomedicína", "neurovedy", "medicína, lekárske vedy", "farmácia", "chémia", "fyzika", "matematika", "IT", "technológie", "stavebné inžinierstvo, architektúra, urbanizmus", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "neuvedené", "história, pomocné vedy historické", "archeológia", "antropológia", "filológia", "vedy o umení a kultúre", "psychológia", "didaktika", "sociológia", "politické vedy", "neuvedené", "podpora výskumu (STEM)", "podpora výskumu", "vzdelávanie, poradenstvo", "projektový manažment", "štátna správa", "nezaradené", "neuvedené", "podpora výskumu", "podpora výskumu (STEM)", "práca s mládežou (STEM)", "práca s mládežou", "vzdelávanie, poradenstvo", "chémia", "neuvedené"],
	values: [157, 119, 38, 66, 21, 11, 21, 33, 2, 1, 2, 9, 8, 4, 8, 1, 2, 4, 2, 1, 5, 4, 2, 2, 2, 1, 2, 2, 1, 6, 1, 4, 3, 1, 1, 2, 1, 2, 2, 4, 1, 1, 1, 1, 1, 1, 5, 8, 2, 4, 3, 1, 1, 2],
	parents: ["", "všetci", "všetci", "prítomní", "prítomní", "prítomní", "prítomní", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "iné", "iné", "iné", "iné", "iné", "iné", "iné", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy", "iniciatívy"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(190, 190, 190)', 'rgb(0, 102, 102)', 'rgb(204, 0, 0)', 'rgb(62, 0, 62)', 'rgb(82, 0, 82)', 'rgb(95, 146, 146)', 'rgb(197, 95, 95)', 'rgb(126,95,126)', 'rgb(82, 0, 82)', 'rgb(53, 104, 0)', 'rgb(82, 163, 0)', 'rgb(102, 204, 0)', 'rgb(222, 222, 92)', 'rgb(255,247,126)', 'rgb(255, 255, 98)', 'rgb(255, 204, 0)', 'rgb(255, 128, 0)', 'rgb(204, 101, 0)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(0, 0, 255)', 'rgb(0, 128, 255)', 'rgb(136, 136, 136)', 'rgb(175, 175, 175)', 'rgb(36, 18, 0)', 'rgb(75, 37, 0)', 'rgb(89, 121, 0)', 'rgb(0, 102, 102)', 'rgb(145,0,73)', 'rgb(204, 0, 102)', 'rgb(255, 47, 151)', 'rgb(153, 0, 76)', 'rgb(184, 24, 83)', 'rgb(214, 48, 90)', 'rgb(214, 48, 62)', 'rgb(214, 48, 48)', 'rgb(218, 94, 69)', 'rgb(204, 0, 0)', 'rgb(31, 51, 82)', 'rgb(82, 0, 82)', 'rgb(132, 0, 132)', 'rgb(152, 0, 152)', 'rgb(172, 0, 172)', 'rgb(62, 0, 62)', 'rgb(62, 0, 62)', 'rgb(82, 0, 82)', 'rgb(31, 51, 82)', 'rgb(36, 77, 112)', 'rgb(142, 0, 142)', 'rgb(132, 0, 132)', 'rgb(204, 101, 0)', 'rgb(124, 124, 124)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba dáta z registrácie</b><br>157 osôb<br>", "119 prítomných<br>75.8% registrovaných", "38 neprítomných<br>24.2% registrovaných", "<b>STEM</b><br>66 osôb<br>55.5% prítomných<br>42.0% registrovaných", "<b>SSH</b><br>21 osôb<br>17.6% prítomných<br>13.4% registrovaných", "<b>iné</b><br>11 osôb<br>9.2% prítomných<br>7.0% registrovaných", "<b>iniciatívy</b><br>21 osôb<br>17.6% prítomných<br>13.4% registrovaných", "<b>STEM</b><br>33 osôb<br>21.0% registrovaných", "<b>SSH</b><br>2 osoby<br>1.3% registrovaných", "<b>iné</b><br>1 osoba<br>0.6% registrovaných", "<b>iniciatívy</b><br>2 osoby<br>1.3% registrovaných", "<b>genetika</b><br>9 osôb<br>7.6% prítomných<br>5.7% registrovaných", "<b>molekulárna biológia</b><br>8 osôb<br>6.7% prítomných<br>5.1% registrovaných", "<b>biológia</b><br>4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>biochémia</b><br>8 osôb<br>6.7% prítomných<br>5.1% registrovaných", "<b>bioinformatika</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>biomedicína</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>neurovedy</b><br>4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>medicína, lekárske vedy</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>farmácia</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>chémia</b><br>5 osôb<br>4.2% prítomných<br>3.2% registrovaných", "<b>fyzika</b><br>4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>matematika</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>IT</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>technológie</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>stavebné inžinierstvo, architektúra, urbanizmus</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>geopriestorové vedy</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>vedy o Zemi</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>ekologické a environmentálne vedy</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>neuvedené</b><br>6 osôb<br>5.0% prítomných<br>3.8% registrovaných", "<b>história, pomocné vedy historické</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>archeológia</b><br>4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>antropológia</b><br>3 osoby<br>2.5% prítomných<br>1.9% registrovaných", "<b>filológia</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>vedy o umení a kultúre</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>psychológia</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>didaktika</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>sociológia</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>politické vedy</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>neuvedené</b><br>4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>podpora výskumu (STEM)</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>podpora výskumu</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>vzdelávanie, poradenstvo</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>projektový manažment</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>štátna správa</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>nezaradené</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>neuvedené</b><br>5 osôb<br>4.2% prítomných<br>3.2% registrovaných", "<b>podpora výskumu</b><br>8 osôb<br>6.7% prítomných<br>5.1% registrovaných", "<b>podpora výskumu (STEM)</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných", "<b>práca s mládežou (STEM)</b><br>4 osoby<br>3.4% prítomných<br>2.5% registrovaných", "<b>práca s mládežou</b><br>3 osoby<br>2.5% prítomných<br>1.9% registrovaných", "<b>vzdelávanie, poradenstvo</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>chémia</b><br>1 osoba<br>0.8% prítomných<br>0.6% registrovaných", "<b>neuvedené</b><br>2 osoby<br>1.7% prítomných<br>1.3% registrovaných"]
},
// subject 2017
{
	type: "sunburst",
	ids: ["všetci", "prítomní", "neprítomní", "STEM", "SSH", "iné", "STEM (neprítomní)", "SSH (neprítomní)", "iné (neprítomní)", "neuvedené (neprítomní)", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "chémia", "fyzika", "matematika", "IT", "technológie", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "história, pomocné vedy historické", "archeológia", "antropológia", "psychológia", "sociológia", "politické vedy", "ekonómia a manažment", "podpora výskumu", "otvorená veda", "popularizácia", "iné neuvedené"],
	labels: ["iba dáta z registrácie", "prítomní", "neprítomní", "STEM", "SSH", "iné", "STEM", "SSH", "iné", "neuvedené", "genetika", "molekulárna biológia", "biológia", "biochémia", "biofyzika", "bioinformatika", "biomedicína", "biotechnológie, biomateriály", "neurovedy", "medicína, lekárske vedy", "chémia", "fyzika", "matematika", "IT", "technológie", "geopriestorové vedy", "vedy o Zemi", "ekologické a environmentálne vedy", "história, pomocné vedy historické", "archeológia", "antropológia", "psychológia", "sociológia", "politické vedy", "ekonómia a manažment", "podpora výskumu", "otvorená veda", "popularizácia", "neuvedené"],
	values: [199, 131, 68, 115, 11, 5, 49, 16, 2, 1, 7, 15, 12, 11, 1, 1, 4, 4, 6, 8, 5, 19, 3, 2, 5, 7, 2, 3, 1, 3, 2, 1, 1, 2, 1, 1, 1, 1, 2],
	parents: ["", "všetci", "všetci", "prítomní", "prítomní", "prítomní", "neprítomní", "neprítomní", "neprítomní", "neprítomní", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "STEM", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "SSH", "iné", "iné", "iné", "iné"],
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
		colors: ['rgb(255, 255, 255)', 'rgb(255, 254, 16)', 'rgb(190, 190, 190)', 'rgb(0, 102, 102)', 'rgb(204, 0, 0)', 'rgb(62, 0, 62)', 'rgb(95, 146, 146)', 'rgb(197, 95, 95)', 'rgb(126,95,126)', 'rgb(157, 157, 157)', 'rgb(53, 104, 0)', 'rgb(82, 163, 0)', 'rgb(102, 204, 0)', 'rgb(222, 222, 92)', 'rgb(255, 238, 153)', 'rgb(255,247,126)', 'rgb(255, 255, 98)', 'rgb(255, 255, 0)', 'rgb(255, 204, 0)', 'rgb(255, 128, 0)', 'rgb(204, 101, 0)', 'rgb(25, 0, 49)', 'rgb(0, 0, 255)', 'rgb(0, 128, 255)', 'rgb(136, 136, 136)', 'rgb(36, 18, 0)', 'rgb(75, 37, 0)', 'rgb(89, 121, 0)', 'rgb(145,0,73)', 'rgb(204, 0, 102)', 'rgb(255, 47, 151)', 'rgb(214, 48, 90)', 'rgb(214, 48, 48)', 'rgb(218, 94, 69)', 'rgb(218, 106, 69)', 'rgb(82, 0, 82)', 'rgb(107, 0, 107)', 'rgb(162, 0, 162)', 'rgb(62, 0, 62)']
	},
	branchvalues: 'total',
	visible: false,
	sort: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>iba dáta z registrácie</b><br>199 osôb<br>", "131 prítomných<br>65.8% registrovaných", "68 neprítomných<br>34.2% registrovaných", "<b>STEM</b><br>115 osôb<br>87.8% prítomných<br>57.8% registrovaných", "<b>SSH</b><br>11 osôb<br>8.4% prítomných<br>5.5% registrovaných", "<b>iné</b><br>5 osôb<br>3.8% prítomných<br>2.5% registrovaných", "<b>STEM</b><br>49 osôb<br>24.6% registrovaných", "<b>SSH</b><br>16 osôb<br>8.0% registrovaných", "<b>iné</b><br>2 osoby<br>1.0% registrovaných", "<b>neuvedené</b><br>1 osoba<br>0.5% registrovaných", "<b>genetika</b><br>7 osôb<br>5.3% prítomných<br>3.5% registrovaných", "<b>molekulárna biológia</b><br>15 osôb<br>11.5% prítomných<br>7.5% registrovaných", "<b>biológia</b><br>12 osôb<br>9.2% prítomných<br>6.0% registrovaných", "<b>biochémia</b><br>11 osôb<br>8.4% prítomných<br>5.5% registrovaných", "<b>biofyzika</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>bioinformatika</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>biomedicína</b><br>4 osoby<br>3.1% prítomných<br>2.0% registrovaných", "<b>biotechnológie, biomateriály</b><br>4 osoby<br>3.1% prítomných<br>2.0% registrovaných", "<b>neurovedy</b><br>6 osôb<br>4.6% prítomných<br>3.0% registrovaných", "<b>medicína, lekárske vedy</b><br>8 osôb<br>6.1% prítomných<br>4.0% registrovaných", "<b>chémia</b><br>5 osôb<br>3.8% prítomných<br>2.5% registrovaných", "<b>fyzika</b><br>19 osôb<br>14.5% prítomných<br>9.5% registrovaných", "<b>matematika</b><br>3 osoby<br>2.3% prítomných<br>1.5% registrovaných", "<b>IT</b><br>2 osoby<br>1.5% prítomných<br>1.0% registrovaných", "<b>technológie</b><br>5 osôb<br>3.8% prítomných<br>2.5% registrovaných", "<b>geopriestorové vedy</b><br>7 osôb<br>5.3% prítomných<br>3.5% registrovaných", "<b>vedy o Zemi</b><br>2 osoby<br>1.5% prítomných<br>1.0% registrovaných", "<b>ekologické a environmentálne vedy</b><br>3 osoby<br>2.3% prítomných<br>1.5% registrovaných", "<b>história, pomocné vedy historické</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>archeológia</b><br>3 osoby<br>2.3% prítomných<br>1.5% registrovaných", "<b>antropológia</b><br>2 osoby<br>1.5% prítomných<br>1.0% registrovaných", "<b>psychológia</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>sociológia</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>politické vedy</b><br>2 osoby<br>1.5% prítomných<br>1.0% registrovaných", "<b>ekonómia a manažment</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>podpora výskumu</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>otvorená veda</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>popularizácia</b><br>1 osoba<br>0.8% prítomných<br>0.5% registrovaných", "<b>neuvedené</b><br>2 osoby<br>1.5% prítomných<br>1.0% registrovaných"]
}];

var data_institution_country = [
	// institution_country 2022
	{
	x: [30, 7, 12, 0, 7, 8, 0, 11, 2, 4, 1],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 30 osôb<br>19.2% registrovaných", "<b>výskum + univerzita</b><br>Slovensko: 7 osôb<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 12 osôb<br>7.7% registrovaných", "", "<b>komerčná spoločnosť</b><br>Slovensko: 7 osôb<br>4.5% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 8 osôb<br>5.1% registrovaných", "", "<b>štátna správa</b><br>Slovensko: 11 osôb<br>7.1% registrovaných", "<b>mimovládna organizácia</b><br>Slovensko: 2 osoby<br>1.3% registrovaných", "<b>iné</b><br>Slovensko: 4 osoby<br>2.6% registrovaných", "<b>neuvedené</b><br>Slovensko: 1 osoba<br>0.6% registrovaných"]
	},
	{
	x: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 1 osoba<br>0.6% registrovaných", "<b>výskum + univerzita</b><br>SR + zahraničie: 1 osoba<br>0.6% registrovaných", "<b>výskumné pracovisko</b><br>SR + zahraničie: 1 osoba<br>0.6% registrovaných", "", "", "", "", "", "", "", ""]
	},
	{
	x: [31, 6, 9, 0, 1, 1, 0, 0, 1, 0, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 31 osôb<br>19.9% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 6 osôb<br>3.8% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 9 osôb<br>5.8% registrovaných", "", "<b>komerčná spoločnosť</b><br>zahraničie: 1 osoba<br>0.6% registrovaných", "<b>podpora výskumu</b><br>zahraničie: 1 osoba<br>0.6% registrovaných", "", "", "<b>mimovládna organizácia</b><br>zahraničie: 1 osoba<br>0.6% registrovaných", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>iné</b><br>neuvedené (krajina): 1 osoba<br>0.6% registrovaných", "<b>neuvedené</b><br>neuvedené (krajina): 21 osôb<br>13.5% registrovaných"]
	},
	// institution_country 2021
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>výskum + univerzita</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>nadnárodná organizácia</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>komerčná spoločnosť</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>práca s mládežou</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>štátna správa</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>iné</b><br>Slovensko: 21 osôb<br>4.5% registrovaných", "<b>neuvedené</b><br>Slovensko: 21 osôb<br>4.5% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>výskum + univerzita</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>nadnárodná organizácia</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>komerčná spoločnosť</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>podpora výskumu</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>práca s mládežou</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>štátna správa</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>iné</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných", "<b>neuvedené</b><br>SR + zahraničie: 21 osôb<br>4.5% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>nadnárodná organizácia</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>komerčná spoločnosť</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>podpora výskumu</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>práca s mládežou</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>štátna správa</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>iné</b><br>zahraničie: 21 osôb<br>4.5% registrovaných", "<b>neuvedené</b><br>zahraničie: 21 osôb<br>4.5% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>výskum + univerzita</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>nadnárodná organizácia</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>komerčná spoločnosť</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>podpora výskumu</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>práca s mládežou</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>štátna správa</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>iné</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných", "<b>neuvedené</b><br>neuvedené (krajina): 21 osôb<br>4.5% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>nesúhlas s analýzou: 3 osoby<br>0.6% registrovaných"]
	},
	// institution_country 2019
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>výskumné pracovisko</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>výskum + univerzita</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>nadnárodná organizácia</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>komerčná spoločnosť</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>podpora výskumu</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>práca s mládežou</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>štátna správa</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>mimovládna organizácia</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>iné</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu", "<b>neuvedené</b><br>Slovensko: 19 osôb<br>4.5% z celkového počtu"]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>výskumné pracovisko</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>výskum + univerzita</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>nadnárodná organizácia</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>komerčná spoločnosť</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>podpora výskumu</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>práca s mládežou</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>štátna správa</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>mimovládna organizácia</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>iné</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>neuvedené</b><br>SR + zahraničie: 19 osôb<br>4.5% z celkového počtu"]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>výskumné pracovisko</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>výskum + univerzita</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>nadnárodná organizácia</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>komerčná spoločnosť</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>podpora výskumu</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>práca s mládežou</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>štátna správa</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>mimovládna organizácia</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>iné</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu", "<b>neuvedené</b><br>zahraničie: 19 osôb<br>4.5% z celkového počtu"]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>výskumné pracovisko</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>výskum + univerzita</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>nadnárodná organizácia</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>komerčná spoločnosť</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>podpora výskumu</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>práca s mládežou</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>štátna správa</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>mimovládna organizácia</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>iné</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu", "<b>neuvedené</b><br>neuvedené (krajina): 19 osôb<br>4.5% z celkového počtu"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>iné</b><br>nesúhlas s analýzou: 3 osoby<br>0.7% z celkového počtu", ""]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>bez dát: 19 osôb<br>", "<b>výskumné pracovisko</b><br>bez dát: 19 osôb<br>", "<b>výskum + univerzita</b><br>bez dát: 19 osôb<br>", "<b>nadnárodná organizácia</b><br>bez dát: 19 osôb<br>", "<b>komerčná spoločnosť</b><br>bez dát: 19 osôb<br>", "<b>podpora výskumu</b><br>bez dát: 19 osôb<br>", "<b>práca s mládežou</b><br>bez dát: 19 osôb<br>", "<b>štátna správa</b><br>bez dát: 19 osôb<br>", "<b>mimovládna organizácia</b><br>bez dát: 19 osôb<br>", "<b>iné</b><br>bez dát: 19 osôb<br>", "<b>neuvedené</b><br>bez dát: 19 osôb<br>"]
	},
	// institution_country 2018
	{
	x: [27, 0, 13, 0, 7, 9, 7, 2, 1, 2, 2],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 27 osôb<br>19.4% prítomných<br>17.2% registrovaných", "", "<b>výskumné pracovisko</b><br>Slovensko: 13 osôb<br>9.4% prítomných<br>8.3% registrovaných", "", "<b>komerčná spoločnosť</b><br>Slovensko: 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 9 osôb<br>6.5% prítomných<br>5.7% registrovaných", "<b>práca s mládežou</b><br>Slovensko: 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>štátna správa</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>mimovládna organizácia</b><br>Slovensko: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>iné</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>neuvedené</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných"]
	},
	{
	x: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [19, 2, 2, 0, 2, 0, 0, 0, 0, 1, 1],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 19 osôb<br>13.7% prítomných<br>12.1% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "", "<b>komerčná spoločnosť</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "", "", "", "", "<b>iné</b><br>zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>neuvedené</b><br>zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 2, 1, 0, 0, 0, 1, 17],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "<b>komerčná spoločnosť</b><br>neuvedené (krajina): 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>podpora výskumu</b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "", "", "<b>iné</b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>neuvedené</b><br>neuvedené (krajina): 17 osôb<br>12.2% prítomných<br>10.8% registrovaných"]
	},
	{
	x: [22, 2, 5, 0, 4, 2, 1, 0, 0, 2, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>22 neprítomných<br>14.0% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.3% registrovaných", "<b>výskumné pracovisko</b><br>5 neprítomných<br>3.2% registrovaných", "", "<b>komerčná spoločnosť</b><br>4 neprítomní<br>2.5% registrovaných", "<b>podpora výskumu</b><br>2 neprítomní<br>1.3% registrovaných", "<b>práca s mládežou</b><br>1 neprítomný/á<br>0.6% registrovaných", "", "", "<b>iné</b><br>2 neprítomní<br>1.3% registrovaných", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	},
	// institution_country 2017
	{
	x: [34, 1, 27, 0, 2, 5, 0, 0, 0, 4, 1],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>Slovensko: 34 osôb<br>21.8% prítomných<br>17.1% registrovaných", "<b>výskum + univerzita</b><br>Slovensko: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "<b>výskumné pracovisko</b><br>Slovensko: 27 osôb<br>17.3% prítomných<br>13.6% registrovaných", "", "<b>komerčná spoločnosť</b><br>Slovensko: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "<b>podpora výskumu</b><br>Slovensko: 5 osôb<br>3.2% prítomných<br>2.5% registrovaných", "", "", "", "<b>iné</b><br>Slovensko: 4 osoby<br>2.6% prítomných<br>2.0% registrovaných", "<b>neuvedené</b><br>Slovensko: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných"]
	},
	{
	x: [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>SR + zahraničie: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "<b>výskum + univerzita</b><br>SR + zahraničie: 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [34, 10, 3, 0, 1, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>zahraničie: 34 osôb<br>21.8% prítomných<br>17.1% registrovaných", "<b>výskum + univerzita</b><br>zahraničie: 10 osôb<br>6.4% prítomných<br>5.0% registrovaných", "<b>výskumné pracovisko</b><br>zahraničie: 3 osoby<br>1.9% prítomných<br>1.5% registrovaných", "", "<b>komerčná spoločnosť</b><br>zahraničie: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", "", "", "", ""]
	},
	{
	x: [2, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>neuvedené (krajina): 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", "", "", "<b>nadnárodná organizácia</b><br>neuvedené (krajina): 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "", "", "", "", "", "<b>iné</b><br>neuvedené (krajina): 2 osoby<br>1.3% prítomných<br>1.0% registrovaných", ""]
	},
	{
	x: [37, 2, 13, 2, 5, 3, 0, 2, 1, 2, 1],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>37 neprítomných<br>18.6% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.0% registrovaných", "<b>výskumné pracovisko</b><br>13 neprítomných<br>6.5% registrovaných", "<b>nadnárodná organizácia</b><br>2 neprítomní<br>1.0% registrovaných", "<b>komerčná spoločnosť</b><br>5 neprítomných<br>2.5% registrovaných", "<b>podpora výskumu</b><br>3 neprítomní<br>1.5% registrovaných", "", "<b>štátna správa</b><br>2 neprítomní<br>1.0% registrovaných", "<b>mimovládna organizácia</b><br>1 neprítomný/á<br>0.5% registrovaných", "<b>iné</b><br>2 neprítomní<br>1.0% registrovaných", "<b>neuvedené</b><br>1 neprítomný/á<br>0.5% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 25 osôb<br>16.0% prítomných<br>"]
	}
];

var data_institution_gender = [
	// institution_gender 2022
	{
	x: [34, 10, 11, 0, 3, 7, 0, 7, 2, 2, 14],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>34 žien<br>21.8% registrovaných", "<b>výskum + univerzita</b><br>10 žien<br>6.4% registrovaných", "<b>výskumné pracovisko</b><br>11 žien<br>7.1% registrovaných", "", "<b>komerčná spoločnosť</b><br>3 ženy<br>1.9% registrovaných", "<b>podpora výskumu</b><br>7 žien<br>4.5% registrovaných", "", "<b>štátna správa</b><br>7 žien<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>2 ženy<br>1.3% registrovaných", "<b>iné</b><br>2 ženy<br>1.3% registrovaných", "<b>neuvedené</b><br>14 žien<br>9.0% registrovaných"]
	},
	{
	x: [28, 4, 11, 0, 5, 2, 0, 4, 1, 3, 8],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>28 mužov<br>17.9% registrovaných", "<b>výskum + univerzita</b><br>4 muži<br>2.6% registrovaných", "<b>výskumné pracovisko</b><br>11 mužov<br>7.1% registrovaných", "", "<b>komerčná spoločnosť</b><br>5 mužov<br>3.2% registrovaných", "<b>podpora výskumu</b><br>2 muži<br>1.3% registrovaných", "", "<b>štátna správa</b><br>4 muži<br>2.6% registrovaných", "<b>mimovládna organizácia</b><br>1 muž<br>0.6% registrovaných", "<b>iné</b><br>3 muži<br>1.9% registrovaných", "<b>neuvedené</b><br>8 mužov<br>5.1% registrovaných"]
	},
	// institution_gender 2021
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>21 žien<br>4.5% registrovaných", "<b>výskum + univerzita</b><br>21 žien<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>21 žien<br>4.5% registrovaných", "<b>nadnárodná organizácia</b><br>21 žien<br>4.5% registrovaných", "<b>komerčná spoločnosť</b><br>21 žien<br>4.5% registrovaných", "<b>podpora výskumu</b><br>21 žien<br>4.5% registrovaných", "<b>práca s mládežou</b><br>21 žien<br>4.5% registrovaných", "<b>štátna správa</b><br>21 žien<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>21 žien<br>4.5% registrovaných", "<b>iné</b><br>21 žien<br>4.5% registrovaných", "<b>neuvedené</b><br>21 žien<br>4.5% registrovaných"]
	},
	{
	x: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>21 mužov<br>4.5% registrovaných", "<b>výskum + univerzita</b><br>21 mužov<br>4.5% registrovaných", "<b>výskumné pracovisko</b><br>21 mužov<br>4.5% registrovaných", "<b>nadnárodná organizácia</b><br>21 mužov<br>4.5% registrovaných", "<b>komerčná spoločnosť</b><br>21 mužov<br>4.5% registrovaných", "<b>podpora výskumu</b><br>21 mužov<br>4.5% registrovaných", "<b>práca s mládežou</b><br>21 mužov<br>4.5% registrovaných", "<b>štátna správa</b><br>21 mužov<br>4.5% registrovaných", "<b>mimovládna organizácia</b><br>21 mužov<br>4.5% registrovaných", "<b>iné</b><br>21 mužov<br>4.5% registrovaných", "<b>neuvedené</b><br>21 mužov<br>4.5% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>nesúhlas s analýzou: 3 osoby<br>0.6% registrovaných"]
	},
	// institution_gender 2019
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>19 žien<br>4.5% z celkového počtu", "<b>výskumné pracovisko</b><br>19 žien<br>4.5% z celkového počtu", "<b>výskum + univerzita</b><br>19 žien<br>4.5% z celkového počtu", "<b>nadnárodná organizácia</b><br>19 žien<br>4.5% z celkového počtu", "<b>komerčná spoločnosť</b><br>19 žien<br>4.5% z celkového počtu", "<b>podpora výskumu</b><br>19 žien<br>4.5% z celkového počtu", "<b>práca s mládežou</b><br>19 žien<br>4.5% z celkového počtu", "<b>štátna správa</b><br>19 žien<br>4.5% z celkového počtu", "<b>mimovládna organizácia</b><br>19 žien<br>4.5% z celkového počtu", "<b>iné</b><br>19 žien<br>4.5% z celkového počtu", "<b>neuvedené</b><br>19 žien<br>4.5% z celkového počtu"]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>19 mužov<br>4.5% z celkového počtu", "<b>výskumné pracovisko</b><br>19 mužov<br>4.5% z celkového počtu", "<b>výskum + univerzita</b><br>19 mužov<br>4.5% z celkového počtu", "<b>nadnárodná organizácia</b><br>19 mužov<br>4.5% z celkového počtu", "<b>komerčná spoločnosť</b><br>19 mužov<br>4.5% z celkového počtu", "<b>podpora výskumu</b><br>19 mužov<br>4.5% z celkového počtu", "<b>práca s mládežou</b><br>19 mužov<br>4.5% z celkového počtu", "<b>štátna správa</b><br>19 mužov<br>4.5% z celkového počtu", "<b>mimovládna organizácia</b><br>19 mužov<br>4.5% z celkového počtu", "<b>iné</b><br>19 mužov<br>4.5% z celkového počtu", "<b>neuvedené</b><br>19 mužov<br>4.5% z celkového počtu"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'nesúhlas s analýzou',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(222, 222, 222)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>iné</b><br>nesúhlas s analýzou: 3 osoby<br>0.7% z celkového počtu", ""]
	},
	{
	x: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
	y: ["univerzita", "výskumné pracovisko", "výskum + univerzita", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>bez dát: 19 osôb<br>", "<b>výskumné pracovisko</b><br>bez dát: 19 osôb<br>", "<b>výskum + univerzita</b><br>bez dát: 19 osôb<br>", "<b>nadnárodná organizácia</b><br>bez dát: 19 osôb<br>", "<b>komerčná spoločnosť</b><br>bez dát: 19 osôb<br>", "<b>podpora výskumu</b><br>bez dát: 19 osôb<br>", "<b>práca s mládežou</b><br>bez dát: 19 osôb<br>", "<b>štátna správa</b><br>bez dát: 19 osôb<br>", "<b>mimovládna organizácia</b><br>bez dát: 19 osôb<br>", "<b>iné</b><br>bez dát: 19 osôb<br>", "<b>neuvedené</b><br>bez dát: 19 osôb<br>"]
	},
	// institution_gender 2018
	{
	x: [22, 1, 9, 0, 6, 8, 1, 1, 1, 2, 5],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>22 žien<br>15.8% prítomných<br>14.0% registrovaných", "<b>výskum + univerzita</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>výskumné pracovisko</b><br>9 žien<br>6.5% prítomných<br>5.7% registrovaných", "", "<b>komerčná spoločnosť</b><br>6 žien<br>4.3% prítomných<br>3.8% registrovaných", "<b>podpora výskumu</b><br>8 žien<br>5.8% prítomných<br>5.1% registrovaných", "<b>práca s mládežou</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>štátna správa</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>mimovládna organizácia</b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>iné</b><br>2 ženy<br>1.4% prítomných<br>1.3% registrovaných", "<b>neuvedené</b><br>5 žien<br>3.6% prítomných<br>3.2% registrovaných"]
	},
	{
	x: [25, 1, 6, 0, 5, 2, 6, 1, 0, 2, 15],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>25 mužov<br>18.0% prítomných<br>15.9% registrovaných", "<b>výskum + univerzita</b><br>1 muž<br>0.7% prítomných<br>0.6% registrovaných", "<b>výskumné pracovisko</b><br>6 mužov<br>4.3% prítomných<br>3.8% registrovaných", "", "<b>komerčná spoločnosť</b><br>5 mužov<br>3.6% prítomných<br>3.2% registrovaných", "<b>podpora výskumu</b><br>2 muži<br>1.4% prítomných<br>1.3% registrovaných", "<b>práca s mládežou</b><br>6 mužov<br>4.3% prítomných<br>3.8% registrovaných", "<b>štátna správa</b><br>1 muž<br>0.7% prítomných<br>0.6% registrovaných", "", "<b>iné</b><br>2 muži<br>1.4% prítomných<br>1.3% registrovaných", "<b>neuvedené</b><br>15 mužov<br>10.8% prítomných<br>9.6% registrovaných"]
	},
	{
	x: [22, 2, 5, 0, 4, 2, 1, 0, 0, 2, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>22 neprítomných<br>14.0% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.3% registrovaných", "<b>výskumné pracovisko</b><br>5 neprítomných<br>3.2% registrovaných", "", "<b>komerčná spoločnosť</b><br>4 neprítomní<br>2.5% registrovaných", "<b>podpora výskumu</b><br>2 neprítomní<br>1.3% registrovaných", "<b>práca s mládežou</b><br>1 neprítomný/á<br>0.6% registrovaných", "", "", "<b>iné</b><br>2 neprítomní<br>1.3% registrovaných", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 20 osôb<br>14.4% prítomných<br>"]
	},
	// institution_gender 2017
	{
	x: [32, 6, 13, 0, 1, 3, 0, 0, 0, 2, 0],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>32 žien<br>20.5% prítomných<br>16.1% registrovaných", "<b>výskum + univerzita</b><br>6 žien<br>3.8% prítomných<br>3.0% registrovaných", "<b>výskumné pracovisko</b><br>13 žien<br>8.3% prítomných<br>6.5% registrovaných", "", "<b>komerčná spoločnosť</b><br>1 žena<br>0.6% prítomných<br>0.5% registrovaných", "<b>podpora výskumu</b><br>3 ženy<br>1.9% prítomných<br>1.5% registrovaných", "", "", "", "<b>iné</b><br>2 ženy<br>1.3% prítomných<br>1.0% registrovaných", ""]
	},
	{
	x: [40, 7, 17, 1, 2, 2, 0, 0, 0, 4, 1],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>40 mužov<br>25.6% prítomných<br>20.1% registrovaných", "<b>výskum + univerzita</b><br>7 mužov<br>4.5% prítomných<br>3.5% registrovaných", "<b>výskumné pracovisko</b><br>17 mužov<br>10.9% prítomných<br>8.5% registrovaných", "<b>nadnárodná organizácia</b><br>1 muž<br>0.6% prítomných<br>0.5% registrovaných", "<b>komerčná spoločnosť</b><br>2 muži<br>1.3% prítomných<br>1.0% registrovaných", "<b>podpora výskumu</b><br>2 muži<br>1.3% prítomných<br>1.0% registrovaných", "", "", "", "<b>iné</b><br>4 muži<br>2.6% prítomných<br>2.0% registrovaných", "<b>neuvedené</b><br>1 muž<br>0.6% prítomných<br>0.5% registrovaných"]
	},
	{
	x: [37, 2, 13, 2, 5, 3, 0, 2, 1, 2, 1],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>univerzita</b><br>37 neprítomných<br>18.6% registrovaných", "<b>výskum + univerzita</b><br>2 neprítomní<br>1.0% registrovaných", "<b>výskumné pracovisko</b><br>13 neprítomných<br>6.5% registrovaných", "<b>nadnárodná organizácia</b><br>2 neprítomní<br>1.0% registrovaných", "<b>komerčná spoločnosť</b><br>5 neprítomných<br>2.5% registrovaných", "<b>podpora výskumu</b><br>3 neprítomní<br>1.5% registrovaných", "", "<b>štátna správa</b><br>2 neprítomní<br>1.0% registrovaných", "<b>mimovládna organizácia</b><br>1 neprítomný/á<br>0.5% registrovaných", "<b>iné</b><br>2 neprítomní<br>1.0% registrovaných", "<b>neuvedené</b><br>1 neprítomný/á<br>0.5% registrovaných"]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25],
	y: ["univerzita", "výskum + univerzita", "výskumné pracovisko", "nadnárodná organizácia", "komerčná spoločnosť", "podpora výskumu", "práca s mládežou", "štátna správa", "mimovládna organizácia", "iné", "neuvedené"],
	name: 'bez dát',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 230, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "", "<b>neuvedené</b><br>bez dát: 25 osôb<br>16.0% prítomných<br>"]
	}
];

var data_position_country = [
	// position_country 2022
	{
	x: [5, 10, 9, 8, 0, 5, 17, 14, 14, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>Slovensko: 5 osôb<br>3.2% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 10 osôb<br>6.4% registrovaných", "<b>PI (vedúci laboratória)</b><br>Slovensko: 9 osôb<br>5.8% registrovaných", "<b>postdok, junior researcher</b><br>Slovensko: 8 osôb<br>5.1% registrovaných", "", "<b>doktorand </b><br>Slovensko: 5 osôb<br>3.2% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 17 osôb<br>10.9% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 14 osôb<br>9.0% registrovaných", "<b>iné </b><br>Slovensko: 14 osôb<br>9.0% registrovaných", ""]
	},
	{
	x: [1, 0, 0, 0, 0, 2, 0, 0, 0, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'SR + zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>SR + zahraničie: 1 osoba<br>0.6% registrovaných", "", "", "", "", "<b>doktorand </b><br>SR + zahraničie: 2 osoby<br>1.3% registrovaných", "", "", "", ""]
	},
	{
	x: [2, 6, 2, 13, 0, 10, 3, 9, 4, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>zahraničie: 2 osoby<br>1.3% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 6 osôb<br>3.8% registrovaných", "<b>PI (vedúci laboratória)</b><br>zahraničie: 2 osoby<br>1.3% registrovaných", "<b>postdok, junior researcher</b><br>zahraničie: 13 osôb<br>8.3% registrovaných", "", "<b>doktorand </b><br>zahraničie: 10 osôb<br>6.4% registrovaných", "<b>mimo akadémie </b><br>zahraničie: 3 osoby<br>1.9% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 9 osôb<br>5.8% registrovaných", "<b>iné </b><br>zahraničie: 4 osoby<br>2.6% registrovaných", ""]
	},
	{
	x: [0, 0, 0, 0, 0, 0, 0, 0, 1, 21],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "<b>iné </b><br>neuvedené (krajina): 1 osoba<br>0.6% registrovaných", "<b>neuvedené </b><br>neuvedené (krajina): 21 osôb<br>13.5% registrovaných"]
	},
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
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>Slovensko: 1 osoba<br>0.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 20 osôb<br>10.3% registrovaných", "<b>PI (vedúci laboratória)</b><br>Slovensko: 8 osôb<br>4.1% registrovaných", "<b>postdok, junior researcher</b><br>Slovensko: 14 osôb<br>7.2% registrovaných", "<b>výskum v industry</b><br>Slovensko: 1 osoba<br>0.5% registrovaných", "<b>doktorand </b><br>Slovensko: 9 osôb<br>4.6% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 26 osôb<br>13.4% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 16 osôb<br>8.2% registrovaných", "<b>iné </b><br>Slovensko: 21 osôb<br>10.8% registrovaných", "<b>neuvedené </b><br>Slovensko: 3 osoby<br>1.5% registrovaných"]
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
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>SR + zahraničie: 3 osoby<br>1.5% registrovaných", "", "<b>postdok, junior researcher</b><br>SR + zahraničie: 1 osoba<br>0.5% registrovaných", "", "<b>doktorand </b><br>SR + zahraničie: 3 osoby<br>1.5% registrovaných", "<b>mimo akadémie </b><br>SR + zahraničie: 1 osoba<br>0.5% registrovaných", "", "<b>iné </b><br>SR + zahraničie: 1 osoba<br>0.5% registrovaných", "<b>neuvedené </b><br>SR + zahraničie: 2 osoby<br>1.0% registrovaných"]
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
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>zahraničie: 2 osoby<br>1.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 2 osoby<br>1.0% registrovaných", "<b>PI (vedúci laboratória)</b><br>zahraničie: 4 osoby<br>2.1% registrovaných", "<b>postdok, junior researcher</b><br>zahraničie: 19 osôb<br>9.8% registrovaných", "<b>výskum v industry</b><br>zahraničie: 1 osoba<br>0.5% registrovaných", "<b>doktorand </b><br>zahraničie: 21 osôb<br>10.8% registrovaných", "<b>mimo akadémie </b><br>zahraničie: 4 osoby<br>2.1% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 4 osoby<br>2.1% registrovaných", "<b>iné </b><br>zahraničie: 3 osoby<br>1.5% registrovaných", ""]
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
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>neuvedené (krajina): 1 osoba<br>0.5% registrovaných"]
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
	hovertext: ["<b>profesor, docent </b><br>Slovensko: 3 osoby<br>1.4% z celkového počtu", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 18 osôb<br>8.5% z celkového počtu", "<b>PI (vedúci laboratória)</b><br>Slovensko: 6 osôb<br>2.8% z celkového počtu", "<b>postdok, junior researcher</b><br>Slovensko: 8 osôb<br>3.8% z celkového počtu", "<b>výskum v industry</b><br>Slovensko: 3 osoby<br>1.4% z celkového počtu", "<b>doktorand </b><br>Slovensko: 14 osôb<br>6.6% z celkového počtu", "<b>mimo akadémie </b><br>Slovensko: 69 osôb<br>32.5% z celkového počtu", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 12 osôb<br>5.7% z celkového počtu", "<b>iné </b><br>Slovensko: 12 osôb<br>5.7% z celkového počtu", ""]
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
	hovertext: ["<b>profesor, docent </b><br>SR + zahraničie: 1 osoba<br>0.5% z celkového počtu", "<b>vedecký pracovník (senior researcher) </b><br>SR + zahraničie: 1 osoba<br>0.5% z celkového počtu", "<b>PI (vedúci laboratória)</b><br>SR + zahraničie: 1 osoba<br>0.5% z celkového počtu", "<b>postdok, junior researcher</b><br>SR + zahraničie: 3 osoby<br>1.4% z celkového počtu", "", "<b>doktorand </b><br>SR + zahraničie: 2 osoby<br>0.9% z celkového počtu", "<b>mimo akadémie </b><br>SR + zahraničie: 1 osoba<br>0.5% z celkového počtu", "", "<b>iné </b><br>SR + zahraničie: 1 osoba<br>0.5% z celkového počtu", ""]
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
	hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 3 osoby<br>1.4% z celkového počtu", "<b>PI (vedúci laboratória)</b><br>zahraničie: 1 osoba<br>0.5% z celkového počtu", "<b>postdok, junior researcher</b><br>zahraničie: 16 osôb<br>7.5% z celkového počtu", "<b>výskum v industry</b><br>zahraničie: 1 osoba<br>0.5% z celkového počtu", "<b>doktorand </b><br>zahraničie: 11 osôb<br>5.2% z celkového počtu", "<b>mimo akadémie </b><br>zahraničie: 3 osoby<br>1.4% z celkového počtu", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 3 osoby<br>1.4% z celkového počtu", "<b>iné </b><br>zahraničie: 2 osoby<br>0.9% z celkového počtu", ""]
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
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>neuvedené (krajina): 11 osôb<br>5.2% z celkového počtu"]
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
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>nesúhlas s analýzou: 3 osoby<br>1.4% z celkového počtu"]
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
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>"]
	},
	// position_country 2018
	{
	x: [2, 11, 2, 5, 0, 9, 9, 7, 10, 15],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 11 osôb<br>7.9% prítomných<br>7.0% registrovaných", "<b>PI (vedúci laboratória)</b><br>Slovensko: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>postdok, junior researcher</b><br>Slovensko: 5 osôb<br>3.6% prítomných<br>3.2% registrovaných", "", "<b>doktorand </b><br>Slovensko: 9 osôb<br>6.5% prítomných<br>5.7% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 9 osôb<br>6.5% prítomných<br>5.7% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>iné </b><br>Slovensko: 10 osôb<br>7.2% prítomných<br>6.4% registrovaných", "<b>neuvedené </b><br>Slovensko: 15 osôb<br>10.8% prítomných<br>9.6% registrovaných"]
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
	x: [1, 3, 2, 5, 0, 6, 2, 4, 2, 2],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'zahraničie',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>zahraničie: 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>zahraničie: 3 osoby<br>2.2% prítomných<br>1.9% registrovaných", "<b>PI (vedúci laboratória)</b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>postdok, junior researcher</b><br>zahraničie: 5 osôb<br>3.6% prítomných<br>3.2% registrovaných", "", "<b>doktorand </b><br>zahraničie: 6 osôb<br>4.3% prítomných<br>3.8% registrovaných", "<b>mimo akadémie </b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>študent (Bc./Mgr.) </b><br>zahraničie: 4 osoby<br>2.9% prítomných<br>2.5% registrovaných", "<b>iné </b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>neuvedené </b><br>zahraničie: 2 osoby<br>1.4% prítomných<br>1.3% registrovaných"]
	},
	{
	x: [1, 1, 5, 1, 0, 1, 2, 1, 7, 2],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neuvedené',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>PI (vedúci laboratória)</b><br>neuvedené (krajina): 5 osôb<br>3.6% prítomných<br>3.2% registrovaných", "<b>postdok, junior researcher</b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "", "<b>doktorand </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>mimo akadémie </b><br>neuvedené (krajina): 2 osoby<br>1.4% prítomných<br>1.3% registrovaných", "<b>študent (Bc./Mgr.) </b><br>neuvedené (krajina): 1 osoba<br>0.7% prítomných<br>0.6% registrovaných", "<b>iné </b><br>neuvedené (krajina): 7 osôb<br>5.0% prítomných<br>4.5% registrovaných", "<b>neuvedené </b><br>neuvedené (krajina): 2 osoby<br>1.4% prítomných<br>1.3% registrovaných"]
	},
	{
	x: [0, 4, 0, 5, 0, 6, 3, 15, 4, 1],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>4 neprítomní<br>2.5% registrovaných", "", "<b>postdok, junior researcher</b><br>5 neprítomných<br>3.2% registrovaných", "", "<b>doktorand </b><br>6 neprítomných<br>3.8% registrovaných", "<b>mimo akadémie </b><br>3 neprítomní<br>1.9% registrovaných", "<b>študent (Bc./Mgr.) </b><br>15 neprítomných<br>9.6% registrovaných", "<b>iné </b><br>4 neprítomní<br>2.5% registrovaných", "<b>neuvedené </b><br>1 neprítomný/á<br>0.6% registrovaných"]
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
	x: [7, 16, 0, 11, 0, 14, 1, 12, 13, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'Slovensko',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>Slovensko: 7 osôb<br>4.5% prítomných<br>3.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>Slovensko: 16 osôb<br>10.3% prítomných<br>8.0% registrovaných", "", "<b>postdok, junior researcher</b><br>Slovensko: 11 osôb<br>7.1% prítomných<br>5.5% registrovaných", "", "<b>doktorand </b><br>Slovensko: 14 osôb<br>9.0% prítomných<br>7.0% registrovaných", "<b>mimo akadémie </b><br>Slovensko: 1 osoba<br>0.6% prítomných<br>0.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>Slovensko: 12 osôb<br>7.7% prítomných<br>6.0% registrovaných", "<b>iné </b><br>Slovensko: 13 osôb<br>8.3% prítomných<br>6.5% registrovaných", ""]
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
	x: [3, 9, 0, 9, 0, 17, 0, 16, 14, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>3 neprítomní<br>1.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>9 neprítomných<br>4.5% registrovaných", "", "<b>postdok, junior researcher</b><br>9 neprítomných<br>4.5% registrovaných", "", "<b>doktorand </b><br>17 neprítomných<br>8.5% registrovaných", "", "<b>študent (Bc./Mgr.) </b><br>16 neprítomných<br>8.0% registrovaných", "<b>iné </b><br>14 neprítomných<br>7.0% registrovaných", ""]
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
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 25 osôb<br>16.0% prítomných<br>"]
	}
];

var data_position_gender = [
	// position_gender 2022
	{
	x: [4, 9, 3, 9, 0, 11, 9, 17, 14, 14],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesorka, docentka </b><br>4 ženy<br>2.6% registrovaných", "<b>vedecká pracovníčka (senior researcher) </b><br>9 žien<br>5.8% registrovaných", "<b>PI (vedúca laboratória)</b><br>3 ženy<br>1.9% registrovaných", "<b>postdok, junior researcher</b><br>9 žien<br>5.8% registrovaných", "", "<b>doktorandka </b><br>11 žien<br>7.1% registrovaných", "<b>mimo akadémie </b><br>9 žien<br>5.8% registrovaných", "<b>študentka (Bc./Mgr.) </b><br>17 žien<br>10.9% registrovaných", "<b>iné </b><br>14 žien<br>9.0% registrovaných", "<b>neuvedené </b><br>14 žien<br>9.0% registrovaných"]
	},
	{
	x: [4, 7, 8, 12, 0, 6, 11, 6, 5, 7],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: true,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>4 muži<br>2.6% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>7 mužov<br>4.5% registrovaných", "<b>PI (vedúci laboratória)</b><br>8 mužov<br>5.1% registrovaných", "<b>postdok, junior researcher</b><br>12 mužov<br>7.7% registrovaných", "", "<b>doktorand </b><br>6 mužov<br>3.8% registrovaných", "<b>mimo akadémie </b><br>11 mužov<br>7.1% registrovaných", "<b>študent (Bc./Mgr.) </b><br>6 mužov<br>3.8% registrovaných", "<b>iné </b><br>5 mužov<br>3.2% registrovaných", "<b>neuvedené </b><br>7 mužov<br>4.5% registrovaných"]
	},
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
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesorka, docentka </b><br>1 žena<br>0.5% registrovaných", "<b>vedecká pracovníčka (senior researcher) </b><br>15 žien<br>7.7% registrovaných", "<b>PI (vedúca laboratória)</b><br>4 ženy<br>2.1% registrovaných", "<b>postdok, junior researcher</b><br>18 žien<br>9.3% registrovaných", "<b>výskum v industry</b><br>1 žena<br>0.5% registrovaných", "<b>doktorandka </b><br>28 žien<br>14.4% registrovaných", "<b>mimo akadémie </b><br>19 žien<br>9.8% registrovaných", "<b>študentka (Bc./Mgr.) </b><br>16 žien<br>8.2% registrovaných", "<b>iné </b><br>19 žien<br>9.8% registrovaných", "<b>neuvedené </b><br>4 ženy<br>2.1% registrovaných"]
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
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>2 muži<br>1.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>10 mužov<br>5.2% registrovaných", "<b>PI (vedúci laboratória)</b><br>8 mužov<br>4.1% registrovaných", "<b>postdok, junior researcher</b><br>16 mužov<br>8.2% registrovaných", "<b>výskum v industry</b><br>1 muž<br>0.5% registrovaných", "<b>doktorand </b><br>5 mužov<br>2.6% registrovaných", "<b>mimo akadémie </b><br>12 mužov<br>6.2% registrovaných", "<b>študent (Bc./Mgr.) </b><br>4 muži<br>2.1% registrovaných", "<b>iné </b><br>6 mužov<br>3.1% registrovaných", "<b>neuvedené </b><br>2 muži<br>1.0% registrovaných"]
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
	hovertext: ["<b>profesorka, docentka </b><br>2 ženy<br>0.9% z celkového počtu", "<b>vedecká pracovníčka (senior researcher) </b><br>11 žien<br>5.2% z celkového počtu", "<b>PI (vedúca laboratória)</b><br>4 ženy<br>1.9% z celkového počtu", "<b>postdok, junior researcher</b><br>13 žien<br>6.1% z celkového počtu", "<b>výskum v industry</b><br>2 ženy<br>0.9% z celkového počtu", "<b>doktorandka </b><br>14 žien<br>6.6% z celkového počtu", "<b>mimo akadémie </b><br>36 žien<br>17.0% z celkového počtu", "<b>študentka (Bc./Mgr.) </b><br>7 žien<br>3.3% z celkového počtu", "<b>iné </b><br>8 žien<br>3.8% z celkového počtu", "<b>neuvedené </b><br>6 žien<br>2.8% z celkového počtu"]
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
	hovertext: ["<b>profesor, docent </b><br>2 muži<br>0.9% z celkového počtu", "<b>vedecký pracovník (senior researcher) </b><br>11 mužov<br>5.2% z celkového počtu", "<b>PI (vedúci laboratória)</b><br>4 muži<br>1.9% z celkového počtu", "<b>postdok, junior researcher</b><br>14 mužov<br>6.6% z celkového počtu", "<b>výskum v industry</b><br>2 muži<br>0.9% z celkového počtu", "<b>doktorand </b><br>14 mužov<br>6.6% z celkového počtu", "<b>mimo akadémie </b><br>37 mužov<br>17.5% z celkového počtu", "<b>študent (Bc./Mgr.) </b><br>8 mužov<br>3.8% z celkového počtu", "<b>iné </b><br>8 mužov<br>3.8% z celkového počtu", "<b>neuvedené </b><br>6 mužov<br>2.8% z celkového počtu"]
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
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>nesúhlas s analýzou: 3 osoby<br>1.4% z celkového počtu"]
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
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 20 osôb<br>"]
	},
	// position_gender 2018
	{
	x: [1, 4, 2, 4, 0, 10, 8, 10, 9, 8],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesorka, docentka </b><br>1 žena<br>0.7% prítomných<br>0.6% registrovaných", "<b>vedecká pracovníčka (senior researcher) </b><br>4 ženy<br>2.9% prítomných<br>2.5% registrovaných", "<b>PI (vedúca laboratória)</b><br>2 ženy<br>1.4% prítomných<br>1.3% registrovaných", "<b>postdok, junior researcher</b><br>4 ženy<br>2.9% prítomných<br>2.5% registrovaných", "", "<b>doktorandka </b><br>10 žien<br>7.2% prítomných<br>6.4% registrovaných", "<b>mimo akadémie </b><br>8 žien<br>5.8% prítomných<br>5.1% registrovaných", "<b>študentka (Bc./Mgr.) </b><br>10 žien<br>7.2% prítomných<br>6.4% registrovaných", "<b>iné </b><br>9 žien<br>6.5% prítomných<br>5.7% registrovaných", "<b>neuvedené </b><br>8 žien<br>5.8% prítomných<br>5.1% registrovaných"]
	},
	{
	x: [3, 11, 7, 8, 0, 6, 5, 2, 10, 11],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'muži',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(0, 77, 230)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>3 muži<br>2.2% prítomných<br>1.9% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>11 mužov<br>7.9% prítomných<br>7.0% registrovaných", "<b>PI (vedúci laboratória)</b><br>7 mužov<br>5.0% prítomných<br>4.5% registrovaných", "<b>postdok, junior researcher</b><br>8 mužov<br>5.8% prítomných<br>5.1% registrovaných", "", "<b>doktorand </b><br>6 mužov<br>4.3% prítomných<br>3.8% registrovaných", "<b>mimo akadémie </b><br>5 mužov<br>3.6% prítomných<br>3.2% registrovaných", "<b>študent (Bc./Mgr.) </b><br>2 muži<br>1.4% prítomných<br>1.3% registrovaných", "<b>iné </b><br>10 mužov<br>7.2% prítomných<br>6.4% registrovaných", "<b>neuvedené </b><br>11 mužov<br>7.9% prítomných<br>7.0% registrovaných"]
	},
	{
	x: [0, 4, 0, 5, 0, 6, 3, 15, 4, 1],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["", "<b>vedecký pracovník (senior researcher) </b><br>4 neprítomní<br>2.5% registrovaných", "", "<b>postdok, junior researcher</b><br>5 neprítomných<br>3.2% registrovaných", "", "<b>doktorand </b><br>6 neprítomných<br>3.8% registrovaných", "<b>mimo akadémie </b><br>3 neprítomní<br>1.9% registrovaných", "<b>študent (Bc./Mgr.) </b><br>15 neprítomných<br>9.6% registrovaných", "<b>iné </b><br>4 neprítomní<br>2.5% registrovaných", "<b>neuvedené </b><br>1 neprítomný/á<br>0.6% registrovaných"]
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
	x: [2, 5, 0, 16, 0, 12, 1, 15, 6, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'ženy',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(230, 0, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesorka, docentka </b><br>2 ženy<br>1.3% prítomných<br>1.0% registrovaných", "<b>vedecká pracovníčka (senior researcher) </b><br>5 žien<br>3.2% prítomných<br>2.5% registrovaných", "", "<b>postdok, junior researcher</b><br>16 žien<br>10.3% prítomných<br>8.0% registrovaných", "", "<b>doktorandka </b><br>12 žien<br>7.7% prítomných<br>6.0% registrovaných", "<b>mimo akadémie </b><br>1 žena<br>0.6% prítomných<br>0.5% registrovaných", "<b>študentka (Bc./Mgr.) </b><br>15 žien<br>9.6% prítomných<br>7.5% registrovaných", "<b>iné </b><br>6 žien<br>3.8% prítomných<br>3.0% registrovaných", ""]
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
	hovertext: ["<b>profesor, docent </b><br>6 mužov<br>3.8% prítomných<br>3.0% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>19 mužov<br>12.2% prítomných<br>9.5% registrovaných", "", "<b>postdok, junior researcher</b><br>12 mužov<br>7.7% prítomných<br>6.0% registrovaných", "", "<b>doktorand </b><br>17 mužov<br>10.9% prítomných<br>8.5% registrovaných", "<b>mimo akadémie </b><br>3 muži<br>1.9% prítomných<br>1.5% registrovaných", "<b>študent (Bc./Mgr.) </b><br>8 mužov<br>5.1% prítomných<br>4.0% registrovaných", "<b>iné </b><br>9 mužov<br>5.8% prítomných<br>4.5% registrovaných", ""]
	},
	{
	x: [3, 9, 0, 9, 0, 17, 0, 16, 14, 0],
	y: ["profesor, docent ", "vedecký pracovník (senior researcher) ", "PI (vedúci laboratória)", "postdok, junior researcher", "výskum v industry", "doktorand ", "mimo akadémie ", "študent (Bc./Mgr.) ", "iné ", "neuvedené "],
	name: 'neprítomní',
	type: "bar",
	orientation: 'h',
	marker: {
			color: 'rgb(190, 190, 190)'
		},
	visible: false,
	hoverinfo: 'text',
	hovertext: ["<b>profesor, docent </b><br>3 neprítomní<br>1.5% registrovaných", "<b>vedecký pracovník (senior researcher) </b><br>9 neprítomných<br>4.5% registrovaných", "", "<b>postdok, junior researcher</b><br>9 neprítomných<br>4.5% registrovaných", "", "<b>doktorand </b><br>17 neprítomných<br>8.5% registrovaných", "", "<b>študent (Bc./Mgr.) </b><br>16 neprítomných<br>8.0% registrovaných", "<b>iné </b><br>14 neprítomných<br>7.0% registrovaných", ""]
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
	hovertext: ["", "", "", "", "", "", "", "", "", "<b>neuvedené </b><br>bez dát: 25 osôb<br>16.0% prítomných<br>"]
	}
];

var data_registration_timeSeries = [
	// registration_timeSeries 2022
	{
	x: [984.523900462963, 1020.71945601852, 1078.34556712963, 1107.55751157407, 1113.56334490741, 1149.66278935185, 1149.67334490741, 1209.67584490741, 1270.80334490741, 1347.2797337963, 1395.22667824074, 1397.95751157407, 1448.83917824074, 1532.04751157407, 1565.26751157407, 1687.24445601852, 1734.55862268519, 1737.52806712963, 1741.40195601852, 1748.92890046296, 1749.10084490741, 1749.93834490741, 1752.92890046296, 1756.40584490741, 1758.11306712963, 1779.78890046296, 1820.16806712963, 1820.17695601852, 1851.63584490741, 1895.08056712963, 1895.08445601852, 1895.11028935185, 1896.98112268519, 1898.10806712963, 1898.64251157407, 1898.8422337963, 1902.06945601852, 1905.51612268519, 1942.76001157407, 1945.5672337963, 1946.71140046296, 1969.52084490741, 1992.01417824074, 2037.98306712963, 2095.81834490741, 2097.5972337963, 2121.83945601852, 2137.92084490741, 2138.07917824074, 2193.6272337963, 2200.44306712963, 2276.20778935185, 2280.07917824074, 2302.55778935185, 2324.92778935185, 2353.22667824074, 2397.51862268519, 2403.20390046296, 2405.01390046296, 2410.38390046296, 2426.36667824074, 2446.40251157407, 2450.30945601852, 2457.30556712963, 2461.32140046296, 2480.50501157407, 2484.21945601852, 2498.36417824074, 2500.8222337963, 2506.82917824074, 2507.68778935185, 2519.64278935185, 2522.92167824074, 2551.6172337963, 2564.7222337963, 2568.56362268519, 2569.10890046296, 2569.81890046296, 2576.85778935185, 2577.84778935185, 2587.4822337963, 2593.29640046296],
	y: ["1", "3", "4", "6", "7", "8", "9", "11", "14", "16", "17", "18", "19", "23", "24", "29", "32", "34", "36", "37", "38", "39", "41", "42", "43", "44", "45", "46", "48", "49", "50", "51", "53", "54", "55", "56", "57", "58", "60", "61", "62", "63", "64", "66", "68", "69", "70", "71", "72", "78", "79", "82", "84", "85", "88", "90", "91", "93", "95", "98", "100", "101", "104", "105", "107", "109", "111", "113", "116", "118", "121", "122", "123", "124", "125", "126", "127", "128", "131", "132", "133", "135"],
	name: 'Slovensko',
	text: ["14.10.2022 12:34:25", "16.10.2022 00:46:09", "18.10.2022 10:23:43", "19.10.2022 15:36:26", "19.10.2022 21:36:47", "21.10.2022 09:42:45", "21.10.2022 09:43:23", "23.10.2022 21:43:32", "26.10.2022 10:51:11", "29.10.2022 15:19:46", "31.10.2022 15:16:35", "31.10.2022 18:00:26", "02.11.2022 20:53:20", "06.11.2022 08:05:50", "07.11.2022 17:19:02", "12.11.2022 19:17:39", "14.11.2022 18:36:30", "14.11.2022 21:34:40", "15.11.2022 01:27:06", "15.11.2022 08:58:43", "15.11.2022 09:09:02", "15.11.2022 09:59:17", "15.11.2022 12:58:43", "15.11.2022 16:27:20", "15.11.2022 18:09:46", "16.11.2022 15:50:19", "18.11.2022 08:13:04", "18.11.2022 08:13:36", "19.11.2022 15:41:08", "21.11.2022 11:07:49", "21.11.2022 11:08:03", "21.11.2022 11:09:36", "21.11.2022 13:01:51", "21.11.2022 14:09:28", "21.11.2022 14:41:32", "21.11.2022 14:53:31", "21.11.2022 18:07:09", "21.11.2022 21:33:57", "23.11.2022 10:48:35", "23.11.2022 13:37:01", "23.11.2022 14:45:40", "24.11.2022 13:34:14", "25.11.2022 12:03:50", "27.11.2022 10:01:58", "29.11.2022 19:52:05", "29.11.2022 21:38:49", "30.11.2022 21:53:21", "01.12.2022 13:58:14", "01.12.2022 14:07:44", "03.12.2022 21:40:37", "04.12.2022 04:29:34", "07.12.2022 08:15:27", "07.12.2022 12:07:44", "08.12.2022 10:36:27", "09.12.2022 08:58:39", "10.12.2022 13:16:35", "12.12.2022 09:34:06", "12.12.2022 15:15:13", "12.12.2022 17:03:49", "12.12.2022 22:26:01", "13.12.2022 14:24:59", "14.12.2022 10:27:08", "14.12.2022 14:21:33", "14.12.2022 21:21:19", "15.12.2022 01:22:16", "15.12.2022 20:33:17", "16.12.2022 00:16:09", "16.12.2022 14:24:50", "16.12.2022 16:52:19", "16.12.2022 22:52:44", "16.12.2022 23:44:15", "17.12.2022 11:41:33", "17.12.2022 14:58:17", "18.12.2022 19:40:01", "19.12.2022 08:46:19", "19.12.2022 12:36:48", "19.12.2022 13:09:31", "19.12.2022 13:52:07", "19.12.2022 20:54:27", "19.12.2022 21:53:51", "20.12.2022 07:31:55", "20.12.2022 13:20:46"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>14.10.2022 12:34:25</b><br>1 osoba<br>1.0% online registrácií", "<b>16.10.2022 00:46:09</b><br>3 osoby<br>2.0% online registrácií", "<b>18.10.2022 10:23:43</b><br>4 osoby<br>3.0% online registrácií", "<b>19.10.2022 15:36:26</b><br>6 osôb<br>4.0% online registrácií", "<b>19.10.2022 21:36:47</b><br>7 osôb<br>5.0% online registrácií", "<b>21.10.2022 09:42:45</b><br>8 osôb<br>6.0% online registrácií", "<b>21.10.2022 09:43:23</b><br>9 osôb<br>7.0% online registrácií", "<b>23.10.2022 21:43:32</b><br>11 osôb<br>8.0% online registrácií", "<b>26.10.2022 10:51:11</b><br>14 osôb<br>10.0% online registrácií", "<b>29.10.2022 15:19:46</b><br>16 osôb<br>12.0% online registrácií", "<b>31.10.2022 15:16:35</b><br>17 osôb<br>12.0% online registrácií", "<b>31.10.2022 18:00:26</b><br>18 osôb<br>13.0% online registrácií", "<b>02.11.2022 20:53:20</b><br>19 osôb<br>14.0% online registrácií", "<b>06.11.2022 08:05:50</b><br>23 osôb<br>17.0% online registrácií", "<b>07.11.2022 17:19:02</b><br>24 osôb<br>18.0% online registrácií", "<b>12.11.2022 19:17:39</b><br>29 osôb<br>21.0% online registrácií", "<b>14.11.2022 18:36:30</b><br>32 osôb<br>23.0% online registrácií", "<b>14.11.2022 21:34:40</b><br>34 osôb<br>25.0% online registrácií", "<b>15.11.2022 01:27:06</b><br>36 osôb<br>26.0% online registrácií", "<b>15.11.2022 08:58:43</b><br>37 osôb<br>27.0% online registrácií", "<b>15.11.2022 09:09:02</b><br>38 osôb<br>28.0% online registrácií", "<b>15.11.2022 09:59:17</b><br>39 osôb<br>28.0% online registrácií", "<b>15.11.2022 12:58:43</b><br>41 osôb<br>30.0% online registrácií", "<b>15.11.2022 16:27:20</b><br>42 osôb<br>31.0% online registrácií", "<b>15.11.2022 18:09:46</b><br>43 osôb<br>31.0% online registrácií", "<b>16.11.2022 15:50:19</b><br>44 osôb<br>32.0% online registrácií", "<b>18.11.2022 08:13:04</b><br>45 osôb<br>33.0% online registrácií", "<b>18.11.2022 08:13:36</b><br>46 osôb<br>34.0% online registrácií", "<b>19.11.2022 15:41:08</b><br>48 osôb<br>35.0% online registrácií", "<b>21.11.2022 11:07:49</b><br>49 osôb<br>36.0% online registrácií", "<b>21.11.2022 11:08:03</b><br>50 osôb<br>36.0% online registrácií", "<b>21.11.2022 11:09:36</b><br>51 osôb<br>37.0% online registrácií", "<b>21.11.2022 13:01:51</b><br>53 osôb<br>39.0% online registrácií", "<b>21.11.2022 14:09:28</b><br>54 osôb<br>39.0% online registrácií", "<b>21.11.2022 14:41:32</b><br>55 osôb<br>40.0% online registrácií", "<b>21.11.2022 14:53:31</b><br>56 osôb<br>41.0% online registrácií", "<b>21.11.2022 18:07:09</b><br>57 osôb<br>42.0% online registrácií", "<b>21.11.2022 21:33:57</b><br>58 osôb<br>42.0% online registrácií", "<b>23.11.2022 10:48:35</b><br>60 osôb<br>44.0% online registrácií", "<b>23.11.2022 13:37:01</b><br>61 osôb<br>45.0% online registrácií", "<b>23.11.2022 14:45:40</b><br>62 osôb<br>45.0% online registrácií", "<b>24.11.2022 13:34:14</b><br>63 osôb<br>46.0% online registrácií", "<b>25.11.2022 12:03:50</b><br>64 osôb<br>47.0% online registrácií", "<b>27.11.2022 10:01:58</b><br>66 osôb<br>48.0% online registrácií", "<b>29.11.2022 19:52:05</b><br>68 osôb<br>50.0% online registrácií", "<b>29.11.2022 21:38:49</b><br>69 osôb<br>50.0% online registrácií", "<b>30.11.2022 21:53:21</b><br>70 osôb<br>51.0% online registrácií", "<b>01.12.2022 13:58:14</b><br>71 osôb<br>52.0% online registrácií", "<b>01.12.2022 14:07:44</b><br>72 osôb<br>53.0% online registrácií", "<b>03.12.2022 21:40:37</b><br>78 osôb<br>57.0% online registrácií", "<b>04.12.2022 04:29:34</b><br>79 osôb<br>58.0% online registrácií", "<b>07.12.2022 08:15:27</b><br>82 osôb<br>60.0% online registrácií", "<b>07.12.2022 12:07:44</b><br>84 osôb<br>61.0% online registrácií", "<b>08.12.2022 10:36:27</b><br>85 osôb<br>62.0% online registrácií", "<b>09.12.2022 08:58:39</b><br>88 osôb<br>64.0% online registrácií", "<b>10.12.2022 13:16:35</b><br>90 osôb<br>66.0% online registrácií", "<b>12.12.2022 09:34:06</b><br>91 osôb<br>66.0% online registrácií", "<b>12.12.2022 15:15:13</b><br>93 osôb<br>68.0% online registrácií", "<b>12.12.2022 17:03:49</b><br>95 osôb<br>69.0% online registrácií", "<b>12.12.2022 22:26:01</b><br>98 osôb<br>72.0% online registrácií", "<b>13.12.2022 14:24:59</b><br>100 osôb<br>73.0% online registrácií", "<b>14.12.2022 10:27:08</b><br>101 osôb<br>74.0% online registrácií", "<b>14.12.2022 14:21:33</b><br>104 osôb<br>76.0% online registrácií", "<b>14.12.2022 21:21:19</b><br>105 osôb<br>77.0% online registrácií", "<b>15.12.2022 01:22:16</b><br>107 osôb<br>78.0% online registrácií", "<b>15.12.2022 20:33:17</b><br>109 osôb<br>80.0% online registrácií", "<b>16.12.2022 00:16:09</b><br>111 osôb<br>81.0% online registrácií", "<b>16.12.2022 14:24:50</b><br>113 osôb<br>82.0% online registrácií", "<b>16.12.2022 16:52:19</b><br>116 osôb<br>85.0% online registrácií", "<b>16.12.2022 22:52:44</b><br>118 osôb<br>86.0% online registrácií", "<b>16.12.2022 23:44:15</b><br>121 osôb<br>88.0% online registrácií", "<b>17.12.2022 11:41:33</b><br>122 osôb<br>89.0% online registrácií", "<b>17.12.2022 14:58:17</b><br>123 osôb<br>90.0% online registrácií", "<b>18.12.2022 19:40:01</b><br>124 osôb<br>91.0% online registrácií", "<b>19.12.2022 08:46:19</b><br>125 osôb<br>91.0% online registrácií", "<b>19.12.2022 12:36:48</b><br>126 osôb<br>92.0% online registrácií", "<b>19.12.2022 13:09:31</b><br>127 osôb<br>93.0% online registrácií", "<b>19.12.2022 13:52:07</b><br>128 osôb<br>93.0% online registrácií", "<b>19.12.2022 20:54:27</b><br>131 osôb<br>96.0% online registrácií", "<b>19.12.2022 21:53:51</b><br>132 osôb<br>96.0% online registrácií", "<b>20.12.2022 07:31:55</b><br>133 osôb<br>97.0% online registrácií", "<b>20.12.2022 13:20:46</b><br>135 osôb<br>99.0% online registrácií"]
	},
	{
	x: [2062.8922337963, 2278.57417824074, 2399.2997337963],
	y: ["67", "83", "92"],
	name: 'SR + zahraničie',
	text: ["28.11.2022 10:56:31", "07.12.2022 10:37:26", "12.12.2022 11:20:58"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>28.11.2022 10:56:31</b><br>67 osôb<br>49.0% online registrácií", "<b>07.12.2022 10:37:26</b><br>83 osôb<br>61.0% online registrácií", "<b>12.12.2022 11:20:58</b><br>92 osôb<br>67.0% online registrácií"]
	},
	{
	x: [993.407789351852, 1106.8997337963, 1153.38806712963, 1211.27640046296, 1229.87251157407, 1272.47056712963, 1449.93251157407, 1454.06806712963, 1464.57390046296, 1593.59834490741, 1657.09251157407, 1660.92806712963, 1676.6697337963, 1715.81862268519, 1729.40417824074, 1737.1497337963, 1737.99612268519, 1750.6997337963, 1830.6147337963, 1895.68390046296, 1923.46390046296, 1996.1772337963, 2138.14306712963, 2140.25556712963, 2146.3447337963, 2146.58556712963, 2162.12390046296, 2235.94806712963, 2261.01112268519, 2308.79528935185, 2312.63056712963, 2325.15667824074, 2403.85001157408, 2407.28945601852, 2411.66945601852, 2449.28084490741, 2449.91667824074, 2461.18640046296, 2477.3497337963, 2483.52667824074, 2495.21890046296, 2499.4122337963, 2500.00917824074, 2502.37751157408, 2507.16278935185, 2507.51195601852, 2576.0197337963, 2576.17334490741, 2591.82917824074],
	y: ["2", "5", "10", "12", "13", "15", "20", "21", "22", "25", "26", "27", "28", "30", "31", "33", "35", "40", "47", "52", "59", "65", "73", "74", "75", "76", "77", "80", "81", "86", "87", "89", "94", "97", "99", "102", "103", "106", "108", "110", "112", "114", "115", "117", "119", "120", "129", "130", "134"],
	name: 'zahraničie',
	text: ["14.10.2022 21:27:27", "19.10.2022 14:56:58", "21.10.2022 13:26:16", "23.10.2022 23:19:34", "24.10.2022 17:55:20", "26.10.2022 12:31:13", "02.11.2022 21:58:56", "03.11.2022 02:07:04", "03.11.2022 12:37:25", "08.11.2022 21:38:53", "11.11.2022 13:08:32", "11.11.2022 16:58:40", "12.11.2022 08:43:10", "13.11.2022 23:52:06", "14.11.2022 13:27:14", "14.11.2022 21:11:58", "14.11.2022 22:02:45", "15.11.2022 10:44:58", "18.11.2022 18:39:52", "21.11.2022 11:44:01", "22.11.2022 15:30:49", "25.11.2022 16:13:37", "01.12.2022 14:11:34", "01.12.2022 16:18:19", "01.12.2022 22:23:40", "01.12.2022 22:38:07", "02.12.2022 14:10:25", "05.12.2022 15:59:52", "06.12.2022 17:03:39", "08.12.2022 16:50:42", "08.12.2022 20:40:49", "09.12.2022 09:12:23", "12.12.2022 15:53:59", "12.12.2022 19:20:21", "12.12.2022 23:43:09", "14.12.2022 13:19:50", "14.12.2022 13:57:59", "15.12.2022 01:14:10", "15.12.2022 17:23:58", "15.12.2022 23:34:35", "16.12.2022 11:16:07", "16.12.2022 15:27:43", "16.12.2022 16:03:32", "16.12.2022 18:25:38", "16.12.2022 23:12:45", "16.12.2022 23:33:42", "19.12.2022 20:04:10", "19.12.2022 20:13:23", "20.12.2022 11:52:44"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>14.10.2022 21:27:27</b><br>2 osoby<br>1.0% online registrácií", "<b>19.10.2022 14:56:58</b><br>5 osôb<br>4.0% online registrácií", "<b>21.10.2022 13:26:16</b><br>10 osôb<br>7.0% online registrácií", "<b>23.10.2022 23:19:34</b><br>12 osôb<br>9.0% online registrácií", "<b>24.10.2022 17:55:20</b><br>13 osôb<br>9.0% online registrácií", "<b>26.10.2022 12:31:13</b><br>15 osôb<br>11.0% online registrácií", "<b>02.11.2022 21:58:56</b><br>20 osôb<br>15.0% online registrácií", "<b>03.11.2022 02:07:04</b><br>21 osôb<br>15.0% online registrácií", "<b>03.11.2022 12:37:25</b><br>22 osôb<br>16.0% online registrácií", "<b>08.11.2022 21:38:53</b><br>25 osôb<br>18.0% online registrácií", "<b>11.11.2022 13:08:32</b><br>26 osôb<br>19.0% online registrácií", "<b>11.11.2022 16:58:40</b><br>27 osôb<br>20.0% online registrácií", "<b>12.11.2022 08:43:10</b><br>28 osôb<br>20.0% online registrácií", "<b>13.11.2022 23:52:06</b><br>30 osôb<br>22.0% online registrácií", "<b>14.11.2022 13:27:14</b><br>31 osôb<br>23.0% online registrácií", "<b>14.11.2022 21:11:58</b><br>33 osôb<br>24.0% online registrácií", "<b>14.11.2022 22:02:45</b><br>35 osôb<br>26.0% online registrácií", "<b>15.11.2022 10:44:58</b><br>40 osôb<br>29.0% online registrácií", "<b>18.11.2022 18:39:52</b><br>47 osôb<br>34.0% online registrácií", "<b>21.11.2022 11:44:01</b><br>52 osôb<br>38.0% online registrácií", "<b>22.11.2022 15:30:49</b><br>59 osôb<br>43.0% online registrácií", "<b>25.11.2022 16:13:37</b><br>65 osôb<br>47.0% online registrácií", "<b>01.12.2022 14:11:34</b><br>73 osôb<br>53.0% online registrácií", "<b>01.12.2022 16:18:19</b><br>74 osôb<br>54.0% online registrácií", "<b>01.12.2022 22:23:40</b><br>75 osôb<br>55.0% online registrácií", "<b>01.12.2022 22:38:07</b><br>76 osôb<br>55.0% online registrácií", "<b>02.12.2022 14:10:25</b><br>77 osôb<br>56.0% online registrácií", "<b>05.12.2022 15:59:52</b><br>80 osôb<br>58.0% online registrácií", "<b>06.12.2022 17:03:39</b><br>81 osôb<br>59.0% online registrácií", "<b>08.12.2022 16:50:42</b><br>86 osôb<br>63.0% online registrácií", "<b>08.12.2022 20:40:49</b><br>87 osôb<br>64.0% online registrácií", "<b>09.12.2022 09:12:23</b><br>89 osôb<br>65.0% online registrácií", "<b>12.12.2022 15:53:59</b><br>94 osôb<br>69.0% online registrácií", "<b>12.12.2022 19:20:21</b><br>97 osôb<br>71.0% online registrácií", "<b>12.12.2022 23:43:09</b><br>99 osôb<br>72.0% online registrácií", "<b>14.12.2022 13:19:50</b><br>102 osôb<br>74.0% online registrácií", "<b>14.12.2022 13:57:59</b><br>103 osôb<br>75.0% online registrácií", "<b>15.12.2022 01:14:10</b><br>106 osôb<br>77.0% online registrácií", "<b>15.12.2022 17:23:58</b><br>108 osôb<br>79.0% online registrácií", "<b>15.12.2022 23:34:35</b><br>110 osôb<br>80.0% online registrácií", "<b>16.12.2022 11:16:07</b><br>112 osôb<br>82.0% online registrácií", "<b>16.12.2022 15:27:43</b><br>114 osôb<br>83.0% online registrácií", "<b>16.12.2022 16:03:32</b><br>115 osôb<br>84.0% online registrácií", "<b>16.12.2022 18:25:38</b><br>117 osôb<br>85.0% online registrácií", "<b>16.12.2022 23:12:45</b><br>119 osôb<br>87.0% online registrácií", "<b>16.12.2022 23:33:42</b><br>120 osôb<br>88.0% online registrácií", "<b>19.12.2022 20:04:10</b><br>129 osôb<br>94.0% online registrácií", "<b>19.12.2022 20:13:23</b><br>130 osôb<br>95.0% online registrácií", "<b>20.12.2022 11:52:44</b><br>134 osôb<br>98.0% online registrácií"]
	},
	{
	x: [2406.12584490741],
	y: ["96"],
	name: 'neuvedené',
	text: ["12.12.2022 18:10:32"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: true,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>12.12.2022 18:10:32</b><br>96 osôb<br>70.0% online registrácií"]
	},
	{
		x: [0, 984.523900462963, 993.407789351852, 1020.71945601852, 1078.34556712963, 1106.8997337963, 1107.55751157407, 1113.56334490741, 1149.66278935185, 1149.67334490741, 1153.38806712963, 1209.67584490741, 1211.27640046296, 1229.87251157407, 1270.80334490741, 1272.47056712963, 1347.2797337963, 1395.22667824074, 1397.95751157407, 1448.83917824074, 1449.93251157407, 1454.06806712963, 1464.57390046296, 1532.04751157407, 1565.26751157407, 1593.59834490741, 1657.09251157407, 1660.92806712963, 1676.6697337963, 1687.24445601852, 1715.81862268519, 1729.40417824074, 1734.55862268519, 1737.1497337963, 1737.52806712963, 1737.99612268519, 1741.40195601852, 1748.92890046296, 1749.10084490741, 1749.93834490741, 1750.6997337963, 1752.92890046296, 1756.40584490741, 1758.11306712963, 1779.78890046296, 1820.16806712963, 1820.17695601852, 1830.6147337963, 1851.63584490741, 1895.08056712963, 1895.08445601852, 1895.11028935185, 1895.68390046296, 1896.98112268519, 1898.10806712963, 1898.64251157407, 1898.8422337963, 1902.06945601852, 1905.51612268519, 1923.46390046296, 1942.76001157407, 1945.5672337963, 1946.71140046296, 1969.52084490741, 1992.01417824074, 1996.1772337963, 2037.98306712963, 2062.8922337963, 2095.81834490741, 2097.5972337963, 2121.83945601852, 2137.92084490741, 2138.07917824074, 2138.14306712963, 2140.25556712963, 2146.3447337963, 2146.58556712963, 2162.12390046296, 2193.6272337963, 2200.44306712963, 2235.94806712963, 2261.01112268519, 2276.20778935185, 2278.57417824074, 2280.07917824074, 2302.55778935185, 2308.79528935185, 2312.63056712963, 2324.92778935185, 2325.15667824074, 2353.22667824074, 2397.51862268519, 2399.2997337963, 2403.20390046296, 2403.85001157408, 2405.01390046296, 2406.12584490741, 2407.28945601852, 2410.38390046296, 2411.66945601852, 2426.36667824074, 2446.40251157407, 2449.28084490741, 2449.91667824074, 2450.30945601852, 2457.30556712963, 2461.18640046296, 2461.32140046296, 2477.3497337963, 2480.50501157407, 2483.52667824074, 2484.21945601852, 2495.21890046296, 2498.36417824074, 2499.4122337963, 2500.00917824074, 2500.8222337963, 2502.37751157408, 2506.82917824074, 2507.16278935185, 2507.51195601852, 2507.68778935185, 2519.64278935185, 2522.92167824074, 2551.6172337963, 2564.7222337963, 2568.56362268519, 2569.10890046296, 2569.81890046296, 2576.0197337963, 2576.17334490741, 2576.85778935185, 2577.84778935185, 2587.4822337963, 2591.82917824074, 2593.29640046296],
		y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135],
		name: "",
		type: 'bar',
		marker: {
			color: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)']
		},
		showlegend: false,
		visible: true,
		hoverinfo: 'skip',
		hovermode: "none"
	},
	// registration_timeSeries 2021
	{
	x: [1152.70959490741, 1154.14042824074, 1253.16903935185, 1268.0909837963, 1396.64153935185, 1641.84653935185, 1801.34820601852, 1831.05042824074, 1831.95792824074, 1833.47903935185, 1833.58070601852, 1834.90376157407, 1835.04515046296, 1844.72376157407, 1845.00181712963, 1845.92792824074, 1849.97987268519, 1923.87487268519, 1928.51959490741, 1930.75042824074, 1939.15237268519, 1939.64126157407, 1940.95931712963, 1941.87903935185, 1950.38709490741, 1951.00265046296, 1988.95487268519, 1990.17931712963, 2000.49653935185, 2027.23626157407, 2072.03903935185, 2075.01515046296, 2095.22987268518, 2122.73709490741, 2132.07265046296, 2160.48570601852, 2179.94765046296, 2189.94181712963, 2230.70459490741, 2238.12237268518, 2243.31737268518, 2252.84903935185, 2255.15126157407, 2258.63292824074, 2258.87987268518, 2279.47459490741, 2289.13265046296, 2325.41987268518, 2338.35542824074, 2351.33292824074, 2357.11015046296, 2409.47237268518, 2409.78959490741, 2419.65431712963, 2419.68959490741, 2419.81292824074, 2419.92237268518, 2420.16237268518, 2420.29959490741, 2420.6134837963, 2420.75098379629, 2420.76265046296, 2421.46320601852, 2421.74570601852, 2422.50459490741, 2422.96570601852, 2423.62292824074, 2423.88265046296, 2426.10737268518, 2426.21098379629, 2431.7984837963, 2436.38431712963, 2442.57126157407, 2444.39153935185, 2445.07653935185, 2445.60959490741, 2445.82265046296, 2455.85265046296, 2455.9509837963, 2468.11126157407, 2468.85653935185, 2473.71209490741, 2479.11431712963, 2479.83348379629, 2489.92542824074, 2493.44515046296, 2498.08431712963, 2500.99292824074, 2503.38737268518, 2504.49626157407, 2512.87876157407, 2515.43987268518, 2518.02987268518, 2523.02153935185, 2524.86070601852, 2528.07709490741, 2544.82292824074, 2552.50931712963, 2577.3559837963, 2578.05265046296, 2578.09515046296, 2587.21265046296, 2587.66403935185, 2587.99542824074, 2588.12292824074, 2588.64542824074, 2588.78987268518, 2589.40265046296, 2589.64015046296, 2589.67181712963, 2589.78070601852, 2596.84292824074, 2598.47376157407],
	y: ["3", "5", "9", "10", "11", "17", "19", "21", "23", "26", "27", "28", "29", "33", "35", "36", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "52", "53", "54", "55", "56", "57", "58", "59", "60", "62", "65", "66", "70", "71", "74", "76", "77", "79", "80", "82", "84", "87", "89", "90", "91", "92", "93", "94", "95", "97", "99", "102", "103", "104", "105", "106", "108", "110", "112", "114", "115", "116", "120", "122", "125", "127", "128", "129", "130", "131", "132", "134", "135", "136", "137", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151", "153", "154", "155", "158", "160", "162", "163", "164", "165", "166", "167", "168", "169", "170", "171", "172", "173", "174", "176", "177"],
	name: 'Slovensko',
	text: ["21.10.2021 13:13:21", "21.10.2021 14:39:12", "25.10.2021 17:40:55", "26.10.2021 08:36:14", "31.10.2021 17:09:16", "10.11.2021 22:21:34", "17.11.2021 13:51:40", "18.11.2021 19:33:48", "18.11.2021 20:28:15", "18.11.2021 21:59:31", "18.11.2021 22:05:37", "18.11.2021 23:25:00", "18.11.2021 23:33:29", "19.11.2021 09:14:12", "19.11.2021 09:30:53", "19.11.2021 10:26:27", "19.11.2021 14:29:34", "22.11.2021 16:23:16", "22.11.2021 21:01:57", "22.11.2021 23:15:48", "23.11.2021 07:39:55", "23.11.2021 08:09:15", "23.11.2021 09:28:20", "23.11.2021 10:23:31", "23.11.2021 18:54:00", "23.11.2021 19:30:56", "25.11.2021 09:28:04", "25.11.2021 10:41:32", "25.11.2021 21:00:34", "26.11.2021 23:44:57", "28.11.2021 20:33:07", "28.11.2021 23:31:41", "29.11.2021 19:44:34", "30.11.2021 23:15:00", "01.12.2021 08:35:08", "02.12.2021 12:59:55", "03.12.2021 08:27:38", "03.12.2021 18:27:17", "05.12.2021 11:13:03", "05.12.2021 18:38:07", "05.12.2021 23:49:49", "06.12.2021 09:21:43", "06.12.2021 11:39:51", "06.12.2021 15:08:45", "06.12.2021 15:23:34", "07.12.2021 11:59:15", "07.12.2021 21:38:44", "09.12.2021 09:55:58", "09.12.2021 22:52:06", "10.12.2021 11:50:45", "10.12.2021 17:37:23", "12.12.2021 21:59:07", "12.12.2021 22:18:09", "13.12.2021 08:10:02", "13.12.2021 08:12:09", "13.12.2021 08:19:33", "13.12.2021 08:26:07", "13.12.2021 08:40:31", "13.12.2021 08:48:45", "13.12.2021 09:07:35", "13.12.2021 09:15:50", "13.12.2021 09:16:32", "13.12.2021 09:58:34", "13.12.2021 10:15:31", "13.12.2021 11:01:03", "13.12.2021 11:28:43", "13.12.2021 12:08:09", "13.12.2021 12:23:44", "13.12.2021 14:37:13", "13.12.2021 14:43:26", "13.12.2021 20:18:41", "14.12.2021 00:53:50", "14.12.2021 07:05:03", "14.12.2021 08:54:16", "14.12.2021 09:35:22", "14.12.2021 10:07:21", "14.12.2021 10:20:08", "14.12.2021 20:21:56", "14.12.2021 20:27:50", "15.12.2021 08:37:27", "15.12.2021 09:22:10", "15.12.2021 14:13:30", "15.12.2021 19:37:38", "15.12.2021 20:20:47", "16.12.2021 06:26:18", "16.12.2021 09:57:29", "16.12.2021 14:35:50", "16.12.2021 17:30:21", "16.12.2021 19:54:01", "16.12.2021 21:00:33", "17.12.2021 05:23:30", "17.12.2021 07:57:10", "17.12.2021 10:32:34", "17.12.2021 15:32:04", "17.12.2021 17:22:25", "17.12.2021 20:35:24", "18.12.2021 13:20:09", "18.12.2021 21:01:20", "19.12.2021 21:52:08", "19.12.2021 22:33:56", "19.12.2021 22:36:29", "20.12.2021 07:43:32", "20.12.2021 08:10:37", "20.12.2021 08:30:30", "20.12.2021 08:38:09", "20.12.2021 09:09:30", "20.12.2021 09:18:10", "20.12.2021 09:54:56", "20.12.2021 10:09:11", "20.12.2021 10:11:05", "20.12.2021 10:17:37", "20.12.2021 17:21:21", "20.12.2021 18:59:12"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>21.10.2021 13:13:21</b><br>3 osoby<br>2.0% online registrácií", "<b>21.10.2021 14:39:12</b><br>5 osôb<br>3.0% online registrácií", "<b>25.10.2021 17:40:55</b><br>9 osôb<br>5.0% online registrácií", "<b>26.10.2021 08:36:14</b><br>10 osôb<br>6.0% online registrácií", "<b>31.10.2021 17:09:16</b><br>11 osôb<br>6.0% online registrácií", "<b>10.11.2021 22:21:34</b><br>17 osôb<br>9.0% online registrácií", "<b>17.11.2021 13:51:40</b><br>19 osôb<br>11.0% online registrácií", "<b>18.11.2021 19:33:48</b><br>21 osôb<br>12.0% online registrácií", "<b>18.11.2021 20:28:15</b><br>23 osôb<br>13.0% online registrácií", "<b>18.11.2021 21:59:31</b><br>26 osôb<br>15.0% online registrácií", "<b>18.11.2021 22:05:37</b><br>27 osôb<br>15.0% online registrácií", "<b>18.11.2021 23:25:00</b><br>28 osôb<br>16.0% online registrácií", "<b>18.11.2021 23:33:29</b><br>29 osôb<br>16.0% online registrácií", "<b>19.11.2021 09:14:12</b><br>33 osôb<br>18.0% online registrácií", "<b>19.11.2021 09:30:53</b><br>35 osôb<br>20.0% online registrácií", "<b>19.11.2021 10:26:27</b><br>36 osôb<br>20.0% online registrácií", "<b>19.11.2021 14:29:34</b><br>39 osôb<br>22.0% online registrácií", "<b>22.11.2021 16:23:16</b><br>40 osôb<br>22.0% online registrácií", "<b>22.11.2021 21:01:57</b><br>41 osôb<br>23.0% online registrácií", "<b>22.11.2021 23:15:48</b><br>42 osôb<br>23.0% online registrácií", "<b>23.11.2021 07:39:55</b><br>43 osôb<br>24.0% online registrácií", "<b>23.11.2021 08:09:15</b><br>44 osôb<br>25.0% online registrácií", "<b>23.11.2021 09:28:20</b><br>45 osôb<br>25.0% online registrácií", "<b>23.11.2021 10:23:31</b><br>46 osôb<br>26.0% online registrácií", "<b>23.11.2021 18:54:00</b><br>47 osôb<br>26.0% online registrácií", "<b>23.11.2021 19:30:56</b><br>48 osôb<br>27.0% online registrácií", "<b>25.11.2021 09:28:04</b><br>52 osôb<br>29.0% online registrácií", "<b>25.11.2021 10:41:32</b><br>53 osôb<br>30.0% online registrácií", "<b>25.11.2021 21:00:34</b><br>54 osôb<br>30.0% online registrácií", "<b>26.11.2021 23:44:57</b><br>55 osôb<br>31.0% online registrácií", "<b>28.11.2021 20:33:07</b><br>56 osôb<br>31.0% online registrácií", "<b>28.11.2021 23:31:41</b><br>57 osôb<br>32.0% online registrácií", "<b>29.11.2021 19:44:34</b><br>58 osôb<br>32.0% online registrácií", "<b>30.11.2021 23:15:00</b><br>59 osôb<br>33.0% online registrácií", "<b>01.12.2021 08:35:08</b><br>60 osôb<br>34.0% online registrácií", "<b>02.12.2021 12:59:55</b><br>62 osôb<br>35.0% online registrácií", "<b>03.12.2021 08:27:38</b><br>65 osôb<br>36.0% online registrácií", "<b>03.12.2021 18:27:17</b><br>66 osôb<br>37.0% online registrácií", "<b>05.12.2021 11:13:03</b><br>70 osôb<br>39.0% online registrácií", "<b>05.12.2021 18:38:07</b><br>71 osôb<br>40.0% online registrácií", "<b>05.12.2021 23:49:49</b><br>74 osôb<br>41.0% online registrácií", "<b>06.12.2021 09:21:43</b><br>76 osôb<br>42.0% online registrácií", "<b>06.12.2021 11:39:51</b><br>77 osôb<br>43.0% online registrácií", "<b>06.12.2021 15:08:45</b><br>79 osôb<br>44.0% online registrácií", "<b>06.12.2021 15:23:34</b><br>80 osôb<br>45.0% online registrácií", "<b>07.12.2021 11:59:15</b><br>82 osôb<br>46.0% online registrácií", "<b>07.12.2021 21:38:44</b><br>84 osôb<br>47.0% online registrácií", "<b>09.12.2021 09:55:58</b><br>87 osôb<br>49.0% online registrácií", "<b>09.12.2021 22:52:06</b><br>89 osôb<br>50.0% online registrácií", "<b>10.12.2021 11:50:45</b><br>90 osôb<br>50.0% online registrácií", "<b>10.12.2021 17:37:23</b><br>91 osôb<br>51.0% online registrácií", "<b>12.12.2021 21:59:07</b><br>92 osôb<br>51.0% online registrácií", "<b>12.12.2021 22:18:09</b><br>93 osôb<br>52.0% online registrácií", "<b>13.12.2021 08:10:02</b><br>94 osôb<br>53.0% online registrácií", "<b>13.12.2021 08:12:09</b><br>95 osôb<br>53.0% online registrácií", "<b>13.12.2021 08:19:33</b><br>97 osôb<br>54.0% online registrácií", "<b>13.12.2021 08:26:07</b><br>99 osôb<br>55.0% online registrácií", "<b>13.12.2021 08:40:31</b><br>102 osôb<br>57.0% online registrácií", "<b>13.12.2021 08:48:45</b><br>103 osôb<br>58.0% online registrácií", "<b>13.12.2021 09:07:35</b><br>104 osôb<br>58.0% online registrácií", "<b>13.12.2021 09:15:50</b><br>105 osôb<br>59.0% online registrácií", "<b>13.12.2021 09:16:32</b><br>106 osôb<br>59.0% online registrácií", "<b>13.12.2021 09:58:34</b><br>108 osôb<br>60.0% online registrácií", "<b>13.12.2021 10:15:31</b><br>110 osôb<br>61.0% online registrácií", "<b>13.12.2021 11:01:03</b><br>112 osôb<br>63.0% online registrácií", "<b>13.12.2021 11:28:43</b><br>114 osôb<br>64.0% online registrácií", "<b>13.12.2021 12:08:09</b><br>115 osôb<br>64.0% online registrácií", "<b>13.12.2021 12:23:44</b><br>116 osôb<br>65.0% online registrácií", "<b>13.12.2021 14:37:13</b><br>120 osôb<br>67.0% online registrácií", "<b>13.12.2021 14:43:26</b><br>122 osôb<br>68.0% online registrácií", "<b>13.12.2021 20:18:41</b><br>125 osôb<br>70.0% online registrácií", "<b>14.12.2021 00:53:50</b><br>127 osôb<br>71.0% online registrácií", "<b>14.12.2021 07:05:03</b><br>128 osôb<br>72.0% online registrácií", "<b>14.12.2021 08:54:16</b><br>129 osôb<br>72.0% online registrácií", "<b>14.12.2021 09:35:22</b><br>130 osôb<br>73.0% online registrácií", "<b>14.12.2021 10:07:21</b><br>131 osôb<br>73.0% online registrácií", "<b>14.12.2021 10:20:08</b><br>132 osôb<br>74.0% online registrácií", "<b>14.12.2021 20:21:56</b><br>134 osôb<br>75.0% online registrácií", "<b>14.12.2021 20:27:50</b><br>135 osôb<br>75.0% online registrácií", "<b>15.12.2021 08:37:27</b><br>136 osôb<br>76.0% online registrácií", "<b>15.12.2021 09:22:10</b><br>137 osôb<br>77.0% online registrácií", "<b>15.12.2021 14:13:30</b><br>140 osôb<br>78.0% online registrácií", "<b>15.12.2021 19:37:38</b><br>141 osôb<br>79.0% online registrácií", "<b>15.12.2021 20:20:47</b><br>142 osôb<br>79.0% online registrácií", "<b>16.12.2021 06:26:18</b><br>143 osôb<br>80.0% online registrácií", "<b>16.12.2021 09:57:29</b><br>144 osôb<br>80.0% online registrácií", "<b>16.12.2021 14:35:50</b><br>145 osôb<br>81.0% online registrácií", "<b>16.12.2021 17:30:21</b><br>146 osôb<br>82.0% online registrácií", "<b>16.12.2021 19:54:01</b><br>147 osôb<br>82.0% online registrácií", "<b>16.12.2021 21:00:33</b><br>148 osôb<br>83.0% online registrácií", "<b>17.12.2021 05:23:30</b><br>149 osôb<br>83.0% online registrácií", "<b>17.12.2021 07:57:10</b><br>150 osôb<br>84.0% online registrácií", "<b>17.12.2021 10:32:34</b><br>151 osôb<br>84.0% online registrácií", "<b>17.12.2021 15:32:04</b><br>153 osôb<br>85.0% online registrácií", "<b>17.12.2021 17:22:25</b><br>154 osôb<br>86.0% online registrácií", "<b>17.12.2021 20:35:24</b><br>155 osôb<br>87.0% online registrácií", "<b>18.12.2021 13:20:09</b><br>158 osôb<br>88.0% online registrácií", "<b>18.12.2021 21:01:20</b><br>160 osôb<br>89.0% online registrácií", "<b>19.12.2021 21:52:08</b><br>162 osôb<br>91.0% online registrácií", "<b>19.12.2021 22:33:56</b><br>163 osôb<br>91.0% online registrácií", "<b>19.12.2021 22:36:29</b><br>164 osôb<br>92.0% online registrácií", "<b>20.12.2021 07:43:32</b><br>165 osôb<br>92.0% online registrácií", "<b>20.12.2021 08:10:37</b><br>166 osôb<br>93.0% online registrácií", "<b>20.12.2021 08:30:30</b><br>167 osôb<br>93.0% online registrácií", "<b>20.12.2021 08:38:09</b><br>168 osôb<br>94.0% online registrácií", "<b>20.12.2021 09:09:30</b><br>169 osôb<br>94.0% online registrácií", "<b>20.12.2021 09:18:10</b><br>170 osôb<br>95.0% online registrácií", "<b>20.12.2021 09:54:56</b><br>171 osôb<br>96.0% online registrácií", "<b>20.12.2021 10:09:11</b><br>172 osôb<br>96.0% online registrácií", "<b>20.12.2021 10:11:05</b><br>173 osôb<br>97.0% online registrácií", "<b>20.12.2021 10:17:37</b><br>174 osôb<br>97.0% online registrácií", "<b>20.12.2021 17:21:21</b><br>176 osôb<br>98.0% online registrácií", "<b>20.12.2021 18:59:12</b><br>177 osôb<br>99.0% online registrácií"]
	},
	{
	x: [1517.81709490741, 2331.47403935185, 2420.94431712963, 2425.7284837963, 2428.84903935185, 2473.47515046296, 2590.62209490741],
	y: ["14", "88", "107", "119", "124", "139", "175"],
	name: 'SR + zahraničie',
	text: ["05.11.2021 18:19:48", "09.12.2021 15:59:13", "13.12.2021 09:27:26", "13.12.2021 14:14:29", "13.12.2021 17:21:43", "15.12.2021 13:59:17", "20.12.2021 11:08:06"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>05.11.2021 18:19:48</b><br>14 osôb<br>8.0% online registrácií", "<b>09.12.2021 15:59:13</b><br>88 osôb<br>49.0% online registrácií", "<b>13.12.2021 09:27:26</b><br>107 osôb<br>60.0% online registrácií", "<b>13.12.2021 14:14:29</b><br>119 osôb<br>66.0% online registrácií", "<b>13.12.2021 17:21:43</b><br>124 osôb<br>69.0% online registrácií", "<b>15.12.2021 13:59:17</b><br>139 osôb<br>78.0% online registrácií", "<b>20.12.2021 11:08:06</b><br>175 osôb<br>98.0% online registrácií"]
	},
	{
	x: [1152.54403935185, 1152.63653935185, 1152.85653935185, 1156.97126157407, 1160.8684837963, 1252.32320601852, 1421.25987268519, 1423.49209490741, 1639.06876157407, 1641.46681712963, 1761.50181712963, 1809.72376157407, 1831.30265046296, 1832.54820601852, 1832.78987268519, 1836.62709490741, 1838.30459490741, 1844.38792824074, 1844.73070601852, 1846.40181712963, 1847.27015046296, 1968.03431712963, 1968.72709490741, 1971.73931712963, 2143.83709490741, 2167.77820601852, 2169.46431712963, 2214.46959490741, 2216.30626157407, 2218.20709490741, 2238.54876157407, 2239.25792824074, 2250.2984837963, 2255.98820601852, 2264.91820601852, 2287.55737268518, 2304.67876157407, 2305.34653935185, 2419.7684837963, 2419.85320601852, 2420.05487268518, 2420.12070601852, 2421.51237268518, 2421.80792824074, 2422.84376157407, 2424.80987268518, 2425.13765046296, 2426.17709490741, 2428.62431712963, 2434.36376157407, 2452.39848379629, 2468.94403935185, 2521.47015046296, 2537.41959490741, 2541.93570601852, 2549.17820601852, 2575.39876157407],
	y: ["1", "2", "4", "6", "7", "8", "12", "13", "15", "16", "18", "20", "22", "24", "25", "30", "31", "32", "34", "37", "38", "49", "50", "51", "61", "63", "64", "67", "68", "69", "72", "73", "75", "78", "81", "83", "85", "86", "96", "98", "100", "101", "109", "111", "113", "117", "118", "121", "123", "126", "133", "138", "152", "156", "157", "159", "161"],
	name: 'zahraničie',
	text: ["21.10.2021 13:03:25", "21.10.2021 13:08:58", "21.10.2021 13:22:10", "21.10.2021 17:29:03", "21.10.2021 21:22:53", "25.10.2021 16:50:10", "01.11.2021 17:46:22", "01.11.2021 20:00:18", "10.11.2021 19:34:54", "10.11.2021 21:58:47", "15.11.2021 22:00:53", "17.11.2021 22:14:12", "18.11.2021 19:48:56", "18.11.2021 21:03:40", "18.11.2021 21:18:10", "19.11.2021 01:08:24", "19.11.2021 02:49:03", "19.11.2021 08:54:03", "19.11.2021 09:14:37", "19.11.2021 10:54:53", "19.11.2021 11:46:59", "24.11.2021 12:32:50", "24.11.2021 13:14:24", "24.11.2021 16:15:08", "01.12.2021 20:21:00", "02.12.2021 20:17:28", "02.12.2021 21:58:38", "04.12.2021 18:58:57", "04.12.2021 20:49:09", "04.12.2021 22:43:12", "05.12.2021 19:03:42", "05.12.2021 19:46:15", "06.12.2021 06:48:41", "06.12.2021 12:30:04", "06.12.2021 21:25:52", "07.12.2021 20:04:13", "08.12.2021 13:11:30", "08.12.2021 13:51:34", "13.12.2021 08:16:53", "13.12.2021 08:21:58", "13.12.2021 08:34:04", "13.12.2021 08:38:01", "13.12.2021 10:01:31", "13.12.2021 10:19:15", "13.12.2021 11:21:24", "13.12.2021 13:19:22", "13.12.2021 13:39:02", "13.12.2021 14:41:24", "13.12.2021 17:08:14", "13.12.2021 22:52:36", "14.12.2021 16:54:41", "15.12.2021 09:27:25", "17.12.2021 13:58:59", "18.12.2021 05:55:57", "18.12.2021 10:26:55", "18.12.2021 17:41:28", "19.12.2021 19:54:42"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>21.10.2021 13:03:25</b><br>1 osoba<br>1.0% online registrácií", "<b>21.10.2021 13:08:58</b><br>2 osoby<br>1.0% online registrácií", "<b>21.10.2021 13:22:10</b><br>4 osoby<br>2.0% online registrácií", "<b>21.10.2021 17:29:03</b><br>6 osôb<br>3.0% online registrácií", "<b>21.10.2021 21:22:53</b><br>7 osôb<br>4.0% online registrácií", "<b>25.10.2021 16:50:10</b><br>8 osôb<br>4.0% online registrácií", "<b>01.11.2021 17:46:22</b><br>12 osôb<br>7.0% online registrácií", "<b>01.11.2021 20:00:18</b><br>13 osôb<br>7.0% online registrácií", "<b>10.11.2021 19:34:54</b><br>15 osôb<br>8.0% online registrácií", "<b>10.11.2021 21:58:47</b><br>16 osôb<br>9.0% online registrácií", "<b>15.11.2021 22:00:53</b><br>18 osôb<br>10.0% online registrácií", "<b>17.11.2021 22:14:12</b><br>20 osôb<br>11.0% online registrácií", "<b>18.11.2021 19:48:56</b><br>22 osôb<br>12.0% online registrácií", "<b>18.11.2021 21:03:40</b><br>24 osôb<br>13.0% online registrácií", "<b>18.11.2021 21:18:10</b><br>25 osôb<br>14.0% online registrácií", "<b>19.11.2021 01:08:24</b><br>30 osôb<br>17.0% online registrácií", "<b>19.11.2021 02:49:03</b><br>31 osôb<br>17.0% online registrácií", "<b>19.11.2021 08:54:03</b><br>32 osôb<br>18.0% online registrácií", "<b>19.11.2021 09:14:37</b><br>34 osôb<br>19.0% online registrácií", "<b>19.11.2021 10:54:53</b><br>37 osôb<br>21.0% online registrácií", "<b>19.11.2021 11:46:59</b><br>38 osôb<br>21.0% online registrácií", "<b>24.11.2021 12:32:50</b><br>49 osôb<br>27.0% online registrácií", "<b>24.11.2021 13:14:24</b><br>50 osôb<br>28.0% online registrácií", "<b>24.11.2021 16:15:08</b><br>51 osôb<br>28.0% online registrácií", "<b>01.12.2021 20:21:00</b><br>61 osôb<br>34.0% online registrácií", "<b>02.12.2021 20:17:28</b><br>63 osôb<br>35.0% online registrácií", "<b>02.12.2021 21:58:38</b><br>64 osôb<br>36.0% online registrácií", "<b>04.12.2021 18:58:57</b><br>67 osôb<br>37.0% online registrácií", "<b>04.12.2021 20:49:09</b><br>68 osôb<br>38.0% online registrácií", "<b>04.12.2021 22:43:12</b><br>69 osôb<br>39.0% online registrácií", "<b>05.12.2021 19:03:42</b><br>72 osôb<br>40.0% online registrácií", "<b>05.12.2021 19:46:15</b><br>73 osôb<br>41.0% online registrácií", "<b>06.12.2021 06:48:41</b><br>75 osôb<br>42.0% online registrácií", "<b>06.12.2021 12:30:04</b><br>78 osôb<br>44.0% online registrácií", "<b>06.12.2021 21:25:52</b><br>81 osôb<br>45.0% online registrácií", "<b>07.12.2021 20:04:13</b><br>83 osôb<br>46.0% online registrácií", "<b>08.12.2021 13:11:30</b><br>85 osôb<br>47.0% online registrácií", "<b>08.12.2021 13:51:34</b><br>86 osôb<br>48.0% online registrácií", "<b>13.12.2021 08:16:53</b><br>96 osôb<br>54.0% online registrácií", "<b>13.12.2021 08:21:58</b><br>98 osôb<br>55.0% online registrácií", "<b>13.12.2021 08:34:04</b><br>100 osôb<br>56.0% online registrácií", "<b>13.12.2021 08:38:01</b><br>101 osôb<br>56.0% online registrácií", "<b>13.12.2021 10:01:31</b><br>109 osôb<br>61.0% online registrácií", "<b>13.12.2021 10:19:15</b><br>111 osôb<br>62.0% online registrácií", "<b>13.12.2021 11:21:24</b><br>113 osôb<br>63.0% online registrácií", "<b>13.12.2021 13:19:22</b><br>117 osôb<br>65.0% online registrácií", "<b>13.12.2021 13:39:02</b><br>118 osôb<br>66.0% online registrácií", "<b>13.12.2021 14:41:24</b><br>121 osôb<br>68.0% online registrácií", "<b>13.12.2021 17:08:14</b><br>123 osôb<br>69.0% online registrácií", "<b>13.12.2021 22:52:36</b><br>126 osôb<br>70.0% online registrácií", "<b>14.12.2021 16:54:41</b><br>133 osôb<br>74.0% online registrácií", "<b>15.12.2021 09:27:25</b><br>138 osôb<br>77.0% online registrácií", "<b>17.12.2021 13:58:59</b><br>152 osôb<br>85.0% online registrácií", "<b>18.12.2021 05:55:57</b><br>156 osôb<br>87.0% online registrácií", "<b>18.12.2021 10:26:55</b><br>157 osôb<br>88.0% online registrácií", "<b>18.12.2021 17:41:28</b><br>159 osôb<br>89.0% online registrácií", "<b>19.12.2021 19:54:42</b><br>161 osôb<br>90.0% online registrácií"]
	},

	{
		x: [0, 1152.54403935185, 1152.63653935185, 1152.70959490741, 1152.85653935185, 1154.14042824074, 1156.97126157407, 1160.8684837963, 1252.32320601852, 1253.16903935185, 1268.0909837963, 1396.64153935185, 1421.25987268519, 1423.49209490741, 1517.81709490741, 1639.06876157407, 1641.46681712963, 1641.84653935185, 1761.50181712963, 1801.34820601852, 1809.72376157407, 1831.05042824074, 1831.30265046296, 1831.95792824074, 1832.54820601852, 1832.78987268519, 1833.47903935185, 1833.58070601852, 1834.90376157407, 1835.04515046296, 1836.62709490741, 1838.30459490741, 1844.38792824074, 1844.72376157407, 1844.73070601852, 1845.00181712963, 1845.92792824074, 1846.40181712963, 1847.27015046296, 1849.97987268519, 1923.87487268519, 1928.51959490741, 1930.75042824074, 1939.15237268519, 1939.64126157407, 1940.95931712963, 1941.87903935185, 1950.38709490741, 1951.00265046296, 1968.03431712963, 1968.72709490741, 1971.73931712963, 1988.95487268519, 1990.17931712963, 2000.49653935185, 2027.23626157407, 2072.03903935185, 2075.01515046296, 2095.22987268518, 2122.73709490741, 2132.07265046296, 2143.83709490741, 2160.48570601852, 2167.77820601852, 2169.46431712963, 2179.94765046296, 2189.94181712963, 2214.46959490741, 2216.30626157407, 2218.20709490741, 2230.70459490741, 2238.12237268518, 2238.54876157407, 2239.25792824074, 2243.31737268518, 2250.2984837963, 2252.84903935185, 2255.15126157407, 2255.98820601852, 2258.63292824074, 2258.87987268518, 2264.91820601852, 2279.47459490741, 2287.55737268518, 2289.13265046296, 2304.67876157407, 2305.34653935185, 2325.41987268518, 2331.47403935185, 2338.35542824074, 2351.33292824074, 2357.11015046296, 2409.47237268518, 2409.78959490741, 2419.65431712963, 2419.68959490741, 2419.7684837963, 2419.81292824074, 2419.85320601852, 2419.92237268518, 2420.05487268518, 2420.12070601852, 2420.16237268518, 2420.29959490741, 2420.6134837963, 2420.75098379629, 2420.76265046296, 2420.94431712963, 2421.46320601852, 2421.51237268518, 2421.74570601852, 2421.80792824074, 2422.50459490741, 2422.84376157407, 2422.96570601852, 2423.62292824074, 2423.88265046296, 2424.80987268518, 2425.13765046296, 2425.7284837963, 2426.10737268518, 2426.17709490741, 2426.21098379629, 2428.62431712963, 2428.84903935185, 2431.7984837963, 2434.36376157407, 2436.38431712963, 2442.57126157407, 2444.39153935185, 2445.07653935185, 2445.60959490741, 2445.82265046296, 2452.39848379629, 2455.85265046296, 2455.9509837963, 2468.11126157407, 2468.85653935185, 2468.94403935185, 2473.47515046296, 2473.71209490741, 2479.11431712963, 2479.83348379629, 2489.92542824074, 2493.44515046296, 2498.08431712963, 2500.99292824074, 2503.38737268518, 2504.49626157407, 2512.87876157407, 2515.43987268518, 2518.02987268518, 2521.47015046296, 2523.02153935185, 2524.86070601852, 2528.07709490741, 2537.41959490741, 2541.93570601852, 2544.82292824074, 2549.17820601852, 2552.50931712963, 2575.39876157407, 2577.3559837963, 2578.05265046296, 2578.09515046296, 2587.21265046296, 2587.66403935185, 2587.99542824074, 2588.12292824074, 2588.64542824074, 2588.78987268518, 2589.40265046296, 2589.64015046296, 2589.67181712963, 2589.78070601852, 2590.62209490741, 2596.84292824074, 2598.47376157407],
		y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177],
		name: "",
		type: 'bar',
		marker: {
			color: ['rgb(255, 255, 255)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)']
		},
		showlegend: false,
		visible: false,
		hoverinfo: 'skip',
		hovermode: "none"
	},
	// registration_timeSeries 2019
	{
	x: [503.284398148148, 687.809120370371, 860.248287037037, 860.267731481481, 985.38162037037, 986.640787037037, 1011.75939814815, 1012.08384259259, 1022.78939814815, 1023.43023148148, 1023.75300925926, 1025.77078703704, 1029.11134259259, 1030.31634259259, 1046.59078703704, 1047.4924537037, 1121.9824537037, 1124.24606481482, 1204.17384259259, 1224.46217592593, 1243.3124537037, 1393.99523148148, 1394.04773148148, 1550.50689814815, 1574.60634259259, 1695.80578703704, 1770.06606481481, 1848.82328703704, 1939.08439814815, 1943.13773148148, 1959.64078703704, 1987.84578703704, 1987.86106481481, 1988.72189814815, 1988.9524537037, 1989.96439814815, 1990.09634259259, 1990.22384259259, 1990.27828703704, 1995.02912037037, 1996.58689814815, 2004.97578703704, 2006.67078703704, 2007.01023148148, 2007.18273148148, 2009.42550925926, 2017.75217592593, 2031.86717592593, 2064.21023148148, 2067.93356481481, 2067.97023148148, 2084.68884259259, 2101.18717592592, 2108.32856481481, 2111.69550925926, 2158.25523148148, 2200.15634259259, 2236.03800925926, 2269.76550925926, 2271.36412037037, 2272.75800925926, 2296.34217592592, 2307.38384259259, 2323.0074537037, 2323.13634259259, 2323.28634259259, 2324.03828703704, 2330.19162037037, 2330.9174537037, 2341.83078703704, 2342.17328703704, 2353.92273148148, 2366.72050925926, 2378.09550925926, 2392.29717592592, 2395.01412037037, 2397.02856481481, 2419.33356481481, 2422.01662037037, 2431.96106481481, 2438.16884259259, 2438.36606481481, 2439.11578703704, 2439.45662037037, 2439.55412037037, 2441.6899537037, 2443.99634259259, 2444.81356481481, 2449.06523148148, 2449.7899537037, 2449.92828703704, 2451.65328703704, 2453.43412037037, 2510.0024537037, 2511.05523148148, 2512.02328703704, 2515.95884259259, 2534.39634259259, 2599.00634259259],
	y: ["5", "6", "8", "9", "11", "12", "20", "21", "23", "24", "25", "27", "29", "30", "31", "32", "38", "39", "40", "42", "43", "44", "45", "47", "48", "49", "52", "53", "55", "56", "58", "59", "60", "63", "64", "66", "67", "68", "69", "72", "74", "75", "76", "77", "78", "79", "81", "82", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "112", "113", "114", "115", "116", "117", "120", "121", "123", "124", "125", "126", "129", "130", "131", "132", "133", "134", "136", "138", "139", "140", "141", "142", "143", "144"],
	name: 'Slovensko',
	text: ["23.09.2019 17:46:45", "01.10.2019 10:18:14", "08.10.2019 14:44:35", "08.10.2019 14:45:45", "13.10.2019 19:52:35", "13.10.2019 21:08:08", "14.10.2019 22:15:15", "14.10.2019 22:34:43", "15.10.2019 09:17:03", "15.10.2019 09:55:30", "15.10.2019 10:14:52", "15.10.2019 12:15:56", "15.10.2019 15:36:22", "15.10.2019 16:48:40", "16.10.2019 09:05:08", "16.10.2019 09:59:14", "19.10.2019 12:28:38", "19.10.2019 14:44:27", "22.10.2019 22:40:07", "23.10.2019 18:57:25", "24.10.2019 13:48:26", "30.10.2019 20:29:24", "30.10.2019 20:32:33", "06.11.2019 09:00:06", "07.11.2019 09:06:04", "12.11.2019 10:18:02", "15.11.2019 12:33:39", "18.11.2019 19:19:05", "22.11.2019 13:34:45", "22.11.2019 17:37:57", "23.11.2019 10:08:08", "24.11.2019 14:20:26", "24.11.2019 14:21:21", "24.11.2019 15:13:00", "24.11.2019 15:26:50", "24.11.2019 16:27:33", "24.11.2019 16:35:28", "24.11.2019 16:43:07", "24.11.2019 16:46:23", "24.11.2019 21:31:26", "24.11.2019 23:04:54", "25.11.2019 07:28:14", "25.11.2019 09:09:56", "25.11.2019 09:30:18", "25.11.2019 09:40:39", "25.11.2019 11:55:13", "25.11.2019 20:14:49", "26.11.2019 10:21:43", "27.11.2019 18:42:18", "27.11.2019 22:25:42", "27.11.2019 22:27:54", "28.11.2019 15:11:01", "29.11.2019 07:40:55", "29.11.2019 14:49:24", "29.11.2019 18:11:25", "01.12.2019 16:45:00", "03.12.2019 10:39:04", "04.12.2019 22:31:58", "06.12.2019 08:15:37", "06.12.2019 09:51:32", "06.12.2019 11:15:10", "07.12.2019 10:50:13", "07.12.2019 21:52:43", "08.12.2019 13:30:08", "08.12.2019 13:37:52", "08.12.2019 13:46:52", "08.12.2019 14:31:59", "08.12.2019 20:41:11", "08.12.2019 21:24:44", "09.12.2019 08:19:32", "09.12.2019 08:40:05", "09.12.2019 20:25:03", "10.12.2019 09:12:55", "10.12.2019 20:35:25", "11.12.2019 10:47:31", "11.12.2019 13:30:32", "11.12.2019 15:31:24", "12.12.2019 13:49:42", "12.12.2019 16:30:41", "13.12.2019 02:27:21", "13.12.2019 08:39:49", "13.12.2019 08:51:39", "13.12.2019 09:36:38", "13.12.2019 09:57:05", "13.12.2019 10:02:56", "13.12.2019 12:11:05", "13.12.2019 14:29:28", "13.12.2019 15:18:30", "13.12.2019 19:33:36", "13.12.2019 20:17:05", "13.12.2019 20:25:23", "13.12.2019 22:08:53", "13.12.2019 23:55:44", "16.12.2019 08:29:50", "16.12.2019 09:33:00", "16.12.2019 10:31:05", "16.12.2019 14:27:13", "17.12.2019 08:53:28", "20.12.2019 01:30:04"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>23.09.2019 17:46:45</b><br>5 osôb<br>3.0% online registrácií", "<b>01.10.2019 10:18:14</b><br>6 osôb<br>4.0% online registrácií", "<b>08.10.2019 14:44:35</b><br>8 osôb<br>6.0% online registrácií", "<b>08.10.2019 14:45:45</b><br>9 osôb<br>6.0% online registrácií", "<b>13.10.2019 19:52:35</b><br>11 osôb<br>8.0% online registrácií", "<b>13.10.2019 21:08:08</b><br>12 osôb<br>8.0% online registrácií", "<b>14.10.2019 22:15:15</b><br>20 osôb<br>14.0% online registrácií", "<b>14.10.2019 22:34:43</b><br>21 osôb<br>15.0% online registrácií", "<b>15.10.2019 09:17:03</b><br>23 osôb<br>16.0% online registrácií", "<b>15.10.2019 09:55:30</b><br>24 osôb<br>17.0% online registrácií", "<b>15.10.2019 10:14:52</b><br>25 osôb<br>17.0% online registrácií", "<b>15.10.2019 12:15:56</b><br>27 osôb<br>19.0% online registrácií", "<b>15.10.2019 15:36:22</b><br>29 osôb<br>20.0% online registrácií", "<b>15.10.2019 16:48:40</b><br>30 osôb<br>21.0% online registrácií", "<b>16.10.2019 09:05:08</b><br>31 osôb<br>22.0% online registrácií", "<b>16.10.2019 09:59:14</b><br>32 osôb<br>22.0% online registrácií", "<b>19.10.2019 12:28:38</b><br>38 osôb<br>26.0% online registrácií", "<b>19.10.2019 14:44:27</b><br>39 osôb<br>27.0% online registrácií", "<b>22.10.2019 22:40:07</b><br>40 osôb<br>28.0% online registrácií", "<b>23.10.2019 18:57:25</b><br>42 osôb<br>29.0% online registrácií", "<b>24.10.2019 13:48:26</b><br>43 osôb<br>30.0% online registrácií", "<b>30.10.2019 20:29:24</b><br>44 osôb<br>31.0% online registrácií", "<b>30.10.2019 20:32:33</b><br>45 osôb<br>31.0% online registrácií", "<b>06.11.2019 09:00:06</b><br>47 osôb<br>33.0% online registrácií", "<b>07.11.2019 09:06:04</b><br>48 osôb<br>33.0% online registrácií", "<b>12.11.2019 10:18:02</b><br>49 osôb<br>34.0% online registrácií", "<b>15.11.2019 12:33:39</b><br>52 osôb<br>36.0% online registrácií", "<b>18.11.2019 19:19:05</b><br>53 osôb<br>37.0% online registrácií", "<b>22.11.2019 13:34:45</b><br>55 osôb<br>38.0% online registrácií", "<b>22.11.2019 17:37:57</b><br>56 osôb<br>39.0% online registrácií", "<b>23.11.2019 10:08:08</b><br>58 osôb<br>40.0% online registrácií", "<b>24.11.2019 14:20:26</b><br>59 osôb<br>41.0% online registrácií", "<b>24.11.2019 14:21:21</b><br>60 osôb<br>42.0% online registrácií", "<b>24.11.2019 15:13:00</b><br>63 osôb<br>44.0% online registrácií", "<b>24.11.2019 15:26:50</b><br>64 osôb<br>44.0% online registrácií", "<b>24.11.2019 16:27:33</b><br>66 osôb<br>46.0% online registrácií", "<b>24.11.2019 16:35:28</b><br>67 osôb<br>47.0% online registrácií", "<b>24.11.2019 16:43:07</b><br>68 osôb<br>47.0% online registrácií", "<b>24.11.2019 16:46:23</b><br>69 osôb<br>48.0% online registrácií", "<b>24.11.2019 21:31:26</b><br>72 osôb<br>50.0% online registrácií", "<b>24.11.2019 23:04:54</b><br>74 osôb<br>51.0% online registrácií", "<b>25.11.2019 07:28:14</b><br>75 osôb<br>52.0% online registrácií", "<b>25.11.2019 09:09:56</b><br>76 osôb<br>53.0% online registrácií", "<b>25.11.2019 09:30:18</b><br>77 osôb<br>53.0% online registrácií", "<b>25.11.2019 09:40:39</b><br>78 osôb<br>54.0% online registrácií", "<b>25.11.2019 11:55:13</b><br>79 osôb<br>55.0% online registrácií", "<b>25.11.2019 20:14:49</b><br>81 osôb<br>56.0% online registrácií", "<b>26.11.2019 10:21:43</b><br>82 osôb<br>57.0% online registrácií", "<b>27.11.2019 18:42:18</b><br>86 osôb<br>60.0% online registrácií", "<b>27.11.2019 22:25:42</b><br>87 osôb<br>60.0% online registrácií", "<b>27.11.2019 22:27:54</b><br>88 osôb<br>61.0% online registrácií", "<b>28.11.2019 15:11:01</b><br>89 osôb<br>62.0% online registrácií", "<b>29.11.2019 07:40:55</b><br>90 osôb<br>62.0% online registrácií", "<b>29.11.2019 14:49:24</b><br>91 osôb<br>63.0% online registrácií", "<b>29.11.2019 18:11:25</b><br>92 osôb<br>64.0% online registrácií", "<b>01.12.2019 16:45:00</b><br>93 osôb<br>65.0% online registrácií", "<b>03.12.2019 10:39:04</b><br>94 osôb<br>65.0% online registrácií", "<b>04.12.2019 22:31:58</b><br>95 osôb<br>66.0% online registrácií", "<b>06.12.2019 08:15:37</b><br>96 osôb<br>67.0% online registrácií", "<b>06.12.2019 09:51:32</b><br>97 osôb<br>67.0% online registrácií", "<b>06.12.2019 11:15:10</b><br>98 osôb<br>68.0% online registrácií", "<b>07.12.2019 10:50:13</b><br>99 osôb<br>69.0% online registrácií", "<b>07.12.2019 21:52:43</b><br>100 osôb<br>69.0% online registrácií", "<b>08.12.2019 13:30:08</b><br>101 osôb<br>70.0% online registrácií", "<b>08.12.2019 13:37:52</b><br>102 osôb<br>71.0% online registrácií", "<b>08.12.2019 13:46:52</b><br>103 osôb<br>72.0% online registrácií", "<b>08.12.2019 14:31:59</b><br>104 osôb<br>72.0% online registrácií", "<b>08.12.2019 20:41:11</b><br>105 osôb<br>73.0% online registrácií", "<b>08.12.2019 21:24:44</b><br>106 osôb<br>74.0% online registrácií", "<b>09.12.2019 08:19:32</b><br>107 osôb<br>74.0% online registrácií", "<b>09.12.2019 08:40:05</b><br>108 osôb<br>75.0% online registrácií", "<b>09.12.2019 20:25:03</b><br>109 osôb<br>76.0% online registrácií", "<b>10.12.2019 09:12:55</b><br>110 osôb<br>76.0% online registrácií", "<b>10.12.2019 20:35:25</b><br>112 osôb<br>78.0% online registrácií", "<b>11.12.2019 10:47:31</b><br>113 osôb<br>78.0% online registrácií", "<b>11.12.2019 13:30:32</b><br>114 osôb<br>79.0% online registrácií", "<b>11.12.2019 15:31:24</b><br>115 osôb<br>80.0% online registrácií", "<b>12.12.2019 13:49:42</b><br>116 osôb<br>81.0% online registrácií", "<b>12.12.2019 16:30:41</b><br>117 osôb<br>81.0% online registrácií", "<b>13.12.2019 02:27:21</b><br>120 osôb<br>83.0% online registrácií", "<b>13.12.2019 08:39:49</b><br>121 osôb<br>84.0% online registrácií", "<b>13.12.2019 08:51:39</b><br>123 osôb<br>85.0% online registrácií", "<b>13.12.2019 09:36:38</b><br>124 osôb<br>86.0% online registrácií", "<b>13.12.2019 09:57:05</b><br>125 osôb<br>87.0% online registrácií", "<b>13.12.2019 10:02:56</b><br>126 osôb<br>88.0% online registrácií", "<b>13.12.2019 12:11:05</b><br>129 osôb<br>90.0% online registrácií", "<b>13.12.2019 14:29:28</b><br>130 osôb<br>90.0% online registrácií", "<b>13.12.2019 15:18:30</b><br>131 osôb<br>91.0% online registrácií", "<b>13.12.2019 19:33:36</b><br>132 osôb<br>92.0% online registrácií", "<b>13.12.2019 20:17:05</b><br>133 osôb<br>92.0% online registrácií", "<b>13.12.2019 20:25:23</b><br>134 osôb<br>93.0% online registrácií", "<b>13.12.2019 22:08:53</b><br>136 osôb<br>94.0% online registrácií", "<b>13.12.2019 23:55:44</b><br>138 osôb<br>96.0% online registrácií", "<b>16.12.2019 08:29:50</b><br>139 osôb<br>97.0% online registrácií", "<b>16.12.2019 09:33:00</b><br>140 osôb<br>97.0% online registrácií", "<b>16.12.2019 10:31:05</b><br>141 osôb<br>98.0% online registrácií", "<b>16.12.2019 14:27:13</b><br>142 osôb<br>99.0% online registrácií", "<b>17.12.2019 08:53:28</b><br>143 osôb<br>99.0% online registrácií", "<b>20.12.2019 01:30:04</b><br>144 osôb<br>100.0% online registrácií"]
	},
	{
	x: [480.80412037037, 1011.42689814815, 1077.92634259259, 1706.81078703704, 1908.35773148148, 1987.97606481481, 1990.68467592593, 1995.89912037037, 2042.29717592592, 2373.98412037037],
	y: ["1", "19", "36", "50", "54", "61", "70", "73", "85", "111"],
	name: 'SR + zahraničie',
	text: ["22.09.2019 19:17:56", "14.10.2019 21:55:18", "17.10.2019 16:25:16", "12.11.2019 21:18:20", "21.11.2019 06:51:09", "24.11.2019 14:28:15", "24.11.2019 17:10:46", "24.11.2019 22:23:38", "26.11.2019 20:47:31", "10.12.2019 16:28:44"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>22.09.2019 19:17:56</b><br>1 osoba<br>1.0% online registrácií", "<b>14.10.2019 21:55:18</b><br>19 osôb<br>13.0% online registrácií", "<b>17.10.2019 16:25:16</b><br>36 osôb<br>25.0% online registrácií", "<b>12.11.2019 21:18:20</b><br>50 osôb<br>35.0% online registrácií", "<b>21.11.2019 06:51:09</b><br>54 osôb<br>38.0% online registrácií", "<b>24.11.2019 14:28:15</b><br>61 osôb<br>42.0% online registrácií", "<b>24.11.2019 17:10:46</b><br>70 osôb<br>49.0% online registrácií", "<b>24.11.2019 22:23:38</b><br>73 osôb<br>51.0% online registrácií", "<b>26.11.2019 20:47:31</b><br>85 osôb<br>59.0% online registrácií", "<b>10.12.2019 16:28:44</b><br>111 osôb<br>77.0% online registrácií"]
	},
	{
	x: [480.853009259259, 496.353287037037, 498.502175925926, 767.163564814815, 984.063009259259, 987.104953703704, 988.05162037037, 1001.86884259259, 1002.58328703704, 1003.87912037037, 1007.2124537037, 1013.3949537037, 1027.46578703704, 1048.9349537037, 1056.68578703704, 1072.58023148148, 1094.84939814815, 1204.6299537037, 1462.2574537037, 1952.56273148148, 1988.08134259259, 1989.28578703704, 1994.50078703704, 2017.27912037037, 2038.50634259259, 2041.2424537037, 2426.10078703704, 2430.79773148148, 2439.8699537037, 2440.06328703704, 2451.1924537037, 2452.09467592592],
	y: ["2", "3", "4", "7", "10", "13", "14", "15", "16", "17", "18", "22", "28", "33", "34", "35", "37", "41", "46", "57", "62", "65", "71", "80", "83", "84", "118", "119", "127", "128", "135", "137"],
	name: 'zahraničie',
	text: ["22.09.2019 19:20:52", "23.09.2019 10:50:53", "23.09.2019 12:59:49", "04.10.2019 17:39:30", "13.10.2019 18:33:28", "13.10.2019 21:35:59", "13.10.2019 22:32:47", "14.10.2019 12:21:49", "14.10.2019 13:04:41", "14.10.2019 14:22:26", "14.10.2019 17:42:26", "14.10.2019 23:53:23", "15.10.2019 13:57:38", "16.10.2019 11:25:47", "16.10.2019 19:10:50", "17.10.2019 11:04:30", "18.10.2019 09:20:39", "22.10.2019 23:07:29", "02.11.2019 16:45:08", "23.11.2019 03:03:27", "24.11.2019 14:34:34", "24.11.2019 15:46:50", "24.11.2019 20:59:44", "25.11.2019 19:46:26", "26.11.2019 17:00:04", "26.11.2019 19:44:14", "12.12.2019 20:35:44", "13.12.2019 01:17:33", "13.12.2019 10:21:53", "13.12.2019 10:33:29", "13.12.2019 21:41:14", "13.12.2019 22:35:22"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>22.09.2019 19:20:52</b><br>2 osoby<br>1.0% online registrácií", "<b>23.09.2019 10:50:53</b><br>3 osoby<br>2.0% online registrácií", "<b>23.09.2019 12:59:49</b><br>4 osoby<br>3.0% online registrácií", "<b>04.10.2019 17:39:30</b><br>7 osôb<br>5.0% online registrácií", "<b>13.10.2019 18:33:28</b><br>10 osôb<br>7.0% online registrácií", "<b>13.10.2019 21:35:59</b><br>13 osôb<br>9.0% online registrácií", "<b>13.10.2019 22:32:47</b><br>14 osôb<br>10.0% online registrácií", "<b>14.10.2019 12:21:49</b><br>15 osôb<br>10.0% online registrácií", "<b>14.10.2019 13:04:41</b><br>16 osôb<br>11.0% online registrácií", "<b>14.10.2019 14:22:26</b><br>17 osôb<br>12.0% online registrácií", "<b>14.10.2019 17:42:26</b><br>18 osôb<br>12.0% online registrácií", "<b>14.10.2019 23:53:23</b><br>22 osôb<br>15.0% online registrácií", "<b>15.10.2019 13:57:38</b><br>28 osôb<br>19.0% online registrácií", "<b>16.10.2019 11:25:47</b><br>33 osôb<br>23.0% online registrácií", "<b>16.10.2019 19:10:50</b><br>34 osôb<br>24.0% online registrácií", "<b>17.10.2019 11:04:30</b><br>35 osôb<br>24.0% online registrácií", "<b>18.10.2019 09:20:39</b><br>37 osôb<br>26.0% online registrácií", "<b>22.10.2019 23:07:29</b><br>41 osôb<br>28.0% online registrácií", "<b>02.11.2019 16:45:08</b><br>46 osôb<br>32.0% online registrácií", "<b>23.11.2019 03:03:27</b><br>57 osôb<br>40.0% online registrácií", "<b>24.11.2019 14:34:34</b><br>62 osôb<br>43.0% online registrácií", "<b>24.11.2019 15:46:50</b><br>65 osôb<br>45.0% online registrácií", "<b>24.11.2019 20:59:44</b><br>71 osôb<br>49.0% online registrácií", "<b>25.11.2019 19:46:26</b><br>80 osôb<br>56.0% online registrácií", "<b>26.11.2019 17:00:04</b><br>83 osôb<br>58.0% online registrácií", "<b>26.11.2019 19:44:14</b><br>84 osôb<br>58.0% online registrácií", "<b>12.12.2019 20:35:44</b><br>118 osôb<br>82.0% online registrácií", "<b>13.12.2019 01:17:33</b><br>119 osôb<br>83.0% online registrácií", "<b>13.12.2019 10:21:53</b><br>127 osôb<br>88.0% online registrácií", "<b>13.12.2019 10:33:29</b><br>128 osôb<br>89.0% online registrácií", "<b>13.12.2019 21:41:14</b><br>135 osôb<br>94.0% online registrácií", "<b>13.12.2019 22:35:22</b><br>137 osôb<br>95.0% online registrácií"]
	},
	{
	x: [2438.28106481481],
	y: ["122"],
	name: 'neuvedené',
	text: ["13.12.2019 08:46:33"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>13.12.2019 08:46:33</b><br>122 osôb<br>85.0% online registrácií"]
	},
	{
		x: [0, 480.80412037037, 480.853009259259, 496.353287037037, 498.502175925926, 503.284398148148, 687.809120370371, 767.163564814815, 860.248287037037, 860.267731481481, 984.063009259259, 985.38162037037, 986.640787037037, 987.104953703704, 988.05162037037, 1001.86884259259, 1002.58328703704, 1003.87912037037, 1007.2124537037, 1011.42689814815, 1011.75939814815, 1012.08384259259, 1013.3949537037, 1022.78939814815, 1023.43023148148, 1023.75300925926, 1025.77078703704, 1027.46578703704, 1029.11134259259, 1030.31634259259, 1046.59078703704, 1047.4924537037, 1048.9349537037, 1056.68578703704, 1072.58023148148, 1077.92634259259, 1094.84939814815, 1121.9824537037, 1124.24606481482, 1204.17384259259, 1204.6299537037, 1224.46217592593, 1243.3124537037, 1393.99523148148, 1394.04773148148, 1462.2574537037, 1550.50689814815, 1574.60634259259, 1695.80578703704, 1706.81078703704, 1770.06606481481, 1848.82328703704, 1908.35773148148, 1939.08439814815, 1943.13773148148, 1952.56273148148, 1959.64078703704, 1987.84578703704, 1987.86106481481, 1987.97606481481, 1988.08134259259, 1988.72189814815, 1988.9524537037, 1989.28578703704, 1989.96439814815, 1990.09634259259, 1990.22384259259, 1990.27828703704, 1990.68467592593, 1994.50078703704, 1995.02912037037, 1995.89912037037, 1996.58689814815, 2004.97578703704, 2006.67078703704, 2007.01023148148, 2007.18273148148, 2009.42550925926, 2017.27912037037, 2017.75217592593, 2031.86717592593, 2038.50634259259, 2041.2424537037, 2042.29717592592, 2064.21023148148, 2067.93356481481, 2067.97023148148, 2084.68884259259, 2101.18717592592, 2108.32856481481, 2111.69550925926, 2158.25523148148, 2200.15634259259, 2236.03800925926, 2269.76550925926, 2271.36412037037, 2272.75800925926, 2296.34217592592, 2307.38384259259, 2323.0074537037, 2323.13634259259, 2323.28634259259, 2324.03828703704, 2330.19162037037, 2330.9174537037, 2341.83078703704, 2342.17328703704, 2353.92273148148, 2366.72050925926, 2373.98412037037, 2378.09550925926, 2392.29717592592, 2395.01412037037, 2397.02856481481, 2419.33356481481, 2422.01662037037, 2426.10078703704, 2430.79773148148, 2431.96106481481, 2438.16884259259, 2438.28106481481, 2438.36606481481, 2439.11578703704, 2439.45662037037, 2439.55412037037, 2439.8699537037, 2440.06328703704, 2441.6899537037, 2443.99634259259, 2444.81356481481, 2449.06523148148, 2449.7899537037, 2449.92828703704, 2451.1924537037, 2451.65328703704, 2452.09467592592, 2453.43412037037, 2510.0024537037, 2511.05523148148, 2512.02328703704, 2515.95884259259, 2534.39634259259, 2599.00634259259],
		y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144],
		name: "",
		type: 'bar',
		marker: {
			color: ['rgb(255, 255, 255)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)']
		},
		showlegend: false,
		visible: false,
		hoverinfo: 'skip',
		hovermode: "none"
	},
	// registration_timeSeries 2018
	{
	x: [24.38125, 36.0979166666667, 55.0979166666667, 59.2645833333333, 72.53125, 75.5645833333333, 96.0645833333333, 216.48125, 718.947916666667, 719.064583333333, 724.914583333333, 732.53125, 732.614583333334, 732.697916666667, 732.83125, 733.364583333333, 743.047916666667, 753.547916666667, 803.03125, 843.297916666667, 963.53125, 995.68125, 1062.26458333333, 1062.73125, 1067.01458333333, 1082.64791666667, 1138.88125, 1517.38125, 1524.68125, 1536.39791666667, 1539.88125, 1544.84791666667, 1645.33125, 1667.43125, 2047.78125, 2052.18125, 2167.64791666667, 2196.09791666667, 2217.18125, 2234.94791666667, 2257.43125, 2260.31458333333, 2261.73125, 2262.53125, 2269.71458333333, 2269.99791666667, 2282.03125, 2304.08125, 2306.19791666667, 2307.23125, 2307.93125, 2315.69791666667, 2332.66458333333, 2375.63125, 2376.08125, 2378.04791666667, 2382.09791666667, 2404.88125, 2406.44791666667, 2410.09791666667, 2412.03125, 2423.69791666667, 2426.79791666667, 2450.21458333333, 2450.76458333333, 2456.93125, 2472.83125, 2472.86458333333, 2483.93125, 2545.29791666667, 2571.51458333333],
	y: ["1", "3", "4", "6", "10", "12", "15", "16", "21", "23", "26", "27", "28", "29", "30", "32", "33", "35", "36", "37", "38", "39", "41", "42", "43", "44", "46", "47", "48", "49", "50", "52", "53", "54", "56", "57", "59", "60", "61", "63", "64", "65", "66", "67", "68", "69", "70", "72", "73", "74", "75", "78", "79", "80", "81", "82", "84", "91", "93", "94", "95", "96", "97", "98", "99", "100", "102", "103", "105", "107", "108"],
	name: 'Slovensko',
	text: ["03.09.2018 09:09", "03.09.2018 20:52", "04.09.2018 15:52", "04.09.2018 20:02", "05.09.2018 09:18", "05.09.2018 12:20", "06.09.2018 08:50", "11.09.2018 09:15", "02.10.2018 07:43", "02.10.2018 07:50", "02.10.2018 13:41", "02.10.2018 21:18", "02.10.2018 21:23", "02.10.2018 21:28", "02.10.2018 21:36", "02.10.2018 22:08", "03.10.2018 07:49", "03.10.2018 18:19", "05.10.2018 19:48", "07.10.2018 12:04", "12.10.2018 12:18", "13.10.2018 20:27", "16.10.2018 15:02", "16.10.2018 15:30", "16.10.2018 19:47", "17.10.2018 11:25", "19.10.2018 19:39", "04.11.2018 14:09", "04.11.2018 21:27", "05.11.2018 09:10", "05.11.2018 12:39", "05.11.2018 17:37", "09.11.2018 22:06", "10.11.2018 20:12", "26.11.2018 16:33", "26.11.2018 20:57", "01.12.2018 16:25", "02.12.2018 20:52", "03.12.2018 17:57", "04.12.2018 11:43", "05.12.2018 10:12", "05.12.2018 13:05", "05.12.2018 14:30", "05.12.2018 15:18", "05.12.2018 22:29", "05.12.2018 22:46", "06.12.2018 10:48", "07.12.2018 08:51", "07.12.2018 10:58", "07.12.2018 12:00", "07.12.2018 12:42", "07.12.2018 20:28", "08.12.2018 13:26", "10.12.2018 08:24", "10.12.2018 08:51", "10.12.2018 10:49", "10.12.2018 14:52", "11.12.2018 13:39", "11.12.2018 15:13", "11.12.2018 18:52", "11.12.2018 20:48", "12.12.2018 08:28", "12.12.2018 11:34", "13.12.2018 10:59", "13.12.2018 11:32", "13.12.2018 17:42", "14.12.2018 09:36", "14.12.2018 09:38", "14.12.2018 20:42", "17.12.2018 10:04", "18.12.2018 12:17"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>03.09.2018 09:09</b><br>1 osoba<br>1.0% online registrácií", "<b>03.09.2018 20:52</b><br>3 osoby<br>3.0% online registrácií", "<b>04.09.2018 15:52</b><br>4 osoby<br>4.0% online registrácií", "<b>04.09.2018 20:02</b><br>6 osôb<br>5.0% online registrácií", "<b>05.09.2018 09:18</b><br>10 osôb<br>9.0% online registrácií", "<b>05.09.2018 12:20</b><br>12 osôb<br>11.0% online registrácií", "<b>06.09.2018 08:50</b><br>15 osôb<br>14.0% online registrácií", "<b>11.09.2018 09:15</b><br>16 osôb<br>15.0% online registrácií", "<b>02.10.2018 07:43</b><br>21 osôb<br>19.0% online registrácií", "<b>02.10.2018 07:50</b><br>23 osôb<br>21.0% online registrácií", "<b>02.10.2018 13:41</b><br>26 osôb<br>24.0% online registrácií", "<b>02.10.2018 21:18</b><br>27 osôb<br>25.0% online registrácií", "<b>02.10.2018 21:23</b><br>28 osôb<br>25.0% online registrácií", "<b>02.10.2018 21:28</b><br>29 osôb<br>26.0% online registrácií", "<b>02.10.2018 21:36</b><br>30 osôb<br>27.0% online registrácií", "<b>02.10.2018 22:08</b><br>32 osôb<br>29.0% online registrácií", "<b>03.10.2018 07:49</b><br>33 osôb<br>30.0% online registrácií", "<b>03.10.2018 18:19</b><br>35 osôb<br>32.0% online registrácií", "<b>05.10.2018 19:48</b><br>36 osôb<br>33.0% online registrácií", "<b>07.10.2018 12:04</b><br>37 osôb<br>34.0% online registrácií", "<b>12.10.2018 12:18</b><br>38 osôb<br>35.0% online registrácií", "<b>13.10.2018 20:27</b><br>39 osôb<br>35.0% online registrácií", "<b>16.10.2018 15:02</b><br>41 osôb<br>37.0% online registrácií", "<b>16.10.2018 15:30</b><br>42 osôb<br>38.0% online registrácií", "<b>16.10.2018 19:47</b><br>43 osôb<br>39.0% online registrácií", "<b>17.10.2018 11:25</b><br>44 osôb<br>40.0% online registrácií", "<b>19.10.2018 19:39</b><br>46 osôb<br>42.0% online registrácií", "<b>04.11.2018 14:09</b><br>47 osôb<br>43.0% online registrácií", "<b>04.11.2018 21:27</b><br>48 osôb<br>44.0% online registrácií", "<b>05.11.2018 09:10</b><br>49 osôb<br>45.0% online registrácií", "<b>05.11.2018 12:39</b><br>50 osôb<br>45.0% online registrácií", "<b>05.11.2018 17:37</b><br>52 osôb<br>47.0% online registrácií", "<b>09.11.2018 22:06</b><br>53 osôb<br>48.0% online registrácií", "<b>10.11.2018 20:12</b><br>54 osôb<br>49.0% online registrácií", "<b>26.11.2018 16:33</b><br>56 osôb<br>51.0% online registrácií", "<b>26.11.2018 20:57</b><br>57 osôb<br>52.0% online registrácií", "<b>01.12.2018 16:25</b><br>59 osôb<br>54.0% online registrácií", "<b>02.12.2018 20:52</b><br>60 osôb<br>55.0% online registrácií", "<b>03.12.2018 17:57</b><br>61 osôb<br>55.0% online registrácií", "<b>04.12.2018 11:43</b><br>63 osôb<br>57.0% online registrácií", "<b>05.12.2018 10:12</b><br>64 osôb<br>58.0% online registrácií", "<b>05.12.2018 13:05</b><br>65 osôb<br>59.0% online registrácií", "<b>05.12.2018 14:30</b><br>66 osôb<br>60.0% online registrácií", "<b>05.12.2018 15:18</b><br>67 osôb<br>61.0% online registrácií", "<b>05.12.2018 22:29</b><br>68 osôb<br>62.0% online registrácií", "<b>05.12.2018 22:46</b><br>69 osôb<br>63.0% online registrácií", "<b>06.12.2018 10:48</b><br>70 osôb<br>64.0% online registrácií", "<b>07.12.2018 08:51</b><br>72 osôb<br>65.0% online registrácií", "<b>07.12.2018 10:58</b><br>73 osôb<br>66.0% online registrácií", "<b>07.12.2018 12:00</b><br>74 osôb<br>67.0% online registrácií", "<b>07.12.2018 12:42</b><br>75 osôb<br>68.0% online registrácií", "<b>07.12.2018 20:28</b><br>78 osôb<br>71.0% online registrácií", "<b>08.12.2018 13:26</b><br>79 osôb<br>72.0% online registrácií", "<b>10.12.2018 08:24</b><br>80 osôb<br>73.0% online registrácií", "<b>10.12.2018 08:51</b><br>81 osôb<br>74.0% online registrácií", "<b>10.12.2018 10:49</b><br>82 osôb<br>75.0% online registrácií", "<b>10.12.2018 14:52</b><br>84 osôb<br>76.0% online registrácií", "<b>11.12.2018 13:39</b><br>91 osôb<br>83.0% online registrácií", "<b>11.12.2018 15:13</b><br>93 osôb<br>85.0% online registrácií", "<b>11.12.2018 18:52</b><br>94 osôb<br>85.0% online registrácií", "<b>11.12.2018 20:48</b><br>95 osôb<br>86.0% online registrácií", "<b>12.12.2018 08:28</b><br>96 osôb<br>87.0% online registrácií", "<b>12.12.2018 11:34</b><br>97 osôb<br>88.0% online registrácií", "<b>13.12.2018 10:59</b><br>98 osôb<br>89.0% online registrácií", "<b>13.12.2018 11:32</b><br>99 osôb<br>90.0% online registrácií", "<b>13.12.2018 17:42</b><br>100 osôb<br>91.0% online registrácií", "<b>14.12.2018 09:36</b><br>102 osôb<br>93.0% online registrácií", "<b>14.12.2018 09:38</b><br>103 osôb<br>94.0% online registrácií", "<b>14.12.2018 20:42</b><br>105 osôb<br>95.0% online registrácií", "<b>17.12.2018 10:04</b><br>107 osôb<br>97.0% online registrácií", "<b>18.12.2018 12:17</b><br>108 osôb<br>98.0% online registrácií"]
	},
	{
	x: [1950.73125],
	y: ["55"],
	name: 'SR + zahraničie',
	text: ["22.11.2018 15:30"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>22.11.2018 15:30</b><br>55 osôb<br>50.0% online registrácií"]
	},
	{
	x: [31.1479166666667, 56.13125, 59.48125, 59.88125, 69.4645833333333, 72.6979166666667, 75.98125, 77.13125, 240.03125, 506.53125, 512.58125, 717.464583333333, 718.997916666667, 719.464583333333, 719.58125, 733.08125, 1039.26458333333, 1101.93125, 1542.34791666667, 2138.54791666667, 2220.83125, 2295.48125, 2310.29791666667, 2312.13125, 2380.43125, 2385.23125, 2386.69791666667, 2387.56458333333, 2399.71458333333, 2400.23125, 2406.14791666667, 2460.14791666667, 2485.24791666667],
	y: ["2", "5", "7", "8", "9", "11", "13", "14", "17", "18", "19", "20", "22", "24", "25", "31", "40", "45", "51", "58", "62", "71", "76", "77", "83", "86", "87", "88", "89", "90", "92", "101", "106"],
	name: 'zahraničie',
	text: ["03.09.2018 15:55", "04.09.2018 16:54", "04.09.2018 20:15", "04.09.2018 20:39", "05.09.2018 06:14", "05.09.2018 09:28", "05.09.2018 12:45", "05.09.2018 13:54", "12.09.2018 08:48", "23.09.2018 11:18", "23.09.2018 17:21", "02.10.2018 06:14", "02.10.2018 07:46", "02.10.2018 08:14", "02.10.2018 08:21", "02.10.2018 21:51", "15.10.2018 16:02", "18.10.2018 06:42", "05.11.2018 15:07", "30.11.2018 11:19", "03.12.2018 21:36", "07.12.2018 12:15", "07.12.2018 15:04", "07.12.2018 16:54", "10.12.2018 13:12", "10.12.2018 18:00", "10.12.2018 19:28", "10.12.2018 20:20", "11.12.2018 08:29", "11.12.2018 09:00", "11.12.2018 14:55", "13.12.2018 20:55", "14.12.2018 22:01"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>03.09.2018 15:55</b><br>2 osoby<br>2.0% online registrácií", "<b>04.09.2018 16:54</b><br>5 osôb<br>5.0% online registrácií", "<b>04.09.2018 20:15</b><br>7 osôb<br>6.0% online registrácií", "<b>04.09.2018 20:39</b><br>8 osôb<br>7.0% online registrácií", "<b>05.09.2018 06:14</b><br>9 osôb<br>8.0% online registrácií", "<b>05.09.2018 09:28</b><br>11 osôb<br>10.0% online registrácií", "<b>05.09.2018 12:45</b><br>13 osôb<br>12.0% online registrácií", "<b>05.09.2018 13:54</b><br>14 osôb<br>13.0% online registrácií", "<b>12.09.2018 08:48</b><br>17 osôb<br>15.0% online registrácií", "<b>23.09.2018 11:18</b><br>18 osôb<br>16.0% online registrácií", "<b>23.09.2018 17:21</b><br>19 osôb<br>17.0% online registrácií", "<b>02.10.2018 06:14</b><br>20 osôb<br>18.0% online registrácií", "<b>02.10.2018 07:46</b><br>22 osôb<br>20.0% online registrácií", "<b>02.10.2018 08:14</b><br>24 osôb<br>22.0% online registrácií", "<b>02.10.2018 08:21</b><br>25 osôb<br>23.0% online registrácií", "<b>02.10.2018 21:51</b><br>31 osôb<br>28.0% online registrácií", "<b>15.10.2018 16:02</b><br>40 osôb<br>36.0% online registrácií", "<b>18.10.2018 06:42</b><br>45 osôb<br>41.0% online registrácií", "<b>05.11.2018 15:07</b><br>51 osôb<br>46.0% online registrácií", "<b>30.11.2018 11:19</b><br>58 osôb<br>53.0% online registrácií", "<b>03.12.2018 21:36</b><br>62 osôb<br>56.0% online registrácií", "<b>07.12.2018 12:15</b><br>71 osôb<br>65.0% online registrácií", "<b>07.12.2018 15:04</b><br>76 osôb<br>69.0% online registrácií", "<b>07.12.2018 16:54</b><br>77 osôb<br>70.0% online registrácií", "<b>10.12.2018 13:12</b><br>83 osôb<br>75.0% online registrácií", "<b>10.12.2018 18:00</b><br>86 osôb<br>78.0% online registrácií", "<b>10.12.2018 19:28</b><br>87 osôb<br>79.0% online registrácií", "<b>10.12.2018 20:20</b><br>88 osôb<br>80.0% online registrácií", "<b>11.12.2018 08:29</b><br>89 osôb<br>81.0% online registrácií", "<b>11.12.2018 09:00</b><br>90 osôb<br>82.0% online registrácií", "<b>11.12.2018 14:55</b><br>92 osôb<br>84.0% online registrácií", "<b>13.12.2018 20:55</b><br>101 osôb<br>92.0% online registrácií", "<b>14.12.2018 22:01</b><br>106 osôb<br>96.0% online registrácií"]
	},
	{
	x: [747.897916666667, 2384.76458333333, 2473.06458333333],
	y: ["34", "85", "104"],
	name: 'neuvedené',
	text: ["03.10.2018 12:40", "10.12.2018 17:32", "14.12.2018 09:50"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>03.10.2018 12:40</b><br>34 osôb<br>31.0% online registrácií", "<b>10.12.2018 17:32</b><br>85 osôb<br>77.0% online registrácií", "<b>14.12.2018 09:50</b><br>104 osôb<br>95.0% online registrácií"]
	},
	{
		x: [0, 24.38125, 31.1479166666667, 36.0979166666667, 55.0979166666667, 56.13125, 59.2645833333333, 59.48125, 59.88125, 69.4645833333333, 72.53125, 72.6979166666667, 75.5645833333333, 75.98125, 77.13125, 96.0645833333333, 216.48125, 240.03125, 506.53125, 512.58125, 717.464583333333, 718.947916666667, 718.997916666667, 719.064583333333, 719.464583333333, 719.58125, 724.914583333333, 732.53125, 732.614583333334, 732.697916666667, 732.83125, 733.08125, 733.364583333333, 743.047916666667, 747.897916666667, 753.547916666667, 803.03125, 843.297916666667, 963.53125, 995.68125, 1039.26458333333, 1062.26458333333, 1062.73125, 1067.01458333333, 1082.64791666667, 1101.93125, 1138.88125, 1517.38125, 1524.68125, 1536.39791666667, 1539.88125, 1542.34791666667, 1544.84791666667, 1645.33125, 1667.43125, 1950.73125, 2047.78125, 2052.18125, 2138.54791666667, 2167.64791666667, 2196.09791666667, 2217.18125, 2220.83125, 2234.94791666667, 2257.43125, 2260.31458333333, 2261.73125, 2262.53125, 2269.71458333333, 2269.99791666667, 2282.03125, 2295.48125, 2304.08125, 2306.19791666667, 2307.23125, 2307.93125, 2310.29791666667, 2312.13125, 2315.69791666667, 2332.66458333333, 2375.63125, 2376.08125, 2378.04791666667, 2380.43125, 2382.09791666667, 2384.76458333333, 2385.23125, 2386.69791666667, 2387.56458333333, 2399.71458333333, 2400.23125, 2404.88125, 2406.14791666667, 2406.44791666667, 2410.09791666667, 2412.03125, 2423.69791666667, 2426.79791666667, 2450.21458333333, 2450.76458333333, 2456.93125, 2460.14791666667, 2472.83125, 2472.86458333333, 2473.06458333333, 2483.93125, 2485.24791666667, 2545.29791666667, 2571.51458333333],
		y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108],
		name: "",
		type: 'bar',
		marker: {
			color: ['rgb(255, 255, 255)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)']
		},
		showlegend: false,
		visible: false,
		hoverinfo: 'skip',
		hovermode: "none"
	},
	// registration_timeSeries 2017
	{
	x: [433.8128587963, 437.6234143519, 462.0439699074, 583.7114699074, 1259.8950810185, 1262.5178587963, 1269.9864699074, 1270.2753587963, 1272.2614699074, 1273.3292476852, 1274.0506365741, 1274.0692476852, 1274.0931365741, 1274.2461921296, 1274.6692476852, 1274.8078587963, 1275.8700810185, 1277.4536921296, 1279.1050810185, 1283.4323032408, 1283.5664699074, 1297.3278587963, 1300.4684143519, 1319.8356365741, 1321.7423032408, 1322.2048032408, 1358.1017476852, 1379.1278587963, 1402.6981365741, 1418.0764699074, 1444.0939699074, 1464.4948032408, 1465.8964699074, 1474.8206365741, 1501.5036921296, 1514.1217476852, 1519.0159143519, 1567.0009143519, 1613.0836921296, 1694.7798032408, 1764.6759143519, 1782.0498032408, 1799.0523032408, 1959.4428587963, 1968.8756365741, 1971.9678587963, 1992.7948032408, 1992.9603587963, 1994.9642476852, 2019.9350810185, 2031.4275810185, 2125.3906365741, 2141.1928587963, 2163.8889699074, 2218.2909143519, 2218.6334143519, 2234.9767476852, 2240.034525463, 2255.6586921296, 2287.107025463, 2287.1236921296, 2319.4431365741, 2404.539525463, 2439.7061921296, 2448.8661921296, 2449.1517476852, 2449.3859143519, 2450.102025463, 2452.2886921296, 2453.824525463, 2453.839525463, 2471.8289699074, 2475.0706365741, 2476.9711921296, 2478.744525463, 2485.3811921296, 2494.9373032408, 2495.3709143519, 2496.3939699074, 2498.2242476852, 2498.909525463, 2498.9475810185, 2499.929525463, 2499.9548032408, 2501.3967476852, 2502.5659143519, 2503.3234143519, 2503.5798032408, 2503.7892476852, 2527.1681365741, 2533.7161921296, 2534.8773032408, 2545.4311921296, 2547.9809143519, 2549.754525463, 2549.8809143519, 2550.6317476852, 2553.5286921296, 2554.6806365741, 2557.0564699074, 2557.5317476852, 2568.2375810185, 2568.3406365741, 2569.1036921296, 2572.0973032407, 2572.1525810185, 2572.157025463, 2572.3373032408, 2572.7428587963, 2572.9453587963, 2574.78869212963, 2575.6798032408],
	y: ["2", "3", "4", "5", "7", "8", "10", "11", "13", "15", "16", "17", "18", "19", "20", "22", "24", "25", "27", "29", "30", "31", "32", "34", "35", "36", "38", "40", "41", "42", "44", "46", "47", "49", "54", "56", "57", "59", "61", "65", "67", "69", "71", "75", "76", "77", "78", "79", "80", "81", "82", "87", "88", "89", "91", "92", "93", "95", "96", "97", "98", "101", "103", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "116", "117", "123", "125", "126", "128", "130", "131", "132", "134", "135", "137", "138", "139", "140", "141", "143", "145", "147", "151", "153", "154", "155", "156", "158", "159", "161", "162", "164", "165", "166", "169", "170", "171", "172", "176", "178", "180", "182"],
	name: 'Slovensko',
	text: ["20.09.2017 10:34", "20.09.2017 14:22", "21.09.2017 14:47", "26.09.2017 16:27", "24.10.2017 20:38", "24.10.2017 23:16", "25.10.2017 06:44", "25.10.2017 07:01", "25.10.2017 09:00", "25.10.2017 10:05", "25.10.2017 10:48", "25.10.2017 10:49", "25.10.2017 10:50", "25.10.2017 11:00", "25.10.2017 11:25", "25.10.2017 11:33", "25.10.2017 12:37", "25.10.2017 14:12", "25.10.2017 15:51", "25.10.2017 20:11", "25.10.2017 20:19", "26.10.2017 10:04", "26.10.2017 13:13", "27.10.2017 08:35", "27.10.2017 10:29", "27.10.2017 10:57", "28.10.2017 22:51", "29.10.2017 19:52", "30.10.2017 19:27", "31.10.2017 10:49", "01.11.2017 12:50", "02.11.2017 09:14", "02.11.2017 10:39", "02.11.2017 19:34", "03.11.2017 22:15", "04.11.2017 10:52", "04.11.2017 15:46", "06.11.2017 15:45", "08.11.2017 13:50", "11.11.2017 23:32", "14.11.2017 21:25", "15.11.2017 14:48", "16.11.2017 07:48", "23.11.2017 00:11", "23.11.2017 09:37", "23.11.2017 12:43", "24.11.2017 09:32", "24.11.2017 09:42", "24.11.2017 11:43", "25.11.2017 12:41", "26.11.2017 00:10", "29.11.2017 22:08", "30.11.2017 13:56", "01.12.2017 12:38", "03.12.2017 19:02", "03.12.2017 19:23", "04.12.2017 11:43", "04.12.2017 16:47", "05.12.2017 08:24", "06.12.2017 15:51", "06.12.2017 15:52", "08.12.2017 00:11", "11.12.2017 13:17", "13.12.2017 00:27", "13.12.2017 09:37", "13.12.2017 09:54", "13.12.2017 10:08", "13.12.2017 10:51", "13.12.2017 13:02", "13.12.2017 14:34", "13.12.2017 14:35", "14.12.2017 08:35", "14.12.2017 11:49", "14.12.2017 13:43", "14.12.2017 15:29", "14.12.2017 22:08", "15.12.2017 07:41", "15.12.2017 08:07", "15.12.2017 09:08", "15.12.2017 10:58", "15.12.2017 11:39", "15.12.2017 11:42", "15.12.2017 12:41", "15.12.2017 12:42", "15.12.2017 14:09", "15.12.2017 15:19", "15.12.2017 16:04", "15.12.2017 16:20", "15.12.2017 16:32", "16.12.2017 15:55", "16.12.2017 22:28", "16.12.2017 23:37", "17.12.2017 10:11", "17.12.2017 12:44", "17.12.2017 14:30", "17.12.2017 14:38", "17.12.2017 15:23", "17.12.2017 18:17", "17.12.2017 19:26", "17.12.2017 21:48", "17.12.2017 22:17", "18.12.2017 08:59", "18.12.2017 09:05", "18.12.2017 09:51", "18.12.2017 12:51", "18.12.2017 12:54", "18.12.2017 12:54", "18.12.2017 13:05", "18.12.2017 13:29", "18.12.2017 13:42", "18.12.2017 15:33", "18.12.2017 16:26"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(0, 77, 0)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>20.09.2017 10:34</b><br>2 osoby<br>1.0% online registrácií", "<b>20.09.2017 14:22</b><br>3 osoby<br>2.0% online registrácií", "<b>21.09.2017 14:47</b><br>4 osoby<br>2.0% online registrácií", "<b>26.09.2017 16:27</b><br>5 osôb<br>3.0% online registrácií", "<b>24.10.2017 20:38</b><br>7 osôb<br>4.0% online registrácií", "<b>24.10.2017 23:16</b><br>8 osôb<br>4.0% online registrácií", "<b>25.10.2017 06:44</b><br>10 osôb<br>5.0% online registrácií", "<b>25.10.2017 07:01</b><br>11 osôb<br>6.0% online registrácií", "<b>25.10.2017 09:00</b><br>13 osôb<br>7.0% online registrácií", "<b>25.10.2017 10:05</b><br>15 osôb<br>8.0% online registrácií", "<b>25.10.2017 10:48</b><br>16 osôb<br>9.0% online registrácií", "<b>25.10.2017 10:49</b><br>17 osôb<br>9.0% online registrácií", "<b>25.10.2017 10:50</b><br>18 osôb<br>10.0% online registrácií", "<b>25.10.2017 11:00</b><br>19 osôb<br>10.0% online registrácií", "<b>25.10.2017 11:25</b><br>20 osôb<br>11.0% online registrácií", "<b>25.10.2017 11:33</b><br>22 osôb<br>12.0% online registrácií", "<b>25.10.2017 12:37</b><br>24 osôb<br>13.0% online registrácií", "<b>25.10.2017 14:12</b><br>25 osôb<br>14.0% online registrácií", "<b>25.10.2017 15:51</b><br>27 osôb<br>15.0% online registrácií", "<b>25.10.2017 20:11</b><br>29 osôb<br>16.0% online registrácií", "<b>25.10.2017 20:19</b><br>30 osôb<br>16.0% online registrácií", "<b>26.10.2017 10:04</b><br>31 osôb<br>17.0% online registrácií", "<b>26.10.2017 13:13</b><br>32 osôb<br>17.0% online registrácií", "<b>27.10.2017 08:35</b><br>34 osôb<br>18.0% online registrácií", "<b>27.10.2017 10:29</b><br>35 osôb<br>19.0% online registrácií", "<b>27.10.2017 10:57</b><br>36 osôb<br>19.0% online registrácií", "<b>28.10.2017 22:51</b><br>38 osôb<br>21.0% online registrácií", "<b>29.10.2017 19:52</b><br>40 osôb<br>22.0% online registrácií", "<b>30.10.2017 19:27</b><br>41 osôb<br>22.0% online registrácií", "<b>31.10.2017 10:49</b><br>42 osôb<br>23.0% online registrácií", "<b>01.11.2017 12:50</b><br>44 osôb<br>24.0% online registrácií", "<b>02.11.2017 09:14</b><br>46 osôb<br>25.0% online registrácií", "<b>02.11.2017 10:39</b><br>47 osôb<br>25.0% online registrácií", "<b>02.11.2017 19:34</b><br>49 osôb<br>26.0% online registrácií", "<b>03.11.2017 22:15</b><br>54 osôb<br>29.0% online registrácií", "<b>04.11.2017 10:52</b><br>56 osôb<br>30.0% online registrácií", "<b>04.11.2017 15:46</b><br>57 osôb<br>31.0% online registrácií", "<b>06.11.2017 15:45</b><br>59 osôb<br>32.0% online registrácií", "<b>08.11.2017 13:50</b><br>61 osôb<br>33.0% online registrácií", "<b>11.11.2017 23:32</b><br>65 osôb<br>35.0% online registrácií", "<b>14.11.2017 21:25</b><br>67 osôb<br>36.0% online registrácií", "<b>15.11.2017 14:48</b><br>69 osôb<br>37.0% online registrácií", "<b>16.11.2017 07:48</b><br>71 osôb<br>38.0% online registrácií", "<b>23.11.2017 00:11</b><br>75 osôb<br>41.0% online registrácií", "<b>23.11.2017 09:37</b><br>76 osôb<br>41.0% online registrácií", "<b>23.11.2017 12:43</b><br>77 osôb<br>42.0% online registrácií", "<b>24.11.2017 09:32</b><br>78 osôb<br>42.0% online registrácií", "<b>24.11.2017 09:42</b><br>79 osôb<br>43.0% online registrácií", "<b>24.11.2017 11:43</b><br>80 osôb<br>43.0% online registrácií", "<b>25.11.2017 12:41</b><br>81 osôb<br>44.0% online registrácií", "<b>26.11.2017 00:10</b><br>82 osôb<br>44.0% online registrácií", "<b>29.11.2017 22:08</b><br>87 osôb<br>47.0% online registrácií", "<b>30.11.2017 13:56</b><br>88 osôb<br>48.0% online registrácií", "<b>01.12.2017 12:38</b><br>89 osôb<br>48.0% online registrácií", "<b>03.12.2017 19:02</b><br>91 osôb<br>49.0% online registrácií", "<b>03.12.2017 19:23</b><br>92 osôb<br>50.0% online registrácií", "<b>04.12.2017 11:43</b><br>93 osôb<br>50.0% online registrácií", "<b>04.12.2017 16:47</b><br>95 osôb<br>51.0% online registrácií", "<b>05.12.2017 08:24</b><br>96 osôb<br>52.0% online registrácií", "<b>06.12.2017 15:51</b><br>97 osôb<br>52.0% online registrácií", "<b>06.12.2017 15:52</b><br>98 osôb<br>53.0% online registrácií", "<b>08.12.2017 00:11</b><br>101 osôb<br>55.0% online registrácií", "<b>11.12.2017 13:17</b><br>103 osôb<br>56.0% online registrácií", "<b>13.12.2017 00:27</b><br>105 osôb<br>57.0% online registrácií", "<b>13.12.2017 09:37</b><br>106 osôb<br>57.0% online registrácií", "<b>13.12.2017 09:54</b><br>107 osôb<br>58.0% online registrácií", "<b>13.12.2017 10:08</b><br>108 osôb<br>58.0% online registrácií", "<b>13.12.2017 10:51</b><br>109 osôb<br>59.0% online registrácií", "<b>13.12.2017 13:02</b><br>110 osôb<br>59.0% online registrácií", "<b>13.12.2017 14:34</b><br>111 osôb<br>60.0% online registrácií", "<b>13.12.2017 14:35</b><br>112 osôb<br>61.0% online registrácií", "<b>14.12.2017 08:35</b><br>113 osôb<br>61.0% online registrácií", "<b>14.12.2017 11:49</b><br>114 osôb<br>62.0% online registrácií", "<b>14.12.2017 13:43</b><br>116 osôb<br>63.0% online registrácií", "<b>14.12.2017 15:29</b><br>117 osôb<br>63.0% online registrácií", "<b>14.12.2017 22:08</b><br>123 osôb<br>66.0% online registrácií", "<b>15.12.2017 07:41</b><br>125 osôb<br>68.0% online registrácií", "<b>15.12.2017 08:07</b><br>126 osôb<br>68.0% online registrácií", "<b>15.12.2017 09:08</b><br>128 osôb<br>69.0% online registrácií", "<b>15.12.2017 10:58</b><br>130 osôb<br>70.0% online registrácií", "<b>15.12.2017 11:39</b><br>131 osôb<br>71.0% online registrácií", "<b>15.12.2017 11:42</b><br>132 osôb<br>71.0% online registrácií", "<b>15.12.2017 12:41</b><br>134 osôb<br>72.0% online registrácií", "<b>15.12.2017 12:42</b><br>135 osôb<br>73.0% online registrácií", "<b>15.12.2017 14:09</b><br>137 osôb<br>74.0% online registrácií", "<b>15.12.2017 15:19</b><br>138 osôb<br>75.0% online registrácií", "<b>15.12.2017 16:04</b><br>139 osôb<br>75.0% online registrácií", "<b>15.12.2017 16:20</b><br>140 osôb<br>76.0% online registrácií", "<b>15.12.2017 16:32</b><br>141 osôb<br>76.0% online registrácií", "<b>16.12.2017 15:55</b><br>143 osôb<br>77.0% online registrácií", "<b>16.12.2017 22:28</b><br>145 osôb<br>78.0% online registrácií", "<b>16.12.2017 23:37</b><br>147 osôb<br>79.0% online registrácií", "<b>17.12.2017 10:11</b><br>151 osôb<br>82.0% online registrácií", "<b>17.12.2017 12:44</b><br>153 osôb<br>83.0% online registrácií", "<b>17.12.2017 14:30</b><br>154 osôb<br>83.0% online registrácií", "<b>17.12.2017 14:38</b><br>155 osôb<br>84.0% online registrácií", "<b>17.12.2017 15:23</b><br>156 osôb<br>84.0% online registrácií", "<b>17.12.2017 18:17</b><br>158 osôb<br>85.0% online registrácií", "<b>17.12.2017 19:26</b><br>159 osôb<br>86.0% online registrácií", "<b>17.12.2017 21:48</b><br>161 osôb<br>87.0% online registrácií", "<b>17.12.2017 22:17</b><br>162 osôb<br>88.0% online registrácií", "<b>18.12.2017 08:59</b><br>164 osôb<br>89.0% online registrácií", "<b>18.12.2017 09:05</b><br>165 osôb<br>89.0% online registrácií", "<b>18.12.2017 09:51</b><br>166 osôb<br>90.0% online registrácií", "<b>18.12.2017 12:51</b><br>169 osôb<br>91.0% online registrácií", "<b>18.12.2017 12:54</b><br>170 osôb<br>92.0% online registrácií", "<b>18.12.2017 12:54</b><br>171 osôb<br>92.0% online registrácií", "<b>18.12.2017 13:05</b><br>172 osôb<br>93.0% online registrácií", "<b>18.12.2017 13:29</b><br>176 osôb<br>95.0% online registrácií", "<b>18.12.2017 13:42</b><br>178 osôb<br>96.0% online registrácií", "<b>18.12.2017 15:33</b><br>180 osôb<br>97.0% online registrácií", "<b>18.12.2017 16:26</b><br>182 osôb<br>98.0% online registrácií"]
	},
	{
	x: [1280.5092476852, 1585.3131365741, 1619.5664699074, 2485.8128587963],
	y: ["28", "60", "62", "124"],
	name: 'SR + zahraničie',
	text: ["25.10.2017 17:15", "07.11.2017 10:04", "08.11.2017 20:19", "14.12.2017 22:34"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(161, 80, 22)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>25.10.2017 17:15</b><br>28 osôb<br>15.0% online registrácií", "<b>07.11.2017 10:04</b><br>60 osôb<br>32.0% online registrácií", "<b>08.11.2017 20:19</b><br>62 osôb<br>34.0% online registrácií", "<b>14.12.2017 22:34</b><br>124 osôb<br>67.0% online registrácií"]
	},
	{
	x: [432.3806365741, 1189.002025463, 1263.0225810185, 1271.7898032407, 1272.8050810185, 1274.6961921296, 1275.1734143519, 1277.939525463, 1355.809525463, 1378.4600810185, 1424.889525463, 1455.0767476852, 1474.6875810185, 1490.7856365741, 1499.7367476852, 1500.0078587963, 1501.4764699074, 1501.7506365741, 1540.1900810185, 1665.7028587963, 1682.3764699074, 1777.8973032408, 1786.5198032408, 1860.6900810185, 2052.4809143519, 2052.4898032408, 2066.0281365741, 2066.7984143519, 2213.8081365741, 2238.6214699074, 2293.1161921296, 2316.4056365741, 2329.0261921296, 2476.894525463, 2479.3686921296, 2481.3706365741, 2481.4036921296, 2496.2700810185, 2497.877025463, 2499.0728587963, 2500.5167476852, 2506.6906365741, 2528.4498032408, 2534.4759143519, 2535.5839699074, 2536.4723032408, 2544.6475810185, 2546.5325810185, 2552.1639699074, 2555.092025463, 2571.1198032408, 2572.0534143519, 2572.3723032408, 2572.3681365741, 2572.4211921296, 2572.7750810185, 2573.01619212963, 2575.6567476852, 2575.7067476852],
	y: ["1", "6", "9", "12", "14", "21", "23", "26", "37", "39", "43", "45", "48", "50", "51", "52", "53", "55", "58", "63", "64", "68", "70", "72", "83", "84", "85", "86", "90", "94", "99", "100", "102", "115", "118", "120", "121", "127", "129", "133", "136", "142", "144", "146", "148", "149", "150", "152", "157", "160", "167", "168", "173", "174", "175", "177", "179", "181", "183"],
	name: 'zahraničie',
	text: ["20.09.2017 09:08", "21.10.2017 21:45", "24.10.2017 23:46", "25.10.2017 08:32", "25.10.2017 09:33", "25.10.2017 11:27", "25.10.2017 11:55", "25.10.2017 14:41", "28.10.2017 20:33", "29.10.2017 19:12", "31.10.2017 17:38", "01.11.2017 23:49", "02.11.2017 19:26", "03.11.2017 11:32", "03.11.2017 20:29", "03.11.2017 20:45", "03.11.2017 22:13", "03.11.2017 22:30", "05.11.2017 12:56", "10.11.2017 18:27", "11.11.2017 11:07", "15.11.2017 10:39", "15.11.2017 19:16", "18.11.2017 21:26", "26.11.2017 21:14", "26.11.2017 21:14", "27.11.2017 10:46", "27.11.2017 11:33", "03.12.2017 14:33", "04.12.2017 15:22", "06.12.2017 21:52", "07.12.2017 21:09", "08.12.2017 09:46", "14.12.2017 13:38", "14.12.2017 16:07", "14.12.2017 18:07", "14.12.2017 18:09", "15.12.2017 09:01", "15.12.2017 10:37", "15.12.2017 11:49", "15.12.2017 13:16", "15.12.2017 19:26", "16.12.2017 17:12", "16.12.2017 23:13", "17.12.2017 00:20", "17.12.2017 01:13", "17.12.2017 09:24", "17.12.2017 11:17", "17.12.2017 16:55", "17.12.2017 19:50", "18.12.2017 11:52", "18.12.2017 12:48", "18.12.2017 13:07", "18.12.2017 13:07", "18.12.2017 13:10", "18.12.2017 13:31", "18.12.2017 13:46", "18.12.2017 16:24", "18.12.2017 16:27"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(255, 127, 14)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>20.09.2017 09:08</b><br>1 osoba<br>1.0% online registrácií", "<b>21.10.2017 21:45</b><br>6 osôb<br>3.0% online registrácií", "<b>24.10.2017 23:46</b><br>9 osôb<br>5.0% online registrácií", "<b>25.10.2017 08:32</b><br>12 osôb<br>6.0% online registrácií", "<b>25.10.2017 09:33</b><br>14 osôb<br>8.0% online registrácií", "<b>25.10.2017 11:27</b><br>21 osôb<br>11.0% online registrácií", "<b>25.10.2017 11:55</b><br>23 osôb<br>12.0% online registrácií", "<b>25.10.2017 14:41</b><br>26 osôb<br>14.0% online registrácií", "<b>28.10.2017 20:33</b><br>37 osôb<br>20.0% online registrácií", "<b>29.10.2017 19:12</b><br>39 osôb<br>21.0% online registrácií", "<b>31.10.2017 17:38</b><br>43 osôb<br>23.0% online registrácií", "<b>01.11.2017 23:49</b><br>45 osôb<br>24.0% online registrácií", "<b>02.11.2017 19:26</b><br>48 osôb<br>26.0% online registrácií", "<b>03.11.2017 11:32</b><br>50 osôb<br>27.0% online registrácií", "<b>03.11.2017 20:29</b><br>51 osôb<br>28.0% online registrácií", "<b>03.11.2017 20:45</b><br>52 osôb<br>28.0% online registrácií", "<b>03.11.2017 22:13</b><br>53 osôb<br>29.0% online registrácií", "<b>03.11.2017 22:30</b><br>55 osôb<br>30.0% online registrácií", "<b>05.11.2017 12:56</b><br>58 osôb<br>31.0% online registrácií", "<b>10.11.2017 18:27</b><br>63 osôb<br>34.0% online registrácií", "<b>11.11.2017 11:07</b><br>64 osôb<br>35.0% online registrácií", "<b>15.11.2017 10:39</b><br>68 osôb<br>37.0% online registrácií", "<b>15.11.2017 19:16</b><br>70 osôb<br>38.0% online registrácií", "<b>18.11.2017 21:26</b><br>72 osôb<br>39.0% online registrácií", "<b>26.11.2017 21:14</b><br>83 osôb<br>45.0% online registrácií", "<b>26.11.2017 21:14</b><br>84 osôb<br>45.0% online registrácií", "<b>27.11.2017 10:46</b><br>85 osôb<br>46.0% online registrácií", "<b>27.11.2017 11:33</b><br>86 osôb<br>46.0% online registrácií", "<b>03.12.2017 14:33</b><br>90 osôb<br>49.0% online registrácií", "<b>04.12.2017 15:22</b><br>94 osôb<br>51.0% online registrácií", "<b>06.12.2017 21:52</b><br>99 osôb<br>54.0% online registrácií", "<b>07.12.2017 21:09</b><br>100 osôb<br>54.0% online registrácií", "<b>08.12.2017 09:46</b><br>102 osôb<br>55.0% online registrácií", "<b>14.12.2017 13:38</b><br>115 osôb<br>62.0% online registrácií", "<b>14.12.2017 16:07</b><br>118 osôb<br>64.0% online registrácií", "<b>14.12.2017 18:07</b><br>120 osôb<br>65.0% online registrácií", "<b>14.12.2017 18:09</b><br>121 osôb<br>65.0% online registrácií", "<b>15.12.2017 09:01</b><br>127 osôb<br>69.0% online registrácií", "<b>15.12.2017 10:37</b><br>129 osôb<br>70.0% online registrácií", "<b>15.12.2017 11:49</b><br>133 osôb<br>72.0% online registrácií", "<b>15.12.2017 13:16</b><br>136 osôb<br>74.0% online registrácií", "<b>15.12.2017 19:26</b><br>142 osôb<br>77.0% online registrácií", "<b>16.12.2017 17:12</b><br>144 osôb<br>78.0% online registrácií", "<b>16.12.2017 23:13</b><br>146 osôb<br>79.0% online registrácií", "<b>17.12.2017 00:20</b><br>148 osôb<br>80.0% online registrácií", "<b>17.12.2017 01:13</b><br>149 osôb<br>81.0% online registrácií", "<b>17.12.2017 09:24</b><br>150 osôb<br>81.0% online registrácií", "<b>17.12.2017 11:17</b><br>152 osôb<br>82.0% online registrácií", "<b>17.12.2017 16:55</b><br>157 osôb<br>85.0% online registrácií", "<b>17.12.2017 19:50</b><br>160 osôb<br>86.0% online registrácií", "<b>18.12.2017 11:52</b><br>167 osôb<br>90.0% online registrácií", "<b>18.12.2017 12:48</b><br>168 osôb<br>91.0% online registrácií", "<b>18.12.2017 13:07</b><br>173 osôb<br>94.0% online registrácií", "<b>18.12.2017 13:07</b><br>174 osôb<br>94.0% online registrácií", "<b>18.12.2017 13:10</b><br>175 osôb<br>95.0% online registrácií", "<b>18.12.2017 13:31</b><br>177 osôb<br>96.0% online registrácií", "<b>18.12.2017 13:46</b><br>179 osôb<br>97.0% online registrácií", "<b>18.12.2017 16:24</b><br>181 osôb<br>98.0% online registrácií", "<b>18.12.2017 16:27</b><br>183 osôb<br>99.0% online registrácií"]
	},
	{
	x: [1305.3306365741, 1733.5161921296, 1896.8778587963, 1957.8536921296, 2404.5586921296, 2481.1686921296, 2481.4856365741, 2559.0809143519],
	y: ["33", "66", "73", "74", "104", "119", "122", "163"],
	name: 'neuvedené',
	text: ["26.10.2017 18:05", "13.11.2017 14:16", "20.11.2017 09:37", "22.11.2017 22:36", "11.12.2017 13:18", "14.12.2017 17:55", "14.12.2017 18:14", "17.12.2017 23:50"],
	type: "scatter",
	mode: 'markers',
	marker: {
			color: 'rgb(124, 124, 124)'
		},
	visible: false,
	hoverinfo: 'text',
	hovermode: "closest",
	hovertext: ["<b>26.10.2017 18:05</b><br>33 osôb<br>18.0% online registrácií", "<b>13.11.2017 14:16</b><br>66 osôb<br>36.0% online registrácií", "<b>20.11.2017 09:37</b><br>73 osôb<br>39.0% online registrácií", "<b>22.11.2017 22:36</b><br>74 osôb<br>40.0% online registrácií", "<b>11.12.2017 13:18</b><br>104 osôb<br>56.0% online registrácií", "<b>14.12.2017 17:55</b><br>119 osôb<br>64.0% online registrácií", "<b>14.12.2017 18:14</b><br>122 osôb<br>66.0% online registrácií", "<b>17.12.2017 23:50</b><br>163 osôb<br>88.0% online registrácií"]
	},
	{
		x: [0, 432.3806365741, 433.8128587963, 437.6234143519, 462.0439699074, 583.7114699074, 1189.002025463, 1259.8950810185, 1262.5178587963, 1263.0225810185, 1269.9864699074, 1270.2753587963, 1271.7898032407, 1272.2614699074, 1272.8050810185, 1273.3292476852, 1274.0506365741, 1274.0692476852, 1274.0931365741, 1274.2461921296, 1274.6692476852, 1274.6961921296, 1274.8078587963, 1275.1734143519, 1275.8700810185, 1277.4536921296, 1277.939525463, 1279.1050810185, 1280.5092476852, 1283.4323032408, 1283.5664699074, 1297.3278587963, 1300.4684143519, 1305.3306365741, 1319.8356365741, 1321.7423032408, 1322.2048032408, 1355.809525463, 1358.1017476852, 1378.4600810185, 1379.1278587963, 1402.6981365741, 1418.0764699074, 1424.889525463, 1444.0939699074, 1455.0767476852, 1464.4948032408, 1465.8964699074, 1474.6875810185, 1474.8206365741, 1490.7856365741, 1499.7367476852, 1500.0078587963, 1501.4764699074, 1501.5036921296, 1501.7506365741, 1514.1217476852, 1519.0159143519, 1540.1900810185, 1567.0009143519, 1585.3131365741, 1613.0836921296, 1619.5664699074, 1665.7028587963, 1682.3764699074, 1694.7798032408, 1733.5161921296, 1764.6759143519, 1777.8973032408, 1782.0498032408, 1786.5198032408, 1799.0523032408, 1860.6900810185, 1896.8778587963, 1957.8536921296, 1959.4428587963, 1968.8756365741, 1971.9678587963, 1992.7948032408, 1992.9603587963, 1994.9642476852, 2019.9350810185, 2031.4275810185, 2052.4809143519, 2052.4898032408, 2066.0281365741, 2066.7984143519, 2125.3906365741, 2141.1928587963, 2163.8889699074, 2213.8081365741, 2218.2909143519, 2218.6334143519, 2234.9767476852, 2238.6214699074, 2240.034525463, 2255.6586921296, 2287.107025463, 2287.1236921296, 2293.1161921296, 2316.4056365741, 2319.4431365741, 2329.0261921296, 2404.539525463, 2404.5586921296, 2439.7061921296, 2448.8661921296, 2449.1517476852, 2449.3859143519, 2450.102025463, 2452.2886921296, 2453.824525463, 2453.839525463, 2471.8289699074, 2475.0706365741, 2476.894525463, 2476.9711921296, 2478.744525463, 2479.3686921296, 2481.1686921296, 2481.3706365741, 2481.4036921296, 2481.4856365741, 2485.3811921296, 2485.8128587963, 2494.9373032408, 2495.3709143519, 2496.2700810185, 2496.3939699074, 2497.877025463, 2498.2242476852, 2498.909525463, 2498.9475810185, 2499.0728587963, 2499.929525463, 2499.9548032408, 2500.5167476852, 2501.3967476852, 2502.5659143519, 2503.3234143519, 2503.5798032408, 2503.7892476852, 2506.6906365741, 2527.1681365741, 2528.4498032408, 2533.7161921296, 2534.4759143519, 2534.8773032408, 2535.5839699074, 2536.4723032408, 2544.6475810185, 2545.4311921296, 2546.5325810185, 2547.9809143519, 2549.754525463, 2549.8809143519, 2550.6317476852, 2552.1639699074, 2553.5286921296, 2554.6806365741, 2555.092025463, 2557.0564699074, 2557.5317476852, 2559.0809143519, 2568.2375810185, 2568.3406365741, 2569.1036921296, 2571.1198032408, 2572.0534143519, 2572.0973032407, 2572.1525810185, 2572.157025463, 2572.3373032408, 2572.3723032408, 2572.3681365741, 2572.4211921296, 2572.7428587963, 2572.7750810185, 2572.9453587963, 2573.01619212963, 2574.78869212963, 2575.6567476852, 2575.6798032408, 2575.7067476852],
		y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183],
		name: "",
		type: 'bar',
		marker: {
			color: ['rgb(255, 255, 255)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(161, 80, 22)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(124, 124, 124)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 77, 0)', 'rgb(255, 127, 14)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)', 'rgb(0, 0, 255)']
		},
		showlegend: false,
		visible: false,
		hoverinfo: 'skip',
		hovermode: "none"
	}
];

var data_registration_timeLabels = ["", "14.10.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "2.11.", "", "", "", "", "", "", "", "", "", "", "", "14.11.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "21.11.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "1.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "12.12.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "20.12."];

var updateMenu_sunburst = [{
	buttons: [
	{
		args: ['visible', [true, false, false, false, false]],
		label: '2022',
		method: 'restyle'
	},
	{
		args: ['visible', [false, true, false, false, false]],
		label: '2021',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, true, false, false]],
		label: '2019',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, true, false]],
		label: '2018',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, true]],
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

var updateMenu_institution_country = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
		label: '2022',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
		label: '2021',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false]],
		label: '2019',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, false, false, false, false, false, false]],
		label: '2018',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true]],
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

var updateMenu_institution_gender = [{
	buttons: [
	{
		args: ['visible', [true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
		label: '2022',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false]],
		label: '2021',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, true, true, true, true, true, false, false, false, false, false, false, false, false]],
		label: '2019',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, false, true, true, true, true, false, false, false, false]],
		label: '2018',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true]],
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

var updateMenu_position_country = [{
	buttons: [
	{
		args: ['visible', [true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
		label: '2022',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
		label: '2021',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false]],
		label: '2019',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, false, false, false, false, false, false]],
		label: '2018',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true]],
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
		args: ['visible', [true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
		label: '2022',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false]],
		label: '2021',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, true, true, true, true, true, false, false, false, false, false, false, false, false]],
		label: '2019',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, false, true, true, true, true, false, false, false, false]],
		label: '2018',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true]],
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

var updateMenu_registration_timeSeries = [{
	buttons: [
	{
		args: [
			{'visible': [true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]},
			{'xaxis': {
				'title': "<b>Deň prihlásenia v roku 2022</b>",
				'tickvals': data_registration_timeSeries[4]['x'],
				'ticktext': data_registration_timeLabels_2022}
			}
		],
		label: '2022',
		method: 'update'
	},
	{
		args: [
			{'visible': [false, false, false, false, false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]},
			{'xaxis': {
				'title': "<b>Deň prihlásenia v roku 2021</b>",
				'tickvals': data_registration_timeSeries[8]['x'],
				'ticktext': data_registration_timeLabels_2021}
			}
		],
		label: '2021',
		method: 'update'
	},
	{
		args: [
			{'visible': [false, false, false, false, false, false, false, false, false, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false]},
			{'xaxis': {
				'title': "<b>Deň prihlásenia v roku 2019</b>",
				'tickvals': data_registration_timeSeries[13]['x'],
				'ticktext': data_registration_timeLabels_2019}
			}
		],
		label: '2019',
		method: 'update'
	},
	{
		args: [
			{'visible': [false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, false, false, false, false, false]},
			{'xaxis': {
				'title': "<b>Deň prihlásenia v roku 2018</b>",
				'tickvals': data_registration_timeSeries[18]['x'],
				'ticktext': data_registration_timeLabels_2018}
			}
		],
		label: '2018',
		method: 'update'
	},
	{
		args: [
			{'visible': [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true]},
			{'xaxis': {
				'title': "<b>Deň prihlásenia v roku 2017</b>",
				'tickvals': data_registration_timeSeries[23]['x'],
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
}];// tempskips: do not remove
var updateMenu_sunburst_tempSkip = [{
	buttons: [
	{
		args: ['visible', [true, false, false, false, false]],
		label: '2022',
		method: 'restyle'
	},
	{
		args: ['visible', [false, true, false, false, false]],
		label: '2021',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false]],
		label: '2019',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, true, false]],
		label: '2018',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, true]],
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

var updateMenu_position_gender_tempSkip = [{
	buttons: [
	{
		args: ['visible', [true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
		label: '2022',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false]],
		label: '2021',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
		label: '2019',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, false, true, true, true, true, false, false, false, false]],
		label: '2018',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true]],
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
		args: ['visible', [true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
		label: '2022',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
		label: '2021',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
		label: '2019',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, false, false, false, false, false, false]],
		label: '2018',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true]],
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
		args: ['visible', [true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
		label: '2022',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false]],
		label: '2021',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]],
		label: '2019',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, false, true, true, true, true, false, false, false, false]],
		label: '2018',
		method: 'restyle'
	},
	{
		args: ['visible', [false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true]],
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
