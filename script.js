
var crsr=document.querySelector("#cursor");
var blur=document.querySelector("#cursor-blur");

// document.addEventListener("mousemove", function(dets){
//     crsr.style.left =dets.x - 8 + "px";
//     crsr.style.top =dets.y - 8 + "px";
//     blur.style.left =dets.x - 225 + "px";
//     blur.style.top =dets.y - 225 + "px";
    

// });



gsap.to("#nav",{
    backgroundColor: "black",
    height: 110,
    duration: 1.5,
    delay: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        // markers:true,
        scrub:2,
        start: "top -10%",
        end:"top -12%"
    }


})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -80%",
        scrub: 2,
    }
})

gsap.from("#about-us img",{
    scale:0,
    y:100,
    duration:0.8,
    
    delay:0.5,
    // scrollTrigger:{
    //     scroller:"body",
    //     trigger:"poster",
    //     markers:true,
       
    //     start:"top 200%",
    //     // end:"top 100%",

    // }
   
})

