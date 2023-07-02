// Overloading
// - function have mutiple call signature
type Config = {
  path:string,
  state:object
}
type Push = {
  (path:string) : void
  (config:Config) : void
}

const push : Push = (config) => {
  if (config === "string") {
    console.log(config)
  } else if(config !== "string") {
    console.log(config.paht)
  }
}
