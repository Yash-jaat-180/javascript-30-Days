import _ from 'lodash'

const array = [1,3,3,4,4,5];

const uniqueArray = _.uniq(array);
console.log(uniqueArray);

const numbers = []

for(let i = 0; i <= 10; i++){
    numbers.push(i);
}
console.log(numbers);

const evenNums = _.filter(numbers, num => num % 2 === 0);
console.log(evenNums);

const str = 'Assalamu Alaikum';
const toArray = _.toArray(str);
console.log(toArray);