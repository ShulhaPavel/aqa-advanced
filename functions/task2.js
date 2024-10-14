const verification = (age) => {
    if (age >= 18){
        console.log("Особа повнолітня");
    }else{
        console.log("Особа неповнолітня");
    }
}

verification(6);
verification(26);