import users , { getElementsByMarca } from "./data/users"; //importacion por  defecto
console.log(users);

//funcion filter
const resultMarcas = getElementsByMarca('b');
console.log(resultMarcas);