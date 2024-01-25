class UFO extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.level = 1;

        // gonna leech off spaceship speed for ufo speed
        this.maxSpeed = game.settings.spaceshipSpeed + 1;
        this.minSpeed = game.settings.spaceshipSpeed;
        this.maxDistance = game.settings.width * 0.4;
        this.minDistance = game.settings.width * 0.2;
        this.distance = 0 // game.settings.width * 0.25;
        this.moving = false;
        this.speed = -1 * Math.random() * (this.maxSpeed - this.minSpeed) + this.minSpeed;

        //actual left/right might be wrong in this variable uhhh
        this.goingRight = false;
        
    }

    update() {
        // ufo moving left
        this.move();


        // bounce on left wall
        if(this.x <= 0 + this.width) {
            //this.x = game.config.width - this.width;
            this.speed = Math.abs(this.speed);
            this.goingRight = true;
            console.log("speed" + this.speed);
            //this.distance = game.config.width / 2;
        }
        // bounce on right wall
        if(this.x >= game.config.width - this.width) {
            this.goingRight = false;
            //this.x = 0 + this.width;
            this.speed = -Math.abs(this.speed);
            //this.distance = game.config.width / 2;
        }
    }

    move() {

        this.x += this.speed;
        this.distance -= Math.abs(this.speed);
        //console.log("distance remaining: " + this.distance);
        if (this.distance <= 0) {
            console.log("changing direction");
            this.distance = Math.random() * (this.maxDistance - this.minDistance) + this.minDistance;
            this.speed = Math.random() * (this.maxSpeed - this.minSpeed) + this.minSpeed;

            this.goingRight = !this.goingRight;            
            if (!this.goingRight) {
                this.speed = -1 * this.speed;
            }
            console.log("speed: " + this.speed);
        }
    }

    // reset position
    reset() {
        this.x = game.config.width;
        //level += 1;
        //console.log("leveled up ship!");
    }
    
    levelUp() {
        this.level += 1;
        console.log("level up");
        this.moveSpeed += this.level / 4;
        this.pointValue += Math.floor(7 * 0.5 * this.level);
    }
}