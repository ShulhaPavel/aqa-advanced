const number = 6

console.log("For")
for (let i=1; i<=10; i++){
 let result = i * number;
 console.log (` ${i}  *  ${number} =  ${result}`);
}

console.log("While")
let i = 1
while (i <= 10){
    let result = i * number;
    console.log(` ${i}  *  ${number} =  ${result}`);
    i++;
}