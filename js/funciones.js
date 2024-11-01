document.getElementById("btnEncuesta").addEventListener("click", function() {
    document.getElementById("formularioEncuesta").style.display = "block";
    document.getElementById("formularioCursos").style.display = "none";
    document.getElementById("formularioPago").style.display = "none";
});

document.getElementById("btnCursos").addEventListener("click", function() {
    alert("Nuestra IA detectó que estos cursos pueden ser de tu interés!!!");
    document.getElementById("formularioEncuesta").style.display = "none";
    document.getElementById("formularioCursos").style.display = "block";
    document.getElementById("formularioPago").style.display = "none";
});

document.getElementById("btnPago").addEventListener("click", function() {
    document.getElementById("formularioEncuesta").style.display = "none";
    document.getElementById("formularioCursos").style.display = "none";
    document.getElementById("formularioPago").style.display = "block";
    calcularTotal();
});

document.getElementById("encuestaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Encuesta enviada!");
    document.getElementById("formularioEncuesta").style.display = "none";
    document.getElementById("btnEncuesta").disabled = true; // Bloquear el botón de encuesta
});

document.getElementById("cursosForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const selectedCourses = [];
    const checkboxes = document.querySelectorAll('input[name="cursos"]:checked');
    checkboxes.forEach((checkbox) => {
        selectedCourses.push(checkbox.value);
    });
    alert("Cursos seleccionados: " + selectedCourses.join(", "));
    document.getElementById("formularioCursos").style.display = "none";
    document.getElementById("btnCursos").disabled = true; // Bloquear el botón de cursos

    // Llenar el resumen de cursos en el formulario de pago
    const resumenCursos = document.getElementById("resumenCursos");
    resumenCursos.innerHTML = ""; // Limpiar contenido previo
    let total = 0;
    checkboxes.forEach((checkbox) => {
        const precio = checkbox.getAttribute("data-precio");
        total += parseInt(precio);
        const li = document.createElement("li");
        li.textContent = checkbox.value + ": $" + precio;
        resumenCursos.appendChild(li);
    });
    document.getElementById("totalPrecio").textContent = "Total: $" + total;
});

document.getElementById("validarCupon").addEventListener("click", function() {
    const codigo = document.getElementById("codigo").value;
    let mensaje = "";

    if (codigo === "DESCUENTO10") {
        mensaje = "¡Cupón válido! Se aplicará un descuento del 10%.";
    } else {
        mensaje = "Cupón no válido. Por favor, intente de nuevo.";
    }
    alert(mensaje);
    calcularTotal(); // Recalcular total después de validar el cupón
});

document.getElementById("pagoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Pago realizado exitosamente!");
    document.getElementById("btnPago").disabled = true; // Bloquear el botón de pago
    window.location.href = 'plataforma.html';
});

// Actualizar el total al aplicar un cupón
document.getElementById("codigo").addEventListener("input", function() {
    calcularTotal();
});

function calcularTotal() {
    const checkboxes = document.querySelectorAll('input[name="cursos"]:checked');
    let total = 0;
    checkboxes.forEach((checkbox) => {
        const precio = parseInt(checkbox.getAttribute("data-precio"));
        total += precio;
    });

    // Aplicar descuento si el cupón es válido
    const codigo = document.getElementById("codigo").value;
    if (codigo === "DESCUENTO10") {
        total *= 0.9; // Aplicar un 10% de descuento
    }
    document.getElementById("totalPrecio").textContent = "Total: $" + total;
}
