function animation() {
    document.getElementById("stroke1").classList.toggle("rotate1");
    document.getElementById("stroke2").classList.toggle("opacity");
    document.getElementById("stroke3").classList.toggle("rotate2");
    $(".navbar").toggleClass("expand");
}


var element = document.getElementById("burger");
element.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("tap-circle").classList.remove("click-animation");
    void element.offsetWidth;
    document.getElementById("tap-circle").classList.add("click-animation");
}, false);
//close nav after click mobile
$(document).ready(function () {
    $('.navLink').on('click', function () {
        $('.navbar').toggleClass('expand');
        $('menu-toggle').toggleClass('burger');
        return false;
    });
});

// smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
