//stack-primitive heap:nonprimitve
let name1="abc"
let anothername=name1
anothername="def"
console.log(name1)//here it remains abc
console.log(anothername)//here it changes to def

console.log(0==false)
console.log(null==null)
console.log(undefined==undefined)


let ob1={name:"abc", upi:"defg"}; //xyz012, so here memory addresses are compared thats why false
let ob2=ob1; //xx0011
ob2.name="erg"
console.log(ob2.name) //false //here it changes to erg
console.log(ob1.name)//this also changes to erg