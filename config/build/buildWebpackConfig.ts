import webpack from "webpack";
import {BuildOptions} from "./types/config";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoader} from "./buildLoaders";
import {buildResolve} from "./buildResolve";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {mode, paths, isDev} = options
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoader(options)
    },
    resolve: buildResolve(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}