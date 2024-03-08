import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/HomePage";
import Login from "./components/LoginPage";
import ProductDetails from "./components/ProductDetailsPage";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
