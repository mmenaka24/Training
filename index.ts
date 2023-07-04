console.log('FizzBuzz project.......')

//Instead, set variables to for each fizz, buzz, bang etc...
//as well as whether or not to print number

for (let i = 1; i < 101; i++) {
    let three = ""
    let five = ""
    let seven = ""
    let printnum = i.toString()
    if (i%3 === 0) {
        three = "Fizz"
        printnum = ""
    }
    if (i%5 === 0) {
        five = "Buzz"
        printnum = ""
    }
    if (i%7 === 0) {
        seven = "Bang"
        printnum = ""
    }
    console.log(printnum + three + five + seven)
}