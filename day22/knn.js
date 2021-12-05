const readlineSync = require("readline-sync")

//1.영화 데이터 배열로 만들기(KNN 알고리즘)
// 배열 안에 객체 리터럴을 넣는 것, 결과적으로 다차원 배열과 비슷해짐
const movies = [
    {action:12, kiss:2, category:'A'},
    {action:2, kiss:14, category:'M'},
    {action:7, kiss:2, category:'A'},
    {action:6, kiss:15, category:'M'}
]

//2.타겟영화

const actionCut = parseInt(readlineSync.question("Action COUNT"))
const kissCut = parseInt(readlineSync.question("Kiss COUNT"))

const target = {actionCut:9, kissCut:3}

//3.sort = 람다식
movies.sort((a,b) =>{
    const disA = Math.sqrt(Math.pow(a.action - target.action,2) +
        Math.pow(a.kiss - target.kiss,2))
    const disB = Math.sqrt(Math.pow(b.action - target.action,2) +
        Math.pow(b.kiss - target.kiss,2))

    return disA-disB > 0 ? 1:-1
})

console.log(movies)

const knum = 3
const result = {actionCount:0, kissCount:0 }

for (let i = 0; i < knum; i++) {
    const movie = movies[i]
    if(movie.category === 'A'){
        result.actionCount += 1
    }else if(movie.category === 'M'){
        result.kissCount += 1
    }
}
console.log(result)

const str = result.actionCount > result.kissCount ? "액션" : "멜로"
console.log(`이 영화는 ${str} 영화 인 것 같습니다`)