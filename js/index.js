const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

const tankSprite = new Image();
tankSprite.src = "img/tank.png"

tankSprite.addEventListener("load", function () {
    ctx.drawImage(
        tankSprite,
        100,
        100,
        15,
        15
    );
});

