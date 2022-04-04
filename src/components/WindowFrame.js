import React, { useRef } from 'react'
import usePosition from '../hooks/usePosition'
import framesStyle from '../styles/frameStyle.module.css'

//Marco de la ventana
function WindowFrame({initialPosition, children}) {
	const refWindowFrame = useRef()
	const refTriggerElement = useRef()
	const [position] = usePosition(initialPosition, refWindowFrame, refTriggerElement)

	return (
		<div 
			className={framesStyle.windowFrame}
			style={position}
			ref={refWindowFrame}
		>
			{/*Barrita para arrastrar la ventana */}
			<div className={framesStyle.barTopWindowFrame} ref={refTriggerElement} />
			{/*Cuerpo de la ventana */}
			{children}
		</div>
	)
}

export default WindowFrame