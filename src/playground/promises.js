// resolve | reject for single time

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data');
        // resolve('This will not work');

        reject('Something went wrong!');
    }, 0);
});

console.log('before');

promise
.then((data) => console.log(data))
.catch((error) => console.log(error));
console.log('after');
