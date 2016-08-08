function FirstReverse(str) {

    var newString = str.split("").reverse().join("");

    console.log(newString);
    return newString;

}

FirstReverse("ABCDEFGHIJKLMNOPQRSTUV");
