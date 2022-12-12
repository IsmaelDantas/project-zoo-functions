const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  return employees.some((ids) => ids.managers.includes(id));
}
function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const employeeNames = employees.filter((employee) => employee.managers.includes(managerId));
    return employeeNames.map((names) => `${names.firstName} ${names.lastName}`);
  }
}

module.exports = { isManager, getRelatedEmployees };
