String.prototype.toJadenCase = function () {
  const array = this.split(" ");
  const newArray = array.map((e) => e.charAt(0).toUpperCase() + e.substr(1));
  return newArray.join(" ");
};
