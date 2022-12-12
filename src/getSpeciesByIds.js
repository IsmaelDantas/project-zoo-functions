const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // baby steps
  // coletar o array através do map
  return ids.map((id) => species.find((specie) => specie.id === id));
}
module.exports = getSpeciesByIds;
