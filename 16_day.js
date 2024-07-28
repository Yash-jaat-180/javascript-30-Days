// Activity 1
function factorial(n){
    if(n === 0) return 1;
    else{
        return n * factorial(n - 1);
    }

}

console.log(factorial(3));
console.log(factorial(5));

function fib(n){
    if(n === 0 || n === 1) return n;
    else return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));
console.log(fib(2));
console.log(fib(7));

// Activity 2

function sum(currSum,arr, index){
    if(index === arr.length) return currSum;
    currSum += arr[index];
    return sum(currSum, arr, ++index);
}

let arr = [12, 2 ,4 ,5];
console.log(`Sum of array : ${sum(0, arr, 0)}`);

function maxInArray(maxEle, arr, index){
    if(index === arr.length) return maxEle;
    if(arr[index] > maxEle){
        maxEle = arr[index];
    }
    if(index !== arr.length) return maxInArray(maxEle, arr, ++index);
}

console.log(`Max Element in array : ${maxInArray(arr[0], arr, 0)}`);

// Activity 3

function reverseString(reverseStr, str, index){
    if(index < 0) return reverseStr;
    reverseStr += str[index];
    return reverseString(reverseStr, str, --index);
}
let str = 'pop'
console.log(`Reverse String : ${reverseString('', str, str.length - 1)}`)

let reverseStr = reverseString('', str, str.length - 1)
if(reverseStr === str){
    console.log(`${str} is palindrome`);
}
else{
    console.log(`${str} is not palindrome`)
}

// Activity 4

// let arr1 = arr.toSorted(function(a, b){return a - b})
// console.log(arr1);

// function searchElement(ele, arr, index){
//     if(index === arr.length) return `${ele} not found`;
//     if(arr[index] === ele) return index;
//     return searchElement(ele, arr, ++index);
// }

// console.log(searchElement(12, arr1, 0));

let arr3 = [2,4,5,6,7,9,10];

function binarySearch(arr, s, e, target){
    if(s > e){
        return -1;
    }
    
    let  mid = (s+e)/2;

    if(arr[mid] === target){
        return mid;
    }
    else if(arr[mid] < target){
        return binarySearch(arr, mid+1, e, target);
    }
    else{
        return binarySearch(arr, s, mid-1, target);
    }
}

console.log(binarySearch(arr3, 0, arr3.length-1, 5));


const arr2 = [1,2,2,3,3,3,4,4,4,4];

function countOccurance(target, arr, count, index){
    if(index === arr.length) return `${target} occured ${count} times`;

    if(arr[index] === target){
        count++;
    }
    return countOccurance(target, arr, count, ++index);
}

console.log(countOccurance(4, arr2, 0, 0));

// Activity 5

// I have not done yet binary trees

//TODO: Done after completing the binary trees