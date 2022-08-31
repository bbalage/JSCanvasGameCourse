const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

const tankSprite = new Image();
tankSprite.src = "img/tank.png";

class Tank {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.speed = 2;
    }
}

const tank = new Tank();

function keydownHandler(e) {
    switch (e.code) {
        case "KeyW":
            tank.y -= tank.speed;
            break;
        case "KeyA":
            tank.x -= tank.speed;
            break;
        case "KeyS":
            tank.y += tank.speed;
            break;
        case "KeyD":
            tank.x += tank.speed;
            break;
    }
}

document.addEventListener("keydown", keydownHandler, false);

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        tankSprite,
        tank.x,
        tank.y,
        15,
        15
    );
    requestAnimationFrame(() => gameLoop());
}

gameLoop();