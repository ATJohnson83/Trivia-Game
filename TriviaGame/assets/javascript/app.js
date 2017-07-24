$(document).ready(function() {

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
        var correct = 0;
        var incorrect = 0;

        var answer = $(this).attr('value');
        if (answer == 'true') {
            correct++;
        } else if (answer == 'false') {
            incorrect++;
        };

        var unanswered = 8 - (correct + incorrect);
          });


        $('#donebtn').on('click', function() {
            stop();
            lastScreen();
        })
    });

    function lastScreen() {
        // $('#numcorrect').html(correct);
        // $('#numwrong').html(incorrect);
        // $('#unanswered').html(unanswered);
       
        $('#firstscreen').hide();
        $('#secondscreen').hide();
        $('#lastscreen').show();


    };

});