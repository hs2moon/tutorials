function FirstFactorial(num) {
    var factorial = num;
    for(var i=1;i<num;i++){
        factorial *= i;
    }
    console.log(factorial);
    return factorial;
}

FirstFactorial(4);