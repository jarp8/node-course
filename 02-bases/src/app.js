const { getUuid, getAge  } = require('./plugins');

// Sintaxis tradicional de exportación de módulos en Node
// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { buildMakePerson } = require('./js-foundation/05-factory');
const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(1)
    .then(pokemon => {
        console.log({pokemon});
    })
    .catch(err => console.log('Por favor intente de nuevo'))
    .finally(() => console.log('Finalmente'));

// ! Referencia a la función factory y uso e inyección de dependencias
// const makePerson = buildMakePerson({getUuid, getAge});
// const obj = {
//     name: 'Jane',
//     birthdate: '2000-02-08'
// }
// const jane = makePerson(obj);
// console.log(jane);

// const id = 1;
// getUserById(id, (error, user) => {
//     if(error) {
//         throw new Error(error);
//     }

//     console.log({user});
// });

// console.log(emailTemplate);
// console.log(emailTemplate);