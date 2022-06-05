// 6.b Find the missing numbers from 1 to 100
function findMissingNumber(arr) {
  const reserveArr = Array(arr[arr.length - 1]);
  const missing = [];

  for (let x = 0; x < arr.length; x++) {
    let index = arr[x];
    reserveArr[index] = true;
  }

  for (let y = arr[0]; y < reserveArr.length; y++) {
    if (reserveArr[y] === undefined) missing.push(y);
  }

  return missing;
}

let numbersB = [
  1, 2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 43,
  44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 61, 62, 63,
  64, 65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
];
console.log(findMissingNumber(numbersB));

// ==========================================

// 6.c return the number which is called more than 1
function findCalledMultiple(arr) {
  const obj = {};
  const multiple = new Set();

  for (let x = 0; x < arr.length; x++) {
    const key = arr[x];
    if (obj[key] === undefined) {
      obj[key] = key;
    } else {
      multiple.add(arr[key]);
    }
  }

  return Array.from(multiple);
}

let numbersC = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 25, 25, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 34, 34, 34,
  35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
  54, 55, 56, 57, 58, 59, 60, 61, 62, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
  72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 83, 83, 84, 85, 86, 87, 88,
  89, 90, 91, 92, 92, 93, 94, 95, 96, 97, 98, 99, 100,
];
console.log(findCalledMultiple(numbersC));

// 6.d
function conversion(arr) {
  const obj = {};

  for (let x = 0; x < arr.length; x++) {
    const splitted = arr[x].split(".");

    if(splitted.length < 3) {
      obj[splitted[0]] = {}
    } else if(splitted.length < 4) {
      obj[splitted[0]][splitted[1]] = {}
    } else if(splitted.length < 5) {
      const a = splitted[0]
      const b = splitted[1]
      const c = splitted[2]
      obj[a][b][c] = arr[x]
    }
  }

  return obj
}

let object_code = [
  "1.",
  "1.1.",
  "1.2.",
  "1.3.",
  "1.4.",
  "1.1.1.",
  "1.1.2.",
  "1.1.3.",
  "1.2.1.",
  "1.2.2.",
  "1.3.1.",
  "1.3.2.",
  "1.3.3.",
  "1.3.4.",
  "1.4.1.",
  "1.4.3.",
];
console.log(conversion(object_code));
