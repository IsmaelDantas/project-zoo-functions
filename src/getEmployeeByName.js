const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((nam) => nam.firstName === employeeName || nam.lastName === employeeName);
}
module.exports = getEmployeeByName;
