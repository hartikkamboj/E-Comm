import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./js/pages/Home/index";
import Login from "./js/pages/Login/index";
import ProductDetails from "./js/pages/ProductDetails/index";
import CategoryCausal from "./js/pages/Category-Causal";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home/product/:id" element={<ProductDetails />} />
        <Route path="/home/:category" element={<CategoryCausal />} />
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
