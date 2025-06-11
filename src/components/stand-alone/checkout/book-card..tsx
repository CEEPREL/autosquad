"use client";

import Image from "next/image";

interface BookCardProps {
  title: string;
  author: string;
  year: number;
  description: string;
  price: number;
  id: number;
  imageUrl: string;
  onCheckout?: () => void;
}

export default function BookCard({
  title,
  author,
  year,
  description,
  price,
  imageUrl,
  id,
}: BookCardProps) {
  return (
    <div
      key={id}
      className="w-full min-h-[60vh] max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition flex flex-col md:flex-row"
    >
      {/* Image Side */}
      <div className="relative w-full md:w-1/2 h-72 md:h-auto">
        <Image
          src={imageUrl}
          alt={`Cover of ${title}`}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Details Side */}
      <div className="p-6 flex flex-col justify-between md:w-1/2">
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-1 italic">
            {author} ({year})
          </p>
          <p className="text-gray-700 text-sm mb-4">{description}</p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-semibold text-[#b0460d]">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
