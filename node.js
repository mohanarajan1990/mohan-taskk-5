function
function addTwonumbers(a,b) {
console.log(a);
console.log(b);
let c = a+b;
console.log(c);
}


addTwonumbers(10,19);
ANONYMS FUNCTION
let addTwonumbers = function (a,b) {
    console.log(a);
     console.log(b);
     let c = a+b;
     return c;
};
let v = addTwonumbers(10,15);
console.log(v);
ARROW FUNCTION
const addTwonumbers = (a,b) => {
   return a+b;
};
let c = addTwonumbers(50,90);
    console.log(c);
IIFE
((a,b) => {
    console.log("mohan",a+b);
})(20,50);
function array odd numbers 
(function (a) {
    for(let i=0; i<a.length; i++) {
        console.log(a[i]);
    }
})([1,3,5,7]);

(function (a) {
    let total = 0;
    for(let i=0; i<a.length; i++) { 
    total += a[i];
    }
        console.log(total);
    
})([1,3,5,7]);

//function in array
let marks =[30, 40, 70, 80, 100];
(function (add) {
    console.log(add);
    let total = 0;
    for (let data of add) {
        total += data;
    }
    console.log(total);
})(marks); 













