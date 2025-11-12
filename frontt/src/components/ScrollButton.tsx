import { ChevronDown } from "lucide-react";

export function ScrollButton() {
  const scrollToNext = () => {
    const sections = Array.from(document.querySelectorAll('section'));
    const viewportHeight = window.innerHeight;
    
    // Find current section based on viewport position
    let currentSectionIndex = -1;
    
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      // If section is in view (top is above middle of screen)
      if (rect.top <= viewportHeight / 2 && rect.bottom > viewportHeight / 2) {
        currentSectionIndex = i;
        break;
      }
    }
    
    // If no section found, use first section in viewport
    if (currentSectionIndex === -1) {
      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top >= 0) {
          currentSectionIndex = i - 1;
          break;
        }
      }
    }
    
    // Scroll to next section
    const nextIndex = currentSectionIndex + 1;
    if (nextIndex < sections.length) {
      sections[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      onClick={scrollToNext}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 group"
      aria-label="다음 섹션으로 이동"
    >
      <div className="relative">
        {/* Outer glow ring */}
        <div className="absolute inset-0 bg-white/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
        
        {/* Button container */}
        <div className="relative bg-gradient-to-br from-white to-zinc-300 p-[1.5px] rounded-full">
          <div className="bg-black rounded-full p-2.5 group-hover:bg-zinc-900 transition-all duration-300">
            <ChevronDown className="w-5 h-5 text-white group-hover:translate-y-0.5 transition-transform duration-300" />
          </div>
        </div>
        
        {/* Pulse ring animation - removed */}
      </div>
    </button>
  );
}