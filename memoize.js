const memoize = (fn) => {
    const calls = new Set()
    const callResults = {}
    return (...args) => {
        let argsString = args + ''
       if(calls.has(argsString)) {
            return callResults[args]
       }
        let returnValue = fn.apply(null, args)
        calls.add(argsString)
        callResults[argsString] = returnValue
        return returnValue
    }
}


function foo(s) { console.log('called'); return s; }
const memoizedFoo = memoize(foo);
console.log(memoizedFoo(4));
// Вывод:
// called
// 4
console.log(memoizedFoo(5));
// Вывод:
// called
// 5
console.log(memoizedFoo(4));
// Вывод:
// 4
