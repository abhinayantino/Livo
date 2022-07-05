import React from "react";

const ResidentData = ({ images }) => {
   
    const imageStyle = {
        width: "200px",
        height: "200px",
    };
    return (
        <div className="d-flex gap">
            {images?.map((image, index) => {
                return (
                    <img
                        key={index}
                        src={image.url}
                        alt={image.name}
                        style={imageStyle}
                    />
                );
            })}
        </div>
    );
};

export default ResidentData;
