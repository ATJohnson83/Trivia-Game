$(document).ready(function() {
    var correct = 0;
    var incorrect = 0;
    // var unanswered = 0;


    var timeleft = 30;
    $('#timer').html(timeleft);
    var counter;

    function run() {
        counter = setInterval(decrement, 1000);
    }

    function stop() {
        clearInterval(counter);
    }

    function decrement() {
        timeleft--;
        $('#timer').html(timeleft);
        if (timeleft == 0) {
            stop();
            alert("Time Up!");
            lastScreen();
        }
    }


    function firstScreen() {

        $('#secondscreen').hide();
        $('#lastscreen').hide();

    };

    firstScreen();

    $('#startbutton').on('click', function() {
        
        $('#firstscreen').hide();
        $('#secondscreen').show();
        $('#lastscreen').hide();
        
        run();

        $('input').click(function() {
            
            
            var answer = $(this).attr('value');
            if (answer == 'true') {
                correct++;
            } else if (answer == 'false') {
                incorrect++;
            };

            unanswered = 8 - (correct + incorrect);
            console.log(correct);

            $('#numcorrect').html(correct);
            $('#numwrong').html(incorrect);
            $('#unanswered').html(unanswered);
        });


        $('#donebtn').on('click', function() {
            stop();
            lastScreen();
        })
    });

    function lastScreen() {
        
       
        $('#firstscreen').hide();
        $('#secondscreen').hide();
        $('#lastscreen').show();


    };

});