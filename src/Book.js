const Book = ({ img, title, author, index /* getBook, id  */ }) => {
  // const displayTitle = () => {
  //   console.log(title);
  // };
  // const getSingleBook = () => {
  //   getBook(id);
  // };
  return (
    <section className="book">
      {/* <EventExamples /> */}
      <img src={img} alt={title}></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* <button
          onClick={
            getSingleBook () => {
              getBook(id);
            }
          }
        >
          Get Book
        </button> */}
      {/* <p>{let x = 6}</p> Not an expression */}
      <span className="number">{`# ${index + 1}`}</span>
    </section>
  );
};

export default Book;
