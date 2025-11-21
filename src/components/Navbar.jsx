import { useState } from 'react'
import { Menu, X, CircuitBoard } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#1A1D29]/10 blur-sm"></div>
              <CircuitBoard className="w-8 h-8 text-[#1A1D29]" />
            </div>
            <span className="font-semibold tracking-tight text-black">CircuitWorks</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-neutral-600 hover:text-black transition-colors">Features</a>
            <a href="#about" className="text-sm text-neutral-600 hover:text-black transition-colors">About</a>
            <a href="#get-access" className="inline-flex items-center rounded-full bg-[#1A1D29] text-white px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90 transition-opacity">Get started</a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white w-10 h-10 text-neutral-800 shadow-sm"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden mt-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-lg">
            <div className="flex flex-col gap-2">
              <a href="#features" className="px-3 py-2 rounded-lg text-sm text-neutral-700 hover:bg-neutral-100">Features</a>
              <a href="#about" className="px-3 py-2 rounded-lg text-sm text-neutral-700 hover:bg-neutral-100">About</a>
              <a href="#get-access" className="mt-1 inline-flex items-center justify-center rounded-full bg-[#1A1D29] text-white px-4 py-2 text-sm font-medium shadow-sm">Get started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
