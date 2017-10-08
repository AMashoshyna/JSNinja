const search = (needle, haystack) => {
    return Reflect.ownKeys(haystack).map(item => {
        if (typeof haystack[item] === 'object') {
            return search(needle, haystack[item])
        }
        return haystack[item] === needle
    }).reduce((current, next) => current || next, false)

}

console.log(search(5, { a: 3, b: 5, c: 9 })) // true

console.log(search("5", { a: 3, b: 5, c: 9 }) )// false

console.log(search(5, { a: 3, b: { u: 8, '5': 'c', s: 5}, c: 9 })) // true

console.log(search(5, { a: 3, b: { u: 8, '5': 'c', s: 7}, c: 9 })) // false

console.log(search(5, { a: [1, 2, 3, 5, 7, 9], c: 8, s: 6 }) )// true

console.log(search(5, { a: [1, 2, { s: 4, c: {u: 5}}, ], s: 9 })) // true