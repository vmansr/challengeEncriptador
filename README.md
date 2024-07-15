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

# Actualizaciones del Encriptador/Desencriptador

## Resumen de Cambios

He realizado varias mejoras en mi proyecto de Encriptador/Desencriptador para optimizar su estructura, diseño y funcionalidad.

### Cambios en HTML

1. Añadido un `<header>` con logo y título principal (`<h1>`).
2. Restructurado el contenido principal dentro de una etiqueta `<main>`.
3. Mejorado la semántica general del documento.
4. Añadido un `<footer>` para información adicional.
5. Implementado un panel de historial.

### Actualizaciones en CSS

1. Ajustado el diseño para ser más responsivo.
2. Mejorado el estilo del header, incluyendo la posición del título.
3. Optimizado el diseño para tablets y dispositivos móviles.
4. Añadido estilos para el nuevo panel de historial.
5. Mejorado la consistencia visual en diferentes tamaños de pantalla.

### Mejoras en JavaScript

1. Actualizado las funciones para trabajar con la nueva estructura HTML.
2. Implementado la funcionalidad del panel de historial.
3. Mejorado el manejo de errores y la retroalimentación al usuario.
4. Optimizado la función de copiar texto.
5. Añadido event listeners para asegurar la carga completa del DOM.

## Cómo usar

1. Ingrese el texto en el área designada.
2. Elija entre encriptar o desencriptar el texto.
3. El resultado se mostrará en el panel derecho.
4. Use el botón "Copiar" para copiar el resultado al portapapeles.
5. Acceda al historial de operaciones mediante el botón "Mostrar Historial".

## Notas adicionales

- El encriptador ahora maneja mejor los errores, como el uso de mayúsculas o acentos.
- El historial guarda las últimas 5 operaciones realizadas.
- El diseño es ahora más adaptable a diferentes dispositivos.

## Próximos pasos

- Implementar almacenamiento local para mantener el historial entre sesiones.
- Añadir opciones de personalización de la encriptación.
- Mejorar la accesibilidad general de la aplicación.


## Modificaciones agregadas

- Historial de operaciones recientes
- Botón de actualización para reiniciar la aplicación
- Efectos visuales en botones
- Mensajes de confirmación para acciones importantes

## Funcionalidades detalladas

- Efecto de clic en botones
- La animación CSS buttonClick mueve el botón 2 píxeles hacia abajo y a la derecha en el 50% de la animación, y luego lo devuelve a su posición original.
- La clase button-click aplica esta animación.
- La función addClickEffect añade event listeners a un botón para:
- Añadir la clase button-click cuando se presiona el botón.
- Remover la clase cuando se suelta el botón o el cursor sale del botón.

Este efecto se aplica a todos los botones al cargar el DOM.

## Implementación de Botón de actualización

- Se ha añadido un nuevo botón "Actualizar" en la interfaz.
- El botón está estilizado para coincidir con el diseño existente.
- La función actualizarAplicacion() se ejecuta al hacer clic en este botón y realiza las siguientes acciones:
- Limpia el área de texto.
- Restaura el contenedor de resultado a su estado inicial.
- Limpia el historial.
- Oculta el panel de historial si está visible.
- Muestra un mensaje de confirmación.

## Modficación de Mensaje de actualización

- La función mostrarMensajeActualizacion():
- Crea un nuevo elemento div con el mensaje de actualización.
- Añade este elemento al contenedor principal.
- Configura un temporizador para remover el mensaje después de 3 segundos.
- El CSS añadido estiliza el mensaje de actualización para que sea verde y tenga bordes redondeados, con una animación de fundido para que aparezca y desaparezca suavemente.

## Implementación de la Estructura de la interfaz

- El resultado y el botón de copiar están dentro del mismo contenedor que el mensaje inicial.
- La función mostrarResultado() oculta el mensaje inicial y muestra el resultado con el botón de copiar.
- La función clickCopiarTexto() muestra el mensaje de confirmación dentro del contenedor de resultado.
- La función actualizarAplicacion() restaura completamente el estado inicial del contenedor.

## Experiencia de usuario

- Cuando el usuario hace clic en "Actualizar", la aplicación se reinicia a su estado inicial.
- Se muestra un mensaje en el panel principal indicando que la aplicación ha sido actualizada.
- Un mensaje adicional aparece brevemente debajo del panel principal, confirmando la actualización exitosa.
- Toda la funcionalidad se mantiene dentro del panel principal, proporcionando una experiencia de usuario cohesiva y contenida.

---

Desarrollado con ❤️ por [Victor M]
