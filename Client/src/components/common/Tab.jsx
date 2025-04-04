export default function Tab({ tabData, field, setField }) {
    return (
        <div className="flex justify-center gap-4">
            {tabData.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setField(tab.type)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${field === tab.type
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                >
                    {tab.tabName}
                </button>
            ))}
        </div>
    );
}
