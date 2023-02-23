//Adding new elements at the end of an Array
//push();
let arr_Names = ["Raghav", "Manish", "Amar", "Salman"];
console.log("Array before push op: " + arr_Names);
arr_Names.push("Sunil", "Jacob");
console.log("Array after push op: " + arr_Names);
//Removing elements from the end of an Array
//pop();
arr_Names.pop();
console.log("Array after pop op: " + arr_Names);

//Adding new elements at the start of an Array
//unshift();
let arr_Num = [4, 5, 6, 7];
console.log("Array before unshift op: " +arr_Num);
arr_Num.unshift(2, 3);
console.log("Array after unshift op: " +arr_Num);
//Remove elements from the beginning of an Array
//shift();
arr_Num.shift();
console.log("Array after shift op: " +arr_Num);

//Removing and Adding elements in between Array
//splice();
let num = [2, 4, 6, 8, 10];
console.log("Before splice op:" +num);
num.splice(1, 1);//One number at index[1] is removed
console.log("After splice op:" +num);
num.splice(1, 0, 3,5);// Adds two elements after index[1]
console.log("After splice op:" +num);

//Array Sorting
//sort();
let arr = [2, 5, 8, 1, 4]
console.log("Array before sorting: " + arr);
arr.sort();
console.log("Array after sorting: " + arr);

//Array Filter
let nums = [43, 56, 79, 122, 673, 3980];
let arr_Even = nums.filter(n => n%2===0);
console.log("Array after filter for even: " + arr_Even);

