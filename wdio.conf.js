exports.config = {
  runner: 'local',
  specs: ['./test/specs/**/*.js'],
  exclude: [],

  maxInstances: 1,
  logLevel: 'info',
  bail: 0,
  baseUrl: '',
  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    timeout: 120000,
  },

  reporters: ['spec'],

  services: [],

  port: 4723,
  hostname: '127.0.0.1',
  path: '/wd/hub',

  capabilities: [
    {
      platformName: 'Android',
      'appium:platformVersion': '14',
      'appium:deviceName': 'Pixel_3a_API_34',
      'appium:automationName': 'UiAutomator2',
      'appium:app': './app/ebacshop.apk',
      'appium:noReset': false,
      'appium:newCommandTimeout': 240,
      'appium:ensureWebviewsHavePages': true,
      'appium:appActivity': 'com.waido.app.MainActivity',
      'appium:appPackage': 'com.waido.app',
    },
  ],

  before: async function () {
    await $(`//*[@content-desc="App"]`).waitForDisplayed({ timeout: 20000 });
  },
};
