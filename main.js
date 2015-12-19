var game = new Phaser.Game(600, 400, Phaser.CANVAS, 'exemplo', { preload: preload, create: create});

function preload() {
	game.load.spritesheet('logofrontinrio', 'img.png', 140, 179);
}

function create() {
	sprite = game.add.sprite(300, 0, 'logofrontinrio');
    game.physics.startSystem(Phaser.Physics.ARCADE);

	game.stage.backgroundColor = '#124184';
	game.physics.arcade.enable(sprite);

	game.physics.arcade.gravity.y = 200;
	sprite.body.bounce.y = 0.95;
	sprite.body.collideWorldBounds = true;
}




