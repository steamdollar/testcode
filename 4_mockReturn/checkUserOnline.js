const checkUserOnline = () => {
        const t = Date.now();

        return t % 2 === 0;
};

module.exports = checkUserOnline;
