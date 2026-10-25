
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white">
      <header className="p-6 border-b border-gold/20">
        <h1 className="text-3xl font-bold text-gold">Elite Matchmaker Empire</h1>
        <p className="text-gray-400">Luxury Rishta App - For Elite Families</p>
      </header>
      
      <main className="p-8">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h2 className="text-5xl font-bold mb-6">Find Your Perfect Match</h2>
          <p className="text-xl text-gray-300 mb-8">Exclusive matrimonial service for elite families</p>
          <button className="bg-gold text-black px-8 py-3 rounded-full font-bold text-lg">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}

