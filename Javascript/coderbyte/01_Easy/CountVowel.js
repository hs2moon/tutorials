function VowelCount(str){

    var patt = /[aeiou]/gi;
    var arr = str.match(patt);

    if (arr == null){
        console.log(0);
        return 0;
    }
        console.log(arr);
        return arr.length;

}

VowelCount("All cows eat grass");
