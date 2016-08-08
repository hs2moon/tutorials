function LetterChanges(str) {

    var converted = str.replace(/[a-z]/gi, function(char){
        return (char === 'z'|| char ==='Z' ? 'a': String.fromCharCode(char.charCodeAt()+1));
    });
    console.log(converted);

    var capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel){
        return vowel.toUpperCase();
    });
    console.log(capitalized);
}

LetterChanges("Wow That is perfect!");
