function LetterChanges(str) {

    var converted = str.replace(/[a-z0-9]/gi, function(char){
        return (char == 'z' || char == 'Z') ? 'a' : String.fromCharCode(char.charCodeAt()+1);
    });

    var capitalized = converted.replace(/[aeiou]/ig, function(vowel){
        return vowel.toUpperCase();
    });
    console.log(capitalized);

}

// keep this function call here
LetterChanges("fun times!");
