Array.prototype.flatV2 = function (depth = 1) {
  let result = [];
  this.forEach((e) => {
    if (Array.isArray(e) && depth > 0) {
      result.push(...e.flatV2(depth - 1));
    } else {
      result.push(e);
    }
  });

  return result;
};

//example
const arr = [1, [2, [3, 4]], 5];
console.log(arr.flatV2(1));
console.log(arr.flatV2(2));
