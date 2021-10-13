// import { useEffect, useState } from "react";
// import { getAllBooks } from "../services";
import Book from "../components/Book";

const Home = () => {
//   const [books, setBooks] = useState([]);
//   useEffect(() => {
//     getAllBooks().then((gottenBooks) => setBooks(gottenBooks));
//   }, []);

  return (
    <section>
    <h3>Goal Planner</h3>
    <div>
        {/* {books.map((book) => (
            <Book key={book._id} book={book}/>
        ))} */}
    </div>
      
    </section>
  );
};

export default Home;