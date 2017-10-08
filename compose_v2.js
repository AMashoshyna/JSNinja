
const compose = (...funcs) =>
    (...args) =>
        funcs
            .reverse()
            .reduce(
                (arg, func) => [func.apply(null, arg)],
                args)
            [0]
            

const toUpper = x => x.toUpperCase();
const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName;
console.log(compose(toUpper, classyGreeting)('James', 'Bond')); //=> "THE NAME'S BOND, JAMES BOND"
// Эквивалентно вызову toUpper(classyGreeting('James', 'Bond'));