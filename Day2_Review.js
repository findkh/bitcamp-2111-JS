const arr = ['나','자바','JS','레고']
//배열을 선언
    console.log(arr) // 배열 출력
    console.log(arr.length) // 배열의 길이 출력
    arr.push('고양이') //배열 뒤에 넣는다
    console.log(arr) //배열출력
    console.log(arr.indexOf('고양이')) //고양이의 인덱스 번호(주소값)를 출력
    console.log(arr.indexOf('수달')) // 배열에 없다면 -1을 나타냄
    arr.splice(1,2) //인덱스 번호 1에서부터 2개를 제거함
    console.log(arr)
    console.log("--------------")

//while문 사용한 로또
const lottoNum = []
while(true){
    const num = parseInt(Math.random()*45+1)
    //1~45까지 숫자를 랜덤하기 num에 넣어줌

    const index = lottoNum.indexOf(num)
    // index에는 랜덤 숫자의 인덱스 번호를 적어줌 (한번도 나오지 않았다면 -1이 나옴)
    console.log(`NUM:${num} INDEX: ${index}`)

    if(index >= 0){
        continue
    }
    //중복을 확인하는 부분으로 인덱스 값이 0보다 크다면 중복되므로
    //continue를 사용해서 다시 뽑도록 함.

    const newLength = lottoNum.push(num)
    if(newLength === 6){
        break
    }
    //6개만 뽑아냄.
}
console.log(lottoNum)
console.log("--------------")


//for문을 사용한 lotto
const lottoarr = []
for (let i = 1; i <=45; i++) {
    lottoarr.push(i)
}
    //lottoarr에 1~45까지의 번호를 채워 넣는다

for (let i = 0; i < 6; i++) {
    const idx = parseInt(Math.random()*lottoarr.length +1)
    console.log(lottoarr.splice(idx,1))
}
    //6개를 뽑는다
    //1~45까지의 숫자를 인덱스 번호로 만든후 1개씩 잘라서 출력