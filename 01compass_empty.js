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
        

  if(compassHeading > 315 || compassHeading < 0) {
                text_area.innerHTML = "Building";
//text_area.style.fontSize = '10vmax'
        }

// Northeast
        if(compassHeading >= 0 || compassHeading < 45) {
                text_area.innerHTML = "Tr <br/> <br/> tre <br/> <br/> trees <br/> <br/> trees tr <br/> <br/> trees trees <br/> <br/> trees trees tr <br/> <br/> trees trees trees <br/> <br/> trees trees trees tr <br/> <br/> trees trees trees trees <br/> <br/> trees <br/> trees";
        }
// 
//East

        if(compassHeading >= 45 && compassHeading < 90) {
                text_area.textContent = "To the souvenir, workhouse";

        }

//Southeast

        if(compassHeading >= 90 && compassHeading < 135) {
                text_area.innerHTML = "The sun... <br/> sets <br/> <br/> sets <br/> <br/> <br/> sets <br/> <br/> <br/> <br/> sets <br/> <br/> <br/> <br/> <br/> sets <br/> <br/> <br/> <br/> <br/> <br/> sets";
        }

//South

        if(compassHeading >= 135 && compassHeading < 180) {
                        text_area.textContent = "The trees begin to unfurl, unending, and nature seems to be uncompromising. And Finns. And Trees Continue. And Continue. And Continue. And Continue. And Continue. And Continue. And Continue.";
        }

         if(compassHeading >= 135 && compassHeading < 180) {
                        text_area.wordWrap = "normal";
                        text_area.width = "auto";
        } else {
            text_area.wordWrap = "break-word";
                        text_area.width = "80%"
        }



//Southwest

        if(compassHeading >= 225 && compassHeading < 270) {
                text_area.textContent = "Those in the centre, die";
        }

//West

        if(compassHeading >= 270 && compassHeading < 315) {
                text_area.innerHTML = "The sun... <br/> sets <br/> <br/> sets <br/> <br/> <br/> sets <br/> <br/> <br/> <br/> sets <br/> <br/> <br/> <br/> <br/> sets <br/> <br/> <br/> <br/> <br/> <br/> sets";
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


