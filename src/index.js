import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

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

const books = [
  {
    author: "Wendy Loggia",
    title: "Taylor Swift: A Little Golden Book Biography",
    img: "https://images-na.ssl-images-amazon.com/images/I/81X1plzH9DL._AC_UL900_SR900,600_.jpg",
    id: 1,
  },
  {
    author: "Ramit Sethi",
    title:
      "I Will Teach You to Be Rich: No Guilt. No Excuses. Just a 6-Week Program That Works (Second Edition)",
    img: "https://images-na.ssl-images-amazon.com/images/I/71zwHcw-D7L._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];

// const names = ["john", "peter", "susan"];
// const NeatNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });
// console.log(NeatNames);

const Book = ({ img, title, author }) => {
  return (
    <section className="book">
      <EventExamples />
      <img src={img} alt={title}></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* <p>{let x = 6}</p> Not an expression */}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = () => {
    console.log("Handle Form Input");
  };
  const handleButtonClick = () => {
    alert("Handle Form Input");
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>Click Me</button>
    </section>
  );
};

// Book List

const BookList = () => {
  return (
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
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
