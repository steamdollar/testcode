const fetchData = require("./fetchdata");

describe("fetch data function test", () => {
        test("fetches data successfully from an API", async () => {
                const data = await fetchData("http://localhost:3000");
                expect(data.id).toBe("lsj");
        }, 5000);
});
