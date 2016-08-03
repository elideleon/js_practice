
function Thing(color, height, length, weight)
{
    this.color = color;
    this.height = height;
    this.length = length;
    this.weight = weight;
    
    Thing.prototype.getColor = function()
    {
        return this.color;
    }
    
    Thing.prototype.setColor = function(color)
    {
        this.color = color;
    }
    
     Thing.prototype.getHeight = function()
    {
        return this.Height;
    }
     
      Thing.prototype.setHeight = function(height)
    {
        this.height = height;
    }
      
     Thing.prototype.getLength = function()
    {
        return this.height;
    }
    
      Thing.prototype.setLength = function(length)
    {
        this.length = length;
    }
      
     Thing.prototype.getWeight = function()
    {
        return this.weight;
    }
    
      Thing.prototype.setWeight = function(weight)
    {
        this.weight = weight;
    }
}

var block = new Thing("black", 1, 1, 2); //block is an object of "class" Thing
var colorOutput = block.getColor();
console.log(colorOutput);
    
block.prop = "exists";
console.log(block.hasOwnProperty("prop")); //results as true
console.log(block.hasOwnProperty("color"));//results in true, since color was made using "this"
console.log(block.hasOwnProperty("getColor"));//results in false since getColor was made using .prototype
console.log(Thing.prototype.hasOwnProperty("getColor"));

for(var eachItem in block)
{
console.log(eachItem);
} //prints out each objects property

console.log(Object.getPrototypeOf(block));


function Otherthing(){
   
}

/*The __proto__ getter function exposes the value of the internal [[Prototype]] of an object. For objects created using an object literal, this value is Object.prototype. For objects created using array literals, this value is Array.prototype. For functions, this value is Function.prototype. For objects created using new fun, where fun is one of the built-in constructor functions provided by JavaScript (Array, Boolean, Date, Number, Object, String, and so on — including new constructors added as JavaScript evolves), this value is always fun.prototype. For objects created using new fun, where fun is a function defined in a script, this value is the value of fun.prototype. (That is, if the constructor didn't return an other object explicitly, or the fun.prototype has been reassigned since the instance was created).*/



var one = new Otherthing();
console.log(Object.getPrototypeOf(one));
console.log(Otherthing.prototype);
console.log('the constructor of one is ' + one.constructor);
console.log(Otherthing.isPrototypeOf(one));


//multiple ways to add an object to an object

//You can add objects directly to friends, like this:

var friends = {
    bill: {},
    steve: {}
};
//Or with the bracket ([]) or dot(.) notation, like this:

friends[bill] = {};
friends.steve = {};
//Or with Object constructors, like this:

var friends = new Object();

friends.bill = new Object();
friends.steve = new Object();



