const handleEven = (n) => {
    return n % 2 === 0;
    // if(n % 2 === 0){
    //     console.log(`${n}: is even`);
    //     return true;
    // }else {
    //     return false;
    // }
}

const handleOdd = (n) => {
    return n % 2 !== 0
//    if(n % 2 !== 0){
//         console.log(`${n}: is odd`);
//         return true;
//     }else{
//         return false;
//     }
}


const handleNum = (callback, callback1, n) => {
    const isNumEven = callback(n);
    const isNumOdd = callback1(n);
    console.log(`The number ${n} is an even number: ${isNumEven}.`);
    console.log(`The number ${n} is an odd number: ${isNumOdd}.`);
}


// console.log(handleEven(6))
// console.log(handleOdd(5))
handleNum(handleEven, handleOdd, 6)