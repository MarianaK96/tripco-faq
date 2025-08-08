const cardSkeleton = (
  <div className="w-96 mb-2 animate-pulse py-2">
    <div className="h-48 bg-gray-300 rounded-md mb-4" />
    <div className="h-6 bg-gray-300 rounded-md mb-2 w-3/4" />
    <div className="h-6 bg-gray-300 rounded-md mb-2 w-1/2" />
  </div>
);
export const Skeleton = () => {
  return (
    <div className="py-4">
      {/* Genre title skeleton */}
      <div className="h-12 bg-gray-300 rounded-md mb-2 w-1/4" />
      <div className="flex gap-4">
        {/* Movie card skeletons */}
        {cardSkeleton}
        {cardSkeleton}
        {cardSkeleton}
      </div>
    </div>
  );
};
