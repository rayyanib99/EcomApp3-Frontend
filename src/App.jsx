import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import EditUser from "./pages/EditUser";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './pages/Users';

const App = () => 
{
  return (
    <Router>
      <div className = "container">
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/users" element = {<Users />} />
          <Route path = "/:id" element = {<EditUser />} />
          <Route path = "/register" element = {<Register />} />
          <Route path = "/signin" element = {<Login />} />
          <Route path = "/cart" element = {<Cart />} />
          <Route path = "/apparel" element = {<ProductList />} />
          <Route path = "/electronics" element = {<Product />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;