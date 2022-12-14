//en javascript podemos hacer exportaciones por defecto y de manera individual

const users = [
  {
    id: 1,
    nombre: "Gato",
    apellido: "Felino",
    marca:'a'
  },
  {
    id: 2,
    nombre: "Perro",
    apellido: "Can",
    marca:'a'
  },
  {
    id: 3,
    nombre: "Loro",
    apellido: "Ave",
    marca: 'b'
  },
  {
    id: 4,
    nombre: "Tony",
    apellido: "Stark",
    marca: 'b'
  },
];

export const numeroDelGrupo = 42;

//funcion saludo que voy a exportar
export function saludo() {
  return "Hola grupo 42";
}

//funcion que busca un elemento dentro del arrays users por el id
// export const getElementById = function (id) {
//   return users.find(function (item) {
//     return item.id === id;
//   });
// };

//misma funcion tipo flecha de arriba tipo flecha
export const getElementById = (id) => users.find((item) => item.id === id);

//funcion que busca un elemento del arrays users por el nombre
//funcion declarada de manera tradicional
export const getElementByName = function (nombre) {
    return users.find(function (item) {
        return item.nombre === nombre;
    });
};

//funcion filter tipo flecha
export const getElementsByMarca = (marca) => users.filter((item) => item.marca === marca);

export default users;
