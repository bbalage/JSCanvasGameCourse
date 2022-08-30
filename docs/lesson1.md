# Lesson 1

In this lesson, we create a simple Javascript game, where we can move a Tank with WASD keys.
We also publish it to github.io. At this point, our code will not be structured very well; we should come back to that later.

The game should look somewhat like on the image below.

![game screenshot](img/game_screenshot1.png)

Most of this lesson will be about setting up the development and deployment environment. Basic knowledge of git is welcome.

We will be using git for version control and deployment, and Visual Studio Code (VSCode) for development.

## Setting up development environment

Whichever operating system you are using, you should install Visual Studio Code. Once it is installed, you should use the following plugin: [Live server plugin](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). You should also have Chrome as your main browser (this plugin worked well with Chromium for me, while it had problems with Mozilla Firefox). This plugin will let you open your index.html file in the browser, where it will autoupdate if you save one of your files (at least this is the functionality we use).

If you have the plugin installed, then you should see a Go Live button at the bottom right corner of your VSCode window.

## Creating project
Create a folder in an arbitrary place on your computer. Open the folder with VSCode: File -> Open Folder. Once you have it open, create a new file called index.html. Insert the following text inside it:

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Tank game</title>
    <link rel="stylesheet" href="index.css">
</head>

<body>
    <canvas id="c"></canvas>
</body>

</html>
```

Then also create an index.css file with the following content:

```
html,
body {
    height: 100%;
    margin: 0;
}

#c {
    width: 100%;
    height: 100%;
    display: block;
    background: #665500;
}
```

Now push the Go Live button on the right bottom corner of your VSCode window. The index.html file should open in a browser tab and you should see a blank page with brownish color.

What we did:
- We created a html page with a canvas: `<canvas id="c"> </canvas>`.
- We linked a stylesheet: index.css.
- In the stylesheet, we made the canvas span the whole page, and set its background to our brownish color.

Next, we are going to draw on it.

## Draw on canvas
There are multiple drawing functions available for an HTML5 Canvas. You can draw rectangles, circles and pictures. In this project, we will primarily be drawing pictures. However, let's first look at a simple Rectangle drawing example!

### Draw rectangles
In order to draw on the canvas, we will use Javascript code. Let's create a `js` directory, where we will be putting any JS files we later create. For now, let's create `index.js` in the `js/` directory. To run the contents of `index.js` for the `index.html` page, change the `index.html` content like this:

```
<body>
    <canvas id="c"></canvas>
    <script src="js/index.js"></script> // PUT ME HERE!
</body>
```

Now we can edit `index.js`! Let's insert the following code!

```
const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = 'blue'
ctx.strokeRect(50, 50, 60, 80);

ctx.fillStyle = 'red'
ctx.fillRect(80, 100, 20, 20);

ctx.clearRect(90, 110, 10, 10);
```

After you inserted the code openned the new `index.html`, you should see something like the picture below.

![game screenshot](img/game_screenshot2.png)

Let us explain what is happening, line by line:
- `const canvas = document.getElementById("c");` This line uses the `document` element, which represents your web page (this element is available for you in your browser Javascript code). The `canvas` is an element in your web page, and you can access it by id, hence `getElementById`. The query returns the canvas object, which we store in the `canvas` constant.
- `const ctx = canvas.getContext("2d");` The canvas object has a context, which will be using for drawing. We query the 2 dimensional context, and store it in a constant.
- Drawing on the context can happen by "stroking", "filling" or "clearing". Stroking creates the perimeter of the drawn object (rectangle), filling fills the shape, while clearing sets the shape to the default color. We can set the color of the drawing, then draw. When drawing a rectangle, we supply the rectangle's top left coordinates (x, y) and its size (width, height).

### Draw a picture

## Publish the project
Finally, let's make this project available on Github!

You are probably already be able to create a Github repository and push an existing project to it. If not, refer to [external sources](https://www.datacamp.com/tutorial/git-push-pull).

First, create **public** a Github repository, and push everything in the project directory to it!
When you are done, your directory structure should look somewhat like this:

```
|
|-img
  |-tank.png
|-js
  |-index.js
|-index.css
|-index.html
```

To make this game playable anyone on the web, we will use [Github Pages](https://docs.github.com/en/pages/quickstart). Github Pages are public webpages shared through Github repositories. Its primary use is for documentation. However, since the hosted pages are HTML5 pages, they have everything we need to make our canvas game available.

**Note:** Publishing a game like this is not the road to commercial success. We publish it here, because it's free and easy to do so, the game would be widely available, and you can play your game from any computer with internet connection. Simply put, it's easy and fun, and you will see early results.

To publish your repository, click Settings > Pages. You need to set a branch to be tracked by Github Pages (*master* branch is probably the best choice) and a directory. For the directory, choose *root*. Save your settings.

After a few seconds, Github Pages should be built. You can access your game on https://username.github.io/RepoName which will direct you to the index.html file you published in the root of the repo.