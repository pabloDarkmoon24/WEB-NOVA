// src/pages/introduccionNova/mas/reporteIngresos.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/manualNova.css";

export function ReporteIngresosPage() {
  // ID del video de Google Drive (reemplazar cuando tengas el video)
  const videoId = "18vNqU-E0QMRczhg9xDw1q_LrzIzCdGw4"; 

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
              title="Video Reporte de Ingresos NOVA"
            />
          </div>
          <figcaption className="nova-figcaption">
            Recurso del manual: Reporte de Ingresos en NOVA.
          </figcaption>
        </figure>

        {/* TÍTULO */}
        <h2 className="nova-title">Reporte de Ingresos</h2>

        {/* Contenido */}
        <section className="nova-content">
          <p>
            Podrás ver una <strong>lista de ingresos registrados</strong>, con la información del cliente y su estado.
          </p>

          <p>
            Podrás filtrarlos por <strong>fecha de inicio y finalización</strong>, al igual que agruparlos por su estado:
          </p>

          <ul>
            <li>
              <strong>Pagada:</strong> Ingresos que fueron registrados como pagados por el cliente.
            </li>
            <li>
              <strong>Pendiente:</strong> Ingresos pendientes de pago por parte del cliente.
            </li>
            <li>
              <strong>Vencida:</strong> Ingresos que vencieron en su última fecha de pago.
            </li>
            <li>
              <strong>Pago parcial:</strong> Ingresos que solo registraron una parte de su pago mas no el total.
            </li>
            <li>
              <strong>Sobrepago:</strong> Ingresos que registraron el pago y dinero adicional de parte del cliente.
            </li>
            <li>
              <strong>Anulada:</strong> Ingresos que se registraron como cobros anulados o cancelados por parte del ISP.
            </li>
            <li>
              <strong>Cartera castigada:</strong> Ingresos que se registraron vencidos y que no se han podido lograr 
              cobrar, y se indican como incobrables y/o pérdidas.
            </li>
          </ul>

          <div className="nova-note">
            El reporte de ingresos de NOVA te permite <strong>visualizar y analizar el estado financiero</strong> de 
            tu operación en tiempo real, facilitando la gestión de cobranza y la toma de decisiones estratégicas.
          </div>

          <div className="nova-actions">
            <Link to="/introduccion/mas" className="nova-back">
              ← Volver a Más
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}