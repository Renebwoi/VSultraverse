function Menu(){
    document.getElementById("manu").style.display = "flex";
    document.getElementById("small-screen-icon").setAttribute("onclick","MenuOff()")
}
function MenuOff(){
    document.getElementById("manu").style.display = "none";
    document.getElementById("small-screen-icon").setAttribute("onclick","Menu()")
}