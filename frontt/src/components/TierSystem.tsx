import { TrendingUp, Zap, Gift, Star, Clock, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import tierImage from "figma:asset/d1f0611b02e5afe09a60e7e203fe1b44ed0bfd54.png";

const tiers = [
  { name: "T1", settlement: "즉시", fee: "4.0%" },
  { name: "T2", settlement: "12h", fee: "5.0%" },
  { name: "T3", settlement: "18h", fee: "5.5%" },
  { name: "T4", settlement: "24h", fee: "6.0%" },
  { name: "T5", settlement: "30h", fee: "6.5%" },
  { name: "T6", settlement: "36h", fee: "7.0%" },
  { name: "T7", settlement: "42h", fee: "7.5%" },
  { name: "T8", settlement: "48h", fee: "8.0%" },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "자동 승급 시스템",
    description: "거래 횟수, 금액, 평점을 종합하여 매일 자동 재계산",
  },
  {
    icon: Clock,
    title: "정산 대기시간",
    description: "T1 즉시 ~ T8 48시간 높은 등급일수록 빠른 정산",
  },
  {
    icon: Zap,
    title: "수수료율 차등",
    description: "T1 4% ~ T8 8% 상위 티어일수록 낮은 수수료 적용",
  },
  {
    icon: Gift,
    title: "티어별 특전",
    description: "T1~T4 정액 수수료 면제 우선 고객지원 • 프리미엄 뱃지",
  },
  {
    icon: Star,
    title: "신뢰성 증가",
    description: "높은 등급일수록 신뢰성 증가 및 추가 보안 제공",
  },
  {
    icon: ShieldCheck,
    title: "보안 강화",
    description: "높은 등급일수록 보안 강화 및 추가 보호 제공",
  },
];

export function TierSystem() {
  return (
    <section className="snap-start relative w-full min-h-screen flex items-center justify-center py-16 px-4 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src={tierImage} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-transparent to-neutral-950/50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-white/[0.03] rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-xs text-neutral-500 tracking-[0.25em] uppercase mb-3">Tier System</div>
          <h2 className="text-white mb-3 text-[32px] font-bold">8단계 티어 시스템</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            거래 실적에 따라 자동 승급되며 더 나은 혜택을 제공받습니다
          </p>
        </div>
        
        {/* Tier Grid */}
        <div className="mb-8">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {tiers.map((tier, index) => (
              <div key={index} className="group relative">
                
                <div className="relative backdrop-blur-md rounded-xl p-4 border border-neutral-800/50 hover:border-neutral-700/80 transition-all text-center">
                  <div className="text-xl text-white mb-2 font-bold">{tier.name}</div>
                  <div className="space-y-1">
                    <div>
                      <p className="text-[9px] text-neutral-600 uppercase">정산</p>
                      <p className="text-white text-sm">{tier.settlement}</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-neutral-600 uppercase">수수료</p>
                      <p className="text-white text-sm">{tier.fee}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              
              <div className="relative backdrop-blur-md rounded-xl p-4 border border-neutral-800/50 hover:border-neutral-700/80 transition-all">
                <benefit.icon className="w-6 h-6 text-white mb-3" />
                <h4 className="text-white text-sm mb-2 font-bold">{benefit.title}</h4>
                <p className="text-neutral-400 text-xs">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}