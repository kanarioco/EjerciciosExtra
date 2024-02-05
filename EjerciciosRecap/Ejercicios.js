
/*
1.	Escribir un	programa que imprima en	la consola números del 5 hasta 50 
de 5 en 5
*/

for (let numeros = 5; numeros <= 50; numeros += 5) {
    console.log(numeros);  
}

/*
2.	Escribir un	programa que imprima en	la consola una cuenta hacia atrás	
desde 100 hasta	0 de 5 en 5	
*/

for (let numeros = 100; numeros >= 0; numeros -= 5) {
    console.log(numeros);  
}

/*
3.	Rellena	un array con números aleatorios	del	1 al 100 (10
números	por	ejemplo) y muéstralo por la	consola.
*/

const aleatorio = [3, 13, 24, 37, 42, 54, 68, 73, 89, 91];
console.log(aleatorio);

/*
4.	De	esta	lista	de	datos	dada	“colores”,	almacena	en	otra
variable	el	valor	del	tercer	elemento	y	muéstralo	en	la
consola.
let	colores	=	["azul",	"verde",	"rosa",	"naranja",	"rojo",	"marron"];
*/

let	colores	= ["azul", "verde", "rosa", "naranja", "rojo", "marron"];
let color = colores[2]
console.log(color);

/*
5.	Cogiendo	el	array	“colores”	del	ejercicio	anterior,	muestra
en	consola	el	primer	caracter	del	primer	elemento	de	este
array.
*/

let	colores1 = ["azul", "verde", "rosa", "naranja", "rojo", "marron"];
console.log(colores1[0][0]);

/*
6.	Dado	este	array	desordenado,	ordena	la	frase	e	imprimela	en
consola	para	poder	leerla	entera.
let	frase	=	["posiciones",	"se	cuentan",	"Las",	"array",	"cero.",	
"a	partir",	"del"];
*/

let	frase = ["posiciones", "se cuentan", "Las",	"array", "cero.", "a partir", "del"];
console.log(frase[2], frase[0], frase[6], frase[3], frase[1], frase[5], frase[4]);

/*
7.	Crea	dos	arrays	y	declara	una	función	que	junte	estos	dos
arrays	en	uno.
*/

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function suma(a, b) {
    return a.concat(b);
}

suma = (a, b) => a.concat(b)


console.log(suma(arr1, arr2)); 
console.log(arr1.concat(arr2));

 /*
 8.	Crea	dos	arrays	y	declara	una	función	que	tome	estos	dos
arrays,	saque	el	último	elemento	del	primero	y	lo	agregue	al
segundo.
*/

let arrA = [1, 2, 3];
let arrB = [4, 5, 6];

function sumaArrays(a, b) {
    if (a = arrA.slice(2))
    return a.concat(b);
 }   

console.log(sumaArrays(arrA, arrB));

/*
9.	Dados	estos	3	arrays	con	subarrays	anidados,	resuelve	a,	b	y	c.
	 let	array1	=	[1,	2,	[3,	4]];
	 let	array2	=	[1,	2,	[3,	4,	[5,	6]]];	
a.	convertir	array1	en	un	solo	array
b.	convertir	array2	en	un	array	con	los	4	primeros	elementos	del	
array	y	un	subarray	anidado	del	último	[5,6]	
c.	convertir	array3	en	un	solo	array	
*/

let	array1	=	[1,	2,	[3,	4]];
let	array2	=	[1,	2,	[3,	4,	[5,	6]]];

console.log( array1.flat());
console.log( array2.flat());
console.log( array2.flat().flat());
console.log( array1.concat(array1[2]));

/*
10.	Ordena	alfabéticamente	el	siguiente	array	(en	orden	descendente)	
según	el	estándar	UNICODE	e	imprime	el	resultado	en	la	consola.
let	colores	=	["azul",	"verde",	"rosa",	"naranja",	"rojo",	
"marron"];
*/

let	colores2 = ["azul",	"verde", "rosa", "naranja",	"rojo",	"marron"];

console.log(colores2.sort()); 

function ordenado() {
    colores2.sort();
    console.log(colores2.reverse());
}
ordenado()

