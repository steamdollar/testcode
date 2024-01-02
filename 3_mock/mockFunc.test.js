// mocking function
// 개별 함수를 mocking 하는 것도 가능, 특히 객체 내부의 method일 때.
const tObj = {
        tMethod: () => {
                console.log("original function here");
        },
};

// mockImplementation : 함수 구현을 mock
jest.spyOn(tObj, "tMethod").mockImplementation(() => {
        console.log("mocked function here");
        return 1;
});

test("is function mocked?", () => {
        expect(tObj.tMethod()).toBe(1);
});
