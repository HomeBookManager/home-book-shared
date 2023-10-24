export const colorToHex = (color): string => {
  const hex = color.toString(16);

  return hex.length === 1 ? '0' + hex : hex;
};

export const rgbToHex = (r, g, b): string =>
  '#' + colorToHex(r) + colorToHex(g) + colorToHex(b);
