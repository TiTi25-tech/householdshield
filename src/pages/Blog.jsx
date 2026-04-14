
import { Link } from "react-router-dom"

function Blog() {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-8 max-w-5xl mx-auto">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-6">
        Best Cheap Alarm System for Home (2026) 🔒
      </h1>

      {/* INTRO */}
      <p className="text-gray-400 mb-6">
        Looking for a cheap alarm system for your home? You don’t need to spend a fortune to stay safe. In this guide, we review the best affordable home security systems that offer great protection at a low cost.
      </p>

      {/* PRODUCT 1 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        🥇 Smart Security Camera (Best Budget Option)
      </h2>

      <p className="text-gray-400 mb-4">
        This affordable security camera is perfect for small homes and apartments. It offers HD video, motion alerts, and easy setup.
      </p>

      <ul className="text-gray-400 mb-4 list-disc pl-5">
        <li>Low cost</li>
        <li>Easy installation</li>
        <li>Mobile app control</li>
      </ul>

      <div className="flex gap-4 mb-8">
        <Link
          to="/product/1"
          className="bg-amber-500 hover:bg-amber-400 text-black px-5 py-2 rounded"
        >
          View Details
        </Link>

        <a
          href="https://www.amazon.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-500 px-5 py-2 rounded hover:bg-gray-800"
        >
          Check Price
        </a>
      </div>

      {/* PRODUCT 2 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        🥈 Alarm System Kit (Best Overall Value)
      </h2>

      <p className="text-gray-400 mb-4">
        A complete alarm system with sensors and mobile alerts. Great for full home protection at an affordable price.
      </p>

      <div className="flex gap-4 mb-8">
        <Link
          to="/product/3"
          className="bg-amber-500 hover:bg-amber-400 text-black px-5 py-2 rounded"
        >
          View Details
        </Link>

        <a
          href="https://www.amazon.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-500 px-5 py-2 rounded hover:bg-gray-800"
        >
          Check Price
        </a>
      </div>

      {/* BUYING GUIDE */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        🧠 What to Look for in a Cheap Alarm System
      </h2>

      <ul className="text-gray-400 mb-6 list-disc pl-5">
        <li>Easy installation</li>
        <li>Mobile notifications</li>
        <li>No monthly subscription</li>
        <li>Reliable sensors</li>
      </ul>

      {/* CONCLUSION */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        🏁 Final Verdict
      </h2>

      <p className="text-gray-400">
        If you’re on a budget, these cheap alarm systems offer great protection without breaking the bank. Choose the one that fits your needs and start securing your home today.
      </p>

    </div>
  )
}

export default Blog