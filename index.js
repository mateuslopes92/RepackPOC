/**
 * @format
 */
import { Script, ScriptManager } from "@callstack/repack/client";

import App from './App';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

ScriptManager.shared.on('loading', (script) => {
  console.log(`[Re.Pack] Loading script: ${script.scriptId}`);
  console.log(`http://localhost:3000/${script.scriptId}.chunk.bundle`)
});
ScriptManager.shared.on('loaded', (script) => {
  console.log(`[Re.Pack] Successfully loaded script: ${script.scriptId}`);
  console.log(`http://localhost:3000/${script.scriptId}.chunk.bundle`)
});
ScriptManager.shared.on('error', (error) => {
  console.error('[Re.Pack] Script loading failed:', error);
  console.log(`http://localhost:3000/${error}`)
});

(async () => {
  ScriptManager.shared.addResolver(async (scriptId, caller) => {
    // In dev mode, resolve script location to dev server.
    console.log("IS __DEV__", __DEV__)
    console.log("scriptId", scriptId)
    console.log("caller", caller)
    // if (__DEV__) {
    //   return {
    //     url: Script.getDevServerURL(scriptId),
    //     cache: false,
    //   };
    // }


    return {
      url: Script.getRemoteURL(
        `http://localhost:3000/${scriptId}`,

      ),
    };
  });

  AppRegistry.registerComponent(appName, () => App);
})();

