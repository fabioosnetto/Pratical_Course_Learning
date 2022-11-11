let posicao = {_tables : 0, _iframes : 0, _forms : 0};

function displayedSections(curr_id){
   if(curr_id == "tables"){
      if(document.getElementById(curr_id).style.display != "none"){
         posicao._tables = 1;
         ((posicao._iframes != 0) && (posicao._iframes != 3))? posicao._iframes += 1 : posicao._iframes = posicao._iframes; 

         ((posicao._forms != 0) && (posicao._forms != 3))? posicao._forms += 1 : posicao._forms = posicao._forms;
      }
      else if(document.getElementById(curr_id).style.display == "none"){
         posicao._tables = 0;
         if(posicao._iframes == 2){
            ((posicao._iframes - 1) != posicao._forms)? posicao._iframes -= 1 : posicao._iframes = posicao._iframes;
          }
          else if(posicao._iframes == 3) {
             posicao._iframes -= 1;
          }
         
         posicao._forms != 1? (((posicao._forms - 1) != posicao._iframes)? posicao._forms -= 1 : posicao._forms = posicao._forms) : posicao._forms = 1;
      }
   }
   else{
      if(curr_id == "iframes"){
         if(document.getElementById("iframes").style.display != "none"){
            posicao._iframes = 1;
            ((posicao._tables != 0) && (posicao._tables != 3))? posicao._tables += 1 : posicao._tables = posicao._tables;
            
            ((posicao._forms != 0) && (posicao._forms != 3))? posicao._forms += 1 : posicao._forms = posicao._forms;
         }
         else if(document.getElementById("iframes").style.display == "none"){
            posicao._iframes = 0;
            if(posicao._tables == 2){
              ((posicao._tables - 1) != posicao._forms)? posicao._tables -= 1 : posicao._tables = posicao._tables;
            }
            else if(posicao._tables == 3) {
               posicao._tables -= 1;
            }
            
            posicao._forms != 1? (((posicao._forms - 1) != posicao._tables)? posicao._forms -= 1 : posicao._forms = posicao._forms) : posicao._forms = 1; 
         }
      }
      else{ 
         if(curr_id == "forms"){
            if(document.getElementById("forms").style.display != "none"){
               posicao._forms = 1;
               ((posicao._tables != 0) && (posicao._tables != 3))? posicao._tables += 1 : posicao._tables = posicao._tables;

               ((posicao._iframes != 0) && (posicao._iframes != 0))? posicao._iframes += 1 : posicao._iframes = posicao._iframes;
            }
            else if(document.getElementById("forms").style.display == "none"){
               posicao._forms = 0;
               if(posicao._tables == 2){
                  ((posicao._tables - 1) != posicao._iframes)? posicao._tables -= 1 : posicao._tables = posicao._tables;
                }
                else if(posicao._tables == 3) {
                   posicao._tables -= 1;
                }
               
               posicao._iframes != 1? (((posicao._iframes - 1) != posicao._tables)? posicao._iframes -= 1 : posicao._iframes = posicao._iframes) : posicao._iframes = 1;
            }
         }
      }
   }

   switch (posicao._tables) {
      case 2:
         document.getElementById("tables").style.order = "2"
         break;
      case 3:
         document.getElementById("tables").style.order = "3"
         break;
            
      default:
         document.getElementById("tables").style.order = "1"
         break;
   }

   switch (posicao._iframes) {
      case 2:
         document.getElementById("iframes").style.order = "2"
         break;
      case 3:
         document.getElementById("iframes").style.order = "3"
         break;
            
      default:
         document.getElementById("iframes").style.order = "1"
         break;
   }

   switch (posicao._forms) {
      case 2:
         document.getElementById("forms").style.order = "2"
         break;
      case 3:
         document.getElementById("forms").style.order = "3"
         break;
            
      default:
         document.getElementById("forms").style.order = "1"
         break;
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