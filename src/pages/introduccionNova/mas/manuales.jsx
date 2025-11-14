// src/pages/introduccionNova/mas/manuales.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/manualNova.css";

export function ManualesPage() {
  // ID del video de Google Drive (reemplazar cuando tengas el video)
  const videoId = "1u4vDt7Q4IOd1o0IgSmj6F36yeKCR2YVF"; 

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
              title="Video Manuales NOVA"
            />
          </div>
          <figcaption className="nova-figcaption">
            Recurso del manual: Manuales en NOVA.
          </figcaption>
        </figure>

        {/* TÍTULO */}
        <h2 className="nova-title">Manuales</h2>

        {/* Contenido */}
        <section className="nova-content">
          <p>
            Puedes <strong>crear, eliminar y editar manuales y guías</strong> en tu propio repositorio para 
            ti y tu equipo.
          </p>

          <h3>Al momento de crear un manual te aparecerán las siguientes opciones:</h3>
          <ul>
            <li>
              <strong>Título:</strong> Puedes asignar un nombre al manual.
            </li>
            <li>
              <strong>Categoría:</strong> Puedes asignar una categoría al manual dependiendo de su contenido.
            </li>
            <li>
              <strong>Descripción:</strong> Puedes agregar una breve descripción o resumen del contenido del manual.
            </li>
            <li>
              <strong>Procesador de texto:</strong> Agrega, edita y organiza el contenido del manual en esta sección. 
              Tiene diferentes herramientas de edición de texto, organizar tablas y enunciados, insertar hipervínculos, 
              imágenes y videos, y borrar el formato y diseño de un texto seleccionado.
            </li>
          </ul>

          <div className="nova-note">
            El módulo de manuales de NOVA te permite <strong>centralizar y estandarizar</strong> toda la 
            documentación operativa de tu empresa, facilitando el acceso al conocimiento y mejorando la 
            capacitación de tu equipo.
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