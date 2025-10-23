# React Native Repack(RSpack) POC

This is an simple app with react native 0.82.0 and repack with rspack.

I just created a component called MyChunkComponent to import locally with repack.
Also created a component called MyRemoteComponent to store in a node js server and try to get it from the server and include in my application.

## Bundling
After create the components i just create a bundle, in repack docs have a simple command to bundle: `yarn react-native bundle`

To be able to bundle and have my chunks inside my `dist` folder, i ran:
```
yarn react-native bundle \
  --entry-file index.js \
  --platform ios \
  --dev false \
  --bundle-output ./dist/index.bundle \
  --assets-dest ./dist
```

With this i successfully got my chunks.

## Server for chunks
