"use client";

import { Dispatch, SetStateAction, useState } from "react";

export default function CheckoutForm({
  onSubmit,
}: {
  onSubmit: (
    email: string,
    fullName: string,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) => void;
}) {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, fullName, setLoading);
    setEmail("");
    setFullName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 flex  flex-col md:items-center item-left w-full md:gap-4"
    >
      <div className="w-full">
        <label className="block text-sm font-medium">Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="mt-1 block h-12 w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <div className="w-full">
        <label className="block text-sm font-medium">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full h-12 border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="bg-[#b0460d] w-full h-12 text-white px-4 py-2 rounded-md hover:bg-[#993b0c] transition text-sm"
      >
        {loading ? "Loading... " : "Checkout"}
      </button>
    </form>
  );
}
