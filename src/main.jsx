import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github from './Components/Github/Github.jsx'
import { githubLoader } from './Components/Github/Github.jsx'
// import Contact from './Components/Contact/Contact.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children:[{
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"about",
//       element:<About/>
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     }
//   ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path="" element= {<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route 
    loader={githubLoader}
    path="github" element={<Github/>}/>

  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
