let historial = [];

function encriptar(texto) {
    if (/[A-ZÁÉÍÓÚáéíóú]/.test(texto)) {
        throw new Error("El texto no puede contener mayúsculas o vocales acentuadas");
    }
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function clickCopiarTexto() {
    let botonCopiar = document.getElementById("copiar");
    botonCopiar.onclick = function () {
        let texto = document.querySelector(".p-resultado").textContent;
        navigator.clipboard.writeText(texto).then(() => {
            const mensajeConfirmacion = document.createElement("div");
            mensajeConfirmacion.textContent = "Texto copiado correctamente!";
            mensajeConfirmacion.style.cssText = `
                color: green;
                margin-top: 10px;
                text-align: center;
            `;
            document.querySelector(".contenedor-resultado").appendChild(mensajeConfirmacion);
            setTimeout(() => {
                mensajeConfirmacion.remove();
            }, 2000);
        });
    };
}

function clickEncriptar(event) {
    event.preventDefault();
    let texto = document.getElementById("texto").value;
    try {
        let textoEncriptado = encriptar(texto);
        mostrarResultado(textoEncriptado);
        clickCopiarTexto();
        agregarAlHistorial(texto, textoEncriptado, 'encriptado');
    } catch (error) {
        alert(error.message);
    }
}

function clickDesencriptar(event) {
    event.preventDefault();
    let texto = document.getElementById("texto").value;
    let textoDesencriptado = desencriptar(texto);
    mostrarResultado(textoDesencriptado);
    clickCopiarTexto();
    agregarAlHistorial(texto, textoDesencriptado, 'desencriptado');
}

function mostrarResultado(texto) {
    let contenedorInicial = document.querySelector('.contenedor-inicial');
    let apartadoInicial = contenedorInicial.querySelector('.apartado-inicial');
    let contenedorResultado = contenedorInicial.querySelector('.contenedor-resultado');
    let pResultado = contenedorResultado.querySelector('.p-resultado');

    apartadoInicial.style.display = 'none';
    contenedorResultado.style.display = 'block';
    pResultado.textContent = texto;
}

function limpiarTextoEntrada() {
    document.getElementById("texto").value = '';
}

function agregarAlHistorial(textoOriginal, textoResultado, tipo) {
    historial.unshift({
        original: textoOriginal,
        resultado: textoResultado,
        tipo: tipo,
        fecha: new Date()
    });
    if (historial.length > 5) {
        historial.pop();
    }
}

function mostrarHistorial() {
    let historialPanel = document.getElementById('historialPanel');
    let historialContainer = document.getElementById('historial-container');
    
    historialContainer.innerHTML = '';
    
    if (historial.length === 0) {
        historialContainer.innerHTML = '<p>No hay entradas en el historial.</p>';
    } else {
        historial.forEach((item) => {
            let entryDiv = document.createElement('div');
            entryDiv.classList.add('historial-entry');
            entryDiv.innerHTML = `
                <p><strong>${item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1)}:</strong></p>
                <p>Original: ${item.original}</p>
                <p>Resultado: ${item.resultado}</p>
                <p>Fecha: ${item.fecha.toLocaleString()}</p>
            `;
            historialContainer.appendChild(entryDiv);
        });
    }
    
    historialPanel.style.display = "block";
}

function addClickEffect(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('mousedown', function() {
        this.classList.add('button-click');
    });
    button.addEventListener('mouseup', function() {
        this.classList.remove('button-click');
    });
    button.addEventListener('mouseleave', function() {
        this.classList.remove('button-click');
    });
}

function actualizarAplicacion() {
    // Limpiar el área de texto
    document.getElementById("texto").value = '';
    
    // Restaurar el estado inicial del contenedor
    let contenedorInicial = document.querySelector('.contenedor-inicial');
    contenedorInicial.innerHTML = `
        <div class="apartado-inicial">
            <img class="imagen_muneco" src="images/Muñeco.png" alt="Muñeco Alura">
            <p class="p-bold">Ningún mensaje fue encontrado</p>
            <p>Ingresa el texto que desees encriptar o desencriptar</p>
        </div>
        <div class="contenedor-resultado" style="display: none;">
            <p class="p-resultado"></p>
            <button id="copiar" class="copiar">Copiar</button>
        </div>
    `;
    
    // Limpiar el historial
    historial = [];
    
    // Ocultar el panel de historial si está visible
    document.getElementById('historialPanel').style.display = 'none';
    
    // Mostrar el mensaje de actualización
    mostrarMensajeActualizacion();
}

function mostrarMensajeActualizacion() {
    let mensaje = document.createElement('div');
    mensaje.className = 'mensaje-actualizacion';
    mensaje.textContent = 'La aplicación ha sido actualizada exitosamente.';

    
   // Obtener el contenedor principal que contiene todos los elementos
   let contenedorPrincipal = document.querySelector('.contenedor-inicial');
    
   // Insertar el mensaje al final del contenedor principal
   contenedorPrincipal.appendChild(mensaje);
    
    // Remover el mensaje después de 3 segundos
    setTimeout(() => {
        mensaje.remove();
    }, 3000);
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("encriptar").addEventListener("click", clickEncriptar);
    document.getElementById("desencriptar").addEventListener("click", clickDesencriptar);
    document.getElementById("limpiar").addEventListener("click", limpiarTextoEntrada);
    document.getElementById("mostrarHistorial").addEventListener("click", mostrarHistorial);
    document.getElementById("cerrarHistorial").addEventListener("click", function() {
        document.getElementById('historialPanel').style.display = 'none';
    });

    addClickEffect('encriptar');
    addClickEffect('desencriptar');
    addClickEffect('limpiar');
    addClickEffect('mostrarHistorial');
    addClickEffect('actualizar');

    document.getElementById("actualizar").addEventListener("click", actualizarAplicacion);
    
    // Añadir el efecto de clic al nuevo botón
    addClickEffect('actualizar');




});