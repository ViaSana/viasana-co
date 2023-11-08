const mainHeading = document.querySelectorAll(".animate-from-bottom")

// Animates in from the bottom on page load
mainHeading.forEach(object => {
    gsap.from(object, {
        y:250,
        opacity:-10,
        duration:1,
        ease: "power2",
    })
})

// Hamburger Menu
$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    console.log("wtf");
});