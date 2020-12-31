const BookCard = ({ id, title, description, authors, image, link, saved }) => {
  return (
    <div className="card mx-5 my-3">
      <div className="card-body">
        <a href="link">
          <h2>{title}</h2>
        </a>
        <a href={link} target="_blank" rel="noreferrer">
          <h5>View</h5>
        </a>
        <a href="link">
          <h5>Save</h5>
        </a>
        <span>{authors.join()}</span>
        <p>{description ?? ""}</p>
        <img src={image} alt={title + " Cover Image"} />
      </div>
    </div>
  );
};

export default BookCard;
