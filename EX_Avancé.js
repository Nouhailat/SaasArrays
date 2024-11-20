// exercice 21
const n=[1,2,3,4,5]
 const redu=n.reduce((accu,curren)=> accu + curren);
console.log(redu)
// exercice 22
tableau=[
    {title:"atomic habits",author:"jack",year:2022},
    {title:"the 7 habits",author:"stephen",year:2021},
    {title:"power of now",author:"steph",year:2023},
]
console.log(tableau[0].title)
// exercice 23 
const Obj1={
    name:"lili",
    age:25,
}
const Obj2={
   city:"paris",
   job:"developer"
    }
const ojbT={...Obj1,...Obj2}
console.log(ojbT)
// exercice 24
p={
    name:"lili",
    age:25,
    country:"morocco"
}
names=[]
for (const key in p) {
    names.push(key)
    }
    console.log(names)
    // exercice 25
