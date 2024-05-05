// Query DOM Elements for the second frame
const path2 = document.querySelector('.path2'); // select the path for the second frame
const boat2 = document.querySelector('.boat'); // select the boat for the second frame

// Get the total length of the path for the second frame
const totalLength2 = path2.getTotalLength();

// Create an object to store the boat's position for the second frame
const position2 = { x: totalLength2, y: 0 }; // set the initial position to the end of the path

// Create a tween for the second frame
gsap.to(position2, {
  // Animate the boat's position along the path from end to start
  x: 0,
  // Make the animation lasts 20 seconds
  duration: 20,
  // Function call on each frame of the animation
  onUpdate: () => {
    // Calculate the position along the path based on the current progress
    const point2 = path2.getPointAtLength(position2.x);
    // Update the boat's coordinates
    boat2.setAttribute('x', point2.x - 25); // Adjust for boat's width
    boat2.setAttribute('y', point2.y - 25); // Adjust for boat's height
  },
});
