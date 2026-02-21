import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const systems = [
  {
    id: "bach-flower",
    name: "巴哈花精",
    subtitle: "Bach Flower Remedies",
    layer: "情緒層",
    description: "源自英國巴哈醫師的 38 種花精療法，透過花朵的振動頻率，溫柔地轉化負面情緒，恢復內在平衡。",
    link: "/encyclopedia",
    linkText: "瀏覽花精百科",
    isInternal: true,
    color: "from-emerald-50 to-green-50",
    borderColor: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    icon: "🌸",
    available: true,
  },
  {
    id: "essential-oil",
    name: "MUNI 聖杯精油",
    subtitle: "Sacred Grail Essential Oil",
    layer: "身體層",
    description: "獨家研發，結合 38 種巴哈花精與 2 種急救花精的完整能量。不只是精油，更是隨身的能量守護者。",
    link: "/essential-oil",
    linkText: "了解聖杯精油",
    isInternal: true,
    color: "from-amber-50 to-yellow-50",
    borderColor: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    icon: "🧴",
    available: true,
  },
  {
    id: "acupuncture",
    name: "董氏心氣神針",
    subtitle: "Tung's Acupuncture",
    layer: "身體層",
    description: "傳承董氏針灸精髓，涵蓋一一到十十部位共 176 個穴位，搭配 MUNI 精油與日本針灸貼，實現全方位的經絡調理。",
    link: "/acupuncture",
    linkText: "探索穴位詳解",
    isInternal: true,
    color: "from-red-50 to-rose-50",
    borderColor: "border-red-200",
    iconBg: "bg-red-100",
    iconColor: "text-red-700",
    icon: "📍",
    available: true,
  },
  {
    id: "somaniks",
    name: "Somaniks 日本針灸貼片",
    subtitle: "Japanese Acupuncture Patches",
    layer: "身體層",
    description: "來自日本的專業針灸貼片技術，搭配董氏穴位與 MUNI 精油使用，提供持續溫和的穴位刺激。",
    link: "/somaniks",
    linkText: "即將推出",
    isInternal: true,
    color: "from-sky-50 to-blue-50",
    borderColor: "border-sky-200",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-700",
    icon: "🩹",
    available: false,
  },
  {
    id: "ginseng",
    name: "韓國人蔘",
    subtitle: "Korean Ginseng",
    layer: "儀式層",
    description: "精選韓國頂級人蔘，為身體注入深層的元氣能量，作為日常養生儀式的重要一環。",
    link: "/ginseng",
    linkText: "即將推出",
    isInternal: true,
    color: "from-orange-50 to-amber-50",
    borderColor: "border-orange-200",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-700",
    icon: "🌿",
    available: false,
  },
  {
    id: "olive-oil",
    name: "頂級橄欖油",
    subtitle: "Premium Olive Oil",
    layer: "儀式層",
    description: "嚴選地中海產區的冷壓初榨橄欖油，富含多酚與抗氧化物，是健康飲食儀式的基石。",
    link: "/olive-oil",
    linkText: "即將推出",
    isInternal: true,
    color: "from-lime-50 to-green-50",
    borderColor: "border-lime-200",
    iconBg: "bg-lime-100",
    iconColor: "text-lime-700",
    icon: "🫒",
    available: false,
  },
  {
    id: "green-tea",
    name: "日本綠茶",
    subtitle: "Japanese Green Tea",
    layer: "儀式層",
    description: "來自日本茶園的頂級綠茶，富含茶胺酸，帶來寧靜與專注，是冥想前後的理想伴侶。",
    link: "/green-tea",
    linkText: "即將推出",
    isInternal: true,
    color: "from-teal-50 to-emerald-50",
    borderColor: "border-teal-200",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700",
    icon: "🍵",
    available: false,
  },
  {
    id: "chocolate",
    name: "療癒巧克力",
    subtitle: "Healing Chocolate",
    layer: "儀式層",
    description: "精選可可豆製成的療癒級巧克力，釋放內啡肽與血清素，為心靈帶來溫暖的擁抱。",
    link: "/chocolate",
    linkText: "即將推出",
    isInternal: true,
    color: "from-yellow-50 to-orange-50",
    borderColor: "border-yellow-200",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-700",
    icon: "🍫",
    available: false,
  },
];

const layers = [
  { name: "身體層", description: "透過精油、穴位、針灸貼調理經絡與身體能量", color: "bg-red-50 text-red-700 border-red-200" },
  { name: "情緒層", description: "以花精與芳香療法轉化情緒，恢復心靈平衡", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { name: "儀式層", description: "融入飲食與日常儀式，建立持續的療癒生活方式", color: "bg-amber-50 text-amber-700 border-amber-200" },
];

export default function Systems() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800 font-sans">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 space-y-6">
          <Link href="/">
            <a className="flex items-center text-stone-500 hover:text-stone-800 transition-colors self-start mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首頁
            </a>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-stone-400 tracking-[0.3em] text-sm mb-4 font-serif">MUNI HEALING ECOSYSTEM</p>
            <h1 className="text-3xl md:text-5xl font-serif text-stone-800 mb-4">
              MUNI 療癒生態系統
            </h1>
            <p className="text-stone-500 max-w-2xl mx-auto font-serif leading-relaxed text-lg">
              不只是單一產品，而是一套完整的「整體生活儀式系統」。
              從身體、情緒到日常儀式，三個層次交織出屬於你的療癒旅程。
            </p>
          </motion.div>
        </div>

        {/* Three Layers Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-center text-2xl font-serif text-stone-700 mb-8">三層療癒架構</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`rounded-2xl border p-6 text-center ${layer.color}`}
              >
                <h3 className="text-xl font-serif font-bold mb-2">{layer.name}</h3>
                <p className="text-sm leading-relaxed opacity-80">{layer.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Systems Grid */}
        <section className="mb-20">
          <h2 className="text-center text-2xl font-serif text-stone-700 mb-2">八大療癒系統</h2>
          <p className="text-center text-stone-400 mb-10 font-serif">點擊了解每個系統的原理、來源與使用場景</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systems.map((system, i) => (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                {system.available ? (
                  <Link href={system.link}>
                    <a className="block group">
                      <div className={`bg-gradient-to-br ${system.color} rounded-2xl border ${system.borderColor} p-6 hover:shadow-lg transition-all duration-300 h-full`}>
                        <div className="flex items-start gap-4">
                          <div className={`w-14 h-14 rounded-xl ${system.iconBg} flex items-center justify-center text-2xl shrink-0`}>
                            {system.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-serif font-bold text-stone-800">{system.name}</h3>
                              <span className="text-xs px-2 py-0.5 rounded-full bg-white/60 text-stone-500 font-serif">{system.layer}</span>
                            </div>
                            <p className="text-xs text-stone-400 italic mb-2 font-serif">{system.subtitle}</p>
                            <p className="text-sm text-stone-600 leading-relaxed mb-3">{system.description}</p>
                            <span className="inline-flex items-center text-sm font-medium text-stone-700 group-hover:text-stone-900 transition-colors">
                              {system.linkText}
                              <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                ) : (
                  <div className={`bg-gradient-to-br ${system.color} rounded-2xl border ${system.borderColor} p-6 opacity-70 h-full`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl ${system.iconBg} flex items-center justify-center text-2xl shrink-0`}>
                        {system.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-serif font-bold text-stone-800">{system.name}</h3>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-white/60 text-stone-500 font-serif">{system.layer}</span>
                        </div>
                        <p className="text-xs text-stone-400 italic mb-2 font-serif">{system.subtitle}</p>
                        <p className="text-sm text-stone-600 leading-relaxed mb-3">{system.description}</p>
                        <span className="inline-flex items-center text-xs text-stone-400 font-serif">
                          {system.linkText}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA to AI Consultant */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
            <div className="relative z-10">
              <Sparkles className="w-8 h-8 mx-auto mb-4 text-amber-300" />
              <h2 className="text-2xl md:text-3xl font-serif mb-4">想知道哪個系統最適合你？</h2>
              <p className="text-stone-300 max-w-xl mx-auto mb-8 leading-relaxed">
                MUNI 療癒顧問會根據你當下的身心狀態，從八大系統中挑選最適合的組合，
                為你量身打造專屬的療癒方案。
              </p>
              <a
                href="https://ai.munione.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-stone-800 px-8 py-4 rounded-full font-serif font-bold text-lg hover:bg-stone-100 transition-colors shadow-lg hover:shadow-xl"
              >
                <Sparkles className="w-5 h-5" />
                諮詢 MUNI 療癒顧問
              </a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="text-center py-8 text-stone-400 text-sm font-light">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Link href="/">
              <a className="text-primary hover:text-primary/80 transition-colors font-serif border-b border-primary/30 pb-0.5 hover:border-primary">
                返回抽牌
              </a>
            </Link>
            <span className="text-stone-300">|</span>
            <Link href="/encyclopedia">
              <a className="text-primary hover:text-primary/80 transition-colors font-serif border-b border-primary/30 pb-0.5 hover:border-primary">
                花精百科
              </a>
            </Link>
          </div>
          <p>© 2025 MUNI. Designed for Holistic Healing.</p>
        </footer>
      </div>
    </div>
  );
}
