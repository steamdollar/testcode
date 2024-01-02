const getUserData = require("../2_timeout/userData");

jest.mock("../2_timeout/userData");

// resolve, reject의 경우를 전부 테스트 해보고 싶을 때
test("getUserData returns data successsfully", async () => {
        getUserData.mockResolvedValue({ data: "mock data" });

        const result = await getUserData("http://localhost:3000");
        expect(result).toEqual({ data: "mock data" });
});

test("getUserData handles errs", async () => {
        getUserData.mockRejectedValue(new Error("Network error"));
        await expect(getUserData("http://localhost:3000")).rejects.toThrow(
                "Network error"
        );
});
