const sass = require('@stencil/sass');

exports.config = {
  namespace: 'wopvincent',
  generateDistribution: true,
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
