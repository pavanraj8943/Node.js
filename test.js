console.log("hello world");
const fs = require ('fs');

(function (){
fetch('https://dummyjson.com/products').then((data)=>{
console.log(data);

})
})()
fs.readFile('add.tex', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});

setTimeout(()=>{
    console.log("logitech");
    
},3000)

console.log("Samsung");
