/*
* Fibonacci is a self executing function that
* compute the next number of fibonacci series
* without any parameters from the outside.
*/

const fibonacci = (() => {
    const state = {fib1: 1, fib2: 0};
    return () => {
        state.fib2 += state.fib1;
        state.fib1 = state.fib2 - state.fib1;
        console.log(state.fib1);
    }
})();

//main scope
const N = 20;
for (let i = 0; i < N; i++) {
    fibonacci();
}
