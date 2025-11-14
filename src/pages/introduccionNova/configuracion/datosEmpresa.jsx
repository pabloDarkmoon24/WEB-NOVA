// src/pages/introduccionNova/configuracion/datosEmpresa.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/manualNova.css";

export function DatosEmpresaPage() {
  // ID del video de Google Drive (reemplazar cuando tengas el video)
  const videoId = "1ku2e7Kl1F-4pNJJHG7zUNGonogiDYGAt"; 

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
              title="Video Datos Empresa NOVA"
            />
          </div>
          <figcaption className="nova-figcaption">
            Recurso del manual: Configuración de Datos de Empresa en NOVA.
          </figcaption>
        </figure>

        {/* TÍTULO */}
        <h2 className="nova-title">Configuración de Empresa</h2>

        {/* Contenido */}
        <section className="nova-content">
          <p>
            Esta sección define los <strong>datos fundamentales que identifican a la empresa</strong> dentro del sistema. 
            Aquí se establecen tanto la información legal como las reglas básicas de facturación que afectan el 
            comportamiento del sistema en todas las operaciones.
          </p>

          <h3>Configuración General</h3>
          <p>
            Aquí se registran los datos que representan la empresa ante clientes y entidades legales:
          </p>
          <ul>
            <li><strong>Nombre de la empresa y nombre comercial:</strong> cómo se presenta públicamente.</li>
            <li><strong>Dirección, departamento/estado y país:</strong> ubicación oficial.</li>
            <li><strong>NIT:</strong> número de identificación tributaria, esencial para la facturación legal.</li>
          </ul>

          <h3>Opciones de Facturación</h3>
          <p>
            Estos parámetros definen <strong>cómo y cuándo se factura</strong> a los clientes:
          </p>
          <ol>
            <li><strong>Tipo de facturación por defecto</strong> (prepago o pospago).</li>
            <li><strong>Día de facturación:</strong> cuándo se generan las facturas cada mes.</li>
            <li><strong>Plazo de pago:</strong> cuántos días tiene el cliente para pagar.</li>
            <li><strong>Días de gracia para suspensión:</strong> margen antes de cortar el servicio por falta de pago.</li>
            <li><strong>Días corte de reconexión:</strong> tiempo que debe pasar antes de reconectar tras suspensión.</li>
            <li><strong>Costo de reposición de equipos:</strong> valor que se cobra por reemplazar equipos perdidos o dañados.</li>
          </ol>

          <p>
            Esta configuración es la base que garantiza <strong>coherencia, legalidad y eficiencia</strong> en todos los 
            procesos administrativos. Tenerla bien definida no solo evita errores: refuerza la confianza del cliente y 
            la solidez operativa de tu empresa.
          </p>

          <h3>Personalización</h3>
          <p>
            La personalización de una empresa en el sistema es el proceso de configurar su <strong>identidad, reglas 
            operativas y estilo de atención</strong> para que todo funcione de acuerdo con su realidad comercial. Es lo 
            que permite que el sistema refleje quién es la empresa y cómo trabaja.
          </p>

          <p>
            Aquí se pueden ajustar elementos clave:
          </p>
          <ul>
            <li><strong>Logo corporativo:</strong> puedes subir el archivo que representa visualmente tu marca.</li>
            <li><strong>Diseño de proforma:</strong> selecciona el formato que usarás para presentar cotizaciones o facturas.</li>
            <li><strong>Texto al pie de proforma:</strong> agrega mensajes legales, comerciales o de contacto que refuercen tu comunicación.</li>
            <li><strong>Colores primario y secundario:</strong> define la paleta visual que se aplicará en la interfaz, alineada con tu identidad gráfica.</li>
            <li><strong>Tema de personalización:</strong> elige estilos como "Azul Oscuro" para adaptar el ambiente visual.</li>
            <li><strong>Modo oscuro:</strong> activa una versión más sobria y moderna de la interfaz.</li>
            <li><strong>URL de política de privacidad:</strong> vincula tu documento legal para cumplir con normativas y generar confianza.</li>
          </ul>

          <h3>Panel de Personalización</h3>
          <p>
            Este módulo está diseñado para que la empresa configure su imagen dentro del sistema, asegurando que cada 
            interacción con el cliente —desde una proforma hasta la interfaz— transmita su estilo y valores.
          </p>

          <h3>Mis Facturas</h3>
          <p>
            Este panel está diseñado para ofrecer una <strong>visión clara y detallada del estado de facturación</strong> de 
            la empresa. Incluye filtros, tablas y opciones que permiten revisar cada factura con precisión.
          </p>

          <h3>Filtros de búsqueda</h3>
          <ul>
            <li><strong>Fecha de inicio y fecha final:</strong> permiten delimitar el rango de tiempo para consultar facturas específicas.</li>
            <li><strong>Estatus:</strong> filtrar por estado de la factura (pagada, pendiente, vencida, etc.), facilitando el seguimiento.</li>
          </ul>

          <h3>Tabla de facturas</h3>
          <p>Cada fila representa una factura, con columnas que detallan:</p>
          <ul>
            <li><strong>ID:</strong> número único de identificación de la factura.</li>
            <li><strong>Valor total:</strong> monto total facturado.</li>
            <li><strong>Impuestos:</strong> valor de los impuestos aplicados.</li>
            <li><strong>Valor pagado:</strong> cuánto ha sido abonado.</li>
            <li><strong>Facturado desde / hasta:</strong> periodo que cubre la factura.</li>
            <li><strong>Fecha límite de pago:</strong> día máximo para realizar el pago.</li>
            <li><strong>Fecha de pago:</strong> cuándo se realizó el pago (si aplica).</li>
            <li><strong>Estado de la factura:</strong> indica si está pagada, vencida o en proceso.</li>
            <li><strong>Método de pago:</strong> forma en que se realizó el pago (efectivo, transferencia, etc.).</li>
          </ul>

          <h3>Exportar</h3>
          <p>
            El botón <strong>Exportar</strong> permite descargar la información en formatos útiles para reportes, 
            auditorías o análisis contable.
          </p>

          <h3>Personalizar contrato</h3>
          <p>
            La sección "Personalización" permite configurar el <strong>contenido legal y visual de los contratos</strong> que 
            la empresa presenta a sus clientes, asegurando que cada documento refleje su identidad, responsabilidades y 
            cumplimiento normativo.
          </p>

          <h3>Editar espacio para operadores</h3>
          <p>Aquí se configuran los datos que aparecerán en el contrato, utilizando variables como:</p>
          <ul>
            <li>Nombre completo de la empresa, NIT, teléfono, correo y dirección del servicio.</li>
            <li>Se incluyen cláusulas específicas sobre el uso de servicios en la nube, responsabilidades del operador 
            y validaciones requeridas (afiliación, traslados, retiros, beneficiarios, etc.).</li>
            <li>También se establece la autorización para el tratamiento de datos personales, conforme a la Ley de 
            Habeas Data, garantizando legalidad y protección.</li>
          </ul>

          <h3>Vista previa</h3>
          <p>
            Esta sección muestra cómo se verá el contrato final, con los datos reales ya integrados. Permite revisar el 
            contenido antes de enviarlo o firmarlo, asegurando que todo esté correcto y alineado con la imagen corporativa.
          </p>

          <h3>Configuración de Tiempos para PQRS</h3>
          <p>
            Permite definir los <strong>plazos máximos de respuesta y control</strong> para cada tipo de solicitud, 
            asegurando que la empresa cumpla con los tiempos establecidos por la normativa y mantenga una atención 
            eficiente al cliente.
          </p>

          <h3>Plazo para marcar una resolución como inefectiva</h3>
          <p>
            Este campo determina cuántos <strong>días calendario</strong> tiene el cliente para indicar que la respuesta 
            recibida no resolvió su solicitud de forma efectiva. En el ejemplo, se asignan 7 días, lo que permite al 
            sistema registrar retroalimentación y activar procesos de revisión o mejora.
          </p>

          <h3>Días máximos de respuesta por tipo de PQRS</h3>
          <p>Aquí se definen los días hábiles máximos para responder cada tipo de solicitud:</p>
          <ul>
            <li>Peticiones: 15 días</li>
            <li>Quejas: 15 días</li>
            <li>Reclamos: 15 días</li>
            <li>Sugerencias: 10 días</li>
          </ul>

          <p>
            Estos valores aseguran que el sistema pueda monitorear los tiempos de respuesta, generar alertas y evitar 
            incumplimientos.
          </p>

          <div className="nova-note">
            La configuración de datos de empresa es fundamental para garantizar que todos los procesos administrativos, 
            legales y comerciales funcionen de forma <strong>coherente, profesional y cumpliendo con la normativa vigente</strong>.
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