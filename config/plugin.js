'use strict';

/** @type Egg.EggPlugin */
// exports.nunjucks = {
//   enable: true,
//   package: 'egg-view-nunjucks',
// };
module.exports = {
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
};
