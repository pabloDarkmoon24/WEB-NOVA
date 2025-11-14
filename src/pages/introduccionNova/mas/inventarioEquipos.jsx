// src/pages/introduccionNova/mas/inventarioEquipos.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/manualNova.css";

export function InventarioEquiposPage() {
  // ID del video de Google Drive (reemplazar cuando tengas el video)
  const videoId = "12LYch4xE4m8avMLt1Tm__f8OxazMGwwY"; 

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
              title="Video Inventario de Equipos NOVA"
            />
          </div>
          <figcaption className="nova-figcaption">
            Recurso del manual: Inventario de Equipos en NOVA.
          </figcaption>
        </figure>

        {/* TÍTULO */}
        <h2 className="nova-title">Inventario De Equipos</h2>

        {/* Contenido */}
        <section className="nova-content">
          <p>
            El inventario de equipos es un <strong>sistema estructurado</strong> que permite identificar, 
            clasificar y controlar todos los activos tecnológicos y operativos de una empresa, garantizando 
            su <strong>trazabilidad, disponibilidad y uso eficiente</strong>.
          </p>

          <p>
            Para agregar nuevos equipos al sistema, el usuario debe utilizar la opción <strong>"Agregar Nuevo"</strong> ubicada 
            en la parte superior de la sección "Equipos terminales", lo que permite registrar dispositivos con todos 
            sus datos técnicos y operativos.
          </p>

          <h3>Pasos para Agregar Nuevos Equipos al Inventario</h3>
          <p>
            La función <strong>Agregar Nuevo</strong> está diseñada para facilitar el ingreso de nuevos dispositivos 
            al sistema de gestión. Aquí te explico cómo hacerlo:
          </p>

          <h3>1. Ubicación del botón</h3>
          <p>
            En la parte superior derecha de la sección <strong>"Equipos terminales"</strong>, encontrarás el botón 
            <strong>"Agregar Nuevo"</strong>. Este es el punto de partida para registrar un nuevo equipo.
          </p>

          <h3>2. Ingreso de datos</h3>
          <p>
            Al hacer clic, se despliega un <strong>formulario</strong> donde se deben completar los siguientes campos:
          </p>
          <ul>
            <li><strong>Asignado a:</strong> nombre del usuario o área responsable.</li>
            <li><strong>IP:</strong> dirección IP del equipo si aplica.</li>
            <li><strong>Serial:</strong> número de serie del dispositivo.</li>
            <li><strong>Marca y modelo:</strong> información técnica del fabricante.</li>
            <li><strong>Estado:</strong> condición actual del equipo (instalado, en bodega, etc.).</li>
            <li><strong>Nodo:</strong> ubicación o punto de conexión dentro de la red.</li>
          </ul>

          <h3>3. Confirmación y registro</h3>
          <p>
            Una vez completados los campos, se debe hacer clic en <strong>"Guardar"</strong> para que el equipo 
            quede registrado en el sistema. El nuevo dispositivo aparecerá automáticamente en la tabla principal 
            con todos sus datos visibles.
          </p>

          <div className="nova-note">
            El inventario de equipos de NOVA te permite mantener un <strong>control preciso y actualizado</strong> de 
            todos tus activos tecnológicos, mejorando la gestión operativa y la trazabilidad de cada dispositivo.
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