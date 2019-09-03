console.log(+"10.2abc");
console.log(parseInt("10.2abc"));
console.log(parseFloat("10.2abc"));

/*false, 0, empty strings (""), NaN, null, and undefined all become false.
All other values become true.*/
let f = function (){
    this.a = 1;
    this.b = 2;
}

let o = new f()
console.log(o.b);
//add propperties in f function's prototype
f.prototype.b = 3;
f.prototype.c = 4;



console.log(o.b);
console.log(o.c);
console.log(o.d)
