/*const inputCalc = document.querySelector("account"),
    resultCalc = document.querySelector("result");

function input(i) {
    inputCalc.value = inputCalc.value + i;
}

function result() {
    if (eval(inputCalc.value) == undefined) {
        resultCalc.value = "0,00";
        inputCalc.value = "0,00";
    }
    if (eval(inputCalc.value) == Infinity) {
        resultCalc.value = "0,00";
        inputCalc.value = "Dividing by zero is not allowed";
    }
    resultCalc.value = eval(inputCalc.value);
    inputCalc.value = eval(inputCalc.value);
}
function backspace() {
    inputCalc.value = inputCalc.nodeValue.substring(
        0,
        inputCalc.value.length - 1
    );
}
*/
/*
var settings = UA, GB, US,
function findCountry() {
     if (str.indexOf('GB')!== -1) {
           console.log(GB is not allowed)
        }
}
console.log(
    findO(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
    )
);
*/
/*
function reverseNumber(a) {
    var strNumber = "" + a;
    var newNumber = "";
    for (var i = strNumber.length - 1; i >= 0; i--) {
        newNumber = newNumber + strNumber[i];
    }
    return newNumber;
}

var result = reverseNumber(364303);
console.log(result);
*/
/*
function findWord(sentance) {
    var words = sentance.split(" ");
    var counte = 0;
    for (var i = 0; i < words.length; i++) {
        if ("text" == words[i]) {
            counte++;
        }
    }
    return counte;
}
var result = findWord(
    "Lorem Ipsum is simply dummy text of the printing text text text  and typesetting industry. Lorem Ipsum has been the industry's standard"
);
console.log(result);
*/
/*
function largeNumber(b, array) {
    var newArray = [];
    for (let i of array) {
        if (i >= b) newArray.push(i);
    }
    return newArray;
}
console.log(largeNumber(10, [11, 45, 4, 31, 64, 10]));
*/
/*
function bubble_Sort(a) {
    var swapp;
    var n = a.length - 1;
    var x = a;
    do {
        swapp = false;
        for (var i = 0; i < n; i++) {
            if (x[i] < x[i + 1]) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);
    return x;
}

console.log(
    bubble_Sort([
        48, 88888, 687655, 54746, 234212, 23463454, 23534585, 23423542234234242,
        234234234, 322234234, 43, 23, 234, 213,
    ])
);
*/
/*
var obj = { a: 1, b: 2, c: 3 };

console.log(obj["c"]);
console.log(obj.c);
*/
/*
var obj = { Коля: "1000", Вася: "500", Петя: "200" };
var result = +obj.Петя + +obj.Коля;
console.log(result);
*/
/*
var obj = { 1: "пн", 2: "вт", 3: "ср", 4: "чт", 5: "пт", 6: "сб", 7: "нд" };
var day = obj[3];
console.log(day);
*/
/*
var obj = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(obj[1][0]);
*/
/*
var min = 10;
if (min >= 0 && min < +14) {
    alert("one");
}
if (min >= 15 && min < +30) {
    alert("two");
}
if (min >= 31 && min < +45) {
    alert("three");
}
if (min >= 46 && min < +59) {
    alert("four");
}
*/
/*
var num = 3;
if (num == "1") {
    alert("true");
} else {
    alert("false");
}
*/
/*
var num = 2;
if (num == 0 || num == 2) {
    num = num + 7;
} else {
    num = num / 10;
}
console.log(num);
*/
/*
var a = 2;
var b = 5;
if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    alert("true");
} else {
    alert("false");
}
*/
/*
var num = [1, 2, 3, 4];
var num = 1;
if (num == 1) {
    alert("winter");
}
if (num == 2) {
    alert("spring");
}
if (num == 3) {
    alert("summer");
}
if (num == 4) {
    alert("autumn");
}
*/
/*
var day = 20;
if (day >= 1 && day <= +10) {
    alert("one");
}
if (day >= 11 && day <= +20) {
    alert("two");
}
if (day >= 21 && day <= +31) {
    alert("three");
}
*/
/*
var mon = 4;
if (mon >= 1 && mon <= 3) {
    alert("winter");
}
if (mon > 3 && mon <= 6) {
    alert("spring");
}
if (mon > 6 && mon <= 9) {
    alert("summer");
}
if (mon > 9 && mon <= 12) {
    alert("autumn");
}
*/
/*
var result = 1;
var arr = [2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
    result = result * arr[i];
}
alert(result);
*/
/*
var obj = {
    Київ: "Україна",
    Париж: "Франція",
    Рено: "Меган",
};

for (var key in obj) {
    alert(key + " - це " + obj[key] + ".");
}
*/
/*
var i = 1;
while (i <= 100) {
    document.write(i + "<br>");
    i++;
}
*/
/*
var i = 11;
while (i <= 33) {
    document.write(i + "<br>");
    i++;
}
*/
/*
var i = 0;
while (i <= 100) {
    if (i % 2 == 0) {
        document.write(i + "<br>");
    }

    i++;
}
*/
/*
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(10, 100));
*/
/*
var a = 10;
var b = 3;
var c = a / b;
console.log(c);
*/
/*
var a = 10;
var b = 5;
var rest = a % b;
if (rest != 0) {
    alert("Делится с остатком " + rest);
} else {
    alert("Делится, результат деления: " + a / b);
}
*/
/*
console.log(Math.pow(2, 5));
*/
/*
console.log(Math.sqrt(2));
*/
/*
var arr = [2, 3, 4, 23, 5];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    var sum = sum + Math.pow(arr[i], 3);
}
console.log(Math.sqrt(sum));
*/
/*
var a = 379;
var res = Math.sqrt(a);
console.log(res.toFixed());
*/
/*
var a = 587;
var b = Math.sqrt(a);
var res = b;
var c = Math.ceil(b);
var i = Math.floor(res);
console.log(c, i);
*/
/*
var arr = [];
for (i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}
alert(arr);
*/
/*
var a = 1;
var b = 6;
var c = a - b;
console.log(Math.abs(c));
*/
/*
var str = "aaa bbb ccc";
alert(str.substring(4, 7)); //substring(откуда отрезать, докуда отрезать)
alert(str.slice(4, 7)); //slice(откуда отрезать, докуда отрезать
 */
/*
var arr = [12, 15, 20, 25, 59, 79];
var sum = 0;
for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum / arr.length);
*/
/*
var str = "2025-12-31";
var arr = str.split("-");
var newStr = arr[2] + "/" + arr[1] + "/" + arr[0];
console.log(newStr); //получим строку '31/12/2025'
*/
/*
let str = "js";
console.log(str.toUpperCase());
*/
/*
var str = "js";
console.log(str.toLowerCase());
*/
/*
var str = я учу javascript!;
console.log(str.length);
*/
/*
var str = "я учу javascript!";
console.log(str.substring(2, 5));
console.log(str.substring(6, 16));
*/
/*
var str = "Я учу учу Javascript";
console.log(str.indexOf("учу"));
*/
/*
var str = "Я учу учу Javascript";
var n = 10;
var strL = str.length;
if (strL >= n) {
    alert(str.slice(0, n) + "...");
}
*/
/*
var str = "Я учу учу Javascript";
var arr = str.split(" ");
var newStr = arr[0] + "!" + arr[1] + "!" + arr[2] + "!" + arr[3];
console.log(newStr);
*/
/*
var str = "Я учу учу Javascript";
var arr = str.replace(" ", "!");
console.log(arr);
*/
/*
var arr = ["Я", "учу", "учу", "Javascript"];
var str = arr.join(" ");
console.log(str);
*/
/*
var str = "учу учу Javascript";
var arr = str.split(" ");
var suma = " ";
for (var i = 0; i < arr.length; i++) {
    var wordL = arr[i].length;
    var firstL = arr[i].substring(0, 1).toUpperCase();
    var lastL = arr[i].substring(1, wordL);
    var newWord = firstL + lastL + " ";
    suma = suma + newWord;
}
console.log(suma);
*/
/*
var arr = ["a", "b", "c"];
arr.push(1, 2, 3);
console.log(arr);
*/
/*
var arr = ["a", "b", "c", "f", "t"];
arr.reverse();
console.log(arr);
*/
/*
var str = "123456789";
var arr1 = str.split("");
var arr2 = arr1.reverse();
var result = arr2.join("");
console.log(result);
*/
/*
var str = "123456789";
var result = str.split("").reverse().join("");
console.log(result);
*/
/*
let arr = ["a", "b", "c", "d", "e"];
let length = arr.unshift("1", "2");

console.log(length);
*/
/*
var arr = ["1", "2", "3", "4", "5", "6"];
var result = [];

while (arr.length > 0) {
    var first = arr.shift();
    var last = arr.pop();

    var str = first + last;
    result.push(str);
}
result = result.join("-");
console.log(result);
*/
/*
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var result = arr1.concat(arr2);
console.log(result);
*/
/*
var arr = [1, 2, 3];
arr.reverse();
console.log(arr);
*/
/*
var arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);
*/
/*
var arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);
*/
/*
var arr = ["js", "css", "jq"];
var elem = arr.shift();
console.log(elem);
*/
/*
var arr = ["js", "css", "jq"];
var elem = arr.pop();
console.log(elem);
*/
/*
var arr = [1, 2, 3, 4, 5];
var sub = arr.slice(3, 5);
console.log(sub);
*/
/*
var arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);
*/
/*
var arr = [1, 2, 3, 4, 5];
var del = arr.splice(1, 3);

console.log(del);
*/
/*
var arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, "a", "b", "c");
console.log(arr);
*/
/*
var arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, "a", "b");
arr.splice(6, 0, "c");
arr.splice(8, 0, "e");
console.log(arr);
*/
/*
var arr = [3, 4, 1, 2, 7];
arr.sort();
console.log(arr);
*/
/*
var obj = { js: "test", jq: "hello", css: "world" };
console.log(Object.keys(obj));
*/
/*
var str = "123456";
var result = str.split("").reverse().join("");
console.log(result);
*/
/*
var str =
    "http://old.code.mu/tasks/javascript/base/praktika-na-kombinacii-standartnyh-funkcij-javascript.html";
if (str.substring(0, 7) == "http://") {
    alert("Да");
} else {
    alert("Нет");
}
*/
/*
var str = "index.html";
if (str.substr(-5) == ".html") {
    alert("Да");
} else {
    alert("Нет");
}
*/
/*
var num = "1,2,3,4,5,5,5,5,55,,6,7,5,6,5,3,5";
var arr = num.split(",");
var count = 0;

for (i = 0; i < arr.length; i++)
    if (arr[i] == 5) {
        count++;
        alert("i=" + i);
    } else {
        ("no");
    }
console.log(count);
*/
/*
var a = 31;
for (var i = 2; i < a; i++)
    if (a % 2 == 0) {
        alert("true");
    } else {
        alert("false");
    }
*/
/*
var str = "";
for (var i = 0; i < 500; i++) {
    str = str + "x";
    document.write(str + "<br>");
}
*/
/*
for (var i = 1; i <= 100; i++) {
    var str = "";

    for (var j = 1; j <= i; j++) {
        str = str + i;
    }
    document.write(str + "<br>");
}
*/
/*
function getDigits(num) {
    return String(num).split("");
}
function arraySum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }

    return sum;
}
var sum = arraySum(getDigits(123));
alert(sum);
*/
/*
function isNumberlnRange(Digit) {
    if (Digit > 0 && Digit < 10) {
        return true;
    } else {
        return false;
    }
}
var arr = [2, 9, 8, 13, 4, 5];
var res = [];
for (i = 0; i < arr.length; i++) {
    if (isNumberlnRange(arr[i])) {
        res.push(arr[i]);
    }
}
console.log(res);
*/
/*

function getDigitsSum(Digit) {
    return String(Digit).split("");
}
function arraySum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }

    return sum;
}
var sum = arraySum(getDigitsSum(123));
console.log(sum);
*/
/*
function getYears13() {
    for (var i = 1000; i <= 2022; i++) {
        if (arraySum(getDigitsSum(i)) == 13) {
            console.log(i);
        }
    }
}
function getDigitsSum(Digit) {
    return String(Digit).split("");
}
function arraySum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }

    return sum;
}
getYears13();
*/
/*
function isEven(Digit) {
    if (Digit % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(16217));
*/
/*
var Digit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isEven(Digit) {
    if (Digit % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
function getEvenArray(Digits) {
    for (var i = 0; i < Digits.length; i++) {
        if (isEven(Digits[i]) == true) {
            newArr.push(Digits[i]);
        }
    }
}
var newArr = [];
getEvenArray(Digit);
console.log(newArr);
*/
/*
var Digits = [224];
function getDivisors(Digit) {
    for (var i = 1; i < Digit; i++) {
        if (Digit % i == 0) {
            newArr.push(i);
        }
    }
}
var newArr = [];
getDivisors(Digits);
console.log(newArr);
*/
/*
var arr = [1, 2, 3, 4, 5];

last(arr);

function last(arr) {
    document.write(arr.pop() + "<br>"); //выводим последний элемент массива
    
    if (arr.length != 0) {
        last(arr); //это рекурсия
    }
}
*/
/*
arr = [1, 3, 4, 7, 8, 5];
function func(arr) {
    alert(arr[0]);
    arr.splice(0, 1);
    if (arr.lenght > 0) {
        func(arr);
    }
}
console.log(arr);
*/
/*
for (var i = 1; i <= 100; i++) {
    document.write(i + "<br>");
}
console.log();
*/
/*lesson 17*/
/*
var round = 1;
var digit = 459978458595;
function func(digit) {
    round++;
    var arr = String(digit).split("");
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    if (sum > 9) {
        sum = func(sum);
    }
    return sum;
}

var sum = func(digit);
console.log(sum);
console.log(round);
*/
/*lesson18*/
/*
for (var i = 2; i < 100; i += 2) {
    document.write(i + "<br>");
}
*/
/*
var arr = [];
for (var i = 0; i < 10; i++) {
    arr[i] = "x";
}
console.log(arr);
*/
/*
var arr = [];
for (var i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);
*/
/*
var str = [];
for (var i = 0; i < 10; i++) {
    str.push(Math.random().toFixed(2));
}
console.log(str);
*/
/*
var str = [];
for (var i = 1; i < 10; i++) {
    str.push(i);
}
console.log(str);
*/
/*
var arr = [];
for (var i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * 10) + 1);
}
console.log(arr);
*/
/*
var arr = [5, 2, 4, -1, -3, 6, 10, 8, 7, 0, -5, 18, 12];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < 10) {
        console.log(arr[i]);
    }
}
*/
/*
var arr = [5, 2, 4, -1, -3, 6, 10, 8, 7, 0, -5, 18, 12];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
*/
