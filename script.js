const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Handle elements using the Intersection Observer
    
    if (entry.target.className === "animate left-door") {
        entry.target.classList.add("animation-left"); // Add animation class when in view
      } else {
        entry.target.classList.remove("animation-left"); // Remove animation class when out of view
      }

      if (entry.target.className === "animate right-door") {
        entry.target.classList.add("animation-right"); // Add animation class when in view
      } else {
        entry.target.classList.remove("animation-right"); // Remove animation class when out of view
      }
    }
  );
},)

const observedElements = document.querySelectorAll(".animate");
observedElements.forEach((el) => observer.observe(el));
