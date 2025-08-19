import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Dashboard from './pages/dashboard.tsx'
import Projects from './pages/projects.tsx'

const router = createBrowserRouter([
  {
    path: import.meta.env.BASE_URL,
    element: <App />,
  },
  {
    path: import.meta.env.BASE_URL + 'dashboard',
    element: <Dashboard />,
  },
  {
    path: import.meta.env.BASE_URL + 'projects',
    element: <Projects />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)