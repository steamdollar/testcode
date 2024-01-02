const transformData = require("./transformData");

const processData = (data) => {
        const transformed = transformData(data);
        return transformed;
};

module.exports = processData;
