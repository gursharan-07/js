const name = "abc";
const n = 50;
console.log(`Hello my name is ${name} and my repo count is ${n}`); //way of writing strings
const g = new String("gursharan");
console.log(g[0]);
console.log(g.length);
console.log(g.toUpperCase());
const anotstr = g.slice(-8, 4); //this starts from back of the string like n->-1,a->-2 and so on
console.log(anotstr);
const arstr = g.substring(-8, 4); //does not have negative index support(main difference b/w substring and slice)
console.log(arstr);
const str1 = g.split("-");
console.log(str1);
