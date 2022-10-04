// arguments object - no longer bound with arrow function
// this keyword - no longer bound with arrow function

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// }

const getFirstName = fullName => fullName.split(' ')[0];

console.log(getFirstName('Khaled Elbahr'));

const multiplier = {
    nums: [1, 2, 3, 4],
    multiplyBy: 2,
    multiply() {
        return this.nums.map(num => this.multiplyBy * num)
    }
}

console.log(multiplier.multiply());