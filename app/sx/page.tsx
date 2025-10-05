"use client";

import { ArrowUpRight, Twitter, Send, Globe } from "lucide-react";
import { useState, useEffect } from "react";

export default function SXTokenPage() {
  const [marketCap, setMarketCap] = useState("7,789,567.45");

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Token Info Header */}
            <div>
              <div className="text-sm text-gray-400 mb-2">
                $X Token, <span className="text-white">The Backbone of <span className="font-museo">xCombinator</span></span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">$X</span>
                </div>
                <div>
                  <div className="text-sm text-gray-400">
                    <span className="text-white font-medium">$X</span> was launched on{" "}
                    <span className="text-white font-medium">DAOs.fun</span> as an{" "}
                    <span className="text-white font-medium">SPL-22</span> token on the{" "}
                    <span className="text-white font-medium">Solana network</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">
                With <span className="text-white">every new project</span>, the <span className="font-museo">xCombinator</span> ecosystem strengthens, and so does the value of $X
              </h2>
            </div>

            {/* Market Cap Section */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <h3 className="text-xl text-gray-400">$X Marketcap</h3>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">${marketCap}</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm border border-green-500/20">
                  active
                </span>
              </div>

              {/* Supply Info */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Total supply</div>
                  <div className="text-lg font-semibold">• 1.1 Billion</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Circulating supply</div>
                  <div className="text-lg font-semibold">• 1.1 Billion</div>
                </div>
              </div>
            </div>

            {/* Tokenomics Details */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-gray-500">•Buyback</span>
                <span className="text-white font-medium">1.6M $X tokens</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-500">•Add liquidity to $X</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-500">The recurring buyback boosts</span>
                <span className="text-white font-medium">$X liquidity</span>
                <span className="text-gray-500">and creates a stronger floor.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white font-medium">More projects = More $X buybacks = Deeper liquidity</span>
              </div>

              {/* Embedded Tweet Preview */}
              <div className="mt-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium font-museo">xCombinator</span>
                      <span className="text-xs text-gray-500">@<span className="font-museo">xCombinator</span> · 2h</span>
                    </div>
                    <div className="text-sm text-gray-300 mb-3">
                      🔥 Latest buyback: 1.6M $X tokens
                      <br />
                      Adding liquidity to strengthen the floor!
                    </div>
                    <div className="flex items-center gap-6 text-xs text-gray-500">
                      <button className="hover:text-white transition-colors">↩ 52</button>
                      <button className="hover:text-white transition-colors">♥ 263</button>
                      <button className="hover:text-white transition-colors">⇧ 30K</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Token Powers Section */}
            <div>
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-white">$X</span> powers
              </h2>
              <h3 className="text-4xl font-bold text-gray-400 mb-4">
                the <span className="font-museo">xCombinator</span> ecosystem
              </h3>
              <p className="text-gray-400 text-lg">
                $X isn't just a token—it's ownership in the next era of Solana products
              </p>
            </div>

            {/* Product Cards */}
            <div className="space-y-4">
              {/* xApple Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl font-bold">x</div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 via-pink-400 to-pink-500 shadow-lg shadow-pink-500/20"></div>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                  <div className="mb-3">
                    <h4 className="text-xl font-bold mb-1">xApple</h4>
                    <span className="text-xs text-gray-400">Launchpad</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    The coin that thinks faster than you can blink. Ride the wave of machine intelligence and memes.
                  </p>
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all">
                      <Twitter className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all">
                      <Send className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all">
                      <Globe className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Coming Soon Card */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-6">
                <div className="h-32 flex items-center justify-center">
                  <span className="text-gray-600">More products coming soon...</span>
                </div>
              </div>
            </div>

            {/* Deflationary Mechanism */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                <span className="font-museo">xCombinator</span> ensures a <span className="text-white">deflationary supply mechanism</span> through constant buybacks
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}