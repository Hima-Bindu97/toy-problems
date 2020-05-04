const o=new Object()
o.fname="h"
o.lname="b"
console.log(JSON.stringify(o))

const o1={}
o1['fname']="a"
const b="lname"
o1[b]="v"
console.log(o1['lname'])


const o2={
    fname:"k",
    lname:"f",
    greet: function() {
        console.log("hello")
    },
    address:{
        street:"main",
        number:"44"
    }
}
console.log(o2)

const o4=o
o.fname="hima"

console.log(o.fname)

const obj=Object.assign({},o)

function deepcopy(obj){
    const keys=Object.keys(obj);
    const newObject={}
        for(let i=0;i<keys.length;i++){
            const key=keys[i]
            if(typeof obj[key]=='object'){
                newObject[key]=deepcopy(obj[key])
            }
            else{
                newObject[key]=obj[key]
            }
        }
    return newObject;
}
console.log(obj.key)