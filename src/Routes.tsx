import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import { Cart } from "./pages/Cart"
import { HomePage } from "./pages/HomePage"
import { Catalog } from "./pages/Catalog"

export function AppRoutes(){
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/catalog" element={<Catalog/>} />
      </Routes>
    </Router>
  )
}