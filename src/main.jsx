import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewsField from './Components/NewsField.jsx'
import Search from './Components/Search.jsx'

const router = createBrowserRouter([
  {
  path: "/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<NewsField category="general"/>
    },
    {
      path:"/science",
      element: <NewsField category="science" />
    },
    {
      path:"/health",
      element: <NewsField category="health" />
    },
    {
      path:"/sports",
      element: <NewsField category="Sports"/>
    },
    {
      path:"/politics",
      element:<NewsField category="politics"/>
    },
    {
      path:"/technology",
      element: <NewsField category="technology" />
    },
    {
      path:"/entertainment",
      element: <NewsField category="entertainment"/>
    },
    {
      path:'/search/:slug',
      element: <Search/>
    },
    {path:'*',element:<div>404</div>}

  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
