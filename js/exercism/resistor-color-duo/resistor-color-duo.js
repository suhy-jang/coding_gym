//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const match = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

const colorCode = color => match.indexOf(color);

export const value = (c) => {
  return colorCode(c[0])*10 + colorCode(c[1]);
};
