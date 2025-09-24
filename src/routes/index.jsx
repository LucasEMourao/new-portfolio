import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";

const Home = lazy(() => import("../pages/Home"));
const ProjectsPage = lazy(() => import("../pages/Projects"));
const Abilities = lazy(() => import("../pages/Skills"));

// Componente para envolver páginas com animação
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <AnimatedPage>
                  <Home />
                </AnimatedPage>
              }
            />
            <Route
              path="/Skills"
              element={
                <AnimatedPage>
                  <Abilities />
                </AnimatedPage>
              }
            />
            <Route
              path="/Projects"
              element={
                <AnimatedPage>
                  <ProjectsPage />
                </AnimatedPage>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AppRoutes;
