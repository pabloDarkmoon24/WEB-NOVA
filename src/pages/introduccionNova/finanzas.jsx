// src/pages/introduccionNova/finanzas.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/manualNova.css";

export function FinanzasPage() {
  // ID del video de Google Drive (reemplazar cuando tengas el video)
  const videoId = "1V17P3u-E8V5wyoTc0rSWg5m1OIVMkqMg"; 

  return (
    <main className="nova-article">
      <div className="nova-wrap">
        {/* Video desde Google Drive */}
        <figure className="nova-figure">
          <div className="nova-video-wrap">
            <iframe
              src={`https://drive.google.com/file/d/${videoId}/preview`}
              className="nova-video"
              allow="autoplay"
              style={{ border: 0 }}
              title="Video Finanzas NOVA"
            />
          </div>
          <figcaption className="nova-figcaption">
            Recurso del manual: Finanzas en NOVA.
          </figcaption>
        </figure>

        {/* TÍTULO */}
        <h2 className="nova-title">Finanzas</h2>

        {/* Contenido */}
        <section className="nova-content">
          <p>
            Sean bienvenidos a NOVA. Hoy les quiero mostrar la parte de nuestro software dedicada a las 
            <strong> finanzas</strong>.
          </p>

          <p>
            Para acceder, vamos a la barra izquierda, bajamos y encontramos <strong>Finanzas</strong>. Al entrar, 
            vemos tres secciones diferentes: <strong>Facturas</strong>, <strong>Pagos</strong> y 
            <strong> Acuerdos de Pago</strong>.
          </p>

          <h3>Sección 1: Facturas</h3>
          <p>
            Este panel nos permite visualizar de forma <strong>más rápida y precisa</strong> todas las facturas del 
            sistema. También podemos ver un <strong>resumen visual</strong> que clasifica las facturas según su estado:
          </p>
          <ul>
            <li>Facturas pendientes</li>
            <li>Facturas pagadas</li>
            <li>Facturas con pagos parciales</li>
            <li>Facturas vencidas</li>
            <li>Facturas con acuerdos de pago</li>
          </ul>
          <p>
            También encontramos un indicador que muestra el <strong>total de facturas</strong> registradas en el sistema.
          </p>

          <h3>Sección 2: Pagos</h3>
          <p>
            Este panel nos ofrece una <strong>visión integral del comportamiento financiero reciente</strong>. 
            En la parte superior vemos cuatro indicadores clave:
          </p>
          <ul>
            <li><strong>Todos los pagos</strong></li>
            <li><strong>Recaudos del día</strong></li>
            <li><strong>Recaudos de la semana</strong></li>
            <li><strong>Recaudos del mes</strong></li>
          </ul>

          <p>
            Abajo podemos acceder con más detalles de cada transacción:
          </p>
          <ul>
            <li>Quién realizó el pago</li>
            <li>Valor del pago</li>
            <li>Qué canal utilizaron (efectivo, pago electrónico, etc.)</li>
            <li>Quién fue el que lo recaudó</li>
            <li>Valor de la factura</li>
            <li>Fecha exacta y hora en que se pagó</li>
          </ul>

          <h3>Sección 3: Acuerdos de Pago</h3>
          <p>
            Aquí se encuentran todos los <strong>acuerdos de pago registrados</strong>, clasificados en:
          </p>
          <ul>
            <li><strong>Acuerdos de pago pendientes</strong></li>
            <li><strong>Acuerdos que se han cumplido</strong></li>
            <li><strong>Acuerdos incumplidos</strong> (con factura vencida)</li>
          </ul>

          <p>
            Abajo podemos ver los <strong>detalles de cada acuerdo</strong>:
          </p>
          <ul>
            <li>Cliente</li>
            <li>Valor pendiente</li>
            <li>Fecha que se acordó</li>
            <li>Día y hora exacta del acuerdo</li>
            <li>Si ya cumplió o no</li>
          </ul>

          <p>
            Ya recorrimos la parte de finanzas. Vimos cómo cada una aporta <strong>claridad</strong>, es 
            <strong> fácil de manejar</strong> y de entender.
          </p>

          <div className="nova-note">
            El módulo de finanzas de NOVA te permite <strong>controlar y monitorear el estado financiero</strong> de 
            tu operación en tiempo real, facilitando la gestión de cobros, pagos y acuerdos comerciales.
          </div>

          <div className="nova-actions">
            <Link to="/manuales/introduccion" className="nova-back">
              ← Volver a Introducción
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}