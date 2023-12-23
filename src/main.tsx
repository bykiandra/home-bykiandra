import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById('root')

if (rootElement && rootElement.hasChildNodes()) {
  const root = hydrateRoot(rootElement, <App />)
  root.render(<App />)
} else {
  const root = createRoot(rootElement!)
  root.render(<App />)
}