import request from "supertest";
import app from "../..";

describe("GET /api/images", function () {
  it('GET /api/images?filename=fjord&width=200&height=200 responds with IGM tag with src="/fjord-200-200.jpg"', async () => {
    const response = await request(app)
      .get("/api/images?filename=fjord&width=200&height=200")
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
    expect(response.text).toContain('src="/fjord-200-200.jpg"');
  });

  it('GET /api/images?filename=fjord&width=200 responds with IGM tag with src="/fjord-200-auto.jpg"', async () => {
    const response = await request(app)
      .get("/api/images?filename=fjord&width=200")
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
    expect(response.text).toContain('src="/fjord-200-auto.jpg"');
  });

  it('GET /api/images?filename=fjord&height=200 responds with IGM tag with src="/fjord-auto-200.jpg"', async () => {
    const response = await request(app)
      .get("/api/images?filename=fjord&height=200")
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
    expect(response.text).toContain('src="/fjord-auto-200.jpg"');
  });

  it('GET /api/images?filename=asdf&height=200 redirects to error page"', async () => {
    const response = await request(app)
      .get("/api/images?filename=asdf&height=200")
      .set("Accept", "application/json");

    expect(response.redirect).toEqual(true);
  });
});
