Plastic = function (game) {

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

// Plastic.prototype = Object.create(Phaser.Image.prototype);
// Plastic.prototype.constructor = Plastic;

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

    },
    create: function() {
        // this.background = this.game.add.sprite(0, 0, 'background');

        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.stage.backgroundColor = '#000';

        const GRAVITY = 30;
        this.game.physics.arcade.gravity.y = GRAVITY;

        var x;
        var y;
        var Plastic = {
            tag: "plastic",
            source: [
                'plastic1',
                'plastic2',
                'plastic3',
                'plastic4',
                'plastic5',
                'plastic6',
                'plastic7'
            ]
        };

        var plastic_num = Plastic.source.length;
        var plastic_item;


        for(var i =0; i < plastic_num; i++) {
            console.log("rendering");
            x = game.rnd.between(50, game.width-100);
            y = game.rnd.between(50, game.height-100);

            plastic_item = game.add.sprite(x, -100, Plastic.source[i]);
            game.physics.enable(plastic_item, Phaser.Physics.ARCADE);

            plastic_num = game.rnd.between(3, Plastic.source.length)
        }

        // group = game.add.group();
        // var rand_num = game.rnd.between(0, 5);
        //
        // for (var i = 0; i < rand_num; i++) {
        //     group.add(new Plastic(game));
        // }


        cursors = game.input.keyboard.createCursorKeys();


    },
    update: function() {

    }
};

game.state.add('GameState', GameState);
game.state.start('GameState');

