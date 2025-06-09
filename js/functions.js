"use strict";

let fetchFakerData = (url) => {
  return fetch(url) // Ejemplo de URL; reemplaza por la que necesites
    .then(response => {
      if (!response.ok) {
        // Si el código HTTP no es 2xx, consideramos error
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // Procesar respuesta JSON
    })
    .then(data => {
      return {
        success: true,
        body: data
      };
    })
    .catch(error => {
      return {
        success: false,
        error: error.message || 'Error desconocido'
      };
    });
};

export { fetchFakerData };