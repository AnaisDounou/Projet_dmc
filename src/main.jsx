import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Solutions from './Pages/Solutions.jsx'
import { Secteurs } from './Pages/Secteurs.jsx'
import { A_Propos } from './Pages/A_Propos.jsx'
import { Contact } from './Pages/Contact.jsx'

const router = createBrowserRouter([
  {path:"/",element:<App/>},
  {path:"/solutions",element:<Solutions />},
  {path:"/secteurs",element:<Secteurs />},
  {path:"/a_propos",element:<A_Propos />},
  {path:"/contacts",element:<Contact />},
  {path:"*",element:<App />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
