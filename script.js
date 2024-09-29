// Mover el candado cada vez que se presiona
let lockPosition = 0;
let moveRight = true;

function moveLock() {
    const lock = document.getElementById('lock');

    if (moveRight) {
        lock.style.left = '70%'; // Mover a la derecha
        moveRight = false;
    } else {
        lock.style.left = '30%'; // Mover a la izquierda
        moveRight = true;
    }
}
