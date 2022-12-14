class Tank {
    constructor(x, y, w, h, rotation, speed, rotationSpeed, spriteName) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.rotation = rotation * Math.PI / 180;
        this.speed = speed;
        this.rotationSpeed = rotationSpeed * Math.PI / 180;
        this.spriteName = spriteName;
    }

    move(direction) {
        const dir = direction <= 0 ? -1 : 1;
        this.x += Math.sin(this.rotation) * this.speed * dir;
        this.y -= Math.cos(this.rotation) * this.speed * dir;
    }

    rotate(direction) {
        this.rotation += direction >= 0 ? this.rotationSpeed : -this.rotationSpeed;
        if (this.rotation >= Math.PI * 2) {
            this.rotation -= Math.PI * 2;
        }
        else if (this.rotation < 0) {
            this.rotation += Math.PI * 2;
        }
    }
}