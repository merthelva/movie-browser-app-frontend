import { useState } from "react";

const useImageGallery: (
  images: string[]
) => [number, VoidFunction, VoidFunction] = (images) => {
  const [displayedImageIndex, setDisplayedImageIndex] = useState<number>(0);

  const handleMoveToPrevImage = () => {
    setDisplayedImageIndex((prevIndex) => {
      if (prevIndex === 0) return images.length - 1;
      return prevIndex - 1;
    });
  };

  const handleMoveToNextImage = () => {
    setDisplayedImageIndex((prevIndex) => {
      if (prevIndex === images.length - 1) return 0;
      return prevIndex + 1;
    });
  };

  return [displayedImageIndex, handleMoveToPrevImage, handleMoveToNextImage];
};

export default useImageGallery;
