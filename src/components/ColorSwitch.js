//Librerias
import { useContext, useEffect, useRef } from 'react';
//Components
import AppCanvasContext from '../context/AppCanvasContext';
//css
import colorSwitchStyle from '../styles/colorSwitch.module.css'
//Icons
import { MdAutorenew } from "react-icons/md";
import { useWindow } from '../hooks/useWindow';
import WindowColorPicker from './windows/WindowColorPicker';

export default function ColorSwitch() {
  const { 
		appCanvasState, 
		handleActiveColor,
		handlePrimaryColor,
		handleSecondColor
	} = useContext(AppCanvasContext);
	const [isOpen, openColorPicker] = useWindow(false)

	const refColorPrimary = useRef();
	const refColorSecond = useRef();
	
	//Acciones para el cambio del color (Primario/Secundario)
	const handleSwitchColor = () => {
		const tempColor = appCanvasState.color.primary
		handlePrimaryColor(appCanvasState.color.second);
		handleSecondColor(tempColor);
	}

	//Función para Abrir el ColorPicker
	const handleSelectColor = (e) => {
		openColorPicker(true)
		if(e.target === refColorPrimary.current){
			handleActiveColor('primary')
			refColorPrimary.current.style.zIndex = 10;
			refColorSecond.current.style.zIndex = 0;
			return;
		}
		if(e.target === refColorSecond.current){
			handleActiveColor('second')
			refColorPrimary.current.style.zIndex = 0;
			refColorSecond.current.style.zIndex = 10;
			return;
		}
	}

	//Obligar a que la ventana(ColorPicker) aparezca cerrada
	useEffect(() => openColorPicker(false), [])
//asdsa
	return (<>
		{isOpen && <WindowColorPicker openColorPicker={openColorPicker}/>}
		<div className={colorSwitchStyle.colorSwitch}>
			<MdAutorenew className={colorSwitchStyle.switchTool} onClick={handleSwitchColor}/>
			<div ref={refColorPrimary} className={`${colorSwitchStyle.colorItem} ${colorSwitchStyle.colorPrimary}`} style={{backgroundColor: appCanvasState.color.primary.hexString}} onClick={handleSelectColor} />
			<div ref={refColorSecond} className={`${colorSwitchStyle.colorItem} ${colorSwitchStyle.colorSecond}`} style={{backgroundColor: appCanvasState.color.second.hexString}} onClick={handleSelectColor} />
		</div>
	</>)
}
