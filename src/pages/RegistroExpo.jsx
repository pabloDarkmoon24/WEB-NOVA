// src/pages/RegistroNova.jsx
import {useState} from "react";
import "../styles/registroNova.css";
import logo from "../assets/navBar/Logo-NOVA.png";
import {Footer} from "../components/footer";
import axios from "axios"
// Códigos válidos (ajústalos cuando quieras)
const VALID_PROMOS = new Set(["NOVAEXPO"]);

// 🔌 Punto ÚNICO de integración:
// Reemplaza el contenido de esta función por tu integración real (EmailJS / API).
async function submitLead(payload) {
  try {
    const res = await axios.post('https://cluster.novaisp.co/api/v1/public/company/fastSignup', {
      phone: payload.telefono,
      promo: payload.promo
    })
  } catch (err) {
    alert('No se pudo iniciar el registro. Intenta nuevamente')
  }
}

export function RegistroExpo() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  // --- Helpers para el keypad (no cambian la estructura visual) ---
  function getTelefonoInput() {
    return document.querySelector('input[name="telefono"]');
  }

  function appendDigit(d) {
    const input = getTelefonoInput();
    if (!input) return;
    input.value = (input.value || "") + d;
    input.focus();
  }

  function backspace() {
    const input = getTelefonoInput();
    if (!input) return;
    input.value = (input.value || "").slice(0, -1);
    input.focus();
  }

  // --- fin helpers ---

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    setLoading(true);
    setErr("");
    setOk(false);

    const fd = new FormData(form);
    const payload = {
      telefono: fd.get("telefono")?.toString().trim() || "",
      promo: fd.get("promo")?.toString().trim() || "",
      hp: fd.get("website")?.toString() || "", // honeypot anti-bots
    };

    // ✅ Validación teléfono: al menos 7 dígitos
    const digitsCount = (payload.telefono.match(/\d/g) || []).length;
    if (digitsCount < 7) {
      setLoading(false);
      setErr("Teléfono inválido. Debe contener al menos 7 dígitos.");
      return;
    }

    // 🕷️ Honeypot: si viene relleno, asumimos bot y finalizamos en “ok”
    if (payload.hp) {
      setLoading(false);
      form.reset?.();
      setOk(true);
      return;
    }

    try {
      await submitLead({telefono: payload.telefono, promo: ''});
      form.reset?.();
      setOk(true);
    } catch (e2) {
      setErr(e2?.message || "No se pudo enviar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <section id="registro-nova" className="rn-section">
        <div className="rn-wrap">
          {/* Panel izquierdo */}
          <div className="rn-left">
            <div className="keypad-container">
              <div className="keypad" role="button" tabIndex={0} onClick={() => appendDigit("1")}>1</div>
              <div className="keypad" role="button" tabIndex={0} onClick={() => appendDigit("2")}>2</div>
              <div className="keypad" role="button" tabIndex={0} onClick={() => appendDigit("3")}>3</div>
              <div className="keypad" role="button" tabIndex={0} onClick={() => appendDigit("4")}>4</div>
              <div className="keypad" role="button" tabIndex={0} onClick={() => appendDigit("5")}>5</div>
              <div className="keypad" role="button" tabIndex={0} onClick={() => appendDigit("6")}>6</div>
              <div className="keypad" role="button" tabIndex={0} onClick={() => appendDigit("7")}>7</div>
              <div className="keypad" role="button" tabIndex={0} onClick={() => appendDigit("8")}>8</div>
              <div className="keypad" role="button" tabIndex={0} onClick={() => appendDigit("9")}>9</div>
              <div className="keypad" role="button" tabIndex={0} onClick={() => appendDigit("+")}>+</div>
              <div className="keypad" role="button" tabIndex={0} onClick={() => appendDigit("0")}>0</div>
              <div className="keypad keypad-delete" role="button" tabIndex={0} onClick={backspace}>⌫</div>
            </div>
          </div>

          {/* Formulario (solo teléfono y promo) */}
          <div className="rn-card">
            <h3 className="rn-title">
              Descubre las herramientas
              <br/> que Nova tiene para ti
            </h3>
            <p className="rn-sub">prueba nuestro software por 30 días sin costo</p>

            <form onSubmit={onSubmit} className="rn-form" noValidate>
              {/* Honeypot (oculto) */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="rn-hp"
              />

              <label className="rn-field">
                <span>Teléfono</span>
                <input
                  name="telefono"
                  inputMode="tel"
                  placeholder="300 123 4567"
                  required
                />
              </label>

              {err && <div className="rn-msg rn-err">{err}</div>}
              {ok && (
                <div className="rn-msg rn-ok">
                  ¡Listo! Enviado correctamente. continua tu proceso en el chat del número registrado.
                </div>
              )}

              <button className="rn-btn" disabled={loading}>
                {loading ? "ENVIANDO..." : "SOLICITAR PRUEBA GRATUITA ↗"}
              </button>
            </form>
          </div>

        </div>

      </section>

    </main>

  );
}
