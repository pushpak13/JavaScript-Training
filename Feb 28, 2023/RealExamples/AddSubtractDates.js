//Formatting Dates
let currentDate = new Date(); //"2023-02-27T18:30:00.000Z";
//To YYYY-MM-DD
console.log(currentDate.toISOString().substring(0, 10));
//console.log(currentDate.split("T")[0]);

//Adding or Subtracting Dates and Formatting 
//let tom_Date = new Date(currentDate);
//tom_Date.setDate(currentDate.getDate() + 1);
//let newDate = new Date(tom_Date);
//console.log(newDate);
let newDate = new Date(currentDate.getTime() + 24*60*60*1000*10);
//newDate = new Date(currentDate.getTime() + 24*60*60*1000*(-1));//Subtracting date 
console.log(newDate.toDateString()); //Fri Mar 10 2023
console.log(newDate.toLocaleDateString()); // 10/3/2023 //default same as (en-GB)
console.log(newDate.toLocaleDateString('en-US')); // 3/10/2023
console.log(newDate.toISOString().substring(0, 10)); // 2023-03-10

