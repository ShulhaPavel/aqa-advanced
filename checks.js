function reverseString(str) {
    
    let a = str.length;
    console.log(a);
    for (let i = a - 1; i >= 0; i--) {
        return str.split('').reverse().join('');
        // console.log(str[i]);
    }
    return str;
}

export default reverseString;
console.log(reverseString("Hello Hillel"));


// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("Hello&Hillel"));