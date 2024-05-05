1. preparation: 
For our project, we've chosen to focus on Sustainable Development Goal 12, which promotes responsible consumption and production. Our story highlights an interesting issue: Norwegian fish that are caught locally, sent to China for processing, and then returned to Norway to be sold in grocery stores.

Initially, we brainstormed and drew a storyboard to outline our story. We created designs for key elements like maps and boats using Adobe Illustrator to visualize the stages of our fish’s journey. In addition, to spare some time for more complex drawings, we used an AI generator in Illustrator to create backgrounds, which made it easier to sketch out elements like hands.


2. animation part: 
* sources: 
- https://tympanus.net/codrops/2022/01/19/animate-anything-along-an-svg-path/ (using the points coordinates for moving the boat along)
- https://www.npmjs.com/package/gsap (for quick CDN links)

3. accessibility and responsiveness:
Additionally we incorporated Intersection Observer API' to make our webpage more interactive.This tool helps us show or hide content based on how a user scrolls
our webpage to guide users through our narrative. For instance, in specific sections, we implemented scroll-based animations and transitions to enhance the storytelling experience. 

We also took into considerations about WCAG and tried to make animations in slower pace. This can help people with motion sickness for instance to feel comfortbale while scrolly at the webpage. 

// i also encourted some issues with boat dissapearing on a path in some parts, so what i did was to change value in viwbox on svg from original 979 to 1200