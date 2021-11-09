// 배열 반복해서 출력하기
let arr = [];

for(let i=1; i<=10; i++) {
    arr.push(i)
}
//배열에 1부터 10까지의 수를 넣음
console.log(arr)

// 배열의 주소값을 랜덤으로 섞음
let random = []
for(let i=0; i<=9; i++) {
    random[i] = parseInt((Math.random() * 10) + 1)
    for(let j=0; j<i;j++){
        if(random[i]===random[j]){i--}
    }
}
console.log(random)





