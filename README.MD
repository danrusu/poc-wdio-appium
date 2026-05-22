# POC for Mobile testing using Appium & WebDriverIO

1. Setup and tools

- [Node.js latest LTS](https://nodejs.org/en/download)
- [JDK latest LTS](https://www.oracle.com/java/technologies/downloads/)
- [Android Studio](https://developer.android.com/studio)
  - set ANDROID_SDK_ROOT env variable
  - add to user/system Path: `ANDROID_SDK_ROOT/platform-tools` and `ANDROID_SDK_ROOT/emulator` to mainly use `adb` and `emulator` commands
- [Appium Inspector](https://github.com/appium/appium-inspector/releases)
- [WebDriverIO](https://webdriver.io/)

2. Install project

```bash
npm i
```

3. Run tests

```bash
npm run test:android
npm run test:ios
```
