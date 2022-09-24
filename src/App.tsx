import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainPage />
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;