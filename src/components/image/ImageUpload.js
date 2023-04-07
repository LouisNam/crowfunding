import axios from "axios";
import { IconUpload } from "components/icons";
import { imgbbAPI } from "config/config";
import React from "react";

const ImageUpload = ({ name = "", onChange = () => {} }) => {
  const handleUploadImage = async (e) => {
    const file = e.target.files;
    if (!file) return;
    const bodyFormData = new FormData();
    bodyFormData.append("image", file[0]);
    const response = await axios({
      method: "POST",
      url: imgbbAPI,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imageData = response.data.data;
    if (!imageData) console.error("Can not upload image to imgbbAPI");
    const imageObj = {
      medium: imageData.medium.url,
      thumb: imageData.thumb.url,
      url: imageData.url,
    };
    onChange(name, imageObj);
  };
  return (
    <label className="w-full h-[200px] rounded-xl border border-gray-200 border-dashed cursor-pointer flex items-center justify-center">
      <input
        type="file"
        name=""
        id=""
        className="hidden"
        onChange={handleUploadImage}
      />
      <IconUpload></IconUpload>
    </label>
  );
};

export default ImageUpload;
