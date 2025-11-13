// src/pages/RegistroNova.jsx
import {useState} from "react";
import "../styles/registroNova.css";
import logo from "../assets/navBar/Logo-NOVA.png";
import {useFormik} from "formik"
import Axios from "axios"
import {useGoogleReCaptcha} from "@google-recaptcha/react";


export function RegistroPage() {
  const axios = Axios.create({baseURL: 'https://cluster.novaisp.co/api/v1/public/company'})
  const googleReCaptcha = useGoogleReCaptcha();
  //const axios = Axios.create({baseURL: 'http://localhost:8880/api/v1/public/company'})
  const [result, setResult] = useState({});

  const formik = useFormik({
    initialValues: {
      nit: '',
      domain: '',
      businessName: '',
      email: '',
      phone: '',
      customerName: '',
      notes: ''
    },
    onSubmit: async (values) => {
      try {
        const token = await googleReCaptcha.executeV3('signup');
        const res = await axios.post('/create', {token, ...values})
        formik.resetForm()
        setResult(res.data)
      } catch (err) {
        setResult(err.response.data)
      }
    }
  })

  return (

    <main>
      <section id="registro-nova" className="rn-section">
        <div className="rn-wrap">
          {/* Panel izquierdo */}
          <div className="rn-left">
            <img src={logo} alt="Nova Logo" className="rn-logo"/>
            <p className="rn-left-sub">
              Nova gestión total, la herramienta más completa y potente para la
              gestión de tu ISP.
            </p>
          </div>

          {/* Formulario (solo teléfono y promo) */}
          <div className="rn-card">
            <h3 className="rn-title">
              Descubre las herramientas
              <br/> que Nova tiene para ti
            </h3>
            <p className="rn-sub">prueba nuestro software por 30 días sin costo</p>

            <form className="rn-form" noValidate>

              <label className="rn-field">
                <span>Nombre de la Empresa</span>
                <input
                  name="businessName"
                  inputMode="text"
                  placeholder="Mi Empresa S.A.S"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.businessName}
                />
              </label>
              <label className="rn-field">
                <span>NIT</span>
                <input
                  name="nit"
                  inputMode="numeric"
                  placeholder="901000000"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nit}
                />
              </label>
              <label className="rn-field">
                <span>Teléfono</span>
                <input
                  name="phone"
                  inputMode="tel"
                  placeholder="3001234567"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
              </label>
              <label className="rn-field">
                <span>E-mail</span>
                <input
                  name="email"
                  inputMode="email"
                  placeholder="email@miempresa.com"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </label>
              <label className="rn-field">
                <span>Persona de contacto</span>
                <input
                  name="customerName"
                  inputMode="text"
                  placeholder="Pedro Perez"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.customerName}
                />
              </label>
              <label className="rn-field">
                <span>Selecciona tu sub-dominio</span>
                <div className="rn-input-group">
                  <input
                    name="domain"
                    inputMode="text"
                    placeholder="miempresa"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.domain}
                  />
                  <div className="rn-suffix">.novaisp.co</div>
                </div>
              </label>
              <label className="rn-field">
                <span>Notas adicionales</span>
                <input
                  name="notes"
                  inputMode="text"
                  placeholder=""
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.notes}
                />
              </label>

              {result.result === 'error' && <div className="rn-msg rn-err">{result.error}</div>}
              {result.result === 'success' && (
                <div className="rn-msg rn-ok">
                  {result.message}
                </div>
              )}
              <button type={'button'} className="rn-btn" disabled={formik.isSubmitting} onClick={formik.submitForm}>
                {formik.isSubmitting ? "ENVIANDO..." : "SOLICITAR PRUEBA GRATUITA ↗"}
              </button>
            </form>
          </div>

        </div>

      </section>
    </main>

  );
}
