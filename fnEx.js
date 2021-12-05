function printNames(str1, str2= "111", str3 = "222"){
    console.log(str1)
    console.log(str2)
    console.log(str3)
}

printNames()
//undefined
printNames("AAA")
//파라미터가 없으면 기본값으로 채움

function calc(a, b, fn){
    console.log("A" + a)
    console.log("B" + b)

    const result = fn(a+1, b+1)
    return result
}

calc(10, 20, (x,y) => x+y)
console.log(calc)

calc(10, 20, (x,y) => x-y)