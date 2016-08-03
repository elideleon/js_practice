
//USING FOR..IN LOOPS TO DISPLAY OBJECTS WITHIN OBJECTS

//https://medium.com/@prufrock123/js-dot-notation-vs-bracket-notation-797c4e34f01d#.uv7x1cjwl


 


//remember object["key"] == value  ,
//          object.key == value
//          object[key]== value, if key is a variable here.
//          object.key = undefined if key is a variable here. You cant use dot notation with for..in loops

var p = {
    "p1": "value1",
    "p2": "value2",
    "p3": "value3"
};


for (var key in p) {
  if (p.hasOwnProperty(key)) {
    console.log(key + " -> " + p[key]);
  }
}

console.log(p.p1);
console.log(p["p1"]);
console.log(p[p1]);




/*displays

 p1 -> value1
 p2 -> value2
 p3 -> value3 */


var obj = {a:1, b:2, c:3};
    
for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"