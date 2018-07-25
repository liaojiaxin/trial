import _ from "lodash";

function component(){
	// 生成一个div元素
	var divElement = document.createElement("div");
	
	// 写入内容
	// Lodash, now imported by this script
	divElement.innerHTML = _.join(["Hello", "webpack"], " ");
	
	return divElement;
}

document.body.appendChild(component());

