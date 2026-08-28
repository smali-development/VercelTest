// src/app/page.tsx
export default function HomePage() {
  return (
    <div>
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-4">
        Welcome to the Home Page
      </h2>
      <p className="text-gray-600 leading-relaxed">
        This is the main dashboard landing view. Notice how navigating to the 
        About page via the sidebar is instantaneous and doesn't trigger a heavy page refresh.
      </p>
    </div>
  );
}