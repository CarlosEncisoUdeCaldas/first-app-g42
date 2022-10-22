import users , {getElementById, getElementByName, getElementsByMarca} from "./data/users"; //importacion por  defecto
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
// const getElementById = function (id) {
//   return users.find(function (item) {
//     return item.id === id;
//   });
// };

console.log("El id que corresponde al valor 3 es: ");
console.log( getElementById (1) );
console.log( getElementByName ('Loro') );

const result = getElementById (5)
// const { nombre, id, apellido } = getElementById (1) //desestructuracion directa del objeto resultante
// console.log( `El Elemento encontra es ${nombre} ${apellido} con id No ${id}`);  //template string con back-tic

if (result) {
    const { nombre , apellido } = result
    console.log( `Hola ${nombre} ${apellido}, bienvenido a la plataforma`);  //template string con back-tic
} else {
    console.log('Lo sentimos, no tiene privilegios para esta plataforma');
}

