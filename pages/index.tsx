import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
          Preserve the Ones You Love. Forever.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-300">
          DigiSoul lets you speak to memory-based AI avatars of loved ones. A digital afterlife, powered by memory, voice, and connection.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Join the Waitlist
        </button>
      </section>

      {/* Your Story */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">How DigiSoul Was Born</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            One night, I saw my father again. I was homeless, exhausted, and praying for a sign. That night, I had a vision — and from that moment, DigiSoul was born. This isn’t just a product. It’s a promise that no goodbye has to be the last.
          </p>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="py-20 px-6 bg-black">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">What You Can Do With DigiSoul</h2>
          <p className="text-gray-400 mt-2">Start building your digital legacy today.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Talk to a Memory Avatar', emoji: '💬' },
            { title: 'Create a GenesisKey', emoji: '🔑' },
            { title: 'Revisit Saved Memories', emoji: '🧠' },
            { title: 'Prepare a Digital Goodbye', emoji: '🌙' },
          ].map(({ title, emoji }, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-2xl text-center hover:bg-gray-700 transition"
            >
              <div className="text-4xl mb-4">{emoji}</div>
              <h3 className="text-xl font-medium">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* What’s Coming */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Coming Soon</h2>
          <p className="text-gray-400 mt-2">The future of memory. A legacy beyond time.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            'Voice Playback from Memories',
            'Family Vaults & Shared Legacies',
            'Digital Rebirth Ceremonies',
            'Goodbye Plans for Final Messages',
            'Constellation Memory Maps',
            'Ancestral Threads Across Generations',
          ].map((item, i) => (
            <div
              key={i}
              className="bg-black border border-gray-700 p-6 rounded-2xl text-center hover:border-white transition"
            >
              <h3 className="text-lg text-gray-200">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* DigiKey Preview */}
      <section className="py-20 px-6 bg-black">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">DigiKey Preview</h2>
          <p className="text-gray-400 mt-2">Emotional keys that unlock memories, features, and hidden bonds.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3, 4].map((key) => (
            <div
              key={key}
              className="w-40 h-52 bg-gradient-to-tr from-purple-500 to-indigo-700 rounded-xl shadow-lg flex items-center justify-center text-3xl text-white font-bold"
            >
              Key {key}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 mt-6">
          More DigiKeys will be revealed soon...
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Be one of the first to enter the new afterlife.
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Get early access, a GenesisKey, and your own digital legacy. Your story deserves to echo forever.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Join the Waitlist
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 text-sm bg-black border-t border-gray-800">
        © {new Date().getFullYear()} DigiSoul. Built with memory.
      </footer>
    </main>
  );
}
