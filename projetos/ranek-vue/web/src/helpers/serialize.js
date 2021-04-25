const serialize = (object) => Object.keys(object).reduce((acc, cur) => (
  [...acc, `${cur}=${object[cur]}`]
), []).join('&');

export default serialize;
