//Creating date objects in different ways
//To get Current date
/*var date = new Date();
console.log(date);
//To display date in string
console.log(date.toString());
//To display date in toDateString
console.log(date.toDateString());

//From date string
date = new Date("2023-02-24");
console.log(date);

//From year, month,day,....
date = new Date(2023, 02, 24, 11, 35, 24);
console.log(date);
//Adds overflow to next year when 12 is passed as a month bcoz Javascript counts month from 0 to 11
//i,e Jan=0, Dec=11
date = new Date(2019, 12, 15, 10, 23, 20);
console.log(date);//2020-01-15T04:53:20.000Z
//6 numbers specify (year, month, day, hours, minutes, seconds)
//5 numbers specify (year, month, day, hours, minutes)
//4 numbers specify (year, month, day, hours)
//3 numbers specify (year, month, day)
//2 numbers specify (year, month)
//## You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
date = new Date(2019);
console.log(date);//1970-01-01T00:00:02.019Z */

//Date Get Methods
//getFullYear()
date = new Date("2002-02-18");
console.log(date.getFullYear());//2002

//getMonth(): Returns month as a number(0-11)
date = new Date("2002-02-18");
console.log(date.getMonth());//1

//getDate()
date = new Date("2002-02-18");
console.log(date.getDate());//18

//getHours()
date = new Date("2002-02-18");
console.log(date.getHours());//5

//getMinutes
date = new Date("2002-02-18");
console.log(date.getMinutes()); //30

//getSeconds
date = new Date("2002-02-18");
console.log(date.getSeconds()); //0

//getMilliseconds()
date = new Date("2002-02-18");
console.log(date.getMilliseconds()); //0

//getDay():returns the weekday of a date as a number (0-6).
date = new Date("2002-02-18");
console.log(date.getDay());//1

//getTime():returns the number of milliseconds since January 1, 1970
date = new Date("2002-02-18");
console.log(date.getTime());

//Date.now():returns the number of milliseconds since January 1, 1970.
date = Date.now();
console.log(date);
