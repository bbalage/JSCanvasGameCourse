class Game {

    constructor() {
        this.canvas = document.getElementById("c");
        this.canvas.width = 300;
        this.canvas.height = 150;
        const preferredWidth = 800;
        const preferredHeight = 600;
        this.setApproximateCanvasSize(preferredWidth, preferredHeight);

        // this.canvas.style.width = window.innerWidth + "px";
        // this.canvas.style.height = window.innerHeight + "px";
        // this.canvas.style.width = 2500 + "px";
        // this.canvas.style.height = 1500 + "px";
        this.ctx = this.canvas.getContext("2d");
        this.ctx.font = "10px Arial";
        this.lastTime = performance.now();

        const sprites = {
            "tank": new Image()
        }
        sprites["tank"].src = "img/tank.png";

        this.scene = new ScenePlay(this.canvas, this.ctx, sprites);
        this.inputCtx = {
            KeyW: false,
            KeyS: false,
            KeyA: false,
            KeyD: false,
        };
        document.addEventListener("keydown", (e) => this.keyDownHandler(e), false);
        document.addEventListener("keyup", (e) => this.keyUpHandler(e), false);
    }

    gameLoop() {
        this.scene.handleInputCtx(this.inputCtx);
        this.scene.update();
        this.scene.render();
        if (this.scene.shouldQuit()) {
            console.log("Here we should handle switching scenes.");
        }
        this.printFPS();
        requestAnimationFrame(() => this.gameLoop());
    }

    keyDownHandler(e) {
        this.inputCtx[e.code] = true;
    }

    keyUpHandler(e) {
        this.inputCtx[e.code] = false;
    }

    setApproximateCanvasSize(preferredWidth, preferredHeight) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        if (width >= height) {
            const scaler = preferredWidth / width;
            this.canvas.width = preferredWidth;
            this.canvas.height = height * scaler;
        } else {
            const scaler = preferredHeight / height;
            this.canvas.height = preferredHeight;
            this.canvas.width = width * scaler;
        }
    }

    printFPS() {
        const now = performance.now();
        const fps = 1000 / (now - this.lastTime);
        this.ctx.fillText("FPS: " + fps, 15, 15)
        this.lastTime = now;
    }
}