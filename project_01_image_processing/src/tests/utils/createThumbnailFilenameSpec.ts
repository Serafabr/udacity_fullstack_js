import { createThumbnailFilename } from "../../utils";

describe("createThumbnailFilename create filename for image file", () => {
  it("createThumbnailFilename(abc, png, 100, 200)", () => {
    expect(createThumbnailFilename("abc", ".png", 100, 200)).toEqual(
      "abc-100-200.png"
    );
  });
  it("createThumbnailFilename(abc, png, undefined, 200) must returns abc-auto-200.png", () => {
    expect(createThumbnailFilename("abc", ".png", undefined, 200)).toEqual(
      "abc-auto-200.png"
    );
  });
  it("createThumbnailFilename(abc, png, 200, undefined) must returns abc-200-auto.png", () => {
    expect(createThumbnailFilename("abc", ".png", 200, undefined)).toEqual(
      "abc-200-auto.png"
    );
  });
  it("createThumbnailFilename(abc, png, undefined, undefined) must returns abc-auto-auto.png", () => {
    expect(
      createThumbnailFilename("abc", ".png", undefined, undefined)
    ).toEqual("abc-auto-auto.png");
  });
  it("createThumbnailFilename(abc, png, undefined, undefined) must returns abc-123-456.png", () => {
    expect(createThumbnailFilename("abc", ".png", "123", "456")).toEqual(
      "abc-123-456.png"
    );
  });
});
