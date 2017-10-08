
const compose = function(...args) {
    args = args.reverse()
    const  indexOfFunc = args.findIndex(item => (typeof item === 'function'))
    let funcs = args.slice(indexOfFunc, args.length)
    let allArgs = args.slice(0, indexOfFunc)
   return funcs.reduce((acc, fn) =>{ 
      return [fn.apply(this, acc)]
    },
       allArgs)[0]
}

const func1 = (arg) => arg.toUpperCase()
const func2 = arg => arg + 'qqq'
const func3 = (...arg) =>  arg.join('qwe')

console.log(compose(func1, func2, func3, 'srt3', 'str1', 'str4'))


const toUpper = x => x.toUpperCase();
const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName;
compose(toUpper, classyGreeting)('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
// Эквивалентно вызову toUpper(classyGreeting('James', 'Bond'));