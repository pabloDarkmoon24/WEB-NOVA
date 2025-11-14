// src/pages/introduccionNova/mas/administracionFlota.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/manualNova.css";

export function AdministracionFlotaPage() {
  // ID del video de Google Drive (reemplazar cuando tengas el video)
  const videoId = "10971SEy6UspEIr_dluC7Te170iLFIL-4"; 

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
              title="Video Administración de Flota NOVA"
            />
          </div>
          <figcaption className="nova-figcaption">
            Recurso del manual: Administración de Flota en NOVA.
          </figcaption>
        </figure>

        {/* TÍTULO */}
        <h2 className="nova-title">Vehículos</h2>

        {/* Contenido */}
        <section className="nova-content">
          <p>
            Puedes registrar los <strong>vehículos que usas en tu empresa y tu equipo</strong>, podrás tener 
            control y registro de diferentes datos de tu vehículo, como el seguro, revisión, mantenimiento, 
            documentación al igual que <strong>localización por GPS</strong>.
          </p>

          <div className="nova-note">
            Para la localización por GPS debes tener el equipo correspondiente y añadir el 
            <strong> identificador de GPS</strong>.
          </div>

          <h3>Al crear el registro de un vehículo encontrarás las siguientes opciones:</h3>
          <ul>
            <li>
              <strong>Marca:</strong> La marca o fabricante del vehículo.
            </li>
            <li>
              <strong>Línea:</strong> Modelo del vehículo.
            </li>
            <li>
              <strong>Modelo:</strong> Año del modelo.
            </li>
            <li>
              <strong>Placas:</strong> Matrícula o patente del vehículo.
            </li>
            <li>
              <strong>Tipo:</strong> Elegir entre auto o moto.
            </li>
            <li>
              <strong>Kilometraje:</strong> Registrar el kilometraje del vehículo.
            </li>
            <li>
              <strong>Fecha de vencimiento SOAT:</strong> Fecha de finalización del seguro del SOAT.
            </li>
            <li>
              <strong>Fecha de vencimiento RTM:</strong> Fecha de finalización de la revisión técnico mecánica.
            </li>
            <li>
              <strong>Último mantenimiento:</strong> Registrar la fecha del último mantenimiento que se le 
              hizo al vehículo.
            </li>
            <li>
              <strong>Identificador GPS:</strong> En caso de contar con equipo de geolocalización satelital 
              puedes otorgar la ID del dispositivo para obtener la posición del vehículo en todo momento.
            </li>
          </ul>

          <div className="nova-note">
            La administración de flota en NOVA te permite <strong>mantener control total</strong> sobre tus 
            vehículos, sus documentos, mantenimientos y ubicación en tiempo real, optimizando la gestión 
            operativa de tu equipo.
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