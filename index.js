$(function () {
	var c = new Coder("main");
	c.load("<p class='writecode'>《我和你》</p>");
	c.load("<p class='writecode'>歌手：唐宁[香港]</p>");
	c.load("<p class='writecode'>等等...</p>");
	c.load("<p class='writecode'>字体好像有点小，还有点丑 。。稍等...</p>");
	c.load("<p class='writecode'>{</p>",1000);
	c.load("<p class='writecode'>&nbsp;&nbsp;font-size:18px，</p>",500);
	c.load("<p class='writecode'>&nbsp;&nbsp;color:#999</p>",500);
	c.load("<p class='writecode'>}</p>",1000);
	c.setStyle("html", {
		'font-size': "18px",
	});
	c.load("<p class='writecode'>晴天 有点孤单</p>");
	c.load("<p class='writecode'>玩具 丢在旁边</p>");
	c.load("<p class='writecode'>电视里没有新鲜</p>");
	c.load("<p class='writecode'>球鞋跑不过时间</p>");
	c.load("<p class='writecode'>我要 更大的世界</p>");
	c.load("<p class='writecode'>装满 不同的探险</p>");
	c.load("<p class='writecode'>当然你陪在身边</p>");
	c.load("<p class='writecode'>每秒每天</p>");
	c.load("<p class='writecode'>stop... 改变一下颜色</p>");
	c.load("<p class='writecode'>{</p>");
	c.load("<p class='writecode'>&nbsp;&nbsp;color:#fff，</p>");
	c.load("<p class='writecode'>&nbsp;&nbsp;background-image:linear-gradient(to top, #09203f 0%, #537895 100%)</p>");
	c.load("<p class='writecode'>}</p>");
	c.setStyle("html", {
		'color': '#eee',
		'background-image': 'linear-gradient(to top, #09203f 0%, #537895 100%)'
	})
	c.load("<p class='writecode'>我和你 飞到蓝蓝的天边</p>");
	c.load("<p class='writecode'>我和你 种下满满的花园</p>");
	c.load("<p class='writecode'>我和你 分享暖暖的光线</p>");
	c.load("<p class='writecode'>再靠近一点</p>");
	c.load("<p class='writecode'>我和你 就像蓝蓝的天边</p>");
	c.load("<p class='writecode'>我和你 就像满满的花园</p>");
	c.load("<p class='writecode'>我和你 就像暖暖的光线</p>");
	c.load("<p class='writecode'>把地球照亮</p>");
	c.load("<p class='writecode'>我和享暖暖的光线</p>");
	c.load("<p class='writecode'>再靠近一点</p>");
	c.load("<p class='writecode'>再靠近一点</p>");
	c.load("<p class='writecode'>再靠近一点</p>");
	c.load("<p class='writecode'>再靠近一点</p>");
	c.load("<p class='writecode'></p>");
	c.load("<p class='writecode'></p>");

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
		var _second = second ? second : 0;
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