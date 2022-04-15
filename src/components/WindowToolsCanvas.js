import WindowFrame from "../components/WindowFrame";
import toolsStyle from "../styles/toolsCanvas.module.css";
import ColorSwitch from "./ColorSwitch";
import ListToolsCanvas from "./ListToolsCanvas";

function WindowToolsCanvas({isOpen}) {
  return (
    <WindowFrame isOpen={isOpen} initialPosition={{ top: 200, left: 200 }} direction='column'>
      <div className={toolsStyle.container}>
        <ListToolsCanvas />
      </div>
			<ColorSwitch />
    </WindowFrame>
  );
}

export default WindowToolsCanvas;
