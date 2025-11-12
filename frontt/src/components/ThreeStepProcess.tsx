import { ImageWithFallback } from "./figma/ImageWithFallback";
import processImage from "figma:asset/06ab7da115bc73f10e405f0ef61b1c0a944df0c7.png";
import { ShoppingCart, Lock, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: ShoppingCart,
    title: "거래 시작",
    description: "구매자가 상품을 선택하고 TP로 결제합니다. 결제된 금액은 즉시 에스크로에 예치됩니다.",
  },
  {
    number: "2",
    icon: Lock,
    title: "안전 보관",
    description: "에스크로에 예치된 금액은 플랫폼이 안전하게 보관합니다. 거래가 확정될 때까지 보호됩니다.",
  },
  {
    number: "3",
    icon: CheckCircle,
    title: "거래 확정",
    description: "구매자가 상품 수령 후 확정하면 판매자에게 EP로 자동 전환되어 정산됩니다.",
  },
];

export function ThreeStepProcess() {
  return (
    <section className="snap-start relative w-full min-h-screen flex items-center justify-center py-16 px-4 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src={processImage} 
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
          <div className="text-xs text-neutral-500 tracking-[0.25em] uppercase mb-3">Three Step Process</div>
          <h2 className="text-white mb-3 text-[32px] font-bold">3단계 거래 프로세스</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            구매자와 판매자 모두를 보호하는 안전한 거래 시스템
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              
              <div className="relative backdrop-blur-md rounded-xl p-6 border border-neutral-800/50 hover:border-neutral-700/80 transition-all">
                {/* Step Number */}
                <div className="relative w-12 h-12 mb-4">
                  <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                  <div className="relative w-full h-full flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                
                {/* Icon */}
                <step.icon className="w-8 h-8 text-white mb-4" />
                
                {/* Content */}
                <div>
                  <h3 className="text-white mb-3 font-bold">{step.title}</h3>
                  <p className="text-neutral-400 text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}