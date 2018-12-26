let string = "some test string";
//1 1 та останній символ
console.log(string.charAt(0));
console.log(string.substr(-1));
console.log(string[string.length-1]);

//2 перша та остання в верхньому
console.log(string.charAt(0).toUpperCase() + string.slice(1, -1).toLowerCase() + string.slice(-1).toUpperCase());
console.log(string[0].toUpperCase());
console.log(string[string.length - 1].toUpperCase());

//3 положение слова в строке
console.log(string.indexOf('string'));

//4 положение второго пробела
// console.log(string.lastIndexOf(' '));
let secondSpace = string.indexOf(' ', string.indexOf(' ') + 1);
console.log(secondSpace);

//5 с 5 символа длиной 4 букви
console.log(string.substr(4, 4));

//6 с 5 по 9 символи
console.log(string.slice(4, 8));

//7 нова строка без 6 символів останніх
console.log(string.slice(0, -6));

//8 //2016 сложение строк
let a = 20;
let b = 16;
// let string2 = a + b;
// console.log(string2);
console.log(`${a}${b}`);


//9numbers
//9. 1.
console.log(Math.PI.toFixed(2));

//10. 2 max min
let i = 15,
    j = 11,
    c = 16,
    d = 12,
    e = 51,
    f = 12,
    g = 13,
    h = 51;
console.log(Math.min(i, j, c, d, e, f, g, h));
console.log(Math.max(i, j, c, d, e, f, g, h));

//11. 3
let randomNum = Math.random();
let fixedNum = randomNum.toFixed(2);
let floorNum = Math.floor(Math.random() * 20) + 0;
console.log(parseFloat(floorNum));

//12. 4
let x = 0.6 + 0.7;
console.log(parseFloat(x.toFixed(1)));

//13. 5
console.log(parseFloat(parseInt('100$')));