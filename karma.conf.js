module.exports = function (config) {
  console.log('\n--- Using custom karma.conf.js ---\n');
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        random: false
      }
    },
    reporters: ['progress', 'kjhtml', 'junit'],
    jasmineHtmlReporter: {
      suppressAll: true // removes duplicated traces in the output
    },
    junitReporter: {
      outputDir: 'test-results', // directory for all results
      outputFile: 'junit.xml',    // single file (set useBrowserName false)
      useBrowserName: false
    },
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: false
  });
};
