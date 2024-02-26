/*

Polyfill for Array.reduce method

*/

/*

 Requirements
 ------------

  reduce method always returns the acumulator value without affecting parent array ✅
  reduce method takes function as argument to use the value on each loop of the array. ✅
  reduce method recieves two parameters ( callback function , accumulator initial value ) ✅ // optional object to which it should refer
  the callback passed in, will be invoked with four arguments ( accumulator, current value of the loop , index of the loop , array which is being looped ) ✅
  the callback passed in, will always return the updated value of accumulator on every loop ✅


//   if third param is not passed, the callback function should always refer to object where it is defined. ( window incase function is defined in toplevel )
//   if third param is passed, the callback function should refer the passed in object ( arrow functions always refer parent object where its defined )


*/

Array.prototype.reducePolyfill = function(callback, accumulator) { // optionalThisReferer
    // if (optionalThisReferer) {
    //   callback = callback.bind(optionalThisReferer);
    // }
    let i=0;
    if (arguments.length === 1 && this.length) {
        accumulator = this[i];
        i++;
    }
    while(i<this.length) {
      accumulator = callback(accumulator, this[i], i, this);
      i++;
    }
    return accumulator;
  }
  
  let arrCount = 20;
  let arr = [];
  for(let i=0;i<arrCount;i++) {
    arr[i] = i;
  }
  
  console.log("actual reduce");
  const t1 = performance.now();
  console.log(arr.reduce((acc, value)=> acc + value));
  const t2 = performance.now();
  console.log((t2 - t1) / 1000);
  
  console.log("polyfill reduce");
  const t3 = performance.now();
  console.log(arr.reducePolyfill((acc, value)=> acc + value));
  const t4 = performance.now();
  console.log((t4 - t3) / 1000);
  
  // console.log(Array.prototype.reducePolyfill.toString());
  