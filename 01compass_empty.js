//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = e.alpha;
        }

//North
        
document.getElementById("compass").innerHTML = compassHeading;

  if(compassHeading >= 315 && compassHeading < 359) {
                text_area.innerHTML = "I am standing in a space very different from the one you are in now <br/> <br/> looking <br/> <br/> <br/> <br/> ....... I see you all?";
//text_area.style.fontSize = '10vmax'
        }

// Northeast
        if(compassHeading >= 0 && compassHeading < 45) {
                text_area.innerHTML = "ku <br/> <br/> kuu <br/> <br/> kuus <br/> <br/>  kuusi ku <br/> <br/> kuusi kuus <br/> <br/> kuusi kuusi <br/> <br/> kuusi kuusi kuusi <br/> <br/> kuusi kuusi kuusi kuu <br/> <br/> kuusi kuusi kuusi kuusi <br/> <br/> kuusi <br/> kuusi";
        }
// 
//East
 
        if(compassHeading >= 45 && compassHeading < 90) {
                text_area.innerHTML = "It has been a fairly warm winter. Do not linger on one spot too long, for fear of falling through the ice. <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> you. <br/> <br/> <br/> here.";

        }

//Southeast

        if(compassHeading >= 90 && compassHeading < 135) {
                text_area.innerHTML = "The sun... <br/> sets <br/> <br/> sets <br/> <br/> <br/> sets <br/> <br/> <br/> <br/> sets <br/> <br/> <br/> <br/> <br/> sets <br/> <br/> <br/> <br/> <br/> <br/> sets";
        }

//South

        if(compassHeading >= 135 && compassHeading < 180) {
                        text_area.textContent = "Enjoying rolling on the ground?";
        }

         if(compassHeading >= 135 && compassHeading < 180) {
                        text_area.style.wordWrap = "normal";
                        text_area.style.width = window.innerWidth * 6 + "px"; 
                         text_area.style.fontSize = '60px';
                         text_area.style.textAlign="left";
                          text_area.style.margin = "margin: 0% auto";
        } else {
            text_area.wordWrap = "break-word";
                        text_area.style.width = "80%"
                         text_area.style.fontSize = '3vmax';
                          text_area.style.textAlign="center";
                          text_area.style.margin = "margin: 20% auto";
        }



//Southwest

        if(compassHeading >= 180 && compassHeading < 270) {
                text_area.innerHTML = "I forgot to tell you. There's nothing to fear. We are learning this space. <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>........like you.";
        }

//West

        if(compassHeading >= 270 && compassHeading < 315) {
                text_area.innerHTML = "Maybe you should refresh your connection. I have more to say";
        }

    }

        // text_area.textContent = compassHeading;
        //calls function to alter content based on heading
       // myOrientation();
    

   // textSize = compassHeading;
   // text_area.fontSize = textSize + "px";
//device orientation that can track orientation on space
	window.addEventListener('deviceorientation', oriented, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
     
            text_area.textContent = "empty compass";
        
	}


