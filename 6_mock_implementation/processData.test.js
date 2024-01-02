jest.mock("./transformData");

const processData = require("./processData");
const transformData = require("./transformData");

// mock implementation

// processData 함수 내부에서 호출되는 transformData 함수를 mock
transformData.mockImplementation((data) => {
        return `mocked ${data}`;
});

test("process data w/ mocked transform", () => {
        const result = processData("input data");

        expect(result).toBe("mocked input data");
});

// afterEach(() => {
//         jest.clearAllMocks();
// });

test("process data after reset", () => {
        // 오리지널 함수로 바꾸기
        transformData.mockImplementation(jest.requireActual("./transformData"));
        const result = processData("lsj");

        expect(result).toEqual({ name: "lsj" });
});
