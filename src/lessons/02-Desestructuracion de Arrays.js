// Desestructuracion de arrays
const fruitsNames = ['Fresa','Manzana','Uva','Mango','Kiwi']
console.log(fruitsNames);

//haciendo desestructuring del array fruitsName
// const [  fruit0, fruit1 , fruit2 ] = fruitsNames; //deestructuracion normal de un array
// const [  , , fruit2 ] = fruitsNames;  //en este ejemplo solo extraemos el valor de la posicion 2, las otras posiciones quedan vacias
// console.log(fruit0);
// console.log(fruit1);
// console.log(fruit2);


//imprimir por consola la desestructuracion del nuevo array
const [ fruit0 , fruit1 , ...restoDelArray ] = fruitsNames; //desestructuracion usando el operador spread
console.log(fruit0);
console.log(fruit1);
console.log(restoDelArray);
console.log(fruitsNames);