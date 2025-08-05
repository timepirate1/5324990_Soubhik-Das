'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let totalSum = 0;
    let minimumArrayElement = arr[0];
    let maximumArrayElement = arr[0];
    for(let i =0;i<5;i++){
        totalSum +=arr[i];
        minimumArrayElement =Math.min(minimumArrayElement,arr[i]);
        maximumArrayElement =Math.max(maximumArrayElement,arr[i]);
    }
    const minimumSum = totalSum - maximumArrayElement;
    const maximumSum = totalSum - minimumArrayElement;
    console.log(minimumSum, maximumSum);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

