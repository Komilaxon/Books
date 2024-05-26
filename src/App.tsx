import { RouterProvider, createBrowserRouter } from "react-router-dom"
import SignIn from "./auth/SignIn/SignIn"
import SignUp from "./auth/SignUp/SignUp"


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <>Salom</>,
      children: [
        { path: "/auth/signin", element: <SignIn /> },
        { path: "/auth/signup", element: <SignUp /> },
      ]
    }
  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App
