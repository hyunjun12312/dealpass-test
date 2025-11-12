import { Shield, Lock, Eye, UserCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import securityImage from "figma:asset/f4130cce1da623acb639a29b4a5bc21f5cdeb0a0.png";

const features = [
  {
    icon: Shield,
    title: "다층 보안 체계",
    description: "은행급 보안으로 모든 거래 데이터를 안전하게 암호화 및 보관합니다",
  },
  {
    icon: Lock,
    title: "에스크로 시스템",
    description: "거래 금액을 플랫폼이 중간 보관하여 사기와 분쟁을 사전 방지합니다",
  },
  {
    icon: Eye,
    title: "실시간 모니터링",
    description: "24/7 거래 모니터링으로 의심스러운 활동을 즉시 탐지하고 대응합니다",
  },
  {
    icon: UserCheck,
    title: "완전한 거래 기록",
    description: "모든 거래 내역을 투명하게 기록하고 언제든지 확인할 수 있습니다",
  },
];

export function Security() {
  return (
    <section className="snap-start relative w-full min-h-screen flex items-center justify-center py-16 px-4 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src={securityImage} 
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
          <div className="text-xs text-neutral-500 tracking-[0.25em] uppercase mb-3">Security</div>
          <h2 className="text-white mb-3 text-[32px] font-bold">안전한 거래 환경</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            최신 보안 기술로 안전하고 신뢰할 수 있는 거래를 보장합니다
          </p>
        </div>
        
        {/* Security Features */}
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              
              <div className="relative flex gap-4 p-6 rounded-xl backdrop-blur-md border border-neutral-800/50 hover:border-neutral-700/80 transition-all">
                <div className="relative inline-block flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
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