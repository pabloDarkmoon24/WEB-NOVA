// src/pages/introduccionNova/configuracion/planes.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/manualNova.css";

export function PlanesPage() {
  // ID del video de Google Drive (reemplazar cuando tengas el video)
  const videoId = "1bLuTzJbJ70mdm0ogxW8_TnQJzNBhrgXy"; 

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
              title="Video Planes NOVA"
            />
          </div>
          <figcaption className="nova-figcaption">
            Recurso del manual: Configuración de Planes en NOVA.
          </figcaption>
        </figure>

        {/* TÍTULO */}
        <h2 className="nova-title">Planes</h2>

        {/* Contenido */}
        <section className="nova-content">
          <p>
            Podrás <strong>crear, editar y eliminar planes de contratación</strong> para tus clientes.
          </p>

          <h3>Al momento de crear un plan te aparecerán las siguientes opciones:</h3>

          <ul>
            <li>
              <strong>Tecnología de acceso:</strong> Puedes escoger la tecnología de conexión por la cual se entregará 
              el servicio (Fibra Óptica, Radioenlace, Metro Ethernet, Solo Televisión).
            </li>
            <li>
              <strong>Nombre:</strong> Puedes asignar un nombre al plan.
            </li>
            <li>
              <strong>Velocidad Subida:</strong> Puedes asignar la velocidad de subida de internet en megabytes por segundo.
            </li>
            <li>
              <strong>Velocidad Bajada:</strong> Puedes asignar la velocidad de bajada de internet en megabytes por segundo.
            </li>
            <li>
              <strong>Cargo fijo mensual:</strong> Asignar el costo por el cual el cliente pagará mensualmente para que 
              tenga el servicio activo.
            </li>
            <li>
              <strong>Costo de instalación:</strong> Asignar un costo opcional y/o adicional por la instalación del servicio.
            </li>
            <li>
              <strong>Costo de reconexión:</strong> Asignar un costo opcional y/o adicional por la reconexión del servicio 
              después de haber pasado la fecha de vencimiento para el pago mensual.
            </li>
            <li>
              <strong>VLAN de servicio:</strong> Opcionalmente aplicar características al plan de velocidad, políticas y de QoS.
            </li>
            <li>
              <strong>Condiciones comerciales / Características del plan:</strong> Asignar instrucciones, información, 
              términos y condiciones para optar por el plan, mantenerlo activo y para cancelarlo también.
            </li>
          </ul>

          <h3>Servicios incluidos en el plan:</h3>
          <ul>
            <li>
              <strong>Internet:</strong> Opción siempre activa predeterminadamente para indicar que el plan tendrá el 
              servicio de conexión a internet.
            </li>
            <li>
              <strong>Televisión:</strong> Opción para indicar que el plan tendrá servicio de Televisión.
            </li>
            <li>
              <strong>Telefonía:</strong> Opción para indicar que el plan tendrá servicio de Telefonía.
            </li>
          </ul>

          <div className="nova-note">
            La gestión de planes te permite <strong>estructurar tu oferta comercial</strong> de forma clara y 
            flexible, adaptándose a las necesidades de diferentes segmentos de clientes y tecnologías disponibles.
          </div>

          <div className="nova-actions">
            <Link to="/introduccion/configuracion" className="nova-back">
              ← Volver a Configuración
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}