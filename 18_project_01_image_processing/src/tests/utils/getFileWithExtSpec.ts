import { getFileWithExt } from "../../utils";
import { imagesDir } from "../../utils/directories";

describe("getFileWithExt return filename with extension (search on images folder)", () => {
  it("getFileWithExt(pathDir, fjord) should returns 'fjord.jpg'", async () => {
    const filename = await getFileWithExt(imagesDir, "fjord");
    expect(filename).toEqual("fjord.jpg");
  });
  it("getFileWithExt(pathDir, palmtunnel.jpg) should returns 'palmtunnel.jpg'", async () => {
    const filename = await getFileWithExt(imagesDir, "palmtunnel.jpg");
    expect(filename).toEqual("palmtunnel.jpg");
  });
});
