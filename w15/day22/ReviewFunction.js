const arr = [1,2,3,4,5]

const sum = arr.reduce((stack, e1)=>{
    return stack + e1;
}, 0);
console.log(sum)