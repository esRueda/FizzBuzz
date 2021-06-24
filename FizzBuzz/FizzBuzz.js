//FizzBuzz program.
// To obtain the multiples of 3 and 5 I will be using the modulus operation "%". This operation performs a division of a / b and returns the remainder.
// When the remainder is 0 , it means the number a is multiple of b.
var numb3 = 3;
var numb5 = 5;
function FizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % numb3 === 0 && i % numb5 === 0) { //I check if the number "i" is a multiple of both 3 and 5, if true it will type "FizzBuzz" in console. If not it will go to the next else if.
            console.log("FizzBuzz");
        }
        else if (i % numb3 === 0) { //If the number "i" is multiple of 3, we print "Fizz" in console.
            console.log("Fizz");
        }
        else if (i % numb5 === 0) { //If the number "i" is multiple of 5, we print "Buzz" in console.
            console.log("Buzz");
        }
        else { //If none of the previous conditions return true, we print the value of "i" in the console. 
            console.log(i);
        }
    }
}
FizzBuzz();
