// Slide In
const block_l = document.querySelectorAll(".scroll-in-left")
const block_r = document.querySelectorAll(".scroll-in-right")
const block_t = document.querySelectorAll(".scroll-in-top")


block_l.forEach(object => {
  let tl = gsap.timeline({
  scrollTrigger: {
      trigger: object,
      start: "top-=50 center+=250",
      end: "center center",
      scrub: 1,
      markers: false,
    }
  }).from(object,{
      x:-150,
      opacity:0,
  })
})

block_r.forEach(object => {
  let tl = gsap.timeline({
  scrollTrigger: {
      trigger: object,
      start: "top-=50 center+=250",
      end: "center center",
      scrub: 1,
      markers: false,
    }
  }).from(object,{
      x:150,
      opacity:0,
  })
})

block_t.forEach(object => {
  let tl = gsap.timeline({
  scrollTrigger: {
      trigger: object,
      start: "top-=100 bottom-=100",
      end: "clamp(bottom) 65%",
      scrub: 1,
      markers: false,
    }
  }).from(object,{
      y:-250,
      opacity:-10,
  })
})

// Wiggles
const icon = document.querySelectorAll('.choose-icon')
const wiggle = gsap.to(icon, {
    duration: 1,
    y: 3, // move 3px to the right
    repeat: -1, // repeat indefinitely with -1
    yoyo: true, // animate back and forth
    ease: "sine.inOut" // use a sine easing
})

// Scroll trigger
gsap.to(wiggle, {
    scrollTrigger: {
    trigger: "#why-us", 
    start: "top+=50 80%", 
    end: "center-=50 20%",
    scrub: false, 
    markers: false,
    }
})