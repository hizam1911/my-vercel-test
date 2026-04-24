"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState<string | number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCalculate = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("http://lenn-dev.whf.bz/calculate.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ equation }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setResult(data.result);
      }
    } catch (err) {
      setError("Could not connect to the PHP server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-white">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl"
      >
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          PHP Calculator API
        </h1>

        <input
          type="text"
          value={equation}
          onChange={(e) => setEquation(e.target.value)}
          placeholder="e.g. (10 + 5) * 2"
          className="w-full p-4 bg-black/20 border border-white/10 rounded-xl mb-4 focus:outline-none focus:border-blue-500 transition-all text-xl"
        />

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleCalculate}
          disabled={loading}
          className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/20 disabled:opacity-50"
        >
          {loading ? "Calculating..." : "Calculate"}
        </motion.button>

        {/* Display Result */}
        {result !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-center">
            <p className="text-sm text-green-300 uppercase tracking-widest">Result</p>
            <p className="text-4xl font-mono font-bold">{result}</p>
          </motion.div>
        )}

        {/* Display Error */}
        {error && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-center">
            <p className="text-red-400">{error}</p>
          </motion.div>
        )}
      </motion.section>
    </main>
  );
}