"use client"; // Required for Framer Motion animations

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-white overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" 
        />
      </div>

      {/* The Main Card */}
      <motion.section 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl w-full bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl text-center"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
        >
          Next.js + Vercel
        </motion.h1>

        <p className="text-slate-400 text-lg mb-8">
          Deployment test successful! This page is hosted on Vercel's free subdomain with automatic SSL.
        </p>
        
        <div className="flex gap-4 justify-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://vercel.com/docs" 
            className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-blue-400 transition-colors"
          >
            Read Docs
          </motion.a>

          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert('Fluid UI Active!')}
            className="px-6 py-3 border border-white/20 rounded-full transition-all"
          >
            Test Action
          </motion.button>
        </div>
      </motion.section>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-12 text-slate-500 text-sm"
      >
        Built with Tailwind CSS & Next.js
      </motion.footer>
    </main>
  );
}