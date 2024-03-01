const readline = require('readline');

console.log('Hello World');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Hello World');

rl.question('Enter your name: ', (name) => {
    console.log(`Hello, ${name}!`);
    rl.close();
});