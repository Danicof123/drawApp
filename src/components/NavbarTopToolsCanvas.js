import { useContext, useEffect, useState } from "react";
import { useTools } from "../hooks/useTools";
import AppCanvasContext from "../context/AppCanvasContext";
import navbarStyle from "../styles/navbarTopToolsCanvas.module.css";

//Iconos
import { MdExpandMore } from "react-icons/md";

export default function NavbarTopToolsCanvas() {
  const { appCanvasState } = useContext(AppCanvasContext);
  const [tool, setTool] = useState(
    appCanvasState.tools.find((t) => t.name === appCanvasState.active)
  );
  const toolsIcon = useTools(appCanvasState.active);

  useEffect(() => {
    setTool(appCanvasState.tools.find((t) => t.name === appCanvasState.active));
  }, [appCanvasState]);

  return (
    <div className={navbarStyle.navbarTop}>
      <div className={navbarStyle.toolActive}>
        <toolsIcon.icon />
        <div className={navbarStyle.nameToolActive}>{tool.label}</div>
        <MdExpandMore className={navbarStyle.chevron} />
      </div>
      <div className={navbarStyle.toolOptions}>
				{/* Si tiene trazo que lo muestre */}
        {tool?.options?.stroke && (
          <div className={navbarStyle.inputToolOptions}>
            <label>
              Trazo:
              <input 
								type="number" 
								defaultValue={tool.options.stroke.size}
							/>
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
