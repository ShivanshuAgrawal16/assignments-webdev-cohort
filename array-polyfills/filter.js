Array.prototype.filterV2 = function (fn, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (Object.keys(this).includes(String(i))) {
      if (fn(this[i])) {
        result.push(this[i]);
      }
    }
  }
  return result;
};

// Example
const arr = [1, 2, 3];
const newArr = arr.filterV2((e) => e % 2 !== 0);
console.log(newArr);
