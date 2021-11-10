// 시간과 분을 입력 받아서 각도를 계산하는 프로그램
var readlineSync = require("readline-sync")

const strhour = readlineSync.question("hour")
const strmin = readlineSync.question("min")
console.log(strhour + '시'+ strmin + '분')

var numhour = Number(strhour)
var nummin = Number(strmin)
//Number()함수는 문자 자료형을 숫자 자료형으로 변환 시켜 준다
//입력 받은 값을 Number()함수에 넣어서 숫자로 바꿔 준다.

//분침은 360/6 1분당 6도
//시침은 12시간 동안(720분) 360도를 돎
//360/720= 1분당 0.5도
let hour2 = ((numhour*60)+nummin)*0.5
let min2 = nummin*6
console.log(hour2, min2)

let gap2 = Math.abs(hour2-min2)

console.log(gap2)
//음수를 양수로 변환하는 Math.abs()