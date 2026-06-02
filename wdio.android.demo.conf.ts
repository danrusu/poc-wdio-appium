import path from 'node:path';

export const config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',
  port: 4723,

  specs: ['./src/test/test.demo.ts'],
  exclude: [
    // 'path/to/excluded/files'
  ],

  // ============
  // Capabilities
  // ============
  maxInstances: 10,
  capabilities: [
    {
      // capabilities for local Appium web tests on an Android Emulator
      platformName: 'Android',

      'appium:automationName': 'UiAutomator2',
      'appium:platformVersion': '16.0',
      // 'appium:platformVersion': '17.0',
      'appium:deviceName': 'RFCW80ZVGAB',
      // 'appium:deviceName': 'emulator-5554',

      'appium:fullReset': true,
      'appium:app': path.join(process.cwd(), 'app', 'android', 'demo.apk'),
      'appium:chromedriverExecutableDir': './drivers/chrome',
    },
  ],

  // ===================
  // Test Configurations
  // ===================

  logLevel: 'debug',

  bail: 0,
  // Default timeout for all waitFor* commands.
  waitforTimeout: 10_000,
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120_000,
  uiautomator2ServerLaunchTimeout: 120_000,
  adbExecTimeout: 100_000,
  //
  // Default request retries count
  connectionRetryCount: 3,

  services: [
    [
      'appium',
      {
        logPath: './logs',
        args: {
          logLevel: 'debug',
          //     allowInsecure: 'chromedriver_autodownload',
        },
      },
    ],
  ],

  framework: 'mocha',

  reporters: [
    'spec',
    [
      'json',
      {
        outputDir: './logs',
        outputFileFormat: () => 'report.json',
      },
    ],
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 600_000,
  },
};
