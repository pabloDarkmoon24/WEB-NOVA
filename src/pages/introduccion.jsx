import React from "react";
import { Link } from "react-router-dom";
import "../styles/manuales.css";
import { Footer } from "../components/footer";

export function IntroduccionNovaPage() {
  return (
<div className="ayuda-main">
  <section className="ayuda-hero">
    <div className="ayuda-hero-content">
      <h1>Introducción a Nova</h1>
      <div className="ayuda-breadcrumb">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span>Inicio</span>
        </Link>
        <span className="ayuda-breadcrumb-sep">»</span>
        <Link to="/manuales" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span>Manuales</span>
        </Link>
        <span className="ayuda-breadcrumb-sep">»</span>
        <span>Introducción a Nova</span>
      </div>
    </div>
  </section>

      {/* SECCIÓN INTRODUCCIÓN */}
      <section className="ayuda-manuales-section">
        <p className="ayuda-subtitle">Descubre las funcionalidades principales de NOVA</p>

        <div className="ayuda-manuales-list">
          <Link to="/introduccion/dashboard" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">📊</div>
              <div>
                <div className="mlc-title">Dashboard</div>
                <div className="mlc-desc">Panel de control y métricas principales de NOVA.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>

          <Link to="/introduccion/gestion-clientes" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">👥</div>
              <div>
                <div className="mlc-title">Gestión de clientes</div>
                <div className="mlc-desc">Administra tu base de clientes de forma eficiente.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>

          <Link to="/introduccion/chat" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">💬</div>
              <div>
                <div className="mlc-title">Chat</div>
                <div className="mlc-desc">Comunicación directa con tus clientes.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>
          
          <Link to="/introduccion/agenda" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">📅</div>
              <div>
                <div className="mlc-title">Agenda</div>
                <div className="mlc-desc">Organiza y gestiona tus actividades operativas.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>



          <Link to="/introduccion/finanzas" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">💰</div>
              <div>
                <div className="mlc-title">Finanzas</div>
                <div className="mlc-desc">Control financiero y gestión de pagos.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>

          <Link to="/introduccion/mas" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">➕</div>
              <div>
                <div className="mlc-title">Más</div>
                <div className="mlc-desc">Funcionalidades adicionales de NOVA.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>

          <Link to="/introduccion/configuracion" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">⚙️</div>
              <div>
                <div className="mlc-title">Configuración</div>
                <div className="mlc-desc">Personaliza y configura tu sistema NOVA.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>
        </div>
      </section>

      <Footer/>
    </div>
  );
}