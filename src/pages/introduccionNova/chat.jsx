// src/pages/introduccionNova/chat.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/manualNova.css";

export function ChatPage() {
  // ID extraído del link de Google Drive
  const videoId = "1XoVPqKz9GUu3XAiKUkg-r_AIuk0Cl1fU"; 

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
              title="Video Chat NOVA"
            />
          </div>
          <figcaption className="nova-figcaption">
            Recurso del manual: Chat en NOVA.
          </figcaption>
        </figure>
        <h2 className="nova-title">Chat</h2>


        {/* Contenido */}
        <section className="nova-content">
          <p>
            El chat se utiliza para brindar <strong>atención al cliente, soporte técnico o interacción comercial</strong>, 
            ya sea a través de agentes humanos o bots automatizados. Su principal ventaja es la <strong>inmediatez</strong>, 
            que permite resolver dudas, ofrecer asistencia o cerrar ventas de forma eficiente y personalizada.
          </p>

          <h3>Configuración del Chat en WhatsApp WsBot</h3>
          <p>
            La configuración del chat en WhatsApp WsBot permite establecer cómo se gestionan las 
            <strong> conversaciones en tiempo real</strong> entre clientes y agentes, definiendo reglas operativas, 
            horarios, automatizaciones y niveles de personalización que impactan directamente en la calidad del servicio.
          </p>

          <p>
            El módulo de chat en WhatsApp WsBot es el <strong>núcleo de la atención directa al cliente</strong>. 
            Desde su configuración, el administrador puede definir aspectos clave como:
          </p>

          <ul>
            <li>
              <strong>Horario hábil:</strong> se establece en formato 24 horas, indicando cuándo el bot está activo 
              para responder. Fuera de ese horario, se puede configurar un automensaje que informe al cliente sobre 
              la disponibilidad del servicio.
            </li>
            <li>
              <strong>Modo de respuesta:</strong> se puede activar o desactivar el uso de inteligencia artificial, 
              permitiendo que el bot responda de forma automatizada o se limite a mensajes predefinidos.
            </li>
            <li>
              <strong>Habilitación de chat:</strong> esta opción permite que el bot interactúe directamente con los 
              usuarios, ya sea para resolver dudas, guiar procesos o escalar casos a agentes humanos.
            </li>
            <li>
              <strong>Envío de notificaciones:</strong> al habilitar esta función, el bot puede enviar mensajes automáticos 
              como recordatorios, actualizaciones de estado o confirmaciones, sin necesidad de intervención manual.
            </li>
          </ul>

          <p>
            Además, el sistema permite que los agentes visualicen <strong>múltiples conversaciones simultáneamente</strong>, 
            organizadas por pestañas como <em>Mis chats</em>, <em>Sin atender</em> y <em>Todos</em>, lo que facilita 
            la priorización y el seguimiento de cada caso. Cada conversación incluye herramientas como 
            <strong> ver cliente</strong> y <strong>crear ticket</strong>, integrando el chat con el sistema de 
            gestión de solicitudes.
          </p>

          <p>
            Esta configuración garantiza que el chat funcione de forma <strong>estructurada, eficiente y alineada</strong> con 
            la estrategia de atención, permitiendo una experiencia fluida para el cliente y un entorno de trabajo 
            optimizado para el equipo de soporte.
          </p>

          <h3>Ventajas clave</h3>
          <ul>
            <li><strong>Disponibilidad 24/7</strong> con mensajes automatizados fuera del horario laboral.</li>
            <li><strong>Control total del flujo conversacional</strong>, desde la entrada del cliente hasta la resolución del caso.</li>
            <li><strong>Integración con otros módulos</strong>, como tickets y perfiles de cliente.</li>
            <li><strong>Escalabilidad:</strong> permite atender múltiples usuarios simultáneamente sin perder calidad.</li>
          </ul>

          <div className="nova-note">
            El chat de NOVA integra atención automatizada y humana para ofrecer 
            <strong> soporte inmediato y personalizado</strong> a tus clientes en cualquier momento.
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