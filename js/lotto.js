
console.log("lotto.........")
// 이벤트 처리의 표준 코드
const btn = document.getElementById("btn")
//html문서에서 문자열(btn)과 일치하는 id속성을 가진 요소를 찾아서 이를 나타내는 element객체를 반환한다
//id 대소문자 구분한다.

console.log(btn)

btn.addEventListener("click",(event)=>{
    console.log(event)

    const target = document.getElementById("resultDiv")

    const balls = makeLottoNum()

    //clear all <h3> tags
    target.innerHTML=''

    for (const num of balls) {
        const tag = document.createElement("h3") //메모리상 h3 태그를 만듦
        const textNode = document.createTextNode(num)
        tag.appendChild(textNode)
        target.appendChild(tag)
    }
}, false)

    function makeLottoNum(){
            const lottoNum = [] //배열에 1~45까지의 번호를 넣는다
            for (let i = 0; i < 45; i++) {
                lottoNum.push(i)
            }

            let lotto_select = []
            for (let i = 0; i < 6; i++) { //랜덤 숫자 중 6개를 lotto_select로 보낸다
                const idx = parseInt((Math.random()*lottoNum.length)+1)
                lotto_select.push(idx)
            }
            return lotto_select
}




