//To print numbers from 1 to 10 using while loop
/*let i=1;
while(i<=10)
{
    console.log(i);
    i++;
}*/

//To print digits of a number in reverse order
let num = 25489673;
while(num>0) {
    console.log(num%10);
    num = parseInt(num/10);
}