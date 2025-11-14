// src/pages/introduccionNova/dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/manualNova.css";

export function DashboardManualPage() {
  // Reemplaza con tu ID de video de Google Drive
  const videoId = "1j2eRBiv1TLuLMSl-adHelnvZ3s2q_6pM"; 

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
              title="Video Dashboard NOVA"
            />
          </div>
          <figcaption className="nova-figcaption">
            Recurso del manual: Dashboard de NOVA.
          </figcaption>
        </figure>
                {/* TÍTULO */}
        <h2 className="nova-title">Dashboard</h2>

        {/* Contenido */}
        <section className="nova-content">
          <p>
            El dashboard es la <strong>pantalla principal del sistema</strong>. Está diseñado para que 
            cualquier persona pueda entenderlo y usarlo fácilmente. Aquí te explico cada parte:
          </p>

          <p>
            El panel principal del dashboard de <strong>Nueva Gestión Total</strong> presenta 
            <strong> siete indicadores clave</strong> que permiten tener una visión rápida del estado actual.
          </p>

          <h3><center>Indicadores</center></h3>

          <h3>Total de clientes</h3>
          <p>
            El panel <strong>Total Clientes</strong> muestra que hay 34 usuarios activos en el sistema. 
            Es una métrica clave para conocer el tamaño actual de la base de clientes.
          </p>

          <p><strong>Al ingresar en el indicador ¿Qué encontramos?</strong></p>
          <p>
            Esta tabla muestra los <strong>datos básicos de cada cliente</strong>: nombre, dirección, 
            plan, facturación y estado del servicio.
          </p>

          <h3>Indicadores de actividad de usuarios</h3>
          <p>
            Estos indicadores representan el <strong>movimiento de usuarios durante el mes</strong>.
          </p>

          <h3>Instalaciones pendientes</h3>
          <p>
            Este indicador muestra que hay cuatro <strong>instalaciones técnicas aún sin ejecutar</strong>. 
            Representa tareas programadas que siguen en espera, y ayuda a visualizar el estado operativo 
            del sistema para priorizar acciones.
          </p>

          <h3>Tickets de soporte</h3>
          <p>
            Este indicador señala <strong>solicitudes activas de usuarios</strong> que requieren asistencia 
            técnica. Refleja la carga actual del equipo de soporte y permite evaluar la demanda de atención 
            y la eficiencia en la gestión de incidencias.
          </p>

          <h3>Clientes suspendidos</h3>
          <p>
            Este indicador señala que hay <strong>clientes con servicios temporalmente desactivados</strong>. 
            Refleja situaciones que pueden deberse a problemas técnicos, administrativos o de pago, y permite 
            al equipo identificar casos que requieren seguimiento o reactivación.
          </p>

          <h3><center>Gráficos y Tablas </center></h3>

          <h3>Estudios de campo</h3>
          <p>
            Este indicador muestra las <strong>técnicas utilizadas para capturar información directamente 
            desde el campo</strong>, como formularios digitales, sensores o registros manuales. Refleja el 
            inicio y avance de procesos operativos.
          </p>

          <h3>Análisis de clientes nuevos y retiros</h3>
          <p>
            Los gráficos muestran la <strong>evolución de clientes nuevos y retiros</strong>. El primero 
            permite visualizar las tendencias de adquisición. El segundo refleja los momentos de mayor 
            pérdida de clientes. Estos indicadores ofrecen una visión comparativa del comportamiento de 
            la base de clientes, útil para evaluar la efectividad de estrategias comerciales y detectar 
            posibles áreas de mejora.
          </p>

          <h3>Distribución de suscriptores por tecnología</h3>
          <p>
            Este gráfico representa la proporción de clientes según el tipo de infraestructura utilizada: 
            <strong>radio y fibra óptica</strong>. La predominancia de suscriptores en tecnología de radio 
            indica una mayor cobertura o adopción en zonas donde la fibra aún no está disponible o es menos 
            competitiva. Este indicador es clave para evaluar la eficiencia de la red actual, identificar 
            oportunidades de migración tecnológica y orientar decisiones de inversión en infraestructura.
          </p>

          <h3>Alertas de atención al cliente</h3>
          <p>
            Este indicador agrupa <strong>situaciones críticas que requieren intervención inmediata</strong>: 
            clientes cancelados con equipos sin devolver, deudas pendientes, acuerdos de pago activos, moras 
            acumuladas y facturación nula con equipos asignados. Su propósito es facilitar la detección de 
            riesgos operativos y financieros, priorizar gestiones correctivas y optimizar la toma de decisiones 
            en áreas de soporte, cobranza y administración.
          </p>

          <h3>Panel financiero</h3>
          <p>
            Este conjunto de indicadores visualiza el <strong>comportamiento económico de la operación</strong> en 
            distintos periodos: facturación total, recaudo efectivo, cartera pendiente y gastos registrados. 
            Los gráficos permiten identificar tendencias clave, como el crecimiento en ingresos, fluctuaciones 
            en la cobranza y ausencia de gastos en ciertos meses. Esta información es esencial para evaluar 
            la salud financiera, anticipar riesgos y tomar decisiones estratégicas sobre flujo de caja, 
            eficiencia operativa y planificación presupuestaria.
          </p>

          <h3>Canales de captación de clientes</h3>
          <p>
            Este gráfico muestra los <strong>principales medios utilizados para adquirir nuevos clientes</strong>, 
            destacando que tanto las redes sociales como otros canales contribuyeron con igual número de 
            incorporaciones. Este indicador permite evaluar la efectividad de cada fuente de captación y 
            orientar futuras estrategias de marketing hacia los canales con mayor potencial de crecimiento.
          </p>

          <h3>Notificaciones</h3>
          <p>
            Este panel registra eventos en los que <strong>no fue posible ejecutar la suspensión remota</strong> de 
            televisores asignados a equipos específicos. Cada alerta incluye el identificador del dispositivo y 
            la hora del intento fallido, lo que permite detectar patrones de error, validar la ejecución de 
            comandos y anticipar posibles fallos en la infraestructura de control. Este indicador es esencial 
            para el monitoreo técnico, la trazabilidad operativa y la priorización de acciones correctivas 
            por parte del equipo de soporte.
          </p>

          <h3>Estado de agenda operativa</h3>
          <p>
            Este panel muestra el avance de <strong>actividades programadas</strong> en distintas categorías 
            operativas, como visitas técnicas, instalaciones, capacitaciones y trámites administrativos. 
            Cada ítem indica la cantidad de tareas completadas frente al total asignado, lo que permite 
            visualizar el nivel de ejecución, identificar retrasos y priorizar recursos según la carga pendiente. 
            Es una herramienta clave para el seguimiento diario y la toma de decisiones en campo.
          </p>

          <div className="nova-note">
            El dashboard de NOVA te permite <strong>controlar y monitorear tu operación</strong> en tiempo real 
            desde una sola pantalla, con indicadores clave para la toma de decisiones estratégicas.
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