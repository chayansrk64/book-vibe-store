import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes'
import { APIProvider } from '@vis.gl/react-google-maps'
import { googleMapApiKey } from '../map-api-key'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <APIProvider apiKey={googleMapApiKey}>
      <RouterProvider router={router} /> 
    </APIProvider>
    
  </StrictMode>,
)
