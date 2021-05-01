const serializeObject = (object) => Object.keys(object).reduce((acc, cur) => (
  [...acc, `${cur}=${object[cur]}`]
), []).join('&');

const createArrayRangeByNumber = (length, referenceNumber, minValue, maxValue) => {
  let quantityPerSide = referenceNumber - Math.trunc(length / 2);
  quantityPerSide = Math.max(quantityPerSide, minValue);
  quantityPerSide = Math.min(quantityPerSide, maxValue - length);

  return Array.from({ length }, (_, i) => i + 1 + quantityPerSide);
};

export {
  serializeObject,
  createArrayRangeByNumber,
};
