const checkuserOnline = require("./checkUserOnline");

const getUserStatus = (userId) => {
        return checkuserOnline();
};

module.exports = getUserStatus;
