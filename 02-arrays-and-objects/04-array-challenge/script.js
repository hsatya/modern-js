/* Challenge 1
 
 Use some of the array methods that we looked at to mutate the following array to = the expected result below:

```js
const arr = [1, 2, 3, 4, 5];
```

**Expected Result:**

```js
console.log(arr);
// [6, 5, 4, 3, 2, 1, 0];
 
 
 */

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.push(6);
// console.log(arr);
// arr.unshift(0);
// console.log(arr);
// arr.reverse();
// console.log(arr);

/* Challenge 2
 
Combine `arr1` and `arr2` into a new array called `arr3` with the following elements:

```js
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
````

Notice that both `arr1` and `arr2` include the number 5. You will have to find a way to get rid of the extra 5.

**Expected Result:**

```js
console.log(arr3);
// [1,2,3,4,5,6,7,8,9,10]
 
 
 */

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
// arr3.splice(arr3.indexOf(5), 1);
// console.log(arr3);
// const arr4 = arr1.slice(0, arr1.indexOf(5)).concat(arr2);
// console.log(arr4);
// const arr5 = arr1.concat(arr2.slice(1));
// console.log(arr5);
// const arr6 = [...arr1, ...arr2];
// arr6.splice(arr6.indexOf(5), 1);
// console.log(arr6);
