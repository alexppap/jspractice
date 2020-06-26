var str1=['Hello World']; 
var str2=str1; 
console.log(str2[0]); //Hello World 
str1[0]='Hello'; 

console.log(str2[0])


var names = ["ABC", "XYZ", "zoo"];
        var s = names[1];
        names[1] = "cat";
        console.log(s);