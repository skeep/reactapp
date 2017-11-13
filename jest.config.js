module.exports = {
  verbose: false,
  collectCoverage: true,
  coveragePathIgnorePatterns: ["/node_modules/", "/internal/"],
  setupFiles: ['./internal/test.shim.js', './internal/test.setup.js']
};
