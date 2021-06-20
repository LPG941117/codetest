export enum EDelayType {
	BUSY = '#FF0000',
	MEDIUM = '#FFD403',
}

export interface IDelayedRoute {
	type: string;
	routes: Array<string>;
	distance: number;
	time: number;
}