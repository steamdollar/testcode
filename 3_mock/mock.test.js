// mock method가 원래의 fetchData 함수를 mock 함수로 대체
jest.mock("../2_timeout/fetchdata");

const getUserData = require("../2_timeout/userData");
const fetchData = require("../2_timeout/fetchdata");

// fetchData 대신 이 함수가 실행됨
fetchData.mockImplementation(() => Promise.resolve({ id: "lsj", num: 1 }));

// getUserData 함수가 fetchData 함수를 호출할 때, mock implementation을 사용하게 된다.
test("should fetch user data", async () => {
        const data = await getUserData("mja");
        expect(data).toEqual({ id: "lsj", num: 1 });
});
ㅣ;
