import { useEffect, useState, useRef } from 'react';
import '../styles/canvas.css'
import { startToolsCanvas } from '../tools/handleTools';

export default function Canvas({width=600, height=500}) {
	const $canvas = useRef()
	const [cvx, setCvx] = useState()

//Creación del entorno de dibujo
	useEffect(() => setCvx($canvas.current.getContext('2d')), [])

	//El canvas se creo
	useEffect(() => {
		let handleToolsCanvas;
		//Cuando cvx tenga algo (El canvas)
		if(cvx){
			//Se activan las herramientas del canvas
			handleToolsCanvas = startToolsCanvas(cvx);
		}

		//Al desmontarse de se desactivan las herramientas del canvas
		return handleToolsCanvas && handleToolsCanvas()
	}, [cvx])

  return (
    <>
      <canvas
			 	width={width}
				height={height} 
				ref={$canvas} 
				className="main-canvas"
			>
			</canvas>
    </>
  );
}
