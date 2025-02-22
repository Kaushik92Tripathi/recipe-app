
// app/recipes/page.js
import { Suspense } from 'react';
import Loading from './loading';

async function getRecipes() {
  try {
    const res = await fetch('https://dummyjson.com/recipes', {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!res.ok) throw new Error('Failed to fetch recipes');
    
    const data = await res.json();
    return data.recipes.slice(0, 10);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
}

export default async function RecipesPage() {
  const recipes = await getRecipes();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-orange-700">
          Popular Recipes
        </h1>
        <span className="text-gray-500">Showing top 10 recipes</span>
      </div>

      <Suspense fallback={<Loading />}>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-orange-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Prep Time</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Servings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recipes.map((recipe) => (
                  <tr 
                    key={recipe.id}
                    className="hover:bg-orange-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-gray-500">{recipe.id}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{recipe.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {recipe.prepTimeMinutes ? `${recipe.prepTimeMinutes} mins` : 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{recipe.servings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Suspense>
    </div>
  );
}