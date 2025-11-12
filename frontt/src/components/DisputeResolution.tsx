import { AlertTriangle, FileText, Scale, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import disputeImage from "figma:asset/f4130cce1da623acb639a29b4a5bc21f5cdeb0a0.png";

const resolutionSteps = [
  {
    number: "1",
    icon: FileText,
    title: "분쟁 신청 및 입증",
    description: "분쟁 신청자가 먼저 문제 상황과 증빙 자료를 제출합니다. 스크린샷, 채팅 기록 등 객관적 증거로 상황을 설명합니다.",
  },
  {
    number: "2",
    icon: Scale,
    title: "평가 및 검토",
    description: "관리자가 제출된 증거를 검토하고 평가합니다. 필요한 경우 추가 정보를 요청할 수 있습니다.",
  },
  {
    number: "3",
    icon: CheckCircle,
    title: "최종 판정",
    description: "관리자가 모든 증거를 검토 후 판정을 내립니다. 구매자 승소 시 거래 취소 및 TP 반환, 판매자 승소 시 거래 확정 처리됩니다.",
  },
];

const criteria = [
  {
    number: "1",
    title: "증빙 자료의 명확성",
    description: "스크린샷, 채팅 기록 등 객관적 증거 우선",
  },
  {
    number: "2",
    title: "플랫폼 이용약관 준수",
    description: "약관 위반 여부를 중요하게 고려",
  },
  {
    number: "3",
    title: "거래 이행 여부",
    description: "상품 전달 및 대금 지불 완료 확인",
  },
  {
    number: "4",
    title: "과거 거래 기록",
    description: "신뢰도, 티어, 리뷰 등을 참고",
  },
];

const outcomes = [
  {
    icon: CheckCircle,
    title: "구매자 승소",
    description: "거래 취소 + TP 반환",
  },
  {
    icon: CheckCircle,
    title: "판매자 승소",
    description: "거래 확정 처리",
  },
  {
    icon: CheckCircle,
    title: "평균 처리 시간",
    description: "24-48시간",
  },
];

export function DisputeResolution() {
  return (
    <section className="snap-start relative w-full min-h-screen flex items-center justify-center py-16 px-4 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src={disputeImage} 
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
          <div className="text-xs text-neutral-500 tracking-[0.25em] uppercase mb-3">Dispute Resolution</div>
          <h2 className="text-white mb-3 font-bold text-[32px]">분쟁 처리 시스템</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            공정하고 투명한 분쟁 해결 프로세스로 거래 분쟁을 신속하게 처리합니다
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {resolutionSteps.map((step, index) => (
            <div key={index} className="group relative">
              
              <div className="relative backdrop-blur-md rounded-xl p-5 border border-neutral-800/50 hover:border-neutral-700/80 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <div className="relative w-8 h-8 flex-shrink-0">
                    <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                    <div className="relative w-full h-full flex items-center justify-center text-white font-bold text-sm">
                      {step.number}
                    </div>
                  </div>
                  <step.icon className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                </div>
                
                <h3 className="text-white mb-2 text-sm font-bold">{step.title}</h3>
                <p className="text-neutral-400 text-xs">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Criteria and Outcomes */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Criteria */}
          <div className="relative">
            <div className="relative backdrop-blur-md rounded-xl p-5 border border-neutral-800/50">
              <h4 className="text-white mb-4 text-sm">판정 기준</h4>
              <div className="space-y-3">
                {criteria.map((item, index) => (
                  <div key={index} className="flex gap-3 text-xs">
                    <div className="w-5 h-5 flex items-center justify-center bg-white/10 rounded text-white flex-shrink-0">
                      {item.number}
                    </div>
                    <div className="flex-1">
                      <div className="text-white mb-1 font-bold">{item.title}</div>
                      <div className="text-neutral-500">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Outcomes */}
          <div className="relative">
            <div className="relative backdrop-blur-md rounded-xl p-5 border border-neutral-800/50 h-full">
              <h4 className="text-white mb-4 text-sm">결과</h4>
              <div className="space-y-3">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <outcome.icon className="w-6 h-6 text-white flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-white text-sm mb-1 font-bold">{outcome.title}</div>
                      <div className="text-neutral-400 text-xs">{outcome.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}