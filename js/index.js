const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = 'blue'
ctx.strokeRect(50, 50, 60, 80);

ctx.fillStyle = 'red'
ctx.fillRect(80, 100, 20, 20);

ctx.clearRect(90, 110, 10, 10);
// const tankSprite = new Image();
// tankSprite.src = "img/tank.png"

// tankSprite.addEventListener("load", function () {
//     ctx.drawImage(
//         tankSprite,
//         100,
//         100,
//         15,
//         15
//     );
// });

