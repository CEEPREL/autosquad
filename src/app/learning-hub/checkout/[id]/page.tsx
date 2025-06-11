// app/checkout/[id]/page.tsx

import BookCard from "@/components/stand-alone/checkout/book-card.";
import CheckoutForm from "@/components/stand-alone/checkout/checkout-form";
import Checkout from "@/components/stand-alone/checkout/checkout";
import { getBookById } from "@/utils/helper";

// This matches your format
export type ParamsType = Promise<{ id: string }>;

export default async function Page({ params }: { params: ParamsType }) {
  try {
    const { id } = await params;
    const bookId = Number(id);

    if (isNaN(bookId)) {
      throw new Error("Invalid ID format.");
    }

    const book = await getBookById(bookId);

    if (!book) {
      throw new Error("Book not found.");
    }

    return (
      <div className="p-10 min-h-[62vh] flex flex-col justify-center md:items-center">
        <BookCard
          id={book.id}
          title={book.title}
          author={book.author}
          year={book.year}
          description={book.description}
          price={book.price}
          imageUrl={book.uri}
        />
        <Checkout>
          <CheckoutForm bookTitle={book.title} />
        </Checkout>
      </div>
    );
  } catch (error: any) {
    return (
      <div className="p-10 min-h-[62vh] text-red-600">
        Error: {error.message || "Something went wrong."}
      </div>
    );
  }
}
