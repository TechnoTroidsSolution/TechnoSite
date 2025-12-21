'use client';

// Client-side decorative animations for hero section
export default function HeroDecorations() {
    return (
        <>
            {/* Animated Decorative Elements - Left Side - COLORFUL */}
            <div className="absolute top-[15%] left-[5%] w-20 h-20 opacity-40">
                <div className="grid grid-cols-4 gap-1.5">
                    <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse"></div>
                    <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                    <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
                    <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                    <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                    <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse" style={{ animationDelay: '1.1s' }}></div>
                    <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
                    <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse" style={{ animationDelay: '1.3s' }}></div>
                    <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse" style={{ animationDelay: '1.4s' }}></div>
                    <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
            </div>

            {/* X mark - Top Center - CYAN */}
            <div className="absolute top-[12%] left-[35%] text-[var(--accent)] text-3xl font-bold animate-pulse opacity-30">×</div>

            {/* Triangle - Top Right - PRIMARY BLUE */}
            <div className="absolute top-[10%] right-[20%] w-0 h-0 border-l-20 border-l-transparent border-r-20 border-r-transparent border-b-35 border-b-[var(--primary)] opacity-30 animate-bounce" style={{ animationDuration: '3s' }}></div>

            {/* Circle - Left Side - ACCENT */}
            <div className="absolute top-[50%] left-[8%] w-12 h-12 border-3 border-[var(--accent)] rounded-full opacity-40 animate-pulse"></div>

            {/* Square - Bottom Center - PRIMARY */}
            <div className="absolute bottom-[15%] left-[42%] w-10 h-10 border-2 border-[var(--primary)] rotate-45 opacity-30 animate-spin" style={{ animationDuration: '8s' }}></div>

            {/* Circle - Bottom Right - GRADIENT RING */}
            <div className="absolute bottom-[20%] right-[25%] w-16 h-16 rounded-full opacity-40 animate-pulse border-3 border-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-border" style={{ animationDelay: '1s' }}></div>
        </>
    );
}
