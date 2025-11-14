// src/pages/introduccionNova/agenda.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/manualNova.css";

export function AgendaPage() {
  // ID extraído del link de Google Drive
  const videoId = "1mp36LIvSsgJiOrzEgKjdeE_UIaTaENL-"; 

  return (
    <main className="nova-article">
      <div className="nova-wrap">
        {/* TÍTULO */}
        

        {/* Video desde Google Drive */}
        <figure className="nova-figure">
          <div className="nova-video-wrap">
            <iframe
              src={`https://drive.google.com/file/d/${videoId}/preview`}
              className="nova-video"
              allow="autoplay"
              style={{ border: 0 }}
              title="Video Agenda NOVA"
            />
          </div>
          <figcaption className="nova-figcaption">
            Recurso del manual: Agenda en NOVA.
          </figcaption>
        </figure>

        <h2 className="nova-title">Agenda</h2>

        {/* Contenido */}
        <section className="nova-content">
          <p>
            Es una herramienta que sirve para <strong>organizar y planificar actividades, citas o tareas</strong> en 
            un periodo de tiempo determinado.
          </p>

          <h3>Vista de Agenda: Tu centro de control diario</h3>
          <p>
            La vista de agenda es <strong>mucho más que un calendario</strong>. Es tu tablero de mando para organizar, 
            priorizar y actuar con precisión. Esta interfaz te permite visualizar la <strong>semana completa</strong>, 
            desde el lunes hasta el domingo, con franjas horarias detalladas para cada día.
          </p>

          <h3>¿Qué puedes hacer aquí?</h3>
          <ol>
            <li>
              <strong>Navegar entre días y semanas</strong> con botones como <em>Hoy</em>, <em>Atrás</em> y <em>Siguiente</em>, 
              manteniéndote siempre en control del tiempo.
            </li>
            <li>
              <strong>Cambiar la perspectiva</strong> según tus necesidades: vista semanal, diaria, mensual o en formato 
              de lista (Agenda).
            </li>
            <li>
              <strong>Detectar lo pendiente:</strong> en el panel lateral verás los tickets y instalaciones sin agendar, 
              lo que te permite tomar decisiones rápidas y evitar olvidos.
            </li>
            <li>
              <strong>Agendar con intención:</strong> cada espacio vacío es una oportunidad para asignar tareas, coordinar 
              equipos o atender clientes sin perder eficiencia.
            </li>
          </ol>

          <h3>¿Por qué es clave?</h3>
          <p>
            Porque <strong>transforma el caos en claridad</strong>. Te ayuda a respetar el tiempo de tus clientes, 
            optimizar recursos y anticiparse a los imprevistos. Usarla bien no solo mejora tu productividad: 
            <strong> refuerza tu reputación como profesional confiable y organizado</strong>.
          </p>

          <div className="nova-note">
            La agenda de NOVA centraliza todas tus actividades operativas en un solo lugar, 
            <strong> optimizando la gestión del tiempo</strong> y mejorando la coordinación de tu equipo.
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