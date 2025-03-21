import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from 'react-router'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import { Route } from 'react-router'
import User from './Components/User/User.jsx'
import Github, {githubInfoLoadre} from './Components/Github/Github.jsx'

// First Method for routing
// const router = createBrowserRouter ([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "About",
//         element: <About />
//       },
//       {
//         path: "Contact",
//         element: <Contact />
//       },
//     ]
//   }
// ])

// Second Method for createBrowserRouter

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='user/:userid' element={<User />} />
        <Route
        loader={githubInfoLoadre} 
        path='github' 
        element={<Github />} 
        />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
