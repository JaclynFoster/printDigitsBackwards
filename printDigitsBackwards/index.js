const printDigits = (num) => {
while (num) {
let digit = num % 10
 console.log(digit)
num = Math.floor(num/10)
}
}
console.log(printDigits(974092))