import React from "react";

const Hero = () => {
  return (
    <div
      className="hero bg-cover bg-center h-screen flex flex-col justify-center items-center text-white w-full"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), 
        url('https://img.freepik.com/free-photo/large-collection-old-books-wooden-shelves-generated-by-ai_188544-29739.jpg?t=st=1742729616~exp=1742733216~hmac=9c1ea432ba4f3db5315514d5c5d1484407c39de29d4e3288057c85e8d0eed9aa&w=1380')`,
      }}
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Welcome to OLS!</h1>
        <h2 className="text-4xl mb-6">Your all-in-one library.</h2>
        <p className="text-lg">
          Register now for unlimited access to 300,000+ e-books and resources.
        </p>
      </div>
    </div>
  );
};

export default Hero;
