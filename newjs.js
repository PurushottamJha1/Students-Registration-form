$(document).ready(function() {
    $('*').css({
        'margin': '0px',
        'padding': '0px',
        'background-color': 'rgba(0, 0, 255, 0.301)',
        'color': 'aliceblue',
        'font-family': '\'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif',
        'font-weight': 'bold',
        'font-size': 'medium'
    });

    $('.header').css({
        'text-align': 'center',
        'padding-top': '10px',
        'padding-bottom': '10px',
        'font-weight': 'bolder',
        'font-size': 'x-large'
    });

    $('.myForm').css({
        'height': '100vh',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'background-color': 'rgb(50, 94, 79)'
    });

    $('.myForm-1').css({
        'border': 'px solid blue',
        'display': 'flex',
        'flex-flow': 'column',
        'flex-wrap': 'nowrap',
        'margin': '4px'
    });

    $('.fname, .lname, .age, .email, .phone, .resume, #Apply, .submit').css({
        'background-color': 'rgba(0, 0, 0, 0.644)',
        'font-weight': '100',
        'font-family': '\'Franklin Gothic Medium\', \'Arial Narrow\', Arial, sans-serif',
        'padding': '5px'
    });

    $('.DOB').css({
        'background-color': 'gray',
        'font-weight': '100',
        'font-family': '\'Franklin Gothic Medium\', \'Arial Narrow\', Arial, sans-serif',
        'padding': '5px'
    });

    $('.required:after').css({
        'content': '" *"',
        'color': 'red'
    });
});
