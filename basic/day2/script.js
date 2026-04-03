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
gsap.from("#page3 #box",{
    scale:0,
    duration:1,
    delay:1,
    rotate:180,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        markers:true,
        scrub:true,
        start:"top 50%",
         end:"top 30%"
    }
})



gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 50%",
         end:"top 30%",
        scrub:3
    }
     
})
gsap.from("#page2 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
        scrub:3
    }
     
})