import { Frown } from "lucide-react";

const App = () => (
    <div className="flex flex-col gap-2">
        <input
            type="text"
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="パスワードを入力"
        />
        <div className="flex items-center gap-2 bg-red-200 rounded px-2 py-1 w-fit">
            <Frown
                className="w-6 h-6"
                color="black"
                strokeWidth={1}
                style={{
                    fill: "url(#bluePurpleGradient)",
                }}
            />
            <span>パスワードが簡単すぎます</span>
            <Frown
                className="w-6 h-6"
                color="black"
                strokeWidth={1}
                style={{
                    fill: "url(#bluePurpleGradient)",
                }}
            />
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="bluePurpleGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#AE5EFC" />
                        <stop offset="100%" stopColor="#8ec5fc" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    </div>
);

export default App;
