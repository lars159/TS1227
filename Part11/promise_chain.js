let calculate = function (value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + 1);
        }, 0);
    });
}; 

calculate(1)
    .then(calculate)
    .then(calculate)
    .then(calculate)
    .then((result) => console.log(result))

 