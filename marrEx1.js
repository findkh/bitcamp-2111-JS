
// 테이블 모양처럼 보이지만, 변수 안에 배열을 담는 변수가 있고, 그 안에 각각의 배열을 담는 변수로 되어 있다
// 2차원 배열은 점프 2번

//2020년 카페 분기별 매출
const arr = [
    [90, 87, 140],
    [120, 130, 150],
    [180, 240, 200],
    [180, 140, 190]
]

//가장 매출이 좋았던 분기
//각 분기 별로 매출 평균을 만든다
const parr = []
console.log('분기별 매출')
for(let i=0; i<arr.length;i++){
    const tempArr = arr[i]
    console.log(tempArr)
    //매출 출력

    let sum = 0 //sum 초기화

    for(let j=0; j<tempArr.length; j++){
        sum += tempArr[j]
    }
    const tempAvg = (sum/tempArr.length).toFixed(2)

    console.log(`각 분기별 합계 ${sum}`)
    console.log(`각 분기별 평균 ${tempAvg}`)
    parr.push(parseFloat(tempAvg))
//  toFixed()를 사용하면 문자로 바뀜
//  parseFloat 문자를 숫자로 바꿔줌
}
    console.log(`분기별 평균 ${parr}`)

//최저 매출 금액 찾기
let min = 0
let period2 = 0
console.log(parr)
for (let k = 0; k< parr.length; k++){
    if(period2[k]<min){
        min = period2
        period2 = k
    }
}
console.log("최소값" + min)
// console.log("최소매출 : "+ (period2+1) + "분기")

// 최고 매출 금액 찾기
let max = 0
let period = 0
for (let i = 0; i < parr.length; i++) {
    if(parr[i]>max){
        max = parr[i]
        period = i
    }
}
console.log("max : "+ max)
console.log("최대매출 : "+ (period+1) + "분기")

