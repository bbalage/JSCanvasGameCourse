# Lesson 2
In this lesson, we are going to do a big refactoring! We can't just put all of our content in one file,
one class, can we? Well, we could, but it depends... If we want too many things, then putting it all
to one file is not a very good idea, at least not while we are developing. So, let's make a few plans
on what we want!

What functionalities does a game usually have? What functionalities we want for our own? Where do we start?
Well, let's see:
- **Tank**: Yeah, we already know we are making a tank game. Just rehearsing.
- **Rotation**: Sure, our tank wants to turn. We need that.
- **Hit box / bounding box**: We are going to need that, if we want any of the following:
  - The tank stopping at an obstacle.
  - The tank shooting and damaging anyone/anything else with the bullet.
- **Static objects**: obstacles, covers. Just to make the playground more interesting.
- **Shooting and damaging**: These two come hand in hand I'm afraid.
- **Main menu**: This is just sugar on the cake, but let's go for it!
- **Enemies**: This could get arbitrarily hard, but our game isn't much without them. 

What do you think, how many lines do you need for that? I think, we can agree, that you would keep most of your precious development hours scrolling. So, let's refactor!

## Structuring

Since we are starting to think bigger, we need to build our blocks in a way they can support a more advanced game. Javascript is not as focused on object oriented programming as Java, but it supports OO principles. We are going to use this support.

First, let's just think about what we said about our goals! Our game will have:
- a menu,
- the game itself.

It is also common to have a pause menu, but we don't go there (you can add it yourself, it's not that hard). 

If you look up any game programming learning material, you will probably come across the concept of the
game loop. The game loop runs as long as the game does, so from our perspective, forever (because we can
trust the browser to clean up after us). The loop does three things:
- handles input,
- updates the game objects,
- renders the game objects.
These three things have to be done in the menu and the game too (here, we decided to render everything
on the canvas, and don't use HTML buttons and such for menu purposes).

So, to represent these requirements, I created two classes: Game and Scene. There is only one game, whose
job is to switch between scenes. A Game stores a reference to the active scene, and calls the methods
of scene, where the methods are: `handleInput`, `update`, `render`. Effectively, the Scene implements the
game loop. The game switches scenes if necessary. The following UML diagram represents this idea.

![UML](img/Game_and_scene.drawio.png)

There is one additional method to the Scene: `shouldQuit`. This is a way to notify the Game about a need
to switch scenes. Of course, we somehow have to know which is the next scene to load, but as long as
there are only two scenes, we are fine like this.

Let's write some dummy code! You can comment or delete all code from the previous lesson, because we
are going to do some big refactoring.

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

For now, we are avoiding the implementation of a menu, because we have more important things to do.
In Javascript, the inheritence is kind of not necessary, because there is no static checking as to what
methods an object has. However, at least we state our intent quite clearly. The methods are only dummies
for now.

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

## Importing the previous lesson
Before we advance to make our tank rotate, let's just make everything work again! We are going to make a few structural changes along the line, but the functionalities will stay the same.

