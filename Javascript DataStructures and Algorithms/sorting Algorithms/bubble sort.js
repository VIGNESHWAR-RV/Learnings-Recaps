/*

Bubble Sort - bubbling of higher values to the last
-----------
  type of sort where higher values are moved ( swapped ) to the last, eventully making the entire array sorted.

*/

function bubbleSort(arr) {
  
  for(let i=1; i<arr.length; i++) {
    let isNoSwapMade = true; 
    for (let j=0; j<arr.length-i; j++) {
      console.log("iterations");
      if (arr[j] > arr[j+1]) {
        // let temp = arr[j];
        // arr[j] = arr[j+1];
        // arr[j+1] = temp;
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        isNoSwapMade = false;
      }
    }
    if (isNoSwapMade) {
        break;
    }
  }
  return arr;
}

console.log("bubble sort", bubbleSort([4,10,15,13,11]));