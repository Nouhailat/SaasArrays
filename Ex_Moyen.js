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
for (let i= 0; i < n.length; i++) {
    console.log(n[i*2])
    
}





