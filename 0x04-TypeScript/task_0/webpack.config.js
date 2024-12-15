const path = require("path");

module.exports = {
  entry: "/main.ts", // Path to the main TypeScript file
  output: {
    filename: "main.ts",
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  resolve: {
    extensions: [".ts", ".js"], // File extensions for resolution
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader", // Use ts-loader for TypeScript
        exclude: /node_modules/, // Exclude dependencies
      },
    ],
  },
  mode: "development", // Use "production" for production builds
};
