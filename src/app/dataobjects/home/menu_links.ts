import { ItemNavigation } from '../commons/navigationlink';

export const LIST_MENU_MAIN :Array<ItemNavigation> = [
    {
        title: "CLI Docs",
        name: "CLI Docs",
        link: "https://angular.dev/tools/cli",
        short_desc: "CLIDocs",
        visible: true,
        new: false
    }
    ,{
        title: "Angular Language Service",
        name: "Angular Language Service",
        link: "https://angular.dev/tools/language-service",
        short_desc: "ALS",
        visible: true,
        new: true
    },{
        title: "Angular DevTools",
        name: "CLI Docs",
        link: "https://angular.dev/tools/devtools",
        short_desc: "AngDevTools",
        visible: true,
        new: false
    }
];

/*
[
{ title: 'Explore the Docs', link: 'https://angular.dev' } ,
{ title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
{ title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
{ title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
{ title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
]
*/