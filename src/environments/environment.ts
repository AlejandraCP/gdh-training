// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBB6fA17iAoxyD0cGEyXlAOcCuRJc7v3Yg",
    authDomain: "gdh-training.firebaseapp.com",
    databaseURL: "https://gdh-training.firebaseio.com",
    projectId: "gdh-training",
    storageBucket: "gdh-training.appspot.com",
    messagingSenderId: "161499416245"
  }
};