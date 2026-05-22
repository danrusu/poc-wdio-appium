# POC for Mobile testing using Appium & WebDriverIO

1. Setup and tools

- [Node.js latest LTS](https://nodejs.org/en/download)
- [JDK latest LTS](https://www.oracle.com/java/technologies/downloads/)
- [Android Studio](https://developer.android.com/studio)
  - set ANDROID_SDK_ROOT env variable
  - add to user/system Path: `ANDROID_SDK_ROOT/platform-tools` and `ANDROID_SDK_ROOT/emulator` to mainly use `adb` and `emulator` commands
- [Appium Inspector](https://github.com/appium/appium-inspector/releases)
- [WebDriverIO](https://webdriver.io/)
  - [API](https://webdriver.io/docs/api/)

1. Install project

```bash
npm i
```

3. Utilities

- Android Debug Bridge

```bash
# list connected Android devices and get their names
adb devices -l

# clean install apk on device
adb -s <deviceName> install -r </path/to/apk>

# validate connection to device
adb -s <deviceName> shell getprop ro.build.version.release
```

- Emulator

```bash
# list installed emulators
emulator -list-avds

# start an emulator
emulator -avd Pixel_7 -wipe-data
```

4. Run tests

- start an emulator or connect a real device
- set device `platform`, `name` and `OS version` in the corresponding WebdriverIO config file ([Android](./wdio.android.conf.js)/[iOS](./wdio.ios.conf.js))

  i.e.
  - Android

  ```json
  {
    "capabilities": [
      {
        "platformName": "Android",
        "appium:automationName": "UiAutomator2",
        "appium:platformVersion": "16.0",
        "appium:deviceName": "RFCW80ZVGAB",
        "appium:fullReset": true,
        "appium:app": "/path/to/MyApp.apk"
      }
    ]
  }
  ```

  - iOS

  ```json
  {
    "capabilities": [
      {
        "platformName": "iOS",
        "appium:automationName": "XCUITest",
        "appium:deviceName": "iPhone 15",
        "appium:platformVersion": "17.5",

        "appium:noReset": true,
        "appium:app": "/path/to/MyApp.app",

        // Required for real devices
        "appium:xcodeOrgId": "ABCDE12345",
        "appium:xcodeSigningId": "Apple Development"
      }
    ]
  }
  ```

- run the tests

```bash
npm run test:android
npm run test:ios
```
