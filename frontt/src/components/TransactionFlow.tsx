import { Lock, MessageSquare, Zap, Scale } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import criteriaImage from "figma:asset/73454f08c0672bde4d4e100f56e02c060ca0ddd7.png";

const flows = [
  {
    icon: Lock,
    title: "에스크로 예치 시스템",
    description: "거래 금액을 플랫폼이 안전하게 보관하여 사기 방지",
  },
  {
    icon: MessageSquare,
    title: "암호화 채팅 채널",
    description: "SSL 보안 적용된 1:1 채팅으로 안전한 커뮤니케이션",
  },
  {
    icon: Zap,
    title: "자동 정산 시스템",
    description: "거래 완료 즉시 판매자에게 수익금 자동 전환 및 정산",
  },
  {
    icon: Scale,
    title: "분쟁 해결 시스템",
    description: "7가지 유형의 분쟁을 전문 중재팀이 신속하게 처리",
  },
];

export function TransactionFlow() {
  return (
    <section className="snap-start relative w-full min-h-screen flex items-center justify-center py-16 px-4 bg-black overflow-hidden">
      {/* Full section background image */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src={criteriaImage} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Complex Background Gradient Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-transparent to-neutral-950/50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-white/[0.03] rounded-full blur-[150px]"></div>
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10 w-full">
        {/* Compact Section Header */}
        <div className="text-center mb-12">
          <div className="text-xs text-neutral-500 tracking-[0.25em] uppercase mb-3">Transaction Flow</div>
          <h2 className="text-white mb-3 text-[32px] font-bold">거래 보안 시스템</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            구매자와 판매자 모두를 보호하는 안전한 거래 시스템
          </p>
        </div>
        
        {/* Flow Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {flows.map((flow, index) => (
            <div key={index} className="group relative">
              
              <div className="relative backdrop-blur-md rounded-xl p-6 border border-neutral-800/50 hover:border-neutral-700/80 transition-all duration-700 hover:shadow-[0_0_40px_rgba(255,255,255,0.12)]">
                <div className="flex items-start gap-4">
                  <div className="relative inline-block flex-shrink-0">
                    <flow.icon className="w-8 h-8 text-white relative z-10" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-white mb-2 font-bold">{flow.title}</h3>
                    <p className="text-neutral-400 text-sm">{flow.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}