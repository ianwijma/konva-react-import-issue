const withTM = require('next-transpile-modules')(['konva','react-konva'])

module.exports = withTM({
    future: {
      webpack5: true,
    },
  });