// type that only used in typescript
// 1. unkown
// - use when we don't know the type

let c : unknown;

let d = c + 1 // error
// check & do somthing
if (typeof c === 'number') {
  let b = c + 1
}

if (typeof c === 'string') {
  let b = c.toUpperCase()
}

// 2. void
// - function when nothing return

function hello() {
  console.log('x')
}
const e = hello()
e.toUpperCase() // error

// 3. never
// - function when never return (eg. execption)
function error():never {
  throw new Error("xxx")
}


