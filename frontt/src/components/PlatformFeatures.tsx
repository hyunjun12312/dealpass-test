import { Users, MessageSquare, Bell, BarChart3, Lock, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import featuresImage from "figma:asset/f153e70a055c4e006c533b25d88b2ea507003070.png";

const features = [
  {
    icon: MessageSquare,
    title: "실시간 1:1 채팅",
    description: "암호화된 채팅으로 안전한 협상",
  },
  {
    icon: Bell,
    title: "실시간 알림",
    description: "거래 상태 변경 즉시 푸시 알림",
  },
  {
    icon: BarChart3,
    title: "거래 분석",
    description: "거래 패턴 분석 및 예측",
  },
  {
    icon: Lock,
    title: "보안 강화",
    description: "고급 암호화 및 보안 기능",
  },
  {
    icon: TrendingUp,
    title: "성장 추적",
    description: "성장 지표 모니터링 및 분석",
  },
  {
    icon: Users,
    title: "사용자 관리",
    description: "사용자 권한 및 역할 관리",
  },
];

export function PlatformFeatures() {
  return (
    <section className="snap-start relative w-full min-h-screen flex items-center justify-center py-16 px-4 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src={featuresImage} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-transparent to-neutral-950/50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-white/[0.03] rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs text-neutral-500 tracking-[0.25em] uppercase mb-3">Platform Features</div>
          <h2 className="text-white mb-3 text-[32px] font-bold">플랫폼 주요 기능</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            거래를 더욱 편리하고 안전하게 만드는 필수 기능들
          </p>
        </div>
        
        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              
              <div className="relative flex flex-col gap-3 p-6 rounded-xl backdrop-blur-md border border-neutral-800/50 hover:border-neutral-700/80 transition-all">
                <feature.icon className="w-8 h-8 text-white" />
                <div>
                  <h3 className="text-white mb-2 font-bold">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}