// exercice 11
const elements=[1,2,3,4,5]
for (const element of elements) {
    console.log(element)
    
}
// exercice 12
// const elements1=[1,2,3,4,5,6,7,8,9,10]
// for (const element of elements1) {
//     if (element % 2 === 0) {
//         console.log(element)
//         }
//         }
const numbers=[1,2,3,4,5,6,7,8,9,10]
const filter=numbers.filter(number=> number % 2 === 0)
console.log(filter)
// exercice 13
const a=[1,2,3]
const b=[4,5,6]
const c=a.concat(b)
console.log(c)
// exercice 14
const fruits=["apple","banana","cherry","date"]
fruits.splice(1,1)
console.log(fruits)
// exercice 15
const numero=[5,1,7,2,8]
const max=numero.sort((a,b)=> a - b);
console.log(max)
// exercice 16
const n=[1,2,3,4]
const res=[]
for (let i= 0; i < n.length; i++) {
    res.push(n[i]*2)
       
    
}
console.log(res)
// exercice 17
const car = {
    model: 20,
    Make: "toyota",
    color: "red",
    year: 2002,
};

let counter = 0;

// Parcourir les propriétés de l'objet
for (let key in car) {
    console.log( key);
    counter++;
}

console.log(`Total properties: ${counter}`);




const etudaint={
    name:"john",
    age:20,
    address:{
        street:"street1",
        city:"city1",
        country:"country1",
        },

    
}
 let cont=0
 for (const key in etudaint) {

   console.log(key)

   cont++
 }
 console.log("total keys "+cont)
// exercice 18
const personne={
    name:"john",
    age:20,
    occupation:"hcgygdy"

}
for (const key in personne) {
//    console.log(key+" : "+personne[key])
   console.log(personne[key])
}
// exercice 19
const tabl=[1,2,3,4,5]
let i=0
if (tabl.includes(3)) {
    console.log("existe")
    
}else{
    console.log("no")
}
// EX 20
const per={
    name:"nono",
    age:20,
}
let per1={...per}
per1.name="nouha"
console.log(per1.name)
