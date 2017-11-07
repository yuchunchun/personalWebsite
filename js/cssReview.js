/*
* @Author: yuchunchun
* @Date:   2017-11-03 15:18:17
* @Last Modified by:   yuchunchun
* @Last Modified time: 2017-11-06 14:11:18
*/
var htmlObj = {
		"relativeTry": "article/test/relativeTest.html",
		"absoluteTry": "article/test/absoluteTest.html",
		"absoluteIgnorePaddingTry": "article/test/absoluteIgnorePaddingTry.html"
	};

function tryToTry(key){
	var ele = $("#tryDiv");

	var url = htmlObj[key];
	$.get(url, function(data) {
		$("#leftNeedParseDiv").text(data);
		$("#rightDisplayDiv").html(data);
	});

	var t = setInterval(function(){
		// 每次往前移剩余的1/10
		// 获取当前的 right 值
		var currentRight = parseInt(ele.css('right'));
		var needRemove = Math.ceil(-currentRight/10);
		ele.css('right', currentRight + needRemove +"px");
		if (!currentRight) {
			clearInterval(t);
		}
	}, 20);
}

function startTest(){
	var text = $("#leftNeedParseDiv").val();
	$("#rightDisplayDiv").html(text);
}

function tryDivHide(){
	var ele = $("#tryDiv");
	var currentRight = 0;
	var t = setInterval(function(){
		// 每次往前移剩余的1/10
		// 获取当前的 right 值
		currentRight += Math.ceil((800-currentRight)/10);
		ele.css('right', "-"+currentRight +"px");
		if (currentRight >= 800) {
			clearInterval(t);
		}
	}, 20);
}
