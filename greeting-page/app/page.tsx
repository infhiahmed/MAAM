"use client"
import { useState } from "react"
import confetti from "canvas-confetti"
import { Pacifico } from "next/font/google"
import { X } from "lucide-react"

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export default function Home() {
  const [showPopup, setShowPopup] = useState(false)

  const showMessage = () => {
    setShowPopup(true)

    // Heart Confetti 💖
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 },
      shapes: ["circle"],
      colors: ["#ff69b4", "#ff1493", "#ffb6c1"],
    })
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 text-center overflow-hidden bg-gradient-to-br from-[#ffe0f0] to-[#ffcfe0]">
      <h1 className={`${pacifico.className} text-[#ff69b4] text-4xl md:text-5xl mb-8 animate-float drop-shadow-lg`}>
        🌸 Hey madam ji!!! Click it!!!! 💖
      </h1>

      <button
        onClick={showMessage}
        className="bg-[#fff0f6] text-[#ff1493] border-2 border-[#ff69b4] px-8 py-4 text-xl md:text-2xl rounded-full font-bold transition-all duration-300 shadow-lg hover:bg-[#ff69b4] hover:text-white hover:shadow-xl"
      >
        💌 Tap Here 💌
      </button>

      {/* Custom Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4 shadow-2xl border-4 border-[#ff69b4] animate-scaleIn">
            <div className="flex justify-end">
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-400 hover:text-[#ff1493] transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className={`${pacifico.className} text-[#ff1493] text-2xl mb-4`}>Message for Payel ma'am 💕</div>
            <p className="text-lg mb-6">🥰 Good morning maam &lt;333 Nasta krsen?? 🍞☕ Kore niyen kintuuu!!</p>
            <div className="flex justify-center">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-[#fff0f6] text-[#ff1493] border-2 border-[#ff69b4] px-6 py-2 rounded-full font-bold transition-all duration-300 hover:bg-[#ff69b4] hover:text-white"
              >
                Close ✨
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
