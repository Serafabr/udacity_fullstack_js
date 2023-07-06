export const checkDimensionsInput = (
  widthInput: string,
  heightInput: string
): [number | undefined, number | undefined] => {
  let width: number | undefined = undefined;
  let height: number | undefined = undefined;
  if (!isNaN(parseInt(widthInput))) width = parseInt(widthInput);
  if (!isNaN(parseInt(heightInput))) height = parseInt(heightInput);
  return [width, height];
};
