import { TYPES } from "../actions/appCanvasActions";

//El estado inicial
export const appCanvasInitialState = {
	tools: {
		name: 'Rect',
		options: {
			stroke: {
				active: false,
				px: 2,
			},
			fill: {
				active: true,
			},
			opacity: 1
		}
	}, 
	color: {
		primary: '#000',
		second: '#fff'
	}
}

export function appCanvasReducer(state, { type, payload }) {
	switch (type) {
		case TYPES.SET_TOOL:
			return { ...state, tools: payload };
		case TYPES.SET_COLOR:
			return { ...state, color: payload };
		default:
			return state;
	}
}