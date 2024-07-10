
// JavaScript function to show the container when hovering over "Apps"
function showContainer1() {
    document.getElementById("under-nav1").style.display = "block";
}
function showContainer1() {
    document.getElementById("under-nav1").style.display = "block";
}
function showContainer2() {
    document.getElementById("under-nav2").style.display = "block";
}
function showContainer2() {
    document.getElementById("under-nav2").style.display = "block";
}
function showContainer3() {
    document.getElementById("under-nav3").style.display = "block";
}
function showContainer3() {
    document.getElementById("under-nav3").style.display = "block";
}
function showContainer4() {
    document.getElementById("under-nav4").style.display = "block";
}
function showContainer4() {
    document.getElementById("under-nav4").style.display = "block";
}
// button to main container
function scrollToMainContainer() {
    var mainContainer = document.getElementById('main-container');
    mainContainer.scrollIntoView({ behavior: 'smooth' });
}

// app carousel
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("app-carousel");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// picture slideshow content2
function carousel() {
    var i;
    var x = document.getElementsByClassName("content2-slide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000); // Change image every 2 seconds
    }

// ham button

function toggleHamOpened() {
    var hamOpened = document.querySelector('.ham-opened');
    if (hamOpened.style.display === 'block') {
        hamOpened.style.display = 'none';
    } else {
        hamOpened.style.display = 'block';
    }
}