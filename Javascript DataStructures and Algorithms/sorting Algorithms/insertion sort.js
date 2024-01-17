/*
  Insertion sort - inserting the elements at required position

  type of sorting where elements are inserted at required position in order to create sorted array

  merits
  ------
     performs well if array requires sorting when elements are dynamically added to the array.
       ( we can insert elements at any place with just single loop of array ) ( similar to bubble sort );

*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      console.log("Iterations");
      if (arr[i] < arr[j]) {
        if (j === 0 || arr[i] > arr[j - 1]) {
          let [val] = arr.splice(i, 1);
          arr.splice(j, 0, val);
        }
      } else {
        break;
      }
    }
  }
  return arr;
}

// without splice ( splice itself takes O(n) )
function insertionSortV1(arr) {
  for (var i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j >= 0 && currentValue < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

console.log("insertion sort", insertionSortV1([4, 10, 15, 13, 11]));
