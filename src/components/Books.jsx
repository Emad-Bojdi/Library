import "./Books.css";
import { books as bookData } from "../constants/mockData";
import { Search } from "./Search";
import { BookCard } from "./BookCard";
import { useState } from "react";
export const Books = () => {
  const [books, setBooks] = useState(bookData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);

  const handleLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  const searchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      console.log(newBooks)
      setBooks(newBooks);
    } else {
      setBooks(bookData);
    }
  };
  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className="Main">
        <div className="Container">
          {books.map((book) => (
            <BookCard
              key={book.id}
              data={book}
              handleLikedList={handleLikedList}
              style={liked.length ? { width: "95%" } : { width: "100%" }}
            />
          ))}
        </div>
        {!!liked.length && (
          <div className="Favorite">
            <h2 className="">Favorites</h2>
            {liked.map((book) => (
              <div className="Info" key={book.id}>
                <img src={book.image} alt={book.title} className="" />
                <h3 className="">{book.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
