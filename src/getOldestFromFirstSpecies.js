const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const responsiveID = employees.find((item) => item.id === id).responsibleFor[0];

  const IDanimal = species.find((item) => item.id === responsiveID).residents;

  const animal = IDanimal.reduce((acc, elem) => {
    if (acc.age > elem.age) return acc;
    return elem;
  }, 0);

  return [animal.name, animal.sex, animal.age];
}

module.exports = getOldestFromFirstSpecies;
