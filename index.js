// const printDigits = (num) => {
// while (num) {
// let digit = num % 10
//  console.log(digit)
// num = Math.floor(num/10)
// }
// }
// console.log(printDigits(974092))
// "1234"
const printDigits2 = (num) => {
    let strNum = String(num);
    let newDigit = "";
    let i = strNum.length - 1;
    while(i >= 0) {
        newDigit += strNum[i];
        i--;
        console.log("i ", i);
    }
    console.log(newDigit);
    return Number(newDigit);
}

console.log("DONE",printDigits2(1234))