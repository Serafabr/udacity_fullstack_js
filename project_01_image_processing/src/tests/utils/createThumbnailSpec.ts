import path from "path";
import { createThumbnail } from "../../utils";
import { imagesDir, thumbDir } from "../../utils/directories";

describe("createThumbnail returns true for resizing the image successfully", () => {
  it("createThumbnail(thumbPath, imagePath, 100, 200) must return true", async () => {
    const pThumb = path.join(thumbDir, "fjord-200-200.jpg");
    const pImg = path.join(imagesDir, "fjord.jpg");
    const res = await createThumbnail(pThumb, pImg, 200, 200);
    expect(res).toEqual(true);
  });
});
