import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { booksData } from "../utils/Mockdata";
import BookList from "./BookList";
import { useSelector } from "react-redux";

const BrowseBooks = () => {
  const { category } = useParams();
  const [searchText, setSearchText] = useState("");
  const books = useSelector((state) => state.books.list);
  const [filteredBooks, setFilteredBooks] = useState([]);
 

//   Category filtering
  useEffect(() => {
    setFilteredBooks(
      category
        ? [...booksData, ...books].filter(
            (book) =>
              book.category.toLowerCase() === category.toLowerCase()
          )
        : [...booksData, ...books]
    );
  }, [category, books]);

  console.log("redux books state:", books );

// Handling Search
  const handleSearch = () => {
    const filtered = booksData.filter(
      (book) =>
        book.title.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      {/* Search Functionality */}
      <div className="flex justify-center mt-12">
        <input
          type="text"
          placeholder="Enter book or author name"
          className="border rounded w-120 p-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          required
        />
        <button
          className="ml-4 rounded bg-orange-400 text-white text-sm w-32 scale-100 hover:scale-105"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

{/* Categories listing */}
      <div className="flex justify-center gap-4 mt-6">
        <span className="text-md flex justify-center item-center">
          Categories:{" "}
        </span>
        <Link
          to="/browsebooks"
          className="text-orange-500 px-2 rounded-lg cursor-pointer hover:underline scale-95 hover:scale-105"
        >
          All
        </Link>
        <Link
          to="/browsebooks/classic"
          className=" text-orange-500 px-2 rounded-lg cursor-pointer hover:underline scale-95 hover:scale-105"
        >
          Classic
        </Link>
        <Link
          to="/browsebooks/fiction"
          className=" text-orange-500 px-2 rounded-lg cursor-pointer hover:underline scale-95 hover:scale-105"
        >
          Fiction
        </Link>
        <Link
          to="/browsebooks/romance"
          className=" text-orange-500 px-2 rounded-lg cursor-pointer hover:underline scale-95 hover:scale-105"
        >
          Romance
        </Link>
        <Link
          to="/browsebooks/fantasy"
          className=" text-orange-500 px-2 rounded-lg cursor-pointer hover:underline scale-95 hover:scale-105"
        >
          Fantasy
        </Link>
      </div>

      <BookList books={filteredBooks} />
      <button className="flex rounded bg-orange-500 p-3 text-white mx-auto scale-100 hover:scale-110">
        Show more
      </button>
    </div>
  );
};

export default BrowseBooks;
