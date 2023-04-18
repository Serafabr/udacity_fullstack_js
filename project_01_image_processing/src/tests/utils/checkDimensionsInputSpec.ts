import { checkDimensionsInput } from "../../utils";

describe("checkDimensionInput returns dimensions based on user input (string)", () => {
  it("checkDimensionInput(a, b) must be [undefined, undefined]", () => {
    expect(checkDimensionsInput("auto", "auto")).toEqual([
      undefined,
      undefined,
    ]);
  });
  it("checkDimensionInput('1', b) must be [1, undefined]", () => {
    expect(checkDimensionsInput("1", "auto")).toEqual([1, undefined]);
  });
  it("checkDimensionInput(a, '1') must be [undefined, 1]", () => {
    expect(checkDimensionsInput("auto", "1")).toEqual([undefined, 1]);
  });
  it("checkDimensionInput('1', '2') must be [1, 2]", () => {
    expect(checkDimensionsInput("1", "2")).toEqual([1, 2]);
  });
});
