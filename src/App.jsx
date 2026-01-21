import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Users, Rocket, Wallet, Unlock, Gamepad2, ArrowRight, ArrowLeft, ShoppingCart, Star, ExternalLink } from 'lucide-react';
import { config } from './config';

// --- Components ---

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-xl hover:bg-zinc-800 hover:border-red-500/50 group transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-3">
      {/* Icon: Red default, White on hover */}
      <div className="text-red-400 bg-red-500/10 p-2 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
        <Icon size={20} strokeWidth={2} />
      </div>
      <h3 className="text-base font-bold text-zinc-100 group-hover:text-white">{title}</h3>
    </div>
    <p className="text-sm text-zinc-400 group-hover:text-zinc-300 leading-relaxed">{description}</p>
  </motion.div>
);

const ShopLink = ({ name, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="relative overflow-hidden flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-lg group hover:border-red-500 transition-all duration-300"
  >
    {/* Hover Background Fill */}
    <div className="absolute inset-0 bg-red-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
    
    <div className="flex items-center gap-3 relative z-10">
      <div className="p-2 bg-zinc-800 rounded-full text-zinc-400 group-hover:bg-white/20 group-hover:text-white transition-colors">
        <ShoppingCart size={18} />
      </div>
      <span className="font-medium text-base text-zinc-100 group-hover:text-white transition-colors">{name}</span>
    </div>
    
    <div className="relative z-10 flex items-center gap-1 text-xs font-medium text-red-400 opacity-0 group-hover:opacity-100 group-hover:text-white transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
      购买 <ArrowRight size={14} />
    </div>
  </a>
);

// --- Pages ---

const HomePage = () => {
  const features = [
    { icon: Zap, title: "全网独家", description: "独家 Vape 4.19，功能强大且稳定可靠。" },
    { icon: Users, title: "信誉保证", description: "前作丁真租号玩，用户众多，值得信赖。" },
    { icon: Rocket, title: "极速注入", description: "优化吊打原版，速度飞快，拒绝卡顿。" },
    { icon: Wallet, title: "价格实惠", description: "仅 0.5r/天，比原版便宜 80% 以上。" },
    { icon: Unlock, title: "随心所欲", description: "无 HWID 验证，随意注入，永不封号。" },
    { icon: Gamepad2, title: "体验极佳", description: "完全一致甚至更佳的使用体验。" }
  ];

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 overflow-hidden">
      {/* Stronger Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 pt-16 pb-12 max-w-5xl relative z-10">
        {/* Header & Hero */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-white/5 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
              丁真无号玩 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">RelxV4</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-lg leading-relaxed">
              重新定义 Vape 体验 —— 极致性价比与性能的完美结合。
            </p>
          </div>
          
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <Link 
              to="/shops"
              className="group relative inline-flex justify-center items-center gap-2 bg-red-700 text-white px-8 py-3.5 rounded-lg font-bold overflow-hidden transition-transform active:scale-95 shadow-lg shadow-red-900/30"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">立即购买</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a 
              href={config.useNowUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex justify-center items-center gap-2 bg-zinc-800/50 text-zinc-300 border border-zinc-700 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 px-8 py-3.5 rounded-lg font-bold transition-all active:scale-95"
            >
              <span>立即使用</span>
              <ExternalLink size={18} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-5 pl-1">核心优势 / Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                {...feature}
                delay={0.05 * index}
              />
            ))}
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-zinc-500">
          <p>© 2026 Earthsworth, LLC.</p>
          <p>Designed for Gamers.</p>
        </footer>
      </div>
    </div>
  );
};

const ShopsPage = () => {
  const shops = React.useMemo(() => {
    // Create a copy of the config array to avoid mutating the original
    const list = [...config.shops];
    // Fisher-Yates shuffle for true randomness
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }, []);

  const prices = config.msrp;

  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center p-6 relative overflow-hidden text-zinc-100">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3f3f46;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #52525b;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #3f3f46 transparent;
        }
      `}</style>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-red-800/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-5xl relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12 group text-sm">
          <div className="p-1.5 rounded-full bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
            <ArrowLeft size={14} />
          </div>
          <span className="font-medium">返回首页</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column: Info & MSRP */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-3xl font-bold text-white mb-4 leading-tight">选择官方授权分销商</h1>
              <div className="space-y-2 text-sm text-zinc-400">
                <p>为了保障您的权益，请务必从以下官方认证渠道进行购买。</p>
                <div className="pt-2 space-y-1.5 text-xs text-zinc-500">
                  <p className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-red-500"></span>
                    列表顺序完全随机生成，排名不分先后
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-red-500"></span>
                    分销商可能设定低于定价的售价，请货比三家
                  </p>
                </div>
              </div>
            </div>

            {/* MSRP Display */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-wider">建议零售价 (定价)</h2>
                <span className="text-[10px] text-zinc-600 bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-800">不代表最终售价</span>
              </div>
              {/* Responsive grid: 2 columns on mobile, 3 on desktop. Handles up to 6 items gracefully. */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {prices.map((item, idx) => (
                  <div key={idx} className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-4 text-center hover:border-red-500/30 transition-colors">
                    <div className="text-zinc-500 text-xs mb-1">{item.label}</div>
                    <div className="text-white font-bold text-xl">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Shops List */}
          <div className="grid gap-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            {shops.map((shop, index) => (
              <motion.div 
                key={shop.name}
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.2 + (index * 0.1) }}
              >
                <ShopLink name={shop.name} url={shop.url} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shops" element={<ShopsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App