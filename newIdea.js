function reveal() {
    var reveals = document.querySelectorAll(".move");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

//for the mobile screen dropdown menu
  function Menu(){
    document.getElementById("manu").style.display = "flex";
    document.getElementById("small-screen-icon").setAttribute("onclick","MenuOff()")
}
function MenuOff(){
    document.getElementById("manu").style.display = "none";
    document.getElementById("small-screen-icon").setAttribute("onclick","Menu()")
}