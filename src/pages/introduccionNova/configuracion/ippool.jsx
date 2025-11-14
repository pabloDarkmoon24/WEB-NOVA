// src/pages/introduccionNova/configuracion/ipPool.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/manualNova.css";

export function IpPoolPage() {
  // ID del video de Google Drive (reemplazar cuando tengas el video)
  const videoId = "13YPzwJvtruMpQnw9C8jabr0vTdsM7N31"; 

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
              title="Video IP Pool NOVA"
            />
          </div>
          <figcaption className="nova-figcaption">
            Recurso del manual: Configuración de IP Pool en NOVA.
          </figcaption>
        </figure>

        {/* TÍTULO */}
        <h2 className="nova-title">Pool IP</h2>

        {/* Contenido */}
        <section className="nova-content">
          <p>
            Un <strong>ISP IP Pool</strong> (Grupo de IPs del Proveedor de Internet) es un conjunto de direcciones IP 
            que un proveedor de servicios de Internet (ISP) reserva para asignar a sus clientes o dispositivos dentro 
            de una red. Estas IPs pueden ser públicas o privadas, dinámicas o estáticas, y se organizan en subredes 
            para facilitar su administración.
          </p>

          <p>
            La tabla que aparece en la interfaz muestra las <strong>subredes configuradas</strong> dentro del sistema 
            del ISP o red empresarial. Cada fila representa un IP Pool, es decir, un bloque de direcciones IP disponibles 
            para asignar a usuarios, antenas, equipos o pruebas internas.
          </p>

          <h3>Columnas de la tabla</h3>
          <p>En la siguiente tabla se explica sobre cada columna:</p>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #ddd' }}>
                <th style={{ padding: '10px', textAlign: 'left' }}><strong>Columna</strong></th>
                <th style={{ padding: '10px', textAlign: 'left' }}><strong>Significado</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}><strong>ID</strong></td>
                <td style={{ padding: '10px' }}>Identificador único de la subred en el sistema.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}><strong>Nombre</strong></td>
                <td style={{ padding: '10px' }}>Nombre descriptivo del IP Pool (ej. "Fibra", "Pool de prueba").</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}><strong>Subnet</strong></td>
                <td style={{ padding: '10px' }}>Dirección base de la subred (ej. 192.168.1.0).</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}><strong>Prefijo</strong></td>
                <td style={{ padding: '10px' }}>Indica el tamaño de la subred (ej. /24 equivale a 256 direcciones IP).</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}><strong>IP inicial</strong></td>
                <td style={{ padding: '10px' }}>Primera IP disponible en el rango.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}><strong>IP Final</strong></td>
                <td style={{ padding: '10px' }}>Última IP disponible en el rango.</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}><strong>Editar</strong></td>
                <td style={{ padding: '10px' }}>Opción para modificar los parámetros de la subred.</td>
              </tr>
            </tbody>
          </table>

          <h3>¿Por qué es importante esta configuración?</h3>
          <ul>
            <li><strong>Organización:</strong> Permite dividir la red en bloques lógicos según zonas, servicios o clientes.</li>
            <li><strong>Escalabilidad:</strong> Facilita el crecimiento de la red sin conflictos de IP.</li>
            <li><strong>Seguridad:</strong> Ayuda a controlar qué dispositivos acceden a qué parte de la red.</li>
            <li><strong>Automatización:</strong> Los sistemas pueden asignar IPs automáticamente desde estos pools.</li>
          </ul>

          <h3>Agregar IP Pool</h3>
          <p>
            Para agregar una nueva IP Pool en la plataforma de Nova Gestión Total, debes usar el formulario 
            <strong> "Agregar Pool de IP"</strong> que aparece en el panel derecho de la página.
          </p>

          <p>
            Crear una IP Pool es como abrir un nuevo carril digital para tus servicios. Esta configuración permite 
            asignar direcciones IP de forma <strong>organizada, segura y escalable</strong>.
          </p>

          <p>
            En el panel derecho de la interfaz, verás el formulario con los siguientes campos:
          </p>
          <ul>
            <li>Nombre</li>
            <li>Subnet (Ej: 192.168.0.0)</li>
            <li>Prefijo (Ej: 24)</li>
            <li>Gateway</li>
          </ul>

          <h3>Ejemplo práctico</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #ddd' }}>
                <th style={{ padding: '10px', textAlign: 'left' }}><strong>Campo</strong></th>
                <th style={{ padding: '10px', textAlign: 'left' }}><strong>Ejemplo</strong></th>
                <th style={{ padding: '10px', textAlign: 'left' }}><strong>Descripción</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>Nombre</td>
                <td style={{ padding: '10px' }}>Clientes Zona Norte</td>
                <td style={{ padding: '10px' }}>Nombre descriptivo del pool</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>Subnet</td>
                <td style={{ padding: '10px' }}>10.60.0.0</td>
                <td style={{ padding: '10px' }}>Dirección base del bloque IP</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>Prefijo</td>
                <td style={{ padding: '10px' }}>24</td>
                <td style={{ padding: '10px' }}>Tamaño del bloque (256 IPs disponibles)</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>Gateway</td>
                <td style={{ padding: '10px' }}>10.60.0.1</td>
                <td style={{ padding: '10px' }}>Dirección IP del gateway para esta subred</td>
              </tr>
            </tbody>
          </table>

          <h3>Guarda la configuración</h3>
          <ul>
            <li>Verifica que el rango no esté repetido en la tabla de subredes existentes.</li>
            <li>Haz clic en <strong>"Guardar"</strong> para registrar el nuevo IP Pool.</li>
            <li>Si todo está correcto, el sistema lo agregará a la tabla con un nuevo ID.</li>
          </ul>

          <h3>Verifica que se haya creado correctamente</h3>
          <p>
            Tu nueva IP Pool aparecerá en la tabla junto a las demás, con su nombre, subnet, prefijo e IP inicial.
          </p>

          <h3>Consejos para tu guía técnica</h3>
          <ul>
            <li><strong>Evita solapamientos:</strong> Usa rangos que no estén en la tabla actual.</li>
            <li><strong>Usa nombres claros:</strong> Facilita la administración y el soporte técnico.</li>
            <li><strong>Documenta cada pool:</strong> Incluye propósito, fecha de creación y responsable.</li>
            <li><strong>Segmenta por servicio o zona:</strong> Mejora la trazabilidad y el control de red.</li>
          </ul>

          <div className="nova-note">
            La gestión adecuada de IP Pools es fundamental para mantener una red <strong>organizada, escalable y segura</strong>, 
            facilitando la asignación automática y el control de dispositivos.
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