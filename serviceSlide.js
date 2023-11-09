// Slide In Left Squence for 3 Items
let slideLeft = gsap.timeline({
    scrollTrigger: {
        trigger: ".slide-in-left",
        start: "top-=50 center+=250",
        end: "center center",
        scrub: 1,
        markers: false,
    }}).from(".slide-in-left_1", {
        x:200,
        opacity:0,
        duration:1,
        ease: "power1.out",
    }).from(".slide-in-left_2", {
        x:200,
        opacity:0,
        duration:1,
        ease: "power1.out",
    }).from(".slide-in-left_3", {
        x:200,
        opacity:0,
        duration:1,
        ease: "power1.out",
    })