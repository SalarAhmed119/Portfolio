if(window.innerWidth >= 500){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#page01',
            start: 'top top',
            scrub: 4,
            pin:true,
            end:'bottom top'
        }
    });
    tl.to("#big-circle",{
        duration: 7,
        ease: "easeInOut",
        scale:1,
        opacity:0
    })
    .to("#big-circle",{
        opacity: 0
    })
    .to("#small-circle",{
        opacity:1,
        ease:"easeInOut",
        duration: .5
    })
    .to("#frontend, #developer",{
        fontSize: "5vw",
        duration: 2.5,
        ease: "easeInOut",
    })
    .to("#circle-btm img:nth-child(1)",{
        rotate:"-90deg",
        duration: 2,
        top:"50%",
        left:"85%",
        scale:1.5,
        ease: "easeInOut"
    })
    .to("#aboutme",{
        opacity:1,
        fontSize:"1vw",
        duration: 2.5,
        ease:"easeInOut"
    })
    .to("#about-me",{
        bottom:"100%",
        ease:"easeInOut",
        duration: 7.5,
    })
    .to("#aboutme",{
        opacity:0,
        duration:3,
        ease:"easeInOut",
    })
    .to("#circle-btm img:nth-child(2)",{
        rotate:"-70deg",
        duration: 3,
        top:"55%",
        left:"73%",
        scale:1.2,
        ease: "easeInOut"
    })
    .to("#projects",{
        opacity:1,
        fontSize:"1vw",
        ease:"easeInOut"
    })
    .to("#circle",{
        display:"none",
        duration: 2,
        ease:"easeInOut",
    })
    .to("#big-circle",{
        opacity:1,
        duration: 2,
        ease: "easeInOut",
        scale:3
    })
    .to("#frontend, #developer",{
        opacity:"0",
        ease: "easeInOut"
    })
    .to("#gola",{
        opacity:".5",
        ease: "easeInOut",
        duration: 2,
        top: "48%",
    })
    .to("#app",{
        left:"-250%",
        ease: "linear",
        duration: 8,
    })
    .to("#gola",{
        scale:".5",
        opacity:".5",
        ease: "easeInOut",
        duration: 3,
    })
    .to("#app1",{
        left:"200%",
        ease: "linear",
        duration: 8,
    })
    .to("#gola",{
        scale:"0.2",
        ease: "easeInOut",
        duration: 1,
        opacity:"0",
    })
    .to("#big-circle",{
        duration: 1,
        ease: "easeInOut",
        scale:0.5,
        opacity:"0",
    })
    .to("#projects",{
        opacity:0,
        duration: 2,
        ease:"easeInOut"
    })
    .to("#small-circle",{
        scale: .3,
        duration:2,
        ease:"easeInOut",
        opacity:0
    })
    var tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: '#page02',
            start: 'top 80%',
            scrub: 4,
            pin:true,
            end:'top 20%',
        }
    });

    tl1
    .to("#page02",{
        overflow: "visible",
    })
    .to("#page02>h1",{
        top: "-10%",
        left: "5%",
        transform: "translate(-50%,-50%) rotate(90deg)",
        ease:"easeInOut",
        duration: 1
    })
    .to("#projectsCard",{
        opacity:1,
        bottom:"60%",
        left:"3%",
        ease: "easeInOut",
        duration: 4,
    })
    .to("#page02>#gradient>.plate",{
        height:"130%",
        duration: 1,
        stagger: 1,
        ease:"easeInOut",
        scrollTrigger:{
                    trigger:"#gradient",
                    start:"top 45%",
                    scrub: 2,
                    markers: true,
                    end: "bottom 100%",
                },
    });
    gsap
    .to(".gmail",{
        opacity:1,
        duration: 1,
        ease:"easeInOut",
        left:"50%",
        scrollTrigger:{
                    trigger:".gmail",
                    start:"top 45%",
                    scrub: 2,
                    markers: true,
                    end: "bottom 100%",
                },
    });
    gsap.to("#email",{
        opacity:1,
        duration: 1,
        ease:"easeInOut",
        left:"50%",
        scrollTrigger:{
                    trigger:".gmail",
                    start:"top 45%",
                    scrub: 2,
                    markers: true,
                    end: "bottom 100%",
                },
    });
    gsap.to(".linkedin",{
        opacity:1,
        duration: 1,
        ease:"easeInOut",
        left:"50%",
        scrollTrigger:{
                    trigger:".gmail",
                    start:"top 45%",
                    scrub: 2,
                    markers: true,
                    end: "bottom 100%",
                },
    });
    gsap.to("#linkedin>a",{
        opacity:1,
        duration: 1,
        ease:"easeInOut",
        left:"50%",
        scrollTrigger:{
                    trigger:".gmail",
                    start:"top 45%",
                    scrub: 2,
                    markers: true,
                    end: "bottom 100%",
                },
    });
    gsap.to(".github",{
        opacity:1,
        duration: 1,
        ease:"easeInOut",
        left:"50%",
        scrollTrigger:{
                    trigger:".gmail",
                    start:"top 45%",
                    scrub: 2,
                    markers: true,
                    end: "bottom 100%",
                },
    });
    gsap.to("#github>a",{
        opacity:1,
        duration: 1,
        ease:"easeInOut",
        left:"50%",
        scrollTrigger:{
                    trigger:".gmail",
                    start:"top 45%",
                    scrub: 2,
                    markers: true,
                    end: "bottom 100%",
                },
    });
    }
else{
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#page01',
            start: 'top top',
            scrub: 4,
            pin:true,
            end:'bottom top'
        }
    });
    tl.to("#big-circle",{
        duration: 7,
        ease: "easeInOut",
        scale:1,
        opacity:0
    })
    .to("#big-circle",{
        opacity: 0
    })
    .to("#small-circle",{
        opacity:1,
        ease:"easeInOut",
        duration: .5
    })
    .to("#frontend",{
        fontSize: "10vw",
        duration: 2.5,
        ease: "easeInOut",
        top:"8%",
    },'a')
    .to("#developer",{
        fontSize: "10vw",
        duration: 2.5,
        ease: "easeInOut",
        top:"15%",
    
    },'a')
    .to("#circle-btm img:nth-child(1)",{
        rotate:"-90deg",
        duration: 2,
        top:"50%",
        left:"85%",
        scale:1.5,
        ease: "easeInOut"
    })
    .to("#aboutme",{
        opacity:1,
        fontSize:"2.5vw",
        duration: 2.5,
        ease:"easeInOut"
    })
    .to("#about-me",{
        bottom:"100%",
        ease:"easeInOut",
        duration: 7.5,
    })
    .to("#aboutme",{
        opacity:0,
        duration:3,
        ease:"easeInOut",
    })
    .to("#circle-btm img:nth-child(2)",{
        rotate:"-70deg",
        duration: 3,
        top:"55%",
        left:"73%",
        scale:1.2,
        ease: "easeInOut"
    })
    .to("#projects",{
        opacity:1,
        fontSize:"2.5vw",
        ease:"easeInOut"
    })
    .to("#circle",{
        display:"none",
        duration: 2,
        ease:"easeInOut",
    })
    .to("#projects",{
        top:"50%"
    })
    .to("#big-circle",{
        opacity:1,
        duration: 2,
        ease: "easeInOut",
        scale:3
    })
    .to("#frontend, #developer",{
        opacity:"0",
        ease: "easeInOut"
    })
    .to("#gola",{
        opacity:".5",
        ease: "easeInOut",
        duration: 2,
        top: "50%",
    })
    .to("#app",{
        left:"-250%",
        ease: "linear",
        duration: 8,
    })
    .to("#gola",{
        scale:".5",
        opacity:".5",
        ease: "easeInOut",
        duration: 3,
    })
    .to("#app1",{
        left:"200%",
        ease: "linear",
        duration: 8,
    })
    .to("#gola",{
        scale:"0.2",
        ease: "easeInOut",
        duration: 1,
        opacity:"0",
    })
    .to("#big-circle",{
        duration: 1,
        ease: "easeInOut",
        scale:0.5,
        opacity:"0",
    })
    .to("#projects",{
        opacity:0,
        duration: 2,
        ease:"easeInOut"
    })
    .to("#small-circle",{
        scale: .3,
        duration:2,
        ease:"easeInOut",
        opacity:0
    })
    var tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: '#page02',
            start: 'top 80%',
            scrub: 4,
            pin:true,
            end:'top 20%',
        }
    });
    tl1
    .to("#page02",{
        overflow: "visible",
    })
    .to("#page02>h1",{
        top: "-10%",
        left: "4%",
        transform: "translate(-50%,-50%) rotate(90deg)",
        ease:"easeInOut",
        duration: 1
    })
    .to("#projectsCard",{
        opacity:1,
        bottom:"60%",
        left:"3%",
        ease: "easeInOut",
        duration: 4,
    })
    .to("#page02>#gradient>.plate",{
        height:"130%",
        duration: 1,
        stagger: 1,
        ease:"easeInOut",
        scrollTrigger:{
                    trigger:"#gradient",
                    start:"top 45%",
                    scrub: 2,
                    markers: true,
                    end: "bottom 100%",
                },
    });
    gsap
    .to(".gmail",{
        opacity:1,
        duration: 1,
        ease:"easeInOut",
        left:"50%",
        scrollTrigger:{
                    trigger:".gmail",
                    start:"top 45%",
                    scrub: 2,
                    markers: true,
                    end: "bottom 100%",
                },
    });
    gsap.to("#email",{
        opacity:1,
        duration: 1,
        ease:"easeInOut",
        left:"50%",
        scrollTrigger:{
                    trigger:".gmail",
                    start:"top 45%",
                    scrub: 2,
                    markers: true,
                    end: "bottom 100%",
                },
    });
    gsap.to(".linkedin",{
        opacity:1,
        duration: 1,
        ease:"easeInOut",
        left:"50%",
        scrollTrigger:{
                    trigger:".gmail",
                    start:"top 45%",
                    scrub: 2,
                    markers: true,
                    end: "bottom 100%",
                },
    });
    gsap.to("#linkedin>a",{
        opacity:1,
        duration: 1,
        ease:"easeInOut",
        left:"50%",
        scrollTrigger:{
                    trigger:".gmail",
                    start:"top 45%",
                    scrub: 2,
                    markers: true,
                    end: "bottom 100%",
                },
    });
    gsap.to(".github",{
        opacity:1,
        duration: 1,
        ease:"easeInOut",
        left:"50%",
        scrollTrigger:{
                    trigger:".gmail",
                    start:"top 45%",
                    scrub: 2,
                    markers: true,
                    end: "bottom 100%",
                },
    });
    gsap.to("#github>a",{
        opacity:1,
        duration: 1,
        ease:"easeInOut",
        left:"50%",
        scrollTrigger:{
                    trigger:".gmail",
                    start:"top 45%",
                    scrub: 2,
                    markers: true,
                    end: "bottom 100%",
                },
    });
}

