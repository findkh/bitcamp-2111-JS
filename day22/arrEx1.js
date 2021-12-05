//const 내용을 고정하는게 아니라 리모컨을 고정함/ 원래 가지고 있는 값을 바꿀 수 없다는 것
//추가나 삭제는 괜찮음

const arr = ['타노스', '아이언맨', '블랙위도우']
// console.log(arr.length)
// 배열의 길이

//맨 마지막에 넣고 싶을 때
const changedLength = arr.push("블랙팬서")
// console.log(arr)
//배열 앞에 항목 추가하기 un

//indexof -> 배열 안 항목의 인덱스 찾기
// 배열에 없는걸 찾으면 -1이 나옴

// console.log(arr.indexOf('캡틴아메리카'))

//splice 인덱스 위치에 있는 항목 제거하기
console.log(arr)
arr.splice(1,1)
console.log(arr)

// 배열돌리기
//break는 아래로 빠지고 continue는 위로 빠진다
for(let i = 0; i < arr.length; i++){
    if(arr[i] === '블랙위도우'){
        continue;
    }
    console.log(i)
    console.log(arr[i])
    // if(arr[i] === '블랙위도우'){
    //     break;
    // }
}
console.log('-----------------')
