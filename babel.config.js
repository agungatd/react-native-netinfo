module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@react-native-community/netinfo": "./js"
        },
        cwd: "babelrc"
      }
    ]
  ]
};