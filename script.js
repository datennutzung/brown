var body = document.body;
var black_square = document.getElementById("black-square");

reset();

function hide_black_square() {
    window.addEventListener('click', function() {fade_to_white()}, once=true)
    black_square.hidden = true;
}

function fade_to_white() {
    window.addEventListener('click', function() {reset()}, once=true)
    body.classList.add('white-background');
}

function reset() {
    black_square.hidden = false;
    body.classList.remove('white-background');
    window.addEventListener('click', function() {hide_black_square()}, once=true)
}