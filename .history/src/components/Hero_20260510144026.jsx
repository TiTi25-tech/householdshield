
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0b1020] overflow-hidden flex items-center">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-amber-400/20 blur-[120px]" />

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-white/10 border border-white/10 backdrop-blur-md text-amber-300 px-5 py-2 rounded-full mb-6"
          >
            Trusted Smart Home Recommendations
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
            Upgrade Your Home With Smarter Product Choices
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
            Discover premium household products, expert reviews, smart buying guides,
            and top-rated home essentials designed to improve safety, comfort,
            organization, and everyday living.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-400 hover:bg-amber-300 text-black font-bold px-8 py-4 rounded-2xl text-lg transition shadow-lg shadow-amber-400/20"
            >
              Explore Reviews
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/10 bg-white/5 backdrop-blur-md text-white px-8 py-4 rounded-2xl text-lg hover:bg-white/10 transition"
            >
              Browse Categories
            </motion.button>

          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default Hero;