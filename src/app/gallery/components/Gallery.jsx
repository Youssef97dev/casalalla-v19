"use client";
import React from "react";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Link from "next/link";

const images = [
  {
    src: "/gallery/gallery-1.jpg",
  },
  {
    src: "/gallery/gallery-2.jpg",
  },
  {
    src: "/gallery/gallery-3.jpg",
  },
  {
    src: "/gallery/gallery-4.jpg",
  },
  {
    src: "/images/activities-slide-2.jpg",
  },
  {
    src: "/images/activities-slide-3.jpg",
  },
  {
    src: "/images/activities-slide-7.jpg",
  },
  {
    src: "/images/about-large.jpg",
  },
  {
    src: "/images/gallery-3.jpeg",
  },
  {
    src: "/gallery/gallery-5.jpg",
  },
  {
    src: "/gallery/gallery-6.jpg",
  },
  {
    src: "/gallery/gallery-7.jpg",
  },
  {
    src: "/gallery/gallery-8.jpg",
  },
  {
    src: "/images/gallery-2.jpeg",
  },
  {
    src: "/gallery/gallery-9.jpg",
  },
  {
    src: "/images/book-mobile.jpg",
  },
  {
    src: "/gallery/gallery-10.jpg",
  },
  {
    src: "/gallery/gallery-11.jpg",
  },
  {
    src: "/gallery/gallery-12.jpg",
  },
  {
    src: "/gallery/gallery-13.jpg",
  },
  {
    src: "/gallery/gallery-14.jpg",
  },
  {
    src: "/gallery/gallery-15.jpg",
  },
  {
    src: "/gallery/gallery-16.jpg",
  },
  {
    src: "/gallery/gallery-17.jpg",
  },
  {
    src: "/gallery/gallery-18.jpg",
  },
  {
    src: "/images/hero-casalalla-large.jpg",
  },
  {
    src: "/gallery/gallery-19.jpg",
  },
];

const MemoizedImage = React.memo(({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    width={300}
    height={300}
    loading="lazy" // Lazy loading
    className="rounded-sm w-full h-full"
  />
));

// Setting the display name for the MemoizedImage component
MemoizedImage.displayName = "MemoizedImage";

const Gallery = () => {
  return (
    <div id="gallery" className="w-full  py-5 px-4 ">
      <LightGallery
        speed={500}
        plugins={[lgThumbnail]}
        elementClassNames="masonry"
      >
        {images.map((image, index) => (
          <Link href={image.src} key={index}>
            <div className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden">
              <MemoizedImage
                src={`${image.src}`}
                alt={`Restaurants à Lalla takerkoust, Restaurants à Marrakech, Restaurants à Agafay, Restaurants à Imlil, Restaurants Désert Agafay, Restaurants Montagnes Atlas, Riad Marrakech, Hotel Riad Casa Lalla`}
              />
            </div>
          </Link>
        ))}
      </LightGallery>
    </div>
  );
};

export default Gallery;
