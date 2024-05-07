const sectionEls = document.querySelectorAll(".animate");

const options = {
	rootMargin: "10%",
};

const observer = new IntersectionObserver(entries=>{
	entries.forEach(entry=>{
    const isLeftDoor = entry.target.classList.contains("left-door");
    const isRightDoor = entry.target.classList.contains("right-door");
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
    
    }if(entry.isIntersecting && isWaterflow)
    entry.target.classList.add("squiggle")
    else{
      entry.target.classList.remove("squiggle")
    
    } if(entry.isIntersecting && isBoat)
    entry.target.classList.add("boatAnimation")
    else{
      entry.target.classList.remove("boatAnimation")
    }

	});
}, options);

sectionEls.forEach(el=>observer.observe(el));



// Gsap for scene 1

gsap.to([".sky-one", ".sky-three"], {duration: 8, x: '-4vw', repeat:-1, yoyo:true});
gsap.to([".sky-two", ".sky-four"], {duration: 8, x: '-4vw', repeat:-1, yoyo:true, delay:2});

gsap.to([".water-two", ".water-four"], {duration: 2, x: '-4vw', repeat:-1, yoyo:true});
gsap.to([".water-one", ".water-three"], {duration: 2, x: '-4vw', repeat:-1, yoyo:true, delay:1});

gsap.from(".boat", {duration:3, rotate:'-5%', repeat:-1});
gsap.to(".boat", {duration:3, y:'10%', rotate:'5%', repeat:-1, yoyo:true});