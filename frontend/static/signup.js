const adjectives = [
    'amazing',
    'awesome',
    'incredible',
    'marvelous',
    'colossal',
    'fantastic',
    'monumental',
    'tremendous',
    'astounding',
    'wonderful',
    'glorius',
    'dazzling',
    'sublime',
    'superb',
    'shining',
    'ilustrious'
];

function newAdjective() {
    let index = Math.floor(Math.random() * adjectives.length)
    $('.adjective').text(adjectives[index] + ' ');
    setTimeout(newAdjective,3000);
}

function clearErrorMessage() {
    $('#signup-validation-msg')
        .text('')
        .css('width', '0%');
}

function signup(evt) {
    evt.preventDefault()
    let email = $('#signup-email').val();
    let pw = $('#signup-pw').val();
    let uname = $('#signup-uname').val();
    $.ajax('http://localhost:3000/signup', {
        method: 'POST',
        data: {
            'email': email,
            'pw': pw,
            'uname': uname
        },
        success: () => {
            console.log('success');
        },
        error: (_, status, httpMsg) => {
            $('#signup-validation-msg')
                .text('Error: ' + httpMsg)
                .css('width', '100%');
        }
    });
}

$(document).ready(() => {
    newAdjective();
    
    //listeners
    $('.signup-input').on('input', clearErrorMessage);

    $('#signup-form').submit(signup);
});
