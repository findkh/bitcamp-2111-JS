// 숫자 -> 배열 검사 -> -1 나오면 push, 숫자가 나오면 다시 뽑아야해(continue)
// for(초기문; 검사식; 변환식)
// while(검사식){}

const arr = []

while(true){
    //숫자 생성 1부터 45사이의 랜덤값
    const num = parseInt(Math.random()*45+1)

    //검사
    const index = arr.indexOf(num)

    console.log(`NUM :${num}  INDEX: ${index}`)

    if (index >= 0){
        continue
    }
    const newLength = arr.push(num)
    if (newLength === 6){
        break
    }
}
console.log(arr)

