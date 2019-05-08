// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  
//Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)

  
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length)
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr.length - 1)
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let z = x + y;
  cb(z);
}



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let z = x * y;
  cb(z)
}
console.log(multiplyNums(5, 10, ert))
//function ert below shows 50 properly in quokka, but console log above is showing undefined
function ert (g){
  console.log(g)
}

function contains(items, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  
  return (list.includes(items).toString());
};
  console.log(contains('Pencil', items));
  
  // Previous solution I was working on ------

  // item.map(sums)
  // function sums(x){}
  // if (x.item === x.list){
  //   cb(true)
  // }

  //   else {
  //     cb(false)
  //   }
  // }

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  
  //----Previous attempt-----------
//   let newArray = items.filter(reduction)

//   function reduction(xxx) {
//     if (xxx.value !== xxx.value) {
//       return true
//     } 
//     console.log(newArray);


// function test() {
//     if (newArray.value == array.value) {
//     return true
//     }
//   }
  
// }
// }
}


let notDupe = items.filter((item, index) => {
  return items.indexOf(item) >= index;
});

console.log(notDupe);
