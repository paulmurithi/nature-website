// rotate.js
// handles image rotation seen on the website home page
// 
var index=1;

function plusindex(n){
	index=index+n;
	showimage(index);
}

function showimage(n){
	var i;
	var x = document.getElementsByClassName("slideimage");
	if(n>x.length){
		index=1;
	}
	if(n<1){
		index=x.length;
	}
	for(i=0;i<x.length;i++){
		x[i].style.display="none";
	}
   x[index-1].style.display="block";
}

 

 function autochange(n){
	 var i;
	var x = document.getElementsByClassName("slideimage");
	for(i=0;i<x.length;i++){
		x[i].style.display="none";
	}
   if(index>x.length){index=1;}
   x[index-1].style.display="block";
   index++;
   setTimeout(autochange,2000);
 }