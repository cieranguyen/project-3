// jshint esversion : 6
//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({
  length: (stop - start) / step + 1
}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);
//b.)
let bitBatBotOrNot = (n) => {
  let result = "";
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`
  }
  if (n % 7 == 0) {
    result = `${result}Bot`
  } if (n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {
    result = `${result}Not`
  }
  return result;
};
//c.
let findAllbitBatBotOrNots1 = (arr) => {
  let newArr = [];
  arr.map(number => {
    newNumber =  `${number} : ${bitBatBotOrNot(number)}`;
    newArr.push(newNumber);
  });
  return newArr;
};
//d.)
let findAllbitBatBotOrNots2 = (arr) => {
  let newArr = [];
  let newElem;
  for (var i = 0; i < arr.length; i++) {
    newElem = `${arr[i]} : ${bitBatBotOrNot(arr[i])}`;
    newArr.push(newElem);
    }
  return newArr;
};

//e.) for..of loop
let findAllbitBatBotOrNots3 = (arr) => {
  let newArr = [];
  let elem;
for (let elem of arr) {
  elem = `${elem} : ${bitBatBotOrNot(arr)}`;
  newArr.push(elem);
}
return newArr;
}

//f.) foreach method
let findAllbitBatBotOrNots4 = (arr) => {
let newArr = [];
let elem;
arr.forEach(function(elem) {
  elem = `${elem} : ${bitBatBotOrNot(arr)}`;
  newArr.push(elem);
})
return newArr;
}
//X.C for..in loop
let findAllbitBatBotOrNotsXC = (arr) => {
  let newArr = [];
  let elem;
  for (let elem in arr) {
    elem = `${elem} : ${bitBatBotOrNot(arr)}`;
    newArr.push(elem);
  }
  return newArr;
}
