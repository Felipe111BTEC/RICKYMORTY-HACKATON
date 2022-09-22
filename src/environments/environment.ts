// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//Se importa la información de la version
import versionJSON from "../assets/version.json";

export const environment = {
  production: false,
  //Obtiene la version de la APP
  version: versionJSON.version,
  //URL de la API
  API: 'https://rickandmortyapi.com/api',
  //Dirección de ejecución
  HOST: ''
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
