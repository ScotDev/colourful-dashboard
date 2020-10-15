const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],

},
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [{ loader: 'file-loader' }]
  }, {
  test: /\.js$/,
  exclude: /node_modules/,
  use: [{ loader: 'babel-loader' }]
}


);

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,


  },

};
