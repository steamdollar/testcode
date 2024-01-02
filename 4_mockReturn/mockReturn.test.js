jest.mock("./mockReturn/checkUserOnline");

const getUserStatus = require("./getUserStatus");
const checkUserOnline = require("./checkUserOnline");

test("return true or false", () => {
        checkUserOnline.mockReturnValueOnce(true);
        expect(getUserStatus("user1")).toBe(true);
});

test("again, return t or f", () => {
        checkUserOnline.mockReturnValueOnce(false);

        expect(getUserStatus("user1")).toBe(false);
});
