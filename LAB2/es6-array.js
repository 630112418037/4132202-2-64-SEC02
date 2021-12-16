let cars =["Toyota ","Honda","Mazda"];
let fruits =[];
fruits [0]="Apple";
fruits [3]="Mango";
let rname = new Array("Aum","john","James");
console.log(rname);

let popCar = cars.pop();
console.log(popCar);
console.log(cars);

cars.unshift("Kubota");
console.log(cars);
cars.shift();
console.log(cars);

cars.splice(1,0,"Honda","KUbota");
console.log(cars);

const carSlide = cars.slice(1,2);
console.log(carSlide);

const newArr = cars.concat(rname);
console.log(newArr);
const newArr2 =[...cars,...rname];
console.log(newArr2);

console.log(newArr.toString());

//itteration
let text ="";
for(value of rname){
    text += value + ":";
}
console.log(text);

const number = [10,20,30];
number.forEach(addNum);

function addNum(value, index, arrey){
       console.log(value +2);
}

const ns = number.map(addNumMap);
console.log(ns);
function addNumMap(value){
    return value *2
}

const over10 = number.filter(over10fn);
console.log(over10);
function over10fn(value) {
    return value > 10;
}

const reOver10 = number.reduce(over10fn);
console.log(reOver10);

const everOver10 = number.every(over10fn);
console.log(everOver10);
const someOver10 = number.some(over10fn);
console.log(someOver10);

let resFind = number.find(over10fn);
console.log(resFind);
let resFindIndex = number.indexOf(over10fn);
console.log(resFindIndex);

let alphab = Array.from("ABCDeFG021");
console.log(alphab);
