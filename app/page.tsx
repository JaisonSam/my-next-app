"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between p-8 sm:p-16 font-sans">
      {/* Top Navigation / Status Header */}
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800/80 pb-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-400 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
            ▲
          </div>
          <span className="font-semibold tracking-tight text-lg text-white">
            Mac Developer Studio
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Fast Refresh Active (HMR) • Apple Silicon macOS
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto my-12 flex flex-col items-center text-center gap-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-4 py-1.5 text-xs text-neutral-400">
          🚀 Development Environment Successfully Configured
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
          What would you like to build today?
        </h1>

        <p className="max-w-xl text-neutral-400 text-base sm:text-lg leading-relaxed">
          Your full-stack foundation is running live with Next.js 16, React 19,
          and Tailwind CSS v4. Edit code in your IDE and see updates instantly in Safari.
        </p>

        {/* Interactive React Client Counter */}
        <div className="flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow-xl">
          <div className="text-sm text-neutral-300 font-medium">
            Test React 19 Client State:
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCount((prev) => prev - 1)}
              className="h-9 w-9 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-bold transition-colors active:scale-95"
            >
              -
            </button>
            <span className="w-12 text-center text-xl font-bold font-mono text-indigo-400">
              {count}
            </span>
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="h-9 w-9 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-colors active:scale-95 shadow-md shadow-indigo-600/30"
            >
              +
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left mt-6">
          <div className="p-5 rounded-2xl border border-neutral-800/80 bg-neutral-900/40 hover:border-neutral-700 transition-colors">
            <div className="text-indigo-400 text-lg mb-2">⚡ Next.js 16</div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              App Router, server components, streaming, and lightning-fast Turbopack compilation.
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-neutral-800/80 bg-neutral-900/40 hover:border-neutral-700 transition-colors">
            <div className="text-violet-400 text-lg mb-2">🎨 Tailwind CSS v4</div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Modern utility-first styling configured with zero-config engine and dark theme support.
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-neutral-800/80 bg-neutral-900/40 hover:border-neutral-700 transition-colors">
            <div className="text-emerald-400 text-lg mb-2">🛠️ Full Toolchain</div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Homebrew, Node.js, Bun, pnpm, and modern Python (uv) ready for any service or backend.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800/80 pt-6 text-xs text-neutral-400">
        <div>
          Workspace: <code className="text-neutral-300 font-mono">/Users/jaisappi/.gemini/antigravity/scratch/my-next-app</code>
        </div>
        <div className="text-neutral-400">
          Ready to pair-program on your next idea.
        </div>
      </footer>
    </div>
  );
}
