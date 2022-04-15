import { createContext, useReducer } from "react";
import { TYPES } from "../actions/appCanvasActions";
import { appCanvasInit, appCanvasInitialState, appCanvasReducer } from "../reducers/appCanvasReducers";

//Creacion del contexto
const AppCanvasContext = createContext();

//Creación del provedor
const AppCanvasProvider = ({ children }) => {
	const [appCanvasState, dispatch] = useReducer(appCanvasReducer, appCanvasInitialState, appCanvasInit)

	//Que color se encuentra activo (Primario/Secundario)
	const handleActiveColor = (payload) => dispatch({type: TYPES.SET_ACTIVE_COLOR, payload})
	
	//Cambiar los colores
	const handleColor = (payload) => dispatch({type: TYPES.SET_COLOR, payload})
	const handlePrimaryColor = (payload) => dispatch({type: TYPES.SET_PRIMARY_COLOR, payload})
	const handleSecondColor = (payload) => dispatch({type: TYPES.SET_SECOND_COLOR, payload})

	const handleTool = (tool) => dispatch({types: TYPES.SET_ACTIVE_TOOL, payload: tool})

	//Datos a compartir
	const data = {
		appCanvasState, 
		handleActiveColor,
		handleColor,
		handlePrimaryColor,
		handleSecondColor,
		handleTool,
		getColor: { primary: appCanvasState.color.primary, second: appCanvasState.color.second },
		getActiveColor: { name: appCanvasState.color.active, ...appCanvasState.color[appCanvasState.color.active] },
		getActiveTool: appCanvasState.tools.find(t => t.name === appCanvasState.active)
	}

  return <AppCanvasContext.Provider value={data}>{children}</AppCanvasContext.Provider>;
};

export { AppCanvasProvider };
export default AppCanvasContext;
