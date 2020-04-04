const routerWrapper = (fn) => (...args) => fn(...args).catch(args[2]);

module.exports = {
    routerWrapper,
};
