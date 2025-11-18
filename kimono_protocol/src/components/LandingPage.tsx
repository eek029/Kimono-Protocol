import { useState } from 'react';
import { ConnectButton } from '@mysten/dapp-kit';

export default function LandingPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    alert('Obrigado por se inscrever! Em breve entraremos em contato.');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="p-8">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            KIMONO PROTOCOL
          </div>
          <ConnectButton />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-16 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent leading-tight">
          O Futuro das Finanças
          <br />
          Descentralizadas
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Protocolo DeFi de próxima geração construído na blockchain Sui.
          Segurança, velocidade e transparência em um só lugar.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-16">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor email"
            required
            className="flex-1 px-6 py-4 rounded-full bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 backdrop-blur-sm"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Entrar na Lista
          </button>
        </form>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition-all hover:-translate-y-2">
            <div className="text-5xl font-bold text-purple-400 mb-2">$10M+</div>
            <div className="text-gray-400">Total Value Locked</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition-all hover:-translate-y-2">
            <div className="text-5xl font-bold text-purple-400 mb-2">50K+</div>
            <div className="text-gray-400">Usuários Ativos</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition-all hover:-translate-y-2">
            <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          Por que Kimono Protocol?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition-all hover:-translate-y-2">
            <div className="text-6xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-white mb-4">Segurança Máxima</h3>
            <p className="text-gray-400 leading-relaxed">
              Auditado por empresas líderes em segurança blockchain
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition-all hover:-translate-y-2">
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4">Ultra Rápido</h3>
            <p className="text-gray-400 leading-relaxed">
              Transações confirmadas em menos de 1 segundo
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition-all hover:-translate-y-2">
            <div className="text-6xl mb-4">💎</div>
            <h3 className="text-2xl font-bold text-white mb-4">Taxas Baixas</h3>
            <p className="text-gray-400 leading-relaxed">
              Custos mínimos para todas as operações
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400">
        <p>© 2025 Kimono Protocol. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
