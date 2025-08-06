import { version } from '../../package.json';

export const environment = {
  production: false,
  SERVER_URL: 'http://localhost:4200',
  app_name: "[DESA] Droguier's Web",
  app_version: version,
  app_title: "[DESA] Droguier's Web v" + version,
  app_description: "Droguier's Web | Web Personal, simple",
  app_footer_description: "Mi Web ver: v"+ version+" | Droguier's Web",
  //
  formatDateFull: 'yyyy-MM-dd hh:mm:ss',
  lenguajeFormat: 'en-US'
};