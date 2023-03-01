//For two digit numbers(0 to 99)
//Using if-else statement
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
        else {
            return ones[Math.floor(num/100)] + " hundred " + "and " + tens[num%100]
        }
}
let input = number(28);
console.log(input);

//Number to words(0-999)
var ones = ['','one','two','three','four','five','six','seven','eight','nine'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    function convert_hundreds(num) {
        if(num>99) {
        return ones[Math.floor(num/100)] + " hundred " + "and " + convert_tens(num%100);

      } else {
        return convert_tens(num);
      }
    }

    function convert_tens(num) {
        if (num < 10) {
         return ones[num];
        } else if (num >= 10 && num < 20) {
         return teens[num - 10];
        } else {
          return tens[Math.floor(num / 10)] + " " + ones[num % 10];
        }
      
    }
   
    function convert(num) {
        if(num==0) {
        return "zero";
        }
        else {
            return convert_hundreds(num);
        }
        
    }
   
    function number_Words() {
    console.log(convert(234));
    }
number_Words();

  
  

