function show(obj){
	$("#img_git")[0].src = obj.src;
	$("#img_git").parent().css('display', 'block');
	/*var height = document.documentElement.scrollTop || document.body.scrollTop;
	$("#img_hide_div").css('margin-top', height + 30 +"px");*/
}

function imgHide(){
	$("#img_git").parent().css('display', 'none');
}

function showPreImg(obj){
	var array = ["git_home.png",
				"gitResposity_create.png",
				"git_createFile.png",
				"create_detail.png",
				"create_success.png",
				"save.png",
				"finish.png",
				"domain_mapping.png",
				"bind_domain.png",
				"webpage_success.png"];
	var src = $(obj).siblings('img')[0].src;
	var picName = src.substring(src.lastIndexOf("/")+1, src.length);
	var picPath = src.substring(0, src.lastIndexOf("/")+1);

	array.forEach(function(item, index, array){
		if (picName == item) {
			if(index == 0){
				picPath += array[array.length-1];
			}else {
				picPath += array[index-1];
			}
			$(obj).siblings('img')[0].src = picPath;
			return;
		}
	});
}

function showNextImg(obj){
	var array = ["git_home.png",
				"gitResposity_create.png",
				"git_createFile.png",
				"create_detail.png",
				"create_success.png",
				"save.png",
				"finish.png",
				"domain_mapping.png",
				"bind_domain.png",
				"webpage_success.png"];
	var src = $(obj).siblings('img')[0].src;
	var picName = src.substring(src.lastIndexOf("/")+1, src.length);
	var picPath = src.substring(0, src.lastIndexOf("/")+1);

	array.forEach(function(item, index, array){
		if (picName == item) {
			if(index == array.length-1){
				picPath += array[0];
			}else {
				picPath += array[index+1];
			}
			$(obj).siblings('img')[0].src = picPath;
			return;
		}
	});
}