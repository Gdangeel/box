let clickCount = 0;

function shakeLock() {
    const lock = document.getElementById('lock');
    const codeInputContainer = document.getElementById('code-input-container');
    
    // Agregar la clase 'shaking' para activar la animación
    lock.classList.add('shaking');
    
    // Después de 0.5 segundos (duración de la animación), eliminar la clase
    setTimeout(() => {
        lock.classList.remove('shaking');
    }, 500);

    // Incrementar el contador de clics
    clickCount++;

    // Si se han hecho 25 clics, mostrar el cuadro de entrada del código
    if (clickCount === 25) {
        codeInputContainer.classList.remove('hidden');
    }
}

function submitCode() {
    const code = document.getElementById('code').value;
    const message = document.getElementById('message');
    
    // Validar el código (ejemplo: el código correcto es "123ABC")
    if (code === "123ABC") {
        message.textContent = "¡Código correcto! La caja fuerte se ha abierto.";
        message.style.color = "green";
    } else {
        message.textContent = "Código incorrecto. Inténtalo de nuevo.";
        message.style.color = "red";
    }
}
