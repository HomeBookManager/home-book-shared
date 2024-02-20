const sassColors = require('home-book-constants/config/sass/colors');

const transpileSassVariables = (obj) => {
  const variables = [];

  for (const [key, value] of Object.entries(obj)) {
    variables.push(`${key}: ${value};`);
  }

  return variables.join(' ');
};

module.exports = [transpileSassVariables(sassColors)].join(' ');
