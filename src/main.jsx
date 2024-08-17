import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routes from './router/routes';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={createBrowserRouter(routes)} />
)
