$('#next-button').prop('disabled', true);

$('document').ready(function(){
    var typed = new Typed('#typed',{
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        onComplete: function(){
            $('#next-button').prop('disabled', false);
        }
    });
    $(".typed-cursor").hide();

});



var dialog_counter = 0;

function updateCounter() {
    dialog_counter++;

    $('#next-button').prop('disabled', true);

    $("#typed").text("");
    $("#typed").removeData('typed');

    if(dialog_counter === 1) {
        var typed = new Typed('#typed',{
            strings: ["Now, let’s start with the basics."],
            typeSpeed: 50,
            onComplete: function(){
                $('#next-button').prop('disabled', false);
            }
        });
    }

    if(dialog_counter === 2) {
        var typed = new Typed('#typed',{
            strings: ["What is Recycling?"],
            typeSpeed: 50,
            onComplete: function(){
                $('#next-button').prop('disabled', false);
            }
        });
        $('#typed').css({'width' : '200px'});

        $('.title').show();

    }

    if(dialog_counter === 3) {
        var typed = new Typed('#typed',{
            strings: [" Recycling is the process of taking trash and transforming it into new products."],
            typeSpeed: 50,
            onComplete: function(){
                $('#next-button').prop('disabled', false);
            }
        });

        $('#typed').css({'margin-top':'3%', 'width' : '400px'});

        setTimeout(function() {
            $('.recycle_illustration > .plastic').show();
        }, 2000);

        setTimeout(function() {
            $('.recycle_illustration > .recycle_symbol').show();
        }, 3200);
        setTimeout(function() {
            $('.recycle_illustration > .bottle').show();
        }, 4500);


    }

    if(dialog_counter === 4) {
        var typed = new Typed('#typed',{
            strings: ["But why do we need to recycle?"],
            typeSpeed: 50,
            onComplete: function(){
                $('#next-button').prop('disabled', false);
            }
        });

        $('#typed').css({'margin-top':'8%', 'width' : '300px'});


        $('.title').text("Why do we Recycle?");
        $('.recycle_illustration').hide();

    }

    if(dialog_counter === 5) {
        var typed = new Typed('#typed',{
            strings: ["Recycling is good for us and the environment because it reduces the use of new raw materials."],
            typeSpeed: 50,
            onComplete: function(){
                $('#next-button').prop('disabled', false);
            }
        });

        $('#typed').css({'margin-top':'3%', 'width' : '400px'});

        $('.lesson > .lesson-content > img.planet-img').show();

    }

    if(dialog_counter === 6) {
        var typed = new Typed('#typed',{
            strings: ["It also reduces the energy we use, improves the quality of air and water, " +
            "and fights climate change!"],
            typeSpeed: 50,
            onComplete: function(){
                $('#next-button').prop('disabled', false);
            }
        });


    }

    if(dialog_counter === 7) {
        var typed = new Typed('#typed',{
            strings: ["Before the recycling process is done,"],
            typeSpeed: 50
        });

        setTimeout(function() {
            $("#typed").text("");
            $("#typed").removeData('typed');
            var typed2 = new Typed('#typed',{
                strings: ["the rubbish are usually separated into different categories, " +
                "in order for the process to run smoothly."],
                typeSpeed: 50,
                onComplete: function(){
                    $('#next-button').prop('disabled', false);
                }

            });
        }, 4000)

        $('.title').slideUp(1000);
        $('.lesson > .lesson-content > img.planet-img').hide();

    }

    if(dialog_counter === 8) {
        var typed = new Typed('#typed',{
            strings: ["You might see these colourful garbage bins in your area before."],
            typeSpeed: 50,
            onComplete: function(){
                $('#next-button').prop('disabled', false);
            }
        });

        $('.lesson > .lesson-content').css({"margin-top": '0'});

        $('.lesson > .lesson-content > img.bin-img').show();


    }

    if(dialog_counter === 9) {
        $('#typed').css({'margin-top':'8%', 'width' : '300px'});

        var typed = new Typed('#typed',{
            strings: ["Do you know what each of the bins are for?"],
            typeSpeed: 50

        });

        setTimeout(function() {
            $("#typed").text("");
            $("#typed").removeData('typed');
            var typed2 = new Typed('#typed',{
                strings: ["Well, they are usually grouped by the material of the rubbish."],
                typeSpeed: 50,
                onComplete: function(){
                    $('#next-button').prop('disabled', false);
                }


            });
        }, 5000)


    }

    if(dialog_counter === 10) {
        var typed = new Typed('#typed',{
            strings: ["Examples of the groupings are:"],
            typeSpeed: 50,
            backSpeed: 0,
            onComplete: function(){
                $('#next-button').prop('disabled', false);
            }

        });

        $('.lesson > .lesson-content > img.bin-img').hide();


        setTimeout(function(){
            $('.category > .plastic-text').show();
        }, 3000);
        setTimeout(function(){
            $('.category > .organic-text').show();
        }, 4000);

        setTimeout(function(){
            $('.metal-text').show();
        }, 5000);

        setTimeout(function(){
            $('.paper-text').show();
        }, 6000);

        setTimeout(function(){
            $('.ewaste-text').show();
        }, 7000);

        setTimeout(function(){
            $('.glass-text').show();
        }, 8000);
    }

    if(dialog_counter === 11) {
        $('#typed').css({'margin-top':'8%', 'width' : '300px'});

        var typed = new Typed('#typed',{
            strings: ["In this lesson, we’ll focus on classifying plastic and organic wastes!"],
            typeSpeed: 50,
            onComplete: function(){
                $('#next-button').prop('disabled', false);
            }
        });

        setTimeout(function() {
            $('.category .plastic-text').css({'border': '3px #f2d815 solid'})
        }, 2500);

        setTimeout(function() {
            $('.category .organic-text').css({'border': '3px #f2d815 solid'})
        }, 3500);

    }

    if(dialog_counter === 12) {
        $('#typed').css({'margin-top':'2%', 'width' : '400px'});

        var typed = new Typed('#typed',{
            strings: ["Plastic, includes materials that are made with plastic! "],
            typeSpeed: 50

        });

        setTimeout(function() {
            $("#typed").text("");
            $("#typed").removeData('typed');
            var typed2 = new Typed('#typed',{
                strings: ["Examples are water bottles, plastic bag, and plastic container"],
                typeSpeed: 50,
                onComplete: function(){
                    $('#next-button').prop('disabled', false);
                }


            });
        }, 5000);

        $('.category').hide();

        $('.specific-category > .plastic-text').css({'transform': 'scale(1.3)'})
        $('.specific-category > .plastic-text').show();

        $('.specific-category > .organic-text').show();

    }

    if(dialog_counter === 13) {

        var typed = new Typed('#typed',{
            strings: ["Organic wastes are wastes that consist of animal and plant based material."],
            typeSpeed: 50

        });

        setTimeout(function() {
            $("#typed").text("");
            $("#typed").removeData('typed');
            var typed2 = new Typed('#typed',{
                strings: ["Examples of this is food, garden waste, and lawn clippings."],
                typeSpeed: 50,
                onComplete: function(){
                    $('#next-button').prop('disabled', false);
                }


            });
        }, 6000);

        $('.specific-category > .plastic-text').css({'transform': 'scale(1)'})
        $('.specific-category > .plastic-text').show();


        $('.specific-category > .organic-text').css({'transform': 'scale(1.3)'})
        $('.specific-category > .organic-text').show();

    }

    if(dialog_counter === 14) {
        $('#typed').css({'margin-top':'8%', 'width' : '200px'});

        var typed = new Typed('#typed',{
            strings: ["Now let’s play a game!"],
            typeSpeed: 50,
            onComplete: function(){
                $('#next-button').prop('disabled', false);
                $('#next-button').text("Play");
                $('#next-button').css({'background' : '#d6285c'});
                $("#next-button")
                    .mouseover(function() {
                    $(this).css("background-color","#b2204b")
                })
                    .mouseout(function() {
                        $(this).css("background-color","#d6285c")
                    });


            }
        });

        $('.specific-category').hide();
    }

    if(dialog_counter === 15) {
        window.location.href = "../levels/lvl1.html";
    }


    $(".typed-cursor").hide();

}

//transparent background is set to true
var game = new Phaser.Game(400, 500, Phaser.AUTO, 'penguin', null, true, true, null);
var penguin_talk;
var talking_penguin = {
    preload: function(){
        game.load.spritesheet('penguin_talk', '../assets/talk_pengu.png', 338, 430);
        game.load.spritesheet('penguin_walk', '../assets/penguin2', 338, 430);


    },
    create: function() {

        //  This sprite is using a texture atlas for all of its animation data
        penguin_talk = game.add.sprite(0, 0, 'penguin_talk');
        penguin_talk.scale.x *= -1;

        penguin_talk.width = Math.abs(penguin_talk.width);
        penguin_talk.height = Math.abs(penguin_talk.height);


        //  Here we add a new animation called 'run'
        //  We haven't specified any frames because it's using every frame in the texture atlas
        penguin_talk.animations.add('talk');

        //  And this starts the animation playing by using its key ("talk")
        //  9 is the frame rate (15fps)
        //  true means it will loop when it finishes
        penguin_talk.animations.play('talk', 9, true);

    },
    update: function() {

        // if($('#next-button').disabled === true) {
        //     //  And this starts the animation playing by using its key ("talk")
        //     //  9 is the frame rate (15fps)
        //     //  true means it will loop when it finishes
        //     penguin_talk.animations.play('talk', 9, true);
        // }

    }
};

game.state.add('talking_penguin', talking_penguin);
game.state.start('talking_penguin');