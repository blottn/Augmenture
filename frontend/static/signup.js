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

$(document).ready(() => {
    newAdjective();
});
