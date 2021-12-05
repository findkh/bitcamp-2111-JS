const readLine = require('readline-sync')
const {prompt} = require("readline-sync");
//예외 처리

 try{

 }catch(e){

 }

console.log("1피트당 샷시의 가격은 얼마입니까?")
const perFeet = parseFloat(readLine.prompt())


console.log("가로 길이는 얼마 입니까? cm")
const width = parseInt(readLine.prompt())

console.log("세로 길이는 얼마 입니까? cm")
const height = parseInt(readLine.prompt())

// 창문 -> 가로 *2, 세로*2 -> 전체 샷시 길이
const totalLength = (width*2) + (height*2)

// 길이(cm) -> ft
const totalFeet = Math.round(totalLength / 30.48)
// Math.round(totalFeet) : 반올림
// Math.ceil(totalFeet) : 올림
// Math.floor(totalFeet) : 버림


// 가격 계산
const totalPay = totalFeet * perFeet


console.log(`총 ${totalPay} 달러입니다`)