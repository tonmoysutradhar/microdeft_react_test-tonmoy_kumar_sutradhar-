import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Registration from './components/Registration.jsx';
import Login from './components/Login.jsx';
import Course from './components/Course.jsx';
import FetchDisplay from './components/FetchDisplay.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Registration></Registration>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/course",
        element: <Course></Course>
      },
      {
        path: "/fetchDisplay",
        element: <FetchDisplay></FetchDisplay>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
