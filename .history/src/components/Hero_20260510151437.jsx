
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07111F] text-white flex items-center">

      {/* Atmospheric Background */}
      <div className="absolute inset-0">

        {/* Deep Blue Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#16325B_0%,#07111F_45%)]" />

        {/* Soft Light Glow */}
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />

        {/* Bottom Right Glow */}
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-cyan-400/10 blur-[160px]" />

        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Container */}
      <div className="container-premium relative z-10 pt-32">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-8">
              <FaShieldAlt className="text-amber-400" />
              <span className="text-sm text-gray-300">
                Trusted Smart Home Recommendations
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-[-2px] max-w-3xl mb-8">
              Upgrade Your Home With
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
                {" "}Smarter Product Choices
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              Discover premium household products, expert reviews,
              smart buying guides, and trusted recommendations
              designed to improve safety, comfort, organization,
              and everyday living.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="group bg-amber-400 hover:bg-amber-300 text-black font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-amber-400/20 transition-all duration-300"
              >
                Explore Reviews
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="border border-white/10 bg-white/5 backdrop-blur-md text-white px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                Browse Categories
              </motion.button>

            </div>

          </motion.div>

          {/* RIGHT SIDE VISUALS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative hidden lg:flex justify-center"
          >

            {/* Main Glass Card */}
            <div className="relative glass-card rounded-[32px] p-8 w-[420px]">

              {/* Top */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-slate-400 text-sm mb-2">
                    Featured Product
                  </p>

                  <h3 className="text-2xl font-bold">
                    Smart Home Security
                  </h3>
                </div>

                <div className="bg-amber-400 text-black p-4 rounded-2xl">
                  <FaShieldAlt size={26} />
                </div>
              </div>

              {/* Fake Product Image */}
              <div className="h-[220px] rounded-3xl bg-gradient-to-br from-slate-700 to-slate-900 mb-8 border border-white/10" />

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-amber-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <span className="text-slate-300">
                  Trusted by Thousands
                </span>
              </div>

              {/* Bottom CTA */}
              <button className="w-full bg-white/10 hover:bg-white/15 border border-white/10 py-4 rounded-2xl text-white font-semibold transition-all">
                View Product Recommendations
              </button>

            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -bottom-10 -left-8 glass-card rounded-3xl px-6 py-5"
            >
              <p className="text-slate-400 text-sm mb-1">
                Weekly Product Reviews
              </p>

              <h4 className="text-2xl font-bold">
                250+
              </h4>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;