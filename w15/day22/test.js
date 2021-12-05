//도넛 모형이 있고 반지름 2개 제공
// 해당 도형의 넓이
// 원 r1의 넓이 - r2의 넓이

// 주어진 데이터 : 변경될 가능성이 없어서 const 사용
const r1 = 10
const r2 = 20

// 두원의 넓이를 구해야 함 - 연산
const numr1 = Math.pow(r1,2)*Math.PI
const numr2 = Math.pow(r2,2)*Math.PI
//반지름의 제곱 * 파이

// 두 원의 넓이의 차이
let gap = numr1-numr2



// if 쓰기
// if(gap < 0){
//     gap = gap* -1}

// 삼항연산자
gap = gap<0 ? gap * -1 : gap

//console.log("이 도형의 넓이는 "+ gap)
console.log(`이 도형의 넓이는 ${gap.toFixed(2)} 입니다`)

//toFixed(소수점자리)
// Math.PI 파이 값
// Math.pow(2,4) 2의 4제곱