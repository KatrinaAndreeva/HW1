let string = "some test string";
//1 та останній символ
console.log(string.charAt(0));
console.log(string.substr(-1));

// перша та остання в верхньому
console.log(string.charAt(0).toUpperCase() + string.slice(1, -1).toLowerCase() + string.slice(-1).toUpperCase());

// положение слова в строке
console.log(string.indexOf('string'));

//положение второго пробела
console.log(string.lastIndexOf(' '));

// с 5 символа длиной 4 букви
console.log(string.substr(5, 4));

// с 5 по 9 символи
console.log(string.slice(5, 9));

// нова строка без 6 символів останніх
console.log(string.slice(0, -6));

// //2016 сложение строк
let a = '20';
let b = '16';
let string2 = a + b;
console.log(string2);


//numbers
//1.
console.log(Math.PI.toFixed(2));

//2 max min
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

//3
let randomNum = Math.random();
console.log(randomNum.toFixed(2));
console.log(Math.floor(Math.random() * 20) + 0);

//4
let x = 0.6 + 0.7;
console.log(x.toFixed(1));

//5
console.log(parseInt('100$'));