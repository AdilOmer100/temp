const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

writeFileSync(
    './content/result-syncc.txt', 
    `Here is the result is it new : ${first} ${second}`, 'utf8',
    {flag: 'a'}
);

console.log('done with this task');
console.log('starting the next one');

// console.log(first, second);
// writeFileSync(
//     './content/result-sync.txt', 
//     `here is the results : ${first}, ${second},`, 
//     {flag: 'a'}
//     )