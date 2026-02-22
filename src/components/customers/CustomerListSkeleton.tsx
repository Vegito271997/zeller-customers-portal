export const CustomerListSkeleton = () => {
  return (
    <section aria-busy="true" aria-live="polite">
      <h2 className="text-lg sm:text-xl font-semibold mb-6">Loading Users</h2>

      <ul className="space-y-5 sm:space-y-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <li key={index} className="flex items-center gap-4 animate-pulse">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-gray-200" />

            <div className="space-y-2">
              <div className="h-4 w-32 bg-gray-200 rounded" />
              <div className="h-3 w-20 bg-gray-200 rounded" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
