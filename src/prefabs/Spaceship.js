class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.level = 1;
        this.moveSpeed = game.settings.spaceshipSpeed;
        
    }

    update() {
        // spaceship moving left
        this.x -= this.moveSpeed;

        // wrap from left to right edge
        if(this.x <= 0 - this.width) {
            this.x = game.config.width;
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

        // capping ship levels at 5
        if (this.level < 5) {
            this.moveSpeed += this.level / 4;
            this.pointValue += Math.floor(7 * 0.5 * this.level);
        }
    }
}