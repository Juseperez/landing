"use strict";
/**
 * Muestra una notificación tipo "toast" en la interfaz.
 * Busca un elemento con el ID "toast-interactive" y, si existe,
 * le agrega la clase CSS "md:block" para hacerlo visible.
 * 
 * @returns {void} No retorna ningún valor.
 */
const showToast = () => {
    const toast = document.getElementById("toast-interactive");
    if (toast) {
        toast.classList.add("md:block");
    }
};

/**
 * Asocia un evento de clic a un elemento con ID "demo".
 * Al hacer clic, se abre un enlace de YouTube en una pestaña nueva.
 * 
 * @returns {void} No retorna ningún valor.
 */
const showVideo = () => {
    const demo = document.getElementById("demo");
    if (demo) {
        demo.addEventListener("click", () => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        });
    }
};

(() => {
    showToast();
    showVideo();
})();