const pick = (obj, ...props) => {
  const result = {};
  for (const a of props) {
    if (obj.hasOwnProperty(a)) {
      result[a] = obj[a];
    }
  }
  return result;
};

module.exports = { pick };
