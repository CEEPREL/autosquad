"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import categoriesData from "@/data/books.json";

// Helper scroll function
function scrollContainer(ref: HTMLDivElement, direction = "left") {
  if (!ref) return;
  const scrollAmount = 320; // px scroll per click
  if (direction === "left") {
    ref.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
    ref.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}

export default function BookCategories() {
  // refs per category to scroll their containers
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {categoriesData.map((category, idx) => (
        <section key={category.category} className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-[#b0460d] pb-2">
            {category.category}
          </h2>

          <div className="relative">
            {/* Left scroll button */}
            <button
              aria-label={`Scroll ${category.category} left`}
              onClick={() => {
                const ref = containerRefs.current[idx];
                console.log("Clicked left", ref);
                if (ref) scrollContainer(ref, "left");
              }}
              className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 bg-[#b0460d] text-white rounded-full w-10 h-10 shadow hover:bg-[#993b0c] z-20"
            >
              ◀
            </button>

            {/* Scroll container */}
            <div
              ref={(el) => {
                containerRefs.current[idx] = el;
              }}
              className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth py-2"
            >
              {category.books.map((book) => (
                <div
                  key={book.id}
                  className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md border border-gray-200 p-5 flex flex-col"
                >
                  <Image
                    className="w-full h-48 object-cover mb-4"
                    src={book.uri}
                    alt={book.title}
                    width={200}
                    height={300}
                    unoptimized
                    priority
                  />
                  <h3 className="text-xl font-semibold mb-1">{book.title}</h3>
                  <p className="text-sm text-gray-600 italic mb-2">
                    by {book.author} ({book.year})
                  </p>
                  <p className="text-gray-700 flex-grow">{book.description}</p>
                  <p className="mt-4 font-bold text-lg">
                    ₦{book.price.toFixed(2)}
                  </p>
                  <Link
                    href={`/learning-hub/checkout/${book.id}`}
                    className="mt-4 inline-block bg-[#b0460d] text-white text-center rounded-md px-4 py-2 hover:bg-[#993b0c] transition"
                  >
                    Buy Now
                  </Link>
                </div>
              ))}
            </div>

            {/* Right scroll button */}
            <button
              aria-label={`Scroll ${category.category} right`}
              onClick={() => {
                const ref = containerRefs.current[idx];
                if (ref) scrollContainer(ref, "right");
              }}
              className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 bg-[#b0460d] text-white rounded-full w-10 h-10 shadow hover:bg-[#993b0c] z-20"
            >
              ▶
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}
