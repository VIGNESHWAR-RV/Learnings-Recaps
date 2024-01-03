/*

Bubble Sort - bubbling of higher values to the last
-----------
  type of sort where higher values are moved ( swapped ) to the last, eventully making the entire array sorted.

*/


function bubbleSort(arr) {
  
  for(let i=0; i<arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j+1]) {
        // let temp = arr[j];
        // arr[j] = arr[j+1];
        // arr[j+1] = temp;
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
      console.log("iterations");
    }
  }
  return arr;
}

console.log(bubbleSort([4,6,3,2,8,10,15,13,11]));