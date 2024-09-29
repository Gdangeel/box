function shakeLock() {
    const lock = document.getElementById('lock');
    
    // Agregar la clase 'shaking' para activar la animación
    lock.classList.add('shaking');
    
    // Después de 0.5 segundos (duración de la animación), eliminar la clase
    setTimeout(() => {
        lock.classList.remove('shaking');
    }, 500); // Tiempo igual a la duración de la animación
}
