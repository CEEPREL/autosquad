// Helper to search for a book by ID
import categoriesData from "@/data/books.json";
export function getBookById(id: number) {
  for (const category of categoriesData) {
    const book = category.books.find((b) => b.id === id);
    if (book) return book;
  }
  return null;
}
