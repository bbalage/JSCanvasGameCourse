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