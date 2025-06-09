"use strict";

import { fetchFakerData } from "./functions.js";
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

const renderCards = (dataArray) => {
  const container = document.getElementById('skeleton-container');
  container.innerHTML = ''; // Limpiar contenido previo

  dataArray.slice(0, 3).forEach(item => {
    const card = document.createElement('div');
    card.className = "bg-white shadow-md rounded-lg p-6 mb-4";

    card.innerHTML = `
      <h2 class="text-xl font-semibold mb-2">${item.title}</h2>
      <p class="text-sm text-gray-500 mb-1">Autor: ${item.author}</p>
      <p class="text-sm text-gray-500 mb-3">Género: ${item.genre}</p>
      <p class="text-gray-700">${item.content}</p>
    `;

    container.appendChild(card);
  });
};




const loadData = async () => {
  const url = 'https://fakerapi.it/api/v2/texts?_quantity=10&_characters=120';
  
  try {
    const result = await fetchFakerData(url);
    if (result.success) {
      console.log('Datos obtenidos:', result.body);
      renderCards(result.body.data);
    } else {
      console.error('Error:', result.error);
    }
  } catch (error) {
    console.error('Error inesperado:', error.message);
  }
};




(() => {
    showToast();
    showVideo();
    loadData();
})();



