const myMap = (array, callback) => {
    const newArr = [];

    array.forEach(el => {
        const newEl = callback(el)
        newArr.push(newEl)
    });

    return newArr;
}

module.exports = myMap
