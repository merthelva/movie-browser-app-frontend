import { useCallback, useState } from "react";

const useImageGallery: (
  images: string[]
) => [number, VoidFunction, VoidFunction] = (images) => {
  const [displayedImageIndex, setDisplayedImageIndex] = useState<number>(0);

  const handleMoveToPrevImage = useCallback(() => {
    setDisplayedImageIndex((prevIndex) => {
      if (prevIndex === 0) return images.length - 1;
      return prevIndex - 1;
    });
  }, [images.length]);

  const handleMoveToNextImage = useCallback(() => {
    setDisplayedImageIndex((prevIndex) => {
      if (prevIndex === images.length - 1) return 0;
      return prevIndex + 1;
    });
  }, [images.length]);

  return [displayedImageIndex, handleMoveToPrevImage, handleMoveToNextImage];
};

export default useImageGallery;
