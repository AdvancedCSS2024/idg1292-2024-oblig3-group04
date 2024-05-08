const sectionEls = document.querySelectorAll(".animate");

const options = {
  rootMargin: "10%",
  threshold: 0.5,
};

const observer = new IntersectionObserver(entries=>{
	entries.forEach(entry=>{
    const isLeftDoor = entry.target.classList.contains("door--left");
    const isRightDoor = entry.target.classList.contains("door--right");
    const isWaterflow = entry.target.classList.contains("waterflow")
    const isBoat = entry.target.classList.contains("boat")
		
    if(entry.isIntersecting && isLeftDoor){
			entry.target.classList.add("animation-left");
		}else{
			entry.target.classList.remove("animation-left");
		
    }if(entry.isIntersecting && isRightDoor)
    entry.target.classList.add("animation-right");
    else{
      entry.target.classList.remove("animation-right")
    }
    if(entry.isIntersecting && isWaterflow)
    entry.target.classList.add("squiggle");
    else{
      entry.target.classList.remove("squiggle")
    }
    if (entry.isIntersecting && isBoat){
      gsap.from(".boat", {duration:3, rotate:'-5%', repeat:-1});
      gsap.to(".boat", {duration:3, y:'10%', rotate:'5%', repeat:-1, yoyo:true});
    }
  }, options);
});

sectionEls.forEach((el) => observer.observe(el));

const backPath = document.querySelector('.back-path');
const boatBack = document.querySelector('.boat-back');

const totalLength = backPath.getTotalLength();

const position = { x: 0, y: 0 };

const animationTween = gsap.to(position, {
  x: totalLength,
  duration: 20,
  repeat: -1,
  onUpdate: () => {
    const point = backPath.getPointAtLength(position.x);
    boatBack.setAttribute('x', point.x - 25);
    boatBack.setAttribute('y', point.y - 25);
  },
  paused: true
});

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animationTween.play();
    } else {
      animationTween.pause();
    }
  });
}, { threshold: 0 });

observer2.observe(backPath);

const path2 = document.querySelector('.path2');
const boat2 = document.querySelector('.boat-china');

const totalLength2 = path2.getTotalLength();

const position2 = { x: totalLength2, y: 0 };

const boatAnimationTween2 = gsap.to(position2, {
  x: 0,
  duration: 20,
  onUpdate: () => {
    const point2 = path2.getPointAtLength(position2.x);
    boat2.setAttribute('x', point2.x - 25);
    boat2.setAttribute('y', point2.y - 25);
  },
  repeat: -1,
  paused: true
});

const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      boatAnimationTween2.play();
    } else {
      boatAnimationTween2.pause();
    }
  });
}, { threshold: 0 });

observer3.observe(path2);



// Gsap for scene 1
gsap.to([".sky-one", ".sky-three"], {duration: 8, x: '-4vw', repeat:-1, yoyo:true});
gsap.to([".sky-two", ".sky-four"], {duration: 8, x: '-4vw', repeat:-1, yoyo:true, delay:2});

gsap.to([".water-two", ".water-four"], {duration: 2, x: '-4vw', repeat:-1, yoyo:true});
gsap.to([".water-one", ".water-three"], {duration: 2, x: '-4vw', repeat:-1, yoyo:true, delay:1});
