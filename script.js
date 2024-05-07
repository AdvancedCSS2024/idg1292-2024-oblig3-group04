const sectionEls = document.querySelectorAll(".animate");

const options = {
  rootMargin: "10%",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const isLeftDoor = entry.target.classList.contains("left-door");
    const isRightDoor = entry.target.classList.contains("right-door");
    const isWaterflow = entry.target.classList.contains("waterflow");
    const isBoat = entry.target.classList.contains("boat");

    if (entry.isIntersecting && isLeftDoor) {
      entry.target.classList.add("animation-left");
    } else {
      entry.target.classList.remove("animation-left");
    }
    if (entry.isIntersecting && isRightDoor)
      entry.target.classList.add("animation-right");
    else {
      entry.target.classList.remove("animation-right");
    }
    if (entry.isIntersecting && isWaterflow)
      entry.target.classList.add("squiggle");
    else {
      entry.target.classList.remove("squiggle");
    }
    if (entry.isIntersecting && isBoat)
      entry.target.classList.add("boatAnimation");
    else {
      entry.target.classList.remove("boatAnimation");
    }
  });
}, options);

sectionEls.forEach((el) => observer.observe(el));

let zoom = gsap.timeline({
  scrollTrigger:{
    trigger: "#zoom",
    start: "top ",
    end: "bottom ",
    scrub: false,
    markers: true,
  }

})
zoom.to("#zoom",{
  scale:4
});