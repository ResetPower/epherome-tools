import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JSONFormatting from "./pages/JSONFormatting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/json",
    element: <JSONFormatting />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
