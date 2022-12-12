const { species } = require('../data/zoo_data');

const animalsCount = (item, sex) => {
  let count = 0;
  if (sex === undefined) {
    count = item.residents.length;
  } else {
    count = item.residents.filter((elem) => elem.sex === sex).length;
  }
  return count;
};

function countAnimals(animal) {
  // seu código aqui
  let obj = {};
  species.forEach((item) => {
    if (animal !== undefined) {
      const { specie, sex } = animal;
      if (item.name === specie) {
        obj = animalsCount(item, sex);
      }
    } else {
      obj[item.name] = item.residents.length;
    }
  });
  return obj;
}

module.exports = countAnimals;
