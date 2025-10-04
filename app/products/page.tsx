"use client";

import { ArrowUpRight, Twitter, Send, Globe, Hammer } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Hammer className="w-8 h-8 text-gray-400" />
            <h1 className="text-5xl font-bold">
              Products under <span className="text-white">xCombinator</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            xCombinator serves as an <span className="text-white font-medium">umbrella organization</span> for our suite of products
          </p>
        </div>

        {/* Product Card - xApple */}
        <div className="relative group">
          {/* Gradient background effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500/20 via-red-500/20 to-orange-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Card */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                  <div className="text-3xl font-bold">x</div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 via-pink-400 to-pink-500 shadow-lg shadow-pink-500/30"></div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-2xl font-bold">xApple</h2>
                    <span className="px-2 py-0.5 bg-white/10 rounded-full text-xs text-gray-300">Launchpad</span>
                  </div>
                </div>
              </div>

              {/* External link */}
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all group/btn">
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover/btn:text-white transition-colors" />
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 max-w-2xl">
              xApple—fair launches, real liquidity, and rewards that put traders first.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all group/social">
                <Twitter className="w-4 h-4 text-gray-400 group-hover/social:text-white transition-colors" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all group/social">
                <Send className="w-4 h-4 text-gray-400 group-hover/social:text-white transition-colors" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all group/social">
                <Globe className="w-4 h-4 text-gray-400 group-hover/social:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Coming Soon Cards - You can add more products here */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all"
            >
              <div className="h-32 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Coming Soon</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}