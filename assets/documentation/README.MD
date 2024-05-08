1. preparation and license: 
For our project, we've chosen to focus on Sustainable Development Goal 12, which promotes responsible consumption and production. Our story highlights an interesting issue: Norwegian fish that are caught locally, sent to China for processing, and then returned to Norway to be sold in grocery stores.

Initially, we brainstormed and drew a storyboard to outline our story. We created designs for key elements like maps and boats using Adobe Illustrator to visualize the stages of our fish’s journey. In addition, to spare some time for more complex drawings, we used an AI generator in Illustrator to create backgrounds, which made it easier to sketch out elements like hands.

Since all of ou illustrations were made my us, the only image that we exported for our website is SDG12 - logo. At sustainabledevelopment website it is said that it is free to download and use as long as a link is included: https://www.un.org/sustainabledevelopment/news/communications-material/

2. animation part: 
Animation for boat follwoing path on the map: * sources i used to make boat follow a path: 
- https://tympanus.net/codrops/2022/01/19/animate-anything-along-an-svg-path/ (using the points coordinates for moving the boat along)
- https://www.npmjs.com/package/gsap (for quick CDN links)

2.1 In the scene with the conveyor belt, i utilized keyframes to define two animations: 'FishAnimation' and 'fishPackageAnimation'. For both animations, I specified keyframes ranging from 0% to 100%, defining the movement path and opacity changes over time. 

2.1.1 To animate the fish, I applied the 'fishAniamtion' to the fish element, setting the animation duration to 10 seconds and using linear timing function to ensure smooth movement. 

2.1.2 To delay the appereance of the fish package, I initially set tis opacity to 0 and used the 'animation-delay' property to start the 'fishPackageAniamtion' aftwe a specified delay. 


3. accessibility and responsiveness:
Additionally we incorporated Intersection Observer API' to make our webpage more interactive.This tool helps us show or hide content based on how a user scrolls
our webpage to guide users through our narrative. For instance, in specific sections, we implemented scroll-based animations and transitions to enhance the storytelling experience. 

We also took into considerations about WCAG and tried to make animations in slower pace. This can help people with motion sickness for instance to feel comfortbale while scrolly at the webpage. And we also used 'prefers-reduced-motion' 

// skrive mer om prefers-reduced-motion'

I encountered an issue where the boat would disappear at some certain parts of its path. to adress this, i adjusted the viewbox attribute in the SVG from its orginal value of 979 to 1200. 


