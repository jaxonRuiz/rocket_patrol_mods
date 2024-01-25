class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    
    preload() {
        //loading all images/sprites before running...
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
        this.load.image('ufo', './assets/ufo.png');
        this.load.spritesheet('explosion', './assets/explosion.png', {
            frameWidth: 64,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 9
        });
        this.load.audio('sfx-select', './assets/sfx-select.wav');
        this.load.audio("sfx-explosion", "./assets/sfx-explosion.wav");
        // small stupid thing i noticed, i kind of naturally alternate between  
        // using single and double quotes when im typing. I like trying to get better at
        // typing so i've been hand typing everything. however sometimes I notice theres inconsistency
        // between when i use single and double quotes, and i just wanted to note it was
        // entirely because of my own inconsistency, rather than occasionally copying parts of code
        this.load.audio("sfx-shot", "./assets/sfx-shot.wav");
        // after loading images, available in *all* subsiquent scenes
        // (to my understanding anyways)
        //remember that this. keyword refers to the whole game object
        // '.this' allows the image to be referenced in other scenes
    }

    create() {
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', {start: 0, end: 9, first: 0}),
            frameRate: 30
        });
        
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
          }

        // display menu text: 
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, "ROCKET PATROL", menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, "Use ←→ arrows to move and (F) to fire", menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = "#00FF00";
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, "Press ← for Novice or → for Expert", menuConfig).setOrigin(0.5);
        
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        
        // editing menu for now
        
        //this.add.text(20, 20, "Rocket Patrol Menu");
        //this.scene.start("playScene");
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx-select')
          this.scene.start('playScene')    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx-select')
          this.scene.start('playScene')    
        }
      }
}