// Auto-Animation //
    // From Bottom
    const bottomUp = document.querySelectorAll(".animate-from-bottom")
    bottomUp.forEach(object => {
        gsap.from(object, {
            y:200,
            opacity:0,
            duration:1,
            ease: "power1.out",
        })
    })

    // Fades In
    const fadeIn = document.querySelectorAll(".animate-fade")
    fadeIn.forEach(object => {
        gsap.from(object, {
            opacity:-1,
            duration:1.5,
            ease: "power1.out",
        })
    })

const mojo = document.querySelector("#mojo-star")
gsap.to(mojo, {
    duration: 1.5,
    scale: .97,
    repeat: -1, // repeat indefinitely
    yoyo: true, // animate back and forth
    ease: "sine.inOut" // use a sine easing
})

// Hamburger Menu
$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
})