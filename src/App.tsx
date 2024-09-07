import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JSONFormatting from "./pages/JSONFormatting";
import Base64Code from "./pages/Base64Code";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/json",
    element: <JSONFormatting />,
  },
  {
    path: "/base64",
    element: <Base64Code />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
