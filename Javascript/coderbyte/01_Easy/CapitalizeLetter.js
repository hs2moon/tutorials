function LetterCapitalize(str){

    var words = str.split(" ");

    for(var i=0; i < words.length; i++){
        words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
    }
    var answer = words.join(" ");
    console.log(answer);
}
LetterCapitalize("hello world from coderbyte");
