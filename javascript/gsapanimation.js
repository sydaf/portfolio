gsap.registerPlugin(ScrollTrigger)
// navbar
gsap.from('.nav-bar', { duration: 1, ease: "power4.out",
    y: "-100%", opacity: 0
});
gsap.from('.nav-anim', { duration: 1, ease: "power4.out", stagger: 0.3, delay: 1,
    opacity: 0
});
gsap.from('.nav-anim2', { duration: 1, ease: "power4.out", stagger: 0.3, delay: 0.2,
    opacity: 0
});

// hero-section
gsap.from('.text', { duration: 1, ease: "power4.out",
    x: '-10%'
});
gsap.from('.hero', { duration: 1, ease: "power4.out", stagger: 1, delay: 0.3,
    opacity: 0
});
gsap.from('.hero img', { duration: 1, ease: "power4.out", stagger: 1, delay: 0.3,
    x: "10%"
});

// projects-section
gsap.from('.projects h2', { duration: 1, ease: "power4.out", delay: 0.2,
    opacity: 0
});
gsap.from('.project-grid', { duration: 2, ease: "power4.out", delay: 1.5, scrollTrigger: ".project-grid",
    y:"10%", opacity: 0
});

// form-section
gsap.from('.contact h2', { duration: 1, ease: "power4.out", delay: 0.5, scrollTrigger: ".contact h2",
    opacity: 0
});
gsap.from('.contact .name, .email, .message', { duration: 1, ease: "power4.out", stagger: 0.3, delay: 1, scrollTrigger: ".contact h2",
    opacity: 0
});
gsap.from('.contact img', { duration: 1, ease: "power4.out", stagger: 0.3, delay: 1, scrollTrigger: ".contact img",
    opacity: 0, x:"10%"
});

// maisonuts
gsap.from('.maiso-hero', { duration: 1, ease: "power4.out",
    opacity: 0
});
gsap.from('.maiso-hero .stagger', { duration: 1, ease: "power4.out", delay: 0.3, stagger: 0.3,
    y: "-10%", opacity: 0
});
gsap.from('.maiso-hero span', { duration: 1, ease: "power4.out", delay: 1,
    width: "0"
});

// logo-lookup
gsap.from('.logo-lookup', { duration: 1, ease: "power4.out", delay: 1, scrollTrigger: ".logo-lookup",
    opacity: 0
});
gsap.from('.logo-lookup p', { duration: 1, ease: "power4.out", delay: 1,
    y: "30%", opacity: 0
});

// mockups
gsap.from('.mockups .img-stag', { duration: 1, ease: "power4.out", delay: 1, stagger: 0.3, scrollTrigger: ".img-stag",
    y: "30%", opacity: 0
});

// color
gsap.from('.color-palette', { duration: 1, ease: "power4.out", delay: 1, scrollTrigger: ".color-palette",
    opacity: 0
});
gsap.from('.color-palette h2', { duration: 1, ease: "power4.out", delay: 1, scrollTrigger: ".color-palette h2",
    y: "30%", opacity: 0
});
gsap.from('.color-palette .card', { duration: 1, ease: "power4.out", delay: 1, stagger: 0.3, scrollTrigger: ".color-palette .card",
    y: "30%", opacity: 0
});

// about-page
gsap.from('.wave', { duration: 1, ease: "power4.out",
    x: "-10%", opacity: 0
});
gsap.from('.grid-container', { duration: 1, ease: "power4.out", delay: 0.5,
    opacity: 0
});
gsap.from('.grid-container .header-text', { duration: 1, ease: "power4.out", delay: 0.6,
    y: "10%", opacity: 0
});
gsap.from('.skill-list', { duration: 1, ease: "power4.out", delay: 0.6,
    opacity: 0
});
gsap.from('.skill-list .skill1 h2', { duration: 1, ease: "back.out(1.9)", delay: 0.6, stagger: 0.3, scrollTrigger:".skill-list",
    x: "-30%", opacity: 0
});
gsap.from('.skill-list .skill2 h2', { duration: 1, ease: "back.out(1.9)", delay: 0.6, stagger: 0.3, scrollTrigger:".skill-list",
    x: "-30%", opacity: 0
});
gsap.from('.html span', { duration: 1, ease: "back.out(1.9)", delay: 0.5, scrollTrigger:".skill-bar",
    width: 0
});
gsap.from('.css span', { duration: 1, ease: "back.out(1.9)", delay: 0.5, scrollTrigger:".skill-bar",
    width: 0
});
gsap.from('.javascript span', { duration: 1, ease: "back.out(1.9)", delay: 0.5, scrollTrigger:".skill-bar",
    width: 0
});
gsap.from('.photoshop span', { duration: 1, ease: "back.out(1.9)", delay: 0.5, scrollTrigger:".skill-bar",
    width: 0
});
gsap.from('.illustrator span', { duration: 1, ease: "back.out(1.9)", delay: 0.5, scrollTrigger:".skill-bar",
    width: 0
});
gsap.from('.figma span', { duration: 1, ease: "back.out(1.9)", delay: 0.5, scrollTrigger:".skill-bar",
    width: 0
});
gsap.from('.gallery h2, .gallery p', { duration: 1, delay: 0.3, ease: "power4.out", scrollTrigger:".gallery", stagger: 0.3,
    opacity: 0,
});
gsap.from('.gallery img', { duration: 1, delay: 0.3, ease: "power4.out", scrollTrigger:".gallery-grid", stagger: 0.3,
    opacity: 0, y:"-30%"
});
