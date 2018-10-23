Wastes = function (game) {

    var x = game.rnd.between(50, game.width-100);
    var y = game.rnd.between(50, game.height-200);

    var plastic_images = [
        'plastic1',
        'plastic2',
        'plastic3',
        'plastic4',
        'plastic5',
        'plastic6',
        'plastic7'
    ];

    var plastic_num = plastic_images.length;
    var plastic_item;
    var rand_pos = game.rnd.between(0, plastic_num);

    for (var i = 0; i < rand_pos; i++) {
        plastic_item = game.add.sprite(x, -100, plastic_images[rand_pos]);
        game.physics.enable( plastic_item, Phaser.Physics.ARCADE);
    }

    // Phaser.Image.call(this, game, x, -100, plastic_images[rand_pos]);
};

// Wastes.prototype = Object.create(Phaser.Image.prototype);
// Wastes.prototype.constructor = Wastes;

var group;
var cursors;

var container = document.documentElement;
var game = new Phaser.Game(container.clientWidth,container.clientHeight,Phaser.AUTO);

var GameState = {
    preload: function(){
        this.load.image('background', '../assets/Background.png');

        // Plastic waste
        this.load.image('plastic1', '../assets/garbage_items/plastic/plastic1.png');
        this.load.image('plastic2', '../assets/garbage_items/plastic/plastic2.png');
        this.load.image('plastic3', '../assets/garbage_items/plastic/plastic3.png');
        this.load.image('plastic4', '../assets/garbage_items/plastic/plastic4.png');
        this.load.image('plastic5', '../assets/garbage_items/plastic/plastic5.png');
        this.load.image('plastic6', '../assets/garbage_items/plastic/plastic6.png');
        this.load.image('plastic7', '../assets/garbage_items/plastic/plastic7.png');

        // Organic waste
        this.load.image('organic1', '../assets/garbage_items/organic/organic1.png');
        this.load.image('organic2', '../assets/garbage_items/organic/organic2.png');
        this.load.image('organic3', '../assets/garbage_items/organic/organic3.png');
        this.load.image('organic4', '../assets/garbage_items/organic/organic4.png');
        this.load.image('organic5', '../assets/garbage_items/organic/organic5.png');
        this.load.image('organic6', '../assets/garbage_items/organic/organic6.png');
        this.load.image('organic7', '../assets/garbage_items/organic/organic7.png');
        this.load.image('organic8', '../assets/garbage_items/organic/organic8.png');
        this.load.image('organic9', '../assets/garbage_items/organic/organic9.png');

    },
    create: function() {
        // this.background = this.game.add.sprite(0, 0, 'background');
        // this.background.width = game.width;
        // this.background.height = game.height;


        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.stage.backgroundColor = '#000';

        const GRAVITY = 30;
        this.game.physics.arcade.gravity.y = GRAVITY;


        game.time.events.loop(Phaser.Timer.SECOND * 2, spawnWastes, this);


        cursors = game.input.keyboard.createCursorKeys();

    },
    update: function() {
        game.debug.text("Time until event: " + game.time.events.duration.toFixed(0), 32, 32);
    }
};

var x;
var y;


var Wastes = {
    plastic: [
        'plastic1',
        'plastic2',
        'plastic3',
        'plastic4',
        'plastic5',
        'plastic6',
        'plastic7'
    ],
    organic: [
        'organic1',
        'organic2',
        'organic3',
        'organic4',
        'organic6',
        'organic7',
        'organic8',
        'organic9'
    ]
};


function spawnWastes() {
    var plastic_num = Wastes.plastic.length;
    var organic_num = Wastes.organic.length;

    var plastic_item, organic_item;

    x = game.rnd.between(50, game.width-100);
    y = game.rnd.between(50, game.height-100);

    var plastic_rand_num = game.rnd.between(0, plastic_num);
    var organic_rand_num = game.rnd.between(0, organic_num);

    plastic_item = game.add.sprite(x, -200, Wastes.plastic[plastic_rand_num]);
    organic_item = game.add.sprite(y, -200, Wastes.organic[organic_rand_num]);

    organic_item.scale.setTo(0.4, 0.4);


    game.physics.enable([plastic_item, organic_item], Phaser.Physics.ARCADE);

}

game.state.add('GameState', GameState);
game.state.start('GameState');

