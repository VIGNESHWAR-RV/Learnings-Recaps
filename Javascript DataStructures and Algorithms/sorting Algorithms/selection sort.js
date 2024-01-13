/*
  Selection Sort - selecting the minimum element

  type of sorting where selecting the minimum element and accumulating such element in the beginning in order to achieve sorted array

*/

function selectionSort(arr) {
  for(let i=0; i<arr.length;i++) {
    let min = i;
    for(let j=i+1;j<arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
      console.log("iterations !");
    }
    if (min !== i) {
      let temp = arr[i]; 
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}


console.log("selection sort", selectionSort([4,10,15,13,11]));
