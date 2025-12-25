import type { VercelRequest, VercelResponse } from '@vercel/node';

// Flower remedy data for OG meta tags
const remedies = [
  { id: 1, name_zh: "岩玫瑰", name_en: "Rock Rose", affirmation: "我擁有面對一切的勇氣與力量" },
  { id: 2, name_zh: "溝酸醬", name_en: "Mimulus", affirmation: "我勇敢面對恐懼，享受生活的每一刻" },
  { id: 3, name_zh: "櫻桃李", name_en: "Cherry Plum", affirmation: "我的內心平靜而堅定，我掌控自己的思緒" },
  { id: 4, name_zh: "白楊", name_en: "Aspen", affirmation: "我信任生命的安排，內心充滿平安" },
  { id: 5, name_zh: "紅栗花", name_en: "Red Chestnut", affirmation: "我以愛與信任祝福所愛的人" },
  { id: 6, name_zh: "水蕨", name_en: "Cerato", affirmation: "我相信自己的智慧與判斷" },
  { id: 7, name_zh: "線球草", name_en: "Scleranthus", affirmation: "我果斷做出決定，堅定向前邁進" },
  { id: 8, name_zh: "龍膽", name_en: "Gentian", affirmation: "我從每次挫折中學習，變得更加堅強" },
  { id: 9, name_zh: "荊豆", name_en: "Gorse", affirmation: "我的心中充滿希望與光明" },
  { id: 10, name_zh: "鵝耳櫪", name_en: "Hornbeam", affirmation: "我充滿活力，迎接每一天的挑戰" },
  { id: 11, name_zh: "野燕麥", name_en: "Wild Oat", affirmation: "我清楚看見自己的人生方向" },
  { id: 12, name_zh: "鐵線蓮", name_en: "Clematis", affirmation: "我活在當下，專注於眼前的美好" },
  { id: 13, name_zh: "忍冬", name_en: "Honeysuckle", affirmation: "我珍惜過去，但我選擇活在當下" },
  { id: 14, name_zh: "野玫瑰", name_en: "Wild Rose", affirmation: "我對生活充滿熱情與期待" },
  { id: 15, name_zh: "橄欖", name_en: "Olive", affirmation: "我的身心靈充滿能量與活力" },
  { id: 16, name_zh: "白栗花", name_en: "White Chestnut", affirmation: "我的心靈平靜，思緒清晰明朗" },
  { id: 17, name_zh: "芥子", name_en: "Mustard", affirmation: "我的內心充滿喜悅與寧靜" },
  { id: 18, name_zh: "栗苞", name_en: "Chestnut Bud", affirmation: "我從經驗中學習，不斷成長進步" },
  { id: 19, name_zh: "水堇", name_en: "Water Violet", affirmation: "我與他人和諧連結，分享我的智慧" },
  { id: 20, name_zh: "鳳仙花", name_en: "Impatiens", affirmation: "我耐心等待，享受生命的節奏" },
  { id: 21, name_zh: "石楠", name_en: "Heather", affirmation: "我傾聽他人，建立真誠的連結" },
  { id: 22, name_zh: "龍芽草", name_en: "Agrimony", affirmation: "我真實面對自己的感受，內心和諧平靜" },
  { id: 23, name_zh: "矢車菊", name_en: "Centaury", affirmation: "我尊重自己的需求，勇敢說不" },
  { id: 24, name_zh: "胡桃", name_en: "Walnut", affirmation: "我堅定走在自己的道路上，不受外界影響" },
  { id: 25, name_zh: "冬青", name_en: "Holly", affirmation: "我的心中充滿愛與慈悲" },
  { id: 26, name_zh: "落葉松", name_en: "Larch", affirmation: "我相信自己的能力，勇於嘗試" },
  { id: 27, name_zh: "松樹", name_en: "Pine", affirmation: "我接納自己，釋放所有的罪惡感" },
  { id: 28, name_zh: "榆樹", name_en: "Elm", affirmation: "我有能力完成所有的責任" },
  { id: 29, name_zh: "甜栗花", name_en: "Sweet Chestnut", affirmation: "在最深的黑暗中，我找到內在的光明" },
  { id: 30, name_zh: "星辰百合", name_en: "Star of Bethlehem", affirmation: "我釋放過去的傷痛，迎接療癒與平靜" },
  { id: 31, name_zh: "柳樹", name_en: "Willow", affirmation: "我為自己的生命負責，釋放所有怨恨" },
  { id: 32, name_zh: "橡樹", name_en: "Oak", affirmation: "我允許自己休息，接受他人的幫助" },
  { id: 33, name_zh: "海棠", name_en: "Crab Apple", affirmation: "我接納自己的完美與不完美" },
  { id: 34, name_zh: "菊苣", name_en: "Chicory", affirmation: "我無條件地愛，不求回報" },
  { id: 35, name_zh: "馬鞭草", name_en: "Vervain", affirmation: "我尊重他人的選擇，放下執著" },
  { id: 36, name_zh: "葡萄藤", name_en: "Vine", affirmation: "我以智慧引導他人，尊重每個人的選擇" },
  { id: 37, name_zh: "山毛櫸", name_en: "Beech", affirmation: "我以慈悲的眼光看待他人" },
  { id: 38, name_zh: "岩泉水", name_en: "Rock Water", affirmation: "我對自己溫柔，享受生活的樂趣" },
  { id: 39, name_zh: "急救花精", name_en: "Rescue Remedy", affirmation: "我在任何情況下都保持平靜與安定" },
  { id: 40, name_zh: "淨化花精", name_en: "Purification", affirmation: "我釋放所有負面能量，迎接純淨與光明" }
];

function getRemedyById(id: number) {
  return remedies.find(r => r.id === id);
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;
  const remedyId = parseInt(id as string, 10);
  const remedy = getRemedyById(remedyId);

  if (!remedy) {
    return res.redirect(302, '/');
  }

  const baseUrl = 'https://bach-flower-oracle.vercel.app';
  const ogTitle = `${remedy.name_zh} - 牟尼巴哈花精指引`;
  const ogDescription = `「${remedy.affirmation}」✨ ${remedy.affirmation}`;
  const ogImage = `${baseUrl}/images/og/${remedy.id}.jpg`;
  const ogUrl = `${baseUrl}/result/${remedy.id}`;

  const html = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${ogTitle}</title>
  
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${ogTitle}" />
  <meta property="og:description" content="${ogDescription}" />
  <meta property="og:image" content="${ogImage}" />
  <meta property="og:image:width" content="600" />
  <meta property="og:image:height" content="1200" />
  <meta property="og:url" content="${ogUrl}" />
  <meta property="og:site_name" content="牟尼巴哈花精指引" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${ogTitle}" />
  <meta name="twitter:description" content="${ogDescription}" />
  <meta name="twitter:image" content="${ogImage}" />
  
  <meta name="description" content="${ogDescription}" />
  
  <script>
    const userAgent = navigator.userAgent.toLowerCase();
    const isCrawler = /facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot|slackbot|discordbot/i.test(userAgent);
    if (!isCrawler) {
      window.location.replace('/#/result/${remedy.id}');
    }
  </script>
</head>
<body>
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; font-family: 'Noto Serif TC', serif; background: #F9F7F2; padding: 20px;">
    <h1 style="color: #5C7A5C; margin-bottom: 16px;">${remedy.name_zh}</h1>
    <p style="color: #8C9E8C; font-style: italic; margin-bottom: 24px;">${remedy.name_en}</p>
    <img src="/images/og/${remedy.id}.jpg" alt="${remedy.name_zh}" style="max-width: 300px; border-radius: 8px; margin-bottom: 24px;" />
    <p style="color: #5C5040; font-size: 18px; text-align: center;">「${remedy.affirmation}」</p>
    <a href="/" style="margin-top: 32px; padding: 12px 24px; background: #5C7A5C; color: white; text-decoration: none; border-radius: 24px;">前往抽牌</a>
  </div>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
