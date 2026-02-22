Array.prototype.mapV2 = function (fn, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (Object.keys(this).includes(String(i))) {
      result.push(fn(this[i], thisArg, i, this));
    }
  }
  return result;
};

// Example
const arr = [1, 2, 3];
const newArr = arr.mapV2((e) => e * 2);
console.log(newArr);
