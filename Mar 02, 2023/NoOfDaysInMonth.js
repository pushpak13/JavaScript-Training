//No of days in a month
let getDaysInMonth = function(month, year) {
    //Here Jan is 1 based and Day 0 is the last day in previous month
    return new Date(year, month, 0).getDate();
    //Here Jan is 0 based
    //return new Date(year, month+1, 0).getDate();
}
console.log(getDaysInMonth(2, 2000));