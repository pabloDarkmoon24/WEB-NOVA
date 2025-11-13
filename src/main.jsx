import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {GoogleReCaptchaProvider} from "@google-recaptcha/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleReCaptchaProvider type="v3" siteKey="6LfKR-orAAAAAHBczvOTk1MoQ560EifX2nbzDgBs">
      <App/>
    </GoogleReCaptchaProvider>
  </StrictMode>,
)
