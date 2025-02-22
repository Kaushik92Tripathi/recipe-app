
// app/recipes/loading.js
export default function Loading() {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-1/4"></div>
        <div className="border rounded-xl overflow-hidden">
          <div className="h-12 bg-gray-100"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-50 border-t"></div>
          ))}
        </div>
      </div>
    );
  }