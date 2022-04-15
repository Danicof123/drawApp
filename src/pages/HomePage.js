import { AppCanvasProvider } from "../context/AppCanvasContext";
import Canvas from "../components/Canvas";
import WindowToolsCanvas from "../components/WindowToolsCanvas";
import NavbarTopToolsCanvas from "../components/NavbarTopToolsCanvas";

export default function HomePage() {
  const estilosTemp = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3rem",
		minHeight: '100vh'
  };

  return (
    <div style={estilosTemp}>
      <AppCanvasProvider>
        <WindowToolsCanvas />
				<NavbarTopToolsCanvas />
        <Canvas />
      </AppCanvasProvider>
    </div>
  );
}
