// src/pages/introduccionNova/configuracion/promociones.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/manualNova.css";

export function PromocionesPage() {
  // ID del video de Google Drive (reemplazar cuando tengas el video)
  const videoId = "1nUAyXx0BTdOBhxyq2lUr6L9Y7sWiK7mF"; 

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
              title="Video Promociones NOVA"
            />
          </div>
          <figcaption className="nova-figcaption">
            Recurso del manual: Configuración de Promociones en NOVA.
          </figcaption>
        </figure>

        {/* TÍTULO */}
        <h2 className="nova-title">Promociones</h2>

        {/* Contenido */}
        <section className="nova-content">
          <p>
            Puedes <strong>crear, editar y eliminar</strong> ofertas y promociones atractivas para tus clientes, 
            desde la instalación, clientes con servicios ya contratados y para retención de clientes.
          </p>

          <h3>Al crear una promoción encontrarás las siguientes opciones:</h3>

          <ul>
            <li>
              <strong>Nombre:</strong> Puedes nombrar la promoción para que sea más identificable.
            </li>
            <li>
              <strong>Cantidad máxima de servicios asociados:</strong> Indica cuántos servicios (en proceso de instalación, 
              ya contratados o en proceso de cancelación) pueden optar por esta promoción. Al llegar al tope de servicios 
              que optaron por esta promoción, no se podrá agregar esta promoción a ningún servicio.
            </li>
            <li>
              <strong>Fecha de inicio:</strong> Indica la fecha en la que empieza a ser vigente esta promoción.
            </li>
            <li>
              <strong>Fecha de finalización:</strong> Indica la fecha en la que se cumple la vigencia para optar por esta promoción.
            </li>
            <li>
              <strong>Costo de instalación:</strong> Indica si esta promoción ofrece un costo diferente de instalación 
              al predeterminado.
            </li>
            <li>
              <strong>Descuento mes 1-12:</strong> Indica un porcentaje aplicable como descuento en alguno de los doce 
              meses del año.
            </li>
            <li>
              <strong>Notas:</strong> Puedes indicar instrucciones, términos y condiciones para que tu personal pueda 
              verificar información adicional acerca de esta promoción.
            </li>
          </ul>

          <h3>Tipos de aplicación de la promoción:</h3>
          <ul>
            <li>
              <strong>Aplicar a instalaciones:</strong> Puedes marcar esta opción si esta promoción es optable al momento 
              de realizar el proceso de contratación e instalación.
            </li>
            <li>
              <strong>Aplicar a actualización:</strong> Puedes marcar esta opción si esta promoción es optable cuando es 
              un servicio que ya está contratado y activo.
            </li>
            <li>
              <strong>Aplicar a retención:</strong> Puedes marcar esta opción si esta promoción es optable cuando un 
              servicio tiene intención o está en proceso de cancelación.
            </li>
          </ul>

          <div className="nova-note">
            Las promociones son herramientas estratégicas para <strong>atraer nuevos clientes, incentivar mejoras de 
            plan y reducir la tasa de cancelación</strong>, permitiéndote gestionar campañas comerciales de forma 
            estructurada y controlada.
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