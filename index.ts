console.log('FizzBuzz project.......')

//Instead, set variables to for each fizz, buzz, bang etc...
//as well as whether or not to print number

for (let i = 1; i < 301; i++) {
    let three = "";
    let five = "";
    let seven = "";
    let eleven = "";
    let thirteen = "";
    let printnum = i.toString();
    if (i%3 === 0) {
        three = "Fizz";
        printnum = "";
    }
    if (i%13 === 0) {
        thirteen = "Fezz";
        printnum = "";
    }
    if (i%5 === 0) {
        five = "Buzz";
        printnum = "";
    }
    if (i%7 === 0) {
        seven = "Bang";
        printnum = "";
    }
    if (i%11 === 0) {
        three = "";
        five = "";
        seven = "";
        eleven = "Bong";
        printnum = "";
    }
    if (i%17 === 0) {
        console.log(printnum + eleven + seven + five + thirteen + three)
    } else {
        console.log(printnum + three + thirteen + five + seven + eleven)
    }
}    