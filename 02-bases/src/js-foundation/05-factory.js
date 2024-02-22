// const { getUuid } = require('../plugins/uuid.plugin');
// const { getAge } = require('../plugins/get-age.plugin');

// const { getUuid, getAge  } = require('../plugins');

// Un Factory function:
// es una función que regresa una función

const buildMakePerson = ({getUuid, getAge}) => {
    return ({name, birthdate}) => {
        return {
            id: getUuid(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }
}

// const obj = {
//     name: 'Jane',
//     birthdate: '2000-02-08'
// }

// const jane = buildPerson(obj);

// console.log(jane);

module.exports = {
    buildMakePerson
}