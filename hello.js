// require('es5-shim');
const queryString = require('query-string')

let data = {
  a: 1,
  b: 2,
  c: "hello 3"
};

var helloooo = () => {
  console.log('hellllo')
}

print(queryString.stringify(data));
