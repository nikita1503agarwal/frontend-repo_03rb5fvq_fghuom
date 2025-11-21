import { Brain, ShoppingCart, Zap, Shield } from 'lucide-react'

const items = [
  {
    icon: Brain,
    title: 'AI Automation',
    desc: 'Deploy intelligent workflows that reduce manual tasks and accelerate decision-making.',
  },
  {
    icon: ShoppingCart,
    title: 'eCommerce Optimization',
    desc: 'Boost conversion rates with data-driven personalization and inventory intelligence.',
  },
  {
    icon: Zap,
    title: 'Operational Velocity',
    desc: 'Integrate systems and eliminate bottlenecks to ship faster with confidence.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade',
    desc: 'Security, compliance, and reliability designed for modern B2B SaaS needs.',
  },
]

function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">What we do — and why it matters</h2>
          <p className="mt-3 text-neutral-600">
            We combine deep domain expertise with modern AI to deliver outcomes, not just features.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center rounded-xl bg-[#F8F8F9] text-[#1A1D29] w-10 h-10">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-black">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
