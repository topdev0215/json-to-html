const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
  },
};
