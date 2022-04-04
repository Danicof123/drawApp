import { useEffect, useState } from "react"

const usePosition = (initialPosition, element, activeMove) => {
	const [position, setPosition] = useState(initialPosition)
	
	//Para la posicion relativa del click y la ventana
	const shift = {
		x: '',
		y: ''
	}
	
	//Centra el elemento a las coordenadas del cursor en relacion al elemento activo
	const moveAt = (coorX, coorY) => (
		{
			left: coorX - shift.x + 'px',
			top: coorY - shift.y + 'px'
		}
	)
	
	//Mueve en tiempo real el elemento
	const handleMove = (e) => {
		setPosition(moveAt(e.clientX, e.clientY))
	}

	//Funcion que activa los movimientos
	const handleActiveMove = (e) => {
		if(e.target === activeMove.current){
				shift.x = e.clientX - activeMove.current.getBoundingClientRect().left;
				shift.y = e.clientY - activeMove.current.getBoundingClientRect().top;

			setPosition(moveAt(e.cleintX, e.clientY))
			document.addEventListener('mousemove', handleMove)
		}
	}

	//Limpia los eventos
	const handleClearEvents = () => {
		document.removeEventListener('mousemove', handleMove)
	}

	//Añade eventos y los remueve cuando no sean necesario
	useEffect(() => {
		document.addEventListener('mousedown', handleActiveMove)
		document.addEventListener('mouseup', handleClearEvents)
	
		return () => {
			document.removeEventListener('mousedown', handleActiveMove)
			document.removeEventListener('mouseup', handleClearEvents)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	return [position]
}

export default usePosition