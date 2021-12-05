// 4시 47분 각도를 구해라
var hour = 4
let min = 47

// 시침의 각도
let hourD = (360/12)
//1시간의 이동 각도
console.log(hourD)
// 분침의 각도
const minD = (360/60) * min

//분에 따른 시침의 추가적인 이동
// 한시간에 시침이 이동할수 있는 각도는 30도
const extra = (30/60)*min

hourD += extra

console.log(hourD, minD)
const gap = Math.abs(hourD - minD)
console.log(gap)