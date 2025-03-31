import React from "react";
import { useParams } from "react-router-dom";
import { booksData } from "../utils/Mockdata";

const BookDetails = () => {
  const { id } = useParams();
  const book = booksData.find((item) => item.id === parseInt(id));

  if (!book) {
    return <h2>Book not found!</h2>;
  }

  return (
    <>
      <div className="text-center p-12">
        <h2 className="text-2xl text-orange-700 font-medium mb-4">
          {book.title}
        </h2>
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>Publication Year:</strong> {book.publication_year}
        </p>
        <p>
          <strong>Categories:</strong> {book.category}
        </p>
        <p className="mb-4">
          <strong>Description:</strong> {book.description}
        </p>
        <img
          src={book.cover_image}
          alt={book.title}
          className="mx-auto w-60 h-60"
        />
      </div>
      <a href="/browsebooks" className="ml-12">
        &#9664; Back to Browse
      </a>
    </>
  );
};

export default BookDetails;
