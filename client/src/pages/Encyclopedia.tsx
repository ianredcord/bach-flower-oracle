import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Search } from "lucide-react";
import remediesData from "@/data/remedies.json";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function Encyclopedia() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRemedies = remediesData.remedies.filter((remedy) =>
    remedy.name_zh.includes(searchTerm) ||
    remedy.name_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
    remedy.emotion.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800 font-sans selection:bg-stone-200">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 space-y-6">
          <Link href="/">
            <a className="flex items-center text-stone-500 hover:text-stone-800 transition-colors self-start mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回抽牌
            </a>
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-serif text-stone-800 text-center">
            巴哈花精百科
          </h1>
          <p className="text-stone-500 text-center max-w-2xl font-serif">
            探索 38 種花精的自然療癒力量，了解每一朵花所帶來的正向轉化與心靈指引。
          </p>

          {/* Search */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="搜尋花精名稱、情緒關鍵字..."
              className="pl-10 bg-white/50 border-stone-200 focus:border-stone-400 focus:ring-stone-200 rounded-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredRemedies.map((remedy) => (
            <Card key={remedy.id} className="bg-white/80 border-none shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden bg-[#F5F5F0] relative">
                  <img
                    src={`/images/flowers/${remedy.id}.png`}
                    alt={remedy.name_zh}
                    className="w-full h-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-serif text-stone-500 shadow-sm">
                    No. {remedy.id}
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="text-center">
                    <h3 className="text-xl font-serif text-stone-800 mb-1">{remedy.name_zh}</h3>
                    <p className="text-sm font-serif text-stone-500 italic">{remedy.name_en}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-[#F9F7F2] p-3 rounded-lg">
                      <p className="text-xs text-stone-400 uppercase tracking-wider mb-1 text-center">對應情緒</p>
                      <p className="text-sm text-stone-700 text-center leading-relaxed">
                        {remedy.emotion}
                      </p>
                    </div>

                    <div className="bg-stone-50 p-3 rounded-lg border border-stone-100">
                      <p className="text-xs text-stone-400 uppercase tracking-wider mb-1 text-center">正向轉化</p>
                      <p className="text-sm text-stone-800 font-medium text-center leading-relaxed">
                        {remedy.positive}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRemedies.length === 0 && (
          <div className="text-center py-20 text-stone-400">
            <p>沒有找到符合「{searchTerm}」的花精</p>
          </div>
        )}
      </div>
    </div>
  );
}
