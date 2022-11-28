// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const url1= "https://libros-de-a-grapa.cloudns.ph/wp-json/wc/v3"
const authUrl1 = "https://libros-de-a-grapa.cloudns.ph/wp-json/jwt-auth/v1/token"
const tokenVerifyUrl1 = "https://libros-de-a-grapa.cloudns.ph/wp-json/jwt-auth/v1/token/validate"

export const environment = {
  production: false,
  backend_api_url: url1,
  auth_url: authUrl1,
  token_verify_url: tokenVerifyUrl1,
  readonlyKeys:{
    consumer_key: 'ck_694d7d867efa585181e9b3f01bc176f56b6c4cb0',
    consumer_secret: 'cs_94f7da4e45c7d8a2059ee50cf078dfe5a5bcf519'
  },
  writableKeys:{
    consumer_key: 'ck_3204e69737fe76caff521e847af3f96ff5f18ee9',
    consumer_secret: 'cs_405a58eb733d303ee54627e28fdde2c359f1e322'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
