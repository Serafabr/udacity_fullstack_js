import request from "supertest";
import app from "../..";

describe("GET /", function () {
  it("GET / responds with main page", async () => {
    const response = await request(app)
      .get("/")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response.text).toContain("Click on any image to resize it!");
  });

  it("GET /upload responds with upload page", async () => {
    const response = await request(app)
      .get("/upload")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response.text).toContain(
      '<input class="form__input" type="file" name="image" id="image">'
    );
  });

  it("GET /resize/:imgPath responds with resize page for some image", async () => {
    const response = await request(app)
      .get("/resize/fjord.jpg")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response.text).toContain('<img src="/fjord.jpg" alt="Image">');
  });
});

describe("POST /upload", function () {
  it("POST /upload save a new image", async () => {
    const response = await request(app).post("/upload");

    expect(response.status).toEqual(302);
  });
});
