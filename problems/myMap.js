function myMap(array, callback) {
    const newArr = [];
    array.forEach(el => {
        newEl = callback(el)
        newArr.push(newEl)
    });

    return newArr;
}

module.exports = myMap