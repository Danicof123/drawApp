import { useContext } from "react";
import AppCanvasContext from "../context/AppCanvasContext";
import { useTools } from "../hooks/useTools";
import toolsStyle from "../styles/toolsCanvas.module.css";

function ListToolsCanvas() {
  const { appCanvasState, handleTool } = useContext(AppCanvasContext);
  const tools = useTools();

  return tools.map((tool) => (
    <div
      key={tool.id}
      className={
        appCanvasState.active === tool.name
          ? `${toolsStyle.item} ${toolsStyle.active}`
          : toolsStyle.item
      }
      onClick={() => handleTool(tool.name)}
    >
      <tool.icon />
    </div>
  ));
}

export default ListToolsCanvas;
