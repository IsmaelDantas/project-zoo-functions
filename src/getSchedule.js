const { species, hours } = require('../data/zoo_data');

const makeObject = (elem, exhibition) => {
  const { [elem]: { open, close } } = hours;

  return {
    officeHour: open === 0 ? 'CLOSED' : `Open from ${open}am until ${close}pm`,
    exhibition: open === 0 ? 'The zoo will be closed!' : exhibition,
  };
};

const allDays = (daysOfTheWeek) => {
  const object = {};

  daysOfTheWeek.forEach((item) => {
    const exhibition = species.filter((elem) => elem.availability.includes(item))
      .map((x) => x.name);
    object[item] = makeObject(item, exhibition);
  });

  return object;
};

const oneDay = (day) => {
  const object = {};
  const exhibition = species.filter((elem) => elem.availability.includes(day))
    .map((x) => x.name);

  object[day] = makeObject(day, exhibition);

  return object;
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  const daysOfTheWeek = Object.keys(hours);
  const animals = species.map((item) => item.name);

  if (daysOfTheWeek.includes(scheduleTarget)) {
    return oneDay(scheduleTarget);
  }

  if (animals.includes(scheduleTarget)) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  }

  return allDays(daysOfTheWeek);
}

module.exports = getSchedule;
