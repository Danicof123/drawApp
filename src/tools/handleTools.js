import { TYPES } from "../actions/appCanvasActions";
import { toolDrawMove, toolDrawStart } from "./toolDraw";

export const startToolsCanvas = (canvas) => {
	const offset = { x: canvas.canvas.getBoundingClientRect().left, y: canvas.canvas.getBoundingClientRect().top}
	console.log('offset:', offset);
	let coord = {x1: 0, y1: 0, x2: 0, y2: 0}

	const setCoord = (x2, y2) => ({x1: coord.x2, y1: coord.y2, x2, y2})

	const handleMove = (e) => {
		const toolActive = localStorage.getItem(TYPES.SET_ACTIVE_TOOL)
		coord = setCoord(e.clientX - offset.x, e.clientY - offset.y)
		//Llamar las herramientas acá
		if(toolActive === 'Draw') toolDrawMove(coord, canvas);
	}

	//Activo el movimiento
	const handleDown = (e) => {
		if(e.target === canvas.canvas){
			coord.x1 = coord.x2 = e.pageX - offset.x
			coord.y1 = coord.y2 = e.pageY - offset.y
			canvas.beginPath()
			toolDrawStart({x: coord.x1, y: coord.y2}, canvas)
			document.addEventListener('mousemove', handleMove)
		}
	} 

	//Dejo de dibujar
	const handleUp = () => {
		canvas.closePath()
		document.removeEventListener('mousemove', handleMove)
	}

	document.addEventListener('mousedown', handleDown)
	document.addEventListener('mouseup', handleUp)
	
	return () => {
		document.addEventListener('mousedown', handleDown)
		document.addEventListener('mouseup', handleUp)
	}
}