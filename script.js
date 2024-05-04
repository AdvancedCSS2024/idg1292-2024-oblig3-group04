const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Handle elements using the Intersection Observer
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("left-door")) {
        entry.target.classList.add("animation-left"); // Add animation class for left door when in view
      } else if (entry.target.classList.contains("right-door")) {
        entry.target.classList.add("animation-right"); // Add animation class for right door when in view
      }
    } else {
      if (entry.target.classList.contains("left-door")) {
        entry.target.classList.remove("animation-left"); // Remove animation class for left door when out of view
      } else if (entry.target.classList.contains("right-door")) {
        entry.target.classList.remove("animation-right"); // Remove animation class for right door when out of view
      }
    }
  });
});

const observedElements = document.querySelectorAll(".animate");
observedElements.forEach((el) => {
  observer.observe(el);
  
  // Trigger animation for elements initially in view
  if (el.getBoundingClientRect().top < window.innerHeight) {
    if (el.classList.contains("left-door")) {
      el.classList.add("animation-left");
    } else if (el.classList.contains("right-door")) {
      el.classList.add("animation-right");
    }
  }
});
