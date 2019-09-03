
//import { arrayTypeAnnotation } from "@babel/types";

const paavo = {
    name: "paavo poutiainen",
    age: 28,
    education: "highschool",
    lempinimi: "Pavetsui",
    greet: function(){
        console.log("hello, my name is", this.name);
    },
    doAddition: function(a, b){
        console.log(a + b);
    }
}

paavo.doAddition(3, 7);

const refToAddition = paavo.doAddition
refToAddition(13, 14);

paavo.greet();
paavo.greet = function(){
    console.log("eipäs kun", this.lempinimi)
}
paavo.greet();

paavo.growOlder = function(){
    this.age += 1;
}

paavo.growOlder();
console.log(paavo.age);


