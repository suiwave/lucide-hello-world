import { Beer, Trophy } from 'lucide-react';

// Usage
const App = () => {
    return <>
        <Beer color="orange" size={48} />
        <Beer color="orange" size={48} />
        <svg width="48" height="48">
            <defs>
                <linearGradient id="trophyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF5D4" />
                    <stop offset="20%" stopColor="#FFD700" />
                    <stop offset="40%" stopColor="#FFED4A" />
                    <stop offset="60%" stopColor="#FFB800" />
                    <stop offset="80%" stopColor="#FFD700" />
                    <stop offset="100%" stopColor="#FFF5D4" />
                </linearGradient>
                <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
                </linearGradient>
                <filter id="lighting1">
                    <feDiffuseLighting in="SourceGraphic" lightingColor="#FFE5B4" surfaceScale="5" diffuseConstant="1.5">
                        <fePointLight x="24" y="10" z="15" />
                    </feDiffuseLighting>
                    <feSpecularLighting in="SourceGraphic" lightingColor="#FFFFFF" surfaceScale="5" specularConstant="1.5" specularExponent="20">
                        <fePointLight x="24" y="5" z="20" />
                    </feSpecularLighting>
                    <feComposite in="SourceGraphic" operator="arithmetic" k1="1" k2="0.8" k3="0.2" k4="0" />
                    <feComponentTransfer>
                        <feFuncR type="linear" slope="1.2" intercept="-0.1" />
                        <feFuncG type="linear" slope="1.2" intercept="-0.1" />
                        <feFuncB type="linear" slope="1.2" intercept="-0.1" />
                    </feComponentTransfer>
                </filter>
            </defs>
            <Trophy
                color="orange"
                fill="url(#trophyGradient)"
                size={48}
            />
        </svg>
        <Beer color="orange" size={48} />
        <Beer color="orange" size={48} />
    </>;
};

export default App;