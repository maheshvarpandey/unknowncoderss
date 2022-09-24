import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import ContactUs from "./components/ContactUs/ContactUs";
import MainPage from "./components/MainPage/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainPage />
    ),
  },
  {
    path: "contact",
    element: <ContactUs />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;