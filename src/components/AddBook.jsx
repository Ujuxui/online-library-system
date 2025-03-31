import { useState } from "react";
import { useDispatch} from "react-redux";
import { addBook } from "../utils/bookSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    rating: "",
    category: "",
    publication_year: "",
    image: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...book, id: Date.now() }));
    setBook({
      title: "",
      author: "",
      description: "",
      rating: "",
      category: "",
      publication_year: "",
      image: "",
    });

    navigate("/browsebooks");
  };

  return (
    <div className="addbook flex flex-col items-center min-h-screen">
      <h1 className="py-8 text-3xl font-semibold text-gray-700">
        Add a new book
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
          <label htmlFor="title" className="block font-medium text-gray-700">
            Book Title:{" "}
          </label>
          <input
            type="text"
            placeholder="Add Title"
            id="title"
            name="title"
            className="border rounded w-full p-2 shadow-md"
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
            required
          />
          <br />
          <label htmlFor="author" className="block font-medium text-gray-700">
            Author:{" "}
          </label>
          <input
            type="text"
            placeholder="Add Author"
            id="author"
            name="author"
            className="border rounded w-full p-2 shadow-md"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
            required
          />
          <br />
          <label
            htmlFor="description"
            className="block font-medium text-gray-700"
          >
            Description:{" "}
          </label>
          <textarea
            type="text"
            placeholder="Add Description"
            id="description"
            name="description"
            className="border rounded w-full p-3 shadow-md"
            value={book.description}
            onChange={(e) => setBook({ ...book, description: e.target.value })}
            required
          ></textarea>
          <br />
          <label htmlFor="rating" className="block font-medium text-gray-700">
            Rating:{" "}
          </label>
          <input
            placeholder="Add Rating"
            id="rating"
            name="rating"
            className="border rounded w-full p-3 shadow-md"
            value={book.rating}
            onChange={(e) => setBook({ ...book, rating: e.target.value })}
            required
          />
          <br />
          <label htmlFor="category" className="block font-medium text-gray-700">
            Category:{" "}
          </label>
          <input
            type="text"
            placeholder="Add Category"
            id="category"
            name="category"
            className="border rounded w-full p-3 shadow-md"
            value={book.category}
            onChange={(e) => setBook({ ...book, category: e.target.value })}
            required
          />
          <br />
          <label htmlFor="publication_year" className="block font-medium text-gray-700">
            Publication Year:
          </label>
          <input
            type="number"
            placeholder="Add Publication Year"
            name="publication_year"
            className="border rounded w-full p-3 shadow-md"
            value={book.publication_year}
            onChange={(e) => setBook({ ...book, publication_year: e.target.value })}
          />
          <br />
          <label htmlFor="image" className="block font-medium text-gray-700">
            Image URL:
          </label>
          <input
            type="text"
            placeholder="Add Image"
            name="Image"
            value={book.image}
            className="border rounded w-full p-3 shadow-md"
            onChange={(e) => setBook({ ...book, image: e.target.value })}
          />

          <button
            type="submit"
            className="rounded bg-orange-600 text-white py-3 px-6 mt-12 mb-8 scale-95 hover:scale-105 "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
