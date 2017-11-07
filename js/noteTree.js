/*
* @Author: 765
* @Date:   2017-10-20 10:21:31
* @Last Modified by:   yuchunchun
* @Last Modified time: 2017-11-03 14:03:03
*/
function createTree(menuJson, element){
	 var length = menuJson.length;
	 // 创建一个ul元素
	 var ul = $("<ul></ul>");

	 for (var i = 0; i < length; i++) {
	 	var thisJson = menuJson[i];
	 	// 代表的是文件夹
	 	if(thisJson.type == "folder"){
			// 设置a标签，展示文件夹的图片
			var a = $("<a></a>");
			a.attr('class', 'folderOpen');
			a.text("a"); // 这边不设置成这样 会有问题  不对齐
			// 设置span标签，展示的是文件夹名
			var folderNameEle = $("<span></span>");
		 	folderNameEle.text(thisJson.text);

		 	var divEle = $("<div></div>");
		 	divEle.append(a);
			divEle.append(folderNameEle);

			ul.append(divEle);

		 	// 用来表示包含内容
		 	var li = $("<li></li>");
	 		ul.append(li);
	 		arguments.callee(thisJson.son, li[0]);
	 	}else if(thisJson.type == "file"){ 
	 		var li = $("<li></li>");
	 		// 设置文件图标
	 		var file_icon = $("<a></a>");
	 		file_icon.attr('class', 'file_icon').text("a"); // 这边不设置成这样 会有问题  不对齐
			li.append(file_icon);
			// 设置文章链接
			var a = $("<a></a>");
			a.attr({
				href: thisJson.href,
				class: 'fileA'
			}).text(thisJson.text);
	 		li.append(a);
	 		ul.append(li);
	 	}
	 };
	 $(element).append(ul);
};

function treeBindEvent(tree, content){
	/* 设置note的左侧文件夹的显示*/
	$(tree).find('.folderClose, .folderOpen').click(function(event) {
		if(this.className == "folderOpen"){
			$(this.parentNode.nextSibling).css('display', 'none');
			this.className = "folderClose";
		}else if(this.className == "folderClose"){
			$(this.parentNode.nextSibling).css('display', 'block');
			this.className = "folderOpen"
		}
	});
	/*当左侧菜单更改的时候，请求菜单的内容*/
	$(tree).find('.fileA').on('click', function(event){
		event.preventDefault(); // 阻止默认行为
		$.get(this.href, function(data) {
			/*optional stuff to do after success */
			content.innerHTML = data;
		});

	});
	/*默认显示的about.html*/
	$.get("article/about.html", function(data) {
		/*optional stuff to do after success */
		content.innerHTML = data;
	});
}

