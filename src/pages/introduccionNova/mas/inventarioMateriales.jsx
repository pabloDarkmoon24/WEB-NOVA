// src/pages/introduccionNova/mas/inventarioMateriales.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/manualNova.css";

export function InventarioMaterialesPage() {
  // ID del video de Google Drive (reemplazar cuando tengas el video)
  const videoId = "1sayeSsbEXbmrWmE1h-xG22B-FHDnQDhu"; 

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
              title="Video Inventario de Materiales NOVA"
            />
          </div>
          <figcaption className="nova-figcaption">
            Recurso del manual: Inventario de Materiales en NOVA.
          </figcaption>
        </figure>

        {/* TÍTULO */}
        <h2 className="nova-title">Inventario De Materiales</h2>

        {/* Contenido */}
        <section className="nova-content">
          <p>
            El inventario de materiales representa todos los <strong>recursos físicos</strong> que una empresa 
            mantiene en existencia para ser usados en la producción de bienes o servicios.
          </p>

          <h3>Gestión de Equipos Terminales</h3>
          <p>
            La interfaz de <strong>Equipos terminales</strong> ofrece una vista integral del estado y la ubicación 
            de los dispositivos asignados dentro de la red. Desde este panel, el usuario puede acceder a información 
            clave como dirección IP, número de serie, marca, modelo y nodo de conexión, lo que permite una 
            <strong> trazabilidad completa</strong> de cada equipo.
          </p>

          <p>
            El sistema clasifica los dispositivos en <strong>cinco categorías operativas</strong>:
          </p>
          <ul>
            <li><strong>Instalados:</strong> equipos activos en campo, asignados a usuarios específicos.</li>
            <li><strong>En bodega:</strong> dispositivos disponibles para futuras asignaciones.</li>
            <li><strong>Pendientes por devolver:</strong> equipos que deben ser recuperados.</li>
            <li><strong>Eliminados:</strong> registros dados de baja por obsolescencia o daño.</li>
            <li><strong>Todos:</strong> resumen total del inventario.</li>
          </ul>

          <p>
            Esta herramienta no solo mejora la <strong>eficiencia operativa</strong>, sino que también fortalece 
            el control logístico y la toma de decisiones técnicas. Al centralizar la información, se reduce el 
            riesgo de pérdidas, se agiliza el mantenimiento y se garantiza una gestión transparente del parque 
            tecnológico.
          </p>

          <h3>Materiales</h3>
          <p>
            La sección <strong>"Materiales"</strong> es el núcleo operativo del sistema de inventario, diseñada 
            para ofrecer control, trazabilidad y eficiencia en la gestión de insumos técnicos.
          </p>

          <h3>Gestión Inteligente de Materiales</h3>
          <p>
            La interfaz <strong>Materiales</strong> permite administrar de forma estructurada todos los insumos 
            disponibles en bodega, desde colectores hasta fibra óptica. Cada registro incluye información clave 
            como nombre del material, descripción, marca, modelo, cantidad, unidad de medida y responsable del 
            ingreso. Esta visibilidad detallada facilita la toma de decisiones técnicas, evita rupturas de stock 
            y garantiza que cada proyecto cuente con los recursos necesarios en el momento justo.
          </p>

          <p>
            El sistema incorpora funciones como:
          </p>
          <ul>
            <li><strong>Búsqueda rápida</strong> por nombre o características del material.</li>
            <li><strong>Registro de nuevos insumos</strong> mediante el botón "Agregar Nuevo".</li>
            <li><strong>Actualización de inventario</strong> con acciones directas como "Añadir inventario".</li>
          </ul>

          <p>
            Este módulo no solo mejora la eficiencia operativa, sino que también fortalece la 
            <strong> trazabilidad</strong>, reduce pérdidas y permite una planificación más precisa. Su diseño 
            intuitivo convierte la gestión de materiales en una experiencia ágil, confiable y alineada con las 
            necesidades reales del equipo técnico.
          </p>

          <div className="nova-note">
            El inventario de materiales de NOVA centraliza todos tus insumos operativos, 
            <strong> optimizando la gestión de recursos</strong> y garantizando disponibilidad en el momento justo.
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