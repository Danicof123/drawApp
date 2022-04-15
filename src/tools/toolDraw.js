import { TYPES } from "../actions/appCanvasActions"

export const draw = {
	name: 'Draw',
	label: 'Lápiz',
	options: {
		stroke: {
			active: true,
			size: localStorage.getItem(TYPES.SET_SIZE_STROKE_TOOL) || 30,
		}
	},
}

export const toolDrawMove = (coord, canvas) => {
	//Para comenzar
	const size = draw.options.stroke.size;
	canvas.strokeStyle = localStorage.getItem(TYPES.SET_PRIMARY_COLOR);
	canvas.lineTo((coord.x1 + coord.x2) / 2, (coord.y1 + coord.y2) / 2)
	canvas.stroke();
}

//Un poco hardcodeado
export const toolDrawStart = (coord, canvas) => {
	const size = draw.options.stroke.size;
	canvas.lineWidth = size;
	canvas.lineJoin = canvas.lineCap = 'round';
	canvas.strokeStyle = localStorage.getItem(TYPES.SET_PRIMARY_COLOR);
	canvas.lineTo(coord.x, coord.y)
	canvas.stroke();
}

/*
export const toolDrawStart = (coord, canvas) => {
	const size = draw.options.stroke.size;
	canvas.fillStyle = localStorage.getItem(TYPES.SET_PRIMARY_COLOR)
	canvas.fillRect(coord.x - size/2, coord.y - size/2, size, size)
}
*/