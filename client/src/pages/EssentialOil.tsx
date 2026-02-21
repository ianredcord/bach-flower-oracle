import { Link } from "wouter";
import { ArrowLeft, Sparkles, Droplets, Heart, Shield, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "40 種花精能量",
    description: "結合 38 種巴哈花精與 2 種急救花精的完整振動頻率，封存於每一滴精油之中。",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "情緒平衡",
    description: "透過花精的振動能量，溫柔地轉化焦慮、恐懼、憤怒等負面情緒，恢復內在和諧。",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "能量守護",
    description: "隨身攜帶的能量守護者，在日常生活中為身心充電，建立穩定的能量場。",
  },
];

const usageScenarios = [
  {
    icon: <Sun className="w-8 h-8 text-amber-500" />,
    time: "晨間儀式",
    title: "開啟一天的能量",
    steps: [
      "取 2-3 滴聖杯精油於掌心",
      "雙手搓熱，深呼吸感受香氣",
      "輕柔按摩太陽穴與耳後",
      "設定今日意念，開始美好的一天",
    ],
  },
  {
    icon: <Heart className="w-8 h-8 text-rose-500" />,
    time: "情緒急救",
    title: "當情緒需要支持時",
    steps: [
      "感受當下的情緒，不批判",
      "取精油塗抹於手腕內側脈搏處",
      "深呼吸 3 次，讓花精能量流動",
      "搭配對應的巴哈花精口服液效果更佳",
    ],
  },
  {
    icon: <Moon className="w-8 h-8 text-indigo-500" />,
    time: "睡前安定",
    title: "沉靜入眠的準備",
    steps: [
      "取精油塗抹於腳底湧泉穴",
      "輕柔按摩，感受溫暖傳遞",
      "搭配針灸貼片貼於安眠穴",
      "放鬆身心，進入深層修復的睡眠",
    ],
  },
];

const acupointPairings = [
  { point: "合谷穴", benefit: "緩解頭痛、提振精神", section: "二二部位" },
  { point: "內關穴", benefit: "安定心神、舒緩焦慮", section: "三三部位" },
  { point: "湧泉穴", benefit: "引火歸元、助眠安神", section: "六六部位" },
  { point: "太衝穴", benefit: "疏肝理氣、調節情緒", section: "六六部位" },
  { point: "百會穴", benefit: "提升能量、清醒頭腦", section: "十十部位" },
];

export default function EssentialOil() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800 font-sans">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 space-y-6">
          <Link href="/systems">
            <a className="flex items-center text-stone-500 hover:text-stone-800 transition-colors self-start mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              系統總覽
            </a>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-stone-400 tracking-[0.3em] text-sm mb-4 font-serif">SACRED GRAIL ESSENTIAL OIL</p>
            <h1 className="text-3xl md:text-5xl font-serif text-stone-800 mb-4">
              MUNI 聖杯精油
            </h1>
            <p className="text-stone-500 max-w-2xl mx-auto font-serif leading-relaxed text-lg">
              封存 40 種巴哈花精的完整能量，不只是精油，更是你隨身的能量守護者。
            </p>
          </motion.div>
        </div>

        {/* Hero Product Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-stone-100">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-72 md:h-auto min-h-[300px]">
                <img
                  src="/images/muni-product.jpg"
                  alt="MUNI 聖杯精油"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold tracking-wider rounded-full mb-4 w-fit">
                  獨家研發
                </span>
                <h2 className="font-serif text-3xl font-bold text-stone-800 mb-3">為什麼選擇聖杯精油？</h2>
                <p className="text-stone-600 leading-relaxed mb-6">
                  MUNI 聖杯精油獨家結合了巴哈醫師發現的 38 種花精與 2 種急救花精的完整能量。
                  每一滴精油都蘊含大自然的療癒智慧，透過嗅覺與觸覺雙重途徑，
                  溫柔地引導身心回到平衡的狀態。
                </p>
                <p className="text-stone-600 leading-relaxed mb-8">
                  不同於一般精油只作用於芳香層面，聖杯精油同時攜帶花精的振動頻率，
                  能在物質與能量層面同步運作，為使用者帶來更深層的療癒體驗。
                </p>
                <a
                  href="https://www.stark.works/categories/muni%E7%89%9F%E5%B0%BC%E7%B2%BE%E6%B2%B9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors duration-300 shadow-md hover:shadow-lg group w-fit"
                >
                  <span className="font-medium tracking-wide">探索全系列產品</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-center text-2xl font-serif text-stone-700 mb-10">三大核心特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-white rounded-2xl border border-stone-100 p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-4 text-amber-600">
                  {feature.icon}
                </div>
                <h3 className="font-serif font-bold text-stone-800 mb-2 text-lg">{feature.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Usage Scenarios */}
        <section className="mb-20">
          <h2 className="text-center text-2xl font-serif text-stone-700 mb-2">使用場景</h2>
          <p className="text-center text-stone-400 mb-10 font-serif">將聖杯精油融入你的日常儀式</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {usageScenarios.map((scenario, i) => (
              <motion.div
                key={scenario.time}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-white rounded-2xl border border-stone-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  {scenario.icon}
                  <div>
                    <p className="text-xs text-stone-400 font-serif">{scenario.time}</p>
                    <h3 className="font-serif font-bold text-stone-800">{scenario.title}</h3>
                  </div>
                </div>
                <ol className="space-y-2">
                  {scenario.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-stone-600">
                      <span className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center text-xs text-stone-500 shrink-0 mt-0.5">
                        {j + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Acupoint Pairing */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border border-amber-100 p-8 md:p-10">
            <h2 className="text-2xl font-serif font-bold text-stone-800 mb-2 text-center">穴位搭配建議</h2>
            <p className="text-center text-stone-500 mb-8 font-serif text-sm">
              在以下穴位塗抹聖杯精油，搭配 Somaniks 針灸貼片效果更佳
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {acupointPairings.map((pair) => (
                <div key={pair.point} className="bg-white/80 rounded-xl p-4 border border-amber-100/50">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">📍</span>
                    <h4 className="font-serif font-bold text-stone-700">{pair.point}</h4>
                  </div>
                  <p className="text-sm text-stone-500 mb-1">{pair.benefit}</p>
                  <p className="text-xs text-stone-400">
                    <Link href="/acupuncture">
                      <a className="text-primary hover:underline">{pair.section} →</a>
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
            <div className="relative z-10">
              <Sparkles className="w-8 h-8 mx-auto mb-4 text-amber-300" />
              <h2 className="text-2xl md:text-3xl font-serif mb-4">想知道如何搭配使用？</h2>
              <p className="text-stone-300 max-w-xl mx-auto mb-8 leading-relaxed">
                MUNI 療癒顧問會根據你的身心狀態，推薦最適合的精油使用方式，
                搭配穴位按摩與花精調理，打造專屬於你的療癒方案。
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
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-stone-400 text-sm font-light">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Link href="/systems">
              <a className="text-primary hover:text-primary/80 transition-colors font-serif border-b border-primary/30 pb-0.5 hover:border-primary">
                系統總覽
              </a>
            </Link>
            <span className="text-stone-300">|</span>
            <Link href="/acupuncture">
              <a className="text-primary hover:text-primary/80 transition-colors font-serif border-b border-primary/30 pb-0.5 hover:border-primary">
                董氏穴位詳解
              </a>
            </Link>
            <span className="text-stone-300">|</span>
            <Link href="/">
              <a className="text-primary hover:text-primary/80 transition-colors font-serif border-b border-primary/30 pb-0.5 hover:border-primary">
                返回抽牌
              </a>
            </Link>
          </div>
          <p>© 2025 MUNI. Designed for Holistic Healing.</p>
        </footer>
      </div>
    </div>
  );
}
