window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("slideImgL").className = "slideLeft";
        document.getElementById("slideImgR").className = "slideRight";
        document.getElementById("slideImgLeft").className = "slideLeft";
        document.getElementById("slideImgRight").className = "slideRight";
      
    }
}

