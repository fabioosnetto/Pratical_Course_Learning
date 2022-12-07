//--- Get true every new hour, after first call
let _now = new Date();
_now = _now.getHours();
let nextHour = _now;
function newHour(){
   if(_now == nextHour){
      nextHour += 1;
      return true;
   }
   return false;
}

//--- Object to store sections display orders
var posicao = {
   tables  : 0,
   iframes : 0,
   forms   : 0
}

function displayedSections(curr_id){
   if(curr_id == "tables"){
      if(document.getElementById(curr_id).style.display != "none"){
         posicao.tables = 1;
         ((posicao.iframes != 0) && (posicao.iframes != 3))? posicao.iframes += 1 : posicao.iframes = posicao.iframes; 

         ((posicao.forms != 0) && (posicao.forms != 3))? posicao.forms += 1 : posicao.forms = posicao.forms;

         /*document.getElementsByTagName("html")[0].style.scrollBehavior = "smooth"
         scrollTo(0,1000)
         document.getElementsByTagName("html")[0].style.scrollBehavior = "auto"*/
      }
      else if(document.getElementById(curr_id).style.display == "none"){
         posicao.tables = 0;
         if(posicao.iframes == 2){
            ((posicao.iframes - 1) != posicao.forms)? posicao.iframes -= 1 : posicao.iframes = posicao.iframes;
          }
          else if(posicao.iframes == 3) {
             posicao.iframes -= 1;
          }
         
         if(posicao.forms != 0){
            posicao.forms != 1? (((posicao.forms - 1) != posicao.iframes)? posicao.forms -= 1 : posicao.forms = posicao.forms) : posicao.forms = 1;
         }
      }
   }
   else{
      if(curr_id == "iframes"){
         if(document.getElementById("iframes").style.display != "none"){
            posicao.iframes = 1;
            ((posicao.tables != 0) && (posicao.tables != 3))? posicao.tables += 1 : posicao.tables = posicao.tables;
            
            ((posicao.forms != 0) && (posicao.forms != 3))? posicao.forms += 1 : posicao.forms = posicao.forms;
         }
         else if(document.getElementById("iframes").style.display == "none"){
            posicao.iframes = 0;
            if(posicao.tables == 2){
              ((posicao.tables - 1) != posicao.forms)? posicao.tables -= 1 : posicao.tables = posicao.tables;
            }
            else if(posicao.tables == 3) {
               posicao.tables -= 1;
            }
            
            if(posicao.forms != 0){
               posicao.forms != 1? (((posicao.forms - 1) != posicao.tables)? posicao.forms -= 1 : posicao.forms = posicao.forms) : posicao.forms = 1; 
            }
         }
      }
      else{ 
         if(curr_id == "forms"){
            if(document.getElementById("forms").style.display != "none"){
               posicao.forms = 1;
               ((posicao.tables != 0) && (posicao.tables != 3))? posicao.tables += 1 : posicao.tables = posicao.tables;

               ((posicao.iframes != 0) && (posicao.iframes != 0))? posicao.iframes += 1 : posicao.iframes = posicao.iframes;
            }
            else if(document.getElementById("forms").style.display == "none"){
               posicao.forms = 0;
               if(posicao.tables == 2){
                  ((posicao.tables - 1) != posicao.iframes)? posicao.tables -= 1 : posicao.tables = posicao.tables;
                }
                else if(posicao.tables == 3) {
                   posicao.tables -= 1;
                }
               
               if(posicao.iframes != 0){
                  posicao.iframes != 1? (((posicao.iframes - 1) != posicao.tables)? posicao.iframes -= 1 : posicao.iframes = posicao.iframes) : posicao.iframes = 1;
               }
            }
         }
      }
   }

   document.getElementById("tables").style.order  = posicao.tables;
   document.getElementById("iframes").style.order = posicao.iframes;
   document.getElementById("forms").style.order   = posicao.forms;


   if((posicao.tables != 0) || (posicao.iframes != 0) || (posicao.forms != 0)){
      let copyr    = document.querySelector('p#copyright');
      let time     = document.querySelector('section#itimeday');
      let secintro = document.querySelector('p#isections_intro');   

      copyr.style.position   = 'unset';
      copyr.style.width      = '98vw';
      time.style.bottom      = '10px';
      secintro.style.display = 'none';
   }else{
      let copyr = document.querySelector('p#copyright'); 
      let time  = document.querySelector('section#itimeday');
      let secintro = document.querySelector('p#isections_intro');

      copyr.style.position = 'fixed';
      copyr.style.bottom   = '0px';
      copyr.style.width    = '100vw'; 
      time.style.bottom    = '40px';
      secintro.style.display = 'block';
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


//--- That function shows current time
function tdTime(){
   let td_text = document.querySelector('div#itdtext'); //var to text div (where we gonna put the time)

   let today = new Date(); //var to get the current date

   let hour = today.getHours().toString().length > 1? today.getHours() : `0${today.getHours()}`; 
   let min = today.getMinutes().toString().length > 1? today.getMinutes() : `0${today.getMinutes()}`;
   let sec = today.getSeconds().toString().length > 1? today.getSeconds() : `0${today.getSeconds()}`;
   
   let now = `Now it's </br><strong>${hour}:${min}:${sec}</strong>`; //we only take the time

   td_text.innerHTML = ''; //clean previous function call
   td_text.innerHTML = now; //pass the time to div
}

//--- Set styles for tdImg Function
function tdImgContent(divContainer, img_path){
   let img = document.createElement('img');
   img.setAttribute('src', '')
   img.setAttribute('src', img_path)
   divContainer.appendChild(img);

   img.style.borderRadius = '50%';
   img.style.width = '80px';
   img.style.heigth = '80px';
   img.style.marginTop = '10px';
}

//--- That function automatically changes the img according to a time
function tdImg(){
   let td_img  = document.getElementById('itdimg'); //var to img div

   let hour = new Date();
   hour = hour.getHours();
   
   if((hour >= 5) && (hour < 12) && (newHour())){
      tdImgContent(td_img, '../images/TimeDay/morning-circle.jpg');
   }else if((hour >= 12) && (hour < 18) && (newHour())){
      tdImgContent(td_img, '../images/TimeDay/afternoon-circle.jpg');
   }else if((hour >= 18) && (hour < 24) && (newHour())){
      tdImgContent(td_img, '../images/TimeDay/night-circle.jpg');
   }else if(((hour == 24) || (hour < 5)) && (newHour())){
      tdImgContent(td_img, '../images/TimeDay/dawn-circle.jpg');
   }
}

//--- It calls the tdTime and tdImg functions
function TimeDay(){
   tdTime();
   tdImg();
}

setInterval(function(){TimeDay()}, 500);