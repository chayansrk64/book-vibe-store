import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes'
import { APIProvider } from '@vis.gl/react-google-maps'

const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <APIProvider apiKey={apiKey}>
      <RouterProvider router={router} /> 
    </APIProvider>
    
  </StrictMode>,
)
