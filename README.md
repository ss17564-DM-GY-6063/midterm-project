# Project Proposal
## Ted Chiang - Science Fiction - The Universe - Space

I have selected the book "Exhalation," a science fiction short story authored by Ted Chiang. The central theme of this story revolves around entropy and the flow of air (exhalation), serving as a metaphor for the gradual decline of energy and the ultimate fate of the universe.

**Project Description:**

1. **Cover Design**: The project will begin with the creation of an interactive book cover that immediately conveys the science fiction theme. The cover will feature elements of twinkling stars, resembling the vastness of the universe and space.

2. **Interactive Elements**: The cover itself will be interactive and responsive to user engagement. Upon interaction, it will release glowing particles, and the patterns will dynamically change based on the movement of the user's mouse cursor.

3. **Dynamic Visuals**: To achieve this, I plan to utilize the `random()` function and explore the possibility of integrating external images to enhance the visual richness of the project.

4. **Music Interaction**: Inspired by a theme I encountered in my research materials regarding music interaction, I intend to incorporate music into the project. However, the specifics of how music and visuals will interact are yet to be determined. This will be a creative challenge I'm eager to explore.

**Style References and Sketches**:

I have included style references and preliminary sketches to guide the project's visual aesthetics. These references will help me create a visually engaging and thematically appropriate interactive cover design for "Exhalation."

![reference book cover](https://imgpile.com/images/DATJzh.jpg)

By combining science fiction elements, interactivity, dynamic visuals, and music, I aim to provide an immersive and captivating experience for readers, enticing them to explore the themes of the story in an engaging and visually stunning manner.
![sketch.jpg](https://imgpile.com/images/DATPvE.jpg)


# Milestone 2
### the main animation
In the main animation, viewers'll see several twinkling stars connected by lines that gradually disappear as the stars move apart. To achieve this effect, I used Array and State Variables. I started by drawing the points, and the twinkling effect was created by inserting a PNG image.

#### speed
When it comes to adjusting the speed, I experimented with various values. I aimed to simulate the movement of constellations in the real world. However, this change is too tiny to perceive. So, I settled for a slower speed that allows for more noticeable alterations.

### future plan
My future plans involve applying the text animation effects I learned this week to the elements on the cover. One idea is to select excerpts from the book, break them down into individual letters, assign random transparency, and place them as elements in the sky on the book's cover.


# Milestone 3
This week, I made some attempts with text animation and interface transitions.

### Text Animation
I extracted my favorite passage from the story "Exhalation," where an anatomist discovers the workings of the world: "Air is not the source of life. Air can neither be created nor destroyed..." To create a decorative text effect, I separated the words into individual letters and displayed them from left to right and top to bottom on the screen. I also adjusted their alpha value randomly, creating a flickering atmosphere.

### Interface Transition
I noticed that the draw function for the text animation doesn't require a background refresh every time. However, for the star animation, I needed to update the background with each change in position. So, I split them into two parts. It seems that if both are included in the draw function, it may cause conflicts and errors. I used mouseMoved to control one of them. This way, I almost achieved the effect I wanted. However, there are still some minor bugs in transitioning between the two effects. I'm actively working on making the default animation the text animation, which switches to the cover animation when clicked by the mouse.

### Other Discoveries
I've had an enriching learning experience from the repositories and tutorials shared in the Syllabus each week. One particular example that stood out to me is the following: [Link](https://editor.p5js.org/thiagohersan/sketches/pWdH1yVQU)

As Ted Chiang is my favorite science fiction writer, I greatly appreciate the opportunity to recreate one of his book covers using P5.js.