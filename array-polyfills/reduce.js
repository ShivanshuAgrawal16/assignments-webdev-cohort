Array.prototype.reduceV2 = function (fn, val) {
  let start = 0;
  if (typeof val === "undefined") {
    val = this[0];
    start = 1;
  }
  for (let i = start; i < this.length; i++) {
    if (Object.keys(this).includes(String(i))) {
      val = fn(val, this[i], i, this);
    }
  }
  return val;
};

// Example
const arr = [1, 2, 3];
const newArr = arr.reduceV2((sum, e) => e + sum, 0);

console.log(newArr);
