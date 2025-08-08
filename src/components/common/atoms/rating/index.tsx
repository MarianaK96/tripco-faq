import { IconProps, StarIcon } from "@phosphor-icons/react";

interface RatingProps extends IconProps {
  score: number;
}

export const Rating = ({ score, ...props }: RatingProps) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const isFull = index < Math.floor(score);
    const isHalf = index === Math.floor(score) && score % 1 >= 0.5;
    
    let weight: "fill" | "regular" | "duotone" = "regular";
    let className = "h-5 w-5 text-gray-400";
    
    if (isFull) {
      weight = "fill";
      className = "h-5 w-5 text-yellow-500";
    } else if (isHalf) {
      weight = "duotone";
      className = "h-5 w-5 text-yellow-500";
    }
    
    return (
      <StarIcon
        key={index}
        weight={weight}
        color={"orange"}
        size={48}
        className={className}
        {...props}
      />
    );
  });

  return (
    <div 
      className="flex items-center" 
      role="img" 
      aria-label={`Rating: ${score} out of 5 stars`}
    >
      {stars.map((star, index) => (
        <span key={index} aria-hidden="true">
          {star}
        </span>
      ))}
    </div>
  );
};
