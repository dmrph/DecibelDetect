module.exports = {
    expo: {
      name: "DecibelRecorderApp",
      slug: "DecibelRecorderApp",
      version: "1.0.0",
      orientation: "portrait",
      userInterfaceStyle: "light",
      assetBundlePatterns: [
        "**/*"
      ],
      ios: {
        supportsTablet: true
      },
      android: {
        adaptiveIcon: {
          backgroundColor: "#ffffff"
        }
      },
      plugins: [
        [
          "expo-av",
          {
            "microphonePermission": "Allow $(PRODUCT_NAME) to access your microphone."
          }
        ]
      ]
    }
  };