let clickCount = 0; // Inicializamos el contador en 0

function shakeLock() {
    const lock = document.getElementById('lock');
    const codeInputContainer = document.getElementById('code-input-container');
    const countDisplay = document.getElementById('count'); // Referencia al contador

    // Agregar la clase 'shaking' para activar la animación
    lock.classList.add('shaking');
    
    // Después de 0.5 segundos (duración de la animación), eliminar la clase
    setTimeout(() => {
        lock.classList.remove('shaking');
    }, 500);

    // Incrementar el contador de clics
    clickCount++;
    countDisplay.textContent = clickCount; // Actualizar el contador en la página

    // Si se han hecho exactamente 25 clics, mostrar el cuadro de entrada del código
    if (clickCount === 25) {
        codeInputContainer.style.display = 'block'; // Mostrar el cuadro
    }
}

function submitCode() {
    const code = document.getElementById('code').value;
    const message = document.getElementById('message');
    
    // Validar el código (ejemplo: el código correcto es "123ABC")
    if (code === "123ABC") {
        message.textContent = "¡Código correcto! La caja fuerte se ha abierto.";
        message.style.color = "green";
        // Aquí puedes agregar lógica para "abrir" la caja fuerte visualmente
    } else {
        message.textContent = "Código incorrecto. Inténtalo de nuevo.";
        message.style.color = "red";
    }
}
