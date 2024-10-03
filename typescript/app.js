"use strict";
/*
Como en navegador no acepta Typescript
En la terminal usar el comando tsc --versio debe ser superior a la Version 3
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
(function(){
    //let funciona dentro de cada scope(llaves - en cada llave "crea una nueva variable") y cada vez que uso let crea un nuevo scope/espacio de memoria
    //var funciona de manera general entre llaves y cada vez que uso var modifica el mismo espacio de memoria
    var mensaje = 'Hola';

    console.log(mensaje);

})();
*/
(function () {
    let mensaje = 'Hola';
    console.log(mensaje);
})();
