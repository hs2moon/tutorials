function User(){
    this.name="";
    this.life =100;
    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life += 1;
        console.log(this.name + " gave a life to " + targetPlayer.name);
    }
}

var Kevin = new User();
var Peter = new User();

Peter.name = "Peter";
Kevin.name = "Kevin";
$
Peter.giveLife(Kevin);
console.log("Kevin: "+Kevin.life);

//you can add functions to all objects
User.prototype.uppercut = function uppercut(targetPlayer){
    targetPlayer.life -= 5;
    console.log(this.name + " uppercutted " + targetPlayer.name);
};

Kevin.uppercut(Peter);
console.log("Peter: " + Peter.life);

User.prototype.ultimate = function ultimate(targetPlayer){
    targetPlayer.life -= 60;
    console.log(this.name+" used ultimate skill to " + targetPlayer.name);
};

Peter.ultimate(Kevin);
console.log("Peter: "+Peter.life);
console.log("Kevin: "+Kevin.life);

//also can add properties to all objects
User.prototype.age = 25;
console.log(Peter.age);
console.log(Kevin.age);