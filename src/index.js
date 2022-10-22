import users from "./data/users"; //importacion por  defecto
console.log(users);

//Funcion find
//La funcion find devuelve el valor de una posicion siempre y cuando se cumpla una condicion estipulada

// const getElementById = users.find( function (item) {
//     return item.id === 10
// });

//transformamos la constante getElementById en una funcion flecha para obtener un parametro llamado id
// const getElementById = (id) => users.find( function (item) {
//     return item.id === id
// });
// const getElementById = (id) => users.find( (item) => item.id === id); //funciones con tipo flecha completas

//funcion tradicional completa
const getElementById = function (id) {
  return users.find(function (item) {
    return item.id === id;
  });
};

console.log("El id que corresponde al valor 3 es: ");
console.log(getElementById(1));
