## Quaver with Variations

### Background

**NB**: You'll probably want to keep the Background section for your production Readme as well.  

Quaver is a voice control game, inspired by Yasuhati developed by Freem Inc.The user controls an quaver to avoid obstacles with voice. The game has four stages,

The game rules are as follow:
1) User could use speaking voice, singing voice, or any other sound with similar frequency interval as human voice.
2) User uses smaller voice to make the quaver to walk, louder voice to jump and even louder for higher jump.
3) If user makes a voice when the quaver is jumping, it could move even forward.
4) User will lose the game if the quaver hits any enemy or falls off the cliff(edge).
5) User will win one stage if the quaver lands the destination(the red triangle)。User will win the entire game if the quaver completes all four stages.

### Functionality & MVP  

With this Quaver Game, users will be able to:

- [ ] Start, pause, and reset the game board.
- [ ] Select stage to start.

In addition, this project will include:

- [ ] An Demo modal describing the rules of the game.
- [ ] A production Readme

### Wireframes

This app will consist of a single screen with game board, game controls, and nav links to the Github, my LinkedIn. Game controls will include Start, Pause, and Reset buttons.

![wireframes](images/js_wireframe.jpeg)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript for overall structure and game logic,
- `Vue.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- Web Audio API to translate microphone input into data.
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

`board.js`: this script will handle the logic for creating and updating the necessary `Vue.js` elements and rendering them to the DOM.

`automata.js`: this script will handle the logic behind the scenes.  An Automata object will hold a 2D array of `Quaver`.  It will use user microphone input as argument to control the quaver to jump or walk.

`crotchet.js`: this script will handle house the constructor and update functions for the `Crotchet` objects. Each `Crotchet` will contain a `showState`(`true` or `false`) and a
???

`quaver.js`: this lightweight script will house the constructor and update functions for the `Quaver` object.  Each `Quaver` will contain a `position`([x-axis, y-axis]) and an `aliveState` (`true` or `false`).

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Vue.js` installed.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 3 scripts outlined above.  Learn the basics of `Vue.js`.  Goals for the day:

- Get a green bundle with `webpack`
- Learn enough `Vue.js` to render an object to the `Canvas` element

**Day 2**: Dedicate this day to learning the `Vue.js` API.  First, build out the `Quaver` object to connect to the `Board` object.  Then, use `board.js` to create and render at least the square grid, ideally all 3 grid types.  Build in the ability to toggle the live/dead states on click for each quaver.  Goals for the day:

- Complete the `quaver.js` module (constructor, update functions)
- Render a square grid to the `Canvas` using `Vue.js`
- Make each quaver in the grid clickable, toggling the state of the square on click
- Do the same for triangular and hexagonal grids

**Day 3**: Create the automata logic backend.  Build out modular functions for handling the different grid types along with their unique neighbor checks and rule sets.  Incorporate the automata logic into the `Board.js` rendering.  Goals for the day:

- Export an `Automata` object with correct type and handling logic
- Have a functional grid on the `Canvas` frontend that correctly handles iterations from one generation of the game to the next


**Day 4**: Install the controls for the user to interact with the game.  Style the frontend, making it polished and professional.  Goals for the day:

- Create controls for game speed, stop, start, reset, and shape type
- Have a styled `Canvas`, nice looking controls and title
- If time: include buttons on the side to toggle the color scheme of the quavers


### Bonus features

There are many directions this quaverular automata engine could eventually go.  Some anticipated updates are:

- [ ] Slider to control microphone sensitivity.
- [ ] Add multiple choices for starting states that are interesting
- [ ] Explore multi-state versions of the game, such as the ones outlined [here](https://cs.stanford.edu/people/eroberts/courses/soco/projects/2008-09/modeling-natural-systems/gameOfLife2.html)
