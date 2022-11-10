function displayedSections(curr_id){
   if(curr_id == "tables"){
      if(document.getElementById("forms").style.display != "none"){
         document.getElementById("tables").style.position = "absolute";
         document.getElementById("tables").style.top = "930px";
      }
      else if(document.getElementById("forms").style.display == "none"){
         document.getElementById("tables").style.position = "relative";
         document.getElementById("tables").style.top = "0px";
      }
   }
   else if(curr_id == "iframes"){
      document.getElementById("tables").style.position = "relative";
      document.getElementById("tables").style.top = "0px";
    }
}

function clickSections(id, display_type){
   if(document.getElementById(id).style.display == "block"){
      document.getElementById(id).style.display = "none";
   }
   else{
      document.getElementById(id).style.display = display_type;
   }

   displayedSections(id);
}

function clickIframes(){
   if(document.getElementById("iframes").style.display == "none"){
      document.getElementById("iframes").style.display = "block";
   }
   else{
      document.getElementById("iframes").style.display = "none";
   }
}

function clickForms(){
   if(document.getElementById("forms").style.display == "none"){
      document.getElementById("forms").style.display = "block";
   }
   else{
      document.getElementById("forms").style.display = "none";
   }
}