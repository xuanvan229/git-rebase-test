const add = x => y => x + y;

const main = () => {
    console.log(add(1)(2));
    const newArray = createArray(10);
}

const mukti = x => y => x * y;

const createArray = (total) => new Array(total).fill(0);