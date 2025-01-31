import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProjectsPage from "../pages/Projects";
import Abilities from "../pages/Skills";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Abilities />} />
        <Route path="/Projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
