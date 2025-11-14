// src/pages/introduccionNova/configuracion/mikrotik.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/manualNova.css";

export function MikrotikPage() {
  // ID del video de Google Drive (reemplazar cuando tengas el video)
  const videoId = "1rL4tg5oMSxn11PB4SqLie8oe2iBeffE4"; 

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
              title="Video Mikrotik NOVA"
            />
          </div>
          <figcaption className="nova-figcaption">
            Recurso del manual: Configuración de Mikrotik en NOVA.
          </figcaption>
        </figure>

        {/* TÍTULO */}
        <h2 className="nova-title">Agregar Mikrotik</h2>

        {/* Contenido */}
        <section className="nova-content">
          <p>
            Para agregar tu Mikrotik debes seguir los siguientes pasos:
          </p>

          <h3>Creación del Nodo</h3>
          <p>
            <em>(Omite este paso si ya tienes el Nodo creado en donde instalarás tu Mikrotik)</em>
          </p>
          
          <p>
            En tu plataforma de Nova, ingresamos en la barra lateral izquierda en 
            <strong> Configuración → Nodos</strong>, haz clic en <strong>"Agregar Nuevo"</strong> te aparecerá 
            las siguientes opciones configurables:
          </p>

          <ul>
            <li>
              <strong>Nombre:</strong> Asignar un nombre identificable al Nodo.
            </li>
            <li>
              <strong>Dirección:</strong> Ingresa la dirección con nomenclatura (si la tiene) de donde estará ubicado el nodo.
            </li>
            <li>
              <strong>Coordenadas:</strong> Para más exactitud agrega las coordenadas en longitud y latitud de la 
              ubicación del nodo (Si estás en el lugar en donde se ubica el Nodo, usa el botón "GPS" para que se 
              agregue automáticamente, debes tener la opción de compartir ubicación activada en tu navegador).
            </li>
            <li>
              <strong>Tipo de nodo:</strong> Indicar qué tecnologías se gestionan en el Nodo como radioenlace, 
              fibra óptica, metro ethernet, o mixto.
            </li>
            <li>
              <strong>Descripción:</strong> Puedes agregar información acerca del Nodo para quien necesite consultar por este.
            </li>
            <li>
              <strong>País-Estado/Provincia-Ciudad:</strong> Asignar el país, departamento y ciudad en la cual se ubica el Nodo.
            </li>
          </ul>

          <h3>Crear VPN</h3>
          <p>
            <em>(Omite este paso si ya tienes creado una VPN para la Mikrotik que quieres conectar)</em>
          </p>

          <p>
            En tu plataforma de Nova, ingresamos en la barra lateral izquierda en 
            <strong> Configuración → Mikrotik → VPN</strong>, haz clic en <strong>"Crear VPN"</strong> esto hará 
            que Nova te cree una nueva VPN con IP, usuario, contraseña y configuración predefinida.
          </p>

          <ol>
            <li>Haz clic en el candado al lado del texto censurado en la sección de "Configuración".</li>
            <li>Te aparecerá una línea de comando de consola, el cual deberás copiar con el botón que tiene al lado derecho.</li>
            <li>Ingresa a la configuración de la Mikrotik asignada al nodo, abre la terminal e ingresa la línea de 
            comando copiada (verifica si ha quedado creado en "Interfaces").</li>
          </ol>

          <p>
            En la configuración de la Mikrotik ingresamos a <strong>System → Users</strong> y seleccionamos la opción 
            para crear un nuevo usuario, copiamos el usuario y contraseña que nos entrega la VPN que creamos en Nova y 
            los ponemos como credenciales del nuevo usuario que estamos creando en la Mikrotik, con permisos 
            <strong> "full"</strong>.
          </p>

          <p>
            Copiamos la <strong>IP que nos entregó la plataforma de Nova</strong> al crear la nueva VPN (esto es muy 
            importante para poder crear la Mikrotik).
          </p>

          <h3>Crear Mikrotik</h3>
          <p>
            En tu plataforma Nova, ingresamos en la barra lateral izquierda en 
            <strong> Configuración → Mikrotik</strong> y haz clic en <strong>"Conectar Mikrotik"</strong> te aparecerá 
            las siguientes opciones configurables:
          </p>

          <ul>
            <li>
              <strong>Etiqueta/Descripción:</strong> Asignar un nombre identificable para la Mikrotik.
            </li>
            <li>
              <strong>Nodo:</strong> Selecciona el Nodo en donde va a estar ubicada la Mikrotik.
            </li>
            <li>
              <strong>Modelo:</strong> Elige el modelo de la Mikrotik (Lo puedes averiguar consultando la barra superior 
              en donde se menciona el nombre del programa "Winbox" también aparecerá el modelo de la Mikrotik).
            </li>
            <li>
              <strong>Versión:</strong> Elige la versión de la Mikrotik (Esta visible también junto con el modelo en Winbox).
            </li>
            <li>
              <strong>Tipo:</strong> Elige el uso que se le da a la Mikrotik como Administración, Borde u Otra.
            </li>
            <li>
              <strong>Modo IP (Si eliges Administración):</strong> Elige la forma en que se asigna IP: DHCP, PPPoE o es IP Fija.
            </li>
            <li>
              <strong>Gestión velocidad (Si eliges Administración):</strong> Elige la forma en que se brinda y gestiona 
              el acceso: PPPoE, Simple Queue, Tree Queue.
            </li>
          </ul>

          <p>
            Después de haber configurado esta parte de la configuración haz clic en <strong>"Siguiente"</strong> y te 
            aparecerán las siguientes opciones:
          </p>

          <ul>
            <li>
              <strong>IP:</strong> Ingresamos la IP que copiamos de la VPN.
            </li>
            <li>
              <strong>Puerto API:</strong> Ingresamos a la configuración de la Mikrotik e ingresamos en Winbox en 
              <strong> IP → Services</strong> y buscamos el servicio que se llama "api" entramos a editarlo y buscamos 
              "Port" copiamos el número del puerto y pegamos en la configuración, estando editando el servicio "api" de 
              la Mikrotik en el Winbox, activamos el campo "Available From" y pegamos la IP y máscara: 10.85.80.0/20
            </li>
            <li>
              <strong>Nombre de usuario:</strong> Ingresamos el nombre del usuario que creamos para la VPN.
            </li>
            <li>
              <strong>Contraseña:</strong> Ingresamos la contraseña de la VPN que creamos.
            </li>
          </ul>

          <p>
            Por último seleccionamos en <strong>"Siguiente"</strong> y debe indicar que se ha conectado con éxito la Mikrotik.
          </p>

          <div className="nova-note">
            En caso de que la conexión se haya visto impedida, debemos revisar las <strong>reglas de Firewall</strong> o 
            contactar con nuestro servicio al cliente.
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