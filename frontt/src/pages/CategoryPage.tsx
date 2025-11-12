import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import logoImage from 'figma:asset/9b411be03d7c248381fb2b5c063b8ef8781ab484.png';
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import bgImage from 'figma:asset/73454f08c0672bde4d4e100f56e02c060ca0ddd7.png';
import gameControllerIcon from 'figma:asset/f4a2e35d8c22c86e7f5a96c25dd33b44dbe9db22.png';
import monitorCodeIcon from 'figma:asset/86f49f766614cb66d93f14b27a52a8d9b8ffc4b8.png';
import paletteIcon from 'figma:asset/74c3854df7fcd4bef56ee2ed31df1aefe60950f5.png';
import ticketKeyIcon from 'figma:asset/aa065e8277b3d60eabb44c4286d4ce28b1aaa071.png';
import coinsIcon from 'figma:asset/cc3c30c97b17da1007188157479dd7a1fa33d913.png';
import giftBoxIcon from 'figma:asset/27323aaaa0cb1510b62b3864eb3cab26500affc5.png';
import diamondIcon from 'figma:asset/e410c9cb9d1567f4a6a2394cfeaf12c80b8a7705.png';
import domainIcon from 'figma:asset/3a84332a2d87b7a1f92c443245acf651385641dd.png';
import snsIcon from 'figma:asset/f5d719661d96164852c0d508be51b53229a07695.png';

const categories = [
  {
    icon: gameControllerIcon,
    title: "게임 계정",
    description: "LOL 다이아 계정, 발로란트 레디언트, 메이플 280렙 등 고렙/고티어 게임 계정",
    count: "2,500+"
  },
  {
    icon: diamondIcon,
    title: "게임 아이템",
    description: "CS2 나이프, 발로란트 레이버, LOL 프레스티지 스킨 등 희귀 아이템",
    count: "1,800+"
  },
  {
    icon: coinsIcon,
    title: "게임 재화",
    description: "RP 10000원권, 메이플 메소 10억, 원신 창세결정 등 게임 내 화폐 충전",
    count: "3,200+"
  },
  {
    icon: ticketKeyIcon,
    title: "게임 키/코드",
    description: "스팀 엘든링, 젤다 TOTK, Xbox 게임패스 3개월 등 정품 게임 키",
    count: "980+"
  },
  {
    icon: monitorCodeIcon,
    title: "소프트웨어",
    description: "Windows 11 Pro, MS Office 365, Photoshop CC 등 정품 라이선스",
    count: "450+"
  },
  {
    icon: paletteIcon,
    title: "디지털 창작물",
    description: "프리미엄 워드프레스 테마, 상업용 폰트, 스톡 이미지 팩 등",
    count: "1,200+"
  },
  {
    icon: domainIcon,
    title: "도메인/계정",
    description: ".com 프리미엄 도메인, AWS 크레딧, GitHub Pro 계정 등",
    count: "320+"
  },
  {
    icon: giftBoxIcon,
    title: "디지털 상품권",
    description: "컬쳐랜드 5만원권, 구글 기프트카드, 스타벅스 쿠폰 등",
    count: "750+"
  },
  {
    icon: snsIcon,
    title: "SNS 계정",
    description: "인스타그램 팔로워 1만+, 유튜브 수익화 계정, 트위터 인증 계정 등",
    count: "290+"
  }
];

const stats = [
  { value: "12,000+", label: "총 상품 수" },
  { value: "99.8%", label: "거래 성공률" },
  { value: "24/7", label: "고객 지원" },
  { value: "<1시간", label: "평균 거래 시간" }
];

export function CategoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-900">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <ImageWithFallback 
                src={logoImage} 
                alt="DealPass Logo" 
                className="w-7 h-7 object-contain"
              />
              <span className="text-base text-white tracking-tight">DealPass</span>
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-neutral-400 hover:text-white hover:bg-neutral-900">
                로그인
              </Button>
              <Button className="bg-white hover:bg-zinc-100 text-black">
                회원가입
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content with Background */}
      <div className="relative min-h-screen pt-16">
        {/* Full page background image */}
        <div className="fixed inset-0 z-0">
          <ImageWithFallback 
            src={bgImage} 
            alt="" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Complex Background Gradient Effects */}
        <div className="fixed inset-0 z-0 bg-gradient-to-b from-neutral-950/50 via-transparent to-neutral-950/50"></div>
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-white/[0.03] rounded-full blur-[150px] z-0"></div>
        
        {/* Animated Grid Lines */}
        <div className="fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        {/* Hero Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="text-xs text-neutral-500 tracking-[0.25em] uppercase mb-3">Digital Marketplace</div>
            <h1 className="text-white mb-3 text-[32px]">
              디지털 상품 거래 마켓플레이스
            </h1>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              안전하고 빠른 디지털 상품 거래를 시작하세요
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="relative z-10 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <div key={index} className="group relative">
                  <div className="relative backdrop-blur-md rounded-xl p-6 border border-neutral-800/50 hover:border-neutral-700/80 transition-all duration-700 hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] cursor-pointer h-full bg-[rgb(0,0,0)]">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <div className="relative inline-block flex-shrink-0 mb-4">
                          <ImageWithFallback 
                            src={category.icon} 
                            alt={category.title}
                            className="w-8 h-8 object-contain relative z-10"
                          />
                        </div>
                        <h3 className="text-white mb-2">{category.title}</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                      <div className="mt-auto pt-4 border-t border-neutral-800/50">
                        <span className="text-neutral-500 text-sm">{category.count} 상품</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative z-10 py-20 px-4 border-t border-neutral-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-white mb-2">{stat.value}</div>
                  <div className="text-neutral-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}