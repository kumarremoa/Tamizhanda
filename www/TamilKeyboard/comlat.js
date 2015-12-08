var currentTAElement;
function assignFocusElement(el){
currentTAElement = el;
}
function alpha(item) { 	
		var input = document.conversion.elements.namedItem(window.currentTAElement);
		if (document.selection) { 
            input.focus();
			range = document.selection.createRange() ;
			range.text = item ;
            range.select(); 
		}
		else if (input.selectionStart || input.selectionStart == '0') {
		var startPos = input.selectionStart;
		var endPos = input.selectionEnd;
		var cursorPos = startPos;
		var scrollTop = input.scrollTop;
		var baselength = 0;
		input.value = input.value.substring(0, startPos)
            + item
            + input.value.substring(endPos, input.value.length);
		cursorPos += item.length;
		input.focus();
		input.selectionStart = cursorPos;
		input.selectionEnd = cursorPos;
		input.scrollTop = scrollTop;
		}
	else {		
		input.value += item;
		input.focus();
	}
}

function copy() { 
textRange=document.conversion.saisie.createTextRange();
textRange.execCommand("Copy");
textRange="";
}

var car;
function annuler () {
car = document.conversion.saisie.value;
 car=car.replace(/\u200b/g, "");
 document.conversion.saisie.value=car;
}

function backspace(){
var input = document.conversion.elements.namedItem(window.currentTAElement);
var startPos = input.selectionStart;
car = input.value;
var startUpString = car.substring(0, startPos - 1);
var endUpString = car.substring(startPos,car.length);
//car = car.substring(0, car.length - 1);
input.value=startUpString+endUpString;
input.focus();
input.selectionStart = startPos;
input.selectionEnd = startPos;
}