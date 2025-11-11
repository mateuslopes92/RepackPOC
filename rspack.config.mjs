import * as Repack from '@callstack/repack';

import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Rspack configuration enhanced with Re.Pack defaults for React Native.
 *
 * Learn about Rspack configuration: https://rspack.dev/config/
 * Learn about Re.Pack configuration: https://re-pack.dev/docs/guides/configuration
 */

export default Repack.defineRspackConfig({
  context: __dirname,
  entry: {
    index: './index.js', // your app entry
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:3000/', // important for chunk resolution
    filename: '[name].bundle',
    chunkFilename: '[name].chunk.bundle', // generates chunks
  },
  resolve: {
    ...Repack.getResolveOptions(),
  },
  module: {
    rules: [
      {
        test: /\.[cm]?[jt]sx?$/,
        type: 'javascript/auto',
        use: {
          loader: '@callstack/repack/babel-swc-loader',
          parallel: true,
          options: {},
        },
      },
      ...Repack.getAssetTransformRules(),
    ],
  },
  plugins: [new Repack.RepackPlugin()],
  // plugins: [new Repack.RepackPlugin({
  //   exposes: {
  //     './src/MyChunkComponent': './src/MyChunkComponent.tsx',
  //     // If you later want to load remote components:
  //     './src/MyRemoteComponent': './src/MyRemoteComponent.tsx',
  //   },
  // })],
});
