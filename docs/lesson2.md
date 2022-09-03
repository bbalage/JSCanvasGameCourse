# Lesson 2
In this lesson, we are going to do a big refactoring! We can't just put all of our content in one file, one class, can we? (Sure, it all depends on how crazy we can get with loads of caffee.)

We want to add the following functionalities to our game:
- Bounding box to our tank.
- Static objects with bounding box (a rock, to be more specific).
- Shooting.

In order to add so many things, we refactor our code into different files and classes.

## Structuring

Since we are starting to think bigger, we need to build our blocks in a way they can support a more advanced game. Javascript is not as focused on object oriented programming as Java, but it supports OO principles. We are going to use this support.

First, let's just think about what we are going to need in our game later. What all games usually have is:
- a menu,
- the game itself.

It is also common to have a pause menu. Next, if you look up any game programming learning material, you will probably come across the concept of the game loop. The game loop runs as long as the game does, so from our perspective, forever (because we can trust the browser to clean up after us). The loop does three things:
- handles input,
- updates the game objects,
- renders the game objects.
These three things have to be done in the menu and the game too (here, we decided to render everything on the canvas, and don't use HTML buttons and such for menu purposes).

So, to represent these requirements, I created two classes: Game and Scene. There is only one game, whose job is to switch between scenes. A Game stores a reference to the active scene, and calls the methods of scene, where the methods are: `handleInput`, `update`, `render`. Effectively, the Scene implements the game loop. The game switches scenes if necessary. The following UML diagram represents this idea.

![UML](img/Game_and_scene.drawio.png)

There is one additional method to the Scene: `shouldQuit`. This is a way to notify the Game about a need to switch scenes. Of course, we somehow have to know which is the next scene to load, but as long as there are only two scenes, we are fine like this.

Let's write some dummy code! You can comment or delete all code from the previous lesson, because we are going to do some big refactoring.

First, create a `scene.js` file in the `js` folder, and paste the following content:

```javascript
class Scene {

    constructor() { }

    handleInputCtx() { console.log("Warning: defaulting scene function..."); }
    update() { console.log("Warning: defaulting scene function..."); }
    render() { console.log("Warning: defaulting scene function..."); }
    shouldQuit() { console.log("Warning: defaulting scene function..."); }
}

class ScenePlay extends Scene {

    constructor() { super(); }

    handleInputCtx() { console.log("Handling input."); }
    update() { console.log("Updating."); }
    render() { console.log("Rendering.") }
    shouldQuit() { return false; }
}
```

For now, we are avoiding the implementation of a menu, because we have more important things to do. In Javascript, the inheritence is kind of not necessary, because there is no static checking as to what methods an object has. However, at least we state our intent quite clearly. The methods are only dummies for now.

Let's create a file, named `game.js` in the `js` folder. Paste the following content:

```javascript
class Game {

    constructor() {
        this.scene = new ScenePlay();
    }

    gameLoop() {
        this.scene.handleInputCtx();
        this.scene.update();
        this.scene.render();
        if (this.scene.shouldQuit()) {
            console.log("Here we should handle switching scenes.");
        }
        requestAnimationFrame(() => this.gameLoop());
    }
}
```

As you can see, there is no logic for switching scenes, but there will be later. That's Game's job.

Now, the `index.js` file only needs the following two lines:

```javascript
const game = new Game();
game.gameLoop();
```

And we need to import new files in the `index.html`:

```html
<body>
    <canvas id="c"></canvas>
    <script src="js/scene.js"></script> <!--We are new here...-->
    <script src="js/game.js"></script> <!--Notice the order of imports.-->
    <script src="js/index.js"></script>
</body>
```

Now, we have our skeleton. Let's add the meat!