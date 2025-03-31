import React from "react";
import { Link } from "react-router-dom";
import Hero from "./HeroSection";
import cover_1984 from "../assets/cover_1984.png";
import cover_tokillamockingbird from "../assets/cover_tokillamockingbird.png";
import cover_prideandprejudice from "../assets/cover_prideandprejudice.png";
import cover_thegreatgatsby from "../assets/cover_thegreatgatsby.png";

function HomePage() {
  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Classic",
    "Mystery",
    "Biography",
    "Romance",
    "Others",
  ];

  const popularBooks = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      cover: cover_tokillamockingbird,
    },
    { id: 2, title: "1984", author: "George Orwell", cover: cover_1984 },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      cover: cover_prideandprejudice,
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      cover: cover_thegreatgatsby,
    },
  ];

  return (
    <div>
      <Hero />
      <div className="mt-6 p-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Categories</h3>
          <ul className="flex mb-12">
            {categories.map((category, index) => (
              <li
                key={index}
                className="mx-auto mt-4 border bg-white text-orange-500 py-2 px-6 rounded-lg"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Popular Books</h3>
          <ul className="grid grid-cols-4 space-y-2">
            {popularBooks.map((book) => (
              <li
                key={book.id}
                className="justify-between items-center text-center mt-4 bg-gray-100 p-4 rounded-md shadow  w-60 h-80 max-w-full mx-auto mb-4 scale-100 hover:scale-110"
              >
                <span>
                  {book.title} by {book.author}
                </span>
                <br />
                <img
                  img
                  src={book.cover}
                  alt={book.title}
                  style={{ width: "220px", height: "220px", marginTop: "10px" }}
                />
                <Link
                  to={`/book/${book.id}`}
                  className="text-sm text-orange-600 hover:underline"
                >
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
