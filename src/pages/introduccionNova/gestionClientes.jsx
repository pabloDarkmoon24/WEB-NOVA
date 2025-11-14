// src/pages/introduccionNova/gestionClientes.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/manualNova.css";

export function GestionClientesPage() {
  // Reemplaza con tu ID de video de Google Drive
  const videoId = "13d6P5flP9zZOdSW2YZbE07fsTwfOzZxt"; 

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
              title="Video Gestión de Clientes NOVA"
            />
          </div>
          <figcaption className="nova-figcaption">
            Recurso del manual: Gestión de Clientes en NOVA.
          </figcaption>
        </figure>
        <h2 className="nova-title">Gestión de Clientes</h2>

        {/* Contenido */}
        <section className="nova-content">
          <p>
            Para gestionar tus clientes y servicios contratados, la plataforma Nova te ofrece las 
            siguientes <strong>herramientas y procesos</strong>:
          </p>

          <h3>1. Búsqueda y Organización de Clientes</h3>
          <ul>
            <li>La interfaz ofrece una <strong>barra de búsqueda</strong> para encontrar un cliente en específico.</li>
            <li>Si necesitas buscar por un ítem específico, puedes <strong>seleccionarlo antes de realizar la búsqueda</strong>.</li>
            <li>Puedes <strong>filtrar y agrupar clientes</strong> dependiendo del estado de su servicio, el plan contratado, 
            el nodo asignado, la tecnología que usan, si tienen una promoción vigente, si es una persona natural o jurídica, 
            o si ya tiene un equipo terminal asignado.</li>
            <li>Puedes <strong>exportar la lista</strong> de tus clientes y su información.</li>
            <li>Puedes <strong>ajustar la cantidad de resultados</strong> que quieres que se exponga en la lista de clientes.</li>
          </ul>

          <h3>2. Ingreso de Clientes y Gestión de Perfil</h3>
          <p>Tienes diferentes maneras en las que puedes agregar tus clientes:</p>
          <ul>
            <li>Usar la opción de <strong>"Agregar Nuevo"</strong> para ingresar la información manualmente.</li>
            <li>Usar la opción de <strong>"Importar Clientes"</strong> con el formato de la plataforma, desde Google Sheets o Excel.</li>
          </ul>

          <p>Puedes editar y verificar información importante al ingresar al perfil de tus clientes:</p>
          <ul>
            <li>Verificar <strong>información general</strong>.</li>
            <li>Visualizar los <strong>equipos terminales</strong> que ya tiene asignados (si ya contrató servicios).</li>
          </ul>

          <p>En el perfil del cliente puedes <strong>gestionar el servicio registrado</strong>:</p>
          <ul>
            <li>Hacer <strong>cambio de plan</strong>.</li>
            <li>Registrar un <strong>pago de caja o manual</strong>.</li>
            <li>Registrar un <strong>acuerdo de pago</strong>.</li>
            <li><strong>Suspender el servicio</strong> al cliente o programar una suspensión.</li>
            <li><strong>Reconectar el servicio</strong> al cliente.</li>
            <li>Crear una <strong>cesión del contrato</strong> o cancelar el servicio.</li>
          </ul>

          <h3>3. Evaluación y Reconfiguración de Equipos Terminales</h3>
          <p>
            Al hacer clic en el nombre de un equipo terminal registrado, te mostrará la 
            <strong> información del dispositivo</strong> para evaluar el estado del servicio:
          </p>
          <ul>
            <li>Podrás verificar a qué <strong>dispositivos está enlazado</strong> el equipo terminal, sin importar la capa.</li>
            <li>Te mostrará la información de la <strong>disponibilidad del canal de GPON</strong>.</li>
            <li><strong>Estadísticas de uso</strong> por megabytes, tanto de subida como de bajada.</li>
            <li>Podrás verificar la <strong>potencia de transmisión y recepción</strong> con la ONT y con la OLT.</li>
            <li>También el <strong>voltaje, corriente y temperatura</strong> del módulo.</li>
            <li>Podrás ver los <strong>puertos de servicio activos</strong>, el estado de los puertos de Ethernet, 
            y los periodos de conexión continua con la OLT.</li>
          </ul>

          <p>Aparte de la información mostrada, puedes realizar <strong>acciones de gestión</strong>:</p>
          <ul>
            <li>Actualizar la información mostrada.</li>
            <li>Habilitar o deshabilitar el dispositivo.</li>
            <li>Reiniciar el equipo terminal.</li>
            <li>Acceder al router de manera remota.</li>
            <li>Habilitar o deshabilitar la gestión de dispositivos.</li>
            <li>Hacer una restauración de fábrica.</li>
            <li>Sincronizar la información óptica de la OLT.</li>
            <li>Desasociar el equipo terminal del perfil del cliente.</li>
          </ul>

          <p>Podrás <strong>reconfigurar el equipo terminal</strong>:</p>
          <ul>
            <li>Cambiándolo de nodo.</li>
            <li>Cambiando la marca, el modelo, el serial.</li>
            <li>Editando el puerto, usuario y contraseña por el cual se puede acceder directamente y los puertos de servicio.</li>
          </ul>

          <h3>Información Asociada al Cliente</h3>
          <p>Aparte de esto, desde el perfil del cliente puedes obtener:</p>
          <ul>
            <li>Las <strong>facturas del cliente</strong> y su estado de cuenta.</li>
            <li><strong>Tiquetes de soporte</strong> reportados por el usuario.</li>
            <li><strong>Documentos y multimedia</strong> asociados al cliente.</li>
            <li><strong>Registro de pagos</strong>.</li>
            <li><strong>Eventos globales</strong> que afecten al cliente.</li>
            <li>Los <strong>mensajes enviados al cliente</strong> por los diferentes medios existentes (WhatsApp, SMS, Correo Electrónico).</li>
          </ul>

          <div className="nova-note">
            La gestión de clientes en NOVA centraliza toda la información y herramientas necesarias para 
            <strong> administrar eficientemente tu base de usuarios</strong> y sus servicios.
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