
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const SolarTechAnimation = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === 'dark';

    return (
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            {/* Background Glow */}
            <div className={`absolute inset-0 rounded-full blur-[100px] opacity-20 ${isDark ? 'bg-amber-500' : 'bg-amber-400'
                }`} />

            {/* Main Container */}
            <div className="relative w-full h-full flex items-center justify-center animate-float">

                {/* Orbital Ring 1 - Slow */}
                <div className="absolute w-[80%] h-[80%] rounded-full border border-primary/20 animate-spin-slow">
                    <div className="absolute top-1/2 -right-2 w-4 h-4 rounded-full bg-primary blur-[1px]" />
                    <div className="absolute bottom-0 left-1/2 w-4 h-4 rounded-full bg-orange-500 blur-[2px]" />
                </div>

                {/* Orbital Ring 2 - Medium (Reverse) */}
                <div className="absolute w-[60%] h-[60%] rounded-full border border-primary/30 animate-spin-reverse-slower">
                    <div className="absolute top-0 right-1/2 w-3 h-3 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50" />
                </div>

                {/* Orbital Ring 3 - Fast (Tilted axis illusion via scale) */}
                <div className="absolute w-[90%] h-[40%] rounded-full border border-primary/10 animate-spin-slow rotate-45" />

                {/* Core Sun */}
                <div className="relative flex items-center justify-center">
                    {/* Outer Corona */}
                    <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-amber-300 to-orange-600 opacity-20 animate-pulse-glow blur-md" />

                    {/* Inner Core */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-amber-600 shadow-2xl shadow-orange-500/50 relative overflow-hidden">
                        {/* Tech Grid Overlay inside Sun */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />

                        {/* Shine Reflection */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent opacity-50" />
                    </div>

                    {/* Logo Icon Overlay (Optional, gives brand identity) */}
                    {/* <div className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0">E</div> */}
                </div>

                {/* Floating Particles */}
                <div className="absolute top-20 right-20 w-2 h-2 bg-primary rounded-full animate-ping" />
                <div className="absolute bottom-20 left-20 w-3 h-3 bg-orange-400 rounded-full animate-bounce delay-700" />
                <div className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse" />

            </div>
        </div>
    );
};

export default SolarTechAnimation;
