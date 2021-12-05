
// console.log("lotto.........")
// // 이벤트 처리의 표준 코드
// const btn = document.getElementById("btn")
// //get메서드
// //html문서에서 문자열(btn)과 일치하는 id속성을 가진 요소를 찾아서 이를 나타내는 element객체를 반환한다
// //id 대소문자 구분한다.
// //document.getElementById("btn") : id가 btn인 요소를 선택한다.
//
// console.log(btn)
//
// //콜백함수
// btn.addEventListener("click",(event)=>{
//     //addEventListner()는 document의 특정요소(id,class,tag) event를 동록할 때 사용
//     // 클릭하면 이벤트가 발생한다.
//     console.log(event)
//
//     const target = document.getElementById("resultDiv")
//
//     const balls = makeLottoNum()
//
//     //clear all <h3> tags
//     target.innerHTML=''
//     //innerHTML : 원하는 태그
//
//     let str =''
//     for (const num of balls) {
//         //const tag = document.createElement("h3") //메모리상 h3 태그를 만듦
//         // const textNode = document.createTextNode(num) //글자를 만듦
//         // tag.appendChild(textNode)
//         // target.appendChild(tag)
//         str += `<h3>${num}</h3>`
//         target.innerHTML = str
//     }
// }, false)

    function makeLottoNum(){
            // const lottoNum = [] //배열에 1~45까지의 번호를 넣는다
            // for (let i = 0; i < 45; i++) {
            //     lottoNum.push(i)
            // }
            //
            // let lotto_select = []
            // for (let i = 0; i < 6; i++) { //랜덤 숫자 중 6개를 lotto_select로 보낸다
            //     const idx = parseInt((Math.random()*lottoNum.length)+1)
            //     lotto_select.push(idx)
            // }
            // return lotto_select

        const arr = []

        for (let i = 0; i < 6; i++) {
            const tempNum = parseInt(Math.random()*45)+1
            //arr안에 tempnum이 있다면
            if(arr.indexOf(tempNum) >= 0){
                console.log("중복")
                i--
                continue
            }
            arr.push(tempNum)
        }

        // 정렬
        // arr.sort(function(a,b){
        //     return a - b
        // })
        arr.sort((a,b)=>a -b)

        return arr
}




