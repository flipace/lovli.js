export default (...args) => args.reduce((acc, name) => {
  acc[name] = name; // eslint-disable-line
  return acc;
}, []);
