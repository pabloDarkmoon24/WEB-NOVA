// src/pages/introduccionNova/mas.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/manuales.css";
import { Footer } from "../../components/footer";

export function MasPage() {
  return (
    <div className="ayuda-main">
    <section className="ayuda-hero">
      <div className="ayuda-hero-content">
        <h1>Más</h1>
        <div className="ayuda-breadcrumb">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Inicio</span>
          </Link>
          <span className="ayuda-breadcrumb-sep">»</span>
          <Link to="/manuales" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Manuales</span>
          </Link>
          <span className="ayuda-breadcrumb-sep">»</span>
          <Link to="/manuales/introduccion" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Introducción a Nova</span>
          </Link>
          <span className="ayuda-breadcrumb-sep">»</span>
          <span>Más</span>
        </div>
      </div>
    </section>

      {/* SECCIÓN MÁS */}
      <section className="ayuda-manuales-section">
        <p className="ayuda-subtitle">Herramientas adicionales para gestionar tu operación</p>

        <div className="ayuda-manuales-list">
          <Link to="/introduccion/mas/inventario-equipos" className="manual-link-card"> 
            <div className="mlc-left">
              <div className="mlc-icon">📦</div>
              <div>
                <div className="mlc-title">Inventario de Equipos</div>
                <div className="mlc-desc">Gestiona y controla tu inventario de equipos técnicos.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>

          <Link to="/introduccion/mas/inventario-materiales" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">🔧</div>
              <div>
                <div className="mlc-title">Inventario de Materiales</div>
                <div className="mlc-desc">Administra materiales y suministros operativos.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>

          <Link to="/introduccion/mas/reporte-ingresos" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">📈</div>
              <div>
                <div className="mlc-title">Reporte de Ingresos</div>
                <div className="mlc-desc">Visualiza y analiza los ingresos de tu operación.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>

          <Link to="/introduccion/mas/logs-sistema" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">📋</div>
              <div>
                <div className="mlc-title">Logs del Sistema</div>
                <div className="mlc-desc">Consulta el historial de actividades del sistema.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>

          <Link to="/introduccion/mas/resolucion-tickets" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">🎫</div>
              <div>
                <div className="mlc-title">Resolución de Tickets</div>
                <div className="mlc-desc">Gestiona y resuelve tickets de soporte técnico.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>

          <Link to="/introduccion/mas/administracion-flota" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">🚗</div>
              <div>
                <div className="mlc-title">Administración de Flota</div>
                <div className="mlc-desc">Controla y administra tu flota de vehículos.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>

          <Link to="/introduccion/mas/manuales" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">📚</div>
              <div>
                <div className="mlc-title">Manuales</div>
                <div className="mlc-desc">Documentación técnica y guías de usuario.</div>
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