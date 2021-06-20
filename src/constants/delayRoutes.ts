import { IDelayedRoute } from '@/interfaces/delayRoute';

/**
 * Temp hardcoded delayed routes data
 */
export const DELAYED_ROUTES: Array<IDelayedRoute> = [
	{
		type: "danger",
		routes: ["Monash Fwy Out", "Kings Way", "EastLink"],
		distance: 13,
		time: 45,
	},
	{
		type: "danger",
		routes: ["Monash Fwy Out", "Kings Way", "EastLink"],
		distance: 15,
		time: 28,
	},
	{
		type: "warning",
		routes: ["Western Ring Rd", "West Gate Fwy", "Western Fwy"],
		distance: 5,
		time: 5,
	},
	{
		type: "warning",
		routes: ["Western Ring Rd", "West Gate Fwy", "Western Fwy"],
		distance: 15,
		time: 25,
	}
]

export enum EDelayType {
	BUSY = '#FF0000',
	MEDIUM = '#FFD403',
}

