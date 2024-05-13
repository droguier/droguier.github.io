export interface CvForm {
	title: string;
	name?: string;
	web?: string;
    phone_home?:string;
    phone_cell?:string;
	short_desc?: string;
	visible?: boolean;
    picture?: {
        name?: string;
		url: string;
	};
    interest?:Array<{
        title: string;
        short_desc: string;
    }>;
    education?:Array<{
        title: string;
        mention?:string;
        short_desc: string;
        establishment:string;
        date_begin: Date;
        date_end?: Date;
    }>;
    laboral_experience?:Array<{
        title: string;
        desc: string;
        company:string;
        relevant_client?:string;
        date_begin: Date;
        date_end?: Date;
    }>;
}