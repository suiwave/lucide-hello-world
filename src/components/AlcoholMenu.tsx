
import { Beer, BeerOff } from "lucide-react";

const App = () => (
    <div className="bg-gray-100 p-6 flex flex-col gap-6">
        <div className="flex gap-4 mx-auto">
            <button className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition-colors">
                <Beer className="w-5 h-5" />
                <span>パーッと行く</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-400 transition-colors">
                <BeerOff className="w-5 h-5" />
                <span>今日は我慢する</span>
            </button>
        </div>
    </div>
);

export default App;
