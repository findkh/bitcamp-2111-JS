//2020년 카페 분기별 매출
let arr2;
arr2 = [
    [{month:1, total: 90}, {month:2, total: 87}, {month:3, total: 140}],
    [{month:4, total: 120}, {month:5, total: 130}, {month:6, total: 150}],
    [{month:7, total: 180}, {month:8, total: 240}, {month:9, total: 200}],
    [{month:10, total: 180}, {month:11, total: 140}, {month:12, total: 190}]
];

//배열 출력하기
let tmparr2 = []
for (let i = 0; i < arr2.length; i++) {
    tmparr2 = arr2[i]
    console.log(tmparr2)
}

    let sum = 0
    for(let j=0; j<tmparr2.length; j++){
        sum += tmparr2[j].total
        console.log(sum)
    }
//     const tempAvg = (sum/tempArr.length).toFixed(2)
//
//     // console.log(`각 분기별 합계 ${sum}`)
//     // console.log(`각 분기별 평균 ${tempAvg}`)
//     parr.push(parseFloat(tempAvg))
// //  toFixed()를 사용하면 문자로 바뀜
// //  parseFloat 문자를 숫자로 바꿔줌
// }
// console.log(parr)

//
// let salsum = 0
// for (let i = 0; i <arr2.length; i++) {
//     const tmpArr
//     tmpArr= arr2[i];
//     console.log(tmpArr)}
//
//     let tmpArr2
//     for(let j=0; j<tmpArr2.length; j++){
//         salsum += tmpArr2[j]
//     }
//     console.log(salsum)
