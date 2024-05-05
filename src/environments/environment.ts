// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const version = "6,6659"

export const environment = {
  production: false,
  SERVER_URL: 'http://localhost:4200',
  app_name: "[DESA] Droguier's Web",
  app_version: version,
  app_title: "[DESA] Droguier's Web v" + version,
  app_description: "Droguier's Web | Web Personal, simple",
  app_footer_description: "Mi Web ver: v"+ version+" | Droguier's Web"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
 //import 'zone.js/dist/zone-error';  // Included with Angular CLI.
