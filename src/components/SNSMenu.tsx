import { Menu, HandHeart, Handshake, ThumbsUp } from "lucide-react";

const actions = [
    { icon: ThumbsUp, label: "いいね", color: "text-blue-500" },
    { icon: Handshake, label: "フォロー", color: "text-green-500" },
    { icon: HandHeart, label: "支援する", color: "text-pink-500" },
];

const App = () => (
    <div className="bg-gray-100 h-50 p-6">
        <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto">
            <div className="flex items-center justify-between mb-4">
                <Menu className="text-gray-700 w-8 h-8 cursor-pointer hover:text-gray-900 transition-colors" />
            </div>           {actions.map(({ icon: Icon, label, color }, index) => (
                <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                >
                    <Icon className={`${color} w-6 h-6`} />
                    <span className="text-gray-700 font-medium">{label}</span>
                </div>
            ))}
        </div>
    </div>

);

export default App;
