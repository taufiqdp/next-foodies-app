"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { IoCloudUploadOutline } from "react-icons/io5";

export default function ImagePicker({ label, name }) {
  const [pickImage, setPickImage] = useState(null);

  const imageInput = useRef();

  function handlerPickClick() {
    imageInput.current.click();
  }

  function handlerImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  function handlerRemoveImage() {
    setPickImage(null);
  }

  return (
    <div className="flex flex-col items-center justify-center md:w-[300px] md:h-[300px]">
      <label htmlFor={name} className="block text-rose-50 mb-2 text-center">
        {label}
      </label>

      {!pickImage ? (
        <>
          <input
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            ref={imageInput}
            className="hidden"
            onChange={handlerImageChange}
          />
          <button
            type="button"
            onClick={handlerPickClick}
            className="flex flex-col items-center text-rose-50 hover:underline hover:underline-offset-4 "
          >
            <IoCloudUploadOutline className="w-12 h-12" />
            <p>Upload Image</p>
          </button>
        </>
      ) : (
        <div
          className="relative w-full h-full overflow-hidden rounded-md hover:cursor-pointer"
          onClick={handlerRemoveImage}
        >
          <Image
            src={pickImage}
            alt="Image selected"
            layout="responsive"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>
      )}
    </div>
  );
}
