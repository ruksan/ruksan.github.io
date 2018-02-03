var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');
myHeading.textContent = 'Hello world xx!';

function respondImageClick(){
	alert('Ouch! Stop poking me!');
}
// an event
document.querySelector('img').onclick = function() {
    respondImageClick();
}

//document.querySelector('img').onclick = respondImageClick();



function promptAndSetName(){
	var newName = prompt("Enter your name");
	myHeading.textContent = "Welcome " + newName;
	localStorage.setItem("name", newName);
	
}

var savedName = localStorage.getItem("name");
if (savedName){
	
	myHeading.textContent = "Welcome " + savedName;
}
else{
	promptAndSetName();
}
	

//displayName();

myButton.onclick = function(){
	promptAndSetName();
	
}

