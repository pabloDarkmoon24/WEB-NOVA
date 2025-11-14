// src/pages/introduccionNova/mas/resolucionTickets.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/manualNova.css";

export function ResolucionTicketsPage() {
  // ID del video de Google Drive (reemplazar cuando tengas el video)
  const videoId = "1fhaIdLDGgf4ztWytWPx4t4mNc1lmK-4R"; 

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
              title="Video Resolución de Tickets NOVA"
            />
          </div>
          <figcaption className="nova-figcaption">
            Recurso del manual: Resolución de Tickets en NOVA.
          </figcaption>
        </figure>

        {/* TÍTULO */}
        <h2 className="nova-title">Dashboard de Tickets de Clientes</h2>

        {/* Contenido */}
        <section className="nova-content">
          <p>
            En este apartado puedes ver un <strong>resumen y estadística</strong> de la creación, desarrollo 
            y resolución de los diferentes tickets de clientes.
          </p>

          <h3>En Resumen</h3>
          <p>
            Podrás ver el <strong>total de tickets</strong>, promedios de resolución, actualizaciones, y tiempos 
            más largos o cortos, al igual que tickets críticos. Toda esta información puedes verla 
            <strong> graficada</strong>.
          </p>

          <h3>En Detalles de tickets</h3>
          <p>
            Podrás ver la <strong>lista de tickets creados y ya solucionados</strong>, podrás verificar:
          </p>
          <ul>
            <li>Número de radicado</li>
            <li>Asunto</li>
            <li>Cliente afectado</li>
            <li>Categoría</li>
            <li>Quién resolvió</li>
            <li>Tiempo de resolución</li>
            <li>Actualizaciones</li>
            <li>Hoja de ruta desde su creación hasta su resolución</li>
          </ul>

          <div className="nova-note">
            Para ver tickets abiertos sin resolución puedes verlos en el apartado de <strong>Agenda</strong> o 
            el icono rojo de silueta con audífonos en la parte superior derecha de <strong>Notificaciones</strong>.
          </div>

          <div className="nova-note">
            El dashboard de tickets de NOVA te permite <strong>monitorear y optimizar</strong> la gestión de 
            soporte técnico, identificando patrones, mejorando tiempos de respuesta y garantizando la 
            satisfacción del cliente.
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