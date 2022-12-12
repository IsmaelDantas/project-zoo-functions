const { species } = require('../data/zoo_data');

const animalsLocation = (locations) => {
  const obj = {};
  let animalsArray = [];

  locations.forEach((item) => {
    species.forEach((elem) => {
      if (item === elem.location) {
        animalsArray.push(elem.name);
        obj[elem.location] = animalsArray;
      }
    });
    animalsArray = [];
  });

  return obj;
};

const getAnimalsNames = (elem, sex) => {
  if (sex !== 0) {
    return elem.residents.filter((animal) => animal.sex === sex).map((animal) => animal.name);
  }

  return elem.residents.map((animal) => animal.name);
};

const animalsLocationNames = (locations, sorted, sex) => {
  const obj = {};
  let names = [];

  locations.forEach((item) => {
    species.forEach((elem) => {
      if (item === elem.location) {
        const animalsName = getAnimalsNames(elem, sex);
        const animalsArray = sorted ? animalsName.sort() : animalsName;
        names.push({
          [elem.name]: animalsArray,
        });
        obj[elem.location] = names;
      }
    });
    names = [];
  });

  return obj;
};

function getAnimalMap(options = 0) {
  const { includeNames = false, sorted = false, sex = 0 } = options;
  const locations = ['NE', 'NW', 'SE', 'SW'];

  if (includeNames === false) {
    animalsLocation(locations);
  } else if (includeNames || sorted || sex === 0) {
    return animalsLocationNames(locations, sorted, sex);
  }

  return animalsLocation(locations);
}

module.exports = getAnimalMap;
