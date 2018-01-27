exports.config = {
  namespace: 'wopvincent',
  generateDistribution: true,
  bundles: [
    { components: ['wop-vincent', 'wop-vincent-img'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
