
import { useState } from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "Reviews",
    "Categories",
    "Smart Home",
    "Blog",
    "About",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b1020]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2"
        >
          <FaShieldAlt className="text-amber-400 text-2xl" />
          <h1 className="text-2xl font-bold text-white">
            HouseholdShield
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-gray-300 hover:text-white transition duration-300"
            >
              {link}
            </motion.a>
          ))}
        </nav>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-amber-400 hover:bg-amber-300 text-black font-semibold px-5 py-2 rounded-xl transition"
        >
          Explore Deals
        </motion.button>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#111827] border-t border-white/10 px-6 py-6"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-300 hover:text-white text-lg"
              >
                {link}
              </a>
            ))}

            <button className="bg-amber-400 text-black font-semibold py-3 rounded-xl mt-3">
              Explore Deals
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;