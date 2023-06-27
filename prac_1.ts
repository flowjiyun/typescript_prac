// Alias for type
type Age = number;
type Name = string;
type Player = {
  name : Name
  age? : Age // use optional with ?
}

// Make object with type alias
const jiyun : Player = {
  name : "jiyun",
  age : 10
}

// Set return type of fucntion with type alias

function playerMaker(name:string) : Player {
  return {
    name : name
  }
}

const newPlayerMaker = (name:string) : Player => ({name:name})

const p1 = newPlayerMaker("park")
p1.age = 10;

// Add read-only property to type

const names : readonly string[] = ["1", "2"]

names.push(1) // error

// Make Tuple in typescript

const player : [string, number, boolean] = ["jiyun", 1, true]

// Type any
// - disable typescript protection

const a : any[] = [1, 2, 3, 4]
const b : any = true
a + b // ok

//void
//never
//unkown
