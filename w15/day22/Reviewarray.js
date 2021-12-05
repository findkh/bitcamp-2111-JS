//배열의 생성
let city = ['서울', '인천', '수원']
console.log(city.length)
//배열이름.length -> 길이

//인덱스로 배열의 항목에 접근하기
console.log(city[0])
console.log(city[0+1])
console.log(city[2])

//배열 끝에서부터 항목 추가하기
let newLength = city.push('강릉')
console.log(newLength)
//push하면 추가된 배열의 개수를 출력한다
console.log(city)

//배열 앞에 항목 추가하기
city.unshift('부산')
console.log(city)

//배열 안 항목의 인덱스 찾기
let pos = city.indexOf('인천')
console.log(pos)

//인덱스 위치에 있는 항목 제거하기
let removeIDX = city.splice(2,1)
//배열 2번지에서 1개를 제거한다
console.log(city)