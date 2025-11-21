function CTA() {
  return (
    <section id="get-access" className="relative">
      <div className="absolute inset-0 -z-10 bg-[#F8F8F9]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="rounded-3xl bg-white border border-neutral-200 p-8 sm:p-12 text-center shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-semibold text-black">Ready to get started?</h3>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
            Join leaders in eCommerce and AI who trust us to transform productivity and deliver measurable outcomes.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-[#1A1D29] text-white px-6 py-3 text-sm sm:text-base font-medium shadow-sm hover:opacity-90 transition">Get started</a>
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-white text-neutral-900 px-6 py-3 text-sm sm:text-base font-medium border border-neutral-200 shadow-sm hover:bg-neutral-50 transition">Talk to expert</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
