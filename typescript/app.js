"use strict";
/*
Como en navegador no acepta Typescript
En la terminal usar el comando tsc --version debe ser superior a la Version 3
De manera manual tsc app.ts
De manera automatica tsc --init esto crea un archivo de configuración de ts tsconfig.json
tsc -w o tsc --watch modo observador o watch compila o traduce a js para cuando haya cambios



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



Tamplate literales
(function(){

    function getEdad(){
        return 20 + 5;
    }

    const nombre = 'Camilo';
    const apellido = 'Henao';
    const edad = 25;


    const salida = `${nombre} ${apellido} ${edad} ${getEdad()}`;

    console.log(salida);

})();



Funciones con parametros opcionles, obligatorios y por defecto
(function(){

    function activar(quien:string,
                     momento?:string,
                     objeto:string = 'Batiseñal' ){

        if(momento){
            console.log(`${quien} activa ${objeto} en ${momento}`);
        } else{
            console.log(`${quien} activa ${objeto}`);
        }
    }

    activar('Gordon');

})();



Funciones flecha
(function(){

    //Funcion tradicional
    function miFuncion ( a: string ){
        return a.toUpperCase();
    }

    //Funcion asignada a una variable
    let miFuncion2 = function( a: string ){
        return a;
    }

    const miFuncion3 = function( a: string ){
        return a;
    }

    //Funcion flecha en caso de una sola linea de codigo y es el return se usa así
    const miFuncion4 = ( a: string ) => a.toUpperCase();

    console.log(miFuncion4('Flecha'));
    console.log(miFuncion('Normal'));


    const sumar = function( a: number, b: number ){
        return a + b;
    }


    const sumarF = (a: number, b: number) => a+b;


    console.log(sumar(1,2));
    console.log(sumarF(1,2));


    const hulk = {
        nombre : 'Hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} samsh!!`)
            }, 1000);
        }
    }

    hulk.smash();

})();



Desestructuracion de objetos y arreglos
(function(){

    //Objeto
    //Forma tradicional
    const avenger = {
        nombre: 'Steve',
        apodo: 'Capitan America',
        poder: 'Droga'
    }

    console.log(avenger.nombre);
    console.log(avenger.apodo);
    console.log(avenger.poder);

    //Forma desestructurada
    //Para extraer de manera inmediata propiedades del objeto sin usar this o el nombre(avenger), no importa el orden
    const {nombre, apodo, poder} = avenger;
    console.log(nombre);
    console.log(apodo);
    console.log(poder);


    //Se puede usar en una funcion
    const extraer = ({nombre, poder}: any) => {

        console.log(nombre);
        console.log(apodo);
        console.log(poder);
    }
    
    //extraer(avenger);
   
    //Arreglo

    //{} - Objeto
    //[] - Arreglo
    //Para extraer de manera inmediata propiedades del arreglo sin usar this o el nombre(avengers), si importa el orden
    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];

    // const [loki , hierro, arana] = avengers;
    // console.log(loki);
    // console.log(hierro);
    // console.log(arana);
    
    //Para indicar el dato que me importa
    
    const [ , , arana] = avengers;
    //console.log(arana);

    //Se puede usar en una funcion
    const extraer = ([Thor, Ironman, Spiderman]:string[]) => {
        console.log(Thor);
        console.log(Ironman);
        console.log(Spiderman);
    }

    extraer(avengers);
})();

Promesas - Sirven para ejecutar el codigo sin bloquear el codigo
*/
(() => {
})();
