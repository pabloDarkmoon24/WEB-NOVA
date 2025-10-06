import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { Home } from "./pages/home";
import Navbar from "./components/navBar";
import { TopBanner } from "./components/topBanner";
import { ManualPage } from "./pages/manuales";
import { ContactoPage } from "./pages/contacto";
import { RegistroPage } from "./pages/RegistroNova";

import { NovaManualPage } from "./pages/manuales/nova";
import { PrimerosPasosPage } from "./pages/manuales/PrimerosPasos";
import { NovaManualGrowPage } from "./pages/manuales/migracion";
import { AsistenteIaManualPage } from "./pages/manuales/IadeNova";
import { CortesAutoManualPage } from "./pages/manuales/automatizacion-cortes";
import { MetricsManualPage } from "./pages/manuales/metricas-dashboard";

function MotionWrap({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MotionWrap><Home /></MotionWrap>} />
        <Route path="/manuales" element={<MotionWrap><ManualPage /></MotionWrap>} />
        <Route path="/manuales/primeros-pasos" element={<MotionWrap><PrimerosPasosPage /></MotionWrap>} />
        <Route path="/manuales/nova" element={<MotionWrap><NovaManualPage /></MotionWrap>} />
        <Route path="/manuales/migracion" element={<MotionWrap><NovaManualGrowPage /></MotionWrap>} />
        <Route path="/manuales/asistente-ia" element={<MotionWrap><AsistenteIaManualPage /></MotionWrap>} />
        <Route path="/manuales/automatizacion-cortes" element={<MotionWrap><CortesAutoManualPage /></MotionWrap>} />
        <Route path="/manuales/metricas-dashboard" element={<MotionWrap><MetricsManualPage /></MotionWrap>} />
        <Route path="/registro" element={<MotionWrap><RegistroPage /></MotionWrap>} />
        <Route path="/contacto" element={<MotionWrap><ContactoPage /></MotionWrap>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <TopBanner />
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
