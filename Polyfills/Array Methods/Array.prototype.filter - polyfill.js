/*

Polyfill for Array.filter method

*/

/*

 Requirements
 ------------

  filter method always returns the new array without affecting parent array ✅
  filter method takes function as argument to filter the elements on each loop of the array. ✅
  filter method recieves two parameters ( callback function ,  optional object to which it should refer ) ✅
  the callback passed in, will be invoked with three arguments ( value of the loop , index of the loop , array which is being looped ) ✅
  if second param is not passed, the callback function should always refer to object where it is defined. ( window incase function is defined in toplevel ) ✅
  if second param is passed, the callback function should refer the passed in object ( arrow functions always refer parent object where its defined ) ✅


*/

Array.prototype.filterPolyfill = function(callback, optionalThisReferer) {
  var filteredArr = [];
  if (optionalThisReferer) {
    callback = callback.bind(optionalThisReferer);
  }
  for (let i=0; i<this.length; i++) {
    if (callback(this[i], i, this)) {
      filteredArr.push(this[i]);
    }
  }
  return filteredArr;
}
  
  let arrCount = 20;
  let arr = [];
  for(let i=0;i<arrCount;i++) {
    arr[i] = i+1;
  }
  
  const t1 = performance.now();
  console.log(arr.filter((value, index)=> value%2 === 0));
  const t2 = performance.now();
  console.log((t2 - t1) / 1000);
  
  const t3 = performance.now();
  console.log(arr.filterPolyfill((value, index)=> value%2 === 0));
  const t4 = performance.now();
  console.log((t4 - t3) / 1000);
  