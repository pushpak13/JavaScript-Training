//Date formats
//ISO Format:
//1.YYYY-MM-DD
let date = new Date("2019-08-15");
console.log(date);
//2.YYYY-MM
date = new Date("2019-08");
console.log(date);
//3.YYYY
date = new Date("2019");
console.log(date);
//ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ)

//Short Dates
//MM/DD/YYYY
//Some browsers try to guess format and return date accordingly
date = new Date("10/23/2018");
console.log(date);//2018-10-22T18:30:00.000Z

//Long Dates
//MMM DD YYYY or DD MMM YYYY
//Month can be written in full or abbreviated
date = new Date("Mar 21 2017");
console.log(date);//2017-03-20T18:30:00.000Z