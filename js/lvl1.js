
var group;
var cursors;
var container = document.documentElement;
var currIndicator;
var game = new Phaser.Game(container.clientWidth,container.clientHeight,Phaser.AUTO);
var correct_fx, wrong_fx;

var countdown = 3;
var countdown_text;

var change_countdown = 4;

var gameover_text;

var repeat_timer;

var style;
var game_start_flag = false;

var restart_btn = document.querySelector('.replay_btn');


var GameState = {
    preload: function(){
        this.load.image('background', '../assets/background/barn.png');

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

        this.load.image('wrong','../assets/wrong.png');
        this.load.image('correct','../assets/correct.png');

        this.load.audio('correct_sfx', '../audio/correct.mp3');
        this.load.audio('wrong_sfx', '../audio/wrong.wav');



    },
    create: function() {
        this.background = this.game.add.sprite(0, 0, 'background');
        this.background.width = game.width;
        this.background.height = game.height;

        correct_fx = game.add.audio('correct_sfx');
        correct_fx.allowMultiple = true;

        wrong_fx = game.add.audio('wrong_sfx');
        wrong_fx.allowMultiple = true;


        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.stage.backgroundColor = '#000';

        style = { font: "65px Chewy", fill: "#3a3a3a", align: "center" };


        currIndicator = game.add.text(game.world.centerX, 50, '', { font: "65px Chewy", fill: '#fff', fontSize: 50});
        currIndicator.anchor.setTo(0.5);


        var GRAVITY = 25;
        this.game.physics.arcade.gravity.y = GRAVITY;

        cursors = game.input.keyboard.createCursorKeys();

        //  Create our Timer
        var timer = game.time.create();

        //  Set a TimerEvent to occur after 2 seconds
        timer.repeat(Phaser.Timer.SECOND, 5, updateCounter, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        timer.start();
        repeat_timer = game.time.create();
        repeat_timer.repeat(Phaser.Timer.SECOND * 2, 15, spawnWastes, this);
        repeat_timer.start();

        countdown_text = game.add.text(game.world.centerX, game.world.centerY, '', style);
        countdown_text.anchor.setTo(0.5);


    },
    update: function() {
        var result_board = document.getElementsByClassName('end_menu')[0];

        var caption = document.querySelector('.caption');
        var stars = document.querySelector('.stars');

        if(freqcount === 15 && game_start_flag === true) {
            setTimeout(function() {
                game.debug.text("Done", 32, 132);
                currIndicator.destroy();
                game.paused = true;


                if(count_correct > 7 && count_correct < 11) {
                    stars.style.background = "url(\"../assets/menu_items/star_2.png\")";
                    stars.style.backgroundSize = "cover";
                    caption.innerHTML = 'Great Job!'

                } else if(count_correct >= 3 && count_correct <= 6) {
                    stars.style.background = "url(\"../assets/menu_items/star_3.png\")";
                    stars.style.backgroundSize = "cover";
                    caption.innerHTML = 'Good effort!'

                } else if(count_correct < 3) {
                    stars.style.background = "url(\"../assets/menu_items/star_4.png\")";
                    stars.style.backgroundSize = "cover";
                    caption.innerHTML = 'Try again!'

                } else {
                    stars.style.background = "url(\"../assets/menu_items/star_1.png\")";
                    stars.style.backgroundSize = "cover";
                    caption.innerHTML = "You're a star!";

                }

                result_board.style.display = 'block';
            }, 6000);

        }

        game.debug.text("Wrong: " + count_wrong, 32, 32);



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

var plastic_clicked = 0;
var organic_clicked = 0;


var current = 'plastic';
var freqcount = 0;
var change_indicator;


var plastic_item, organic_item;

// function restart() {
//     freqcount = 0;
//     countdown = 3;
//     change_countdown= 3;
//     count_correct = 0;
//     count_wrong = 0;
//     game.state.start(game.state.current);
//
// }


function updateCounter() {
    countdown_text.text = countdown;

    if(countdown === 0) {
        countdown_text.text = 'Start!';
    } else if (countdown === -1) {
        countdown_text.destroy();
        currIndicator.text='Plastic';

    }
    countdown--;

}

function spawnWastes() {

    game_start_flag = true;

    var plastic_num = Wastes.plastic.length;
    var organic_num = Wastes.organic.length;

    x = game.rnd.between(50, game.width-100);
    y = game.rnd.between(50, game.height-100);

    var plastic_rand_num = game.rnd.between(0, plastic_num);
    var organic_rand_num = game.rnd.between(0, organic_num);

    plastic_item = game.add.sprite(x, -180, Wastes.plastic[plastic_rand_num]);
    organic_item = game.add.sprite(y, -200, Wastes.organic[organic_rand_num]);

    organic_item.scale.setTo(0.4, 0.4);

    plastic_item.inputEnabled = true;
    organic_item.inputEnabled = true;

    plastic_item.input.useHandCursor = true;

    if(freqcount === 6 ) {
        var change_style = { font: "65px Baloo", fill: "#3a3a3a", align: "center" };

        change_indicator = game.add.text(game.world.centerX, game.world.centerY, 'Changing in..', change_style);
        change_indicator.anchor.setTo(0.5);
        //  Create our Timer
        var timer = game.time.create();

        //  Set a TimerEvent to occur after 2 seconds
        timer.repeat(Phaser.Timer.SECOND, 5, updateChangeCounter, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        timer.start();

    }

    if(freqcount > 7) {
        current = 'organic';
    }

    if(freqcount === 9) {
        currIndicator.text='Organic';
    }

    if(current === 'plastic') {
        plastic_item.events.onInputDown.add(plasticListener, this);

    } else {
        plastic_item.events.onInputDown.add(wrong, this);

    }

    if(current === 'organic') {
        organic_item.events.onInputDown.add(organicListener, this);

    } else {
        organic_item.events.onInputDown.add(wrong, this);
    }

    game.physics.enable([plastic_item, organic_item], Phaser.Physics.ARCADE);
    freqcount++;


}

function updateChangeCounter() {

    if(change_countdown <= 3) {
        change_indicator.text = change_countdown;
    }


    if (change_countdown === 0) {
        change_indicator.destroy();
    }

    change_countdown--;

}

var count_wrong = 0;
var count_correct = 0;

function wrong(obj) {
    obj.loadTexture('wrong');
    obj.scale.setTo(1, 1);
    wrong_fx.play();

    setTimeout(function() {
        obj.destroy();
    }, 330);
    count_wrong++;

}

function plasticListener(plastic_item)
{
    plastic_clicked++;
    correct_fx.play();

    plastic_item.loadTexture('correct');

    setTimeout(function() {
        plastic_item.destroy();
    }, 330);
    count_correct++;
}

function organicListener(organic_item)
{
    organic_clicked++;
    correct_fx.play();


    organic_item.loadTexture('correct');
    organic_item.scale.setTo(1, 1);

    setTimeout(function() {
        organic_item.destroy();
    }, 330);

    count_correct++;
}

game.state.add('GameState', GameState);
game.state.start('GameState');

