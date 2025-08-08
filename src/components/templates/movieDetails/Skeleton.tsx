export const Skeleton = () => {
  return (
    <div className="py-14">
      <div className="flex flex-col md:flex-row w-full justify-around px-8 gap-10 max-w-[100rem] mx-auto items-center md:items-start">
        {/* Poster skeleton */}
        <div className="mb-2 w-60 mx-auto md:mx-0 md:w-1/4">
          <div className="bg-gray-300 animate-pulse rounded aspect-[2/3] w-full" />
        </div>

        {/* Mobile rating skeleton */}
        <div className="md:hidden flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-5 h-5 bg-gray-300 animate-pulse rounded-full"
            />
          ))}
        </div>

        {/* Content skeleton */}
        <div className="flex flex-col gap-2 w-full md:text-left text-center md:w-3/4 md:pl-10">
          <div className="flex items-center justify-between md:w-full w-fit mx-auto md:mx-0">
            <div className="bg-gray-300 animate-pulse h-8 w-48 rounded" />
            <div className="hidden md:flex gap-1">
              {/* Rating skeleton */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-5 h-5 bg-gray-300 animate-pulse rounded-full"
                />
              ))}
            </div>
          </div>

          {/* Movie details skeleton */}
          <div className="flex justify-between w-fit gap-3 items-center md:mx-0 mx-auto">
            <div className="bg-gray-300 animate-pulse h-4 w-16 rounded" />
            <div className="bg-gray-300 animate-pulse h-4 w-1 rounded" />
            <div className="bg-gray-300 animate-pulse h-4 w-12 rounded" />
            <div className="bg-gray-300 animate-pulse h-4 w-1 rounded" />
            <div className="bg-gray-300 animate-pulse h-4 w-20 rounded" />
          </div>

          <div className="bg-gray-300 animate-pulse h-4 w-3/4 rounded mx-auto md:mx-0" />

          <div className="mt-4 space-y-2  w-full">
            <div className="bg-gray-300 animate-pulse h-4 w-full rounded" />
            <div className="bg-gray-300 animate-pulse h-4 w-full rounded" />
            <div className="bg-gray-300 animate-pulse h-4 w-4/5 rounded mx-auto md:mx-0" />
            <div className="bg-gray-300 animate-pulse h-4 w-3/4 rounded mx-auto md:mx-0" />
          </div>
        </div>
      </div>
    </div>
  );
};
