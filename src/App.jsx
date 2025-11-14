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
import { IntroduccionNovaPage } from "./pages/introduccion";
import { DashboardManualPage } from "./pages/introduccionNova/dashboard";
import { GestionClientesPage } from "./pages/introduccionNova/gestionClientes";
import { ChatPage } from "./pages/introduccionNova/chat";
import { AgendaPage } from "./pages/introduccionNova/agenda";
import { MasPage } from "./pages/introduccionNova/mas";
import { AdministracionFlotaPage } from "./pages/introduccionNova/mas/administracionFlota";
import { InventarioEquiposPage } from "./pages/introduccionNova/mas/inventarioEquipos";
import { InventarioMaterialesPage } from "./pages/introduccionNova/mas/inventarioMateriales";
import { ReporteIngresosPage } from "./pages/introduccionNova/mas/reporteIngresos";
import { LogsPage } from "./pages/introduccionNova/mas/logs";
import { ResolucionTicketsPage } from "./pages/introduccionNova/mas/resolucionTiquets";
import { ManualesPage } from "./pages/introduccionNova/mas/manuales";
import { ConfiguracionPage } from "./pages/introduccionNova/configuracion";
import { MikrotikPage } from "./pages/introduccionNova/configuracion/mikrotik";
import { IpPoolPage } from "./pages/introduccionNova/configuracion/ippool";
import { PlanesPage } from "./pages/introduccionNova/configuracion/planes";
import { PromocionesPage } from "./pages/introduccionNova/configuracion/promociones";
import { DatosEmpresaPage } from "./pages/introduccionNova/configuracion/datosEmpresa";
import { PersonalPage } from "./pages/introduccionNova/configuracion/personal";
import { FinanzasPage } from "./pages/introduccionNova/finanzas";
import {RegistroExpo} from "./pages/RegistroExpo.jsx";

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
          <Route path="/manuales/introduccion" element={<MotionWrap><IntroduccionNovaPage /></MotionWrap>} />
            <Route path="/introduccion/dashboard" element={<MotionWrap><DashboardManualPage /></MotionWrap>} />
            <Route path="/introduccion/gestion-clientes" element={<MotionWrap><GestionClientesPage /></MotionWrap>} />
            <Route path="/introduccion/chat" element={<MotionWrap><ChatPage /></MotionWrap>} />
            <Route path="/introduccion/agenda" element={<MotionWrap><AgendaPage /></MotionWrap>} />
            <Route path="/introduccion/finanzas" element={<MotionWrap><FinanzasPage /></MotionWrap>} />


          <Route path="/introduccion/mas" element={<MotionWrap><MasPage /></MotionWrap>} />
            <Route path="/introduccion/mas/inventario-equipos" element={<MotionWrap><InventarioEquiposPage /></MotionWrap>} />
            <Route path="/introduccion/mas/inventario-materiales" element={<MotionWrap><InventarioMaterialesPage /></MotionWrap>} />
            <Route path="/introduccion/mas/reporte-ingresos" element={<MotionWrap><ReporteIngresosPage /></MotionWrap>} />
            <Route path="/introduccion/mas/logs-sistema" element={<MotionWrap><LogsPage /></MotionWrap>} />
            <Route path="/introduccion/mas/resolucion-tickets" element={<MotionWrap><ResolucionTicketsPage /></MotionWrap>} />
            <Route path="/introduccion/mas/administracion-flota" element={<MotionWrap><AdministracionFlotaPage /></MotionWrap>} />
            <Route path="/introduccion/mas/manuales" element={<MotionWrap><ManualesPage /></MotionWrap>} />
          
          <Route path="/introduccion/configuracion" element={<MotionWrap><ConfiguracionPage /></MotionWrap>} />
            <Route path="/introduccion/configuracion/mikrotik" element={<MotionWrap><MikrotikPage /></MotionWrap>} />
            <Route path="/introduccion/configuracion/ip-pool" element={<MotionWrap><IpPoolPage /></MotionWrap>} />
            <Route path="/introduccion/configuracion/planes" element={<MotionWrap><PlanesPage /></MotionWrap>} />
            <Route path="/introduccion/configuracion/promociones" element={<MotionWrap><PromocionesPage /></MotionWrap>} />
            <Route path="/introduccion/configuracion/personal" element={<MotionWrap><PersonalPage /></MotionWrap>} />
            <Route path="/introduccion/configuracion/datos-empresa" element={<MotionWrap><DatosEmpresaPage /></MotionWrap>} />
        


        <Route path="/manuales/primeros-pasos" element={<MotionWrap><PrimerosPasosPage /></MotionWrap>} />
        <Route path="/manuales/nova" element={<MotionWrap><NovaManualPage /></MotionWrap>} />
        <Route path="/manuales/migracion" element={<MotionWrap><NovaManualGrowPage /></MotionWrap>} />
        <Route path="/manuales/asistente-ia" element={<MotionWrap><AsistenteIaManualPage /></MotionWrap>} />
        <Route path="/manuales/automatizacion-cortes" element={<MotionWrap><CortesAutoManualPage /></MotionWrap>} />
        <Route path="/registro" element={<MotionWrap><RegistroPage /></MotionWrap>} />
        <Route path="/contacto" element={<MotionWrap><ContactoPage /></MotionWrap>} />
        <Route path="/expo2025" element={<MotionWrap><RegistroExpo /></MotionWrap>} />
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
