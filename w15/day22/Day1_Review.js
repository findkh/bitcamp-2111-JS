//prompot-sync 사용하기
let prompt = require('prompt-sync')();

//1. 사용자에게 숫자를 입력 받는다
let n = prompt('숫자를 입력하세요')

//2. if문을 사용해서 홀수 혹은 짝수 출력
if(parseInt(n)%2 === 0){
    console.log("짝수")
    return
} console.log("홀수")



