document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set("#landing-img", {
        scale: 0.8
    })
    gsap.set("#landing-img2", {
        scale: 0.8
    })
    gsap.set("#landing-img0", {
        scale: 0.8
    })
    gsap.set("#landing-img3", {
        scale: 0.8
    })

    gsap.timeline()
        .to("#landing-img3", {
            // opacity: 1,
            x: '-60px',
            duration: 1,
            rotation: "-1deg",
        })
        .to("#landing-img", {
            rotation: "1deg",
        })
        .to("#landing-img2", {
            x: '170px',
            rotation: "3deg",
        })
        .to("#landing-img0", {
            x: '-10px',
            duration: 1,
            rotation: "-3deg",
        })
       
    
    gsap.to(".menu", {
        y: "-50%",
        opacity: 0,
        ease: "none",
        scrollTrigger: {
            trigger: ".dashboard",
            start: "top top",
            end: "50vh top",
            scrub: 1,
        }
    })    

    gsap.to("#logo", {
        y: "-50%",
        scale: 0.35,
        ease: "none",
        scrollTrigger: {
            trigger: ".dashboard",
            start: "top top",
            end: "50vh top",
            scrub: 1,
        }
    })
    gsap.to("#logo", {
        filter: "blur(10px)",
        scale: 0,
        y: '-100%',
        ease: "none",
        scrollTrigger: {
            trigger: ".dashboard",
            start: "top top",
            end: "120vh top",
            scrub: 1,
        }
    })

    gsap.to(".dashboard", {
        y: "-35%",
        ease: "none",
        scrollTrigger: {
            trigger: ".dashboard",
            start: "top top",
            end: "800vh top",
            scrub: 1,
        }
    })


    gsap.to("#landing-img3", {
        filter: "blur(10px)",
        y: '70px',
        x: '-200px',
        ease: "none",
        scrollTrigger: {
            trigger: ".dashboard",
            start: "top top",
            end: "140vh top",
            scrub: 0.5,
        }
    })

    gsap.to("#landing-img", {
        filter: "blur(10px)",
        y: '-60px',
        ease: "none",
        scrollTrigger: {
            trigger: ".dashboard",
            start: "200vh top",
            end: "800vh top",
            scrub: 0.5,
        }
    })

    gsap.to("#landing-img2", {
        filter: "blur(10px)",
        x: '230px',
        ease: "none",
        scrollTrigger: {
            trigger: ".dashboard",
            start: "450vh top",
            end: "800vh top",
            scrub: 0.5,
        }
    })

    gsap.to("#landing-img0", {
        filter: "blur(10px)",
        y: '-100px',
        x: '-200px',
        ease: "none",
        scrollTrigger: {
            trigger: ".dashboard",
            start: "360vh top",
            end: "950vh top",
            scrub: 1,
        }
    })

    gsap.to(".dashboard", {
        opacity: 0,
        display: "none",
        ease: "none",
        scrollTrigger: {
            trigger: ".dashboard",
            start: "600vh top",
            end: "825vh top",
            scrub: true,
        }
    })

    // gsap.timeline()
    //     .to(".dami", {
    //     // opacity: 1,
    //     x: '-60px',
    //     duration: 1,
    //     rotation: "-1deg",
    //     delay: 2.1,
    //   })

    gsap.set('.middle-about', {
        y: '30vh'
    })

    gsap.set(".dami", {
        opacity: 0,
        x: '160px',
    })

    gsap.set(".middle-about h3", {
        opacity: 0,
        filter: "blur(10px)",
        x: '-160px',
    })

    gsap.set(".middle-about p", {
        opacity: 0,
        filter: "blur(10px)",
        x: '-160px',
    })

    gsap.set(".middle-snsIcons", {
        opacity: 0,
        // filter: "blur(10px)",
        y: '30px',
    })


    gsap.to(".dami", {
            opacity: 1,
            x: '-60px',
            duration: 1,
            rotation: "-1deg",
            delay: 2.1,
            filter: 'none',
            scrollTrigger: {
                trigger: ".dashboard",
                start: "680vh top",
                end: "700vh top",
                scrub: 1,
            }
      })

      gsap.to(".middle-about h3", {
        opacity: 1,
        x: 0,
        duration: 1,
        filter: 'none',
        scrollTrigger: {
            trigger: ".dashboard",
            start: "680vh top",
            end: "700vh top",
            scrub: 1,
        }
  })
      gsap.to(".middle-about p", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.inOut',
        filter: 'none',
        scrollTrigger: {
            trigger: ".dashboard",
            start: "680vh top",
            end: "700vh top",
            scrub: 1,
        }
  })

    gsap.to('.middle-snsIcons', 1, {
        y: '0',
        opacity: 1,
        ease: 'power3.inOut',
        delay: 0.9,
        scrollTrigger: {
            trigger: ".dashboard",
            start: "680vh top",
            end: "700vh top",
            scrub: 1,
        }
    })

    gsap.to(".middle-about", 2, {
        // opacity: 0,
        filter: "blur(10px)",
        duration: 1,
        // ease: 'power3.inOut',
        scrollTrigger: {
            trigger: ".dashboard",
            start: "1070vh top",
            end: "1200vh top",
            scrub: 1,
        }
  })

    gsap.from('.marquee', 2, {
        // top: '100vh',
        ease: 'power3.inOut',
        delay: 0.9,
    })
  
    gsap.to(".marquee", {
        opacity: 0,
        filter: "blur(10px)",
        ease: "power3.inOut",
        scrollTrigger: {
            trigger: ".dashboard",
            start: "680vh top",
            end: "2025vh top",
            scrub: true,
        }
    })

    gsap.set(".features", {
        filter: "blur(10px)",
    })

    gsap.to(".features", {
        filter: 'none',
        ease: "power3.inOut",
        scrollTrigger: {
            trigger: ".web-content",
            start: "1300vh top",
            end: "2025vh top",
            scrub: true,
        }
    })

    gsap.to(".feature_left", {
        x: '500px',
        ease: "power3.inOut",
        scrollTrigger: {
            trigger: ".web-content",
            start: "880vh top",
            end: "2025vh top",
            scrub: true,
        }
    })

    gsap.to(".feature_right", {
        x: '-500px',
        ease: "power3.inOut",
        scrollTrigger: {
            trigger: ".web-content",
            start: "880vh top",
            end: "2025vh top",
            scrub: true,
        }
    })

    gsap.to("#window", {
        transformOrigin: "center 95.2",
        scale: 150,
        ease: "none",
        scrollTrigger: {
            trigger: ".features",
            start: "70vh top",
            end: "750vh top",
            scrub: 1,
        }
    })


})