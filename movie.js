//1.영화 데이터 배열로 만들기
const movies = [
    {actionscene:10, kisssene:3, category:'A'},
    {actionscene:6, kisssene:1, category:'A'},
    {actionscene:1, kisssene:10, category:'M'},
    {actionscene:10, kisssene:1, category:'A'},
    {actionscene:2, kisssene:4, category:'M'}
]

//2.타겟영화
const target = {actionscene:8, kisssene:1}

//3.sort
//거리 구하는 공식
//루트(x2-x1)제곱 + (y2-y1)제곱
movies.sort((a, b) => {
    const distanceA = Math.sqrt(Math.pow(a.actionscene - target.xpos, 2) +
        Math.pow(a.kisssene - target.ypos, 2))
    const distanceB = Math.sqrt(Math.pow(b.actionscene - target.xpos, 2) +
        Math.pow(b.kisssene - target.ypos, 2))

    return distanceA-distanceB
})

console.log(movies)

