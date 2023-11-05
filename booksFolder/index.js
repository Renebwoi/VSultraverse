function Menu(){
    document.getElementById("manu").style.display = "flex";
    document.getElementById("small-screen-icon").setAttribute("onclick","MenuOff()")
  

// Access the div element by its id
var stick1 = document.getElementById("stick1");
// Rotate the element by 90 degrees clockwise
stick1.style.transform = "rotate(410deg)";
// stick1.style.transform = "translateY(20px)";
stick1.style.top = "7px";

var stick2 = document.getElementById("stick2");
stick2.style.display = "none";

var stick3 = document.getElementById("stick3");
stick3.style.transform = "rotate(-410deg)";
stick1.style.bottom = "7px";

}
function MenuOff(){
    document.getElementById("manu").style.display = "none";
    document.getElementById("small-screen-icon").setAttribute("onclick","Menu()")

    // Access the div element by its id
var stick1 = document.getElementById("stick1");
// Rotate the element by 90 degrees clockwise
stick1.style.transform = "rotate(0deg)";
// stick1.style.transform = "translateY(20px)";
stick1.style.top = "0px";

var stick2 = document.getElementById("stick2");
stick2.style.display = "flex";

var stick3 = document.getElementById("stick3");
stick3.style.transform = "rotate(0deg)";
stick1.style.bottom = "0px";
}