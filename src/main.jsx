import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initlizeFirebase } from "./assets/firebase/config.js"

initlizeFirebase()
ReactDOM.createRoot(document.getElementById('root')).render(<App />)