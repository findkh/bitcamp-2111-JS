

function getArea(radius){
    const area = Math.pow(radius,2) * Math.PI
    return area
}

//함수 안에서 함수를 호출 할 수 있다
function getTotal( r1, r2 ){
    return Math.abs(getArea(r1) - getArea(r2))
}


console.log(getTotal(10,20))