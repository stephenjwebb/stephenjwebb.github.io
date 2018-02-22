//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = e.alpha;
        }
        

  if(compassHeading > 315 || compassHeading < 45) {
                text_area.textContent = compassHeading;
        }

        if(compassHeading >= 45 && compassHeading < 90) {
                text_area.textContent = "To the souvenir, workhouses.";
        }

        if(compassHeading >= 90 && compassHeading < 135) {
                text_area.textContent = "Those in the centre, cry";
        }

        if(compassHeading >= 135 && compassHeading < 180) {
                text_area.textContent = "To the echelon, the workstation.";
        }

        if(compassHeading >= 225 && compassHeading < 270) {
                text_area.textContent = "Those in the centre, die";
        }


        if(compassHeading >= 270 && compassHeading < 315) {
                text_area.textContent = "To the wheelbarrow, the worked.";
        }

        // text_area.textContent = compassHeading;
        //calls function to alter content based on heading
       // myOrientation();
    }

//device orientation that can track orientation on space
	window.addEventListener('deviceorientation', oriented, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
     
            text_area.textContent = "empty compass";
        
	}


