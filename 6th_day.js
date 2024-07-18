// Activity 1
let arr = [1,2,3,4,5,6];
console.log(arr);

console.log(arr[0]);
console.log(arr[arr.length - 1]);

// Activity 2
arr.push(255);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(600);
console.log(arr);

// Activity 3
arr.map((value, index) => {
    arr[index] = value * 2;
})
console.log(arr);

let arr1 = arr.filter((value) => {
    return value >= 10;
})
console.log(arr1);

let  sum = arr.reduce((value, nextNum) => {
    return value + nextNum;
})
console.log(sum);

// Activity 4
for( let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

arr.forEach(element => {
    console.log(element);
});

// Activity 5
let matrix = [[1,2,3], [4,5,6], [7,8,9]];
for( let i = 0; i < matrix.length; i++){
    let rows = "";
    for( let j = 0; j < matrix[i].length; j++){
        rows += `${matrix[i][j]} `;
    }
    console.log(rows);
}

