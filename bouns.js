/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  const init0 = init;
  return {
    increment: function () {
      let initPlus = init + 1;
      return initPlus;
    },
    decrement: function () {
      let initMinus = init - 1;
      return initMinus;
    },
    reset: function () {
      let initReset = init0;
      return initReset;
    },
  };
};

const counter = createCounter(9);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4

console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())