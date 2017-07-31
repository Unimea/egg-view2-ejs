'use strict';

const ejsAsync = require('ejs-async');

module.exports = app => {
  const config = app.config.view2Ejs;
  const defaultOptions = config.options || {};
  app.view2.use('ejs', {
    render(filename, locals, options) {
      return ejsAsync.renderFile(filename,
                                 locals,
                                 Object.assign(options, defaultOptions),
                                 null);
    },
    renderString(tpl, locals, options) {
      return ejsAsync.render(tpl,
                             locals,
                             Object.assign(options, defaultOptions));
    },
  });
};
