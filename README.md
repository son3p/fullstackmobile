# Mobile App README

## Introduction
This README provides instructions on how to run the mobile application using Capacitor.js with React.

## Table of Contents
1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Syncing Your Web Code](#syncing-your-web-code)
4. [Running Your App](#running-your-app)
    - [Additional Setup Steps](#additional-setup-steps)


---

## Requirements
Before running the application, ensure you have the following installed:
- Node.js and npm
- Java SDK
- Android Studio
- Gradle

---

## Installation
If you are cloning this project from a repository, first install the necessary dependencies by running:
npm install

---

## Syncing Your Web Code
To sync your web code to the native project, follow these steps:
npm run build
npx cap sync

--

## Running Your App
You can run your app on a device or emulator using the following command:
npx cap run android

--

## Additional Setup Steps
Here are some additional setup steps you may need to perform:

- Install Java SDK and configure environment variables (JAVA_HOME, ANDROID_HOME, ANDROID_SDK_ROOT, PATH).
- Install Android Studio and configure SDK Manager and AVD Manager.
- Install Gradle and configure environment variables.

Refer to the official documentation for detailed setup instructions.