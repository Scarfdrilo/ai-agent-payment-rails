"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <span className="text-xl">💳</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Payment Rails
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="text-slate-300 hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/explorer" className="text-slate-300 hover:text-white transition-colors">
              Explorer
            </Link>
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Launch App
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-purple-300 text-sm">Powered by Monad Blockchain</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Payment Infrastructure
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              for Autonomous AI Agents
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
            Decentralized payment rails enabling AI agents to transact value securely.
            Let your AI agents hire other agents, pay for services, and settle instantly with stablecoins.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-purple-500/25"
            >
              Get Started →
            </Link>
            <Link
              href="/explorer"
              className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-xl font-semibold text-lg hover:bg-slate-800 transition-colors"
            >
              View Explorer
            </Link>
          </div>
        </div>
      </section>

      {/* Animated Agent Flow */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className="relative bg-slate-900/50 border border-purple-500/20 rounded-3xl p-8 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5"></div>

            <div className="relative flex items-center justify-between">
              {/* Agent 1 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30">
                  <span className="text-4xl">🤖</span>
                </div>
                <span className="font-semibold text-white">Research Agent</span>
                <span className="text-sm text-slate-400">Needs compute</span>
              </div>

              {/* Payment Flow Animation */}
              <div className="flex-1 mx-8">
                <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-1000 ${
                      isHovered ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
                <div className="flex justify-center mt-4">
                  <div className={`flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}>
                    <span className="text-green-400 font-mono text-sm">+ 50 USDC</span>
                  </div>
                </div>
              </div>

              {/* Agent 2 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-800 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30">
                  <span className="text-4xl">⚡</span>
                </div>
                <span className="font-semibold text-white">Compute Agent</span>
                <span className="text-sm text-slate-400">Provides GPU</span>
              </div>
            </div>

            <p className="text-center text-slate-400 mt-8">
              Hover to see payment flow in action
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              🛠 Use Cases
            </span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            AI agents are becoming autonomous economic actors. Our platform enables seamless machine-to-machine commerce.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💻",
                title: "Compute Resources",
                desc: "AI models request and pay for compute from rendering agents"
              },
              {
                icon: "📊",
                title: "Premium APIs",
                desc: "Data agents purchase access from provider agents"
              },
              {
                icon: "📈",
                title: "Trading Fees",
                desc: "Trading agents pay fee splits to strategy creators"
              },
              {
                icon: "🎨",
                title: "Asset Licensing",
                desc: "Creative AI agents license assets from each other"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-purple-500/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              ⚙️ Tech Stack
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Next.js", "TypeScript", "Tailwind CSS", "Monad Blockchain", "Stablecoins", "Smart Contracts"].map((tech) => (
              <div
                key={tech}
                className="px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-br from-purple-900/50 to-cyan-900/50 border border-purple-500/30 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              ✨ The economic layer for the autonomous AI revolution
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Start building your AI agent economy today
            </p>
            <Link
              href="/dashboard"
              className="inline-flex px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:scale-105 transition-transform"
            >
              Launch Dashboard →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-xl">💳</span>
            <span className="font-semibold text-slate-300">AI Payment Rails</span>
          </div>
          <p className="text-slate-500 text-sm">
            Built for Monad Blitz CDMX 🇲🇽 | VibeCoding Bootcamp
          </p>
        </div>
      </footer>
    </div>
  );
}
