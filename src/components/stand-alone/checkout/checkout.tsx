import React from "react";

export default function Checkout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white max-w-5xl md:w-[80%] rounded-md shadow-md p-8">
      {children}
    </div>
  );
}
