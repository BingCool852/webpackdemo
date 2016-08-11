document.getElementById('app').innerHTML="这是我的第一个打包成功程序";

//导入
require("./first.js");
require("!style!css!./style.css");

var Vue = require("vue");
var	hello = new Vue({
		el : "body",
		data : {
			message: "Hello Vue.js"
		}
	});