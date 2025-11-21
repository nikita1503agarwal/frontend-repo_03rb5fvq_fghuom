import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import ChatBubble from './components/ChatBubble'

function App() {
  return (
    <div className="min-h-screen bg-[#F8F8F9] text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-center text-sm text-neutral-600">
          © {new Date().getFullYear()} CircuitWorks — Built for B2B teams.
        </div>
      </footer>

      <ChatBubble />
    </div>
  )
}

export default App
