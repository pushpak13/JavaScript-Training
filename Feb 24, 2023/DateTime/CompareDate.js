let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(1988, 2, 14);

if (someday > today) {
  text = "Today is before March 14, 1988.";
} else {
  text = "Today is after March 14, 1988.";
}
console.log(text);