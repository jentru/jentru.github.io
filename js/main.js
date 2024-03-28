// function for menu tabs
function showMenu(evt, menuName) {
    var i, menu, tablinks;
    menu = document.getElementsByClassName("menu");
    for (i=0; i < menu.length; i++){
        menu[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabLinks");
    for (i=0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(menuName).style.display = "flex";
    evt.currentTarget.className += " active";
}

// breakfast menu is shown default
document.getElementById("defaultOpen").click();

// function for restaurant image slide show
function currentDiv(n) {
    showDivs(slideIndex =n);
}

// function for restaurant image slide show
function showDivs(n) {
    var i;
    // top image
    var slides= document.getElementsByClassName("mySlides");
    // image scroll
    var demo= document.getElementsByClassName("demo");

    if (n > slides.length){
        slideIndex = 1;
    }

    if (n < 1){
        slideIndex = slides.length;
    }

    for (i= 0; i <slides.length; i++){
        slides[i].style.display = "none";
    }

    for (i=0; i<demo.length;i++){
        demo[i].className = demo[i].className.replace("s4-hover-opacity-off", "");
    }
    slides[slideIndex-1].style.display = "block";
    demo[slideIndex-1].className += "s4-hover-opacity-off";

}
