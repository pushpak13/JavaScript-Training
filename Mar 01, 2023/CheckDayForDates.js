//Using Switch statement
let date = new Date("2023-11-26");
let day = date.getDay();
switch(day) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log("Invalid Day");
        break;

}
//Using Array
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
date = new Date("2023-11-26");
 day = days[date.getDay()];
console.log(day);