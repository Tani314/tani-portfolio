const TerserPlugin = require("terser-webpack-plugin");

module.exports = function override(config) {
  if (config.optimization && config.optimization.minimizer) {
    config.optimization.minimizer = config.optimization.minimizer.map(minimizer => {
      if (minimizer.constructor.name === "TerserPlugin") {
        return new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
        });
      }
      return minimizer;
    });
  }
  return config;
};
