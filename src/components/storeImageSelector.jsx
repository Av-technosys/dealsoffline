import { CameraIcon, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function StoreImageSelector() {
  const [userImage, setUserImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!userImage) return;
    const objectUrl = URL.createObjectURL(userImage);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [userImage]);

  function handleImageUpload(e) {
    if (e.target.files.length > 0) {
      setUserImage(e.target.files[0]);
    }
  }

  function removeImage() {
    setUserImage(null);
    setPreview(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function triggerFileInput() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  return (
    <div className="max-w-44 md:max-w-60 w-full relative items-center justify-center aspect-square flex shrink-0 flex-col gap-4 border border-gray-600 rounded-md">
      {preview ? (
        <img
          src={preview}
          className="h-full rounded-md w-full object-cover"
          alt="User uploaded"
        />
      ) : (
        <p className="text-center text-gray-600 p-4">Upload your image here</p>
      )}

      <div
        onClick={triggerFileInput}
        className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 size-16 bg-primary-red p-1 flex items-center justify-center rounded-full cursor-pointer"
      >
        <CameraIcon className="text-white" size={36} />
      </div>

      {userImage && (
        <div
          onClick={removeImage}
          className="bg-gray-50 -translate-y-1/2 translate-x-1/2 absolute top-0 right-0 p-1.5 cursor-pointer z-10 border rounded-full"
        >
          <X size={16} />
        </div>
      )}

      <input
        ref={fileInputRef}
        onChange={handleImageUpload}
        type="file"
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}

export default StoreImageSelector;
