// JAVASCRIPT
/**************************************************
************OPEN AND CLOSE SIDEBAR*****************
***************************************************/
// OPEN SIDE BAR FUNCTION EMBEDDED TO OPENSIDE ICON ON NAV BAR
function openSide() {
  document.getElementById("mySidebar").style.width = "350px"; //Set the width of the sidebar to 350px when function is called
}

// OPEN SIDE BAR FUNCTION EMBEDDED TO CLOSESIDE ICON ON SIDE BAR
function closeSide() {
  document.getElementById("mySidebar").style.width = "0px"; //Set the width of the sidebar to 0px when function is called
}

// CLOSE SIDE IF MOUSE CLICK OUTSIDE SIDEBAR
function mouseClickPos(xPos) {
  var x = xPos.clientX; //x is the x coordinate of where the mouseclick
  if (x >= 350 && document.getElementById("mySidebar").style.width == "350px") { //If mouse click pos is more than 350px and side bar is opened
    closeSide(); //Set the width of the sidebar to 0px
  }
}

document.addEventListener("click", mouseClickPos); //activate if mouseclick


// JQUERY
/**************************************************
************* NAVBAR SIZE CHANGE*******************
***************************************************/
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 10) {
    // Change size of Navbar onScroll and allignment of elements within NavBar if page is scrolled more than 50px
    $('nav').css({ "padding": "10px 5px" }); // Decrease padding of nav bar so nav bar become smaller
    $('#logo').css({ "font-size": "20px" }); // Shrink font size of center logo on Nav bar
    $('#openSide').css({ "font-size": "20px" }); // Shrink font size of open side bar icon on Nav bar
    $('.topnav-right').css({ "font-size": "15px", "padding-top": "1px" }); // Change font size of subscribe and login button and padding on top to smaller
  }
  else {
    // Change the nav bar settings back to normal if page is scrolled back up to the top
    $('nav').css({ "padding": "30px 10px" }); //Expand Nav Bar by increasing the padding
    $('#logo').css({ "font-size": "30px" }); //Expand Centre logo
    $('#openSide').css({ "font-size": "30px" });  //Change Fontsize of the OpenSide bar icon
    $('.topnav-right').css({ "font-size": "20px", "padding-top": "9px" }); //Expand FontSize of login and subscribe button
  }
})




