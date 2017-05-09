var path  = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonChunksPlugin = webpack.optimize.CommonsChunkPlugin;
var buildEnv = process.env.NODE_ENV=='production' ? "prod" : "dev";
var commonPlugins = [
  new HtmlWebpackPlugin({
  template : path.join(__dirname,'index.html'),
  inject : 'body',
  filename : '../index.html',
  title : 'Test'
}),
new ExtractTextPlugin("styles.css")];
var devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
// enable HMR globally
  new webpack.NamedModulesPlugin()
// prints more readable module names in the browser console on HMR updates
];
var prodPlugins = [
  new CommonChunksPlugin({
    name : 'vendor'
  }),
  new CommonChunksPlugin({
    name: 'manifest'
  })
];
var webpackDevConfig = {
  entry : ['react-hot-loader/patch',
            // activate HMR for React

            'webpack-dev-server/client?http://localhost:8080',
            // bundle the client for webpack-dev-server
            // and connect to the provided endpoint

            'webpack/hot/only-dev-server',
            // bundle the client for hot reloading
            // only- means to only hot reload for successful updates
              path.join(__dirname,'./app/javascript/entry.js')],
  output : {
    path : path.join(__dirname,'public','dist'),
    filename : '[name].js',
    publicPath : '/dist/',
  },
  devServer: {
    hot : true,
    // enable HMR on the server
    contentBase: path.join(__dirname,'public'),
    // match the output path

    publicPath: '/dist/',
    // match the output `publicPath`


  }
}
var webpackProdConfig = {
  entry : {
    vendor : ['react','react-router-dom','react-router'],
    bundle : path.join(__dirname,'./app/javascript/entry.js')
  },
  output : {
    path : path.join(__dirname,'public','dist'),
    filename : '[name].[chunkhash].js',
    publicPath : '/dist/',
  }
}
var webpackCommonObj = {
  module : {
    rules : [
      {
        test : /\.jsx|\.js/,
        loader : 'babel-loader',
        options: {
          presets: ["es2015",'react'],
          plugins: ['syntax-dynamic-import',"react-hot-loader/babel"]
        }
      },
      {
        test : /\.scss|\.css/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader:'css-loader',
              options : {modules : true,importLoaders : 1}
            }, {loader : 'sass-loader',options : {outputStyle : 'expanded'}}]
        })
      }
    ]
  },
  resolve : {
    alias : {
      "@components" : path.join(__dirname,'app/javascript/components'),
      "@routes" : path.join(__dirname,'app/javascript/routes')
    },
    extensions : ['.js','.json','.jsx']
  },
  plugins : buildEnv == 'prod' ? commonPlugins.concat(prodPlugins) : commonPlugins.concat(devPlugins)
};

module.exports = buildEnv == 'prod' ? Object.assign({},webpackCommonObj,webpackProdConfig) : Object.assign({},webpackCommonObj,webpackDevConfig)
