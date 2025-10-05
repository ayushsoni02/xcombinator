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
              <div className="p-2 text-sm text-gray-400 mb-2 rounded-full object-cover border-2 border-white/10 bg-white/5 w-[300px]">
                $X Token, <span className="text-gray-400">The Backbone of <span className="font-museo">xCombinator</span></span>
              </div>
              <div className="mt-4">
                <div className="flex justify-end items-center gap-3 mb-4 mt-16">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="26" height="26" rx="13" fill="url(#pattern0_15_156)"/>
                    <defs>
                      <pattern id="pattern0_15_156" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_15_156" transform="scale(0.0078125)"/>
                      </pattern>
                      <image id="image0_15_156" width="128" height="128" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAEJQTFRF////z8/Pn5+fcHBwYGBgMDAwICAgEBAQAAAAQEBAUFBQgICAr6+vv7+/7+/voKCg39/fkJCQf39/sLCwb29vj4+PMaevUgAAAj5JREFUeJztmglygzAQBMUpyRiCHfv/Xw2XyykXcdjZAaVS2x/oQTcrOWcYhmEYhmFgZHlRVrUPA76Op+acHShvmziZX4hFe4i9WJMv1OXOGbrmjX3J8NGn1E+U+0TYqh8pdohw2a6fOoKs76NEPxKpjSD7/Bl/oem7Qq4fKUj+vsL8w0igdENfo35OgkzhHxKot4gMGH7f8coEmvZf2kDVC3q/MgHBH0LVwX5w/r8CrwcXjj8EcE3slRPgiceGgXj/+ZmI+HOeH+oExgx84uUzgTQDHjTiBuD65U1Qcv1RelznNoBYz50CgJ60CeB616bV04ZgnWN6Ug/gekoP+Ct+DCCsgiq9fh9U6p1LrHdZWr1znwp/qdc71+B6zj/5CdRHVqkOmwToqrsCsg4S9c7Jj+NUvXwZIOulAeozWS8LoNjySAH2qMzKBmHd0CNIpyE9AlCW49anoRMhMwJ4IOJFgP9KWBEUBxJSBE1thhJBdyglXFzhR6IZ9e6k/zHRRiAU6HS3RpQCkSYC6fdcEYFVJIUjaOeBOkJHqxOjEXhNELBjE7MJxgjiSim3CUK4JW4C5OLozgwAHd5TX1ikv7LhdcId89MuLeQz4EEHX9x/p4b9f+DqNvnldfrr+/QPGNI/4dAkqFh/i+B6cGOUbWfuyEMmeP1bI/VTroFcNBK4nz/Tbx8JjDuD1Qjbajd76acIv3fEnvqJtnyTwR/1sHZtTvh4PcS+kJ2bU3w8bK7KIj/yYbNhGIZhGIbxv/gCus6vm0qTr5oAAAAASUVORK5CYII="/>
                    </defs>
                  </svg>

                  <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_15_150)">
                      <path d="M4.87179 18.3014C5.05522 18.1143 5.3039 18.0092 5.5632 18.0092H29.4876C29.9235 18.0092 30.1416 18.5471 29.8333 18.8614L25.1059 23.682C24.9225 23.8691 24.6738 23.9741 24.4145 23.9741H0.490073C0.0542447 23.9741 -0.16393 23.4363 0.14437 23.1219L4.87179 18.3014Z" fill="url(#paint0_linear_15_150)"/>
                      <path d="M4.87179 0.2921C5.05522 0.105064 5.3039 0 5.5632 0H29.4876C29.9235 0 30.1416 0.537826 29.8333 0.8522L25.1059 5.67275C24.9225 5.85978 24.6738 5.96485 24.4145 5.96485H0.490073C0.0542447 5.96485 -0.16393 5.42702 0.14437 5.11265L4.87179 0.2921Z" fill="url(#paint1_linear_15_150)"/>
                      <path d="M25.1059 9.23937C24.9225 9.0523 24.6738 8.9473 24.4145 8.9473H0.490073C0.0542446 8.9473 -0.16393 9.48507 0.14437 9.79945L4.87179 14.62C5.05521 14.8071 5.3039 14.9121 5.5632 14.9121H29.4876C29.9235 14.9121 30.1416 14.3743 29.8333 14.0599L25.1059 9.23937Z" fill="url(#paint2_linear_15_150)"/>
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_15_150" x1="20.2667" y1="-6.57625" x2="3.17442" y2="25.5043" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00FFA3"/>
                        <stop offset="1" stopColor="#DC1FFF"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_15_150" x1="20.2667" y1="-6.57623" x2="3.17442" y2="25.5043" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00FFA3"/>
                        <stop offset="1" stopColor="#DC1FFF"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear_15_150" x1="20.2667" y1="-6.57624" x2="3.17442" y2="25.5043" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00FFA3"/>
                        <stop offset="1" stopColor="#DC1FFF"/>
                      </linearGradient>
                      <clipPath id="clip0_15_150">
                        <rect width="30" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                
                <div className="text-sm text-gray-400 ml-32">
                  <span className="text-white font-medium">$X</span> was launched on{" "}
                  <span className="text-white font-medium">DAOs.fun</span> as an{" "}
                  <span className="text-white font-medium">SPL-22</span> token on the{" "}
                  <span className="text-white font-medium">Solana network</span>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-md  border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4 font-museo text-gray-400">
                With <span className="text-white">every new project</span>, the <span className="font-museo">xCombinator</span> ecosystem strengthens, and so does the value of $X
              </h2>
            </div>

            {/* Market Cap Section */}
            <div className="space-y-4 bg-gradient-to-br from-white/10 to-white/5 p-4 rounded-2xl">
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
              <h2 className="text-4xl  mb-2 font-museo">
                <span className="text-white font-bold">$X</span> powers
              </h2>
              <h3 className="text-4xl text-gray-400 mb-4 font-museo">
                the <span className="font-museo">xCombinator</span> ecosystem
              </h3>
              <p className="text-gray-400 text-lg font-museo">
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
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-2xl font-bold">xApple</h2> 
                    <span className="px-2 py-0.5 bg-white/10 rounded-full text-xs text-gray-300">Launchpad</span>
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
            </div>

            {/* Deflationary Mechanism */}
            <div className="bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-md border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 font-museo text-gray-400">
                <span className="font-museo">xCombinator</span> ensures a <span className="text-gray-100">deflationary supply mechanism</span> through constant buybacks
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}