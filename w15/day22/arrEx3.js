//성적 프로그램

const arr = [54,98,60,30,70,82]

//평균 : 모든 점수의 합(sum) / 개수

let sum = 0
for(let i = 0; i<arr.length; i++){
    sum += arr[i]
}
let avg = (sum/arr.length).toFixed(2)
console.log(`총 합계는 ${sum}`)
console.log(`평균은 ${avg}`)

//최저점수
let min = 101
for(let i=0; i<arr.length; i++){
    const score = arr[i]
    //만일 score가 min보다 작으면 swap(바꿔줌)
    //if나 삼항연산자 사용
    if(score<min){
        min = score
    }
}console.log(`MIN : ${min}`)


//최고점수
let max = -1
for(let i=0; i<arr.length;i++){
    const score = arr[i]
    //만일 score가 max보다 크면 swap(바꿔줌)
    if(score>max){
        max = score
    }
}console.log(`MAX : ${max}`)

let max2
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
    if(arr[i]<arr[j]){
        max2 = arr[i]
    }
    }
}console.log(`MAX : ${max2}`)