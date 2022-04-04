import { useEffect, useState, useRef } from 'react';
import { useViewport } from '../hooks/useViewport';
import '../styles/canvas.css'

export default function Canvas() {
	const mainCanvas = useRef()
	const viewportWidth = useViewport()
	const [cvx, setCvx] = useState({})
	const [offset, setOffset] = useState({})
	const [deltaStart, setDeltaStart] = useState({})
	const [deltaEnd, setDeltaEnd] = useState({})

//Bajar mouse
	const handleMouseDown = (e) => {
		const deltaX = e.clientX - offset.x
		const deltaY = e.clientY - offset.y

		setDeltaStart({x: deltaX, y: deltaY})
	}
//Levantar el mouse
	const handleMouseUp = e => {
		const deltaX = e.clientX - offset.x
		const deltaY = e.clientY - offset.y

		setDeltaEnd({x: deltaX, y: deltaY})
	}

//Creación del entorno de dibujo
	useEffect(() => {
		const canvas = mainCanvas.current.getContext('2d')
		setCvx(canvas)
		setOffset({x: canvas.canvas.offsetLeft, y: canvas.canvas.offsetTop})
		
	}, [mainCanvas])

//Reconfigurar offset cada vez q cambie el ancho
	useEffect(() => {
		if(cvx.canvas)
			setOffset({x: cvx.canvas.offsetLeft, y: cvx.canvas.offsetTop})
	}
	,[viewportWidth, cvx.canvas])
	
//Dibujar cada vez q se levante el mouse
	useEffect(() => {
		if(!isNaN(deltaEnd.x) && !isNaN(deltaEnd.y)){
			const heigth = deltaEnd.y - deltaStart.y
			const width = deltaEnd.x - deltaStart.x
			cvx.fillRect(deltaStart.x, deltaStart.y, width, heigth)
		}
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [deltaEnd])
	
  return (
    <>
      <canvas
			 	width='800'
				height='600' 
				ref={mainCanvas} 
				className="main-canvas"
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
			>
			</canvas>
    </>
  );
}
