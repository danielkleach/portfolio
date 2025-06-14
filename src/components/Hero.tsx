'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center bg-[#fafafa] pt-12 md:pt-16 pb-8 md:pb-12">
      <div className="container mx-auto px-4 w-full">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_450px] items-center gap-8 md:gap-12 w-full">
          <div className="order-2 md:order-1 w-full">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-teal-600 font-mono mb-3 md:mb-4"
            >
              Hi, my name is
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-3 md:mb-4 flex items-center gap-2"
            >
              Daniel Leach
              <span className="text-teal-600">.</span>
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-4xl text-gray-600 mb-4 md:mb-6 flex items-center gap-2"
            >
              I build things for the web
              <span className="w-0.5 h-6 md:h-8 bg-gray-600 animate-blink"></span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 mb-6 md:mb-8 max-w-xl text-sm md:text-base"
            >
              I&apos;m a software engineer specializing in building exceptional digital experiences. Currently focused on creating accessible, human-centered products.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <Link 
                href="#projects" 
                className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors text-center"
              >
                See my work
              </Link>
              <Link 
                href="#contact" 
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:border-gray-400 transition-colors text-center"
              >
                Get in touch
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full order-3 md:order-2"
          >
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg">
              <div className="text-xs md:text-sm font-mono mb-2 text-gray-400">
                {/* brain.ts */}
              </div>
              <pre className="text-[13px] md:text-[15px] font-mono leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-blue-600">class</span>{" "}
                  <span className="text-yellow-600">Brain</span> {"{"}
                  {"\n"}  <span className="text-purple-600">async</span>{" "}
                  <span className="text-yellow-600">solve</span>(
                  <span className="text-orange-600">problem</span>: <span className="text-blue-600">any</span>) {"{"}
                  {"\n"}    <span className="text-purple-600">while</span>(<span className="text-orange-600">problem</span>) {"{"}
                  {"\n"}      <span className="text-blue-600">await</span> <span className="text-yellow-600">coffee</span>();
                  {"\n"}      <span className="text-purple-600">if</span>(<span className="text-yellow-600">think</span>() && <span className="text-yellow-600">code</span>()) {"{"}
                  {"\n"}        <span className="text-orange-600">problem</span> = <span className="text-blue-600">null</span>;
                  {"\n"}      {"}"}
                  {"\n"}    {"}"}
                  {"\n"}    <span className="text-purple-600">return</span> <span className="text-green-600">&quot;🎉 Solution!&quot;</span>;
                  {"\n"}  {"}"}
                  {"\n"}{"}"}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Add this to your globals.css or tailwind.config.js
// @keyframes blink {
//   0%, 100% { opacity: 0; }
//   50% { opacity: 1; }
// }
// .animate-blink {
//   animation: blink 1s infinite;
// } 