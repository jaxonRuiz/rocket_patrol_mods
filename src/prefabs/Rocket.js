// rocket prefab
// remember prefabs are kinda like classes where they define object behavior and stuffs

class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add object to existing scene when constructor called
        scene.add.existing(this);
        // rocket object not added to scene by default. have to manually do so with 'this'
        this.isFiring = false; // tracks rocket firing status
        this.moveSpeed = 3.5;
        this.shotSpeed = 2;
        // quick curiosity, when to use this.var = value instead of let variable = value ?
        // answer (i think) this.var set it for the global scene
        // using var creates it only for the current function
        // using let or const are for block-scoped variables
        
        // adding sfx
        // will make sfxShot available to the Rocket.js object prefab
        this.sfxShot = scene.sound.add('sfx-shot');
    }
    update() {
        // adding movement and stuff to rocket object
        // this update is connected to the core update loop running at any given moment
        // so its good to add movement here

        // if not moving can move
        if(!this.isFiring) {
            // if not at respective borders, move left or right depending on key pressed
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            }            
        }
        if(this.isFiring) {
            // if not at respective borders, move left or right depending on key pressed
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed / 8
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed / 8;
            }            
        }

        // fire button
        if (Phaser.Input.Keyboard.JustDown(keyFIRE) && !this.isFiring) {
            this.isFiring = true;
            this.sfxShot.play();
        }

        


        // rocket is fired
        if (this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.shotSpeed;
        }

        // reset on miss
        // plan on moving miss functionality to play.js. im wondering if
        // theres a way for a prefab to give signal to scene 
        
    }

    // will reset rocket to ground
    reset() {
        this.isFiring = false;
        this.shotSpeed = 2;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}