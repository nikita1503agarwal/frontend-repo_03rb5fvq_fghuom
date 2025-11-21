import { MessageCircle } from 'lucide-react'

function ChatBubble() {
  return (
    <a
      href="#"
      className="fixed bottom-6 right-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#1A1D29] text-white shadow-lg hover:opacity-90 transition"
      aria-label="Chat support"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}

export default ChatBubble
