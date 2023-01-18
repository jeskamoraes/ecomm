import request from "supertest";

describe("Lista produtos", () => {
    it("Lista de produtos", async () => {
        return await request('http://localhost:3001').get('/products')
        .then((res) => {
            expect(res.status).toBe(200);
        })
    });
});