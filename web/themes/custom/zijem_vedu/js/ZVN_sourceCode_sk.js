window.PLOTLYENV=window.PLOTLYENV || {};
window.PLOTLYENV.BASE_URL="https://plot.ly";

var settings = {
	most_recent_year: 2021,
	// ordered IDs
	id: [
		"participation",
		"participation_detail",
		"abroad",
		"skipFigure",
		"skipFigure",
		"registration_timeSeries",
		"institution_country",
		"institution_gender",
		"position_country",
		"position_gender",
		"subject"
	],
	figName: [
		"Prehľad registrovaných",
		"Prehľad zúčastnených",
		"Prehľad pôsobiska zúčastnených",
		"Podrobnejší náhľad na pôsobisko účastníkov v rámci Európy",	// skip figure
		"Porovnanie rokov 2017 a 2018: pôsobisko účastníkov",				// skip figure
		"Priebeh prihlasovania z domova a zo zahraničia",
		"Typ pracoviska účastníkov z domova a zo zahraničia",
		"Typ pracoviska účastníčiek a účastníkov",
		"Pracovné zaradenie účastníkov z domova a zo zahraničia",
		"Pracovné zaradenie účastníčiek a účastníkov",
		"Prehľad zastúpenia vedných odborov"	
	],
	compileFigname: function (i) {
		return "Obr. " + (i+1) + ": " + this.figName[i];
	},
	set_bold: function (txt) {
		return("<b>" + txt + "</b>")
	},
	set_title: function (currentId) {
		if (currentId.includes("position")) {
			return(this.set_bold("Počet osôb na pozícii daného typu"));
		}
		else if (currentId.includes("institution")) {
			return(this.set_bold("Počet osôb z daného typu inštitúcie"));
		}
	},
	set_yMax: function (add_updateMenu, year) {
		var yMax = {
			year_2021: 200,
			year_2019: 150,
			year_2018: 125,
			year_2017: 200
		};
		
		if (add_updateMenu == true) {
			var yMax_values = [];
			for (var key in yMax) {
				yMax_values.push(yMax[key]);
			}
			this_yMax = Math.max(...yMax_values);
		}
		else {
			this_yMax = yMax[this.specify("year", year)];
		}
		return(this_yMax);
	},
	compileLayout: function (year, currentId, i, temp_remove) {
		var layout;
		
		// sunburst plot
		if (currentId.includes("participation") || [this.specify("abroad", year), this.specify("subject", year)].includes(currentId)) {
			layout = {
				title: this.compileFigname(i),
				margin: {l: 0, r: 0, b: 25, t: 25},
 				width: 750,
  				height: 350
			}			
			if (year == "conclusion") {
				layout.updatemenus = temp_remove.includes(currentId)
				? updateMenu_sunburst_tempSkip
				: layout.updatemenus = updateMenu_sunburst
			}
			
			return layout;
		}
		else if (currentId == this.specify("registration_timeSeries", year)) {
			var add_updateMenu = false;
			
			// conclusion default: the most recent year
			if (year == "conclusion") {
				year = settings.most_recent_year;
				add_updateMenu = true;
			}
			
			var registration_labels = window[this.specify("data_registration_timeLabels", year)];
			var registration_ticks = window[this.specify("data_registration_timeSeries", year)];
			var j = year > 2018 ? 3 : 4;
						
			// y limit: together => the same for all years; separate => own for each year
			var this_yMax = this.set_yMax(add_updateMenu, year);
				
			layout = {
				width: 1000,
  				height: 350,
				title: this.compileFigname(i),
    			xaxis: {
	    			title: this.set_bold("Deň prihlásenia v roku " + year),
    				tickvals: registration_ticks[j].x,	// timestamp
    				ticktext: registration_labels,		// x axis labels
    				ticks: 'outside',
    				ticklen: 15
    			}, 
    			yaxis: {
	    		 	title: 'Počet prihlásených účastníkov',
    				range: [0, this_yMax]
    			}
    		};
    		if (add_updateMenu == true) {
				layout.updatemenus = updateMenu_registration_timeSeries;
			}

			return layout;
		}
		else if (currentId.includes("position") || currentId.includes("institution")) {
			updateMenu_suffix = ""
			
			if (year == "conclusion") {
				currentId = currentId.replace("_" + year, "");
				
				if (temp_remove.includes(currentId) & currentId != "position_gender") {
					updateMenu_suffix = "_tempSkip"
				}
			}
			
			return {
				autosize: false,
 				width: 850,
 				height: 425,
 				margin: {l: 50, r: 0, b: 50, t: 80, pad: 4},
				barmode: 'group', 
				title: this.compileFigname(i),
    			xaxis: {
    			  	title: this.set_title(currentId),
    			  	showline: false, 
    			  	showgrid: true
    			},
    			yaxis: {
    				autorange: 'reversed',
    				automargin: true
    			},
    			hovermode: "y",
  				updatemenus: window["updateMenu_" + currentId + updateMenu_suffix]
    		};
		}
	},
	specify: function(txt, year) {
		if (year != "conclusion") {
			return txt + "_" + year;
		}
		return txt;
	},
	language_setupData: function(dataset, languageVersion) {
		n = dataset.length;
		option = ['labels', 'y'];
		n_opt = option.length;
		
		for (var i = 0; i < n_opt; i++) {
			oldKey = option[i] + '_' + languageVersion;
			
			for (var j = 0; j < n; j++) {
				if (dataset[j].hasOwnProperty(oldKey)) {
					dataset[j][option[i]] = dataset[j][oldKey];
 			 	 	delete dataset[j][oldKey];
				}
			}
		}
		return dataset;
	},
	language_setupString: function (txt, languageVersion) {
		return txt + "_" + languageVersion;
	},
	plot: function (year, languageVersion) {
		var n = settings.id.length;
		var varName,
	 		 layout, 
	 		 id, 
	 		 dataset;
		var temp_remove = ["participation", "position_gender", "institution_country", "institution_gender"];
		var except2021 = ["participation", "position_gender"]

		for (var i = 0; i < n; i++) {
			id = this.id[i];
			// 2019: temporarily disable empty plots
			if ((year == 2019 || year == 2021) && temp_remove.includes(id) && !(year == 2021 && except2021.includes(id))) {
				continue;
			}
	
			if (id != "skipFigure") {
				id = this.specify(id, year);
				dataset = window['data_' + id];
				
				//dataset = this.language_setupData(dataset, languageVersion);
				// 2019: temporarily edit dataset visibility for empty plots
				//if (year == 'conclusion' && temp_remove.includes(id)) {
				//	edit = dataset;
				//	console.log(edit)
				//	n_edit = edit.length / 3;
				//	console.log(id, n_edit)
					
				//	for (var k = 0; k < n_edit; k++) {
				//		if (edit[k]['visible'] == true) {
				//			dataset[k]['visible'] = false;
				//		}							
				//	}
				//}
								
				layout = this.compileLayout(year, id, i, temp_remove);
				Plotly.newPlot(this.language_setupString(id, languageVersion), dataset, layout, {"plotlyServerURL": "https://plot.ly"});		
				
				// make redundant xTicks transparent
				this.edit_timeSeries_xTicks(id, year, languageVersion);
			}
		}
		return 0
	},
	edit_timeSeries_xTicks: function(currentId, year, languageVersion) {
		if (currentId == this.specify("registration_timeSeries", year)) {
			currentId = this.language_setupString(currentId, languageVersion);
			var container = document.getElementById(currentId);
			var subcontainer = container.getElementsByClassName("xaxislayer-above");
			var ticks = subcontainer[0].getElementsByClassName('xtick ticks crisp');
			var registration_labels = window[this.specify("data_registration_timeLabels", year)];
						
			n = ticks.length;	
			for (var j = 0; j < n; j++) {
				if (registration_labels[j] == "") {
					ticks[j].setAttribute('style', 'stroke-opacity = 0');
				}
			}
		}
		
		return 0
	}
};

// separate years
languageVersion = "sk";
for (var year = 2017; year <= settings.most_recent_year; year++) {
	if (year == 2020) {
		continue;
	}
	settings.plot(year, languageVersion);
}
// conclusion
settings.plot("conclusion", languageVersion);
