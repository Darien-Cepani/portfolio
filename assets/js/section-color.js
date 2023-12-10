gsap.registerPlugin(ScrollTrigger);

let coloredSections = gsap.utils.toArray("[data-color]");
coloredSections.forEach((section, i) => {
  // grab the colors from the attribute
  let [bgColor, color] = section.getAttribute("data-color").split(" ");
  ScrollTrigger.create({
    trigger: section,
    start: "200 bottom",
    end: "+=100%",
    onToggle: self => {
      // whenever we enter a section from either direction (scrolling up or down), animate to its color
      if (self.isActive) {
        gsap.to("body", {
          backgroundColor: bgColor,
          color: color,
          overwrite: "auto",
        });
        gsap.to("header", {
            backgroundColor: bgColor,
            color: color,
            borderColor: color,
            overwrite: "auto",
          });
        gsap.to("#menuToggle span", {
          backgroundColor: color,
          color: color,
          overwrite: "auto",
        });
        gsap.to("#menu", {
          backgroundColor: bgColor,
          color: color,
          borderColor: color,
          overwrite: "auto",
        });
        gsap.to("#menu a li", {
          backgroundColor: bgColor,
          color: color,
          overwrite: "auto",
        });
        gsap.to("#menu a i", {
          backgroundColor: bgColor,
          color: color,
          overwrite: "auto",
        });
        gsap.to(".card", {
          color: color,
          overwrite: "auto",
        });
        gsap.to(".section-4", {
          backgroundColor: bgColor,
          color: color,
          borderColor: color,
          overwrite: "auto",
        });
        gsap.to(".cta", {
          backgroundColor: bgColor,
          color: color,
          borderColor: color,
          overwrite: "auto",
        });
        gsap.to(".marquee", {
          color: color,
          overwrite: "auto",
        });
        gsap.to(ctx, 1, {strokeStyle:color, onUpdate:update})
          function update() {
            ctx.strokeStyle =color;
          }
      // when we LEAVE the very first section scrolling in reverse -OR- when we scroll past the very last section (forward), return to the "normal" colors
      } else if ((i === 0 && self.direction < 0) || (i === coloredSections.length - 1 && self.direction > 0)) {
        gsap.to("body", {
          backgroundColor: "white",
          color: "black",
          overwrite: "auto"
        });
        gsap.to("header", {
            backgroundColor: "white",
            color: "black",
            borderColor: "black",
            overwrite: "auto"
          });
        gsap.to("#menuToggle span", {
          backgroundColor: "black",
          overwrite: "auto",
        });
        gsap.to("#menu", {
          backgroundColor: "white",
          color: "black",
          overwrite: "auto",
        });
        gsap.to("#menu a li", {
          backgroundColor: "white",
          color: "black",
          overwrite: "auto",
        });
      }
    }
  });
});