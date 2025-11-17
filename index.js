let letter =new Set(["a","b","c"]);
letter.add("d");
letter.add("a");
letter.delete("b");
console.log(letter.has("b"));
// 
const letters=new Set();
const a="hello";
const b="world";
const c="hi";
letters.add(a);
letters.add(b);
letters.add(c);
console.log(letters);
for(const l of letters){
    console.log(l);
}
// size property
console.log(letters.size);
// clear method
letters.clear();
console.log(letters);
// list the set elements
const letter1=new Set(["x","y","z"]);
for(const l of letter1){
    console.log(l);
}
// has method
console.log(letter1.has("y"));
console.log(letter1.has("a"));
// forEach method
letter1.forEach(function(value){
    console.log(value);
})
// value method
const iterator=letter1.values();
for(const l of letter1){
    console.log(l);
}
// key method
const iterator1=letter1.keys();
for(const l of iterator1){
    console.log(l);
}
// entries method
const iterator2=letter1.entries();
for(const l of iterator2){
    console.log(l);
}
// new map method(
let about=new Map([
    ["name","sri"],
    ["age",22],
    ["city","chennai"],
]);
console.log(about);
// set method
about.set("country","india");
about.set("phone no",1234567890);
about.set("email","sri@.gmail.com");
console.log(about);
// get method
console.log(about.get("name"));
console.log(about.get("email"));
// /has method
console.log(about.has("age"));
console.log(about.has("bio"));
// delete method
about.delete("city");
console.log(about);
// size map
console.log(about.size);
// clear map
about.clear();
console.log(about);
// typeof map
console.log(typeof about);
// instanceof map
console.log(about instanceof Map);
// map entries
let details=new Map([
   ["name","sri"],
   ["age",20],
   ["city","chennai"]
])
for(const d of details){
    console.log(d);
}
for(let d of details.keys()){
    console.log(d);
}
// map values
for(let  d of details.values()){
    console.log(d);
}
// object as the key using map
let about1={name:"sri"};
let about2={age:20};
let about3={city:"chennai"};
const info=new Map();
info.set(about1,"pathu");
    info.set(about2,21);
     info.set(about3,"tn");
console.log(info);
console.log(info.get(about1));
console.log(info.get(about2));
console.log(info.get(about3));
for(let i of info){
    console.log(i);
}