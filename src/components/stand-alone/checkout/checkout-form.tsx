"use client";

import { useState } from "react";

export default function CheckoutForm({ bookTitle }: { bookTitle: string }) {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${fullName}! We’ll send ${bookTitle} to ${email}.`);
    setEmail("");
    setFullName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 flex md:flex-row flex-col md:items-center item-left w-full md:gap-4"
    >
      <div>
        <label className="block text-sm font-medium">Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="mt-1 block h-12 w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <div>
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
        className="bg-[#b0460d] h-12 text-white px-4 py-2 rounded-md hover:bg-[#993b0c] transition text-sm"
      >
        Check Out
      </button>
    </form>
  );
}
