#!/bin/bash

# ref: https://github.com/JasonEtco/upload-to-release/blob/master/upload-to-release
#      https://github.com/skx/github-action-publish-binaries/blob/master/upload-script
# Get GITHUB_TOKEN

GITHUB_TOKEN="5bdd4a2d1ae14d03b784a2ab580c02f225f80dd8"
PACKAGE_PATH="../android/app/build/outputs/apk/release/app-release.apk"
REPO="dida_RN"


# ios or android
TYPE="android"
# App 的 bundleId
BUNDLE_ID="com.dida.rn"

# read changelog
# read -p "输入changelog: " changelog


# Get upload_url

# Upload package
