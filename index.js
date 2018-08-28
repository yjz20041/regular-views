const Transmit = require('regular-transmit');
const renderToString = Transmit.renderToString;
const path = require('path');
module.exports = (app, options) => {
  options = Object.assign({
    ext: 'js',
    viewPath: path.join(__dirname, 'views')
  }, options)
  var viewPath = options.viewPath;
  var ext = options.ext;
  app.context.render = async (filename) => {
    try {
      var Component = require(viewPath + '/' + filename + '.' + ext);
      return await renderToString(Component.default || Component);
    } catch (e) {
      throw e
    }
  }
}