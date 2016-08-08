function Palindrome(str){
    var str = str.replace(/[^a-z0-9]+/gi, "").toLowerCase();
    var rev = str.replace(/[^a-z0-9]+/gi, "").split('').reverse().join("");

    console.log(rev);
    console.log(str);

    return (rev === str);
}

Palindrome("A man, a plan, a canal. Panama");
