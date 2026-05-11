
import { Link } from "react-router-dom"
import products from "../data/products"

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10">

      {/* HERO */}
      <section className="bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Peace of Mind Starts at Home 
        </h1>
        <p className="text-gray-500 mb-6">
          Discover smart products, trusted reviews, and everyday essentials — all in one place..
        </p>
        <Link 
          to="/products"
          className="bg-amber-500 hover:bg-amber-400 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Shop Now
        </Link>
      </section>

      {/* TRUST */}
      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <h3 className="font-semibold mb-2">Expert Reviews</h3>
          <p className="text-gray-500 text-sm">
            We test and review products honestly.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <h3 className="font-semibold mb-2">Top Quality</h3>
          <p className="text-gray-500 text-sm">
            Only highly rated products featured.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <h3 className="font-semibold mb-2">Safe Choices</h3>
          <p className="text-gray-500 text-sm">
            Trusted picks for your home safety.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
<section className="mb-15">
  <h2 className="text-2xl font-bold mb-6">🛍️ Shop Popular Categories</h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* {Home and Living} */}

    <div className="bg-white rounded-xl shadow hover:shadow-md p-6">
      <h3 className="font-semibold text-lg mb-2">Home and Living</h3>
      <p className="text-gray-500 text-sm mb-4">
        Smart security, home devices & comfort essentials
      </p>
      <Link to="/products" className="text-amber-500 font-semibold">
        Explore →
      </Link>
    </div>
             {/* Cleaning */}
    <div className="bg-white rounded-xl shadow hover:shadow-md p-6">
      <h3 className="font-semibold text-lg mb-2">Cleaning Gadgets</h3>
      <p className="text-gray-500 text-sm mb-4">
        Vacuums, scrubbers & smart cleaning tools
      </p>
      <Link to="/products" className="text-amber-500 font-semibold">
        Explore →
      </Link>
    </div>

          {/* Kitchen */}
    <div className="bg-white rounded-xl shadow hover:shadow-md p-6">
      <h3 className="font-semibold text-lg mb-2">Kitchen Essentials</h3>
      <p className="text-gray-500 text-sm mb-4">
        Air fryers, blenders & more
      </p>
      <Link to="/products" className="text-amber-500 font-semibold">
        Explore →
      </Link>
    </div>

     {/* SMART GADGETS */}
    <div className="bg-white rounded-xl shadow hover:shadow-md p-6">
      <h3 className="font-semibold text-lg mb-2">⚡ Smart Gadgets</h3>
      <p className="text-gray-500 text-sm mb-4">
        Automation, smart plugs & modern tech
      </p>
      <Link to="/category/smart-gadgets" className="text-amber-500 font-semibold">
        Explore →
      </Link>
    </div>

     {/* HEALTH & FITNESS */}
    <div className="bg-white rounded-xl shadow hover:shadow-md p-6">
      <h3 className="font-semibold text-lg mb-2">💪 Health & Fitness</h3>
      <p className="text-gray-500 text-sm mb-4">
        Wellness tools & fitness essentials
      </p>
      <Link to="/category/health" className="text-amber-500 font-semibold">
        Explore →
      </Link>
    </div>

    {/* DAILY ESSENTIALS */}
    <div className="bg-white rounded-xl shadow hover:shadow-md p-6">
      <h3 className="font-semibold text-lg mb-2">🛒 Daily Essentials</h3>
      <p className="text-gray-500 text-sm mb-4">
        Useful products for everyday life
      </p>
      <Link to="/category/essentials" className="text-amber-500 font-semibold">
        Explore →
      </Link>
    </div>

  </div>
</section>

      {/* DEALS SECTION */}
<section className="mb-14">
  <h2 className="text-2xl font-bold mb-6">🔥 Hot Deals</h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded">
        Limited Offer
      </span>

      <img
        src={products[0].image}
        alt=""
        className="w-full h-40 object-cover rounded-lg my-3"
      />

      <h3 className="font-semibold">{products[0].name}</h3>

      <p className="text-red-500 font-bold text-lg">$59.99</p>
      <p className="text-gray-400 line-through text-sm">$99.99</p>

      <Link to={`/product/${products[0].id}`}>
        <button className="mt-3 w-full bg-amber-500 hover:bg-amber-400 text-white py-2 rounded-lg">
          Shop Now
        </button>
      </Link>
    </div>

    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
        Best Seller
      </span>

      <img
        src={products[1].image}
        alt=""
        className="w-full h-40 object-cover rounded-lg my-3"
      />

      <h3 className="font-semibold">{products[1].name}</h3>

      <p className="text-red-500 font-bold text-lg">$79.99</p>
      <p className="text-gray-400 line-through text-sm">$129.99</p>

      <Link to={`/product/${products[1].id}`}>
        <button className="mt-3 w-full bg-amber-500 hover:bg-amber-400 text-white py-2 rounded-lg">
          Shop Now
        </button>
      </Link>
    </div>

    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <span className="text-xs bg-blue-100 text-blue-500 px-2 py-1 rounded">
        Top Pick
      </span>

      <img
        src={products[2].image}
        alt=""
        className="w-full h-40 object-cover rounded-lg my-3"
      />

      <h3 className="font-semibold">{products[2].name}</h3>

      <p className="text-red-500 font-bold text-lg">$39.99</p>
      <p className="text-gray-400 line-through text-sm">$69.99</p>

      <Link to={`/product/${products[2].id}`}>
        <button className="mt-3 w-full bg-amber-500 hover:bg-amber-400 text-white py-2 rounded-lg">
          Shop Now
        </button>
      </Link>
    </div>

  </div>
</section>

    </div>
  )
}

export default Home


// function Home() {
//   return (
//     <div className="px-4 sm:px-6 md:px-10 py-8 max-w-5xl mx-auto text-white">

//       {/* HERO */}
//       <section className="flex flex-col items-center justify-center text-center mt-20 px-4">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           Protect Your Home Smartly 🏠
//         </h2>

//         <p className="text-gray-400 max-w-xl mb-6">
//           Discover the best home security products, reviews, and guides to keep your family safe.
//         </p>

//         <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400">
//           Explore Products
//         </button>
//       </section>

//  <section className="mt-20 px-8 max-w-6xl mx-auto">
//   <h2 className="text-3xl font-bold text-center mb-8">
//     🔥 Compare Top Security Products
//   </h2>

//   <div className="overflow-x-auto">
//     <table className="w-full text-left border border-gray-800 rounded-lg overflow-hidden">
//       <thead className="bg-gray-900">
//         <tr>
//           <th className="p-4">Product</th>
//           <th className="p-4">Rating</th>
//           <th className="p-4">Best For</th>
//           <th className="p-4">Action</th>
//         </tr>
//       </thead>

//       <tbody>
//         <tr className="border-t border-gray-800">
//           <td className="p-4">Smart Security Camera</td>
//           <td className="p-4">⭐⭐⭐⭐⭐ (4.5)</td>
//           <td className="p-4">Home Monitoring</td>
//           <td className="p-4">
//             <a
//               href="YOUR_AFFILIATE_LINK"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg"
//             >
//               Check Price
//             </a>
//           </td>
//         </tr>

//         <tr className="border-t border-gray-800">
//           <td className="p-4">Smart Door Lock</td>
//           <td className="p-4">⭐⭐⭐⭐ (4.1)</td>
//           <td className="p-4">Keyless Entry</td>
//           <td className="p-4">
//             <a
//               href="YOUR_AFFILIATE_LINK"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg"
//             >
//               Check Price
//             </a>
//           </td>
//         </tr>

//         <tr className="border-t border-gray-800">
//           <td className="p-4">Alarm System Kit</td>
//           <td className="p-4">⭐⭐⭐⭐ (4.2)</td>
//           <td className="p-4">Full Home Security</td>
//           <td className="p-4">
//             <a
//               href="YOUR_AFFILIATE_LINK"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg"
//             >
//               Check Price
//             </a>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// </section> 


//       {/* PRODUCTS */}
//       <section className="mt-20 px-8 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold mb-8 text-center">
//           Top Security Products 🔥
//         </h2>

       

//         {/* your product cards here */}

//         <div className="grid md:grid-cols-3 gap-6 mt-16">

//           {/* PRODUCT CARD */}
//           <div className="bg-gray-900 p-5 rounded-xl shadow-lg flex flex-col justify-between transform hover:scale-[1.02] hover:shadow-2xl transition duration-300">
//   <img 
//     src="https://images.unsplash.com/photo-1558002038-1055907df827"
//     alt="Security Camera"
//     className="rounded-lg mb-4 w-full h-48 object-cover"
//   />

//   <h3 className="text-xl font-semibold mb-2">Smart Security Camera</h3>

//   <p className="text-gray-400 mb-4">
//     Monitor your home in real-time with HD video and motion alerts.
//   </p>

//   <a 
//   href="https://www.amazon.com"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 inline-block"
// >
//   Check Price on Amazon
// </a>
// </div>


//          <div className="bg-gray-900 p-5 rounded-xl shadow-lg flex flex-col justify-between transform hover:scale-[1.02] hover:shadow-2xl transition duration-300">
//   <img 
//     src="https://images.unsplash.com/photo-1558002038-1055907df827"
//     alt="Security Camera"
//     className="rounded-lg mb-4 w-full h-48 object-cover"
//   />

//   <h3 className="text-xl font-semibold mb-2">Smart Security Camera</h3>

//   <p className="text-gray-400 mb-4">
//     Monitor your home in real-time with HD video and motion alerts.
//   </p>

//   <a 
//   href="https://www.amazon.com"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 inline-block"
// >
//   Check Price on Amazon
// </a>
// </div>


//           <div className="bg-gray-900 p-5 rounded-xl shadow-lg flex flex-col justify-between transform hover:scale-[1.02] hover:shadow-2xl transition duration-300">
//   <img 
//     src="https://images.unsplash.com/photo-1558002038-1055907df827"
//     alt="Security Camera"
//     className="rounded-lg mb-4 w-full h-48 object-cover"
//   />

//   <h3 className="text-xl font-semibold mb-2">Smart Security Camera</h3>

//   <p className="text-gray-400 mb-4">
//     Monitor your home in real-time with HD video and motion alerts.
//   </p>

//  <a 
//   href="https://www.amazon.com"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 inline-block"
// >
//   Check Price on Amazon
// </a>
// </div>


//         </div>
//       </section>

//     </div>
//   )
// }

// export default Home
