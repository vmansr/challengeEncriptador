# Encriptador y Desencriptador de Texto

Este proyecto es una aplicación web interactiva que permite a los usuarios encriptar y desencriptar texto utilizando un algoritmo de sustitución personalizado. Diseñada con una interfaz intuitiva, la aplicación ofrece funcionalidades adicionales como copiar resultados, limpiar entradas y mantener un historial de operaciones recientes.

## Características

- Encriptación de texto: Transforma el texto ingresado según reglas predefinidas.
- Desencriptación de texto: Revierte el proceso de encriptación.
- Copiado rápido: Permite copiar el resultado al portapapeles con un clic.
- Limpieza de entrada: Facilita borrar el texto de entrada rápidamente.
- Historial de operaciones: Guarda las últimas 5 operaciones realizadas.
- Interfaz responsiva: Diseñada para funcionar en diversos dispositivos y tamaños de pantalla.

## Cómo funciona

El algoritmo de encriptación reemplaza las vocales por palabras específicas:

- 'e' se convierte en 'enter'
- 'i' se convierte en 'imes'
- 'a' se convierte en 'ai'
- 'o' se convierte en 'ober'
- 'u' se convierte en 'ufat'

La desencriptación realiza el proceso inverso.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript

## Estructura del Proyecto
encriptador-desencriptador/
│
├── index.html
├── styles.css
├── script.js
└── README.md

## Funciones principales:
- `encriptar(texto)`: Reemplaza ciertas letras con palabras específicas.
- `desencriptar(texto)`: Revierte el proceso de encriptación.
- `clickCopiarTexto()`: Crea un botón para copiar el texto resultante.
- `clickEncriptar()`: Maneja el evento de clic para encriptar el texto.
- `clickDesencriptar()`: Maneja el evento de clic para desencriptar el texto.
- `mostrarResultado(texto)`: Muestra el resultado en la interfaz.
- `limpiarResultado()`: Limpia el resultado y el campo de entrada.
- `agregarAlHistorial(textoOriginal, textoResultado, tipo)`: Agrega una entrada al historial.
- `mostrarHistorial()`: Muestra el historial de operaciones.
- `toggleHistorial()`: Alterna la visibilidad del historial.

## Manejo de eventos:
   
- El código agrega event listeners a los botones de encriptar, desencriptar, limpiar y mostrar historial.

## Observaciones y sugerencias:
   
a. La función `encriptar()` usa una expresión regular para verificar mayúsculas y acentos, pero no devuelve nada si la condición se cumple. Debería retornar un valor o lanzar una excepción.
   
b. La variable `historicoVisible` se usa en `toggleHistorial()` pero no está declarada en el ámbito global. Debería declararse al inicio del script.
   
c. La función `clickCopiarTexto()` crea un nuevo botón cada vez que se llama, lo que podría resultar en múltiples botones. Sería mejor crear el botón una vez y luego solo actualizarlo o mostrarlo/ocultarlo según sea necesario.
   
d. En `clickEncriptar()` y `clickDesencriptar()`, se usa `event.preventDefault()`, pero el evento no se pasa como parámetro a estas funciones.
   
e. La función `actualizarHistorial()` se llama en `toggleHistorial()`, pero no está definida en el código proporcionado.

## Buenas prácticas:
- El código usa `let` para declarar variables, lo cual es una buena práctica en JavaScript moderno.
- Las funciones están bien organizadas y tienen nombres descriptivos.
- Se utiliza el manejo de errores con try-catch en `clickEncriptar()`.

## Posibles mejoras:
- Implementar la función `actualizarHistorial()`.
- Manejar el caso en que la encriptación falla en `clickEncriptar()`.
- Considerar el uso de constantes para las palabras de reemplazo en las funciones de encriptación y desencriptación.
- Agregar más comentarios para explicar la lógica de ciertas partes del código.

## Cómo usar

1. Clona este repositorio o descarga los archivos.
2. Abre el archivo `index.html` en tu navegador web.
3. Ingresa el texto que deseas encriptar o desencriptar en el campo de texto.
4. Haz clic en el botón "Encriptar" o "Desencriptar" según lo que desees hacer.
5. El resultado se mostrará en la pantalla y podrás copiarlo al portapapeles.
6. Utiliza el botón "Mostrar historial" para ver las últimas operaciones realizadas.

## Restricciones

- El texto a encriptar no debe contener mayúsculas ni vocales acentuadas.

## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir los cambios que te gustaría hacer o envía un pull request directamente.


---

Desarrollado con ❤️ por [Victor M]
