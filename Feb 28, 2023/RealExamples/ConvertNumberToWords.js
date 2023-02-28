//For two digit numbers(0 to 99)
function number(num) {
    var ones = ['','one','two','three','four','five','six','seven','eight','nine'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
        if(num==0) {
            return "zero";
        } 
        else if(num<10) {
            return ones[num]
        }
        else if(num>=10 && num<20) {
            return teens[num-10]
        }
        else if(num>=20 && num<=99) {
            return tens[Math.floor(num/10)] + " " + ones[num%10]
        }
        
}
let input = number(78);
console.log(input);

