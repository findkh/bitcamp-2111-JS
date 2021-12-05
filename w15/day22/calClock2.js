
function calcTotal(hourValue, minValue){
    //시침의 각도 구하는 함수 --> 입력시:12 출력:각도
//함수의 선언문
    function calcHour(hour){
        const result = (360/12)* (hour%12)
        return result
    }

//분침의 각도 구하는 함수
//함수를 변수처럼 만들 수 있다
// const calcMin = function (min){}
//아래는 화살표 함수
// const calcMin = min => {
//     return (360/60)/min
// } 줄여 쓰기
    const calcMin = min => (360/60) * min

//분침에 시침의 이동 각도를 구하는 함수
    function getExtra(min){
        return ((360/12)/60) * min
    }

   const result = Math.abs((calcHour(hourValue)+getExtra(minValue))-calcMin(minValue))

    return result > 180 ? 360 - result : result

}


console.log(calcTotal(12,38))