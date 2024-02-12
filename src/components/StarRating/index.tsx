"use client";
import { FaStar } from "react-icons/fa";

export default function StarRating({ rating }: { rating: number }) {
  const noOfStars = 5;

  return (
    <div className="star-rating flex gap-2 items-center">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= rating ? "text-[#FFC107]" : "text-[#D9D9D9]"}
            size={12}
          />
        );
      })}
    </div>
  );
}
