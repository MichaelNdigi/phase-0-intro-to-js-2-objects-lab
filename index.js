// Write your solution in this file!
const employee = {
    name: "Michael",
    streetAddress: "langata road",
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

const sundayMenu = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Sam",
    "streetAddress",
    "11 Broadway"
  );

  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

const update = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "streetAddress",
    "12 Broadway"
  );

  function deleteFromEmployeeByKey(obj, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
    }