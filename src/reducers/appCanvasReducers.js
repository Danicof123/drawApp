import { TYPES } from "../actions/appCanvasActions";
import { draw } from "../tools/toolDraw";

//El estado inicial
export const appCanvasInitialState = {
	default: localStorage.getItem(TYPES.SET_ACTIVE_TOOL) || 'Rect',
	active: '',
	tools: [
		{
			name: 'Rect',
			label: 'Rectángulo',
			options: {
				stroke: {
					active: false,
					size: 2,
				},
				fill: {
					active: true,
				}
			}
		},
		{
			name: 'Circle',
			label: 'Círculo',
			options: {
				stroke: {
					active: false,
					size: 2,
				},
				fill: {
					active: true,
				}
			}
		},
		draw,
		{
			name: 'Eraser',
			label: 'Goma',
			options: {
				stroke: {
					active: true,
					size: 3,
				}
			}
		},
		{
			name: 'ColorFill',
			label: 'Bote',
		},
		{
			name: 'Text',
			label: 'Texto',
		},
		{
			name: 'HandMove',
			label: 'Mover',
		},
		{
			name: 'ZoomIn',
			label: 'ZoomIn',
		},
		{
			name: 'ZoomOut',
			label: 'ZoomOut',
		},
	], 
	color: {
		active: localStorage.getItem(TYPES.SET_ACTIVE_COLOR) || 'primary',
		primary: {
			hexString: localStorage.getItem(TYPES.SET_PRIMARY_COLOR) || '#000'
		},
		second: {
			hexString: localStorage.getItem(TYPES.SET_SECOND_COLOR) || '#fff'
		},
		opacity: 1
	}
}

export const appCanvasInit = (state) => {
	localStorage.setItem(TYPES.SET_ACTIVE_TOOL, state.default)
	return {
		...state,
		active: state.default
	}
}

export function appCanvasReducer(state, { type, payload }) {
	switch (type) {
		
		case TYPES.ACTIVE_TOOL:
			localStorage.setItem(TYPES.SET_ACTIVE_TOOL, payload)
			return { ...state, active: payload };
		
			//Activar un color (Primario/Secundario)
		case TYPES.SET_ACTIVE_COLOR:
			localStorage.setItem(TYPES.SET_ACTIVE_COLOR, payload)
			state.color.active = payload;
			return {...state};

		//Elegir el color que esta modo activo
		case TYPES.SET_COLOR:
			(state.color.active === 'primary') ? localStorage.setItem(TYPES.SET_PRIMARY_COLOR, payload.hexString) : localStorage.setItem(TYPES.SET_SECOND_COLOR, payload.hexString)
			state.color[state.color.active] = payload;
			return {...state};

		//Elegir el color primario
		case TYPES.SET_PRIMARY_COLOR:
			localStorage.setItem(TYPES.SET_PRIMARY_COLOR, payload.hexString)
			state.color.primary = payload;
			return {...state};

		//Elegir el color secundario
		case TYPES.SET_SECOND_COLOR:
			localStorage.setItem(TYPES.SET_SECOND_COLOR, payload.hexString)
			state.color.second = payload;
			return {...state};

		default:
			return state;
	}
}