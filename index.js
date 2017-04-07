var area = new Area(); 
document.getElementById('cityClick').onclick = function() {
	area.change();
	var cityChoose = document.getElementById('cityChoose');
	cityChoose.className = cityChoose.className.replace("hide", "");

}

var array = window.location.href.split("?");

if(array.length > 0) {
	var cityId = array[1] ? array[1].split("&") : '';
	for(var i = 0; i < cityId.length; i++) {
		if(cityId[i].split("=")[0] == "cityId") {
			fancha(cityId[i].split("=")[1]);
		}
	}
}

function fancha(cityId) {
	var ar;
	var cityList = area.items[0];

	for(var i = 0; i < 2; i++) {
		var indexStr = "0_" + i;
		if(area.exits(indexStr)) {

			ar = area.items[indexStr];
			for(var a = 0; a < ar.length; a++) {

				if(ar[a][1] == cityId) {
					document.getElementById('countryClick').innerHTML = ar[a][0];
					document.getElementById('cityClick').innerHTML = cityList[i];
					return;
				}
			}
		}
	}
}