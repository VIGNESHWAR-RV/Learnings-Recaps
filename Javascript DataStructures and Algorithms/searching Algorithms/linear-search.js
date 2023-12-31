/*
  Linear Search

  It is a basic kind of searching where the given entire list is looped to find the matching element

  time complexity - O(n)

  javascript methods that use linear search algorithm

  - find
  - findIndex
  - indexOf
  - includes

*/

// example

function linearSearchIndex(arr, element) {
  for(let i=0; i<arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearchIndex([4,3,5,6,8,2], 6));