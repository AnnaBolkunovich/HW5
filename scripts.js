//Task 1
console.log ('Task 1');
let a = prompt('Введите число');
let b = prompt('Введите число');
let c = prompt('Введите число');
function res( ) {
   let s = (a-b)/c;
    console.log(s);
}
res();
//Task 2
console.log ('Task 2');
function math () {
    let kv = Math.pow(a, 2);
    let cube = Math.pow (b, 3);
    console.log ('Квадрат числа ' + kv);
    console.log('Куб числа ' + cube);
}
math();
//Task 3
console.log ('Task 3');
function min () {
    let n = Math.min(a,b);
    console.log('Меньшее из чисел ' + n);
}
min();
function max () {
    let x = Math.max(a,b);
    console.log('Большее из чисел ' + x);
}
max();
//Task 4
console.log ('Task 4');
function arr(f,g) {
    var mas = [];
    for (let j = f; j<=g; j++) {
        mas.push(j);
    }
    console.log(mas);
}
var f = +prompt('Введите начальный элемент массива');
var g = +prompt('Введите конечный элемент массива');
arr(f,g);
//Task 5
console.log ('Task 5');
function isEven(number) {
    if (number%2==0) {
        return true;
    } else {
        return false;
    }
}
var result = isEven(4);
if (result == true) {
    console.log('Четное число');
} else {
    console.log('Нечетное число');
}
//Task 6
console.log ('Task 6');
function createArray(number) {
    var array = [];
        if (isEven(number) == true) {
          return array.push(number);
        }  
}
console.log(createArray(5));
//Task 7
console.log('Task 7');
//Task 11
console.log('Task 11');
function getArray(array) {
    console.log(array[i]);
    i++;

    if (i<array.length) getArray(array);
}
var i = 0;
getArray([1,5,76,4,34,56,98,21,4]);
//Task 12
console.log('Task 12');
function homeWork (fio, group) {
    console.log('Домашняя работа: «Функции»');
    group = prompt('Введите номер группы');
    console.log('Выполнил: студент гр. ' + group);
    fio = prompt('Введите ФИО');
    console.log(fio);
}
homeWork();