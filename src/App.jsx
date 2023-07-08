import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainLayout from './layout/MainLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AllUsers from './pages/AllUsers'
import MyPlaces from './pages/MyPlaces'
import AddPlace from './pages/AddPlace'
import Auth from './pages/Auth'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <AllUsers />
        },
        {
          path: '/myplaces',
          element: <MyPlaces />
        },
        {
          path: '/addplace',
          element: <AddPlace />
        },
        {
          path: '/auth',
          element: <Auth />
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
