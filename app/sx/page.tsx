"use client";

import { ArrowUpRight, Twitter, Send, Globe } from "lucide-react";
import { useState} from "react";

export default function SXTokenPage() {
  const [marketCap] = useState("7,789,567.45");

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
                    <rect width="26" height="26" rx="13" fill="url(#pattern0_15_156)" />
                    <defs>
                      <pattern id="pattern0_15_156" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_15_156" transform="scale(0.0078125)" />
                      </pattern>
                      <image id="image0_15_156" width="128" height="128" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAEJQTFRF////z8/Pn5+fcHBwYGBgMDAwICAgEBAQAAAAQEBAUFBQgICAr6+vv7+/7+/voKCg39/fkJCQf39/sLCwb29vj4+PMaevUgAAAj5JREFUeJztmglygzAQBMUpyRiCHfv/Xw2XyykXcdjZAaVS2x/oQTcrOWcYhmEYhmFgZHlRVrUPA76Op+acHShvmziZX4hFe4i9WJMv1OXOGbrmjX3J8NGn1E+U+0TYqh8pdohw2a6fOoKs76NEPxKpjSD7/Bl/oem7Qq4fKUj+vsL8w0igdENfo35OgkzhHxKot4gMGH7f8coEmvZf2kDVC3q/MgHBH0LVwX5w/r8CrwcXjj8EcE3slRPgiceGgXj/+ZmI+HOeH+oExgx84uUzgTQDHjTiBuD65U1Qcv1RelznNoBYz50CgJ60CeB616bV04ZgnWN6Ug/gekoP+Ct+DCCsgiq9fh9U6p1LrHdZWr1znwp/qdc71+B6zj/5CdRHVqkOmwToqrsCsg4S9c7Jj+NUvXwZIOulAeozWS8LoNjySAH2qMzKBmHd0CNIpyE9AlCW49anoRMhMwJ4IOJFgP9KWBEUBxJSBE1thhJBdyglXFzhR6IZ9e6k/zHRRiAU6HS3RpQCkSYC6fdcEYFVJIUjaOeBOkJHqxOjEXhNELBjE7MJxgjiSim3CUK4JW4C5OLozgwAHd5TX1ikv7LhdcId89MuLeQz4EEHX9x/p4b9f+DqNvnldfrr+/QPGNI/4dAkqFh/i+B6cGOUbWfuyEMmeP1bI/VTroFcNBK4nz/Tbx8JjDuD1Qjbajd76acIv3fEnvqJtnyTwR/1sHZtTvh4PcS+kJ2bU3w8bK7KIj/yYbNhGIZhGIbxv/gCus6vm0qTr5oAAAAASUVORK5CYII=" />
                    </defs>
                  </svg>

                  <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_15_150)">
                      <path d="M4.87179 18.3014C5.05522 18.1143 5.3039 18.0092 5.5632 18.0092H29.4876C29.9235 18.0092 30.1416 18.5471 29.8333 18.8614L25.1059 23.682C24.9225 23.8691 24.6738 23.9741 24.4145 23.9741H0.490073C0.0542447 23.9741 -0.16393 23.4363 0.14437 23.1219L4.87179 18.3014Z" fill="url(#paint0_linear_15_150)" />
                      <path d="M4.87179 0.2921C5.05522 0.105064 5.3039 0 5.5632 0H29.4876C29.9235 0 30.1416 0.537826 29.8333 0.8522L25.1059 5.67275C24.9225 5.85978 24.6738 5.96485 24.4145 5.96485H0.490073C0.0542447 5.96485 -0.16393 5.42702 0.14437 5.11265L4.87179 0.2921Z" fill="url(#paint1_linear_15_150)" />
                      <path d="M25.1059 9.23937C24.9225 9.0523 24.6738 8.9473 24.4145 8.9473H0.490073C0.0542446 8.9473 -0.16393 9.48507 0.14437 9.79945L4.87179 14.62C5.05521 14.8071 5.3039 14.9121 5.5632 14.9121H29.4876C29.9235 14.9121 30.1416 14.3743 29.8333 14.0599L25.1059 9.23937Z" fill="url(#paint2_linear_15_150)" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_15_150" x1="20.2667" y1="-6.57625" x2="3.17442" y2="25.5043" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00FFA3" />
                        <stop offset="1" stopColor="#DC1FFF" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_15_150" x1="20.2667" y1="-6.57623" x2="3.17442" y2="25.5043" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00FFA3" />
                        <stop offset="1" stopColor="#DC1FFF" />
                      </linearGradient>
                      <linearGradient id="paint2_linear_15_150" x1="20.2667" y1="-6.57624" x2="3.17442" y2="25.5043" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00FFA3" />
                        <stop offset="1" stopColor="#DC1FFF" />
                      </linearGradient>
                      <clipPath id="clip0_15_150">
                        <rect width="30" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className="text-sm text-gray-400 ml-32 mb-16">
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
          <div className="space-y-24">
            {/* Token Powers Section */}
            <div>
              <h2 className="text-4xl  mb-2 font-museo">
                <span className="text-white font-bold">$X</span> powers
              </h2>
              <h3 className="text-4xl text-gray-400 mb-4 font-museo">
                the <span className="font-museo">xCombinator</span> ecosystem
              </h3>
              <p className="text-gray-400 text-lg font-museo w-[80%]">
                $X isn&apos;t just a token—it&apos;s ownership in the next era of Solana products
              </p>
            </div>

            {/* Product Cards */}
            <div className="relative w-2/3 mt-12 mb-12">
              {/* First xApple Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <svg width="41" height="52" viewBox="0 0 41 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect x="0.641113" y="0.148682" width="40.1903" height="31.2591" fill="url(#pattern0_99_110)" />
                        <defs>
                          <pattern id="pattern0_99_110" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_99_110" transform="scale(0.00925926 0.0119048)" />
                          </pattern>
                          <image id="image0_99_110" width="108" height="84" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
                        </defs>
                      </svg>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-2xl font-bold">xApple</h2>
                    <span className="px-2 py-0.5 bg-white/10 rounded-full text-xs text-gray-300">Launchpad</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4 mt-6">
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

              {/* Second xApple Card - Overlapping */}
              <div className="absolute top-10 left-12 group w-[100%] ">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-gray-900/20 to-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3 w-[100%] h-[100%]">
                      <svg width="41" height="52" viewBox="0 0 41 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect x="0.641113" y="0.148682" width="40.1903" height="31.2591" fill="url(#pattern0_99_110)" />
                        <defs>
                          <pattern id="pattern0_99_110" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_99_110" transform="scale(0.00925926 0.0119048)" />
                          </pattern>
                          <image id="image0_99_110" width="108" height="84" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
                        </defs>
                      </svg>

                    </div>
                    <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-2xl font-bold">xApple</h2>
                    <span className="px-2 py-0.5 bg-white/10 rounded-full text-xs text-gray-300">Launchpad</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4 mt-6">
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
            <div className="bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-md border-white/10 rounded-2xl p-8 mt-24">
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