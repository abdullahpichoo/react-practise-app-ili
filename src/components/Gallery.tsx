import React from "react";
import SectionHeading from "./SectionHeading";
const images = [
  "gallery-1.jpg",
  "gallery-2.jpg",
  "gallery-3.jpg",
  "gallery-4.jpg",
  "gallery-5.jpg",
  "gallery-6.jpg",
  "gallery-7.jpg",
  "gallery-8.jpg",
];
const Gallery = () => {
  return (
    <section className="container">
      <SectionHeading
        title="Gallery"
        desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
      />
      <div className="gallery-images">
        <div className="row row-cols-1 row-cols-md-3 g-1">
          {images.map((image, i) => (
            <div className="col" key={i}>
              <div className="overflow-hidden">
                <img
                  src={`assets/img/gallery/${image}`}
                  alt={image}
                  className="img-fluid gallery-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
