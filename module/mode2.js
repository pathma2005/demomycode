export function showMessage(msg) {
  console.log("MESSAGE:", msg);
}
// 
import {adding,multi } from "./mod1.js"
console.log("Addition",adding(5,3));
console.log("multi",multi(5,3))
// 
import MyApp,{getuserData,data as da_ta}from "./mod1.js";
const data=getuserData();
console.log(data,da_ta);
MyApp();