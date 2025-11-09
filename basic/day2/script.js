gsap.from("#page1 #box",{
    scale:0,
    duration:1,
    delay:1,
    rotate:180
})

gsap.from("#page2 #box",{
    scale:0,
    duration:1,
    delay:1,
    rotate:180,
    scrollTrigger:"#page2 #box"
})

