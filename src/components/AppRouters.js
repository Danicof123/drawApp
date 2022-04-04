import { Route, Routes } from "react-router-dom";
import CreandoPage from "../pages/CreandoPage";
import Home from "../pages/HomePage";
import Canvas from "./Canvas";

export default function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/canvas" element={<Canvas />} />
      <Route path="/creando" element={<CreandoPage />} />
      <Route path="*" element={ <h2> Not Encontrado </h2> } />
    </Routes>
  );
}
