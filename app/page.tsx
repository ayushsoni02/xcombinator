"use client";

import { ArrowRight, Eye, Star, Music, Check } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        {/* Background gradient effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Product notification - top right */}
        <Link
          href="/products"
          className="absolute top-32 right-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-3 hover:border-white/20 transition-all group cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <div className="text-xl font-bold font-museo">x</div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-400 via-pink-400 to-pink-500 shadow-lg shadow-pink-500/30"></div>
          </div>
          <div>
            <div className="font-semibold text-sm">xApple</div>
            <div className="text-xs text-gray-400">Meet our latest Product!</div>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* Main content */}
        <div className="relative z-10 text-center max-w-5xl">
          <h1 className="text-7xl text-gray-400 font-bold mb-8 leading-tight font-museo">
            Currently, helping people{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                launch
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"></span>
            </span>{' '}
            on Solana
          </h1>

          {/* Market cap display */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-5 h-5 rounded-full bg-purple-500 animate-pulse"></div>
            <span className="text-sm text-gray-400">$X Marketcap</span>
            <span className="text-sm text-gray-600">•</span>
            <span className="text-lg font-semibold">$7,789,567.45</span>
          </div>

          {/* CTA Button */}
          <Link
            href="/products"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full transition-all"
          >
            <span className="text-gray-300 group-hover:text-white transition-colors">
              View our suite of products
            </span>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bottom features */}
        <div className="absolute bottom-20 w-full max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 flex items-center justify-center flex-shrink-0 transition-all">
                <Eye className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-sm mb-1">
                  <span className="text-white font-medium">Expert guidance</span>{' '}
                  <span className="text-gray-400">Industry leaders</span>
                </div>
                <div className="text-xs text-gray-500">help scale your project</div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 flex items-center justify-center flex-shrink-0 transition-all">
                <Star className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-sm mb-1">
                  <span className="text-white font-medium">Full launch support</span>{' '}
                  <span className="text-gray-400">From token</span>
                </div>
                <div className="text-xs text-gray-500">creation to marketing</div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 flex items-center justify-center flex-shrink-0 transition-all">
                <Music className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-sm mb-1">
                  <span className="text-white font-medium">Solana-native</span>{' '}
                  <span className="text-gray-400">Leverage our best</span>
                </div>
                <div className="text-xs text-gray-500">tools for effortless launches.</div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 flex items-center justify-center flex-shrink-0 transition-all">
                <Check className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-sm mb-1">
                  <span className="text-white font-medium">Whale connections</span>{' '}
                  <span className="text-gray-400">Instant traction</span>
                </div>
                <div className="text-xs text-gray-500">with top traders and investors.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}