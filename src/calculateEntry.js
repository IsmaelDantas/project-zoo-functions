const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((item) => item.age < 18).length;
  const adult = entrants.filter((item) => item.age >= 18 && item.age < 50).length;
  const senior = entrants.filter((item) => item.age >= 50).length;

  return { child, adult, senior };
}

function calculateEntry(entrants = {}) {
  if (Object.keys(entrants).length === 0) return 0;

  const visits = countEntrants(entrants);
  const price = [];

  const { adult, senior, child } = prices;
  price.push(child, adult, senior);

  return Object.values(visits).reduce((acc, item, index) => acc + (item * price[index]), 0);
}

module.exports = { calculateEntry, countEntrants };
