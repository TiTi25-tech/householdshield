import products from "../data/products"
import { Link } from "react-router-dom"

function Products() {
  return (
    <section className="mt-20 px-8 max-w-6xl mx-auto">
      
      <h2 className="text-3xl font-bold mb-8 text-center">
        All Products 🔥
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {products.map((product) => (
  <Link to={`/product/${product.id}`} key={product.id}>
    
    <div className="bg-gray-900 p-5 rounded-xl shadow-lg flex flex-col justify-between transform hover:scale-[1.02] hover:shadow-2xl transition duration-300">
      
      <img
        src={product.image}
        alt={product.name}
        className="rounded-lg mb-4 w-full h-48 object-cover"
        onError={(e) => {
          e.target.src = "https://placehold.co/300x200/000000/FFFFFF?text=NO+IMAGE"
        }}
      />

      <h3 className="text-xl font-semibold mb-2">
        {product.name}
      </h3>

      <p className="text-gray-400 mb-4">
        {product.description}
      </p>

      <div className="flex items-center mb-2">
  {"⭐".repeat(Math.floor(product.rating))}
  {product.rating % 1 !== 0 && '⭐'}
  <span className="text-gray-400 ml-2 text-sm">
    ({product.rating} . {product.reviews} ratings)
  </span>
</div>

      <span className="bg-yellow-500 text-black px-4 py-2 rounded inline-block">
        View Details
      </span>

    </div>

  </Link>
  
))}

      </div>

    </section>
  )
}

export default Products