const esModule = require('es-module').default;
const commonJS = require('commonjs');

(function() {
  console.log('This is core function.');
  console.log(esModule());
  console.log(commonJS());
})();
