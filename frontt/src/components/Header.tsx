import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from 'figma:asset/9b411be03d7c248381fb2b5c063b8ef8781ab484.png';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-900">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ImageWithFallback 
              src={logoImage} 
              alt="DealPass Logo" 
              className="w-7 h-7 object-contain"
            />
            <span className="text-base text-white font-bold tracking-tight">DealPass</span>
          </div>
        </div>
      </div>
    </header>
  );
}