const buttonColors = require('home-book-constants/config/sass/buttonColors');
const buttonIconColors = require('home-book-constants/config/sass/buttonIconColors');
const colors = require('home-book-constants/config/sass/colors');

const transpileSassVariables = (obj) => {
  const variables = [];

  for (const [key, value] of Object.entries(obj)) {
    variables.push(`${key}: ${value};`);
  }

  return variables.join(' ');
};

module.exports = [
  transpileSassVariables(buttonColors),
  transpileSassVariables(buttonIconColors),
  transpileSassVariables(colors),
].join(' ');
