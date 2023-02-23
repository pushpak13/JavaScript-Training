//Declaration of an Array
/*let arr_Name = [val1, val2, val3];
let arrayName = new Array();
*/
//Example
let cars = ["Maruti", "Tata", "Toyota", "Benz"];
//length of array
console.log(cars.length);// 4

//Accessing array element by index
console.log(cars[1]);// Tata

//Out of bound array index
console.log(cars[4]); //undefined

//Accessing all array elements
for(let i=0; i<cars.length; i++) {
    console.log(cars[i]);
} 
//OR
for(let n of cars)
console.log(n);


//Adding different types of data in single array
//[String, Number, Object, FunctionObject]
let data = ["John", 7, {lastName: "Samuel"}, function() {
    console.log("Hi John");
}];
console.log(data);
//Fetch data inside function
data[3]();
