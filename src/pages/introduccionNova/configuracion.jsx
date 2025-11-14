// src/pages/introduccionNova/configuracion.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/manuales.css";
import { Footer } from "../../components/footer";

export function ConfiguracionPage() {
  return (
    <div className="ayuda-main">
      <section className="ayuda-hero">
        <div className="ayuda-hero-content">
          <h1>Configuración</h1>
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
            <span>Configuración</span>
          </div>
        </div>
      </section>

      {/* SECCIÓN CONFIGURACIÓN */}
      <section className="ayuda-manuales-section">
        <p className="ayuda-subtitle">Personaliza y configura los parámetros de tu sistema NOVA</p>

        <div className="ayuda-manuales-list">
          <Link to="/introduccion/configuracion/mikrotik" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">🌐</div>
              <div>
                <div className="mlc-title">Mikrotik</div>
                <div className="mlc-desc">Configuración de dispositivos Mikrotik en la red.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>

          <Link to="/introduccion/configuracion/ip-pool" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">🔢</div>
              <div>
                <div className="mlc-title">IP Pool</div>
                <div className="mlc-desc">Administración de pools de direcciones IP.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>

          <Link to="/introduccion/configuracion/planes" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">📋</div>
              <div>
                <div className="mlc-title">Planes</div>
                <div className="mlc-desc">Gestión de planes de servicio y tarifas.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>

          <Link to="/introduccion/configuracion/promociones" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">🎁</div>
              <div>
                <div className="mlc-title">Promociones</div>
                <div className="mlc-desc">Creación y administración de promociones comerciales.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>

          <Link to="/introduccion/configuracion/personal" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">👥</div>
              <div>
                <div className="mlc-title">Personal</div>
                <div className="mlc-desc">Gestión de usuarios y permisos del sistema.</div>
              </div>
            </div>
            <div className="mlc-arrow">→</div>
          </Link>

          <Link to="/introduccion/configuracion/datos-empresa" className="manual-link-card">
            <div className="mlc-left">
              <div className="mlc-icon">🏢</div>
              <div>
                <div className="mlc-title">Datos Empresa</div>
                <div className="mlc-desc">Configuración de información corporativa.</div>
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