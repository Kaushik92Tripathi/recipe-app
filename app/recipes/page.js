// app/recipes/page.js
import React from 'react';

async function getRecipes() {
    const res = await fetch('https://dummyjson.com/recipes');
    if (!res.ok) {
        throw new Error('Failed to fetch recipes');
    }
    const data = await res.json();
    return data.recipes.slice(0, 10);
}

const RecipesPage = async () => {
    const recipes = await getRecipes();

    return (
        <div className="max-w-7xl mx-auto p-8 bg-white rounded-xl shadow-lg my-6">
            <h1 className="text-3xl font-bold text-orange-600 mb-6">🍛 Top 10 Recipes</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
                    <thead className="bg-orange-500 text-white">
                        <tr>
                            <th className="py-3 px-4 border">ID</th>
                            <th className="py-3 px-4 border">Name</th>
                            <th className="py-3 px-4 border">Prep Time (Minutes)</th>
                            <th className="py-3 px-4 border">Servings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipes.map((recipe) => (
                            <tr key={recipe.id} className="hover:bg-orange-100 transition">
                                <td className="py-2 px-4 border text-center">{recipe.id}</td>
                                <td className="py-2 px-4 border">{recipe.name}</td>
                                <td className="py-2 px-4 border text-center">{recipe.prepTimeMinutes || 'N/A'}</td>
                                <td className="py-2 px-4 border text-center">{recipe.servings}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecipesPage;
