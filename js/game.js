class Game {

    constructor() {
        const canvas = document.getElementById("c");
        const ctx = canvas.getContext("2d");

        const sprites = {
            "tank": new Image()
        }
        sprites["tank"].src = "img/tank.png";

        this.scene = new ScenePlay(canvas, ctx, sprites);
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
        requestAnimationFrame(() => this.gameLoop());
    }

    keyDownHandler(e) {
        this.inputCtx[e.code] = true;
    }

    keyUpHandler(e) {
        this.inputCtx[e.code] = false;
    }
}