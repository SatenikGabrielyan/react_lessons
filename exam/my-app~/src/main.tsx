import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Courses } from "./features/courses/courses"

import { AddCourse } from "./features/courses/addCourse"

import { CourseDetails } from "./features/courses/courseDetails"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Courses/>
    },
    {
      path:"courses/details/:id",
      element:<CourseDetails/>
    },
    {
      path:"courses/add",
      element:<AddCourse/>
    }
  ])

  root.render(
    <React.StrictMode>
      <Provider store={store}>
      <RouterProvider router={router} >
    
        </RouterProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
