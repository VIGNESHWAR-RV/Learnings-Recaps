/*

Polyfill for Array.map method

*/

Array.prototype.mapPolyfill = function(callback, optionalThisReferer) {
  var mappedArr = [];
  if (optionalThisReferer) {
    callback = callback.bind(optionalThisReferer);
  }
  for (let i=0; i<this.length; i++) {
    mappedArr[i] = (callback(this[i], i, this));
  }
  return mappedArr;
}

let arrCount = 20;
let arr = [];
for(let i=0;i<arrCount;i++) {
  arr[i] = 0;
}

const t1 = performance.now();
arr.map((value, index)=> value + index);
const t2 = performance.now();
console.log((t2 - t1) / 1000);

const t3 = performance.now();
arr.mapPolyfill((value, index)=> value + index);
const t4 = performance.now();
console.log((t4 - t3) / 1000);

// [1].map(function(value, index) {
//   console.log(this);
//   return value + index;
// });
// [1].mapPolyfill(function(value, index) {
//   console.log(this);
//  return  value + index
// });

// console.log(Array.prototype.mapPolyfill.toString());



/*

 Requirements
 ------------

  map method always returns the new array without affecting parent array ✅
  map method takes function as argument to modify the value on each loop of the array. ✅
  map method recieves two parameters ( callback function ,  optional object to which it should refer ) ✅
  the callback passed in, will be invoked with three arguments ( value of the loop , index of the loop , array which is being looped ) ✅
  if second param is not passed, the callback function should always refer to object where it is defined. ( window incase function is defined in toplevel ) ✅
  if second param is passed, the callback function should refer the passed in object ( arrow functions always refer parent object where its defined ) ✅


*/