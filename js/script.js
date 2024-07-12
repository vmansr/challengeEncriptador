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
    if (!botonCopiar) {
        botonCopiar = document.createElement("button");
        botonCopiar.id = "copiar";
        botonCopiar.classList.add("copiar");
        botonCopiar.textContent = "Copiar";
        botonCopiar.onclick = function () {
            let texto = document.querySelector(".p-resultado").textContent;
            navigator.clipboard.writeText(texto).then(() => {
                const mensajeConfirmacion = document.createElement("div");
                mensajeConfirmacion.textContent = "Texto copiado correctamente!";
                mensajeConfirmacion.style.color = "green";
                mensajeConfirmacion.style.position = "absolute";
                mensajeConfirmacion.style.bottom = "-1px";
                mensajeConfirmacion.style.left = "0";
                mensajeConfirmacion.style.right = "0";
                mensajeConfirmacion.style.textAlign = "center";
                document.querySelector(".contenedor-resultado").appendChild(mensajeConfirmacion);
                setTimeout(() => {
                    mensajeConfirmacion.remove();
                }, 2000);
            });
        };
        document.querySelector(".contenedor-resultado").appendChild(botonCopiar);
    }
}

function clickEncriptar() {
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

function clickDesencriptar() {
    event.preventDefault();
    let texto = document.getElementById("texto").value;
    let textoDesencriptado = desencriptar(texto);
    mostrarResultado(textoDesencriptado);
    clickCopiarTexto();
    agregarAlHistorial(texto, textoDesencriptado, 'desencriptado');
}

function mostrarResultado(texto) {
    let resultado = document.querySelector('.contenedor-inicial');
    resultado.innerHTML = '';
    let contenedor = document.createElement('div');
    contenedor.classList.add('contenedor-resultado');
    let parrafo = document.createElement('p');
    parrafo.textContent = texto;
    parrafo.classList.add('p-resultado');
    contenedor.appendChild(parrafo);
    resultado.appendChild(contenedor);
}

function limpiarTextoEntrada() {
    // Limpiamos solo el área de ingreso de texto
    document.getElementById("texto").value = '';
        
}

function agregarAlHistorial(textoOriginal, textoResultado, tipo) {
    historial.unshift({
        original: textoOriginal,
        resultado: textoResultado,
        tipo: tipo,
        fecha: new Date()
    });
    // Limitamos el historial a las últimas 5 entradas
    if (historial.length > 5) {
        historial.pop();
    }
        
}

function mostrarHistorial() {
    let modal = document.getElementById('historialModal');
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
    
    modal.style.display = "block";
}

document.getElementById("encriptar").addEventListener("click", clickEncriptar);
document.getElementById("desencriptar").addEventListener("click", clickDesencriptar);
document.getElementById("limpiar").addEventListener("click", limpiarTextoEntrada);
document.getElementById("mostrarHistorial").addEventListener("click", mostrarHistorial);
document.getElementById("cerrarHistorial").addEventListener("click", function() {
    document.getElementById('historialPanel').style.display = 'none';
});