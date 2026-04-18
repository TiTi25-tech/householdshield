
import { useParams } from "react-router-dom"
import products from "../data/products"
import { Link } from "react-router-dom"

function ProductDetails() {
  const { id } = useParams()
  console.log("URL ID:", id)
console.log("Products:", products)

  const product = products.find((p) => p.id === Number(id))

  const relatedProducts = products.filter(
    (item) =>
       item.category === product.category &&
        item.id !== product.id
)
  .slice(0, 3)

  if (!product) {
    return <h1 className="text-white p-10">Product not found</h1>
  }

  return (
    <div className="px-4 sm:px-6 md:px-10 py-8 max-w-5xl mx-auto">

      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">
        {product.name}
      </h1>

      <div className="flex items-center mb-4">
  {"⭐".repeat(Math.floor(product.rating))}
  {product.rating % 1 !== 0 && '⭐'}
  <span className="text-gray-400 ml-2 text-sm">
    ({product.rating} .  {product.reviews} reviews)
  </span>
</div>

      <p className="text-gray-400 mb-6">
        {product.description}
      </p>

      <div className="mt-6">
  <h2 className="text-xl font-semibold mb-2">Why This Product?</h2>
  <ul className="text-gray-400 list-disc ml-5 space-y-1">
    <li>Easy installation</li>
    <li>Reliable security protection</li>
    <li>Affordable and durable</li>
  </ul>
</div>

<div className="mt-8 grid md:grid-cols-2 gap-6 items-start">

  <div className="bg-gray-900 p-4 rounded-lg hover:shadow-2xl transition border border-gray-800">
    <h3 className="text-green-400 font-semibold mb-2 text-lg">✅ Pros</h3>
    <ul className="text-gray-400 space-y-2">
      {product.pros?.map((pro, index) => (
        <li key={index}>• {pro}</li>
      ))}
    </ul>
  </div>

  <div className="bg-gray-900 p-4 rounded-lg hover:shadow-2xl transition border border-gray-800">
    <h3 className="text-red-400 font-semibold mb-2 text-lg">❌ Cons</h3>
    <ul className="text-gray-400 space-y-2">
      {product.cons?.map((con, index) => (
        <li key={index}>• {con}</li>
      ))}
    </ul>
  </div>

</div>

    <div className="flex gap-4 mt-4">
      <a className ="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400"
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-amber-500 text-black px-6 py-3 rounded-xl hover:bg-amber-400 font-semibold transition inline-block">
        Check Price on Amazon
      </a>

      <a className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800">
    Read Full Review
     </a>
    </div>

      <p className="text-sm text-gray-500 mt-3">
  ⚠️ Prices may increase soon
</p>

<div className="mt-16 text-center">
  <a
    href={product.link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-amber-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-400 inline-block"
  >
    🛒 Buy Now on Amazon
  </a>

  <p className="text-sm text-gray-500 mt-2">
    ⚠️ Limited availability 
  </p>
</div>


{/* RELATED PRODUCTS */}

{/* RELATED PRODUCTS */}
<div className="mt-16">
  <h2 className="text-2xl font-bold mb-6">🔄 Related Products</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {relatedProducts.map(item => (
      <Link to={`/product/${item.id}`} key={item.id}>
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">

          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />

          <h3 className="font-semibold mb-1">{item.name}</h3>

          <p className="text-yellow-500 text-sm mb-2">
            ⭐ {item.rating} ({item.reviews})
          </p>

          <button className="bg-amber-500 hover:bg-amber-400 text-white px-4 py-2 rounded-lg w-full">
            View Product
          </button>

        </div>
      </Link>
    ))}

  </div>
</div>
<a
  href={product.link}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-full shadow-2xl font-semibold z-50 transition animate-pulse"
>
  🛒 Buy Now
</a>
    </div>
    
  )
}

export default ProductDetails