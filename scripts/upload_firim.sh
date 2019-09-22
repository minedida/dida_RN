#!/bin/bash

# ref: https://gist.github.com/jk2K/8fc3352c08e8aa421ec577f04620375d
# Get API Token from http://fir.im/apps

API_TOKEN="4d4de4401439f954a183fbc0383e8353"
PACKAGE_PATH="android/app/build/outputs/apk/release/app-armeabi-v7a-release.apk"
# ios or android
TYPE="android"
# App 的 bundleId
BUNDLE_ID="com.dida.rn"

# read changelog
# read -p "输入changelog: " changelog


# Get upload_url
credential=$(curl -X "POST" "http://api.fir.im/apps" \
-H "Content-Type: application/json" \
-d "{\"type\":\"${TYPE}\", \"bundle_id\":\"${BUNDLE_ID}\", \"api_token\":\"${API_TOKEN}\"}" \
2>/dev/null)
binary_response=$(echo ${credential} | grep -o "binary[^}]*")
KEY=$(echo ${binary_response} | awk -F '"' '{print $5}')
TOKEN=$(echo ${binary_response} | awk -F '"' '{print $9}')
UPLOAD_URL=$(echo ${binary_response} | awk -F '"' '{print $13}')

# Upload package
echo 'Uploading...'
echo '✈ -------------------------------------------- ✈'
response=$(curl -F "key=${KEY}" \
-F "token=${TOKEN}" \
-F "file=@${PACKAGE_PATH}" \
-F "x:build=$(git rev-list HEAD --count)" \
${UPLOAD_URL}
)
echo $response;
