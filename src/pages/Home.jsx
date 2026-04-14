
function Home() {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-8 max-w-5xl mx-auto text-white">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center mt-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Protect Your Home Smartly 🏠
        </h2>

        <p className="text-gray-400 max-w-xl mb-6">
          Discover the best home security products, reviews, and guides to keep your family safe.
        </p>

        <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400">
          Explore Products
        </button>
      </section>

 <section className="mt-20 px-8 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-8">
    🔥 Compare Top Security Products
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full text-left border border-gray-800 rounded-lg overflow-hidden">
      <thead className="bg-gray-900">
        <tr>
          <th className="p-4">Product</th>
          <th className="p-4">Rating</th>
          <th className="p-4">Best For</th>
          <th className="p-4">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-t border-gray-800">
          <td className="p-4">Smart Security Camera</td>
          <td className="p-4">⭐⭐⭐⭐⭐ (4.5)</td>
          <td className="p-4">Home Monitoring</td>
          <td className="p-4">
            <a
              href="YOUR_AFFILIATE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg"
            >
              Check Price
            </a>
          </td>
        </tr>

        <tr className="border-t border-gray-800">
          <td className="p-4">Smart Door Lock</td>
          <td className="p-4">⭐⭐⭐⭐ (4.1)</td>
          <td className="p-4">Keyless Entry</td>
          <td className="p-4">
            <a
              href="YOUR_AFFILIATE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg"
            >
              Check Price
            </a>
          </td>
        </tr>

        <tr className="border-t border-gray-800">
          <td className="p-4">Alarm System Kit</td>
          <td className="p-4">⭐⭐⭐⭐ (4.2)</td>
          <td className="p-4">Full Home Security</td>
          <td className="p-4">
            <a
              href="YOUR_AFFILIATE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg"
            >
              Check Price
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section> 


      {/* PRODUCTS */}
      <section className="mt-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Top Security Products 🔥
        </h2>

       

        {/* your product cards here */}

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {/* PRODUCT CARD */}
          <div className="bg-gray-900 p-5 rounded-xl shadow-lg flex flex-col justify-between transform hover:scale-[1.02] hover:shadow-2xl transition duration-300">
  <img 
    src="https://images.unsplash.com/photo-1558002038-1055907df827"
    alt="Security Camera"
    className="rounded-lg mb-4 w-full h-48 object-cover"
  />

  <h3 className="text-xl font-semibold mb-2">Smart Security Camera</h3>

  <p className="text-gray-400 mb-4">
    Monitor your home in real-time with HD video and motion alerts.
  </p>

  <a 
  href="https://www.amazon.com"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 inline-block"
>
  Check Price on Amazon
</a>
</div>


         <div className="bg-gray-900 p-5 rounded-xl shadow-lg flex flex-col justify-between transform hover:scale-[1.02] hover:shadow-2xl transition duration-300">
  <img 
    src="https://images.unsplash.com/photo-1558002038-1055907df827"
    alt="Security Camera"
    className="rounded-lg mb-4 w-full h-48 object-cover"
  />

  <h3 className="text-xl font-semibold mb-2">Smart Security Camera</h3>

  <p className="text-gray-400 mb-4">
    Monitor your home in real-time with HD video and motion alerts.
  </p>

  <a 
  href="https://www.amazon.com"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 inline-block"
>
  Check Price on Amazon
</a>
</div>


          <div className="bg-gray-900 p-5 rounded-xl shadow-lg flex flex-col justify-between transform hover:scale-[1.02] hover:shadow-2xl transition duration-300">
  <img 
    src="https://images.unsplash.com/photo-1558002038-1055907df827"
    alt="Security Camera"
    className="rounded-lg mb-4 w-full h-48 object-cover"
  />

  <h3 className="text-xl font-semibold mb-2">Smart Security Camera</h3>

  <p className="text-gray-400 mb-4">
    Monitor your home in real-time with HD video and motion alerts.
  </p>

 <a 
  href="https://www.amazon.com"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 inline-block"
>
  Check Price on Amazon
</a>
</div>


        </div>
      </section>

    </div>
  )
}

export default Home
