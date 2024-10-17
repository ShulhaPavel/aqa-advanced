function operation(n){
    console.log(n);
    if(n <= 0){
        return 0;
    } else{
        return operation(n -1);
    }
}

operation(5)