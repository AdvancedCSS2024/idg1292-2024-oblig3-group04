const options = {
  rootMargin: "20%",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Check if the element is an SVG circle and has the 'moving-circle' class
    if (entry.target.tagName === 'circle' && entry.target.classList.contains('moving-circle')) {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-circle"); // Add animation class when in view
      } else {
        entry.target.classList.remove("animate-circle"); // Remove animation class when out of view
      }
    } else {
      // Handle other elements using the Intersection Observer
      if (entry.isIntersecting) {
        entry.target.classList.remove(entry.target.dataset.hidden);
      } else {
        entry.target.classList.add(entry.target.dataset.hidden);
      }
    }
  });
}, options);

const observedElements = document.querySelectorAll("[data-hidden], .moving-circle");
observedElements.forEach((el) => observer.observe(el));
