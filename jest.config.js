module.exports = {
  setupFiles: [
    "./jest/setupTests.js"
  ],
  verbose: true,
  testURL: 'http://localhost/',
  snapshotSerializers: [
    "<rootDir>/node_modules/enzyme-to-json/serializer"
  ],
};