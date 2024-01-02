const fetchData = require("./fetchdata");

const getUserData = async () => {
        const data = await fetchData("http://localhost:3000");
        return data;
};

module.exports = getUserData;
