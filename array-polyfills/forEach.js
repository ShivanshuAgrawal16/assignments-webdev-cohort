Array.prototype.forEachV2 = function (fn, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (Object.keys(this).includes(String(i))) {
      fn(this[i], thisArg, i, this);
    }
  }
};

// Example
const arr = [1, 2, 3, 4];
arr.forEachV2((e) => {
  console.log(e);
});
