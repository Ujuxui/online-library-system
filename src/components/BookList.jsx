import React from "react";
import { Link } from "react-router-dom";

function BookList({ books }) {
  return (
    <>
      <ul className="grid grid-cols-4 p-8">
        {books.map((book) => (
          <li
            key={book.id}
            className="justify-between items-center text-center mt-4 bg-gray-100 p-4 rounded-md shadow  w-60 h-66 max-w-full mx-auto mb-4 scale-100 hover:scale-110"
          >
            <Link to={`/book/${book.id}`}>
              {book.title} by {book.author} ({book.publication_year})
            </Link>
            <img
              src={book.cover_image}
              alt={book.title}
              style={{ width: "200px", height: "150px", marginTop: "10px" }}
            />
            <Link
              to={`/book/${book.id}`}
              className="text-orange-600 text-sm hover:underline"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BookList;
