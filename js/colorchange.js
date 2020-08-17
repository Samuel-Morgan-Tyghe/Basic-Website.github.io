var selector = 0;
var c1 = "rgb(225,101,93)";
var c2 = "rgb(230,230,230)";
var c3 = "rgb(240,230,140)";
var c4 = "rgb(132,190,216)";
var c5 ;
var elements;
var i;

function change_css(color1,color2,color3,color4) {
c5=c1;
c1=c2;
c2=c3;
c3=c4;
c4=c5;

  elements = document.getElementsByClassName("color1");
for(var i=0; i<elements.length; i++) { 
elements[i].style.backgroundColor=c1;
}

elements = document.getElementsByClassName("color2");
for(var i=0; i<elements.length; i++) { 
elements[i].style.color=c2;
}

elements = document.getElementsByClassName("color3");
for(var i=0; i<elements.length; i++) { 
elements[i].style.color=c3;
}

elements = document.getElementsByClassName("color4");
for(var i=0; i<elements.length; i++) { 
elements[i].style.backgroundColor=c4;
}
}

