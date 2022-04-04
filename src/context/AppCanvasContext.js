import { createContext, useReducer } from "react";
import { TYPES } from "../actions/appCanvasActions";
import { appCanvasInitialState, appCanvasReducer } from "../reducers/appCanvasReducers";

//Creacion del contexto
const AppCanvasContext = createContext();

//Creación del provedor
const AppCanvasProvider = ({ children }) => {
	const [appCanvasState, dispatch] = useReducer(appCanvasReducer, appCanvasInitialState)

	const handleColor = (color) => dispatch({type: TYPES.SET_COLOR, payload: color})
	const handleTool = (tool) => dispatch({type: TYPES.SET_TOOL, payload: tool})

	//Datos a compartir
	const data = {appCanvasState, handleColor, handleTool}

  return <AppCanvasContext.Provider value={data}>{children}</AppCanvasContext.Provider>;
};

export { AppCanvasProvider };
export default AppCanvasContext;
