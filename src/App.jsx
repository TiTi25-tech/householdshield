import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Reviews from "./pages/Reviews"
import ProductDetails from "./pages/ProductDetails"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Category from "./pages/Category"
import Contact from "./pages/Contact"
import Privacy from "./pages/Privacy"

<Route path="/product/:id" element={<ProductDetails />} />


function App() {
  return (
    <Router>
      <div className="bg-gray-50 text-gray-800 min-h-screen">

        {/* NAVBAR */}
        <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center px-4 md:px-8 py-4 gap-4"></div>
          <h1 className="text-xl font-bold">HouseholdShield 🔐</h1>
          <div className="space-x-6">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
        </nav>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/product/:id" element={<ProductDetails />} />
           <Route path="/blog" element={<Blog />} />
           <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/category/:categoryName" element={<Category />} />
       </Routes>

      </div>
    </Router>
  )
}

export default App