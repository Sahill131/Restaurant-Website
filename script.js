
var tl=gsap.timeline()

gsap.from(".red3",{
    y:25,
    duration:0.7,
    opacity:0
    
})
gsap.from("nav ul li",{
    y:20,
    duration:0.3,
    stagger:0.5,
    opacity:0
    
})
tl.from("h5",{
    x:-50,
    // duration:0.3,
    stagger:0.5,
    opacity:0
    
})
tl.from("h1",{
    x:-50,
    // duration:0.7,
    stagger:0.5,
    opacity:0
    
})
// tl.from("p",{
//     x:-50,
//     // duration:0.7,
//     stagger:0.5,
//     opacity:0
    
// })
gsap.from(".box1",{
    y:80,
    duration:0.3,
    opacity:0,
    stagger:0.5,
    ease:"power3.out"
    
    
})
gsap.from(".gsap",{
    y:80,
    //    duration:0.80,
    scrollTrigger:{
        trigger:".gsap",
        scroller:"body",
        start:"top 80%",
        end:"top -100%",
        
    }

    
    
})
gsap.from(".space",{
    x:500,
    duration:1,
    // delay:1,
    scrollTrigger:{
        trigger:".space",
        scroller:"body",
        start:"top 80%",
        end:"top -100%",
        
    }

    
    
})

