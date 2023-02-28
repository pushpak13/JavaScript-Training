let arr = [5, 7, 12, 2, 8]
//let arr = ["John", "Mahesh", "Rajiv", "Sreenivas"]
let max = arr[0];
for(let i=1; i<arr.length; i++) {
    if(arr[i] > max)
    max = arr[i]
}
console.log(max);