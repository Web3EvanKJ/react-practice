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
// Capital in function name, return something(html), always return 1 parent element, use section/article, use <> </>, camelcase in HTML, always self-close html tags even thought the tags dont need closing tags

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

// Book List

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81X1plzH9DL._AC_UL900_SR900,600_.jpg"
    alt="Taylor Swift: A Little Golden Book Biography "
  />
);
const Title = () => <h2>Taylor Swift: A Little Golden Book Biography </h2>;
const Author = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5em",
  };
  return <h4 style={inlineHeadingStyles}>Wendy Loggia</h4>;
};

const Book = () => {
  return (
    <section className="book">
      <Image />
      <Title />
      <Author />
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
