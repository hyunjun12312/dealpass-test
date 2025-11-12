import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";
import logoImage from 'figma:asset/9b411be03d7c248381fb2b5c063b8ef8781ab484.png';
import gridImage from 'figma:asset/86011ab5ec0a4fb899981fe1facbe551fe81108d.png';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 bg-black overflow-hidden">
      {/* Grid Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <ImageWithFallback 
          src={gridImage} 
          alt="Grid Background" 
          className="w-full h-full object-cover object-bottom opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        
        <h1 className="mb-10 tracking-tight">
          <span className="block text-zinc-400 mb-4 md:text-[36px] tracking-[0.2em] font-light text-[24px] font-bold font-normal">거래가 신뢰를 통과하다</span>
          <span className="block text-white text-6xl md:text-8xl tracking-tighter font-black">DealPass</span>
        </h1>
        
        <p className="text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          혁신적 에스크로 시스템으로 디지털 거래를 안전하게 보호하며<br />
          방대한 거래 데이터를 실시간으로 분석하여 신뢰를 구축합니다.
        </p>
        
        <Link to="/categories">
          <Button className="bg-white hover:bg-zinc-100 text-black px-8 py-3 rounded-lg font-semibold shadow-2xl">
            시작하기
          </Button>
        </Link>
        
        <p className="mt-10 text-zinc-700 tracking-wide font-medium text-xs">
          신뢰할 수 있는 디지털 거래 플랫폼
        </p>
      </div>
    </section>
  );
}