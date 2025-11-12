import { Wallet, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import explosionImage from "figma:asset/63657c27e4a79d3571a3b9bcc254d9a29bfb81a2.png";

export function DualPointSystem() {
  return (
    <section className="snap-start relative w-full min-h-screen flex items-center justify-center py-16 px-4 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src={explosionImage} 
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
          <div className="text-xs text-neutral-500 tracking-[0.25em] uppercase mb-3">Dual Point System</div>
          <h2 className="text-white mb-3 text-[32px] font-bold">이중 포인트 시스템</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            거래용 TP와 수익용 EP를 완전 분리하여 투명성 안전성 확보
          </p>
        </div>
        
        {/* Point Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {/* Trading Point */}
          <div className="group relative">
            
            <div className="relative backdrop-blur-md rounded-xl p-6 border border-neutral-800/50 hover:border-neutral-700/80 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <Wallet className="w-8 h-8 text-white flex-shrink-0" />
                <div>
                  <h3 className="text-white mb-1 font-bold">Trading Point (TP)</h3>
                  <p className="text-xs text-neutral-600 uppercase">거래용 포인트</p>
                </div>
              </div>
              
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  1:1 실시간 충전
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  에스크로 예치
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  즉시 환불 보장
                </li>
              </ul>
            </div>
          </div>
          
          {/* Earning Point */}
          <div className="group relative">
            
            <div className="relative backdrop-blur-md border border-neutral-800/50 rounded-xl p-6 hover:border-neutral-700/80 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <TrendingUp className="w-8 h-8 text-white flex-shrink-0" />
                <div>
                  <h3 className="text-white mb-1 font-bold">Earning Point (EP)</h3>
                  <p className="text-xs text-neutral-600 uppercase">수익용 포인트</p>
                </div>
              </div>
              
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  판매 수익 적립
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  티어별 정산
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  현금 출금 가능
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Flow Diagram */}
        <div className="relative backdrop-blur-md rounded-xl p-6 border border-neutral-800/50">
          <div className="grid md:grid-cols-5 gap-4 items-center text-center">
            <div>
              <div className="text-white mb-2">TP</div>
              <div className="text-xs text-neutral-500">Trading Point</div>
              <div className="text-xs text-neutral-600 mt-1">충전 1:1 • 즉시 사용</div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-full h-px bg-gradient-to-r from-white/20 to-white/10"></div>
            </div>
            
            <div>
              <div className="text-white text-sm mb-1">거래 확정</div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-full h-px bg-gradient-to-r from-white/10 to-white/20"></div>
            </div>
            
            <div>
              <div className="text-white mb-2">EP</div>
              <div className="text-xs text-neutral-500">Earning Point</div>
              <div className="text-xs text-neutral-600 mt-1">판매 적립 • 현금 출금</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}