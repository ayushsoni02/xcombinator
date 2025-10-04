"use client";

import { Users } from "lucide-react";

interface Ambassador {
  name: string;
  handle: string;
  role: string;
  tags: string[];
  avatar: string;
}

export default function AmbassadorsPage() {
  // Sample ambassador data - replace with actual data
  const ambassadors: Ambassador[] = Array(6).fill({
    name: "cynthontheblock",
    handle: "@JardasPrs",
    role: "xAmbassador",
    tags: ["Advisor", "Blockchain expert"],
    avatar: "/ambassador-avatar.png", // You'll need to add actual images
  });

  return (
    <div className="min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-gray-400" />
            <h1 className="text-5xl font-bold">
              xCombinator <span className="text-white">Ambassadors</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            Ambassadors are trusted builders connecting real projects with real expertise.
          </p>
        </div>

        {/* Ambassadors Grid */}
        <div className="grid grid-cols-3 gap-6">
          {ambassadors.map((ambassador, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Hover glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all h-full">
                {/* Badge */}
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 mb-4">
                  xAmbassador
                </div>

                {/* Avatar & Info */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Avatar - Using gradient placeholder since we don't have actual images */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 flex items-center justify-center">
                      {/* Robot/Character placeholder */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-yellow-400"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-orange-400"></div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{ambassador.name}</h3>
                    <p className="text-sm text-gray-400">{ambassador.handle}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {ambassador.tags.map((tag: string, tagIndex: number) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Become Ambassador CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold mb-3">Become an xAmbassador</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Join our network of trusted builders and help shape the future of Solana projects
            </p>
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all font-medium">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}