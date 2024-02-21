const colors = require('home-book-constants/config/sass/colors');
const buttonColors = require('home-book-constants/config/sass/buttonColors');

const transpileSassVariables = (obj) => {
  const variables = [];

  for (const [key, value] of Object.entries(obj)) {
    variables.push(`${key}: ${value};`);
  }

  return variables.join(' ');
};

module.exports = [transpileSassVariables(colors), transpileSassVariables(buttonColors)].join(' ');
