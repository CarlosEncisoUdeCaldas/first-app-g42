// Desestructuracion de arrays
const fruitsNames = ['Fresa','Manzana','Uva']
console.log(fruitsNames);

//haciendo desestructuring del array fruitsName
const [  fruit0, fruit1 , fruit2 ] = fruitsNames; 
// const [  , , fruit2 ] = fruitsNames;  //en este ejemplo solo extraemos el valor de la posicion 2, las otras posiciones quedan vacias
console.log(fruit0);
console.log(fruit1);
console.log(fruit2);