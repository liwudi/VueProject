/**
 * Created by mapbar_front on 2017/11/5.
 */
export function clone(obj) {
	if(arguments.length !== 1){
		throw new Error("parameter is undefined");
	}
	//如果是值类型，直接返回
	if(typeof obj !== "object"){
		return obj;
	}
	//如果是Array类型
	if(obj instanceof Array){
		var arr = new Array();

		for(var i = 0, len = obj.length; i < len; i++){
			if(typeof obj[i] === "object"){
				arr.push(clone(obj[i]));
			} else {
				arr.push(obj[i]);
			}
		}
		return arr;
	}
	//如果是Object类型
	if(obj instanceof Object){
		var current = new Object();
		for(var i in obj){
			if(typeof obj[i] === "object"){
				current[i] = clone(obj[i]);
			} else {
				current[i] = obj[i];
			}
		}
		return current;
	}
	//如果是Null
	if(obj === null){
		return null;
	}
	//如果是自己未知的类型
	throw new Error("not supported this type data!");
}
//单层clone，或者说是浅克隆
function cloneOne(objValue) {
	if(arguments.length !== 1){
		throw new Error("parameter is undefined");
	}
	//如果是值类型，直接返回
	if(typeof objValue !== "object"){
		return objValue;
	}
	//如果是Array类型
	if(objValue instanceof Array){
		var arr = new Array();
		for(var i = 0, len = objValue.length; i < len; i++){
			arr.push(objValue[i]);
		}
		return arr;
	}
	//如果是Object类型
	if(objValue instanceof Object){
		var obj = new Object();
		for(var i in objValue){
			obj[i] = objValue[i];
		}
		return obj;
	}
	//如果是Null
	if(objValue === null){
		return null;
	}
	//如果是自己未知的类型
	throw new Error("not supported this type data!");
}
