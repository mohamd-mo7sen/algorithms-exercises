/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

function insertionSort(nums) {
  // code goes here
    for (let i = 1; i < nums.length; i++) {
        let key = nums[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && nums[j] > key) {
            arr[j + 1] = nums[j];
            j = j - 1;
        }
        nums[j + 1] = key;
    }
    return nums;
}

// Usage
let arr = [12, 11, 13, 5, 6];
console.log(insertionSort(arr));  // Output: [5, 6, 11, 12, 13]

// unit tests
// do not modify the below code
test("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
