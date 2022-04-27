import React from "react";
import propertyImage1 from "../assets/property1.png";
import propertyImage2 from "../assets/property2.png";
import "./imageDetails.css";
import { AiOutlinePlus } from "react-icons/ai";

export default function ImageDetails() {
  return (
    <>
      <div className="image-details">
        <div className="image-upload">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 45.5H18C7.14 45.5 2.5 40.86 2.5 30V18C2.5 7.14 7.14 2.5 18 2.5H30C40.86 2.5 45.5 7.14 45.5 18V30C45.5 40.86 40.86 45.5 30 45.5ZM18 5.5C8.78 5.5 5.5 8.78 5.5 18V30C5.5 39.22 8.78 42.5 18 42.5H30C39.22 42.5 42.5 39.22 42.5 30V18C42.5 8.78 39.22 5.5 30 5.5H18Z"
              fill="#BDBDBD"
            />
            <path
              d="M18 21.5C14.96 21.5 12.5 19.04 12.5 16C12.5 12.96 14.96 10.5 18 10.5C21.04 10.5 23.5 12.96 23.5 16C23.5 19.04 21.04 21.5 18 21.5ZM18 13.5C16.62 13.5 15.5 14.62 15.5 16C15.5 17.38 16.62 18.5 18 18.5C19.38 18.5 20.5 17.38 20.5 16C20.5 14.62 19.38 13.5 18 13.5Z"
              fill="#BDBDBD"
            />
            <path
              d="M5.33954 39.3991C4.85954 39.3991 4.37954 39.1591 4.09954 38.7391C3.63954 38.0591 3.81954 37.1191 4.51954 36.6591L14.3795 30.0391C16.5395 28.5791 19.5195 28.7591 21.4795 30.4191L22.1395 30.9991C23.1395 31.8591 24.8395 31.8591 25.8195 30.9991L34.1395 23.8591C36.2595 22.0391 39.5995 22.0391 41.7395 23.8591L44.9995 26.6591C45.6195 27.1991 45.6995 28.1391 45.1595 28.7791C44.6195 29.3991 43.6795 29.4791 43.0395 28.9391L39.7795 26.1391C38.7795 25.2791 37.0795 25.2791 36.0795 26.1391L27.7595 33.2791C25.6395 35.0991 22.2995 35.0991 20.1595 33.2791L19.4995 32.6991C18.5795 31.9191 17.0595 31.8391 16.0395 32.5391L6.17954 39.1591C5.91954 39.3191 5.61954 39.3991 5.33954 39.3991Z"
              fill="#BDBDBD"
            />
          </svg>
          <div
            style={{
              display: "flex",
              marginTop: "21.5px",
              alignItems: "center",
            }}
          >
            <AiOutlinePlus />
            <p className="Addingimage">Add image</p>
          </div>
        </div>
        <img classname="image" src={propertyImage1} alt="property-Image1" />
        <img classname="image" src={propertyImage2} alt="property-Image2" />
        <img classname="image" src={propertyImage2} alt="property-Image2" />
        <img classname="image" src={propertyImage2} alt="property-Image2" />
      </div>
    </>
  );
}
