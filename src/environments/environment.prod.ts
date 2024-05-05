import { version } from '../../package.json';

export const environment = {
  production: true,
  SERVER_URL: 'https://droguier.cl',
  app_name: "Droguier's Web",
  app_version: version,
  app_title: "Droguier's Web " + version,
  app_description: "Droguier's Web | Web Personal, simple",
  app_footer_description: "Mi Web ver: v " + version + " | Droguier's Web",
};
