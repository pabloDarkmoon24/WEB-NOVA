// src/pages/introduccionNova/configuracion/personal.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/manualNova.css";

export function PersonalPage() {
  // ID del video de Google Drive (reemplazar cuando tengas el video)
  const videoId = "1BAICv1v6yd91S937zcxDmsc-qvD_4N-D"; 

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
              title="Video Personal NOVA"
            />
          </div>
          <figcaption className="nova-figcaption">
            Recurso del manual: Gestión de Personal en NOVA.
          </figcaption>
        </figure>

        {/* TÍTULO */}
        <h2 className="nova-title">Gestión de Personal</h2>

        {/* Contenido */}
        <section className="nova-content">
          <p>
            Bienvenidos a NOVA, Gestión Total. El día de hoy hablaremos de la <strong>gestión del personal</strong>.
          </p>

          <h3>Acceso a la sección de Personal</h3>
          <p>
            Para crear un nuevo usuario en NOVA vamos a la sección de <strong>Configuraciones</strong> y elegimos 
            <strong> Personal</strong>.
          </p>

          <p>
            En esta sección podrás revisar todos los <strong>usuarios que tenemos registrados en NOVA</strong> y el 
            rol que desarrollan en nuestra plataforma. También cuenta con la opción de <strong>Recaudo</strong>, ya que 
            ellos pueden recibir o no dinero.
          </p>

          <h3>Agregar nuevo usuario</h3>
          <p>
            En la sección <strong>"Agregar Nuevo"</strong> podemos agregar un nuevo usuario con la siguiente información:
          </p>

          <ul>
            <li><strong>Correo electrónico</strong></li>
            <li><strong>Contraseña</strong></li>
            <li><strong>Nombre completo</strong></li>
            <li><strong>Número de documento</strong></li>
            <li><strong>Teléfono</strong></li>
            <li><strong>Dirección</strong></li>
          </ul>

          <h3>Roles disponibles</h3>
          <p>
            Debes indicar qué tipo de <strong>rol va a desarrollar</strong> el usuario:
          </p>

          <ul>
            <li>
              <strong>Administrador del sistema:</strong> Tendrá acceso a todas las funciones de la plataforma.
            </li>
            <li>
              <strong>Contador:</strong> Se encargará de facturaciones y gestión de clientes.
            </li>
            <li>
              <strong>Vendedor:</strong> Solo podrá agregar clientes.
            </li>
            <li>
              <strong>Punto de venta:</strong> Solo va a recolectar dinero.
            </li>
            <li>
              <strong>Técnico:</strong> Se encargará solo de instalaciones y tareas administrativas técnicas.
            </li>
            <li>
              <strong>Bodega:</strong> Gestión de inventarios y materiales.
            </li>
          </ul>

          <h3>Configuración de Recaudo</h3>
          <p>
            Una vez completes la información, debes seleccionar un <strong>valor de Recaudo</strong>:
          </p>
          <ul>
            <li>Si el equipo o la persona <strong>no se va a encargar de ningún valor</strong>, debe colocar <strong>cero (0)</strong>.</li>
            <li>En caso tal, debes agregar un <strong>valor específico</strong> de recaudo autorizado.</li>
          </ul>

          <h3>Gestión de caja y conciliación</h3>
          <p>
            Una vez tienes una cajera o un encargado que tiene un Recaudo asignado, aquí aparece:
          </p>
          <ul>
            <li>La <strong>cantidad que tienen de Recaudo</strong> disponible.</li>
            <li>Lo que <strong>ya han recaudado</strong>.</li>
          </ul>

          <p>
            También tienes las opciones para ir directamente a <strong>Recaudar</strong>. Para realizar la conciliación:
          </p>
          <ol>
            <li>Vas a <strong>Recaudar</strong>.</li>
            <li>Le das en <strong>Caja</strong>.</li>
            <li>Generas la <strong>conciliación y recolección</strong> de ese dinero.</li>
          </ol>

          <div className="nova-note">
            Si no se realiza esta función, el sistema <strong>no le va a permitir</strong> a la persona gestionar nuevos pagos, 
            ya que la caja debe estar habilitada.
          </div>

          <h3>Opciones adicionales</h3>
          <p>
            También puedes:
          </p>
          <ul>
            <li>Revisar su <strong>inventario</strong>.</li>
            <li>Consultar su <strong>log del sistema</strong>.</li>
          </ul>

          <div className="nova-note">
            La gestión de personal en NOVA te permite <strong>controlar accesos, asignar responsabilidades</strong> y 
            mantener un registro detallado de las actividades de cada usuario, garantizando seguridad y trazabilidad en 
            todas las operaciones.
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