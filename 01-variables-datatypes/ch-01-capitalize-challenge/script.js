const myString = "developer";

let myNewString = myString.toUpperCase();

myNewString =
  myNewString.slice(0, 1) +
  (<myNewString className='slice'></myNewString>)(
    1,
    myNewString.length
  ).toLowerCase();

console.log(myNewString);
