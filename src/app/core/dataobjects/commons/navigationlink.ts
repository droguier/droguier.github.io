export interface ItemNavigation {
	title: string;
	name?: string;
	link?: string;
	short_desc?: string;
	visible?: boolean;
	new?: boolean;
    icon?: {
        name?: string;
		url: string;
	};
    picture?: {
        name?: string;
		url: string;
	};
}