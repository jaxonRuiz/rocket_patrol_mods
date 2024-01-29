/* Head comment:
* Author: Jaxon Ruiz
* Mod Name: "Better than League of Legends"
* approximately 7 hours, but im heavily guess-imating
* Mod List:
(3 points) Dynamic difficulty in enemy ships, where every hit increases the ship’s speed and points
(for balancing, the player rocket’s horizontal move speed was increased to 3.5, while keeping the shot speed at 2
(1 point) Allow the player to control the Rocket after it's fired 
However while firing, the rocket can only move at 1/8 of its normal speed
(3 points) display remaining timer on scene
(5 points) Implement a new timing/scoring mechanism that adds time to the clock for successful hits and subtracts time for misses
(5 points) Special ship type: UFO. slides back and forth, is smaller than other spaceships, moves with a variable speed (faster on average), and is worth 50 points on default
(3 points) parallax scrolling with streaks and planet objects.
*/


let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}
let game = new Phaser.Game(config);
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let keyFIRE, keyRESET, keyLEFT, keyRIGHT;
