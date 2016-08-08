function ABCheck(str){
    var pattern = /(a...b|b...a)/

    return pattern.test(str);
}
