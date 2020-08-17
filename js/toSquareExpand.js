
function tosquare(dot,addInfo){
    elements = document.getElementsByClassName("dot");
  for(var i=0; i<elements.length; i++) { 
    elements[i].style.cssText = 
    "  justify-content: center;display: inline-block;animation-name:stretch; animation-duration: 1.5s; animation-delay: 0;animation-fill-mode: forwards;animation-play-state: running;border-radius: 50px;"
  } 
  
  elements = document.getElementsByClassName("addInfo");
  for(var i=0; i<elements.length; i++) { 
    elements[i].style.display = "block";
  } 
  
  }