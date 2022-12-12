const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais
  // daquela espécie possuem a idade mínima especificada.
  return species.find((specie) => specie.name === animal).residents.every((id) => id.age >= age);
}

module.exports = getAnimalsOlderThan;
