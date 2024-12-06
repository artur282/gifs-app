import { useEffect, useState } from "react";
import getGits from "../helpers/GetGits";
import GifItems from "./GifItems";

export const GitGrid = ({ categorias }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGits(categorias);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);
  return (
    <>
      <div className="card-grid">
        {images.map((image) => (
          <GifItems key={image.id} image={image}></GifItems>
        ))}
      </div>
    </>
  );
};

export default GitGrid;
