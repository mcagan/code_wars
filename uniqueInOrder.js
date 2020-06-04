var uniqueInOrder = function (iterable) {
  const finalArray = [];
  for (let element of iterable) {
    if (!(finalArray[finalArray.length - 1] === element)) {
      finalArray.push(element);
    }
  }
  return finalArray;
};
