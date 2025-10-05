"use client";

import { ArrowUpRight, Twitter, Send, Globe, Hammer } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
          <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.9313 34.125L21.6125 23.8063L23.8875 21.5313L34.2063 31.85L31.9313 34.125ZM9.75001 32.9875C7.04168 30.3333 5.45053 27.2188 4.97657 23.6438C4.50261 20.0688 5.11876 16.724 6.82501 13.6094C6.90626 14.5302 7.13647 15.5662 7.51564 16.7172C7.8948 17.8682 8.41616 19.0802 9.0797 20.3531C9.74324 21.626 10.5354 22.9328 11.4563 24.2734C12.3771 25.6141 13.3927 26.9344 14.5031 28.2344L9.75001 32.9875ZM16.7375 26C15.4375 24.7 14.3 23.2849 13.325 21.7547C12.35 20.2245 11.5849 18.7417 11.0297 17.3063C10.4745 15.8708 10.163 14.5641 10.0953 13.3859C10.0276 12.2078 10.2781 11.3344 10.8469 10.7656C11.4156 10.1698 12.2891 9.89896 13.4672 9.95313C14.6453 10.0073 15.9589 10.312 17.4078 10.8672C18.8568 11.4224 20.3464 12.1943 21.8766 13.1828C23.4068 14.1714 24.8219 15.3156 26.1219 16.6156L16.7375 26ZM28.3563 14.3813C27.0833 13.2708 25.7766 12.2688 24.436 11.375C23.0953 10.4813 21.7953 9.69584 20.536 9.01876C19.2766 8.34167 18.0714 7.80678 16.9203 7.41407C15.7693 7.02136 14.7333 6.78438 13.8125 6.70313C16.9271 5.07813 20.2651 4.51615 23.8266 5.01719C27.388 5.51823 30.4688 7.06876 33.0688 9.66876L28.3563 14.3813Z" fill="#9095A4"/>
</svg>

            <h1 className="text-5xl font-museo">
              Products under <span className="text-white font-museo font-bold">xCombinator</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            <span className="font-museo">xCombinator</span> serves as an <span className="text-gray-300 font-bold">umbrella organization</span> for our suite of products
          </p>
        </div>

        {/* Product Card - xApple */}
        {/* xApple Card */}
        <div className="relative group w-1/3">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl font-bold font-museo">x</div>
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
                  <p className="text-gray-300 mb-6 max-w-2xl mt-6">
              xApple—fair launches, real liquidity, and rewards that put traders first.
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
    </div>
  );
}