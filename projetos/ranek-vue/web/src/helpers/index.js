function serializeObject(object) {
  return Object.keys(object).reduce((acc, cur) => (
    [...acc, `${cur}=${object[cur]}`]
  ), []).join('&');
}

function createArrayRangeByNumber(number, referenceNumber, minValue, maxValue) {
  const length = Math.min(number, maxValue);
  let quantityPerSide = referenceNumber - Math.trunc(length / 2);
  quantityPerSide = Math.max(quantityPerSide, minValue);
  quantityPerSide = Math.min(quantityPerSide, maxValue - length);

  return Array.from({ length }, (_, i) => i + 1 + quantityPerSide);
}

function mapFields({ fields, object, mutation }) {
  return fields.reduce((acc, field) => ({
    ...acc,
    [field]: {
      get() {
        return this.$store.state[object][field];
      },
      set(newValue) {
        this.$store.commit(mutation, { [field]: newValue });
      },
    },
  }), {});
}

export {
  serializeObject,
  createArrayRangeByNumber,
  mapFields,
};
