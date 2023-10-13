//----------------------------------------------------  Ejercicio 1  ----------------------------------------------------------
document.write("Ejercicio 1<br><br>")
num1 = parseInt(prompt("Ingresar 1° numero"));
num2 = parseInt(prompt("Ingresar 2° numero"));
let bandera = false


if (!(isNaN(num1) && isNaN(num2))) {
console.log("hola mal condicion")
bandera = false;
    function Calculos(num1, num2) {
        let resta;
        resta = num1 - num2;
        let suma;
        suma = num1 + num2;
        console.log(" Suma = "+suma+" Resta = "+resta)
    }
}else{ bandera = true
    window.alert("Deber ingresar los valores");}

document.write(Calculos(num1,num2))


//------------------------------------------------------  Ejercicio 2  -----------------------------------------------------

let array = []
let num1;
let suma = 0;
let promedio = 0;

for (let i = 0; i < 5; i++) {
    num1 = parseInt(prompt("Ingresar un numero"));
    array.push(num1);
}

function CalcPromedio(array)
 {
for (let index = 0; index < array.length; index++) {

 suma += array[index];
}
   promedio = suma / array.length; 
   console.log(" Promedio = "+promedio)
}

CalcPromedio(array);

//---------------------------------------------------------  Ejercicio 3  --------------------------------------------------

/*let array = []
let num1;
let suma = 0;
let promedio = 0;

for (let i = 0; i < 5; i++) {
    num1 = parseInt(prompt("Ingresar un numero"));
    array.push(num1);
}

if (!(isNaN(num1))) {
function CalcPromedio(array)
 {
for (let index = 0; index < array.length; index++) {

 suma += array[index];
}
   promedio = suma / array.length; 
   console.log(" Promedio = "+promedio)
}
}else window.alert(" Debe ingresar un numero");
CalcPromedio(array);*/

//-----------------------------------------------------------  Ejercicio 4  ----------------------------------------------------
/*let nombre;
let edad;

nombre = prompt(" Ingresar el nombre ");
edad = prompt(" Ingresar Edad ");

function SaludarPersona(nombre, edad) {
 if (edad > 18) {
    console.log(" Bienvenido Senior "+nombre)
 }else console.log("Welcome Jonior")   
}
SaludarPersona(nombre, edad);*/

//-----------------------------------------------------------  Ejercicio 5  -----------------------------------------------
 
/*console.log(" Ejercicio 5 ")

let inicio;
let fin;
let cont = inicio;
let array = [];
inicio = parseInt(prompt(" Ingresar numero inicio"))
fin = parseInt(prompt(" Ingresar numero fin"))

function numRango(incio, fin) {
//comienzo desde el inicio + 1 a iterar para tomar los valores que estan dentro de esos dos extremos
    for (let index = (inicio + 1) ; index < fin; index++) {
        
        array.push(index) 
    }
    
    console.log(array)
}

numRango(inicio,fin)*/

//-------------------------------------------------  Ejercicio 6 -------------------------------------------------

/*let array1 = [2,6,3,2,9,3]
let array2 = [8,2,4,9,1,2,4]
let arrayMix = []
let suma = 0;

let MixVectores = (array1, array2) => { arrayMix = array1.concat(array2) 
 for (const sumador of arrayMix) {
    
    suma += sumador;
 }
 console.log(" suma de los elemmentos "+suma)
}

MixVectores(array1,array2)*/


//-------------------------------------------------  Ejercicio 7  --------------------------------------------------


/*console.log(" Ejercicio 7 ")

let nombre;
nombre = prompt(" Ingresar el nombre que busca");
const nombres = [ " roxana  ","  ricardo ","camila", "pablo ", "maria   ","    carlitos  "," luciana  " ] 
let NombresSinEsp = []
let bandera = false//bandera booleana para indicar cuando encuentra el nombre marcando en la posis¿cion del array
function BuscarNombre(nombre) {
    
for (let index = 0; index < nombres.length; index++) {

    NombresSinEsp [index] = nombres[index].trim()
}
    for (let index = 0; index < nombres.length; index++) {
        
        if (nombre === NombresSinEsp[index]) {
            bandera = true
        }
    }

    if (bandera) {//llamo a las posiciones de las banderas 
        console.log(" el nombre "+nombre+" si se encuentra en el array")
    }else console.log(" No se encontro el nombre que busca "+nombre)
    
}
BuscarNombre(nombre);*/



//---------------------------------------------------------  Ejercicio 8  -----------------------------------------------



/*console.log(" Ejercicio 8 ");

let numeros = []
let cantidadPrimo = 0;//cantidad de numeros primos
let contador = 0;//contador
let primos = []

for (let i = 1; i <= 1000 ; i++)
 {
    numeros.push(i);
}
//funcion flecha para encontrar los numeros primos del 1 al 1000
const numPrimos = (numeros) => {
    document.writeln(" Los numeros primos del 1 al 1000 son : <br>")
    //1° for el cual itero los elementos del array numeros el cual es del 1 al 1000
for (let i = 1; i < numeros.length; i++) {
    //2° for itero desde el 1 hasta cada uno de los elementos del array numeros
    //como limite para que realice la prueba del rango entre cada numero para 
    //ver si el elemento en cuestion es numero primo
    for (let index = 1; index <= numeros[i]; index++) {
//If para realizar la condicion donde pruebo el numero posicion i con relacion de 
//del numero index en el cual sea cero
    if ((numeros[i] % index) === 0)
     {//Contador para veri cuantas veces el resto es 0
        contador++
    }
 }
//if para verificar si el contador da igual a 2 seria numero primo
//es la condicion para ver si es primo
if (contador === 2) 
{
console.log(" Es primo "+numeros[i])//muestra el numero primo
//push.primos(numeros[i])
document.write(numeros[i],"-")//muestra los numeros primos por documento separados con un guion -
    cantidadPrimo++//cuenta cuantos numeros son primos
}
contador = 0//igualo a 0 el contador para que vuelve el ciclo desde cero con el nuervo numero

}

console.log("cantidad de numero primos "+cantidadPrimo)
document.write("cantidad de numero primos "+cantidadPrimo)
console.log(numeros)}
numPrimos(numeros)*/



//---------------------------------------------------  Ejercicio 9  --------------------------------------------------------



/*console.log(" Ejercicio 9 ");

let letra = prompt(" Ingresar una letra ");
let Palabras = ["brako","ismael","luciano","nahuel","Maipu","Facultad"];
let palabrasconLetra = [];
let contador = 0;

let BuscarLetra = (Palabras,letra) => { 
   
    for (let i = 0; i < Palabras.length; i++) {
        if (Palabras[i].includes(letra) === true) {
                palabrasconLetra.push(Palabras[i]);      
              contador++;  //con el contador lo uso para saber cuando tiene que aparecer el alert de no encontro letra
        }
    }
    
    if (contador < 1)//fuera del for en el if con esta condicion usando el contador me aseguro que aparescar una sola vez el alert
     {window.alert(" Letra ingresada no encontrada")}
        
    return palabrasconLetra.join(" - ")

    }
document.write( BuscarLetra(Palabras,letra))*/



//------------------------------------------------------  Ejercicio 10  --------------------------------------------------------------



/*console.log(" Ejercicio 10 ");

let numero1 = []
let numero2 = []
let dim1 = parseInt(prompt(" Ingresar la dimension del vector 1"))//dimension del vector 1 ingresada por teclado
let dim2 = parseInt(prompt(" Ingresar la dimension del vector 1"))//dimension del vector 2 ingresada por teclado
let nuevoNumero = []
let cantPares = 0;
let cantImpares = 0;
let suma = 0;
let promedio = 0;

for (let i = 0; i < dim1; i++) {//for para llenar de forma aleatoria el array
    
    numero1.push(Math.floor(Math.random()*100))//array llenado de forma aleatorio del 0 al 99
}

for (let i = 0; i < dim2; i++) {//for para llenar de forma aleatoria el array
    
    numero2.push(Math.floor(Math.random()*100))//array llenado de forma aleatorio del 0 al 99
}

console.log(" array1 "+numero1)//array llenado de forma aleatorio del 0 al 99
console.log(" array2 "+numero2)

const DeTodoUnPoco = (numero1, numero2) => {

  //A) Concatenar ambos arrays 

//esta funcion crea nuevo array concatenando los array numero1 y numero2
function ConcatenarArrays(numero1, numero2) {
    nuevoNumero = numero1.concat(numero2);//concatena los dos arrays
 console.log(" Nuevo array = "+nuevoNumero)}
 ConcatenarArrays(numero1, numero2)

    //B) Encontrar el valor mas alto y el mas bajo

    function ValorMaximo(nuevoNumero) {//funcion para encontrar el valor maximmo
    //los 3 puntitos (...) se llama spread javascript
    console.log("Valor maximo = "+Math.max(...nuevoNumero))//busca el Math.max() busca el minimo
    }ValorMaximo(nuevoNumero)

    function ValorMinimo(nuevoNumero) {//funcion para encontrar el valor minimo
        console.log("Valor minimo = "+Math.min(...nuevoNumero))//busca el Math.min() busca el minimo    
    }ValorMinimo(nuevoNumero)
    

    //C) Calcular la cantidad de numeros pares e impares
function CantParesyImpares(nuevoNumero) {
    
for (let i = 0; i < nuevoNumero.length; i++) {
    
     suma += nuevoNumero[i];//acumulador para realizar calculo promedio y suma total de elementos

    if (nuevoNumero[i] % 2 === 0) {
        cantPares++//contador para la cantidad de numero pares
    }else cantImpares++//contador para la cantidad de numero pares
}

console.log(" Cantidad de numeros pares = "+cantPares)
console.log(" Cantidad de numeros Impares = "+cantImpares)
} CantParesyImpares(nuevoNumero)

    //D) Calcular el promedio 

function Prommedio(nuevoNumero) {
    
promedio = suma / (nuevoNumero.length);
console.log(" Promedio = "+promedio);}
Prommedio(nuevoNumero)

    // E) Sumar todos sus elementos

    function Suma(suma) {//funcion para mostrar la suma total de los elemento del array
    
    console.log(" Suma Total = "+suma);}
    Suma(suma)
}
 DeTodoUnPoco(numero1, numero2)*/