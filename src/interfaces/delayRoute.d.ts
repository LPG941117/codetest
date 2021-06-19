export enum EDelayType {
	BUSY = '#FF0000',
	MEDIUM = '#FFFF00',
}

export interface IDelayedRoute {
	type: string;
	routes: Array<string>;
	distance: number;
	time: number;
}