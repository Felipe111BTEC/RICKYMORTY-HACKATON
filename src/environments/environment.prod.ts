//Se importa la información de la version
import versionJSON from "../assets/version.json";

export const environment = {
  production: true,
  //Obtiene la version de la APP
  version: versionJSON.version,
  //URL de la API
  API: 'https://rickandmortyapi.com/api',
  //Dirección de ejecución
  HOST: ''
};
