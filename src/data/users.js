//en javascript podemos hacer exportaciones por defecto y de manera individual

const users = [
    { 
        id: 1, 
        nombre: 'Gato', 
        apellido: 'Felino'
    },
    { 
        id: 2, 
        nombre: 'Perro', 
        apellido: 'Can'
    },
    { 
        id: 3, 
        nombre: 'Loro', 
        apellido: 'Ave'
    }
];

export const numeroDelGrupo = 42;

//funcion saludo que voy a exportar
export function saludo() {
    return 'Hola grupo 42'
}

export default users;