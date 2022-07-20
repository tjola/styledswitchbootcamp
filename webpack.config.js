const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const revision = require('child_process').execSync('git rev-parse HEAD').toString().trim();
const sourcemapRepository = 'https://sourcemaps.xrm.al/PCF/StyledSwitch/';
/** @type {import('webpack').Configuration} */
module.exports =  {
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          /* this is necessary to generate sourcemaps when you minify/obfuscate your source code */
          sourceMap: true,
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  plugins: [  
    new webpack.SourceMapDevToolPlugin({
        /* This instructs your bundle.js to read the correct revision sourcemaps from the repository */
        append: `\n//# sourceMappingURL=${sourcemapRepository}${revision}/[url]`,
        filename: '[name].map',
      }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
};