
import { useParams, Link } from "react-router-dom"
import products from "../data/products"

function Category() {
  const { categoryName } = useParams()

  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  )

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-2 capitalize">
        {categoryName.replace("-", " ")}
      </h1>

      <p className="text-gray-500 mb-8">
        Discover the best products in this category.
      </p>

      {/* PRODUCTS */}
      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">

                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />

                <h3 className="font-semibold mb-1">{product.name}</h3>

                <p className="text-yellow-500 text-sm mb-2">
                  ⭐ {product.rating} ({product.reviews})
                </p>

                <button className="bg-amber-500 hover:bg-amber-400 text-white px-4 py-2 rounded-lg w-full">
                  View Product
                </button>

              </div>
            </Link>
          ))}

        </div>
      )}

    </div>
  )
}

export default Category