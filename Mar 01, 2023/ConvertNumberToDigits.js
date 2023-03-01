//Printing digits in reverse order
let num = 3456;
while(num>0) {
    let digits = num%10;
    num = Math.floor(num/10);
    console.log(digits);
}
//Converting to String and then Mapping to Number
//let str_Num = console.log(String(num).split('').map(Number));

//Printing digits in same order
num = 9845969;
let digits = [];
while (num != 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
}
digits.reverse();
console.log(digits);




