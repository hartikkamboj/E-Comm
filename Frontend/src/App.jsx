import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/HomePage";
import Login from "./components/LoginPage";
import ProductDetails from "./components/ProductDetailsPage";
import Layout from "./layout";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Login />}>
        <Route index="true" element={<Home />} />
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
