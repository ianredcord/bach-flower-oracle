import { Link } from "wouter";
import { ArrowLeft, Heart, Flower2, BookOpen, Sparkles } from "lucide-react";

export default function History() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800 font-sans selection:bg-stone-200">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 space-y-6">
          <Link href="/">
            <a className="flex items-center text-stone-500 hover:text-stone-800 transition-colors self-start mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回抽牌
            </a>
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-serif text-stone-800 text-center">
            巴哈花精的由來
          </h1>
          <p className="text-stone-500 text-center max-w-2xl font-serif">
            探索愛德華・巴哈醫生的生平故事，以及他如何發現這套自然療癒系統
          </p>
        </div>

        {/* Dr. Bach Portrait Section */}
        <div className="bg-white/80 rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-64 flex-shrink-0 overflow-hidden rounded-lg shadow-md">
              <img
                src="/images/dr-bach.jpg"
                alt="愛德華・巴哈醫生 Dr. Edward Bach"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-serif text-stone-800 mb-2">
                愛德華・巴哈醫生
              </h2>
              <p className="text-stone-500 font-serif italic mb-4">
                Dr. Edward Bach (1886-1936)
              </p>
              <p className="text-stone-600 leading-relaxed">
                英國醫生、細菌學家、順勢療法醫師，巴哈花精療法的創始人。
                他相信真正的療癒來自於平衡情緒與心靈，而非僅僅治療身體的症狀。
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Sections */}
        <div className="space-y-8">
          {/* Early Career */}
          <section className="bg-white/80 rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#5C7A5C]/10 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#5C7A5C]" />
              </div>
              <h3 className="text-xl font-serif text-stone-800">早期醫學生涯</h3>
            </div>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                巴哈醫生於 1886 年在英國出生，從小就是個體弱敏感的孩子，對大自然充滿興趣。
                他先後在伯明翰和倫敦大學學院醫院學習醫學，1912 年取得醫師資格。
              </p>
              <p>
                在獲得文憑時，他曾說：「我需要五年時間來忘記所學的一切。」
                這句話預示了他日後將走上一條與傳統醫學不同的道路。
              </p>
              <p>
                1917 年，巴哈醫生因腫瘤手術被告知只剩三個月的生命。然而，他並沒有放棄，
                而是全心投入研究工作。奇蹟般地，他不僅存活下來，健康狀況甚至比以前更好。
                他深信是使命感拯救了他——他還有未完成的工作。
              </p>
            </div>
          </section>

          {/* Homeopathic Research */}
          <section className="bg-white/80 rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#8B7355]/10 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#8B7355]" />
              </div>
              <h3 className="text-xl font-serif text-stone-800">順勢療法研究</h3>
            </div>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                作為細菌學家和病理學家，巴哈醫生在疫苗研究方面取得了顯著成就。
                然而，他對傳統醫學只關注疾病而忽視整體人格的做法感到不滿，
                渴望找到一種更全面的療癒方法。
              </p>
              <p>
                他在倫敦皇家順勢療法醫院工作期間，發現了疫苗研究與順勢療法原理之間的相似之處，
                並開發出七種順勢療法製劑。這項工作為他贏得了「第二個哈尼曼」的美譽。
              </p>
            </div>
          </section>

          {/* Discovery of Flower Remedies */}
          <section className="bg-white/80 rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#D4A574]/10 rounded-full flex items-center justify-center">
                <Flower2 className="w-5 h-5 text-[#D4A574]" />
              </div>
              <h3 className="text-xl font-serif text-stone-800">花精療法的發現</h3>
            </div>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                1930 年，巴哈醫生放棄了倫敦哈利街的高薪診所，全心投入尋找更純淨、
                更溫和的療癒方法。他開始收集植物，特別是花朵——植物最精華的部分。
              </p>
              <p>
                他放棄了傳統的科學方法，轉而運用天生的療癒直覺來尋找正確的植物。
                經過多年的試驗，他逐一發現了針對特定情緒狀態的花精。
                他發現，當治療患者的情緒和性格時，身體的不適也會自然緩解。
              </p>
              <p>
                從 1930 年到 1934 年，他的生活遵循著季節性的節奏：
                春夏尋找和製備花精，秋冬則為前來求助的人提供幫助和建議。
              </p>
            </div>
          </section>

          {/* Completion */}
          <section className="bg-white/80 rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#5C7A5C]/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#5C7A5C]" />
              </div>
              <h3 className="text-xl font-serif text-stone-800">完成使命</h3>
            </div>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                當巴哈醫生和助手諾拉・威克斯搬到維農山莊時，他已經發現了 19 種花精。
                在那裡的小徑和田野中，他找到了剩餘的 19 種花精，完成了整套 38 種花精系統。
              </p>
              <p>
                1936 年 11 月 27 日，在宣布花精研究完成一年後，巴哈醫生平靜地離世。
                他留下了一套幫助全世界無數人的療癒系統。
              </p>
              <blockquote className="border-l-4 border-[#D4A574] pl-4 py-2 my-4 bg-[#F9F7F2] rounded-r-lg italic text-stone-700">
                「我們的工作是堅定地遵循這種療癒方法的簡單與純淨，
                堅定地維護花精的無害性、簡單性和神奇的療癒力量。」
                <footer className="text-sm text-stone-500 mt-2 not-italic">
                  — 愛德華・巴哈醫生，1936 年
                </footer>
              </blockquote>
            </div>
          </section>

          {/* Philosophy */}
          <section className="bg-gradient-to-br from-[#5C7A5C]/5 to-[#D4A574]/5 rounded-2xl shadow-sm p-8 border border-[#D4A574]/20">
            <h3 className="text-xl font-serif text-stone-800 mb-4 text-center">巴哈醫生的療癒哲學</h3>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p className="text-center">
                巴哈醫生相信，疾病的根源在於情緒與心靈的失衡。
                他的花精療法不是針對身體症狀，而是針對導致疾病的情緒狀態。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-white/50 rounded-xl">
                  <div className="text-2xl mb-2">🌸</div>
                  <h4 className="font-serif text-stone-800 mb-1">簡單</h4>
                  <p className="text-sm text-stone-500">療癒應該簡單易懂，人人可用</p>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl">
                  <div className="text-2xl mb-2">💚</div>
                  <h4 className="font-serif text-stone-800 mb-1">純淨</h4>
                  <p className="text-sm text-stone-500">來自大自然的溫和療癒力量</p>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl">
                  <div className="text-2xl mb-2">✨</div>
                  <h4 className="font-serif text-stone-800 mb-1">整體</h4>
                  <p className="text-sm text-stone-500">治療情緒，身體自然康復</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Links */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/encyclopedia">
              <a className="px-6 py-3 bg-[#5C7A5C] text-white rounded-full font-serif hover:bg-[#4A6349] transition-colors">
                探索花精百科
              </a>
            </Link>
            <Link href="/">
              <a className="px-6 py-3 bg-white text-stone-700 rounded-full font-serif border border-stone-200 hover:bg-stone-50 transition-colors">
                開始抽牌
              </a>
            </Link>
          </div>
        </div>

        {/* Source Attribution */}
        <div className="mt-8 text-center text-xs text-stone-400">
          <p>資料來源：The Bach Centre (bachcentre.com)</p>
        </div>
      </div>
    </div>
  );
}
