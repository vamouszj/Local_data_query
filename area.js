(function(global) {
	function Area() {
		this.items = {};   //保存本地的数据
		this.init();
		this.currentClick = 0;
	};

	Area.prototype = {
		add : function(id, array) {  //id array
			this.items[id] = array;
		},
		exits : function(id) {
			if(typeof(this.items[id]) == 'undefined') {
				return false;
			}
			return true;
		},
		change : function(v) {
			var _this = this;
			var str = "0";
			var address = "https://vamouszj.github.io/Local_data_query/?cityId=";  
			for(var i = 0; i < v; i++) {
				str += ("_" + (_this.currentClick - 1));  //上一次点击的位置
			}

			var ss = document.getElementById('cityChoose');
			with(ss) {
				if(v && _this.currentClick > 0 || !v) {
					//取数据
					if(_this.exits(str)) {  //判断传入的参数是否存在
						ar = _this.items[str];  //得到str为键对应的数组
						ss.innerHTML = "";

						if(str.indexOf('_') > 0) {  //存在"_"
							for(var i = 0; i < ar.length; i++) {
								var liEle = document.createElement('li');
								liEle.textContent = ar[i][0];
								liEle.setAttribute('id', ar[i][1]);
								ss.appendChild(liEle);
								liEle.onclick = function() {
									document.getElementById('countryClick').innerHTML = this.innerText;
									console.log(this.innerText);
									window.location.href = address + this.getAttribute('id');
								}
							}
						}else {
							for(var i = 0; i < ar.length; i++) {
								var liEle = document.createElement('li');
								liEle.textContent = ar[i];
								liEle.setAttribute('id', i);
								ss.appendChild(liEle);
								liEle.onclick = function() {
									_this.currentClick = parseInt(this.getAttribute('id')) + 1; //点击
									_this.change(1);
									console.log(this.innerText);
									document.getElementById('cityClick').innerHTML = this.innerText;
								}
							}
						}
					}
				}
			}
		},
		init : function() {
			this.add("0", ["咸阳市", "西安市"]);
			this.add("0_1", [["新城区", "2"], ["碑林区", "3"], ["莲湖区 ", "4"], ["雁塔区 ", "5"],
			 ["未央区", "6"], ["灞桥区", "7"], ["长安区", "8"], ["阎良区", "9"], ["临潼区", "10"]
			 , ["蓝田县", "11"], ["周至县", "12"], ["户县", "13"], ["高陵县", "14"]]);

			this.add("0_0", [["三原县", "15"], ["泾阳县", "16"], ["乾县", "17"], ["礼泉县", "18"],
			 ["永寿县", "19"], ["彬县", "20"], ["长武县", "21"], ["旬邑县", "22"], ["淳化县", "23"]
			 , ["武功县", "24"], ["兴平", "25"]]);
		}		
	};

	global.Area = Area;
})(window);


