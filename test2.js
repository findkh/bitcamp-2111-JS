const storeService = (function (){
//모듈패턴을 이용해서 자바의 객체처럼 사용

    let storeArr = []

    function  loadData(url, callback){
        fetch(url)
            .then(  response => response.json())
            //데이터 가져오면 콜백함수를 가지고 뭘 해줘 라고 함
            // 서버에서 데이터를 가져옴
            .then(  data => {
                // 서버에서 추출함
                // console.log(data)
                storeArr = data
                callback(data)
            })
    }

    function getdDataByIndex(index){
        return storeArr[index]
    }

    return{loadData, getdDataByIndex}
})()