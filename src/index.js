import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { books } from "./books";
// import books from "./books";
import Book from "./Book";

// const Greeting = function () {
//   return (
//     <>
//       <div className="div1">
//         <h2>My First Component</h2>
//         <ul>
//           <li>
//             <a href="#">Li</a>
//           </li>
//         </ul>
//       </div>
//       <h2>Hello World!</h2>
//       <input type="text" name="" id="" />
//     </>
//   );
// };

// Preferred to use above way
// Capital in function name, return something(html), always return 1 parent element, use section/article, use <h2> </>, camelcase in HTML, always self-close html tags even thought the tags dont need closing tags

// const Greeting = function () {
//   return React.createElement("h2", {}, "Hello World");
// };

// Nesting Elements
const Person = () => <h2>Evan Keane</h2>;
const Message = () => <p>This is my message</p>;

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

// const names = ["john", "peter", "susan"];
// const NeatNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });
// console.log(NeatNames);

/* const EventExamples = () => {
  //   const handleFormInput = (e) => {
  //   // console.log(e);
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  //   console.log("Handle Form Input");
  // };
  // const handleButtonClick = () => {
  //   alert("Handle Button Click");
  // };
  // const handleFormSubmission = (e) => {
  //   e.preventDefault();
  //   console.log("Form Submitted");
  // };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={() => console.log("Click Me")}>Click Me</button>
    </section>
  );
}; */

// Book List

const BookList = () => {
  // const someValue = "shakeAndBake";
  // const displayValue = () => {
  //   console.log(someValue);
  // };
  // const getBook = (id) => {
  //   const book = books.find((book) => {
  //     return book.id === id;
  //   });
  //   console.log(book);
  // };
  return (
    <>
      <h1 className="title">Our Bestseller Books!</h1>
      <section className="booklist">
        {/* <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
          commodi repellat quis consequatur quae officiis hic temporibus
          consectetur nostrum laboriosam culpa ipsam inventore doloribus libero
          voluptatem perspiciatis, id quibusdam incidunt?
        </p>
        <button>Click Me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      /> */}
        {books.map((book, index) => {
          return (
            <Book
              {...book}
              key={book.id}
              index={index}
              // displayValue={displayValue}
              // getBook={getBook}
            />
          );
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
