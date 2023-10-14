const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));//end of navbar code

//dark mode
function changeColorMode1() {
    document.getElementById('Cmode1').style.background = "black";
    document.getElementById('Cmode2').style.color = "black";
    document.getElementById('Cmode3').style.color = "black";
    document.getElementById('Cmode4').style.border = "6px solid #000000";/*will do the rest by morning. please remember how*/
    document.getElementsByName('Cmode6')[0].style.color = "#fff";
    document.getElementsByName('Cmode6')[1].style.color = "#fff";
    document.getElementById('themes').style.color = "#fff";//looks weird
    /*document.getElementById('Cmode4').style.boxShadow = "1px -10px 0 0 black"; /*to change those sliding two things color. not working*/
    document.querySelectorAll(".indicator::before").style.boxshadow = "red";
}
//light mode
function changeColorMode2() {
    document.getElementById('Cmode1').style.background = "blueviolet";
    document.getElementById('Cmode2').style.color = "blueviolet";
    document.getElementById('Cmode3').style.color = "blueviolet";
    document.getElementById('Cmode4').style.border = "6px solid blueviolet";/*will do the rest by morning. please remember how*/
    document.getElementsByName('Cmode6')[0].style.color = "#000000";
    document.getElementsByName('Cmode6')[1].style.color = "#000000";
    document.getElementById('themes').style.color = "#000000";
    /*document.getElementById('Cmode4').style.boxShadow = "1px -10px 0 0 black"; /*to change those sliding two things color. not working*/
}

//function for changing iframe
    function Home() {
        let pageEmbed = document.getElementById('pageEmbed');
        pageEmbed.setAttribute("src", "base/base.html");
    }

    function changeHome() {
        let pageEmbed = document.getElementById('pageEmbed');
        pageEmbed.setAttribute("src", "home/home.html");
    }

