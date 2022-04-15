import { useContext, useEffect, useRef, useState } from 'react'
import iro from '@jaames/iro';
import WindowFrame from '../WindowFrame'
import AppCanvasContext from '../../context/AppCanvasContext';
//Estilos
import colorPickerStyle from '../../styles/colorPicker.module.css'

export default function WindowColorPicker({ openColorPicker }) {
	const { getActiveColor, handleColor } = useContext(AppCanvasContext);
	const [color, setColor] = useState(getActiveColor.hexString)
	//ColoPicker al iniciar la ventana
	const [cp, setCp] = useState()
	const refColorPicker = useRef()


	//Cambia el estado del color cuando se modifica el input
	const handleOnChangeInputColor = (e) => {
		const inputColor = e.target.value;
		//Si es un hexadecimal válido
		if(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.test(inputColor)){
			const hexColor = inputColor[0] === '#' ? inputColor : '#' + inputColor;
			setColor(hexColor)
			cp.color.hexString = hexColor;
		}
	}

	//Acepta el color elegido
	const handleSelectColor = () => {
		handleColor({hexString: color})
		openColorPicker(false)
	}

	//Cuando se crea la ventana
	useEffect(() => {
		setCp(new iro.ColorPicker(refColorPicker.current, {
			color,
			width: 150,
			sliderSize: 8,
			handleRadius: 6,
			padding: 0,
			margin: 8,
			layout: [
				{
					component: iro.ui.Wheel,
				},
				{
					component: iro.ui.Slider,
					options: {
						sliderType: 'hue',
					}
				},
				{
					component: iro.ui.Slider,
					options: {
						sliderType: 'saturation',
					}
				},
				{
					component: iro.ui.Slider,
					options: {
						sliderType: 'value'
					}
				},
			]
		}))
	}, [])

	//Cuando se selecciona el color a cambiar (Primario/Secundario)
	useEffect(() => {
		if(cp){
			setColor(getActiveColor.hexString)
			cp.color.hexString = getActiveColor.hexString;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getActiveColor])
	
	//Una vez el cp (ColorPicker fue creado, añado evento de cambio de color)
	useEffect(() =>
		cp &&	cp.on("color:change", (e) => setColor(cp.color.hexString))
	, [cp])


	return (
		<WindowFrame>
			<div className={colorPickerStyle.contenedorPicker} >
				<div ref={refColorPicker}
				className={colorPickerStyle.ColorPicker} />
				<div className={colorPickerStyle.colorDescription} >
					<label>Hex: 
						<input 
							type='text'
							maxLength={7}
							onChange={ handleOnChangeInputColor }
							value={ color }
						/></label>
						<div className={colorPickerStyle.sampleColor} style={{backgroundColor: color}}/>
				</div>
				<div className={colorPickerStyle.buttonsPicker} >
					<button onClick={handleSelectColor} >Aceptar</button>
					<button onClick={() => openColorPicker(false)}>Cancelar</button>
				</div>
			</div>
		</WindowFrame> 
	)
}
