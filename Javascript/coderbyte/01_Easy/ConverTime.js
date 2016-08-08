function TimeConvert(num){
    var hour;
    var minutes;

    hour = Math.floor(num/60);
    minutes = num%60;

    console.log(hour +":"+ minutes);
    return hour +":"+ minutes;

}
TimeConvert(880);
