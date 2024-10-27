"use strict";
/*
Como en navegador no acepta Typescript
En la terminal usar el comando tsc --version debe ser superior a la Version 3
De manera manual tsc app.ts
De manera automatica tsc --init esto crea un archivo de configuración de ts tsconfig.json
tsc -w o tsc --watch modo observador o watch compila o traduce a js para cuando haya cambios
*/
/*
Funcion anonima auto-invocada o base de patron modulo de JS
(function(){
    function saludar( nombre:string ) {
        console.table( 'Hola ' + nombre ); // Hola Logan
    }
    
    
    const wolverine = {
        nombre: 'Logan'
    };

    saludar( wolverine.nombre );
})();
*/
/*
var - let
(function(){
    //let funciona dentro de cada scope(llaves - en cada llave "crea una nueva variable") y cada vez que uso let crea un nuevo scope/espacio de memoria
    //var funciona de manera general entre llaves y cada vez que uso var modifica el mismo espacio de memoria
    
    let mensaje = 'Hola';
    if (true){
        let mensaje = 'Mundo';
    }

    var mensaje = 'Hola';
    if (true){
        mensaje = 'Mundo';
    }



    var mensaje = 'Hola';

    console.log(mensaje);




})();
*/
/*
var - let - const
(function(){

    let mensaje = 'Hola';

    console.log(mensaje);


    let mensaje = 'Hola';
    if (true){
        let mensaje = 'Mundo';
    }

    const mensaje = 'Hola';

    console.log(mensaje);

})();
*/
/*
Tipos de datos
(function(){

    let mensaje: string  = 'Hola';
    let numero : number  = 123;
    let booleano: boolean = true; //false
    let hoy    : Date    = new Date();

    let cualquiercosa: string | number | boolean | Date;
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;

    let cualquiercosa2;
    cualquiercosa2 = mensaje;
    cualquiercosa2 = numero;
    cualquiercosa2 = booleano;
    cualquiercosa2 = hoy;

    let spiderman = {
        nombre : 'Peter',
        edad   : 30
    };

    
    spiderman = {
        nombre : 'Juan',
        edad   : 50
    };


})();
*/
