gsap.registerPlugin(ScrollTrigger);

/* Fade in the logo */
gsap.fromTo('.logo', {
  opacity: 0,
  yPercent: -50
}, {
  yPercent: 0,
  opacity: 1,
  duration: 1,
  ease: 'power3.out'
});

var mobile = window.matchMedia("(max-width: 730px)")

if( mobile.matches){
  /* Logo to header animation */
let logoTl = gsap.timeline({
  scrollTrigger: {
    trigger: document.body,
    start: 0,
    end: () => window.innerHeight * 1.2,
    scrub: 0.6
  }
});

logoTl.fromTo('.logo', {
  top: '50vh',
  yPercent: -50,
  xPercent: 0,
  scale: 5,
}, {
  top: 0,
  yPercent: 0,
  xPercent: -40,
  scale: 1,
  duration: 0.5
});
} else {

/* Logo to header animation */
let logoTl = gsap.timeline({
  scrollTrigger: {
    trigger: document.body,
    start: 0,
    end: () => window.innerHeight * 1.2,
    scrub: 0.6
  }
});

logoTl.fromTo('.logo', {
  top: '50vh',
  yPercent: -50,
  scale: 5,
}, {
  top: 0,
  yPercent: 0,
  scale: 1,
  duration: 0.5
});

// Toggle the burger visibility
logoTl.fromTo('#menuToggle', {
  opacity: 0
}, {
  opacity: 1,
  duration: 0.5
}, 0.9);

// Toggle the border sizes
logoTl.fromTo('header', {
    borderBottom: 0 
}, {
    borderBottom: '2px solid black'
}, 0.5);
logoTl.fromTo('#menu', {
  borderLeft: 0 
}, {
  borderLeft: '2px solid black'
}, 0.5);
};

let menu = document.querySelector('.menu');