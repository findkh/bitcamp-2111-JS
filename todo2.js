function outer(){

    let arr = [] //내부 변수 arr, 외부에서 접근이 안된다.
    let idx = 0

    function add(todo){ //문지기를 통해서 arr에 접근할 수 있다
        todo.idx = idx++
        arr.push(todo)
    }

    function removeTodo(num){
        console.log("remove Todo...")

        const result = arr.filter(todo =>todo.idx !== num)

        arr = result
    }

    function  getTodo(inx){
        console.log("get Todo...")
    }

    function getAll(){
        return arr
    }
    function changeAll(){
        for (let i = 0; i < arr.length; i++) {
            arr[i].complete = !arr[i].complete //f->t/ t->f
        }
    }

    const obj = {add, removeTodo, getTodo, getAll, changeAll}
    //add라는 키값에 add라는 function
    return obj

}