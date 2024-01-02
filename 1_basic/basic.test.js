const sum = require("./sum");
const multiply = require("./multiply");
const getUserStatus = require("../mockReturn/getUserStatus");

describe("multiple functions test", () => {
        test("sum", () => {
                expect(sum(1, 2)).toBe(3);
        });

        test("multiply", () => {
                expect(multiply(5, 2)).toBe(10);
        });
});

test("sum only", () => {
        expect(sum(1, 2)).toBe(4);
});

// t/f 가 랜덤으로 나오게 했으므로 테스트 실패/성공 모두 정상 범주
test("original function", () => {
        expect(getUserStatus("user1")).toBe(true);
});
