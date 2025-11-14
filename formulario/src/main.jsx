//Esse daqui renderiza o App.jsx na tela.
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './router/rota.jsx'

createRoot(document.getElementById('root')).render(

    <App />

)
