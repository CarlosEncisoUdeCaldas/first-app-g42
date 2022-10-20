const persona = {
    nombre: 'Tom',
    apellido: 'Jerry',
    edad: 15,
    tel: 123456789
}

//imprimiendo el objeto sin desestructuracion
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);

//la desestructuracion es el proceso de desglosar un objeto en variables mas simples
const { apellido, edad, nombre } = persona;
console.log('Objeto persona desestructurado: ');
console.log( nombre );
console.log( apellido );
console.log( edad );

//function que recibe como parametro un objeto tipo persona
//los parametros de funciones tambien se puenden desestructurar
function mostrarNombre ( { nombre, apellido, edad, tel = '¡No registra!' } ) {
    console.log ( `Su nombre es ${ nombre } ${ apellido } y su edad es ${ edad } y su telefono es ${ tel }` )
}

mostrarNombre( persona );