// Query DOM Elements
const path = document.querySelector('.back-path');
const boat = document.querySelector('.boat-back');

// Get the total length of the path
const totalLength = path.getTotalLength();

// Create an object to store the boat's position
const position = { x: 0, y: 0 };

// Create a tween
gsap.to(position, {
  // Animate the boat's position along the path
  x: totalLength,
  // Make the animation lasts 20 seconds
  duration: 20,
  // Function call on each frame of the animation
  onUpdate: () => {
    // Calculate the position along the path based on the current progress
    const point = path.getPointAtLength(position.x);
    // Update the boat's coordinates
    boat.setAttribute('x', point.x - 25); // Adjust for boat's width
    boat.setAttribute('y', point.y - 25); // Adjust for boat's height
  },
});




