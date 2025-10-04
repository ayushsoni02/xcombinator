export default function Footer() {
    return (
      <footer className="w-full py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-2 text-gray-500 text-xs">
          <span>powered by</span>
          <svg className="h-4" viewBox="0 0 100 20" fill="currentColor">
            <rect width="20" height="4" />
            <rect y="8" width="20" height="4" />
            <rect y="16" width="20" height="4" />
          </svg>
          <span className="font-medium">SOLANA</span>
        </div>
      </footer>
    );
  }