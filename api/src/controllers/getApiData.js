const axios = require('axios');

const { Country } = require('../db');

const getApiData = async () => {
  let countries = await axios.get(
    'https://rest-countries.up.railway.app/v3.1/all/'
  );

  await countries.data.map((country) => {
    let pais = {
      id: country.cca3,
      Nombre: country.name.common,
      Imagendelabandera: country.flags.png,
      Continente: country.continents?.[0],
      Capital: country.capital ? country.capital[0] : 'no tiene capital',
      Subregión: country.subregion ? country.subregion : 'no tiene subregion',
      Área: country.area,
      Población: country.population,
    };
    Country.findOrCreate({ where: pais });
  });
};

module.exports = getApiData;
