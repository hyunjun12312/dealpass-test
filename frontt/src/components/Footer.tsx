import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from 'figma:asset/9b411be03d7c248381fb2b5c063b8ef8781ab484.png';

const footerLinks = {
  platform: {
    title: "플랫폼",
    links: ["거래 방법", "수수료 정책", "보안 시스템"],
  },
  support: {
    title: "지원",
    links: ["헬프센터", "문의하기", "공지사항"],
  },
  company: {
    title: "회사",
    links: ["회사 소개", "채용 정보", "파트너십"],
  },
  legal: {
    title: "법률",
    links: ["이용약관", "개인정보처리방침", "환불 정책"],
  },
};

export function Footer() {
  return (
    <footer className="w-full bg-black text-zinc-600 py-12 px-4 border-t border-zinc-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-5 gap-8 mb-10">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <ImageWithFallback 
                src={logoImage} 
                alt="DealPass Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-lg text-white font-bold tracking-tight">DealPass</span>
            </div>
            <p className="text-zinc-700 font-medium text-xs">안전한 디지털 거래 플랫폼</p>
          </div>
          
          {/* Links */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h4 className="text-white mb-3 font-semibold tracking-tight text-sm">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-zinc-700 hover:text-white transition-colors font-medium text-xs">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-zinc-900 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-zinc-800 font-medium text-xs">© 2025 DealPass. All rights reserved.</p>
          <div className="text-zinc-800 font-medium text-xs">Digital Products</div>
        </div>
      </div>
    </footer>
  );
}