// src/pages/introduccionNova/mas/logs.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/manualNova.css";

export function LogsPage() {
  // ID del video de Google Drive (reemplazar cuando tengas el video)
  const videoId = "1QX9JEl1kKkOVdwuBiqwYSpgBBaD9SuTQ"; 

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
              title="Video Logs del Sistema NOVA"
            />
          </div>
          <figcaption className="nova-figcaption">
            Recurso del manual: Logs del Sistema en NOVA.
          </figcaption>
        </figure>

        {/* TÍTULO */}
        <h2 className="nova-title">Logs de Nova</h2>

        {/* Contenido */}
        <section className="nova-content">
          <p>
            Podrás revisar cada <strong>movimiento, acción, tarea y actividad</strong> realizada dentro de tu 
            plataforma Nova desde este apartado diseñado para <strong>supervisión e informes a más detalle</strong>.
          </p>

          <h3>Filtros</h3>

          <h3>Búsqueda de Datos o por Métodos de HTTP</h3>
          <p>
            Podrás buscar un dato en concreto o filtrar por los siguientes <strong>métodos de HTTP</strong>:
          </p>
          <ul>
            <li><strong>GET:</strong> Obtención o lectura de datos.</li>
            <li><strong>POST:</strong> Creación o ejecución de acciones.</li>
            <li><strong>PUT:</strong> Reemplazo completo de recursos.</li>
            <li><strong>DELETE:</strong> Eliminación de recursos.</li>
            <li><strong>PATCH:</strong> Actualización o modificación de recursos.</li>
          </ul>

          <h3>Filtro por Status Code</h3>
          <p>
            Podrás filtrar por los siguientes <strong>códigos de estado</strong>:
          </p>
          <ul>
            <li><strong>200 (OK):</strong> Acción o tarea ejecutada con éxito.</li>
            <li><strong>201 (Creado):</strong> Creación de recurso.</li>
            <li><strong>400 (Bad Request):</strong> Petición o solicitud con errores o con falta de información.</li>
            <li><strong>401 (Unauthorized):</strong> Credenciales faltantes o sin permiso.</li>
            <li><strong>404 (Not Found):</strong> Solicitud o petición errónea, o recurso no encontrado.</li>
            <li><strong>500 (Server Error):</strong> Error del servidor.</li>
          </ul>

          <h3>Filtro Adicional</h3>
          <p>
            Podrás filtrar entre <strong>fechas personalizadas</strong> o <strong>usuarios registrados</strong> en el sistema.
          </p>

          <div className="nova-note">
            Los logs de NOVA te permiten <strong>rastrear y auditar toda la actividad</strong> del sistema, 
            garantizando transparencia, seguridad y capacidad de diagnóstico ante cualquier incidencia.
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