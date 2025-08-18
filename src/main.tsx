import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Dashboard from './pages/dashboard.tsx'

const router = createBrowserRouter([
  {
    path: import.meta.env.BASE_URL,
    element: <App />,
  },
  {
    path: import.meta.env.BASE_URL + 'dashboard',
    element: <Dashboard />,
  },
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
