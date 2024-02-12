"use client";

import { useEffect, useState, useRef, memo } from "react";
import ReactCrop, {
  type Crop,
  centerCrop,
  makeAspectCrop,
  PixelCrop,
  PercentCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const ImageCropper = ({
  initialUrl,
  handleCroppedFile,
  clearImgUrl,
}: {
  initialUrl: any;
  handleCroppedFile: (file: File) => void;
  clearImgUrl: () => void;
}) => {
  const [crop, setCrop] = useState<Crop | undefined>(undefined);
  //   const [initialUrl, setUrl] = useState<any>("");
  const [src, setSrc] = useState<any>("");
  // const [aspect, setAspect] = useState<number | undefined>(undefined);
  const [croppedFile, setCroppedFile] = useState<File | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const buttonRef = useRef<any>(null);

  const [width, setWidth] = useState<any>(undefined);
  const [height, setHeight] = useState<any>(undefined);

  useEffect(() => {
    if (initialUrl) {
      setSrc(URL.createObjectURL(initialUrl));
    }
  }, [initialUrl]);

  function centerAspectCrop(
    mediaWidth: number,
    mediaHeight: number,
    aspect: number
  ) {
    return centerCrop(
      makeAspectCrop(
        {
          unit: "%",
          width: 100,
          height: 100,
          x: 0,
          y: 0,
        },
        aspect,
        mediaWidth,
        mediaHeight
      ),
      mediaWidth,
      mediaHeight
    );
  }

  const handleCropUrl = () => {
    if (croppedFile) {
      handleCroppedFile(croppedFile);
      setSrc("");
      setCroppedFile(null);
      imgRef.current = null;
      setCrop(undefined);
      // clearImgUrl();
    }
  };

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { width, height } = e.currentTarget;
    if (imgRef.current) {
      setWidth(width);
      setHeight(height);
      // setAspect(width / height);
      setCrop(centerAspectCrop(width, height, width / height));
    }
  }

  function onImageLoad2() {
    if (!crop) return;
    // Calculate x and y to center the child box within the parent box
    const parentWidth = imgRef.current ? imgRef.current.width : 0;
    const parentHeight = imgRef.current ? imgRef.current.height : 0;
    const childWidth = width;
    const childHeight = height;

    const x = Math.max(0, Math.round((parentWidth - childWidth) / 2));
    const y = Math.max(0, Math.round((parentHeight - childHeight) / 2));

    setWidth(width);
    setHeight(height);
    setCrop(centerAspectCrop(width, height, width / height));
    setCrop((prev: any) => ({
      ...prev,
      height: height,
      width: width,
      x: x,
      y: y,
    }));
    buttonRef.current.click();
  }

  function onCropComplete(crop: any, percentCrop?: PercentCrop) {
    if (imgRef.current) {
      const canvas = document.createElement("canvas");
      const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
      const scaleY = imgRef.current.naturalHeight / imgRef.current.height;

      // Use original image dimensions for canvas size
      canvas.width = imgRef.current.naturalWidth;
      canvas.height = imgRef.current.naturalHeight;

      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.drawImage(
          imgRef.current,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          imgRef.current.naturalWidth, // Use original width
          imgRef.current.naturalHeight // Use original height
        );

        // Convert the entire canvas data to a Blob
        canvas.toBlob(
          (blob) => {
            if (blob) {
              // Create a new File object with the same metadata as the original image
              const originalFile = initialUrl as File;

              const quality = 0.8; // Adjust the quality (0.0 - 1.0) as needed
              const mimeType = "image/jpeg"; // Specify desired image format

              // Convert the Blob to a new File with the specified quality and format
              const croppedFile = new File([blob], originalFile.name, {
                type: mimeType,
                lastModified: originalFile.lastModified,
              });

              setCroppedFile(croppedFile);
            }
          },
          "image/jpeg", // Specify desired image format
          0.8 // Adjust the quality (0.0 - 1.0) as needed
        );
      }
    }
  }

  useEffect(() => {
    if (crop && width && height && buttonRef.current) {
      onImageLoad2();
      onCropComplete(crop);
    }
  }, [width, height, crop]);

  return (
    <>
      <div className="mb-2 font-semibold text-black/90 text-lg">Crop Image</div>
      <div className="w-fit m-auto">
        <ReactCrop
          className="max-h-[60vh]"
          crop={crop}
          onChange={(c) => setCrop(c)}
          onComplete={onCropComplete}
        >
          <img ref={imgRef} src={src} onLoad={onImageLoad} />
        </ReactCrop>
      </div>
      <div className="flex justify-end gap-3 items-center mt-2">
        <button ref={buttonRef} onClick={handleCropUrl}>
          Done
        </button>
      </div>
    </>
  );
};
const MemoizedImageCropper = memo(ImageCropper);
export default MemoizedImageCropper;
