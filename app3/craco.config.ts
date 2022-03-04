const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devServer: {
    port: 3003,
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "app3",
          exposes: {
            "./App": "./src/App",
          },
          filename: "remoteEntry.js",
          shared: {
            react: { singleton: true },
            "react-dom": { singleton: true },
          },
        }),
      ],
    },
    configure: (webpackConfig: any) => ({
      ...webpackConfig,
      output: {
        ...webpackConfig.output,
        publicPath: "auto",
      },
    }),
  },
};
