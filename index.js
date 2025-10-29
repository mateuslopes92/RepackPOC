/**
 * @format
 */

import { Script, ScriptManager } from "@callstack/repack/client";

import App from './App';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  // In dev mode, resolve script location to dev server.
  console.log("IS __DEV__", __DEV__)
  console.log("scriptId", scriptId)
  // if (__DEV__) {
  //   return {
  //     url: Script.getDevServerURL(scriptId),
  //     cache: false,
  //   };
  // }


  return {
    url: Script.getRemoteURL(
      `http://localhost:3000/${scriptId}`
    ),
  };
});

AppRegistry.registerComponent(appName, () => App);
