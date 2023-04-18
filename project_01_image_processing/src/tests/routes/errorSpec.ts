import request from "supertest";
import app from "../..";

describe("GET /error", function () {
  it("GET /error responds with error page", async () => {
    const response = await request(app)
      .get("/error")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response.text).toContain("Something went wrong!");
  });
});
