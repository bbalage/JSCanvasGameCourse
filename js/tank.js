class Tank {
    constructor(x, y, w, h, rotation, speed, rotationSpeed, spriteName) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.rotation = rotation;
        this.speed = speed;
        this.rotationSpeed = rotationSpeed;
        this.spriteName = spriteName;
    }

    move(direction) {
        const dir = direction <= 0 ? -1 : 1;
        this.x += Math.sin(this.rotation * Math.PI / 180) * this.speed * dir;
        this.y -= Math.cos(this.rotation * Math.PI / 180) * this.speed * dir;
    }

    rotate(direction) {
        this.rotation += direction >= 0 ? this.rotationSpeed : -this.rotationSpeed;
        if (this.rotation >= 360) {
            this.rotation -= 360;
        }
        else if (this.rotation < 0) {
            this.rotation += 360;
        }
    }
}