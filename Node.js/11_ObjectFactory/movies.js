//if we put a function that returns following in module, objects don't share the status
//They have their own custom copy that is not shared.
module.exports = function(){
    return{
        favMovie: ""
    }
};