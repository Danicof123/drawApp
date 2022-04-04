import { AppCanvasProvider } from "../context/AppCanvasContext";
import Canvas from "../components/Canvas";
import WindowToolsCanvas from "../components/WindowToolsCanvas";

export default function HomePage() {
  const estilosTemp = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3rem",
  };

  return (
    <div style={estilosTemp}>
      <AppCanvasProvider>
        <WindowToolsCanvas />
        <Canvas />
      </AppCanvasProvider>
    </div>
  );
}
