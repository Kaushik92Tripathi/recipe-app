import Image from 'next/image';
import React from 'react';

const Homepage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-300 flex items-center justify-center p-4 sm:p-8">
            <main className="max-w-5xl w-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-10">
                <section className="text-center">
                    {/* Header with Animated Emoji */}
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-orange-700 flex items-center justify-center gap-2 mb-6">
                        <span className="hidden sm:inline">Welcome to Foodie's Paradise!</span>
                        <span className="sm:hidden">Foodie's Paradise!</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Discover mouth-watering recipes, expert cooking tips, and delightful food stories that inspire your culinary journey.
                    </p>

                    {/* Image Section */}
                    <div className="mt-8">
                        <Image
                            src="/food.jpeg"
                            alt="Delicious Food"
                            width={500}
                            height={300}
                            className="rounded-xl shadow-lg mx-auto w-full max-w-[600px] sm:max-w-[800px] hover:scale-105 transition-transform duration-300"
                            priority
                        />
                    </div>

                    {/* Call-to-Action */}
                    <div className="mt-8">
                        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all">
                            Explore Recipes 🍴
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Homepage;
