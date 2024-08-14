import { IoMdHeart } from "react-icons/io";
import { useState } from "react";


export const BookCard = ({data , handleLikedList,style}) => {
  const {image, title, author, language, pages} = data;

  const [like,setLike] = useState(false);

  const likeHandler = () => {
    handleLikedList(data,like);
    setLike(!like);
  }
  return (
    <>
      <div
        className="BookCard"
        style={style}
      >
        <div className="Image">
          <img src={image} alt="a picture!" />
        </div>
        <div className="Detail">
          <h1 className="Details">{title}</h1>
          <h3 className="Details">{author}</h3>
          <div className="BookData">
            <p className="Details">{language}</p>
            <p className="Details">{pages} pages</p>
          </div>
        </div>
        <button className="Parent" onClick={likeHandler}>
          <IoMdHeart
            className="Like"
            style={like ? { color: "red" } : { color: "white" }}
          />
        </button>
      </div>
    </>
  );
};
