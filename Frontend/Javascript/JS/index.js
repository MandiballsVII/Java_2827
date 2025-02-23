'use strict';

///////////////ENREDANDO CON EL DOM//////////////////

// document.body.style.background = 'red'; // make the background red

// setTimeout(() => document.body.style.background = '', 3000); // return back

// for (let node of document.body.childNodes) {
//     console.log(node); // shows all nodes from the collection
//   }

// parent of <body> is <html>
console.log( document.body.parentNode === document.documentElement ); // true

// after <head> goes <body>
console.log( document.head.nextSibling ); // HTMLBodyElement

// before <body> goes <head>
console.log( document.body.previousSibling ); // HTMLHeadElement

console.log(document.body.firstElementChild.firstElementChild);
console.log(document.body);
console.log(document.body.children[0]);
console.log(document.body.lastElementChild);

let table = document.body.children[2].children[3].children[0];

console.log(table);

table.style.backgroundColor = 'green';

for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.style.backgroundColor = 'blue';
    row.cells[i].style.backgroundColor = 'red';
  }

  table.children[1].children[0].children[0].style.backgroundColor = 'purple';
  table.children[0].children[0].children[2].style.color = 'white';
  table.children[0].children[0].children[0].nextElementSibling.style.backgroundColor = 'orange';

  document.getElementById('penultimo-elemento').style.backgroundColor = 'aquamarine';

  let abajoIzquierda = document.getElementsByClassName('abajo-izquierda');
  for(const elemento of abajoIzquierda){
    elemento.style.backgroundColor = 'azure';
  }

  let ultimosHijos = document.querySelectorAll('tr > td:last-child, th:last-child');

  for(const elemento of ultimosHijos){
    elemento.style.color = 'deepskyblue';
  }


  ////////////////////FIN DE ENREDO CON DOM/////////////////

function clases() {
    class Persona {
        constructor(nombre, apellidos) {
            this.nombre = nombre;
            this.apellidos = apellidos;
        }

        datos() {
            return `${this.nombre} ${this.apellidos}`;
        }
    }

    const persona1 = new Persona('Javier', 'Lete');

    persona1.profesion = 'Profesor';

    console.log(persona1, persona1.datos());
}

function prototipos() {
    function Persona(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    Persona.prototype.datos = function () {
        return `${this.nombre} ${this.apellidos}`;
    }

    const persona1 = new Persona('Javier', 'Lete');

    persona1.profesion = 'Profesor';

    console.log(persona1, persona1.datos());

    const persona2 = new Persona();

    persona2.nombre = 'Pepe';

    console.log(persona2, persona2.datos());

    String.prototype.toUpperCase = function () {
        return 'TROLEADO!!!';
    }

    String.prototype.esJavier = function () {
        return 'Javier' === this;
    }

    console.log(persona2.nombre.toUpperCase());

    console.log('Javier'.esJavier());
    console.log('Pepe'.esJavier());
}

function objetos() {
    const objeto = {};

    objeto.nombre = 'Prueba'
    objeto['numero'] = 5;

    const texto = function () {
        return `nombre = ${this.nombre}, numero = ${this.numero}`;
    };

    objeto.texto = texto;

    console.log(objeto);
    console.log(objeto.texto());

    const nombre2 = 'Otro texto';
    const numero = 10;

    const objeto2 = { nombre: nombre2, numero };

    objeto2.texto = texto;

    console.log(objeto2.texto());
}

function arrays() {
    const arr = [];

    arr[0] = 'Hola';
    arr[1] = 'Mundo';
    arr[2] = '!!!';
    arr[3] = 5;
    arr[10] = '!!!';

    arr['pepe'] = 'Pepe';
    arr.juan = 'Juan';

    arr.push('Hola');

    console.log(arr, arr.length, typeof arr);

    console.log(arr[0]);
    console.log(arr['juan']);
    console.log(arr.pepe);

    for (let i = 0; i < arr.length; i++) {
        console.log(i, arr[i]);
    }

    for (const clave in arr) {
        console.log(clave, arr[clave]);
    }

    for (const valor of arr) {
        console.log(valor);
    }
}

function funciones() {
    function sumar(a, b) {
        return a + b;
    }

    const restar = function (a, b) {
        return a - b;
    }

    const multiplicar = (a, b) => a * b;

    let operacion = sumar;

    console.log(operacion(2, 3));

    function calculadora(operacion, a, b) {
        console.log(operacion(a, b));
    }

    calculadora(restar, 2, 3);

    calculadora(multiplicar, 2, 3);

    calculadora((a, b) => a / b, 2, 3);
}

function tiposDeDatos() {
    // console.log(nombre, typeof nombre);

    console.log('Hola Mundo');

    let nombre = 'Javier';

    console.log(nombre);

    nombre = 'Pepe';

    console.log(nombre);

    const x = +'X', y = +'Y';

    const suma = x + y;

    if (isNaN(suma)) {
        console.log('No se puede sumar');
    } else {
        console.log(suma, typeof suma);
    }

    let z;

    if (z) {
        console.log('Z no tiene valor');
    }
}