module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/main/**/*.js',
      'src/test/**/*.js'
    ],
    reporters: ['progress', 'coverage'],
    preprocessors: { 'src/main/**/*.js': ['coverage'] },
    browsers: ['Chrome'],
    colors: true,
    autoWatch: true,
    singleRun: true,
    coverageReporter: {
        dir : 'build/coverage/',
        reporters: [
            { type: 'html', subdir: 'report-html' },
            { type: 'json-summary', subdir: 'report-json' }
        ]
    },

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
  })
}
