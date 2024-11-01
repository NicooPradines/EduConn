function marcarComoCompletado(modalId) {
    // Cierra el modal actual
    const modalElement = document.getElementById(modalId);
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();

    // Marca el módulo como completado y actualiza el botón
    if (modalId === 'modalModulo2') {
        document.querySelector('#modalModulo2 .progress-bar').classList.replace('bg-warning', 'bg-success');
        document.querySelector('#modalModulo2 .progress-bar').style.width = '100%';
        document.querySelector('#modalModulo2 .progress-bar').innerText = 'Completado';
        document.querySelector('#modalModulo2 button').classList.replace('btn-primary', 'btn-outline-success');
        document.querySelector('#modalModulo2 button').disabled = true;

        // Habilita el botón para el siguiente módulo
        document.querySelector('[data-bs-target="#modalModulo3"]').disabled = false;
    } else if (modalId === 'modalModulo3') {
        document.querySelector('#modalModulo3 .progress-bar').classList.replace('bg-secondary', 'bg-success');
        document.querySelector('#modalModulo3 .progress-bar').style.width = '100%';
        document.querySelector('#modalModulo3 .progress-bar').innerText = 'Completado';
        document.querySelector('#modalModulo3 button').classList.replace('btn-primary', 'btn-outline-success');
        document.querySelector('#modalModulo3 button').disabled = true;
    }

    alert("¡Módulo completado! Puedes continuar con el siguiente.");
}
