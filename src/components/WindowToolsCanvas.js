import WindowFrame from "../components/WindowFrame";
import toolsStyle from "../styles/toolsCanvas.module.css";

//Iconos
import {
  MdCropDin,
  MdPanoramaFishEye,
  MdEdit,
  MdClear,
  MdFormatColorFill,
  MdTitle,
  MdPanTool,
  MdZoomIn,
  MdZoomOut,
} from "react-icons/md";
import { useContext } from "react";
import AppCanvasContext from "../context/AppCanvasContext";

function WindowToolsCanvas() {
  const { appCanvasState, handleColor, handleTool } =
    useContext(AppCanvasContext);

  console.log(appCanvasState.tools.name);
  return (
    <WindowFrame initialPosition={{ top: 200, left: 600 }}>
      <div className={toolsStyle.container}>
        <div
          className={
            appCanvasState.tools.name === "Rect"
              ? `${toolsStyle.item} ${toolsStyle.active}`
              : toolsStyle.item
          }
          onClick={() => handleTool({ name: "Rect" })}
        >
          <MdCropDin />
        </div>
        <div
          className={
            appCanvasState.tools.name === "Circle"
              ? `${toolsStyle.item} ${toolsStyle.active}`
              : toolsStyle.item
          }
          onClick={() => handleTool({ name: "Circle" })}
        >
          <MdPanoramaFishEye />
        </div>

        <div
          className={
            appCanvasState.tools.name === "Draw"
              ? `${toolsStyle.item} ${toolsStyle.active}`
              : toolsStyle.item
          }
          onClick={() => handleTool({ name: "Draw" })}
        >
          <MdEdit />
        </div>
        <div
          className={
            appCanvasState.tools.name === "Eraser"
              ? `${toolsStyle.item} ${toolsStyle.active}`
              : toolsStyle.item
          }
          onClick={() => handleTool({ name: "Eraser" })}
        >
          <MdClear />
        </div>

        <div
          className={
            appCanvasState.tools.name === "PaintFill"
              ? `${toolsStyle.item} ${toolsStyle.active}`
              : toolsStyle.item
          }
          onClick={() => handleTool({ name: "PaintFill" })}
        >
          <MdFormatColorFill />
        </div>
        <div
          className={
            appCanvasState.tools.name === "Text"
              ? `${toolsStyle.item} ${toolsStyle.active}`
              : toolsStyle.item
          }
          onClick={() => handleTool({ name: "Text" })}
        >
          <MdTitle />
        </div>

        <div
          className={
            appCanvasState.tools.name === "Hand"
              ? `${toolsStyle.item} ${toolsStyle.active}`
              : toolsStyle.item
          }
          onClick={() => handleTool({ name: "Hand" })}
        >
          <MdPanTool />
        </div>
        <div
          className={
            appCanvasState.tools.name === "ZoomIn"
              ? `${toolsStyle.item} ${toolsStyle.active}`
              : toolsStyle.item
          }
          onClick={() => handleTool({ name: "ZoomIn" })}
        >
          <MdZoomIn />
        </div>

        <div
          className={
            appCanvasState.tools.name === "ZoomOut"
              ? `${toolsStyle.item} ${toolsStyle.active}`
              : toolsStyle.item
          }
          onClick={() => handleTool({ name: "ZoomOut" })}
        >
          <MdZoomOut />
        </div>
      </div>
    </WindowFrame>
  );
}

export default WindowToolsCanvas;
