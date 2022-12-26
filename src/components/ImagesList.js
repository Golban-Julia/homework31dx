import { useState, useEffect } from "react";
import axios from "axios";

const ImagesList = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [activePage, setActivePages] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://picsum.photos/v2/list?page=${activePage}&limit=10`)
      .then((response) => response.data)
      .then((data) => {
        setImages((allImages) => [...allImages, ...data]);
        setLoading(false);
      });
  }, [activePage]);

  const handleShowMore = () => {
    setActivePages((mainPage) => mainPage + 1);
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>Image Gallery</h1>
      <ul>
        {images.map(({ id, download_url, author }) => (
          <li key={id}>
            <img alt={author} src={download_url} />
          </li>
        ))}
      </ul>
      <div className="btn">
        <button type="submit" onClick={handleShowMore}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default ImagesList;
