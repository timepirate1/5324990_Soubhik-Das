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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positiveNumber =0;
    let negativeNumber =0;
    let zero=0;
    let total = arr.length;
    for(let i =0;i<total;i++){
        if(arr[i]==0)   zero++;
        else if(arr[i]>0) positiveNumber++;
        else negativeNumber++;
    }
    const negativeRatio = negativeNumber/total;
    const positiveRatio = positiveNumber/total;
    const zeroRatio = zero/total;
    // let finalAnswer = [positiveRatio,negativeRatio,zeroRatio];
    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
