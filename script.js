function cargarTablaPaises() {
  fetch('https://restcountries.com/v3.1/subregion/South%20America')
    .then((response) => response.json())
    .then((data) => {
      let contenido = '';
      for (let i = 0; i < data.length; i++) {
        const pais = data[i];
        let currenciesInfo = '';
        // Iteramos sobre las claves del objeto currencies
        for (const currencyCode in pais.currencies) {
          if (pais.currencies.hasOwnProperty(currencyCode)) {
            const currency = pais.currencies[currencyCode];
            currenciesInfo += `${currency.name} (${currencyCode})`; // Agregamos el nombre y la abreviatura de la moneda
          }
        }
        contenido += `<tr>
          <td>${pais.name.common}</td>
          <td>${pais.population.toLocaleString('es')}</td>
          <td>${currenciesInfo}</td>
        </tr>`;
      }
      document.getElementById('tablaPaises').innerHTML = contenido;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
