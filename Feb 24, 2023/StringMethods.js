//String slice method
//Extracts part of string based on given starting and ending index
let text = "Playwright JavaScript Training";
console.log(text.slice(0, 10));//Playwright
console.log(text.slice(11, 21));//JavaScript

//String replace method
let sub = "English, Science, Maths";
console.log(sub.replace("English", "Kannada")); //Kannada will replace English

//String Uppercase method
let str = "my name is rahul";
console.log(str.toUpperCase(str));// MY NAME IS RAHUL

//String Lowercase method
str = "Chrome Browser LAUNCHED";
console.log(str.toLowerCase(str)); //chrome browser launched

//String concat method
let str1 = "Hello";
let str2 = " how are you";
console.log(str1.concat(str2));//Hello how are you

//String trim method
//remove white spaces from either ends
str = "Cool   ";
console.log("String length before trim: " +str.length);//7
let newStr = str.trim();
console.log("String length after trim: " +newStr.length);//4
//We can use trimStart() and trimEnd() to trim spaces at the begining and end respectively.

//String split method
//splitting string to array
let info = "[ 'Please', 'join', 'the', 'call' ]";
//split string on ''
console.log(info.split(' '));// [ 'Please', 'join', 'the', 'call' ]