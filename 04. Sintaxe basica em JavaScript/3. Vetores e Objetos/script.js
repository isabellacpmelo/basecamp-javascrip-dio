// O que são vetores ou arrays
// Como declarar um arrrat
/*let array = ['string', 1, true];
console.log(array);
// Um array pode guardar vários tipos de dados
let array1 = ['string', 2, false, [array]];
console.log(array1[4]);
// forEach() – itera um array
array1.forEach(function(item, index){console.log(item, index)});
// push() – add item no final do array
array1.push('novo item');
console.log(array1);
// pop() – remove item no final do array
array1.pop();
console.log(array1);
// shift() – remove item no início do array
array1.shift();
console.log(array1);
// unshift() – add item no início do array
array1.unshift(99);
console.log(array1);
// indexOf() – retorna o índice de um valor
console.log(array1.indexOf(false));
// splice() – remove ou substitui um item pelo índice
array1.splice(0, 3);
console.log(array1);
// slice() – retorna uma parte de um array existente
let array2 = array.slice(0, 3);
console.log(array);*/
//------------------------------------------------------------------------------------------------
// O que são objetos
let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno : 'objeto interno'}};
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var { string, boolean, objectInterno} = object;
console.log(string, boolean, object);




