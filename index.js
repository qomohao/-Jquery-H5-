$(function () {
	var c = new Coder("main");
	c.load("<p class='writecode'>Love six more</p>");
	c.load("<p class='writecode'></p>");
	c.load("<p class='writecode'>喜欢你淘气表情</p>");
	c.load("<p class='writecode'>和 爱笑的眼睛</p>");
	c.load("<p class='writecode'>等等...</p>",1500);
	c.load("<p class='writecode'>字体好像有点小，稍等...</p>");
	c.load("<p class='writecode'>{</p>",500);
	c.load("<p class='writecode'>&nbsp;&nbsp;font-size:18px;</p>",500);
	c.load("<p class='writecode'>&nbsp;&nbsp;color:#999</p>",500);
	c.load("<p class='writecode'>}</p>",500);
	c.setStyle("html", {
		'font-size': "18px",
		'color': '#999'
	});
	c.load("<p class='writecode'>心里为你着了迷 想唱情歌给你听</p>");
	c.load("<p class='writecode'>只要听见你声音 就 觉得很安心</p>");
	c.load("<p class='writecode'>带你一起去旅行 跟你做很多事情</p>");
	c.load("<p class='writecode'>确定就是你 绝不会让你逃离</p>");
	c.load("<p class='writecode'>想把你抱进怀里 山顶看最美星星</p>");
	c.load("<p class='writecode'>😘 😘 😘 </p>");
	c.load("<p class='writecode'>全部都是你 你就是我的唯一</p>");
	c.load("<p class='writecode'>要把你 放在手心 绝不会让你伤心</p>");
	c.load("<p class='writecode'>stop... 改变一下颜色</p>");
	c.load("<p class='writecode'>{</p>",500);
	c.load("<p class='writecode'>&nbsp;&nbsp;color:#fff;</p>");
	c.load("<p class='writecode'>&nbsp;&nbsp;background-image:linear-gradient(to top, #09203f 0%, #537895 100%)</p>");
	c.load("<p class='writecode'>}</p>",500);
	c.setStyle("html", {
		'color': '#eee',
		'background-image': 'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)'
	})
	c.load("<p class='writecode'>就这样爱着你 用一生来证明</p>");
	c.load("<p class='writecode'>没什么大道理 我只要你开心</p>");
	c.load("<p class='writecode'>就这样想着你 感受着你气息</p>");
	c.load("<p class='writecode'>天空都变透明 就是要在一起</p>");
	c.load("<p class='writecode'>❤️不弃不离❤️</p>");
	c.load("<p class='writecode'></p>", 0);
	c.load("<p class='writecode'>故事有点长</p>", 0);
	c.load("<p class='writecode'>让我在你耳边 慢慢对你讲...</p>");
	c.load("<div><img style='width:100%;height:auto' src='./us.jpeg' class='writecode'></img></div>");

});

var m = 0;
var dom = "";
var Coder = function (aa) {
	dom = aa;
};

Coder.prototype = {
	constructor: Coder,
	load: function (code, second) {
		var o = this;
		var _second = second ? second : 1000;
		_second = m + _second;
		setTimeout(function () {
			// $('#' + dom).scrollTop( $('#' + dom)[0].scrollHeight );
			window.scrollTo(0, document.body.scrollHeight)
			$("#" + dom).append(code);
		}, _second);
		m = _second;
	},
	setStyle: function (dom, styles, second) {
		var _second = second ? second : 1000;
		_second = m + _second;
		for (var i in styles) {
			setTimeout(function () {
				$(dom).css(styles)
			}, _second);
		}
		m = _second;
	},
	// addClass:function(dom,className){
	// 	var second = m;
	// 	setTimeout(function() {
	// 		$(dom).addClass(className);
	// 	}, second);
	// }
}