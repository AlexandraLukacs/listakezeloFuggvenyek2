import { emberekLISTA } from "./adat.js";


for (let i = 0; i < adatLISTA.length; i++) {
    const element = emberekLISTA[i];
    console.log(element)
    
}

emberekLISTA.forEach((element, index) => {
    console.log(element)
    console.log(index)
});

const FERFIAK = emberekLISTA.filter(function(ember){
    return !ember.nem
})

console.log(FERFIAK)


const FIATALOK = emberekLISTA.filter(function(ember){
    return ember.kor<20
})

console.log(FIATALOK)

const FERFIAK10FELETT = emberekLISTA.filter((ember)=>{
    return ember.kor>10 && !ember.nem===false
})

emberekLISTA.sort(function(e1,e2){
    return e2.kor-e1.kor
})

console.log(emberekLISTA)


emberekLISTA.sort(function(e1,e2){
    return Math.random()-0.5
})

console.log(emberekLISTA)
