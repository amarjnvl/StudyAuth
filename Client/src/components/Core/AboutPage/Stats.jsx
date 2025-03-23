import React from 'react';

// Stats Data
const Stats = [
    { count: "5K+", label: "Active Students" },
    { count: "10+", label: "Mentors" },
    { count: "200+", label: "Courses" },
    { count: "50+", label: "Awards" },
];

const StatsComponent = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-6">
                {/* Stats Container */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {Stats.map((data, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                            <h1 className="text-4xl font-bold text-indigo-600">{data.count}</h1>
                            <h2 className="text-gray-700 mt-2 text-lg">{data.label}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StatsComponent;
