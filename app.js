const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
tl.to('.slider', { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to('.intro-video', { y: "-100%", duration: 1 }, "-=1");
tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo('.bio-text', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo('.bio-name', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo('.me', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo('.peace', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo('.p-text', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");