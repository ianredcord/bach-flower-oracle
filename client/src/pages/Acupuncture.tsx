import { useState, useMemo } from "react";
import { Link } from "wouter";
import { ArrowLeft, Search, ChevronDown, ChevronUp, X, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import acupointsData from "@/data/acupoints.json";

interface Acupoint {
  name: string;
  title: string;
  meridian: string;
  indications: string;
  location: string;
  properties: string;
  technique: string;
  anatomy: string;
  image_urls: string[];
}

interface Section {
  id: string;
  body: string;
  emoji: string;
  count: number;
  acupoints: Acupoint[];
}

export default function Acupuncture() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [selectedAcupoint, setSelectedAcupoint] = useState<Acupoint | null>(null);

  const sections = acupointsData as Section[];

  const filteredSections = useMemo(() => {
    if (!searchTerm.trim()) return sections;
    const term = searchTerm.toLowerCase();
    return sections.map(section => ({
      ...section,
      acupoints: section.acupoints.filter(ap =>
        ap.name.toLowerCase().includes(term) ||
        ap.title.toLowerCase().includes(term) ||
        ap.indications.toLowerCase().includes(term) ||
        ap.meridian.toLowerCase().includes(term)
      )
    })).filter(s => s.acupoints.length > 0);
  }, [searchTerm, sections]);

  const totalFiltered = filteredSections.reduce((sum, s) => sum + s.acupoints.length, 0);

  const toggleSection = (id: string) => {
    setExpandedSection(prev => prev === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800 font-sans">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 space-y-6">
          <div className="w-full flex justify-between items-center">
            <Link href="/systems">
              <a className="flex items-center text-stone-500 hover:text-stone-800 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                系統總覽
              </a>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-stone-400 tracking-[0.3em] text-sm mb-4 font-serif">TUNG'S ACUPUNCTURE</p>
            <h1 className="text-3xl md:text-5xl font-serif text-stone-800 mb-4">
              董氏心氣神針
            </h1>
            <p className="text-stone-500 max-w-2xl mx-auto font-serif leading-relaxed">
              傳承董氏針灸精髓，涵蓋十大部位共 176 個穴位。
              搭配 MUNI 聖杯精油與 Somaniks 日本針灸貼，實現全方位經絡調理。
            </p>
          </motion.div>

          {/* Search */}
          <div className="w-full max-w-md relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="搜尋穴位名稱、主治症狀、歸經..."
              className="pl-10 bg-white/50 border-stone-200 focus:border-stone-400 focus:ring-stone-200 rounded-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400">
                {totalFiltered} 個穴位
              </span>
            )}
          </div>
        </div>

        {/* Sections Accordion */}
        <div className="space-y-4 mb-16">
          {filteredSections.map((section, sIdx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sIdx * 0.05 }}
              className="bg-white rounded-2xl border border-stone-100 overflow-hidden shadow-sm"
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-5 hover:bg-stone-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{section.emoji}</span>
                  <div className="text-left">
                    <h2 className="text-lg font-serif font-bold text-stone-800">
                      {section.id}【{section.body}】
                    </h2>
                    <p className="text-sm text-stone-400">{section.acupoints.length} 個穴位</p>
                  </div>
                </div>
                {expandedSection === section.id ? (
                  <ChevronUp className="w-5 h-5 text-stone-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-stone-400" />
                )}
              </button>

              {/* Acupoints Grid */}
              <AnimatePresence>
                {expandedSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-5 pt-0">
                      {section.acupoints.map((ap, i) => (
                        <motion.button
                          key={`${section.id}-${i}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.02 }}
                          onClick={() => setSelectedAcupoint(ap)}
                          className="group bg-stone-50 hover:bg-stone-100 rounded-xl p-3 text-left transition-all duration-200 hover:shadow-md border border-transparent hover:border-stone-200"
                        >
                          {ap.image_urls.length > 0 && (
                            <div className="aspect-square rounded-lg overflow-hidden mb-2 bg-white">
                              <img
                                src={ap.image_urls[0]}
                                alt={ap.name}
                                className="w-full h-full object-contain p-1"
                                loading="lazy"
                              />
                            </div>
                          )}
                          <p className="text-sm font-serif font-bold text-stone-700 group-hover:text-stone-900 truncate">
                            {ap.name}
                          </p>
                          {ap.meridian && (
                            <p className="text-xs text-stone-400 truncate mt-0.5">{ap.meridian}</p>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Usage Guide */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl border border-red-100 p-8 md:p-10">
            <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6 text-center">搭配使用建議</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3 text-2xl">🧴</div>
                <h3 className="font-serif font-bold text-stone-700 mb-2">MUNI 聖杯精油</h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  在穴位處塗抹 MUNI 聖杯精油，透過精油的花精能量與芳香分子，增強穴位的療癒效果。
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-3 text-2xl">🩹</div>
                <h3 className="font-serif font-bold text-stone-700 mb-2">Somaniks 針灸貼片</h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  將日本針灸貼片貼於對應穴位上，提供持續溫和的穴位刺激，延長療癒時間。
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-3 text-2xl">🌿</div>
                <h3 className="font-serif font-bold text-stone-700 mb-2">整合療癒方案</h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  先塗精油按摩穴位，再貼上針灸貼片固定，搭配花精調理情緒，實現身心全方位療癒。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
            <div className="relative z-10">
              <Sparkles className="w-8 h-8 mx-auto mb-4 text-amber-300" />
              <h2 className="text-2xl md:text-3xl font-serif mb-4">不確定該用哪個穴位？</h2>
              <p className="text-stone-300 max-w-xl mx-auto mb-8 leading-relaxed">
                告訴 MUNI 療癒顧問你的身體狀況，AI 會根據你的症狀推薦最適合的穴位，
                並建議搭配精油與針灸貼的使用方式。
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
            <Link href="/">
              <a className="text-primary hover:text-primary/80 transition-colors font-serif border-b border-primary/30 pb-0.5 hover:border-primary">
                返回抽牌
              </a>
            </Link>
          </div>
          <p>© 2025 MUNI. 董氏心氣神針傳承。</p>
        </footer>
      </div>

      {/* Acupoint Detail Modal */}
      <AnimatePresence>
        {selectedAcupoint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedAcupoint(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-stone-100 p-4 flex items-center justify-between rounded-t-2xl z-10">
                <h2 className="text-xl font-serif font-bold text-stone-800">{selectedAcupoint.name}</h2>
                <button
                  onClick={() => setSelectedAcupoint(null)}
                  className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-stone-500" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Images */}
                {selectedAcupoint.image_urls.length > 0 && (
                  <div className="space-y-3">
                    {selectedAcupoint.image_urls.map((url, i) => (
                      <div key={i} className="bg-stone-50 rounded-xl overflow-hidden">
                        <img
                          src={url}
                          alt={`${selectedAcupoint.name} 穴位圖 ${i + 1}`}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Details */}
                <div className="space-y-4">
                  {selectedAcupoint.meridian && (
                    <DetailBlock label="歸經" content={selectedAcupoint.meridian} />
                  )}
                  {selectedAcupoint.properties && (
                    <DetailBlock label="穴性" content={selectedAcupoint.properties} />
                  )}
                  {selectedAcupoint.location && (
                    <DetailBlock label="取穴" content={selectedAcupoint.location} />
                  )}
                  {selectedAcupoint.indications && (
                    <DetailBlock label="主治" content={selectedAcupoint.indications} />
                  )}
                  {selectedAcupoint.technique && (
                    <DetailBlock label="針法" content={selectedAcupoint.technique} />
                  )}
                  {selectedAcupoint.anatomy && (
                    <DetailBlock label="解剖" content={selectedAcupoint.anatomy} />
                  )}
                </div>

                {/* Usage Tip */}
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <p className="text-sm text-amber-800 font-serif leading-relaxed">
                    <strong>搭配建議：</strong>在{selectedAcupoint.name}處塗抹 MUNI 聖杯精油輕柔按摩，
                    再貼上 Somaniks 日本針灸貼片，可延長穴位刺激效果。
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DetailBlock({ label, content }: { label: string; content: string }) {
  return (
    <div className="bg-stone-50 rounded-xl p-4">
      <p className="text-xs text-stone-400 uppercase tracking-wider mb-1 font-serif">{label}</p>
      <p className="text-sm text-stone-700 leading-relaxed whitespace-pre-wrap">{content}</p>
    </div>
  );
}
