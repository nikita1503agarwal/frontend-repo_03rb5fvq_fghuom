import { ArrowRight, Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section className="relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[#F8F8F9]" />
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 20% 20%, #1A1D29 2px, transparent 2px), radial-gradient(circle at 80% 30%, #1A1D29 2px, transparent 2px), radial-gradient(circle at 40% 80%, #1A1D29 2px, transparent 2px)', backgroundSize:'180px 180px'}} />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-12 sm:pt-24 sm:pb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#1A1D29]" />
          <span>AI-powered productivity for modern teams</span>
        </div>

        <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-black">
          Elevate Productivity and Redefine What’s Possible
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-600">
          Built by seasoned professionals with years of experience in eCommerce and AI technology. We deliver solutions that streamline workflows, unlock insights, and drive measurable results.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#get-access" className="inline-flex items-center gap-2 rounded-full bg-[#1A1D29] text-white px-6 py-3 text-sm sm:text-base font-medium shadow-sm hover:opacity-90 transition">
            Get access
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#features" className="inline-flex items-center rounded-full bg-white text-neutral-900 px-6 py-3 text-sm sm:text-base font-medium border border-neutral-200 shadow-sm hover:bg-neutral-50 transition">
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
