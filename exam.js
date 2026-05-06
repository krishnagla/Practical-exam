// Problem 5 : File reader & writer
const fs = require ("fs");

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        if (err) {
            throw err;
        } 
        return; 
    }
});

const data = fs.readFileSync('input.txt', 'utf8');

const lines = data.trim().split(/\r?\n/);
const totalLines = lines.length;

const words = data.trim().split(/\s+/);
const totalWords = words.length;

const output = `Total Lines: ${totalLines}\nTotal Words: ${totalWords}`;


fs.writeFile('output.txt', output, 'utf8', (err) => {
    if(err) {
        throw err;
    }
    console.log('Output written to output.txt');
});