/*
  Binary  Search
  --------------

  its a comparison and looping pattern where we use the middle element to compare and neglect the half of the iteration based on comparison.

  time complexity - O( logn )

  it only works on sorted array

  // note🚨
    it only works on SORTED array

*/

// example

function binarySearchIndex(arr, element) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end)/2);
  while (arr[middle] !== element && start < end) {
    if (arr[middle] > element) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end)/2);
  }
  return (arr[middle] === element)? middle : -1;
}

console.log(binarySearchIndex([1,2,3,4,5,6,7,8,9], 0));