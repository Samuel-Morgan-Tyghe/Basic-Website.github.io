function findMore(showMore,button_slide){
    elements = document.getElementsByClassName("showMore");
  for(var i=0; i<elements.length; i++) { 
    elements[i].style.display = "block";
  } 
  elements = document.getElementsByClassName("button_slide");
  for(var i=0; i<elements.length; i++) { 
    elements[i].style.display = "none";
  } 
  
  }