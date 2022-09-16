class Scene {

    constructor() { }

    handleInputCtx() { console.log("Warning: defaulting scene function..."); }
    update() { console.log("Warning: defaulting scene function..."); }
    render() { console.log("Warning: defaulting scene function..."); }
    shouldQuit() { console.log("Warning: defaulting scene function..."); }
}

class ScenePlay extends Scene {

    constructor(canvas, ctx, sprites) {
        super();
        this.canvas = canvas;
        this.ctx = ctx;
        this.sprites = sprites;

        // Lots of magic numbers here! Need for a configuration file!
        this.player = new Tank(10, 10, 15, 15, 0, 1, 3, "tank");
    }

    handleInputCtx(inputCtx) {
        if (inputCtx.KeyW) {
            this.player.move(1);
        } else if (inputCtx.KeyS) {
            this.player.move(-1);
        }
        if (inputCtx.KeyA) {
            this.player.rotate(-1);
        } else if (inputCtx.KeyD) {
            this.player.rotate(1);
        }
    }

    update() { }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const tankCenter = {
            x: this.player.x + this.player.w / 2,
            y: this.player.y + this.player.h / 2
        }
        this.ctx.save();
        this.ctx.translate(tankCenter.x, tankCenter.y);
        this.ctx.rotate(this.player.rotation);
        this.ctx.translate(-tankCenter.x, -tankCenter.y);
        this.ctx.drawImage(
            this.sprites[this.player.spriteName],
            this.player.x,
            this.player.y,
            this.player.w,
            this.player.h
        );
        this.ctx.restore();
    }

    shouldQuit() { return false; }
}