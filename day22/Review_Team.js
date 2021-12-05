//Function -> 이름, 입력값, 출력, 순서
//1. 정해진 숫자만큼 출력하는 함수
function selected_Number (start, end){
    for(let i=start;i<=end;i++){
        console.log(i)
    }
}
// selected_Number(1,10) //undefined 안뜸
const a = selected_Number(1,10) //undefined 안뜸
console.log(a) //undefined 뜸

console.log("-------------------")

//2. 로또 번호 생성 함수 만들기
const lotto_Num = []
for(let i = 1; i<= 45; i++){
    lotto_Num.push(i)
}//1부터 45까지의 번호를 lotto_Num 배열에 넣는다.
//함수에 생성항 로또 배열을 넣고
function lotto2 (lotto_Num){
    for (let i = 0; i < 6; i++){
//    const idx = 9
        const idx = parseInt(Math.random() * lotto_Num.length)
        console.log(lotto_Num.splice(idx,1))
//    console.log(arr)
    }
}
lotto2(lotto_Num)

console.log("-------------------")

// 3. 배열 주면 Max 값 찾기
const num = [54,302,14,101,95,85]

function find_max(num) {
    let max = -1

    for (let i = 0; i < num.length ; i++) {
        const score = num[i]
        //만일 score 가 max 크면 swap
        if(score > max){
            max = score
        }
    }
    console.log(max)
}
find_max(num)
console.log("-------------------")

// 4. 배열 주면 Min 값 찾기

function find_min(num) {
    let min = 300
    for (let i = 0; i < num.length ; i++) {
        const score = num[i]
        //만일 score 가 max 크면 swap
        if(score < min){
            min = score
        }
    }
    console.log(min)
}
find_min(num)