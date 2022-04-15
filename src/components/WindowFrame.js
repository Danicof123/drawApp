import ReactDOM from "react-dom";
import React, { useRef } from 'react'
import usePosition from '../hooks/usePosition'
import framesStyle from '../styles/frameStyle.module.css'

//Marco de la ventana
function WindowFrame({initialPosition={top: '30vh', left: '30vw'}, direction='column', children }) {
	const refWindowFrame = useRef()
	const refTriggerElement = useRef()
	const [position] = usePosition(initialPosition, refWindowFrame, refTriggerElement)

	//Enviar la ventana al nodo windows
	return ReactDOM.createPortal(
		<div 
			className={framesStyle.windowFrame}
			style={{...position, flexDirection: direction}}
			ref={refWindowFrame}
		>
			{/*Barrita para arrastrar la ventana */}
			<div className={framesStyle.barTopWindowFrame} ref={refTriggerElement} />
			{/*Cuerpo de la ventana */}
			{children}
		</div>,
	document.getElementById('windows'))
}

export default WindowFrame