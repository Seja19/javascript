/* arrays: *It is a object. 
*It contains collections of multiple elements stored in a single variable. 
* JS arrays are resizeable and it can also store elements of different datatypes
*/

const arr1=[1,2,3,4]
const arr2=new Array(9,8,7,6)

// push:method used to insert an element in an array

console.log(arr1[2]);
arr1.push(8)


//pop: deletes the last element from the array
arr1.pop()


// unshift: adds the element at the beginning of the array
arr2.unshift(1,9)
console.log(arr2);
console.log(typeof arr1);
arr1.join() // join:converts the element into the string
console.log(arr1);
console.log(typeof arr1);

console.log("A ", arr1);
//slice: it returns a piece of array, it doesn't change the original array
const newarr1=arr1.slice(1,3)
console.log("B ", newarr1);
//splice: splice changes the original array by removing, replacing, or adding values and returns the affected values
const newarr2=arr1.splice(0,2)
console.log("C ",newarr2);
console.log(arr1);


